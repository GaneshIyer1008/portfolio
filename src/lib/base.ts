// Prefix a site-root-relative path with the configured base (`/portfolio`).
// Use for any hand-written URL to a file in public/ (e.g. cv.pdf, favicon).
// Astro already applies the base to bundled CSS/JS and to <Image> assets.
const BASE = import.meta.env.BASE_URL; // '/portfolio' or '/portfolio/'

export function withBase(path = ''): string {
  return `${BASE}/${path}`.replace(/([^:]\/)\/+/g, '$1');
}
