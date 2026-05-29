# Ganesh Iyer — Portfolio

Personal portfolio built with [Astro](https://astro.build). Single-page, light/dark theme,
deployed to GitHub Pages at **https://GaneshIyer1008.github.io/portfolio/**.

## How updates go live (nothing stale)

Everything is wired so **committing a change publishes it automatically** — no manual copy
steps, no stale files.

### Website content
1. Edit a file under `src/data/` (see table below).
2. Commit and push to `main`.
3. The Action `.github/workflows/deploy.yml` rebuilds and publishes to GitHub Pages
   (live in ~1–2 min).

> Run `git pull --rebase` before pushing — the CV auto-sync (below) also pushes commits to this
> repo, so a local clone can fall behind.

### The CV / the "Download CV" button
The site's **Download CV** always serves the latest CV, automatically:
1. Edit `cv.tex` in the **cv** repo (`GaneshIyer1008/cv`).
2. Build it with **`lualatex cv.tex`** (not pdflatex).
3. Commit and push `cv.pdf` to the cv repo's `main`.
4. The cv repo's Action `.github/workflows/sync-cv.yml` copies `cv.pdf` into this repo's
   `public/cv.pdf` and pushes it, which triggers a redeploy. The Download CV updates on its own.

> **Never edit `public/cv.pdf` by hand** — the sync overwrites it on every CV change.

## Editing website content

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | name, tagline, bio, education, social links |
| `src/data/experience.ts` | internships / research |
| `src/data/projects.ts` | projects |
| `src/data/publications.ts` | publications |
| `src/data/skills.ts` | skills |

### Add a video / image / link to a project or experience
Inside an entry in `projects.ts` or `experience.ts`:

```ts
video: { youtubeId: 'KXIX6n430TI' }                    // single YouTube video
video: { playlistId: 'PL9Lvg…', posterId: 'aVideoId' } // playlist (posterId = thumbnail video)
image: 'file.png'                                      // still image (drop the file in public/)
videoSoon: true                                        // "coming soon" placeholder
links: [{ label: 'Code — GitHub', href: 'https://…' }] // link buttons
```

(`youtubeId` / `list=` ids come from the YouTube URL.) Commit and push — done.

## Local development (optional)

Requires Node 18.20+/20.3+/22+ (e.g. `conda install -c conda-forge nodejs`).

```bash
npm install      # once
npm run dev      # http://localhost:4321/portfolio/
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## One-time setup (already done)
- GitHub Pages **Source** = **GitHub Actions** (Settings → Pages).
- CV auto-sync uses a write deploy key on this repo + a `PORTFOLIO_DEPLOY_KEY` secret in the cv repo.
