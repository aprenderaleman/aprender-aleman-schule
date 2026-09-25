// Registro de los Übungshefte del C1 — un cuaderno por lección.
// Formato: docs/deutschc1/HEFT-FORMAT.md. GENERADO: para editar un cuaderno,
// toca su heft-NN.js; para regenerar este índice, vuelve a listar el directorio.

export const HEFTE = {}

export function getHeft(id) { return HEFTE[id] || null }
export function hasHeft(id) { return Boolean(HEFTE[id]) }
