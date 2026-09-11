'use client'

import { useEffect, useState } from 'react'
import { getCard, loadState } from '../lib/progress.js'
import { stageLabel } from '../lib/related.js'

export function StageChip({ id }) {
  const [label, setLabel] = useState('New')
  useEffect(() => {
    setLabel(stageLabel(getCard(loadState(), id).stage))
  }, [id])
  return <span className="chip">{label}</span>
}
