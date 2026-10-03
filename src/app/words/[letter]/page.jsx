import { notFound } from 'next/navigation'
import { LetterWordList } from '../../../components/LetterWordList.jsx'
import { LETTERS, wordsForLetter } from '../../../lib/directory.js'
import { headword } from '../../../lib/labels.js'
import { letterJsonLd, pageMeta } from '../../../lib/seo.js'

export function generateStaticParams() {
  return LETTERS.map((letter) => ({ letter }))
}

export async function generateMetadata({ params }) {
  const { letter } = await params
  const current = String(letter || '').toLowerCase()
  if (!LETTERS.includes(current)) {
    return pageMeta({
      title: 'Letter not found | EngVocabulary',
      description: 'That letter is not in the EngVocabulary dictionary. Browse words from A to Z.',
      path: `/words/${current || ''}`,
      noindex: true,
    })
  }
  const words = wordsForLetter(current)
  const first = headword(words[0]?.word)
  const last = headword(words[words.length - 1]?.word)
  return pageMeta({
    title: `${current.toUpperCase()} — English words | EngVocabulary`,
    description: `${words.length} English words starting with ${current.toUpperCase()}${first && last ? `, from ${first} to ${last}` : ''}, with meanings and examples.`,
    path: `/words/${current}`,
  })
}

export default async function LetterPage({ params }) {
  const { letter } = await params
  const current = String(letter || '').toLowerCase()
  if (!LETTERS.includes(current)) notFound()
  const words = wordsForLetter(current)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(letterJsonLd(current, words)) }}
      />
      <LetterWordList letter={current} words={words} />
    </>
  )
}
