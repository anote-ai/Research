# Contributing to the Anote Research Hub

This repo is now the central hub for Anote's AI research: a card grid linking out to each
project's GitHub repo, paper, and talk. It is **not** a backlog for planning new research
features — new research ideas should be designed and built in their own dedicated repo, then
linked from here once ready.

## Adding or updating a research card

1. Open [`site/data/research.json`](./site/data/research.json).
2. Add (or edit) an entry with these fields:

   | Field | Required | Description |
   |-------|----------|--------------|
   | `id` | yes | Unique slug, e.g. `"retrieval-bench"` |
   | `title` | yes | Project/paper name |
   | `description` | yes | 1–3 sentence summary of the research |
   | `githubUrl` | no | Link to the dedicated repo (or this repo's folder if no dedicated repo exists yet). `null` if none. |
   | `paperUrl` | no | Link to the paper (PDF, arXiv, or `researchpapers/` file). `null` if none. |
   | `talkUrl` | no | Link to a recorded talk/video. `null` if none. |
   | `tags` | yes | Array of category tags used for filtering, e.g. `["RAG", "Benchmarking"]` |
   | `status` | yes | `"Published"`, `"In Progress"`, or similar |

3. Open a PR. Once merged to `main`, the hub auto-deploys via the
   [Deploy Research Hub](./.github/workflows/deploy-research-hub.yml) workflow.

## Previewing locally

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

No build step or dependencies required — the hub is static HTML/CSS/JS.
