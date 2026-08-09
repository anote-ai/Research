# Anote AI Research

Research papers, benchmark code, presentations, and publishing operations for the Anote AI Research Fellowship.

## At a Glance

| Area | What is here |
|---|---|
| Active fellowship papers | 18 spreadsheet rows covering enterprise agents, RAG, annotation, code agents, orchestration, game-theoretic workflows, and optimization |
| Paper folders | Local coordination READMEs under [`researchpapers/`](./researchpapers/) with links to papers, repos, blogs, slides, videos, venues, and release packets |
| Publishing operations | Release packets and conference workflow docs under [`researchops/`](./researchops/) |
| Benchmark code | Historical reusable experiments under [`researchcode/`](./researchcode/) for RAG, question answering, text classification, and object detection |
| Research page | Spreadsheet-backed prototype in [`researchops/research-page/`](./researchops/research-page/) |

## Start Here

| If you are... | Start with... |
|---|---|
| A fellowship intern | Find your row in [Current Fellowship Papers](#current-fellowship-papers) and then open the matching release packet in [`researchops/papers/`](./researchops/papers/) |
| Updating a public launch | Use [`researchops/README.md`](./researchops/README.md) and the release packet for the paper |
| Looking for a draft or asset links | Open the relevant folder in [`researchpapers/`](./researchpapers/) |
| Looking for reusable benchmark code | Browse [`researchcode/README.md`](./researchcode/README.md) |
| Updating the landing page prototype | Edit [`researchops/research-page/app.js`](./researchops/research-page/app.js) |

## Current Fellowship Papers

This table is filled from `Anote AI Research Fellowship - Research Paper Matching - Research Plan.csv`.

| # | Paper | Fellow | Track | Repo | Paper | Blog | Slides | Video | Target venue | Deadline |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | EnterpriseBench: Do Syntactic Tool-Calling Benchmarks Predict Deployment Trustworthiness? | Aye Oyemami | T1a AgenticEval | [repo](https://github.com/anote-ai/research-enterprisebench) | [paper](https://drive.google.com/file/d/19x90258PK1woXf8NuRo-DchR4xGYvpTg/view?usp=drive_link) | [blog](https://docs.google.com/document/d/1NykFB4XIeGI6Vrih7V6BMxFGQH3Bkv-zwPXzB6qAyxg/edit?usp=sharing) | [slides](https://1drv.ms/p/c/50a3131a97c12f11/IQDsRCAlhf8zRrvyy0iAV2XuAb_lNp0ggqNKNqugf90ta5k?e=mvd9KX) | [video](https://youtu.be/edRbINpOzdQ?si=m23BkYfUUYU1FhIs) | DAI 2026 Industry Track + AAAI 2027 | 3 Aug, 19:59 / 28 Jul (AAAI) |
| 2 | DevIntent: How Much Does LLM-Generated Code Violate Developer Intent? | Susana Haing | T1a AgenticEval | [repo](https://github.com/anote-ai/Research-DevIntent) | [paper](https://drive.google.com/file/d/1r4sK0rBhcyF5xGqGMJahS0FYtr0q2S2R/view?usp=drive_link) | [blog](https://docs.google.com/document/d/1JtWUSMJRbOIc17foEhzdqUNbqIXYKlsru-dwGA2zkCA/edit?usp=sharing) | [slides](https://docs.google.com/presentation/d/1quSxHOK7dmxaJNsaPyggTh7SL9uwSORD460fmOMYbZs/edit?usp=sharing) | [video](https://youtu.be/KVuRHCqsFA4?si=VfV0IEqDjtw82VUK) | EACL Main Track 2027 | 3 Aug |
| 3 | EnterpriseSynth: Agentic SFT + Eval Data from API Schemas Without Live Execution | Rashmi Thimmaraju | T1b EnterpriseSynth | [repo](https://github.com/anote-ai/Research-Enterprise-Synth-API) | [paper](https://github.com/anote-ai/Research-Enterprise-Synth-API/blob/main/paper/AAAI_Main_paper.pdf) | [blog](https://docs.google.com/document/d/19fJ-Th31XwcknnHWfbD_Qaahch8i4ZMw/edit?usp=sharing&ouid=104069284400353165925&rtpof=true&sd=true) | [slides](https://docs.google.com/presentation/d/1pGxJPgxZvRPIApn8ExKDXKHFq62y0xPE3-WrapxNY5A/edit?usp=sharing) | [video](https://youtu.be/IBkw4osx2gk?si=qcnDNKQpp1d_aklI) | MLinPL 2026 + AAAI 2027 | 1 Aug / 28 Jul (AAAI) |
| 4 | RetrievalBench: Cross-Domain Ablation of RAG Techniques over Structured Documents | Hannah Liang | T5 RetrievalBench | [repo](https://github.com/anote-ai/research-retrievalbench) | [paper](https://www.overleaf.com/read/txwhhpgnzbyx#d3842a) | [blog](https://github.com/anote-ai/Research-RetrievalBench/blob/main/blog/retrievalbench.md) | [slides](https://docs.google.com/presentation/d/1G6aGF7WwgMOonKEeLg0bnIWd2a5HCLO8V_QVaZd0EWY/edit?usp=sharing) | [video](https://youtu.be/6CI7so1v1l8?si=HYXxSTbM36AvFw5G) | EMNLP AKBC + AAAI 2027 | 28 Jul / 28 Jul (AAAI) |
| 5 | RetrievalBench: Cross-Domain Ablation of RAG Techniques over Structured Documents (Part 2) | Zirui Han | T5 RetrievalBench | [repo](https://github.com/anote-ai/research-retrievalbench) | [paper](https://drive.google.com/file/d/1n61kIjX5zBNFitK5FQKvl37r4q65fqRi/view?usp=drive_link) | [blog](https://github.com/anote-ai/Research-RetrievalBench/blob/main/blog/retrievalbench.md) | [slides](https://docs.google.com/presentation/d/1-rxJn0I3H2_-TkEOpsRFFiI8t0Gh0LPzJ7GaP_GEBOc/edit?usp=sharing) | [video](https://youtu.be/_B8XeINK6cU?si=B0SE11KQJYK57qMV) | EMNLP AKBC + AAAI 2027 | 28 Jul / 28 Jul (AAAI) |
| 6 | Financial Document Retrieval: Controlled Ablation of Chunking, Reranking & Metadata | Elaine Hong | T5 RetrievalBench | [repo](https://github.com/anote-ai/research-financialdocumentretrieval) | [paper](https://drive.google.com/file/d/11b4exi4WBwYKM_12Syt_k-MytRRCpKxA/view?usp=drive_link) | [blog](https://drive.google.com/file/d/1Ne1R0kGqpthcFWOaeSgMjBLov8E1qGzJ/view?usp=drive_link) | [slides](https://docs.google.com/presentation/d/1Yg6Aq3L3wNmqOs7sKpuIAgGoM1spumu6/edit?slide=id.p1#slide=id.p1) | [video](https://youtu.be/KuWAGhnfDYQ?si=NqDPdHfVEC_T54Rp) | EMNLP FinNLP | 14 Aug, 18:00 |
| 7 | Which RAG Techniques Generalize? Legal Contract Retrieval over CUAD | Sindhu Shetty | T5 RetrievalBench | [repo](https://github.com/anote-ai/research-raggeneralization) | [paper](https://drive.google.com/file/d/1j_ltfKA-emQjuw22BhfcWJ_mcGc7tP-d/view?usp=sharing) | [blog](https://docs.google.com/document/d/1TTKR8F96wPYGGYnoMRmAcN6tlghq_AMJK5ARMHCZrPI/edit?tab=t.0) | [slides](https://docs.google.com/presentation/d/1f4DZug-PsTKD-4Zmfx6GaD7OK8TZLDmB_X2rVO4GuBM/edit?usp=sharing) | [video](https://youtu.be/To3H4cXtJuo?si=cxCXLmPlt39rzW_7) | EMNLP NLLP | 11 Aug, 08:00 |
| 8 | Semantic Chunking and Hybrid Retrieval for Financial Document QA: An Ablation Study on FinanceBench | Ebuka Chidubem Uzoama | TBD | [repo](https://github.com/anote-ai/Research-semanticchunking) | [paper](https://github.com/anote-ai/Research-semanticchunking/blob/main/paper.pdf) | [blog](https://github.com/anote-ai/Research-semanticchunking/blob/main/blog_post.md) | [slides](https://docs.google.com/presentation/d/1DeSGGixXe_NE07w6L1dhHi4MVDZgtsfocinTUh-M_os/edit?usp=sharing) | [video](https://www.youtube.com/watch?v=ZfJXjui6EZU) | TBD | TBD |
| 9 | Failure Propagation in Agentic RAG Pipelines: A Diagnostic Benchmark | Lauren Pothuru | T4 RAG Failure | [repo](https://github.com/anote-ai/research-agenticrag) | [paper](https://github.com/anote-ai/Research-AgenticRAG/blob/main/paper/main.pdf) | [blog](https://github.com/anote-ai/Research-AgenticRAG/blob/main/BLOG_POST.md) | [slides](https://docs.google.com/presentation/d/1nyITwLexW_QDyjYmCEB5S94Df1Tb5X4w5xHGQwtzeYI/edit?slide=id.p15#slide=id.p15) | [video](https://youtu.be/Nt2b83nxjaQ?si=vMAQNIwPN3Xnim0S) | EMNLP ORACLE | 18 Sep, 07:59 |
| 10 | AnnotateBench: How Much Labeled Data Do Annotation Strategies Need Across NLP Tasks? | Aitong Zhang | T2a AnnotateBench | [repo](https://github.com/anote-ai/research-annotatebench) | [paper](https://github.com/anote-ai/Research-AnnotateBench/blob/main/paper/main.pdf) | [blog](https://github.com/anote-ai/Research-AnnotateBench/blob/main/BLOG.md) | Annotatebench Presentation0805 | [video](https://youtu.be/b_rGIsdIk4A?si=M52MsUkfNdl76jRx) | IEEE | TBD |
| 11 | AnoteCodeBench: Benchmarking Enterprise Code-Generation Agents vs. Claude Code & Codex | Sharon Zheng | T6 CodeEval | [repo](https://github.com/anote-ai/research-codebench) | [paper](https://github.com/anote-ai/Research-CodeBench/blob/main/Beyond%20Pass%40k-%20Measuring%20Reliability%20and%20Security%20of%20Agentic%20Code%20Generation.pdf) | [blog](https://github.com/anote-ai/Research-CodeBench/blob/docs/reliability-blog-post/docs/blog/beyond-pass-k-reliability-security.md) | Anote Research: Beyond Pass@k: Measuring Reliability & Security of Agentic Code Generation | [video](https://youtu.be/6yxpcMHHMhM?si=MaYZymR41W2hRwzq) | DAI 2026 Industry Track + AAAI 2027 | 3 Aug, 19:59 / 28 Jul (AAAI) |
| 12 | AnoteCodeBench: Benchmarking Enterprise Code-Generation Agents vs. Claude Code & Codex (Part 2) | Bryant Jiang | T6 CodeEval | [repo](https://github.com/anote-ai/research-codebench) | [paper](https://drive.google.com/file/d/1BuXfCbYy_G7r-4-ZqCiROw3hA8bSyAFz/view?usp=drive_link) | [blog](https://github.com/anote-ai/Research-CodeBench/blob/docs/reliability-blog-post/docs/blog/beyond-pass-k-reliability-security.md) | Anote Research: Beyond Pass@k: Measuring Reliability & Security of Agentic Code Generation | [video](https://youtu.be/D7veFmx2t64?si=j74gjeVBf40MgdE6) | DAI 2026 Industry Track + AAAI 2027 | 3 Aug, 19:59 / 28 Jul (AAAI) |
| 13 | OrchestraBench: Evaluating Multi-Agent Orchestration Failure Modes, Recovery, and Decomposition Quality | Yidian Chen | T7 Orchestration | [repo](https://github.com/anote-ai/research-orchestratebench) | [paper](https://drive.google.com/file/d/1AkDDMjtb4imRZRjQH1fTrYq05bG4MNN1/view) | [blog](https://docs.google.com/document/d/1BPTcKNSiKKbard72d1gnxpbQhEaCqGzUFGnYtDzA-bI/edit) | [slides](https://drive.google.com/file/d/1EaimWoxcvXQTxbunBME0evqoPK3-P-S7/view?usp=drivesdk) | [video](https://youtu.be/YsxvQgm5TxE?si=l_0E87E1UI_bNHzF) | AAAI 2027 — submitted | AAAI: paper + checklist + code/data supplement submitted |
| 14 | OrchestraBench: Evaluating Multi-Agent Orchestration Failure Modes, Recovery, and Decomposition Quality (Part 2) | Yingzi Gu | T7 Orchestration | [repo](https://github.com/anote-ai/research-orchestratebench) | [paper](https://drive.google.com/file/d/1AkDDMjtb4imRZRjQH1fTrYq05bG4MNN1/view) | [blog](https://docs.google.com/document/d/1BPTcKNSiKKbard72d1gnxpbQhEaCqGzUFGnYtDzA-bI/edit) | [slides](https://docs.google.com/presentation/d/1ctd5hVRdFZm2FJ7gsfEqpmpzTBLrFHgDvhCTUrFPZCU/edit?slide=id.slide_page-1785878591884-928991812#slide=id.slide_page-1785878591884-928991812) | [video](https://youtu.be/rV5GgBufDLg?si=JV4ylNTSvIp-niis) | AAAI 2027 — submitted | AAAI: paper + checklist + code/data supplement submitted |
| 15 | MetaRoute-Bench: Evaluating Meta-Decision Policies for Agentic Workflows | Alina Kapanova | T8 GameTheory | [repo](https://github.com/anote-ai/Research-MetaRouting) | [paper](https://drive.google.com/file/d/16k3QweZZhSgLahwuo1ybFtg4Ucn9PRvC/view?usp=drive_link) | [blog](https://github.com/anote-ai/Research-COAGeneration/tree/main/blog) | Final presentations_ Alina.pptx | [video](https://youtu.be/xdU-nYOZbwY?si=rnuNYNHNfRVfPCuK) | DAI 2026 Industry Track + AAAI 2027 (aligns DoD SBIR OSW26BZ02-DV004) | 3 Aug, 19:59 / 28 Jul (AAAI) |
| 16 | Posture & Sustainment Optimization: Where to Place and How to Sustain Assets (DASH-5) | Amelie Norris | T10 OptDecision | [repo](https://github.com/anote-ai/research-postureandsustainmentoptimization) | [paper](https://drive.google.com/file/d/1rYDVFwMFv2bk8xNM2FDQ9Z6J9SVDwhqz/view?usp=sharing) | [blog](https://docs.google.com/document/d/1NX4kvF0V7u_dDA1ngJNnAhKCes0PjMDI/edit?usp=sharing&ouid=108286614331748766817&rtpof=true&sd=true) | Posture and Sustainment Optimization.pdf | [video](https://youtu.be/E-PVqGG3O1M?si=ttGn_2J2Wmuv2-rT) | SAM.gov RFP (DASH-5) — no in-window OpenReview workshop + DAI 2026 | Per solicitation |
| 17 | Posture & Sustainment Optimization: Where to Place and How to Sustain Assets (DASH-5) | Alyssa Lee | T10 OptDecision | [repo](https://github.com/anote-ai/research-postureandsustainmentoptimization) | [paper](https://drive.google.com/file/d/1rYDVFwMFv2bk8xNM2FDQ9Z6J9SVDwhqz/view?usp=sharing) | [blog](https://docs.google.com/document/d/1NX4kvF0V7u_dDA1ngJNnAhKCes0PjMDI/edit?usp=sharing&ouid=108286614331748766817&rtpof=true&sd=true) | [slides](https://drive.google.com/file/d/1Ud_ynD7r0W6IYtcTC9y0P5KO3tsIRVOk/view?usp=sharing) | [video](https://youtu.be/QjuiJs4nYm8?si=DgJZF6s7x2BPC4kc) | SAM.gov RFP (DASH-5) — no in-window OpenReview workshop + DAI 2026 | Per solicitation |
| 18 | Adversarial Course-of-Action Generation: Game-Theoretic Multi-Agent Algorithms for COA matching & COA generation | Arun Kanhai | TBD | [repo](https://github.com/anote-ai/research-coageneration) | [paper](https://drive.google.com/file/d/1lbOk0Mtgd2AFneBXdMZGalMeny0jWHuN/view?usp=drive_link) | [blog](https://github.com/anote-ai/Research-COAGeneration/blob/main/blog/coa-bench-self-play.md) | Final presentations_ Arun_Kanhai.pptx | [video](https://youtu.be/_ZvZNUDlIZU?si=hcKQ7DzUTY2-oSDW) | DAI 2026 Industry Track + AAAI 2027 (aligns DoD SBIR OSW26BZ02-DV004) | TBD |

## Paper Folder Index

| Folder | Paper(s) | Fellow(s) | Release packet |
|---|---|---|---|
| [`researchpapers/EnterpriseBench/`](./researchpapers/EnterpriseBench/) | EnterpriseBench | Aye Oyemami | [`researchops/papers/EnterpriseBench.md`](./researchops/papers/EnterpriseBench.md) |
| [`researchpapers/DevIntent/`](./researchpapers/DevIntent/) | DevIntent | Susana Haing | [`researchops/papers/DevIntent.md`](./researchops/papers/DevIntent.md) |
| [`researchpapers/EnterpriseSynth/`](./researchpapers/EnterpriseSynth/) | EnterpriseSynth | Rashmi Thimmaraju | [`researchops/papers/EnterpriseSynth.md`](./researchops/papers/EnterpriseSynth.md) |
| [`researchpapers/RetrievalBench/`](./researchpapers/RetrievalBench/) | RetrievalBench / RetrievalBench | Hannah Liang, Zirui Han | [`researchops/papers/RetrievalBench.md`](./researchops/papers/RetrievalBench.md) |
| [`researchpapers/FinancialDocumentRetrieval/`](./researchpapers/FinancialDocumentRetrieval/) | Financial Document Retrieval | Elaine Hong | [`researchops/papers/FinancialDocumentRetrieval.md`](./researchops/papers/FinancialDocumentRetrieval.md) |
| [`researchpapers/RAGGeneralization/`](./researchpapers/RAGGeneralization/) | Which RAG Techniques Generalize? Legal Contract Retrieval over CUAD | Sindhu Shetty | [`researchops/papers/RAGGeneralization.md`](./researchops/papers/RAGGeneralization.md) |
| [`researchpapers/SemanticChunking/`](./researchpapers/SemanticChunking/) | Semantic Chunking and Hybrid Retrieval for Financial Document QA | Ebuka Chidubem Uzoama | [`researchops/papers/SemanticChunking.md`](./researchops/papers/SemanticChunking.md) |
| [`researchpapers/AgenticRAG/`](./researchpapers/AgenticRAG/) | Failure Propagation in Agentic RAG Pipelines | Lauren Pothuru | [`researchops/papers/AgenticRAG.md`](./researchops/papers/AgenticRAG.md) |
| [`researchpapers/AnnotateBench/`](./researchpapers/AnnotateBench/) | AnnotateBench | Aitong Zhang | [`researchops/papers/AnnotateBench.md`](./researchops/papers/AnnotateBench.md) |
| [`researchpapers/CodeBench/`](./researchpapers/CodeBench/) | AnoteCodeBench / AnoteCodeBench | Sharon Zheng, Bryant Jiang | [`researchops/papers/CodeBench.md`](./researchops/papers/CodeBench.md) |
| [`researchpapers/OrchestrateBench/`](./researchpapers/OrchestrateBench/) | OrchestraBench / OrchestraBench | Yidian Chen, Yingzi Gu | [`researchops/papers/OrchestrateBench.md`](./researchops/papers/OrchestrateBench.md) |
| [`researchpapers/MetaRouteBench/`](./researchpapers/MetaRouteBench/) | MetaRoute-Bench | Alina Kapanova | [`researchops/papers/MetaRouteBench.md`](./researchops/papers/MetaRouteBench.md) |
| [`researchpapers/PostureAndSustainmentOptimization/`](./researchpapers/PostureAndSustainmentOptimization/) | Posture & Sustainment Optimization / Posture & Sustainment Optimization | Amelie Norris, Alyssa Lee | [`researchops/papers/PostureAndSustainmentOptimization.md`](./researchops/papers/PostureAndSustainmentOptimization.md) |
| [`researchpapers/COAGeneration/`](./researchpapers/COAGeneration/) | Adversarial Course-of-Action Generation | Arun Kanhai | [`researchops/papers/COAGeneration.md`](./researchops/papers/COAGeneration.md) |

Historical folders that are not active rows in the current spreadsheet are retained for reference: [`AgenticEval`](./researchpapers/AgenticEval/), [`AnnotateROI`](./researchpapers/AnnotateROI/), [`HumanAITeaming`](./researchpapers/HumanAITeaming/), [`IntentSpecification`](./researchpapers/IntentSpecification/), [`MetadataAnnotation`](./researchpapers/MetadataAnnotation/), and [`RecursiveSelfImprovement`](./researchpapers/RecursiveSelfImprovement/).

## Repository Structure

```text
Research/
|-- README.md
|-- anote_fellowship_tracker.xlsx
|-- researchpapers/              # Paper-folder READMEs and historical PDFs
|-- researchcode/                # Benchmark code and experiment artifacts
|-- researchpresentations/       # Prior slide decks and talks
|-- researchops/                 # Release packets, publishing workflow, and research page prototype
`-- main.tex                     # Reference LaTeX template
```

## Publishing Workflow

1. Update the paper folder README with the latest paper, code, blog, deck, video, venue, and submission links.
2. Update the matching release packet under [`researchops/papers/`](./researchops/papers/).
3. Confirm paper submission status for arXiv, OpenReview, Hugging Face, Papers With Code, and Medium.
4. Mirror public-ready assets into `anote.ai/research`, `anote.ai/blog`, `anote.ai/researchTalks`, and social launch tracking.

## Prior Video Talks

| Topic | Video |
|---|---|
| Fine Tuning LLMs | [YouTube](https://www.youtube.com/watch?v=mMmaTMuRZmo) |
| Benchmarking Text Classification | [YouTube](https://www.youtube.com/watch?v=IakXvvdaNJQ) |
| Benchmarking Q&A Models | [YouTube](https://www.youtube.com/watch?v=sppn68PirPQ) |
| Human Centered AI | [YouTube](https://www.youtube.com/watch?v=ZoAsXKLPyuo) |
| Improving Retrieval for Q&A | [YouTube](https://www.youtube.com/watch?v=a2hQrg2OZ-o) |
| Few Shot Learning Ted Talk | [YouTube](https://www.youtube.com/watch?v=7I_pBLjMNzs) |
