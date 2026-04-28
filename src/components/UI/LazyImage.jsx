import React, { useState } from 'react'

/**
 * Drop-in replacement for <img> that lazy-loads, decodes async, and
 * fades in once decoded so there's no jarring pop.
 *
 * Use `priority` for above-the-fold images that should NOT be lazy.
 */
export default function LazyImage({
  src,
  alt = '',
  className = '',
  priority = false,
  width,
  height,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false)
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={priority ? 'high' : 'auto'}
      onLoad={() => setLoaded(true)}
      className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      {...rest}
    />
  )
}
