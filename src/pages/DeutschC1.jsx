import React from 'react'
import KursSeite from '../components/DeutschC1/KursSeite'

// Curso C1. La marca visible es Aprender-Aleman.de (kicker del sidebar);
// el examen que prepara (Zertifikat C1) se nombra dentro de las
// lecciones como dato, no como marca del curso.
const KURS_C1 = {
  name: 'Deutsch C1',
  sub: 'Kompletter Vorbereitungskurs · 40 Lektionen',
  base: '/deutschc1',
  api: '/api/deutschc1',
  total: 40,
  defaultLesson: 1,
  artBase: '/deutschc1',
}

export default function DeutschC1() {
  return <KursSeite kurs={KURS_C1} />
}
