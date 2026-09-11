import { notFound } from 'next/navigation'
import { WORDS, WORD_BY_ID } from '../../../data/words.js'
import { buildLesson } from '../../../lib/lesson.js'
import { pageMeta, wordJsonLd } from '../../../lib/seo.js'
import { WordArticle } from '../../../components/WordArticle.jsx'

export function generateStaticParams() {
  return WORDS.map((word) => ({ id: word.id }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const word = WORD_BY_ID[id]
  if (!word) {
    return pageMeta({
      title: 'Word not found | EngVocab',
      description: 'That word is not in the EngVocab dictionary. Browse by topic or by level.',
      path: `/word/${id || ''}`,
      noindex: true,
    })
  }
  const lesson = buildLesson(word)
  return pageMeta({
    title: `${word.word} meaning — ${word.level} English | EngVocab`,
    description: lesson.explainer.slice(0, 158),
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
