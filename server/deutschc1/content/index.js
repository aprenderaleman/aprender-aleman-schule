// Registro de lecciones con contenido desarrollado.
//
// Para publicar una lección nueva:
//   1. crea content/lektion-NN.js siguiendo el formato de las existentes
//   2. impórtala aquí y añádela al objeto CONTENT con su id numérico
// Nada más. El sidebar, el marcador dorado, el pager y la API se actualizan solos.

import lektion03 from './lektion-03.js'
import lektion04 from './lektion-04.js'
import lektion05 from './lektion-05.js'
import lektion06 from './lektion-06.js'
import lektion10 from './lektion-10.js'
import lektion24 from './lektion-24.js'
import lektion25 from './lektion-25.js'

export const CONTENT = {
  3: lektion03,
  4: lektion04,
  5: lektion05,
  6: lektion06,
  10: lektion10,
  24: lektion24,
  25: lektion25,
}
