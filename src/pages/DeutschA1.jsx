import React from 'react'
import KursSeite from '../components/DeutschC1/KursSeite'

// Curso A1 — misma arquitectura. Temario en server/deutscha1/blocks.js.
const KURS_A1 = {
  name: 'Deutsch A1',
  sub: 'Start Deutsch 1 · Kurs & Lehrbuch · 37 Lektionen',
  base: '/deutscha1',
  api: '/api/deutscha1',
  total: 37,
  defaultLesson: 4,
  artBase: '/deutschc1',
}

export default function DeutschA1() {
  return <KursSeite kurs={KURS_A1} />
}
