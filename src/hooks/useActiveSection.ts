'use client'

import { useEffect, useState } from 'react'

/**
 * Tracks which of the given section IDs is currently most prominent in the
 * viewport and returns its id (or null if none match).
 *
 * Uses IntersectionObserver with a top-band rootMargin so only the section
 * currently crossing the top ~30% of the viewport is considered active.
 * Also handles the bottom-of-page edge case where the final section cannot
 * reach the active band due to page height: when the user scrolls within a
 * few pixels of the document bottom, the last id in `sectionIds` is forced
 * active.
 */
export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  // Stable key so effect only re-runs when the set of ids actually changes.
  const idsKey = sectionIds.join('|')

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sectionIds.length === 0) {
      setActiveId(null)
      return
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) {
      setActiveId(null)
      return
    }

    // Track which sections are currently intersecting the top band.
    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top)
          } else {
            visible.delete(entry.target.id)
          }
        })

        if (visible.size === 0) {
          // Don't clobber a bottom-of-page forced value — let the scroll
          // handler decide. But if we're not at the bottom, clear.
          const scrolledToBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 4
          if (!scrolledToBottom) {
            setActiveId(null)
          }
          return
        }

        // Prefer the section whose top is closest to the top of the viewport
        // (smallest absolute top value among visible entries).
        let bestId: string | null = null
        let bestTop = Number.POSITIVE_INFINITY
        visible.forEach((top, id) => {
          if (Math.abs(top) < bestTop) {
            bestTop = Math.abs(top)
            bestId = id
          }
        })
        if (bestId) setActiveId(bestId)
      },
      {
        // Only elements intersecting the top ~30% band register as active.
        rootMargin: '-30% 0% -60% 0%',
        threshold: 0,
      }
    )

    elements.forEach((el) => observer.observe(el))

    // Bottom-of-page fallback: the last section (e.g. Footer/contact) often
    // can't reach the active band because its height is shorter than the
    // band's bottom edge. When we're within a few pixels of the document
    // bottom, force the last configured id active.
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      if (scrolledToBottom) {
        const lastId = sectionIds[sectionIds.length - 1]
        setActiveId(lastId)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Run once in case the page loads scrolled to the bottom (anchor links).
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey])

  return activeId
}
