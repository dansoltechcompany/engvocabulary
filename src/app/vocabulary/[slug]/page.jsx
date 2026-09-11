import { notFound } from 'next/navigation'
import { TOPICS, topicBySlug, topicWords, topicLevelRange } from '../../../data/topics.js'
import { pageMeta, topicJsonLd } from '../../../lib/seo.js'
import { TopicHubScreen } from '../../../components/screens.jsx'

export function generateStaticParams() {
  return TOPICS.map((topic) => ({ slug: topic.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const topic = topicBySlug(slug)
  if (!topic) {
    return pageMeta({
      title: 'Topic not found | EngVocab',
      description: 'That topic is not on EngVocab. Browse the sixteen vocabulary lists.',
      path: `/vocabulary/${slug || ''}`,
      noindex: true,
    })
  }
  const range = topicLevelRange(topic)
  return pageMeta({
    title: `${topic.title} in English${range ? ` (${range})` : ''} | EngVocab`,
    description: topic.description,
    path: `/vocabulary/${topic.slug}`,
  })
}

export default async function TopicPage({ params }) {
  const { slug } = await params
  const topic = topicBySlug(slug)
  if (!topic) notFound()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(topicJsonLd(topic, topicWords(topic).length)) }}
      />
      <TopicHubScreen topic={topic} />
    </>
  )
}
