// Registro de los Übungshefte del B1 — un cuaderno por lección.
// Formato: docs/deutschb1/HEFT-FORMAT.md. GENERADO: para editar un cuaderno,
// toca su heft-NN.js; para regenerar este índice, vuelve a listar el directorio.
import heft01 from './heft-01.js'
import heft02 from './heft-02.js'
import heft03 from './heft-03.js'
import heft04 from './heft-04.js'
import heft05 from './heft-05.js'
import heft06 from './heft-06.js'
import heft07 from './heft-07.js'
import heft08 from './heft-08.js'
import heft09 from './heft-09.js'
import heft10 from './heft-10.js'
import heft11 from './heft-11.js'
import heft12 from './heft-12.js'
import heft13 from './heft-13.js'
import heft14 from './heft-14.js'
import heft15 from './heft-15.js'
import heft16 from './heft-16.js'
import heft17 from './heft-17.js'
import heft18 from './heft-18.js'
import heft19 from './heft-19.js'
import heft20 from './heft-20.js'
import heft21 from './heft-21.js'
import heft22 from './heft-22.js'
import heft23 from './heft-23.js'
import heft24 from './heft-24.js'
import heft25 from './heft-25.js'
import heft26 from './heft-26.js'
import heft27 from './heft-27.js'
import heft28 from './heft-28.js'
import heft29 from './heft-29.js'
import heft30 from './heft-30.js'
import heft31 from './heft-31.js'
import heft32 from './heft-32.js'
import heft33 from './heft-33.js'
import heft34 from './heft-34.js'
import heft35 from './heft-35.js'
import heft36 from './heft-36.js'
import heft37 from './heft-37.js'
import heft38 from './heft-38.js'
import heft39 from './heft-39.js'
import heft40 from './heft-40.js'
import heft41 from './heft-41.js'
import heft42 from './heft-42.js'
import heft43 from './heft-43.js'

export const HEFTE = {
  1: heft01,
  2: heft02,
  3: heft03,
  4: heft04,
  5: heft05,
  6: heft06,
  7: heft07,
  8: heft08,
  9: heft09,
  10: heft10,
  11: heft11,
  12: heft12,
  13: heft13,
  14: heft14,
  15: heft15,
  16: heft16,
  17: heft17,
  18: heft18,
  19: heft19,
  20: heft20,
  21: heft21,
  22: heft22,
  23: heft23,
  24: heft24,
  25: heft25,
  26: heft26,
  27: heft27,
  28: heft28,
  29: heft29,
  30: heft30,
  31: heft31,
  32: heft32,
  33: heft33,
  34: heft34,
  35: heft35,
  36: heft36,
  37: heft37,
  38: heft38,
  39: heft39,
  40: heft40,
  41: heft41,
  42: heft42,
  43: heft43,
}

export function getHeft(id) { return HEFTE[id] || null }
export function hasHeft(id) { return Boolean(HEFTE[id]) }
