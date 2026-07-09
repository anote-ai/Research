# Research Publishing Ops

This directory is the central operating guide for publishing fellowship research from the `anote-ai/Research` repo.

## What Goes Where

| Artifact | Primary Destination | Secondary Destination | Store Source Materials Here |
|---|---|---|---|
| Research paper PDF, abstract, authors, code link | https://anote.ai/research | arXiv, conference submission portal | `researchpapers/<track>/` |
| Research blog post | https://anote.ai/blog | https://anote-ai.medium.com/ | release packet + draft links |
| Research presentation / talk deck | https://anote.ai/researchTalks | conference talk page, YouTube if needed | `researchpresentations/` |
| Code, figures, appendix assets, reproducibility notes | paper-specific research repo + `https://github.com/anote-ai/Research` | standalone benchmark or API repo if needed | `researchcode/`, `researchpapers/`, `researchpresentations/` |
| Social launch copy and campaign tracking | https://docs.google.com/spreadsheets/d/1ASp4FMOsSTnp8dVMrcT7CIPRoukNawmeWxU-RBJ1h9Q/edit?usp=sharing | LinkedIn, X, newsletter | release packet summary |

## Program Requirements

- Every intern should have their paper submitted to one or more conferences.
- Natan and Spurthi should be included as co-authors on submissions unless told otherwise.
- Papers should also be prepared for arXiv submission once the manuscript is ready.
- `anote-ai/Research` is the central coordination repo, but paper-specific repos should also be tracked and linked when they exist.
- Website publication can later be mirrored into `https://github.com/anote-ai/Landing-Page` when Natan is ready to add them there.

## Required Packet Per Paper

Each paper should produce one complete release packet before launch:

1. Final or near-final paper title, author list, abstract, and PDF.
2. Target conference list with status for each venue.
3. Code link and reproducibility status.
4. Website blurb for `anote.ai/research`.
5. Blog-ready narrative for `anote.ai/blog` and Medium.
6. Presentation deck or talk PDF for `anote.ai/researchTalks`.
7. Social copy and launch assets for the social tracker sheet.

Use [conference-submission-checklist.md](./conference-submission-checklist.md) and the templates in [templates/](./templates/) for each intern.
Active paper stubs live in [papers/](./papers/).

## Canonical Research Repositories

Track these repos in every release packet when relevant:

- `research-enterprisebench`: https://github.com/anote-ai/research-enterprisebench
- `research-intentspecification`: https://github.com/anote-ai/research-intentspecification
- `research-enterprisesynth`: https://github.com/anote-ai/research-enterprisesynth
- `Research-Enterprise-Synth-API`: https://github.com/anote-ai/Research-Enterprise-Synth-API
- `research-retrievalbench`: https://github.com/anote-ai/research-retrievalbench
- `research-financialdocumentretrieval`: https://github.com/anote-ai/research-financialdocumentretrieval
- `research-raggeneralization`: https://github.com/anote-ai/research-raggeneralization
- `research-metadataannotation`: https://github.com/anote-ai/research-metadataannotation
- `research-agenticrag`: https://github.com/anote-ai/research-agenticrag
- `research-annotatebench`: https://github.com/anote-ai/research-annotatebench
- `research-codebench`: https://github.com/anote-ai/research-codebench
- `research-orchestratebench`: https://github.com/anote-ai/research-orchestratebench
- `research-coageneration`: https://github.com/anote-ai/research-coageneration
- `research-postureandsustainmentoptimization`: https://github.com/anote-ai/research-postureandsustainmentoptimization

## Outreach Workflow

1. Reach out to each intern listed in the submission tracker:
   https://docs.google.com/spreadsheets/d/1XFwLUCo1tBSLyuZF_rlLxqIwSv3AyJRQdpgKwSTAFY8/edit?usp=sharing
2. CC Natan and Spurthi on every status request.
3. Collect the release packet items and confirm the primary conference target.
4. Verify the paper, code, blog, deck, and social copy are all linked in one place.
5. Confirm stipend reminder: `$500`, paid at the end of summer on August 10.

## Repo Placement Rules

- Paper drafts and PDFs: `researchpapers/<track>/`
- Benchmark code and experiment scripts: `researchcode/<area>/`
- Slide decks and presentation PDFs: `researchpresentations/`
- Publishing operations docs and templates: `researchops/`
- Standalone paper repos should be linked in the paper packet even when working files also live in this repo.

If a paper has missing materials, add placeholders in the correct folder first, then track blockers in that paper's release packet.
