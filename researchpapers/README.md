# Research Paper Folders

This directory holds local coordination READMEs for fellowship papers. The source of truth for active rows is the research matching spreadsheet; this folder provides a repo-native index for paper, code, blog, deck, video, venue, and submission links.

## Active Paper Folders

| Folder | Paper title(s) | Fellow(s) | Track |
|---|---|---|---|
| [`EnterpriseBench/`](./EnterpriseBench/) | EnterpriseBench: Do Syntactic Tool-Calling Benchmarks Predict Deployment Trustworthiness? | Aye Oyemami | T1a AgenticEval |
| [`DevIntent/`](./DevIntent/) | DevIntent: How Much Does LLM-Generated Code Violate Developer Intent? | Susana Haing | T1a AgenticEval |
| [`EnterpriseSynth/`](./EnterpriseSynth/) | EnterpriseSynth: Agentic SFT + Eval Data from API Schemas Without Live Execution | Rashmi Thimmaraju | T1b EnterpriseSynth |
| [`RetrievalBench/`](./RetrievalBench/) | RetrievalBench: Cross-Domain Ablation of RAG Techniques over Structured Documents<br>RetrievalBench: Cross-Domain Ablation of RAG Techniques over Structured Documents (Part 2) | Hannah Liang<br>Zirui Han | T5 RetrievalBench<br>T5 RetrievalBench |
| [`FinancialDocumentRetrieval/`](./FinancialDocumentRetrieval/) | Financial Document Retrieval: Controlled Ablation of Chunking, Reranking & Metadata | Elaine Hong | T5 RetrievalBench |
| [`RAGGeneralization/`](./RAGGeneralization/) | Which RAG Techniques Generalize? Legal Contract Retrieval over CUAD | Sindhu Shetty | T5 RetrievalBench |
| [`SemanticChunking/`](./SemanticChunking/) | Semantic Chunking and Hybrid Retrieval for Financial Document QA: An Ablation Study on FinanceBench | Ebuka Chidubem Uzoama | TBD |
| [`AgenticRAG/`](./AgenticRAG/) | Failure Propagation in Agentic RAG Pipelines: A Diagnostic Benchmark | Lauren Pothuru | T4 RAG Failure |
| [`AnnotateBench/`](./AnnotateBench/) | AnnotateBench: How Much Labeled Data Do Annotation Strategies Need Across NLP Tasks? | Aitong Zhang | T2a AnnotateBench |
| [`CodeBench/`](./CodeBench/) | AnoteCodeBench: Benchmarking Enterprise Code-Generation Agents vs. Claude Code & Codex<br>AnoteCodeBench: Benchmarking Enterprise Code-Generation Agents vs. Claude Code & Codex (Part 2) | Sharon Zheng<br>Bryant Jiang | T6 CodeEval<br>T6 CodeEval |
| [`OrchestrateBench/`](./OrchestrateBench/) | OrchestraBench: Evaluating Multi-Agent Orchestration Failure Modes, Recovery, and Decomposition Quality<br>OrchestraBench: Evaluating Multi-Agent Orchestration Failure Modes, Recovery, and Decomposition Quality (Part 2) | Yidian Chen<br>Yingzi Gu | T7 Orchestration<br>T7 Orchestration |
| [`MetaRouteBench/`](./MetaRouteBench/) | MetaRoute-Bench: Evaluating Meta-Decision Policies for Agentic Workflows | Alina Kapanova | T8 GameTheory |
| [`PostureAndSustainmentOptimization/`](./PostureAndSustainmentOptimization/) | Posture & Sustainment Optimization: Where to Place and How to Sustain Assets (DASH-5)<br>Posture & Sustainment Optimization: Where to Place and How to Sustain Assets (DASH-5) | Amelie Norris<br>Alyssa Lee | T10 OptDecision<br>T10 OptDecision |
| [`COAGeneration/`](./COAGeneration/) | Adversarial Course-of-Action Generation: Game-Theoretic Multi-Agent Algorithms for COA matching & COA generation | Arun Kanhai | TBD |

## Historical Reference Assets

- [`classification.pdf`](./classification.pdf): prior text classification benchmark paper.
- [`questionanswering.pdf`](./questionanswering.pdf): prior question-answering benchmark paper.
- [`retrieval.pdf`](./retrieval.pdf): prior retrieval/RAG benchmark paper.
- Historical or superseded folders: [`AgenticEval`](./AgenticEval/), [`AnnotateROI`](./AnnotateROI/), [`HumanAITeaming`](./HumanAITeaming/), [`IntentSpecification`](./IntentSpecification/), [`MetadataAnnotation`](./MetadataAnnotation/), [`RecursiveSelfImprovement`](./RecursiveSelfImprovement/).

## Maintenance Rule

When a row is added to the spreadsheet, add or update the matching folder README here and the matching release packet in [`../researchops/papers/`](../researchops/papers/).
