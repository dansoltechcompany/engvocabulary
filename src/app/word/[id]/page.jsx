import { notFound } from 'next/navigation'
import { WORDS, WORD_BY_ID } from '../../../data/words.js'
import { buildLesson } from '../../../lib/lesson.js'
import { headword } from '../../../lib/labels.js'
import { pageMeta, wordJsonLd, clipDescription } from '../../../lib/seo.js'
import { WordArticle } from '../../../components/WordArticle.jsx'

export function generateStaticParams() {
  return WORDS.map((word) => ({ id: word.id }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const word = WORD_BY_ID[id]
  if (!word) {
    return pageMeta({
      title: 'Word not found | EngVocabulary',
      description: 'That word is not in the EngVocabulary dictionary. Browse by topic or by level.',
      path: `/word/${id || ''}`,
      noindex: true,
    })
  }
  const lesson = buildLesson(word)
  return pageMeta({
    title: `${headword(word.word)} meaning — ${word.level} English | EngVocabulary`,
    description: clipDescription(lesson.explainer),
    path: `/word/${word.id}`,
  })
}

export default async function WordPage({ params }) {
  const { id } = await params
  const word = WORD_BY_ID[id]
  if (!word) notFound()
  const lesson = buildLesson(word)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wordJsonLd({ ...word, explainer: lesson.explainer })) }}
      />
      <WordArticle word={word} />
    </>
  )
}
