// Registro de lecciones con contenido desarrollado.
//
// Para publicar una lección nueva:
//   1. crea content/lektion-NN.js siguiendo el formato de lektion-24.js
//   2. impórtala aquí y añádela al objeto CONTENT con su id numérico
// Nada más. El sidebar, el pager y la API se actualizan solos.

import lektion24 from './lektion-24.js'

export const CONTENT = {
  24: lektion24,
}
