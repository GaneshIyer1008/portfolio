# Ganesh Iyer — Portfolio

Personal portfolio built with [Astro](https://astro.build). Single-page, light/dark theme,
deployed to GitHub Pages at **https://GaneshIyer1008.github.io/portfolio/**.

## Updating content (no coding needed)

All content lives in plain files under `src/data/` — edit one and push; the site rebuilds
automatically via GitHub Actions.

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | name, tagline, bio, education, social links |
| `src/data/experience.ts` | internships / research |
| `src/data/projects.ts` | projects |
| `src/data/publications.ts` | papers |
| `src/data/skills.ts` | skills |
| `src/data/achievements.ts` | honors |

### Add a project video
Open `src/data/projects.ts` (or `experience.ts`), find the entry, and set its `video` field:

```ts
video: { youtubeId: 'Kl71MqVsgZI' }       // a single YouTube video
video: { playlistId: 'PL9LvgMznBv40...' }  // a YouTube playlist
```

The id is the part of the URL after `youtu.be/` or `list=`. Remove `videoSoon: true` once a
video is added. Then commit and push to `main` — that's it.

### Replace the CV
Drop the new PDF in as `public/cv.pdf`.

## Local development (optional)

Requires Node 18.20+/20.3+/22+. With conda: `conda install -c conda-forge nodejs`.

```bash
npm install      # once
npm run dev      # http://localhost:4321/portfolio/
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes
it to GitHub Pages. Repo **Settings → Pages → Source** must be set to **GitHub Actions**.
