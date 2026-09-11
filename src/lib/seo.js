import { SITE } from '../data/site.js'

const DEFAULT_TITLE = 'EngVocab — learn English vocabulary'
const DEFAULT_DESCRIPTION =
  'Learn English words from A1 to C2. Short daily practice with clear meanings and examples.'

function setMeta(name, content, attr = 'name') {
  let tag = document.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setJsonLd(id, data) {
  let script = document.getElementById(id)
  if (!data) {
    script?.remove()
    return
  }
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

export function setPageSeo({ title, description, path, noindex = false }) {
  const nextTitle = title || DEFAULT_TITLE
  const nextDescription = description || DEFAULT_DESCRIPTION
  const url = `${SITE.origin}${path || '/'}`

  document.title = nextTitle
  setMeta('description', nextDescription)
  setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow')
  setMeta('og:title', nextTitle, 'property')
  setMeta('og:description', nextDescription, 'property')
  setMeta('og:url', url, 'property')
  setMeta('og:type', 'website', 'property')
  setMeta('twitter:card', 'summary')
  setMeta('twitter:title', nextTitle)
  setMeta('twitter:description', nextDescription)

  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', url)
}

export function setWordJsonLd(word) {
  if (!word) {
    setJsonLd('engvocab-word-jsonld', null)
    return
  }
  setJsonLd('engvocab-word-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: word.word,
    description: word.explainer || word.meaning,
    inDefinedTermSet: 'EngVocab',
  })
}

export function setTopicJsonLd(topic, count) {
  if (!topic) {
    setJsonLd('engvocab-topic-jsonld', null)
    return
  }
  setJsonLd('engvocab-topic-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: topic.h1,
    description: topic.description,
    numberOfItems: count,
  })
}
