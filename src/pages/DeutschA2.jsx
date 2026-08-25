import React from 'react'
import KursSeite from '../components/DeutschC1/KursSeite'

// Curso A2 — misma arquitectura. Temario en server/deutscha2/blocks.js.
const KURS_A2 = {
  name: 'Deutsch A2',
  sub: 'Kurs & Lehrbuch · 40 Lektionen',
  base: '/deutscha2',
  api: '/api/deutscha2',
  total: 40,
  defaultLesson: 4,
  artBase: '/deutschc1',
}

export default function DeutschA2() {
  return <KursSeite kurs={KURS_A2} />
}
