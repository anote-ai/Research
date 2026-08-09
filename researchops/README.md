# Research Publishing Ops

This directory is the operating guide for publishing Anote AI Research Fellowship papers. It now mirrors the current research paper matching spreadsheet with concrete links for paper drafts, repositories, blogs, slides, videos, venues, and publication status.

## What Goes Where

| Artifact | Primary destination | Secondary destination | Store or track source materials here |
|---|---|---|---|
| Research paper PDF, abstract, authors, and code link | `anote.ai/research` | arXiv and conference submission portals | [`researchpapers/<paper>/`](../researchpapers/) plus the standalone paper repo |
| Research blog post | `anote.ai/blog` | [Anote Medium](https://anote-ai.medium.com/) | Release packet and linked draft |
| Presentation deck and talk video | `anote.ai/researchTalks` | YouTube or conference talk page | [`researchpresentations/`](../researchpresentations/) and linked deck/video |
| Code, figures, appendix assets, and reproducibility notes | Paper-specific repo | [`researchcode/`](../researchcode/) when shared benchmark code lives here | Release packet asset links |
| Social launch copy and campaign tracking | Social tracker spreadsheet | LinkedIn, X, newsletter | Release packet launch checklist |

## Active Release Packets

| Packet | Spreadsheet row(s) | Paper group | Fellow(s) |
|---|---|---|---|
| [`EnterpriseBench.md`](./papers/EnterpriseBench.md) | 1 | EnterpriseBench | Aye Oyemami |
| [`DevIntent.md`](./papers/DevIntent.md) | 2 | DevIntent | Susana Haing |
| [`EnterpriseSynth.md`](./papers/EnterpriseSynth.md) | 3 | EnterpriseSynth | Rashmi Thimmaraju |
| [`RetrievalBench.md`](./papers/RetrievalBench.md) | 4, 5 | RetrievalBench | Hannah Liang, Zirui Han |
| [`FinancialDocumentRetrieval.md`](./papers/FinancialDocumentRetrieval.md) | 6 | Financial Document Retrieval | Elaine Hong |
| [`RAGGeneralization.md`](./papers/RAGGeneralization.md) | 7 | RAG Generalization | Sindhu Shetty |
| [`SemanticChunking.md`](./papers/SemanticChunking.md) | 8 | Semantic Chunking | Ebuka Chidubem Uzoama |
| [`AgenticRAG.md`](./papers/AgenticRAG.md) | 9 | Agentic RAG | Lauren Pothuru |
| [`AnnotateBench.md`](./papers/AnnotateBench.md) | 10 | AnnotateBench | Aitong Zhang |
| [`CodeBench.md`](./papers/CodeBench.md) | 11, 12 | AnoteCodeBench | Sharon Zheng, Bryant Jiang |
| [`OrchestrateBench.md`](./papers/OrchestrateBench.md) | 13, 14 | OrchestraBench | Yidian Chen, Yingzi Gu |
| [`MetaRouteBench.md`](./papers/MetaRouteBench.md) | 15 | MetaRoute-Bench | Alina Kapanova |
| [`PostureAndSustainmentOptimization.md`](./papers/PostureAndSustainmentOptimization.md) | 16, 17 | Posture and Sustainment Optimization | Amelie Norris, Alyssa Lee |
| [`COAGeneration.md`](./papers/COAGeneration.md) | 18 | Adversarial Course-of-Action Generation | Arun Kanhai |

## Program Requirements

- Every active fellowship paper should have a release packet before submission or launch.
- Natan and Spurthi should be included as co-authors on submissions unless told otherwise.
- Each release packet should list paper, code, blog, slides, video, venue, and status links.
- arXiv, OpenReview, Hugging Face, Papers With Code, and Medium status should be explicit, even if the current value is `pending` or `TBD`.
- The local [`researchpapers/`](../researchpapers/) README and packet should be kept in sync.

## Publishing Workflow

1. Confirm the spreadsheet row has a repository, paper, blog, slides, video, venue, and deadline.
2. Update the matching paper folder README in [`../researchpapers/`](../researchpapers/).
3. Update the release packet in [`papers/`](./papers/).
4. Confirm conference submission materials, including checklist, PDF, source, and code/data supplement.
5. Publish or queue arXiv, OpenReview, Hugging Face, Papers With Code, Medium, and website links as appropriate.
6. Update the research page prototype in [`research-page/`](./research-page/) when links change.

## Repo Placement Rules

- Paper drafts and PDFs: `researchpapers/<paper-title>/` and/or the linked standalone paper repo.
- Benchmark code and experiment scripts: `researchcode/<area>/` or the linked paper repo.
- Slide decks and presentation PDFs: `researchpresentations/` or the linked deck URL.
- Publishing operations docs and templates: `researchops/`.
- Standalone paper repos should be linked in the release packet even when working files also live here.
