// Imágenes de las lecciones (rediseño visual). Clave: «<nivel>/<lección>».
//   hero: imagen de cabecera
//   mid:  imagen dentro de la lección; `after` = tras qué sección (0 = la primera)
// Son decorativas y públicas (public/kurs-art/). Una lección sin entrada
// se ve igual, solo que sin imagen.
export const LESSON_ART = {
  'a1/33': {
    hero: '/kurs-art/a1/33.webp',
    mid: { src: '/kurs-art/a1/33-b.webp', after: 1 },
  },
  'b1/12': {
    hero: '/kurs-art/b1/12.webp',
  },
}

// Rediseño visual en pruebas: ?diseno=2 lo activa (y se recuerda en este
// navegador), ?diseno=1 vuelve al actual. El resto de usuarios no lo ve.
export function useDisenoV2() {
  try {
    const q = new URLSearchParams(window.location.search).get('diseno')
    if (q === '2') localStorage.setItem('kurs-diseno', '2')
    if (q === '1') localStorage.removeItem('kurs-diseno')
    return localStorage.getItem('kurs-diseno') === '2'
  } catch { return false }
}

export function lessonArt(kurs, id) {
  const nivel = String(kurs?.base || '').replace('/deutsch', '')
  return LESSON_ART[`${nivel}/${id}`] || null
}
