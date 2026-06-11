"""Multi-step agentic RAG pipeline testbed.

Five pipeline configurations are provided, matching the design sketched in
researchpapers/T4-RAGFailureProp/main.tex ("2-step, 3-step, 4-step with/without
re-ranking"), plus a 5-step configuration that combines query decomposition,
retrieval, re-ranking, generation, and verification.

Generation is a small extractive "mock LLM" (most query-similar sentence from
the retrieved context) so the pipeline runs fully offline without API keys.
This keeps the failure-injection -> propagation-tracking loop deterministic
and fast; researchcode/Benchmarking-RAG/base_rag.py shows how to swap in a
real LLM call (get_assistant_response) for a non-mocked run.
"""

import re
from dataclasses import dataclass, field
from typing import List, Optional

from .failure_injection import FailureInjector
from .retrieval import TfidfRetriever, text_similarity
from .tracking import PropagationTrace, TraceStep

PIPELINE_CONFIGS = {
    "2-step": ["retrieve", "generate"],
    "3-step": ["retrieve", "generate", "verify"],
    "4-step-rerank": ["retrieve", "rerank", "generate", "verify"],
    "4-step-no-rerank": ["decompose", "retrieve", "generate", "verify"],
    "5-step": ["decompose", "retrieve", "rerank", "generate", "verify"],
}

# The step where retrieval failures are injected. Used by the propagation
# detectors to know which point in the trace marks the start of an error.
INJECTION_STEP = "retrieve"


@dataclass
class PipelineState:
    query: str
    sub_queries: List[str] = field(default_factory=list)
    retrieved_chunks: List[str] = field(default_factory=list)
    context: str = ""
    answer: str = ""
    revised: bool = False


@dataclass
class StepContext:
    retriever: TfidfRetriever
    injector: FailureInjector
    error_type: Optional[str]
    is_baseline: bool


def _step_decompose(state: PipelineState, ctx: StepContext) -> str:
    """Naively splits a multi-part query into sub-questions on " and "."""
    parts = [p.strip() for p in re.split(r"\band\b", state.query) if p.strip()]
    state.sub_queries = parts if len(parts) > 1 else [state.query]
    return " | ".join(state.sub_queries)


def _step_retrieve(state: PipelineState, ctx: StepContext) -> str:
    queries = state.sub_queries or [state.query]
    chunks: List[str] = []
    for q in queries:
        chunks.extend(ctx.retriever.retrieve(q, top_k=2))

    seen = set()
    deduped = []
    for chunk in chunks:
        if chunk not in seen:
            deduped.append(chunk)
            seen.add(chunk)

    if not ctx.is_baseline:
        deduped = ctx.injector.apply(deduped, ctx.error_type)

    state.retrieved_chunks = deduped
    state.context = "\n".join(deduped)
    return state.context


def _step_rerank(state: PipelineState, ctx: StepContext) -> str:
    query_terms = set(state.query.lower().split())

    def overlap(chunk: str) -> int:
        return len(query_terms & set(chunk.lower().split()))

    state.retrieved_chunks = sorted(state.retrieved_chunks, key=overlap, reverse=True)
    state.context = "\n".join(state.retrieved_chunks)
    return state.context


def _step_generate(state: PipelineState, ctx: StepContext) -> str:
    if not state.context.strip():
        state.answer = "I could not find relevant information to answer this question."
        return state.answer

    sentences = [s.strip() for s in re.split(r"(?<=[.!?])\s+", state.context) if s.strip()]
    state.answer = max(sentences, key=lambda s: text_similarity(s, state.query))
    return state.answer


def _step_verify(state: PipelineState, ctx: StepContext) -> str:
    """Checks whether the answer is grounded in the retrieved context.

    If grounding is too low, falls back to the first retrieved sentence as a
    simple correction -- this is the mechanism by which a "self-correcting"
    propagation pattern can emerge in a run that had a bad retrieval.
    """
    grounding = text_similarity(state.answer, state.context)
    if grounding < 0.15 and state.context.strip():
        sentences = [s.strip() for s in re.split(r"(?<=[.!?])\s+", state.context) if s.strip()]
        if sentences:
            state.answer = sentences[0]
            state.revised = True
    return state.answer


STEP_REGISTRY = {
    "decompose": _step_decompose,
    "retrieve": _step_retrieve,
    "rerank": _step_rerank,
    "generate": _step_generate,
    "verify": _step_verify,
}


class AgenticRAGPipeline:
    def __init__(self, config_name: str, retriever: TfidfRetriever, injector: FailureInjector):
        if config_name not in PIPELINE_CONFIGS:
            raise ValueError(f"Unknown pipeline config: {config_name}")
        self.config_name = config_name
        self.steps = PIPELINE_CONFIGS[config_name]
        self.retriever = retriever
        self.injector = injector

    def run(self, query: str, error_type: Optional[str] = None, is_baseline: bool = False):
        state = PipelineState(query=query)
        ctx = StepContext(self.retriever, self.injector, error_type, is_baseline)
        trace = PropagationTrace(query=query, config_name=self.config_name, error_type=error_type)

        for step_name in self.steps:
            output = STEP_REGISTRY[step_name](state, ctx)
            trace.steps.append(TraceStep(name=step_name, output_text=output))

        return state, trace
