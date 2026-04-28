import { useEffect, useRef } from 'react'

/**
 * Traps Tab focus inside the given container while `active` is true.
 * Restores focus to the previously-focused element when deactivated.
 *
 *   const ref = useRef()
 *   useFocusTrap(ref, isOpen)
 *   <div ref={ref}>...</div>
 */
export function useFocusTrap(containerRef, active = true) {
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (!active || !containerRef.current) return

    previousFocusRef.current = document.activeElement

    const container = containerRef.current
    const getFocusable = () => {
      const selectors = [
        'a[href]', 'button:not([disabled])', 'textarea:not([disabled])',
        'input:not([disabled])', 'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(',')
      return Array.from(container.querySelectorAll(selectors))
        .filter(el => !el.hasAttribute('aria-hidden') && el.offsetParent !== null)
    }

    // Auto-focus the first focusable
    setTimeout(() => {
      const focusables = getFocusable()
      focusables[0]?.focus()
    }, 0)

    const onKey = (e) => {
      if (e.key !== 'Tab') return
      const focusables = getFocusable()
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement

      if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }

    container.addEventListener('keydown', onKey)
    return () => {
      container.removeEventListener('keydown', onKey)
      // Return focus to whatever had it before the trap activated
      previousFocusRef.current?.focus?.()
    }
  }, [active, containerRef])
}
