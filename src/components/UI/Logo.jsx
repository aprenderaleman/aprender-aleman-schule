import React, { useEffect, useState } from 'react'

/**
 * Read the active dark mode state by inspecting <html class="dark">.
 * Doesn't depend on ThemeContext — safe to call even from outside the
 * provider tree (e.g. the standalone MaintenancePage).
 */
function useIsDark() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  )
  useEffect(() => {
    if (typeof document === 'undefined') return
    const html = document.documentElement
    const update = () => setIsDark(html.classList.contains('dark'))
    update()
    const obs = new MutationObserver(update)
    obs.observe(html, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])
  return isDark
}

/**
 * Schule logo, always wrapped in the right contrast container.
 *
 *   /icons/logoclaro.png   → always inside a WHITE container
 *   /icons/logooscuro.png  → always inside a NAVY container
 *
 * Props:
 *   size      – inner image size in px (the wrapper adds padding around it).
 *               Default 32.
 *   variant   – 'auto' (default) follows the active theme: white-on-light,
 *               navy-on-dark. Use 'light' or 'dark' to force the variant
 *               when the surrounding background already has a fixed color
 *               (e.g. a dark hero, the footer, an admin sidebar).
 *   rounded   – Tailwind rounding class. Default 'rounded-xl'.
 *   className – extra classes for the wrapper.
 */
export default function Logo({
  size = 32,
  variant = 'auto',
  rounded = 'rounded-xl',
  className = '',
  alt = 'Schule',
}) {
  const isDark = useIsDark()
  const useDark = variant === 'dark' || (variant === 'auto' && isDark)

  const src = useDark ? '/icons/logooscuro.png' : '/icons/logoclaro.png'
  const bgCls = useDark ? 'bg-navy' : 'bg-white'

  // Padding sized to the image so logo is never crammed against the edge
  const padPx = Math.max(2, Math.round(size * 0.12))
  const wrapperPx = size + padPx * 2

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 ${bgCls} ${rounded} ${className}`}
      style={{ width: wrapperPx, height: wrapperPx, padding: padPx }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain select-none"
        draggable="false"
      />
    </span>
  )
}
