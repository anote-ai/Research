# Research Code

This directory contains reusable benchmark code, notebooks, datasets, vector stores, and evaluation artifacts from earlier Anote research work. Most current 2026 fellowship papers use standalone paper repositories, which are linked from [`../researchpapers/README.md`](../researchpapers/README.md) and [`../researchops/papers/`](../researchops/papers/).

## Code Areas

| Folder | Contents | Related research |
|---|---|---|
| [`Benchmarking-RAG/`](./Benchmarking-RAG/) | RAG notebooks, query expansion experiments, reranking experiments, FinanceBench-style PDFs, and local vector database artifacts | RetrievalBench, Financial Document Retrieval, RAG Generalization, Semantic Chunking |
| [`Benchmarking-Question-Answering/`](./Benchmarking-Question-Answering/) | FinanceBench and RAG-Instruct QA experiments with GPT4All and FlareRAG variants | Prior question-answering benchmark work |
| [`Benchmarking-Text-Classification/`](./Benchmarking-Text-Classification/) | Active-learning and few-shot text-classification experiments across Amazon, Banking, Craigslist, Finance, and TREC datasets | Prior text classification benchmark work and AnnotateBench background |
| [`Benchmarking-ObjectDetection/`](./Benchmarking-ObjectDetection/) | Object-detection benchmark assets for FIAR1M, military aircraft recognition, and TrashCan data | Prior computer vision benchmark work |

## Current Fellowship Repos

Current paper-specific code usually lives in standalone repositories rather than this folder. See the paper README or release packet for exact links, including EnterpriseBench, DevIntent, EnterpriseSynth, RetrievalBench, Financial Document Retrieval, RAG Generalization, Semantic Chunking, Agentic RAG, AnnotateBench, CodeBench, OrchestraBench, MetaRoute-Bench, Posture and Sustainment Optimization, and COA Generation.

## Maintenance Notes

- Keep heavy experiment artifacts in their existing benchmark subfolders.
- Add a short README to any new benchmark area before adding notebooks or generated outputs.
- Link reusable code back to the relevant paper folder and release packet.
