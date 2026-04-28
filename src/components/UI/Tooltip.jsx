import React, { useState, useRef, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Lightweight accessible tooltip. CSS-only positioning, framer-motion fade.
 * Skips on touch devices (no hover concept). Activates on focus too (a11y).
 *
 *   <Tooltip content="Dunkler Modus" shortcut="⌘ ⇧ L">
 *     <button>...</button>
 *   </Tooltip>
 */
export default function Tooltip({
  content,
  shortcut,
  children,
  side = 'bottom',
  delay = 350,
}) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef(null)
  const id = useId()

  const show = () => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setOpen(true), delay)
  }
  const hide = () => {
    clearTimeout(timeoutRef.current)
    setOpen(false)
  }

  if (!content) return children

  // Inject aria-describedby on the child
  const child = React.Children.only(children)
  const enhanced = React.cloneElement(child, {
    'aria-describedby': open ? id : undefined,
    onMouseEnter: (e) => { show(); child.props.onMouseEnter?.(e) },
    onMouseLeave: (e) => { hide(); child.props.onMouseLeave?.(e) },
    onFocus:      (e) => { show(); child.props.onFocus?.(e) },
    onBlur:       (e) => { hide(); child.props.onBlur?.(e) },
  })

  const sideClasses = {
    top:    'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left:   'right-full top-1/2 -translate-y-1/2 mr-2',
    right:  'left-full top-1/2 -translate-y-1/2 ml-2',
  }

  return (
    <span className="relative inline-flex hidden-on-touch:contents">
      {enhanced}
      <AnimatePresence>
        {open && (
          <motion.span
            id={id}
            role="tooltip"
            initial={{ opacity: 0, y: side === 'bottom' ? -2 : 2, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className={
              `pointer-events-none absolute z-50 ${sideClasses[side]} ` +
              'px-2 py-1 rounded-md bg-foreground text-background text-xs font-medium ' +
              'shadow-lg whitespace-nowrap flex items-center gap-1.5'
            }
          >
            {content}
            {shortcut && (
              <span className="ml-1 px-1 py-px text-[9px] font-bold bg-background/15 rounded border border-background/20">
                {shortcut}
              </span>
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
