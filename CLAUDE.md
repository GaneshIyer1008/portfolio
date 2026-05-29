# Portfolio website — context for Claude

Personal portfolio for **Ganesh Iyer** (MSc Robotics, Systems & Control @ ETH Zürich; not a web developer — keep web/tooling steps simple).

## Stack & deploy
- **Astro** static site, single-page, light/dark toggle. Live at `https://GaneshIyer1008.github.io/portfolio/` (project repo → base path **`/portfolio`**).
- Push to `main` → GitHub Action `.github/workflows/deploy.yml` (withastro/action) builds & deploys. Pages **Source must stay "GitHub Actions"** (build_type `workflow`).
- Local dev needs Node, which isn't installed system-wide: `conda install -c conda-forge nodejs`, then `npm install`; `npm run dev` (→ http://localhost:4321/portfolio/), `npm run build`. `google-chrome` is available for headless screenshots.

## Editing content (the common task)
All content lives in `src/data/*.ts` — edit one file and push:
- `profile.ts` (name, tagline, bio, education, socials), `experience.ts`, `projects.ts`, `publications.ts`, `skills.ts`.
- Project / experience **media** (rendered by `Media.astro` + `VideoEmbed.astro`):
  - `video: { youtubeId: 'ID' }` — single YouTube video
  - `video: { playlistId: 'PL…', posterId: 'aVideoID' }` — playlist (posterId supplies the thumbnail; playlists have none)
  - `image: 'file.png'` — still image (drop the file in `public/`)
  - `videoSoon: true` — "coming soon" placeholder
- Any hand-written URL to a file in `public/` must go through `withBase()` (`src/lib/base.ts`) because of the `/portfolio` base path. Astro handles bundled CSS/JS and `astro:assets` images automatically.

## CV
- "Download CV" serves `public/cv.pdf`, which is **auto-synced from the separate `cv` repo** by a GitHub Action there. Do **not** hand-edit `public/cv.pdf`.

## Conventions
- Commit messages: **no** `Co-Authored-By` / Claude attribution.
