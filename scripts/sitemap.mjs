import { writeFileSync } from 'node:fs'
import { WORDS } from '../src/data/words.js'
import { TOPICS } from '../src/data/topics.js'

const origin = process.env.SITE_ORIGIN || 'https://engvocabulary.com'
const urls = [
  '/',
  '/words',
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
  </url>`
  )
  .join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', body)
console.log(`sitemap.xml (${urls.length} urls)`)
