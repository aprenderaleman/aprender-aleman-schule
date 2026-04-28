import React from 'react'

/** Pre-baked skeleton blocks. Just compose them in your loading state. */
export function SkeletonBox({ className = '' }) {
  return <div className={`skeleton rounded-lg ${className}`} />
}

export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="skeleton rounded h-3"
          style={{ width: `${85 - i * 12}%` }}
        />
      ))}
    </div>
  )
}

export function SkeletonCard({ className = '' }) {
  return (
    <div className={`card ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <SkeletonBox className="w-10 h-10 rounded-full" />
        <div className="flex-1 space-y-1.5">
          <SkeletonBox className="h-3 w-2/3" />
          <SkeletonBox className="h-2.5 w-1/3" />
        </div>
      </div>
      <SkeletonText lines={2} />
    </div>
  )
}

export function SkeletonStat() {
  return (
    <div className="card text-center">
      <SkeletonBox className="w-6 h-6 rounded mx-auto mb-2" />
      <SkeletonBox className="h-7 w-16 mx-auto mb-1" />
      <SkeletonBox className="h-2.5 w-24 mx-auto" />
    </div>
  )
}

export function SkeletonRow({ className = '' }) {
  return (
    <div className={`card flex items-center gap-3 ${className}`}>
      <SkeletonBox className="w-12 h-12 rounded-xl shrink-0" />
      <div className="flex-1 space-y-1.5">
        <SkeletonBox className="h-3 w-3/4" />
        <SkeletonBox className="h-2.5 w-1/2" />
      </div>
    </div>
  )
}
