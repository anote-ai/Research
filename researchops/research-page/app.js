const featuredProjects = [
  {
    category: "Benchmark Series",
    title: "Benchmarking Text Classification",
    description:
      "Anote's benchmark work on model performance across domain-specific text classification tasks, with papers, presentations, and a recorded talk.",
    track: "Library",
    owner: "Anote Research",
    fellows: "Prior benchmark work",
    primaryUrl: "https://github.com/anote-ai/Research/tree/main/researchcode/Benchmarking-Text-Classification",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/Research/tree/main/researchcode/Benchmarking-Text-Classification" },
      { label: "Talk", url: "https://www.youtube.com/watch?v=IakXvvdaNJQ" },
      { label: "Paper", url: "https://github.com/anote-ai/Research/blob/main/researchpapers/classification.pdf" },
    ],
  },
  {
    category: "Benchmark Series",
    title: "Benchmarking Q&A",
    description:
      "Question answering benchmark work covering retrieval, answer quality, and evaluation behavior across financial and document-grounded settings.",
    track: "Library",
    owner: "Anote Research",
    fellows: "Prior benchmark work",
    primaryUrl: "https://github.com/anote-ai/Research/tree/main/researchcode/Benchmarking-Question-Answering",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/Research/tree/main/researchcode/Benchmarking-Question-Answering" },
      { label: "Talk", url: "https://www.youtube.com/watch?v=sppn68PirPQ" },
      { label: "Paper", url: "https://github.com/anote-ai/Research/blob/main/researchpapers/questionanswering.pdf" },
    ],
  },
  {
    category: "Benchmark Series",
    title: "Improving RAG",
    description:
      "A practical research stream on retrieval-augmented generation, including chunking, reranking, metadata, and query expansion strategies across domains.",
    track: "Library",
    owner: "Anote Research",
    fellows: "Prior benchmark work",
    primaryUrl: "https://github.com/anote-ai/Research/tree/main/researchcode/Benchmarking-RAG",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/Research/tree/main/researchcode/Benchmarking-RAG" },
      { label: "Talk", url: "https://www.youtube.com/watch?v=a2hQrg2OZ-o" },
      { label: "Paper", url: "https://github.com/anote-ai/Research/blob/main/researchpapers/retrieval.pdf" },
    ],
  },
  {
    category: "Benchmark Series",
    title: "Benchmarking Computer Vision",
    description:
      "Object detection and computer vision benchmarking assets spanning remote sensing, environmental monitoring, and model evaluation workflows.",
    track: "Library",
    owner: "Anote Research",
    fellows: "Prior benchmark work",
    primaryUrl: "https://github.com/anote-ai/Research/tree/main/researchcode/Benchmarking-ObjectDetection",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/Research/tree/main/researchcode/Benchmarking-ObjectDetection" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Paper", url: "https://github.com/anote-ai/Research" },
    ],
  },
];

const activeProjects = [
  {
    number: "01",
    category: "Current Research",
    title: "EnterpriseBench",
    description:
      "Enterprise agent benchmark testing whether syntactic tool-calling scores actually predict deployment trustworthiness across enterprise workflows.",
    track: "T1a AgenticEval",
    owner: "Spurthi",
    fellows: "Aye Oyemami",
    primaryUrl: "https://github.com/anote-ai/research-enterprisebench",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/research-enterprisebench" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../papers/EnterpriseBench.md" },
    ],
  },
  {
    number: "02",
    category: "Current Research",
    title: "Intent Specification",
    description:
      "A paper framing intent specification as a first-class object in tool-calling evaluation, separating true operator alignment from format correctness.",
    track: "T1a AgenticEval",
    owner: "Spurthi",
    fellows: "Susana Haing",
    primaryUrl: "https://github.com/anote-ai/research-intentspecification",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/research-intentspecification" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../papers/IntentSpecification.md" },
    ],
  },
  {
    number: "03",
    category: "Current Research",
    title: "EnterpriseSynth",
    description:
      "Schema-driven generation of supervised fine-tuning traces and evaluation records from enterprise APIs without executing live systems.",
    track: "T1b EnterpriseSynth",
    owner: "Spurthi",
    fellows: "Rashmi Thimmaraju",
    primaryUrl: "https://github.com/anote-ai/research-enterprisesynth",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/research-enterprisesynth" },
      { label: "API Repo", url: "https://github.com/anote-ai/Research-Enterprise-Synth-API" },
      { label: "Papers", url: "../papers/EnterpriseSynth.md" },
    ],
  },
  {
    number: "04",
    category: "Current Research",
    title: "RetrievalBench",
    description:
      "Cross-domain ablation of RAG techniques over structured documents, measuring chunking, reranking, metadata, and query expansion across domains.",
    track: "T5 RetrievalBench",
    owner: "Spurthi",
    fellows: "Hannah Liang, Zirui Han",
    primaryUrl: "https://github.com/anote-ai/research-retrievalbench",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/research-retrievalbench" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../papers/RetrievalBench.md" },
    ],
  },
  {
    number: "05",
    category: "Current Research",
    title: "Financial Document Retrieval",
    description:
      "A focused retrieval benchmark for FinanceBench-style 10-K workflows, measuring the marginal value of chunking, reranking, and metadata.",
    track: "T5 RetrievalBench",
    owner: "Spurthi",
    fellows: "Elaine Hong, Ebuka Chidubem Uzoama",
    primaryUrl: "https://github.com/anote-ai/research-financialdocumentretrieval",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/research-financialdocumentretrieval" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../papers/FinancialDocumentRetrieval.md" },
    ],
  },
  {
    number: "06",
    category: "Current Research",
    title: "RAG Generalization",
    description:
      "A legal-domain transfer study asking whether the retrieval techniques that win on finance continue to work on CUAD contracts.",
    track: "T5 RetrievalBench",
    owner: "Spurthi",
    fellows: "Sindhu Shetty",
    primaryUrl: "https://github.com/anote-ai/research-raggeneralization",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/research-raggeneralization" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../papers/RAGGeneralization.md" },
    ],
  },
  {
    number: "07",
    category: "Current Research",
    title: "Metadata Annotation",
    description:
      "Research on when document structure makes metadata annotation more valuable in RAG, across domains with different layout complexity.",
    track: "T5 RetrievalBench",
    owner: "Spurthi",
    fellows: "Victoria Piroian",
    primaryUrl: "https://github.com/anote-ai/research-metadataannotation",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/research-metadataannotation" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../papers/MetadataAnnotation.md" },
    ],
  },
  {
    number: "08",
    category: "Current Research",
    title: "Agentic RAG",
    description:
      "A diagnostic benchmark for tracing end-to-end failures in agentic RAG pipelines back to retrieval, tool-use, or answer-generation stages.",
    track: "T4 RAG Failure",
    owner: "Spurthi",
    fellows: "Lauren Pothuru",
    primaryUrl: "https://github.com/anote-ai/research-agenticrag",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/research-agenticrag" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../papers/AgenticRAG.md" },
    ],
  },
  {
    number: "09",
    category: "Current Research",
    title: "AnnotateBench",
    description:
      "A large-scale benchmark studying how much labeled data different annotation strategies need across NLP tasks and budgets.",
    track: "T2a AnnotateBench",
    owner: "Spurthi",
    fellows: "Aitong Zhang",
    primaryUrl: "https://github.com/anote-ai/research-annotatebench",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/research-annotatebench" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../papers/AnnotateBench.md" },
    ],
  },
  {
    number: "10",
    category: "Current Research",
    title: "AnoteCodeBench",
    description:
      "A benchmark and harness for enterprise code-generation agents, comparing Anote's coding agents with Claude Code and Codex on repo-level tasks.",
    track: "T6 CodeEval",
    owner: "Natan",
    fellows: "Sharon Zheng, Bryant Jiang",
    primaryUrl: "https://github.com/anote-ai/research-codebench",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/research-codebench" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../papers/CodeBench.md" },
    ],
  },
  {
    number: "11",
    category: "Current Research",
    title: "Orchestrate-Bench",
    description:
      "Multi-agent research on how systems decide when to decompose tasks, route to tools, or execute code under cost and latency constraints.",
    track: "T7 Orchestration",
    owner: "Natan",
    fellows: "Yidian Chen, Yingzi Gu",
    primaryUrl: "https://github.com/anote-ai/research-orchestratebench",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/research-orchestratebench" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../papers/OrchestrateBench.md" },
    ],
  },
  {
    number: "12",
    category: "Current Research",
    title: "COA Generation",
    description:
      "Game-theoretic multi-agent research for adversarial course-of-action generation, self-play, and robust planning in wargame-style settings.",
    track: "T8 GameTheory",
    owner: "Natan",
    fellows: "Arun Kanhai, Alina Kapanova",
    primaryUrl: "https://github.com/anote-ai/research-coageneration",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/research-coageneration" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../papers/COAGeneration.md" },
    ],
  },
  {
    number: "13",
    category: "Current Research",
    title: "Posture and Sustainment Optimization",
    description:
      "A logistics and asset-positioning decision framework focused on force placement, sustainment, and replenishment policy for DASH-5 style problems.",
    track: "T10 OptDecision",
    owner: "Natan",
    fellows: "Amelie Norris, Alyssa Lee",
    primaryUrl: "https://github.com/anote-ai/research-postureandsustainmentoptimization",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/research-postureandsustainmentoptimization" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../papers/PostureAndSustainmentOptimization.md" },
    ],
  },
  {
    number: "14",
    category: "Current Research",
    title: "Recursive Self Improvement",
    description:
      "An emerging research direction on recursive self-improvement. The repo, venue, and paper assets are still being scoped.",
    track: "Planned",
    owner: "Natan",
    fellows: "Natan Vidra",
    primaryUrl: "../papers/RecursiveSelfImprovement.md",
    links: [
      { label: "GitHub", url: "../papers/RecursiveSelfImprovement.md" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../papers/RecursiveSelfImprovement.md" },
    ],
  },
  {
    number: "15",
    category: "Current Research",
    title: "Anote Research Hub",
    description:
      "The coordination layer that ties papers, talks, blog content, and release packets together so the entire research portfolio can launch coherently.",
    track: "Publishing Ops",
    owner: "Anote Research",
    fellows: "Cross-team",
    primaryUrl: "../researchops/README.md",
    links: [
      { label: "GitHub", url: "https://github.com/anote-ai/Research" },
      { label: "Talk", url: "https://anote.ai/researchTalks" },
      { label: "Papers", url: "../researchops/README.md" },
    ],
  },
];

const stats = [
  { value: "15", label: "active research cards" },
  { value: "4", label: "benchmark library pillars" },
  { value: "14+", label: "standalone paper repos" },
  { value: "3", label: "publishing channels" },
];

const state = {
  owner: "All",
  track: "All",
};

const statGrid = document.getElementById("stat-grid");
const featuredContainer = document.getElementById("featured-projects");
const activeContainer = document.getElementById("active-projects");
const ownerFilters = document.getElementById("owner-filters");
const trackFilters = document.getElementById("track-filters");

function renderStats() {
  statGrid.innerHTML = stats
    .map(
      (item) => `
        <div class="stat-card">
          <span class="stat-card__value">${item.value}</span>
          <span class="stat-card__label">${item.label}</span>
        </div>
      `
    )
    .join("");
}

function renderLinks(links) {
  return links
    .map((link) =>
      link.url
        ? `<a class="link-chip" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`
        : `<span class="link-chip link-chip--muted">${link.label}</span>`
    )
    .join("");
}

function cardTemplate(project) {
  return `
    <a class="project-card" href="${project.primaryUrl}" target="_blank" rel="noreferrer">
      <div class="project-card__topline">
        <span class="project-card__meta">${project.number || project.category}</span>
        <span class="project-card__track">${project.track}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-card__owner">
        <span class="pill">Owner: ${project.owner}</span>
        <span class="pill pill--teal">Team: ${project.fellows}</span>
      </div>
      <div class="project-card__links">
        ${renderLinks(project.links)}
      </div>
    </a>
  `;
}

function renderFeatured() {
  featuredContainer.innerHTML = featuredProjects.map(cardTemplate).join("");
}

function getFilterValues(items, key) {
  return ["All", ...new Set(items.map((item) => item[key]))];
}

function renderFilterGroup(container, items, key, activeValue, onClick) {
  container.innerHTML = items
    .map(
      (item) => `
        <button class="filter-chip ${item === activeValue ? "is-active" : ""}" data-value="${item}">
          ${item}
        </button>
      `
    )
    .join("");

  Array.from(container.querySelectorAll(".filter-chip")).forEach((button) => {
    button.addEventListener("click", () => onClick(button.dataset.value));
  });
}

function renderActive() {
  const filtered = activeProjects.filter((project) => {
    const ownerPass = state.owner === "All" || project.owner === state.owner;
    const trackPass = state.track === "All" || project.track === state.track;
    return ownerPass && trackPass;
  });

  activeContainer.innerHTML = filtered.map(cardTemplate).join("");
}

function renderFilters() {
  renderFilterGroup(
    ownerFilters,
    getFilterValues(activeProjects, "owner"),
    "owner",
    state.owner,
    (value) => {
      state.owner = value;
      renderFilters();
      renderActive();
    }
  );

  renderFilterGroup(
    trackFilters,
    getFilterValues(activeProjects, "track"),
    "track",
    state.track,
    (value) => {
      state.track = value;
      renderFilters();
      renderActive();
    }
  );
}

renderStats();
renderFeatured();
renderFilters();
renderActive();
