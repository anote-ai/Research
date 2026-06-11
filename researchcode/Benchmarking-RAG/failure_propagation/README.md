# Failure Propagation in Agentic RAG Pipelines (T4 — initial code)

Initial scaffold for [issue #22](https://github.com/anote-ai/Research/issues/22)
("[T4] RAG Failure Propagation: Write Initial Code"), part of the
[T4-RAGFailureProp](../../../researchpapers/T4-RAGFailureProp/) paper track.

This package implements a small, fully offline testbed (no API keys required)
for studying how a controlled retrieval error propagates through a multi-step
agentic RAG pipeline. It extends the retrieval/evaluation primitives in
[`base_rag.py`](../base_rag.py) and [`fake_rag.py`](../fake_rag.py) with a
configurable multi-step pipeline, failure injection, propagation tracking,
detection, and intervention-point analysis.

## Mapping to issue #22 tasks

- **Multi-step agentic RAG pipeline (3-5 steps):** [`pipeline.py`](pipeline.py)
  defines five configurations (`2-step` through `5-step`) built from
  `decompose`, `retrieve`, `rerank`, `generate`, and `verify` steps.
- **Controlled failure injection:** [`failure_injection.py`](failure_injection.py)
  implements the four error types from the paper draft: wrong chunk, partial
  chunk, hallucinated chunk, and empty retrieval.
- **Propagation tracking:** [`tracking.py`](tracking.py) records each step's
  output text and a per-step "fidelity" score (similarity to a clean baseline
  run of the same query/config).
- **Propagation detection algorithms:** [`detection.py`](detection.py)
  classifies each perturbed run as `compounding`, `self_correcting`,
  `isolated`, or `ambiguous` based on how the fidelity sequence evolves after
  the injection point.
- **Intervention point detector:** [`intervention.py`](intervention.py)
  aggregates compounding runs to recommend which pipeline step most often
  needs a grounding/verification check.
- **Extends existing RAG code:** [`retrieval.py`](retrieval.py) provides a
  TF-IDF retriever and text-similarity helper in the same spirit as the
  cosine-similarity utilities in `base_rag.py`, but dependency-light so this
  testbed runs without OpenAI/Chroma.

## Running the experiment

```bash
python -m failure_propagation.run_experiment [output_csv]
```

This runs every (pipeline config x query x error type) combination over the
synthetic 3-domain corpus in [`corpus.py`](corpus.py) (finance/legal/medical,
matching the domains proposed in the paper draft), writes per-run results to
`propagation_results.csv`, and prints summary tables plus intervention
recommendations.

## Notes / next steps

- Generation is currently a small extractive "mock LLM" (most query-similar
  sentence from the retrieved context), which keeps results deterministic and
  offline. A real-LLM variant can reuse `get_assistant_response` from
  `base_rag.py`.
- The synthetic corpus and queries are intentionally small for fast iteration;
  swapping in FinanceBench/CUAD/PubMedQA documents (as proposed in the paper
  draft) is the natural next step for generating publishable results (issue
  #23).
