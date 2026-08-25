import React from 'react'
import KursSeite from '../components/DeutschC1/KursSeite'

// Curso B1 — misma arquitectura que C1/B2. Temario en server/deutschb1/blocks.js.
const KURS_B1 = {
  name: 'Deutsch B1',
  sub: 'Kurs & Lehrbuch · 43 Lektionen',
  base: '/deutschb1',
  api: '/api/deutschb1',
  total: 43,
  defaultLesson: 8,
  artBase: '/deutschc1',
}

export default function DeutschB1() {
  return <KursSeite kurs={KURS_B1} />
}
