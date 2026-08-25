# Curso (sin marca externa) C1 — especificación de lección (para redactores)

Cada lección es UN archivo `server/deutschc1/content/lektion-NN.js` (NN con dos
dígitos) que hace `export default { spec, h1, lead, content }`. Nada más: ni
imports, ni registro (el registro en `content/index.js` lo hace el integrador).

**La referencia canónica es `server/deutschc1/content/lektion-03.js`** —
la lección modelo aprobada. Léela entera antes de escribir. Tu lección debe
tener su misma estructura, densidad y tono.

## Estándar de 8 secciones (obligatorio, en este orden)

1. **Kopf** — `spec` (array de 4-5 strings: bloque/módulo · tema · nivel ·
   Prüfungsrelevanz), `h1`, `lead` (una frase).
2. **Lernziele** — bloque `lernziele`, 3-4 ítems en formato can-do
   («Am Ende kannst du…», «Du erkennst…»).
3. **Kernwortschatz** — bloque `wortschatz`, 10-14 entradas con artículo,
   Kollokation real y traducción breve al español. + `hinweis` opcional.
4. **Erklärung** — 2-5 bloques (`prose` con card, `steps`, `tabelle`). Regla
   clara, mecanismo, contraste (B2→C1, verbal↔nominal, coloquial↔formal),
   y cuándo usar / cuándo no.
5. **Beispiele** — 3-5 bloques `beispiele` agrupados por función/caso
   (usa `kicker` + `titel`), 12-18 ejemplos en total, con glosa `gl` breve.
6. **Übungen** — TRES bloques `uebung` de dificultad creciente:
   erkennen → umformen/anwenden → produzieren. Eyebrows:
   «Anwendung — Übung 1 · Erkennen», «Übung 2 · …», «Übung 3 · Produzieren».
   Toda solución completa y correcta; en la 3 (producción libre) da una
   «Mögliche Lösung» y di qué variantes son válidas.
7. **Prüfungsbezug** — un bloque `pruefungsaufgabe` con formato REAL del
   examen (mini-Lückentext, Satzeinsetzung, fragmento de Vortrag/Diskussion,
   tarea de escritura corta…) + un bloque `tipp` (Prüfungstipp).
8. **Abschluss** — `tabelle` con eyebrow «Zusammenfassung» (4-6 filas de lo
   esencial) + `selbstcheck` (3-4 ítems «Ich kann…» que espejan los
   Lernziele) + `ausblick` (cómo enlaza con la lección siguiente; el botón a
   la siguiente lección lo pone el renderer solo — no pongas enlaces).

Separa secciones con `{ type: 'rule' }` como en la lección 3.
Longitud objetivo: **1.800-2.200 palabras** renderizadas.

## Tipos de bloque disponibles (no inventes otros)

```js
{ type: 'rule' }
{ type: 'lernziele', eyebrow, items: ['…'] }
{ type: 'wortschatz', eyebrow, items: [{ wort, kollokation, es }], hinweis? }
{ type: 'prose', eyebrow?, card?, titel?, kicker?, absaetze: ['…'] }
{ type: 'steps', eyebrow?, steps: [{ titel, text, badge? }] }   // sin badge → numerado
{ type: 'tabelle', eyebrow?, kopf: ['…'], zeilen: [['…','…']] } // 1ª col en mono dorado
{ type: 'beispiele', eyebrow?, kicker?, titel?, items: [{ text, gl? }] }
{ type: 'vergleich', eyebrow?, titel, zeilen: [{ satz, label }] } // caja navy
{ type: 'redemittel', eyebrow?, gruppen: [{ fn, saetze: [{ satz, gloss? }] }] }
{ type: 'modell', eyebrow?, thema, woerter, absaetze: ['…'], annotationen: [{ tag, text }] }
{ type: 'tipp', label?, text }                                  // label por defecto: Prüfungstipp
{ type: 'uebung', eyebrow?, frage, aufgabe?, aufgaben?: ['…'], loesung?, loesungen?: ['…'], loesungLabel? }
{ type: 'pruefungsaufgabe', eyebrow?, modul, titel, anweisung, absaetze: ['…'], optionen?: ['…'], loesungen: ['…'], kommentar?, loesungLabel? }
{ type: 'selbstcheck', eyebrow?, items: ['…'] }
{ type: 'ausblick', eyebrow?, text }
```

Empieza los eyebrows con la palabra clave de sección (Lernziele,
Kernwortschatz, Erklärung, Beispiele, Anwendung/Übung, Prüfungsbezug,
Zusammenfassung, Selbstcheck, Ausblick) — de ahí sale el icono automático.

## Marcado inline (dentro de cualquier string de texto)

- `**negrita**` (color titular) · `*cursiva*` · `==resaltado dorado==`
- `~~texto atenuado~~` — SOLO para glosas/comentarios en español
- `__término alemán destacado__` (úsalo en steps/prose para el término clave)
- `{1}` `{2}` … — hueco numerado de Lückentext, SOLO en `pruefungsaufgabe`
- `\n` dentro de un string = salto de línea
- Un `~` suelto es literal (p. ej. «(~230 Wörter)») — no lo dobles
- Anidan: `__Das Haus **wird gebaut**.__` es válido
- No uses HTML. Nunca. No hay `dangerouslySetInnerHTML`.

## Reglas de contenido

- **Todo en alemán** salvo: la columna `es` del Wortschatz y las glosas
  `~~…~~`, que van en español y existen SOLO para el matiz que un
  hispanohablante no pillaría solo (falsos amigos, calcos, contrastes es↔de).
  1-3 glosas por sección como máximo.
- Nivel C1 real: sintaxis compleja, registro diferenciado, léxico preciso.
  Nada de contenido B2 estirado.
- Anticipa el error típico del hispanohablante en el tema (interferencias
  del español) al menos una vez por lección.
- Datos del examen (mantener consistencia en todo el curso): Zertifikat
  C1 modular; Lesen 65 min/4 Teile; Hören ca. 40 min/4 Teile; Schreiben
  75 min/2 Aufgaben (Diskussionsbeitrag ~230 W. + formelle Nachricht ~120 W.);
  Sprechen ca. 15 min en pareja (Vortrag + Diskussion); 100 puntos por módulo,
  aprobado con 60; módulos repetibles por separado.
- Comillas alemanas „…" en texto alemán; apóstrofos tipográficos (') si
  hicieran falta — el archivo usa strings con comilla simple.

## Verificación antes de terminar

Cada archivo debe pasar `node --check server/deutschc1/content/lektion-NN.js`.
