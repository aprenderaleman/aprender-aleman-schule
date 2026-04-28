import React, { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { copyToClipboard } from '../../utils/clipboard'
import { haptics } from '../../utils/haptics'
import Tooltip from './Tooltip'

/**
 * One-click copy button. Shows a checkmark for 1.5s after success.
 * Tooltip-wrapped, accessible.
 *
 *   <CopyButton text="user@example.com" />
 */
export default function CopyButton({ text, label = 'Kopieren', size = 14, className = '' }) {
  const [copied, setCopied] = useState(false)

  const onClick = async (e) => {
    e.stopPropagation()
    e.preventDefault()
    const ok = await copyToClipboard(text)
    if (ok) {
      haptics.success()
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } else {
      haptics.error()
    }
  }

  return (
    <Tooltip content={copied ? 'Kopiert!' : label}>
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        className={
          'inline-flex items-center justify-center p-1.5 rounded-md ' +
          'text-muted-foreground hover:text-foreground hover:bg-muted ' +
          'transition-colors focus-visible:ring-2 focus-visible:ring-warm focus-visible:outline-none ' +
          className
        }
      >
        {copied ? <Check size={size} className="text-success" /> : <Copy size={size} />}
      </button>
    </Tooltip>
  )
}
