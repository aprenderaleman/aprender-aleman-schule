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

export function lessonArt(kurs, id) {
  const nivel = String(kurs?.base || '').replace('/deutsch', '')
  return LESSON_ART[`${nivel}/${id}`] || null
}
