# EngVocabulary

English vocabulary site for [engvocabulary.com](https://engvocabulary.com). Next.js static export (no server).

Every word is linked from a letter page (`/words/a` through `/words/z`) in the page HTML, and `www.engvocabulary.com` redirects to `https://engvocabulary.com`. Search engines need those links; the searchable list alone is not enough.

## Scripts

- `npm run dev` — local Next.js server
- `npm run build` — static export to `out/`
- `npm run preview` — serve `out/`

Cloudflare Pages: framework **Next.js (Static HTML Export)**, output directory **`out`**, Node **20**.
