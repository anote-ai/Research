# Anote AI Research

Research papers, benchmark code, presentations, and planning resources from the **Anote AI Research Fellowship**.

The fellowship goal is to produce publishable research across NLP, RAG, agentic AI, and annotation efficiency, with each paper producing a reusable open-source artifact.

## At a Glance

| Area | What is here |
|------|--------------|
| Active research | 7 Summer 2026 paper tracks with LaTeX starters, research questions, venues, and tracking issues |
| Backlog | 18 additional paper ideas for future fellowship cohorts |
| Benchmark code | Experiments for RAG, text classification, question answering, and object detection |
| Research assets | Prior papers, presentations, and video talks for onboarding and background reading |
| Program tracking | A spreadsheet with paper ideas, deadlines, venues, owners, and progress |

## Start Here

| If you are... | Start with... |
|---------------|---------------|
| A fellowship intern | Pick your track in [Active Papers](#active-papers--fellowship-summer-2026), read the linked issues, then follow the [Intern Workflow](#intern-workflow) |
| A researcher reviewing scope | Skim the active and backlog paper tables to understand the research roadmap |
| Looking for reusable code | Browse [`researchcode/`](./researchcode/) by benchmark area |
| Looking for paper drafts | Open the relevant `main.tex` under [`researchpapers/`](./researchpapers/) |
| Looking for background material | Review [`researchpresentations/`](./researchpresentations/) and the [Video Talks](#video-talks) |

See [`anote_fellowship_tracker.xlsx`](./anote_fellowship_tracker.xlsx) for the full tracker with 25 paper ideas, deadlines, venues, and progress.

---

## Active Papers — Fellowship Summer 2026

7 primary paper tracks for the Summer 2026 intern cohort. Each has 4 GitHub issues (idea, code, results, paper repo).

| Track | Paper | Research Question | Venue | Issues |
|-------|-------|-------------------|-------|--------|
| T1a | [AgenticEval](./researchpapers/T1a-AgenticEval/) | Does BFCL rank predict enterprise trustworthiness? | AAAI 2027 | [#1–4](https://github.com/anote-ai/Research/issues?q=label%3AT1a-AgenticEval) |
| T1b | [EnterpriseSynth](./researchpapers/T1b-EnterpriseSynth/) | Can we generate agentic SFT data from API schemas without live execution? | AAAI 2027 | [#5–8](https://github.com/anote-ai/Research/issues?q=label%3AT1b-EnterpriseSynth) |
| T2a | [AnnotateBench](./researchpapers/T2a-AnnotateBench/) | How much labeled data do annotation strategies need across NLP tasks? | AAAI 2027 | [#9–12](https://github.com/anote-ai/Research/issues?q=label%3AT2a-AnnotateBench) |
| T2b | [AnnotateROI](./researchpapers/T2b-AnnotateROI/) | How should enterprises measure annotation ROI? | AAAI 2027 | [#13–16](https://github.com/anote-ai/Research/issues?q=label%3AT2b-AnnotateROI) |
| T3 | [Human-AI Teaming](./researchpapers/T3-HumanAITeaming/) | How does human-AI collaboration protocol affect downstream model behavior? | AAAI 2027 | [#17–20](https://github.com/anote-ai/Research/issues?q=label%3AT3-HumanAI) |
| T4 | [RAG Failure Prop.](./researchpapers/T4-RAGFailureProp/) | How do retrieval errors propagate through agentic RAG pipelines? | AAAI 2027 | [#21–24](https://github.com/anote-ai/Research/issues?q=label%3AT4-RAGFailure) |
| T5 | [RetrievalBench](./researchpapers/T5-RetrievalBench/) | Which retrieval combination generalizes across domains? | SIGIR 2027 | [#25–28](https://github.com/anote-ai/Research/issues?q=label%3AT5-RetrievalBench) |

---

## Backlog Papers (T6–T23)

18 additional research ideas for future intern cohorts. Each has a GitHub issue to track.

| Track | Paper | Research Question |
|-------|-------|-------------------|
| T6 | [FineTuneBench](https://github.com/anote-ai/Research/issues/29) | When does fine-tuning outperform RAG for domain QA? |
| T7 | [MultiHopRAG](https://github.com/anote-ai/Research/issues/30) | Can agentic decomposition improve multi-hop retrieval? |
| T8 | [TableRAG](https://github.com/anote-ai/Research/issues/31) | How can RAG be specialized for tabular financial data? |
| T9 | [EmbedBench](https://github.com/anote-ai/Research/issues/32) | How do embedding models compare across enterprise domains? |
| T10 | [LLMClassifyBench](https://github.com/anote-ai/Research/issues/33) | LLMs vs. fine-tuned models for classification under domain shift? |
| T11 | [PrivacyRAG](https://github.com/anote-ai/Research/issues/34) | RAG without exposing sensitive entities to the LLM? |
| T12 | [AgentMemory](https://github.com/anote-ai/Research/issues/35) | Which memory architecture best supports long-horizon agents? |
| T13 | [SLMFineTune](https://github.com/anote-ai/Research/issues/36) | Which PEFT method works best for enterprise domain adaptation? |
| T14 | [NERBench](https://github.com/anote-ai/Research/issues/37) | How much annotation for expert NER in clinical/legal/finance? |
| T15 | [ChunkingTheory](https://github.com/anote-ai/Research/issues/38) | Can we auto-select chunking strategy from document features? |
| T16 | [AgenticOrchestration](https://github.com/anote-ai/Research/issues/39) | Which multi-agent pattern works best for enterprise tasks? |
| T17 | [SyntheticEval](https://github.com/anote-ai/Research/issues/40) | Can synthetic evaluation datasets reliably rank LLMs? |
| T18 | [HallucinationRAG](https://github.com/anote-ai/Research/issues/41) | Which mitigation strategies reduce RAG hallucination most? |
| T19 | [MultiDocRAG](https://github.com/anote-ai/Research/issues/42) | How can RAG synthesize answers across multiple documents? |
| T20 | [PromptStability](https://github.com/anote-ai/Research/issues/43) | How sensitive are LLM classifiers to prompt paraphrase? |
| T21 | [ActiveRAG](https://github.com/anote-ai/Research/issues/44) | Active learning for RAG knowledge base curation? |
| T22 | [LLMDataAug](https://github.com/anote-ai/Research/issues/45) | When does LLM data augmentation help vs. hurt? |
| T23 | [OntologyRAG](https://github.com/anote-ai/Research/issues/46) | Can domain ontologies improve retrieval for medicine and law? |

---

## Repository Structure

```
Research/
├── anote_fellowship_tracker.xlsx   # Master tracker (25 paper ideas)
├── main.tex                        # Reference LaTeX template (RAG paper)
├── researchpapers/
│   ├── T1a-AgenticEval/main.tex    # LaTeX starter for each active paper
│   ├── T1b-EnterpriseSynth/main.tex
│   ├── T2a-AnnotateBench/main.tex
│   ├── T2b-AnnotateROI/main.tex
│   ├── T3-HumanAITeaming/main.tex
│   ├── T4-RAGFailureProp/main.tex
│   ├── T5-RetrievalBench/main.tex
│   ├── classification.pdf
│   ├── questionanswering.pdf
│   └── retrieval.pdf               # arXiv:2404.07221
├── researchcode/
│   ├── Benchmarking-RAG/
│   ├── Benchmarking-Text-Classification/
│   ├── Benchmarking-Question-Answering/
│   └── Benchmarking-ObjectDetection/
└── researchpresentations/
    ├── RAG.pdf
    ├── TextClassification.pdf
    ├── AI_Talk.pdf
    └── HumanCenteredAI.pdf
```

## Intern Workflow

1. **Read** the GitHub issue for your track (start with the idea improvement issue)
2. **Design** — write a Research Design Doc and link it in the tracker spreadsheet
3. **Code** — build experiments, link code repo in tracker
4. **Results** — run experiments, produce tables/figures
5. **Paper** — fill in `researchpapers/<track>/main.tex` with your results
6. **Repo** — create a standalone paper repo ([reference structure](https://github.com/nv78/Benchmarking-Computer-Vision-Models))
7. **Update** — update `anote_fellowship_tracker.xlsx` with all URLs and status

## Publishing Ops

Use [`researchops/`](./researchops/) as the central operating guide for where each research asset should go.

- Papers and code should be centralized in this repo first.
- Paper landing content should be prepared for `anote.ai/research`.
- Research blog content should be prepared for `anote.ai/blog` and Medium.
- Research presentations should be prepared for `anote.ai/researchTalks`.
- Social launch copy should be tracked in the external social spreadsheet.

Start with:

- [`researchops/README.md`](./researchops/README.md)
- [`researchops/conference-submission-checklist.md`](./researchops/conference-submission-checklist.md)
- [`researchops/templates/paper-release-packet-template.md`](./researchops/templates/paper-release-packet-template.md)
- [`researchops/templates/intern-outreach-template.md`](./researchops/templates/intern-outreach-template.md)
- [`researchops/papers/`](./researchops/papers/)

---

## Video Talks

| Topic | Video |
|-------|-------|
| Fine Tuning LLMs | [YouTube](https://www.youtube.com/watch?v=mMmaTMuRZmo) |
| Benchmarking Text Classification | [YouTube](https://www.youtube.com/watch?v=IakXvvdaNJQ) |
| Benchmarking Q&A Models | [YouTube](https://www.youtube.com/watch?v=sppn68PirPQ) |
| Human Centered AI | [YouTube](https://www.youtube.com/watch?v=ZoAsXKLPyuo) |
| Improving Retrieval for Q&A | [YouTube](https://www.youtube.com/watch?v=a2hQrg2OZ-o) |
| Few Shot Learning Ted Talk | [YouTube](https://www.youtube.com/watch?v=7I_pBLjMNzs) |
