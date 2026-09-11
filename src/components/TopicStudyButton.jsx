'use client'

import { useStudy } from './StudyProvider.jsx'

export function TopicStudyButton({ slug }) {
  const { ready, startTopicSession } = useStudy()
  return (
    <button className="cta" type="button" onClick={() => startTopicSession(slug)} disabled={!ready}>
      <span>
        Study this topic
        <br />
        <small>8 words from the list</small>
      </span>
      <span>→</span>
    </button>
  )
}
