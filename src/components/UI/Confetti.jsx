import React, { useEffect, useRef } from 'react'

const COLORS = ['#f97316', '#fb923c', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f472b6']

function createPiece(container) {
  const el = document.createElement('div')
  el.className = 'confetti-piece'
  const size = Math.random() * 10 + 6
  el.style.cssText = `
    position: fixed;
    width: ${size}px;
    height: ${size}px;
    background: ${COLORS[Math.floor(Math.random() * COLORS.length)]};
    left: ${Math.random() * 100}vw;
    top: -20px;
    border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    animation: confetti-fall ${Math.random() * 2 + 2}s linear forwards;
    animation-delay: ${Math.random() * 1.5}s;
    z-index: 9999;
    pointer-events: none;
  `
  container.appendChild(el)
  setTimeout(() => el.remove(), 4000)
}

export default function Confetti({ active, onDone }) {
  const containerRef = useRef(document.body)

  useEffect(() => {
    if (!active) return
    const count = 80
    for (let i = 0; i < count; i++) {
      setTimeout(() => createPiece(containerRef.current), i * 30)
    }
    if (onDone) {
      setTimeout(onDone, 4000)
    }
  }, [active, onDone])

  return null
}
