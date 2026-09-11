'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

function safeDecode(value) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

function scrollToHash() {
  const hash = safeDecode(window.location.hash.replace(/^#/, ''))
  if (hash && hash !== 'main') {
    const node = document.getElementById(hash)
    if (node) {
      node.scrollIntoView({ block: 'center' })
      return true
    }
    return false
  }
  window.scrollTo(0, 0)
  return true
}

export function HashScroll() {
  const pathname = usePathname()
  useEffect(() => {
    let tries = 0
    let timer
    const run = () => {
      if (scrollToHash()) return
      if (tries < 12) {
        tries += 1
        timer = window.setTimeout(run, 50)
      }
    }
    requestAnimationFrame(run)
    window.addEventListener('hashchange', run)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('hashchange', run)
    }
  }, [pathname])
  return null
}
