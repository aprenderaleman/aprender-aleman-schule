# Revisión gramatical de SCHULE — informe de profesor experto

Revisión del contenido alemán de la app (`src/data/**`, componentes con texto alemán).
Clasificación:
- **[A] Error real** — incorrecto en alemán, hay que corregir.
- **[B] Uso dudoso / poco idiomático** — un profesor lo marcaría.
- **[C] Terminología o didáctica** — imprecisión en la explicación, no en el alemán.

---

## src/data/a1.js

### [A] Explicaciones corruptas (restos de traducción)

1. `g-a1-002` (línea 4) — explicación: `Du bist = du bist (Zustand oder Identität).`
   Tautología sin sentido; era una glosa española mal traducida.
   → `Du bist = 2. Person Singular von "sein" (Zustand oder Identität).`

2. `g-a1-004` (línea 6) — explicación: `"Sie" = sie (3. Person Singular feminin). Achtung: "sie" (klein) = sie/sie (Plural), "Sie" (groß) = Höflichkeitsform.`
   `"sie" (klein) = sie/sie (Plural)` no significa nada.
   → `"sie" = 3. Person Singular feminin. Achtung: "sie" (klein) = 3. Person Singular/Plural, "Sie" (groß) = Höflichkeitsform.`

### [B] `erzählen über` (hispanismo/anglicismo) — recurrente

`Erzähle über deine Familie` (l. 136), `Erzähle über deine Hobbys` (l. 148),
`Erzähle über deine Schule` (l. 166), `Erzähle über eine Geburtstagsfeier` (l. 178),
`Beschreibe dein Lieblingstier` OK pero l. 172 mismo patrón.
En alemán estándar: **`Erzähle von …`** o **`Erzähle etwas über …`**.
`erzählen über` sin objeto (`etwas`) suena a calco de "contar sobre / hablar sobre".

### [C] Terminología gramatical

3. `g-a1-008` (l. 12) y `g-a1-010` (l. 14) — `das (neutral)` / `"Kind" ist neutral`.
   El término alemán es **Neutrum** (o *sächlich*). `neutral` es el adjetivo común, no el
   nombre del género. → `das (Neutrum)`, `"Kind" ist ein Neutrum`.

4. `g-a1-012` (l. 16) — `Im Plural ist der bestimmte Artikel immer "die"`.
   Falso con `immer`: dativo plural = **den**, genitivo plural = **der**.
   → `Im Plural ist der bestimmte Artikel im Nominativ und Akkusativ immer "die".`

### [C] Vocabulario glosado en alemán, no en español

En los `reading` de A1 el campo `translation` da paráfrasis alemanas
(`{word:'heiße', translation:'ich trage den Namen'}`). Para una app dirigida a
hispanohablantes en nivel A1 esto es inservible. (Ver si el resto de niveles hace lo mismo
— si en otros archivos sí está en español, es una inconsistencia a unificar.)

---

## src/data/a2.js

### [A] La pregunta regala la respuesta

5. `g-a2-014` (l. 20) — `question:'Ich gebe ___ das Buch. (ihm)'`, `answer:'ihm'`.
   La pista entre paréntesis **es** la respuesta. Era una glosa española (`(a él)`) que
   quedó traducida al alemán. → `Ich gebe ___ das Buch. (a él)` o quitar la pista.

6. `g-a2-015` (l. 21) — mismo patrón: `Die Katze liegt ___ dem Tisch. (unterhalb)`.
   Además `unterhalb` rige **genitivo**, así que como sinónimo de `unter + Dativ` induce a
   error. → usar la glosa española `(debajo de)`.

### [A] Preposición + artículo sin contraer (suena a alemán de libro mal hecho)

7. `g-a2-013` (l. 19) — frase objetivo `Ich gehe ___ dem Supermarkt.` con `answer:'zu'`.
   El resultado `Ich gehe zu dem Supermarkt` no es el alemán que se dice: la contracción
   **`zum`** es obligatoria en el uso normal. La propia explicación escribe `zum Supermarkt`,
   contradiciendo la frase del ejercicio.
   → Reformular: `Ich gehe ___ Supermarkt.` con opciones `zum / nach dem / beim / mit dem`.

### [B] Lemas de vocabulario mal citados

8. `r-a2-004` (l. 49) — `{word:'biegen ab', ...}`. El lema de un verbo separable se cita en
   infinitivo: **`abbiegen`**. Igual en `r-a2-001` (l. 27): `{word:'findet statt'}` →
   **`stattfinden`**. (En A1 sí está bien hecho: `{word:'aufstehen'}`.)

### [B] `erzählen über` (sigue)

`Erzähle über deinen Beruf` (l. 132), `Erzähle über ein besonderes Erlebnis` (l. 138),
`Erzähle über deinen Lieblingsfilm` (l. 141), `Erzähle über Busse, Bahnen` (l. 156).

### [B] `Dann gehen Sie die zweite Straße rechts.` (l. 48)

Se dice `nehmen Sie die zweite Straße rechts` o `biegen Sie in die zweite Straße rechts ein`.

---

## src/data/b1.js

### [A] Ítem con dos respuestas correctas

9. `g-b1-012` (l. 18) — `___ dem Frühstück gehe ich zur Arbeit.`
   opciones `Vor / Nach / Seit / Während`, `answer:'Nach'`.
   **`Vor dem Frühstück gehe ich zur Arbeit`** es igual de correcta (y frecuente).
   El ítem no tiene solución única. → Añadir contexto que la fije, p. ej.
   `Ich frühstücke um 7. ___ dem Frühstück gehe ich zur Arbeit.`

### [A] `Wie viel` en vez de `wie viele`

10. `r-b1-005` (l. 57) — `Wie viel Minuten Bewegung empfehlen sie mindestens?`
    Dos fallos en una línea:
    - `Minuten` es plural contable → **`Wie viele Minuten`**.
    - `empfehlen sie` con `sie` minúscula no tiene referente en la pregunta (los `Experten`
      están en el texto, no en la pregunta).
    → `Wie viele Minuten Bewegung werden mindestens empfohlen?`
    (Compárese con `l-b1-005`, l. 95, que sí está bien: `…werden empfohlen?`)

### [A] Pronombre relativo que no concuerda con los dos antecedentes

11. `s-b1-005` (l. 130) — `Erzähle über ein Buch oder einen Film, der dir gut gefallen hat.`
    `der` solo concuerda con `einen Film`; con `ein Buch` haría falta `das`.
    → `Erzähle von einem Buch oder einem Film, das bzw. der dir gut gefallen hat.`
    o mejor reformular: `Erzähle von einem Buch oder Film, das dir gefallen hat.`

### [B] Preposición + artículo sin contraer

12. `g-b1-006` (l. 10) — `Das Buch wird von dem Autor geschrieben.` → **`vom Autor`**.

### [C] Título del ejercicio ≠ lo que se practica

13. `g-b1-002` (l. 4) — título `Nebensätze mit dass`, pero lo que se pide es elegir la
    negación (`nicht`), no construir la subordinada. Además el distractor `nicht nicht`
    no enseña nada. La explicación `…das Verb, welches am Ende steht` es rígida:
    → `…verneint "nicht" das Verb, das am Satzende steht.`

### [C] `Neutrum` (sigue)

14. `g-b1-009` (l. 13) — `"Bier" ist neutral` → `"Bier" ist ein Neutrum`.

### [C] Ítem con más de una lectura gramaticalmente válida

15. `g-b1-005` (l. 7) — `___ es regnet, gehe ich spazieren.` con `Weil / Obwohl / Damit / Wenn`.
    `Weil…`, `Obwohl…` y `Wenn…` dan las tres frases gramaticales; solo el título
    (`Konzessive Nebensätze`) desambigua. Aceptable, pero conviene marcar el sentido en el
    enunciado (p. ej. `(a pesar de la lluvia)`).

### [B] `erzählen über` (sigue)

l. 130, 139 (`Erzähle über einen Tag…`), 163 (`Erzähle über deine Erfahrungen`).
Nota: en `l-b1-001` (l. 69) sí está bien resuelto —
`Bitte erzählen Sie uns **etwas über** sich.` Ese es el patrón a copiar.

---

## src/data/b2.js

### [A] Ítem roto: la respuesta marcada produce una frase incorrecta

16. `g-b2-015` (l. 21) — `question:'___ ... ___ regnet es, es ist sehr kalt.'`
    `answer:'Nicht nur...sondern auch'`.
    Los dos huecos están **ambos delante de `regnet es`**, así que la frase resultante no
    existe en alemán en ninguna combinación. Además falta el `sondern` en la segunda oración.
    → Correcto: **`Nicht nur regnet es, sondern es ist auch sehr kalt.`**
    Plantilla arreglada: `___ regnet es, ___ es ___ sehr kalt.`
    O más sencillo para el nivel: `Es regnet ___ ___, ___ es ist ___ sehr kalt.`

17. `g-b2-012` (l. 18) — `___ des Vertrags dauerte drei Stunden. (unterschreiben)`
    `answer:'Die Unterschrift'`. **La respuesta marcada es la incorrecta.**
    - `Unterschrift` = la firma (el trazo), no la acción. `Die Unterschrift dauerte drei
      Stunden` no tiene sentido.
    - Lo correcto es **`Die Unterzeichnung des Vertrags dauerte drei Stunden`** — y esa
      opción no está en la lista.
    - El distractor `Das Unterschreiben` **sí es alemán correcto**
      (`Das Unterschreiben des Vertrags dauerte drei Stunden`).
    → Poner `Die Unterzeichnung` como respuesta, o cambiar el enunciado.
    Nota: el ítem paralelo de C1 (`g-c1-001`, `Das Schreiben des Buches`) sí está bien hecho.

### [A] Colocación inexistente

18. `s-b2-014` (l. 157) — `Halte eine kritische Rezension über einen Film…`
    **`eine Rezension halten`** no es alemán. Se *halten* un `Vortrag`, una `Präsentation`,
    una `Rede`; una `Rezension` se **schreibt/verfasst**.
    → Para una tarea oral: `Besprich einen Film kritisch` / `Gib eine kritische Bewertung
    des Films ab`.

### [A] Oración de consigna sintácticamente rota

19. `s-b2-004` (l. 127) — `Du hast einen Konflikt mit einem Kollegen, der regelmäßig zu spät
    kommt und du seine Arbeit übernehmen musst.`
    No se puede coordinar una oración de relativo (`der … kommt`) con una principal
    (`und du … musst`); la frase descarrila.
    → `…mit einem Kollegen, der regelmäßig zu spät kommt, sodass du seine Arbeit übernehmen
    musst.`

### [A] Errata visible al usuario

20. `s-b2-018` (l. 168) — `title:'Konsumund Nachhaltigkeit'` → **`Konsum und Nachhaltigkeit`**.

### [B] Colocación forzada

21. `r-b2-003` (l. 39) — `Die Integration stellt Chancen und Herausforderungen dar.`
    `etwas darstellen` funciona con `Herausforderung`, no con `Chancen`.
    → `Die Integration bringt Chancen und Herausforderungen mit sich.`

### [B] Otros

22. `r-b2-001` (l. 26) — `{word:'gefährdet', translation:'in Gefahr bringt'}`: lema y glosa en
    formas distintas → `{word:'gefährden', translation:'in Gefahr bringen'}`.
23. `s-b2-011` (l. 148) — `Tierversuche für medizinische Forschung` → `für **die** medizinische
    Forschung`.
24. `g-b2-006` (l. 10) — `(maskulin/neutral)` → `(maskulin/Neutrum)`.

---

## src/data/c1.js

### [A] Ítem con tres respuestas correctas + orden de palabras

25. `g-c1-005` (l. 7) — `Dem Bericht ___ hat die Wirtschaft sich erholt.`
    opciones `zufolge / gemäß / laut / nach`, `answer:'zufolge'`.
    Dos problemas:
    - **`gemäß` y `nach` posponidos con dativo son igualmente correctos**:
      `dem Bericht gemäß`, `dem Bericht nach`. Solo `laut` no admite posposición.
      El ítem no tiene solución única.
    - `hat die Wirtschaft sich erholt` → el reflexivo va tras el verbo finito cuando el
      sujeto es un sustantivo pleno: **`hat sich die Wirtschaft erholt`**.
    → Reformular: `___ dem Bericht hat sich die Wirtschaft erholt.` (respuesta `Laut`).

### [A] Modismo mal construido: el distractor es el correcto

26. `g-c1-008` (l. 12) — `Der Plan wurde in ___ gesetzt.` `answer:'die Tat'`.
    **`in die Tat gesetzt` no existe**: el modismo es **`in die Tat umsetzen`**
    (`Der Plan wurde in die Tat umgesetzt`).
    Con `setzen` los modismos correctos son `ins Werk setzen`, `in Kraft setzen`,
    `in Gang setzen` — es decir, dos de los distractores son mejor alemán que la
    respuesta marcada.
    → `Der Plan wurde in ___ **umgesetzt**.` con respuesta `die Tat`.

### [A] El hueco y la opción se solapan

27. `g-c1-012` (l. 18) — `question:'___über wir gestern gesprochen haben, ist sehr wichtig.'`,
    `answer:'Worüber'`. Al insertar la respuesta sale **`Worüberüber`**.
    Además la frase suelta es marginal sin el correlato: la propia explicación escribe
    `das, worüber wir gesprochen haben`.
    → `___ , worüber wir gestern gesprochen haben, ist sehr wichtig.` (respuesta `Das`)
    o `___ wir gestern gesprochen haben, ist sehr wichtig.` (respuesta `Worüber`).

### [A] Hint que no es una frase alemana

28. `s-c1-017` (l. 167) — hints:
    `'Während die ... geprägt war von...'` , `'Zeichnet sich der ... durch ... aus.'`
    El segundo es la **segunda mitad** del primero, cortada y convertida en frase
    independiente con mayúscula y punto: `Zeichnet sich der … aus.` con el verbo en primera
    posición no es una declarativa alemana.
    → Un solo hint: `Während die Romantik von … geprägt war, zeichnet sich der
    Expressionismus durch … aus.`

### [B] Tratamiento femenino inconsistente

29. `l-c1-002` (l. 75) — `Frau Professor Schneider`. La forma actual es
    **`Frau Professorin Schneider`** — y así está bien puesto en `b2.js` l. 87
    (`Frau Professorin Klein`). Unificar.

### [B] Pleonasmo

30. `s-c1-011` (l. 148) — `Das Stigma wurzelt in tief verwurzelten kulturellen…`
    `wurzeln` + `verwurzelt` en la misma frase.
    → `…wurzelt in tief verankerten kulturellen Vorstellungen`.

### [B] `davor` sin referente

31. `g-c1-014` (l. 20) — `Ich habe Angst ___ . (vor der Prüfung)`, respuesta `davor`.
    `davor` necesita un `dass`-Satz o un antecedente (`Ich habe Angst davor,
    durchzufallen`). Con la glosa dada, el alemán natural es
    `Ich habe Angst vor der Prüfung`. Además sobra el espacio antes del punto (`___ .`).

### [C] Etiqueta didáctica equivocada

32. `g-c1-013` (l. 19) — título `Konjunktiv I: Vermutung`. El Konjunktiv I marca
    **discurso referido** (`indirekte Rede`), no una suposición (`Vermutung` es el terreno de
    `dürfte`, `wohl`, `Futur I`). → `Konjunktiv I: indirekte Rede in der Presse`.

---

## src/data/level-test-questions.js  ⚠️ máxima prioridad (es el test de nivel)

### [A] Alemán no estándar presentado como respuesta correcta de C1

33. `c1-g-001` (l. 334-337) — `Er behauptete, ___ den ganzen Tag gearbeitet ___.`
    `correctAnswer:'er habe ... gehabt'` → **`Er behauptete, er habe den ganzen Tag
    gearbeitet gehabt.`**
    Eso es el **doppeltes Perfekt**, forma coloquial/regional que **no es alemán estándar
    escrito** y que en un examen C1 del Goethe se corrige como error.
    El Konjunktiv I de perfecto ya expresa la anterioridad:
    → **`Er behauptete, er habe den ganzen Tag gearbeitet.`**
    Además la explicación llama a esa forma `Plusquamperfekt`, y no lo es
    (el Konjunktiv Plusquamperfekt sería `er hätte … gearbeitet`).
    **Con la plantilla actual de dos huecos ninguna opción es correcta.**
    → Cambiar el enunciado a `Er behauptete, ___ den ganzen Tag ___.`
    con la respuesta `er habe … gearbeitet`.

### [A] Concordancia de género en una pregunta de gramática C1

34. `c1-v-003` (l. 409) — `prompt:'Welche Funktionsverbgefüge ist korrekt?'`
    `Gefüge` → **`das Funktionsverbgefüge`** (neutro).
    → **`Welches Funktionsverbgefüge ist korrekt?`**
    (Irónico: la pregunta que enseña colocaciones fijas contiene un error de concordancia.)

### [A] La respuesta insertada produce un orden de palabras imposible

35. `a2-g-003` (l. 107-110) — `prompt:'Wie ___ du heute?'`, `correctAnswer:'fühlst dich'`.
    Al insertar sale **`Wie fühlst dich du heute?`** — incorrecto.
    La frase alemana es `Wie fühlst **du dich** heute?`: el reflexivo va *después* del sujeto,
    así que el hueco no puede ser continuo.
    → Plantilla `Wie ___ du ___ heute?` con la opción `fühlst / dich`
    (así está bien resuelto en `a2-g-004`, que usa `stehe / auf`).

### [C] `Vermutung` usado para el Konjunktiv II irreal

36. `b2-g-004` (l. 272) — `"hätte + Partizip II" für **Vermutungen** über die Vergangenheit`.
    Aquí el Konjunktiv II Vergangenheit expresa **irrealidad** (condición irreal pasada), no
    una suposición. → `…für irreale Bedingungen in der Vergangenheit`.
    (Mismo desliz conceptual que `g-c1-013` en `c1.js`.)

### [C] Ítems con más de una opción gramaticalmente válida

37. `c1-g-003` (l. 348-356) — junto a `Das frühe Aufstehen ist wichtig` (marcada correcta),
    la opción `Das Frühaufstehen ist wichtig` también es alemán aceptable. Conviene
    sustituir ese distractor por uno claramente incorrecto
    (p. ej. `Das Aufstehen früh ist wichtig`).
38. `b1-g-006` (l. 201) — `Hier ___ jeden Morgen frische Brötchen verkauft.`
    `werden` (marcada) y `wurden` dan ambas frases correctas. Añadir un marcador temporal
    (`Heute…`) o quitar `wurden`.
39. `a2-v-002` (l. 145) — explicación `Die anderen drei sind Synonyme für "kriegen"`:
    `gewinnen` no es sinónimo de `bekommen/erhalten` (ganar ≠ recibir).
    → `Die anderen drei bedeuten, dass er den Preis erhält.`

### [C] Terminología: `neutrum` en minúscula como adjetivo

40. `a1-g-002` (l. 30) `"Mädchen" ist neutrum`, `b1-g-002` (l. 176) `"Buch" (neutrum)`.
    Como sustantivo va en mayúscula (`ist ein Neutrum`); como adjetivo se dice
    `neutral`/`sächlich`. Además `a1.js` usa `neutral` y este archivo `neutrum`:
    **unificar la terminología en toda la app.**
