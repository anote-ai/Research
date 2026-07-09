# Anote AI Research

Research papers, benchmark code, presentations, and planning resources from the **Anote AI Research Fellowship**.

The fellowship goal is to produce publishable research across NLP, RAG, agentic AI, and annotation efficiency, with each paper producing a reusable open-source artifact.

## At a Glance

| Area | What is here |
|------|--------------|
| Active research | 14 current paper projects from the revised 2026 research plan, with owners, fellows, repos, and target venues |
| Paper repos | Standalone `anote-ai` repositories for each live paper, benchmark, or applied research thread |
| Benchmark code | Experiments for RAG, text classification, question answering, and object detection |
| Research assets | Prior papers, presentations, and video talks for onboarding and background reading |
| Program tracking | Spreadsheets with paper matching, deadlines, venues, owners, and publishing status |

## Start Here

| If you are... | Start with... |
|---------------|---------------|
| A fellowship intern | Find your paper in [Current Papers](#current-papers--revised-2026-research-plan), then complete your release packet in [`researchops/papers/`](./researchops/papers/) |
| A researcher reviewing scope | Skim the current paper table to understand the active research portfolio |
| Looking for reusable code | Browse [`researchcode/`](./researchcode/) by benchmark area |
| Looking for paper drafts | Open the relevant `main.tex` under [`researchpapers/`](./researchpapers/) |
| Looking for background material | Review [`researchpresentations/`](./researchpresentations/) and the [Video Talks](#video-talks) |

See [`anote_fellowship_tracker.xlsx`](./anote_fellowship_tracker.xlsx) and the matching spreadsheet for the latest deadlines, venues, owners, and submission progress.

---

## Current Papers — Revised 2026 Research Plan

This table reflects the current paper-level organization from the fellowship matching spreadsheet. Several papers now split out of the original 7 track-level starters into standalone repos and venue-specific submissions.

| # | Paper | Repo | Fellow(s) | Track | Owner | Target Venue(s) |
|---|---|---|---|---|---|---|
| 1 | EnterpriseBench: Do Syntactic Tool-Calling Benchmarks Predict Deployment Trustworthiness? | [research-enterprisebench](https://github.com/anote-ai/research-enterprisebench) | Aye Oyemami | T1a AgenticEval | Spurthi | DAI 2026 Industry Track + AAAI 2027 |
| 2 | Intent Specification as a First-Class Evaluation Object for Tool-Calling Agents | [research-intentspecification](https://github.com/anote-ai/research-intentspecification) | Susana Haing | T1a AgenticEval | Spurthi | EACL 2027 Industry Track + AAAI 2027 (reach) |
| 3 | EnterpriseSynth: Agentic SFT + Eval Data from API Schemas Without Live Execution | [research-enterprisesynth](https://github.com/anote-ai/research-enterprisesynth), [Research-Enterprise-Synth-API](https://github.com/anote-ai/Research-Enterprise-Synth-API) | Rashmi Thimmaraju | T1b EnterpriseSynth | Spurthi | MLinPL 2026 + AAAI 2027 |
| 4 | RetrievalBench: Cross-Domain Ablation of RAG Techniques over Structured Documents | [research-retrievalbench](https://github.com/anote-ai/research-retrievalbench) | Hannah Liang, Zirui Han | T5 RetrievalBench | Spurthi | EMNLP AKBC + AAAI 2027 |
| 5 | Financial Document Retrieval: Controlled Ablation of Chunking, Reranking & Metadata | [research-financialdocumentretrieval](https://github.com/anote-ai/research-financialdocumentretrieval) | Elaine Hong, Ebuka Chidubem Uzoama | T5 RetrievalBench | Spurthi | EMNLP FinNLP |
| 6 | Which RAG Techniques Generalize? Legal Contract Retrieval over CUAD | [research-raggeneralization](https://github.com/anote-ai/research-raggeneralization) | Sindhu Shetty | T5 RetrievalBench | Spurthi | EMNLP NLLP |
| 7 | Does Document Structure Predict Metadata-Annotation Value in RAG? | [research-metadataannotation](https://github.com/anote-ai/research-metadataannotation) | Victoria Piroian | T5 RetrievalBench | Spurthi | ENCODE 2026 |
| 8 | Failure Propagation in Agentic RAG Pipelines: A Diagnostic Benchmark | [research-agenticrag](https://github.com/anote-ai/research-agenticrag) | Lauren Pothuru | T4 RAG Failure | Spurthi | EMNLP ORACLE |
| 9 | AnnotateBench: How Much Labeled Data Do Annotation Strategies Need Across NLP Tasks? | [research-annotatebench](https://github.com/anote-ai/research-annotatebench) | Aitong Zhang | T2a AnnotateBench | Spurthi | JDSE 2026 |
| 10 | AnoteCodeBench: Benchmarking Enterprise Code-Generation Agents vs. Claude Code & Codex | [research-codebench](https://github.com/anote-ai/research-codebench) | Sharon Zheng, Bryant Jiang | T6 CodeEval | Natan | DAI 2026 Industry Track + AAAI 2027 |
| 11 | Orchestrate-Bench: Learning to Choose Tasks, Tools & Code Execution in Multi-Agent Systems | [research-orchestratebench](https://github.com/anote-ai/research-orchestratebench) | Yidian Chen, Yingzi Gu | T7 Orchestration | Natan | DAI 2026 Industry Track / EMNLP ORACLE + AAAI 2027 |
| 12 | Adversarial Course-of-Action Generation: Game-Theoretic Multi-Agent Algorithms for MEF & GBC | [research-coageneration](https://github.com/anote-ai/research-coageneration) | Arun Kanhai, Alina Kapanova | T8 GameTheory | Natan | DAI 2026 Industry Track + AAAI 2027 |
| 14 | Posture & Sustainment Optimization: Where to Place and How to Sustain Assets (DASH-5) | [research-postureandsustainmentoptimization](https://github.com/anote-ai/research-postureandsustainmentoptimization) | Amelie Norris, Alyssa Lee | T10 OptDecision | Natan | SAM.gov RFP (DASH-5) |
| 15 | Recursive Self Improvement | TBD | Natan Vidra | TBD | Natan | TBD |

---

## Legacy Track Starters

The repo still contains the original 7 track-level LaTeX starters under [`researchpapers/`](./researchpapers/). Those folders are useful as central drafts and historical scaffolds, but the active summer plan is now organized around the paper-level list above and the release packets in [`researchops/papers/`](./researchops/papers/).

- T1a: [`researchpapers/T1a-AgenticEval/`](./researchpapers/T1a-AgenticEval/)
- T1b: [`researchpapers/T1b-EnterpriseSynth/`](./researchpapers/T1b-EnterpriseSynth/)
- T2a: [`researchpapers/T2a-AnnotateBench/`](./researchpapers/T2a-AnnotateBench/)
- T2b: [`researchpapers/T2b-AnnotateROI/`](./researchpapers/T2b-AnnotateROI/)
- T3: [`researchpapers/T3-HumanAITeaming/`](./researchpapers/T3-HumanAITeaming/)
- T4: [`researchpapers/T4-RAGFailureProp/`](./researchpapers/T4-RAGFailureProp/)
- T5: [`researchpapers/T5-RetrievalBench/`](./researchpapers/T5-RetrievalBench/)

---

## Repository Structure

```
Research/
├── anote_fellowship_tracker.xlsx   # Fellowship tracker and legacy planning sheet
├── main.tex                        # Reference LaTeX template (RAG paper)
├── researchpapers/
│   ├── T1a-AgenticEval/main.tex    # Legacy track-level starter
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
├── researchpresentations/
│   ├── RAG.pdf
│   ├── TextClassification.pdf
│   ├── AI_Talk.pdf
│   └── HumanCenteredAI.pdf
└── researchops/
    ├── papers/                     # Spreadsheet-aligned paper release packets
    ├── templates/
    └── conference-submission-checklist.md
```

## Intern Workflow

1. **Read** your paper entry in [Current Papers](#current-papers--revised-2026-research-plan) and fill in the matching release packet in [`researchops/papers/`](./researchops/papers/)
2. **Design** — write a Research Design Doc and link it in the tracker spreadsheet
3. **Code** — build experiments and link the relevant paper repo, code repo, or benchmark repo
4. **Results** — run experiments, produce tables/figures
5. **Paper** — update the draft in `researchpapers/` and/or the linked standalone paper repo
6. **Repo** — keep the central repo and the paper-specific repo in sync
7. **Update** — update the tracker spreadsheet, release packet, and publishing assets with all URLs and status

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
