import { SITE } from '../data/site.js'

export const DEFAULT_TITLE = 'EngVocabulary — learn English vocabulary'
export const DEFAULT_DESCRIPTION =
  'Learn English words from A1 to C2. Short daily practice with clear meanings and examples.'

export function pageMeta({ title, description, path, noindex = false }) {
  const nextTitle = title || DEFAULT_TITLE
  const nextDescription = description || DEFAULT_DESCRIPTION
  const url = `${SITE.origin}${path || '/'}`
  return {
    title: nextTitle,
    description: nextDescription,
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: nextTitle,
      description: nextDescription,
      url,
      type: 'website',
      siteName: SITE.name,
    },
    twitter: {
      card: 'summary',
      title: nextTitle,
      description: nextDescription,
    },
  }
}

export function wordJsonLd(word) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: word.word,
    description: word.explainer || word.meaning,
    inDefinedTermSet: 'EngVocabulary',
    url: `${SITE.origin}/word/${word.id}`,
  }
}

export function topicJsonLd(topic, count) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: topic.h1,
    description: topic.description,
    numberOfItems: count,
    url: `${SITE.origin}/vocabulary/${topic.slug}`,
  }
}
