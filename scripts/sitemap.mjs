import { writeFileSync } from 'node:fs'
import { WORDS } from '../src/data/words.js'
import { TOPICS } from '../src/data/topics.js'
import { LETTERS } from '../src/lib/directory.js'

const origin = process.env.SITE_ORIGIN || 'https://engvocabulary.com'
// Bump this when the public pages change so Google can tell the sitemap is fresh.
const LASTMOD = '2026-10-03'
const urls = [
  '/',
  '/words',
  ...LETTERS.map((letter) => `/words/${letter}`),
  '/vocabulary',
  '/about',
  '/privacy',
  '/contact',
  ...TOPICS.map((topic) => `/vocabulary/${topic.slug}`),
  ...WORDS.map((word) => `/word/${word.id}`),
]
const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${origin}${path}</loc>
    <lastmod>${LASTMOD}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', body)
console.log(`sitemap.xml (${urls.length} urls)`)
