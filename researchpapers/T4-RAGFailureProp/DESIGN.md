# T4 Research Design Document
## Failure Propagation in Agentic RAG Pipelines

**Track:** T4-RAGFailureProp  
**Venue:** AAAI 2027 (primary, deadline Aug 1 2026); Expert Systems with Applications (journal, rolling)  
**Extends:** Setty et al., arXiv:2404.07221 — *Improving Retrieval for RAG-based QA on Financial Documents*  
**Code:** `researchcode/Benchmarking-RAG/failure_propagation/` (initial scaffold from issue #22)

---

## 1. Research Question

> **How do retrieval errors propagate through multi-step agentic RAG pipelines — do they compound, get self-corrected, or remain isolated — and which pipeline stages are most responsible?**

Prior work (including arXiv:2404.07221) evaluates single-step RAG: retrieve once, generate once, score the output. Real enterprise deployments increasingly embed RAG inside *agentic* pipelines where multiple steps depend on each other's output — a query decomposer feeds a retriever, a re-ranker filters results, a generator synthesizes context, a verifier checks the answer. A retrieval error at step 1 may silently corrupt every downstream step, or it may be caught and corrected — but we have no systematic understanding of which pattern dominates, or why.

---

## 2. Hypotheses

**H1 — Compounding is the dominant pattern.**  
The majority of injected retrieval errors will compound across pipeline steps (final output quality degrades further than immediate post-injection quality), because each step conditions on the previous step's output with no independent signal to detect or recover from the bad context.

**H2 — Longer pipelines self-correct more often than shorter ones.**  
Pipelines with explicit verification steps (3-step, 4-step, 5-step) will show meaningfully higher self-correction rates than 2-step pipelines, because the verifier provides an additional opportunity to detect low-grounding answers and trigger revision.

**H3 — Hallucinated-chunk errors compound more severely than empty-retrieval errors.**  
Empty retrieval is easily detectable (no context returned), so generators tend to produce a hedged/null answer that doesn't compound. Hallucinated chunks are syntactically plausible and harder to detect, so they propagate further into generation and verification before being caught — if ever.

---

## 3. Agentic Pipeline Testbed

Five configurations are defined in `failure_propagation/pipeline.py`, matching increasing pipeline depth:

| Config | Steps | Notes |
|---|---|---|
| `2-step` | retrieve → generate | Minimal baseline |
| `3-step` | retrieve → generate → verify | Adds grounding check |
| `4-step-rerank` | retrieve → rerank → generate → verify | Adds semantic reordering |
| `4-step-no-rerank` | decompose → retrieve → generate → verify | Adds query decomposition |
| `5-step` | decompose → retrieve → rerank → generate → verify | Full agentic pipeline |

### Step Definitions

- **Decompose:** Splits a multi-part query into sub-questions. In the real-data phase (issue #23), this will use an LLM; in the offline scaffold it uses a heuristic split.
- **Retrieve:** Vector search over a domain corpus (TF-IDF offline; OpenAI `text-embedding-ada-002` + Chroma for real-data runs, matching `base_rag.py`). This is the step where failure is injected.
- **Rerank:** Reorders retrieved chunks by query-term overlap (offline) or a cross-encoder (real-data).
- **Generate:** Produces an answer from the assembled context. Offline: extractive (most query-similar sentence). Real-data: GPT-4o via `get_assistant_response` from `base_rag.py`.
- **Verify:** Checks whether the generated answer is grounded in the retrieved context (cosine similarity threshold). If grounding is too low, attempts a correction by re-generating from the top chunk. This is the main self-correction mechanism.

---

## 4. Failure Injection Methodology

Implemented in `failure_propagation/failure_injection.py`. Injection always targets the top-ranked retrieved chunk (index 0), since it has the greatest influence on downstream generation.

| Error Type | What it simulates | How injected |
|---|---|---|
| `wrong_chunk` | Retrieval returns a topically irrelevant document | Replace top chunk with a randomly sampled chunk from a different domain |
| `partial_chunk` | Retrieval returns a truncated/corrupted chunk | Truncate top chunk to 30% of original length |
| `hallucinated_chunk` | Retrieval returns a plausible-sounding but fabricated passage | Replace top chunk with synthetic text not sourced from the corpus |
| `empty_retrieval` | Retrieval returns no results | Return an empty chunk list |

Each query is run once per error type (perturbed) and once with no injection (clean baseline). Propagation classification compares the perturbed trace against its matched baseline.

---

## 5. Propagation Tracking

Implemented in `failure_propagation/tracking.py` and `detection.py`.

For each pipeline step, we record the step's output text. After both the baseline and perturbed runs complete, we compute a **fidelity score** at each step — the cosine similarity (TF-IDF) between the perturbed run's step output and the baseline's corresponding step output. A fidelity of 1.0 means the step's output was unaffected; 0.0 means it produced a completely different output.

The **fidelity sequence** from the injection step onward determines the propagation label:

| Pattern | Detection criterion |
|---|---|
| `self_correcting` | Final fidelity > injection fidelity + 0.2 (downstream steps recover) |
| `compounding` | Final fidelity < injection fidelity − 0.05 (deviation grows) |
| `isolated` | Max − min fidelity across all post-injection steps ≤ 0.05 (deviation stays flat) |
| `ambiguous` | None of the above clearly apply |

---

## 6. Intervention Taxonomy

Implemented in `failure_propagation/intervention.py`.

Across all runs classified as `compounding`, we identify which pipeline step shows the **largest step-to-step fidelity drop** most frequently. That step is the recommended intervention point — i.e., where inserting a grounding check would most often interrupt the error propagation chain.

Two intervention mechanisms are proposed for the paper's results section:

1. **Context re-retrieval trigger:** After generation, if the answer's grounding score (answer-to-context similarity) falls below a threshold, discard the current context and re-retrieve using the generated answer as a new query (iterative RAG). This specifically targets `generate` as an intervention point.
2. **Chunk validation gate:** Before passing retrieved chunks to the generator, score each chunk against the query using a cross-encoder and drop any chunk below a minimum relevance score. This specifically targets `retrieve`/`rerank` as intervention points.

The paper will measure the compounding rate *with* each intervention enabled vs. the baseline compounding rate.

---

## 7. Experimental Setup (for issue #23)

### Domains and Datasets

| Domain | Dataset | Size (suggested) |
|---|---|---|
| Finance | [FinanceBench](https://huggingface.co/datasets/PatronusAI/financebench) | 150 Q&A pairs |
| Legal | [CUAD](https://huggingface.co/datasets/cuad) | 150 Q&A pairs |
| Medical | [PubMedQA](https://huggingface.co/datasets/qiaojin/PubMedQA) | 150 Q&A pairs |

### Experimental Matrix

- **5** pipeline configurations × **4** error types × **3** domains × **150** queries = **9,000** runs
- Each run: 1 baseline + 1 perturbed pass = **18,000** pipeline executions total
- LLM calls per run: 1 (generate) + 1 (verify) + 1 (LLM eval) = ~3 per run → ~54,000 GPT-4o calls

### Evaluation Metrics

- **Propagation rate** (per error type, per config): % of runs classified as compounding / self-correcting / isolated
- **Final answer accuracy:** LLM-as-judge score (0–1) comparing pipeline answer to reference answer (reuses `evaluate_llm_responses` from `base_rag.py`)
- **Intermediate step accuracy:** same LLM eval applied at each step's output (not just final), to measure where quality diverges
- **Compounding magnitude:** mean fidelity drop from injection step to final step in compounding runs
- **Intervention effectiveness:** Δ compounding rate with each intervention enabled

### Key Figures / Tables for Paper

1. **Table 1:** Propagation rates by error type and pipeline config (fills in X%, Y%, Z% in `main.tex` abstract)
2. **Figure 1:** Per-step fidelity curves averaged across runs (one subplot per pipeline config) — shows *where* errors amplify
3. **Figure 2:** Intervention effectiveness — grouped bar chart of compounding rate with/without each intervention, by error type
4. **Table 2:** Domain comparison of propagation rates (finance vs. legal vs. medical)

---

## 8. Related Work Gaps (for Introduction / Related Work sections)

- arXiv:2404.07221 (Setty et al.) studies single-step retrieval quality on FinanceBench — this paper extends that to multi-step agentic propagation
- Lewis et al. (NeurIPS 2020) introduced the RAG framework but does not study error propagation
- ToolBench / BFCL evaluate tool-calling accuracy but not error propagation across steps
- Studies on cascading errors in NLP pipelines (e.g., MT + summarization) provide methodological precedent but do not address retrieval-grounded generation

---

## 9. Open Questions / Risks

| Question | Risk level | Mitigation |
|---|---|---|
| Will 150 queries per domain give enough statistical power to differentiate propagation rates across configs? | Medium | Run power analysis on pilot data (10–20 queries) before full run |
| CUAD is contract QA — does it have the right format for retrieval-grounded generation? | Low | FinanceBench is the primary domain; CUAD and PubMedQA are secondary |
| LLM-as-judge cost for 18,000 runs may be significant | Medium | Use GPT-4o-mini for intermediate steps, GPT-4o for final eval only |
| Cross-encoder for rerank step requires additional model download | Low | Default to TF-IDF rerank offline; use `cross-encoder/ms-marco-MiniLM-L-6-v2` for real runs |
