# Übungsheft A1 — formato de datos (para redactores)

Cada lección del A1 tiene un cuaderno: `server/deutscha1/heft/heft-NN.js`
(NN = id de la lección, dos dígitos). Registro en `server/deutscha1/heft/index.js`.
El cuaderno practica SOLO lo que la lección enseñó (más lo acumulado de
lecciones anteriores). El alumno lo abre al terminar la lección.

## Regla de oro del idioma de las instrucciones (A1)

El alumno A1 apenas lee alemán. TODA instrucción (`anweisung`, `aufgabe`):
- Frases principales cortas, imperativo con du: *Wähle die richtige Form.*
- PROHIBIDO: Nebensätze (weil/dass/wenn…), Genitiv, Dativ salvo fórmulas
  fijas ya enseñadas (*mit*, *im*), pasiva, léxico fuera de A1.
- Cada instrucción lleva glosa española: `Wähle die richtige Form. ~~(Elige la forma correcta.)~~`
- Metalenguaje solo el de las lecciones (Verb, Frage, Artikel) — glosado.

## Estructura del archivo

```js
// Übungsheft A1 — Lektion NN: <título de la lección>
export default {
  lektion: NN,
  titel: 'Übungsheft — <título corto>',
  teile: [ /* exactamente 3 Teile, en este orden: */ ]
}
```

### Teil 1 — Grammatik (8-10 ítems)

```js
{
  typ: 'grammatik',
  titel: 'Grammatik',
  anweisung: '<instrucción global simple + glosa>',
  items: [ /* mezcla de estos tipos: */ ]
}
```

Tipos de ítem (todos autocorregibles en el cliente):

1. **mc** — elección múltiple (2-4 opciones):
   `{ typ: 'mc', frage: 'Ich ___ María.', optionen: ['bin', 'bist', 'ist'], loesung: 0 }`
   `loesung` = índice en `optionen` (0-based). El player baraja las opciones.
2. **luecke** — huecos con banco de palabras (desplegable):
   `{ typ: 'luecke', text: 'Wir {1} aus Spanien. Ihr {2} nett.', bank: ['sind', 'seid', 'bist'], loesungen: { 1: 'sind', 2: 'seid' } }`
   Cada solución DEBE estar en `bank`; el bank puede llevar 1-2 distractores.
3. **satzbau** — ordenar palabras para formar la frase:
   `{ typ: 'satzbau', woerter: ['heiße', 'ich', 'Paul'], loesung: 'Ich heiße Paul.' }`
   `woerter` en orden barajado fijo; `loesung` con mayúscula inicial y puntuación.
   Si hay otro orden IGUAL de correcto (p. ej. Mittelfeld libre: *Ich habe am
   Samstag Fußball gespielt* / *Ich habe Fußball am Samstag gespielt*), añádelo
   en `alt: ['…']` — mismas palabras exactas. El corrector acepta loesung o
   cualquier alt. La palabra inicial va con mayúscula en `woerter` como ancla.
4. **zuordnen** — emparejar (4-6 pares):
   `{ typ: 'zuordnen', links: ['ich', 'du', 'er'], rechts: ['bin', 'bist', 'ist'], loesung: { 'ich': 'bin', 'du': 'bist', 'er': 'ist' } }`
5. **korrektur** — ¿cuál es la correcta? (2 variantes, una con el error típico
   del hispanohablante):
   `{ typ: 'korrektur', optionen: ['Ich bin 25 Jahre alt.', 'Ich habe 25 Jahre.'], loesung: 0, warum: 'La edad en alemán va con **sein**, no con *haben*. ~~(soy 25 años ≠ tengo)~~' }`

Reparto orientativo: 3-4 mc/luecke + 2 satzbau + 1-2 zuordnen + 1-2 korrektur.

### Teil 2 — Lesen (texto nuevo + 4 ítems)

```js
{
  typ: 'lesen',
  titel: 'Lesen',
  anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
  textTitel: '<título del texto, p. ej. E-Mail von Lena>',
  text: '<40-80 palabras. Recicla el Kernwortschatz DE ESTA lección. Formato de examen rotando por lección: nota / anuncio / e-mail corto / cartel>',
  items: [
    { typ: 'rf', aussage: 'Lena wohnt in Berlin.', loesung: true },
    { typ: 'mc', frage: '…', optionen: […], loesung: 0 },
  ]
}
```
Reglas: la respuesta se deduce SOLO del texto; sin ambigüedad; las 4 claves
nunca son todas iguales (mezclar richtig/falsch, variar índices mc).

### Teil 3 — Schreiben (1 tarea, alterna por lección)

Variante A (lecciones pares) — **formular** (corrección automática):
```js
{
  typ: 'schreiben', variante: 'formular',
  titel: 'Schreiben',
  anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
  quelle: '<3-5 frases con los datos>',
  felder: [ { id: 'name', label: 'Name', erwartet: ['Sara Weber', 'Weber'] }, … ]  // 4-5 campos
}
```
`erwartet`: variantes razonables, la literal del texto SIEMPRE incluida.

Variante B (lecciones impares) — **texto** (corrección por IA):
```js
{
  typ: 'schreiben', variante: 'text',
  titel: 'Schreiben',
  anweisung: 'Schreib 3 Sätze. ~~(Escribe 3 frases.)~~',
  aufgabe: '<consigna concreta ligada al tema de la lección>',
  punkte: ['<3 bullets simples de contenido>'],
  minWoerter: 15,
  beispielLoesung: '<solución modelo A1, mostrable tras corregir>'
}
```

## Calidad

- Resuelve tú cada ítem antes de entregar; claves verificadas.
- Alemán y glosas impecables; gramática de la lección y anteriores, NUNCA posterior.
- Cero 'Goethe', cero marcas reales. Personajes variados (no siempre María).
- Los ítems reciclan el Kernwortschatz de la lección — esa es la función del cuaderno.
