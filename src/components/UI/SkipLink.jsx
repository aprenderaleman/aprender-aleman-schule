import React from 'react'

/**
 * Visually-hidden link that becomes visible on focus. Lets keyboard users
 * skip the navigation chrome and jump directly to <main id="main">.
 *
 * Should be the first focusable element in the DOM.
 */
export default function SkipLink() {
  return (
    <a
      href="#main"
      className={
        'sr-only focus:not-sr-only ' +
        'focus:fixed focus:top-3 focus:left-3 focus:z-[200] ' +
        'focus:bg-warm focus:text-warm-foreground focus:px-4 focus:py-2 focus:rounded-lg ' +
        'focus:font-bold focus:shadow-xl ' +
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warm'
      }
    >
      Zum Hauptinhalt springen
    </a>
  )
}
