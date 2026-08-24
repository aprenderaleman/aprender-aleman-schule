import React from 'react'
import KursSeite from '../components/DeutschC1/KursSeite'

// Curso B2 — misma arquitectura que el C1. El temario vive en
// server/deutschb2/blocks.js; mientras no haya lecciones escritas, todas
// muestran "Inhalt in Vorbereitung". Reutiliza las ilustraciones de bloque
// del C1 (son genéricas por bloque, no por nivel).
const KURS_B2 = {
  name: 'Deutsch B2',
  sub: 'Kompletter Vorbereitungskurs · 40 Lektionen',
  base: '/deutschb2',
  api: '/api/deutschb2',
  total: 40,
  defaultLesson: 1,
  artBase: '/deutschc1',
}

export default function DeutschB2() {
  return <KursSeite kurs={KURS_B2} />
}
