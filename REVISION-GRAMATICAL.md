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

---

## src/data/exercises-part1.js

### [A] El prefijo separable se duplica al insertar la respuesta

41. `grammar-a1-014` (l. 432) â€” `question:'Ihr ___ um 7 Uhr auf. (aufstehen)'`,
    `answer:'steht auf'` (y las cuatro opciones llevan `auf`).
    Resultado: **`Ihr steht auf um 7 Uhr auf.`** â€” `auf` duplicado.
    â†’ O bien opciones sin prefijo (`stehe / stehst / steht / stehen`) manteniendo el `auf`
    del enunciado, o bien plantilla `Ihr ___ um 7 Uhr ___.` con `steht / auf`
    (asÃ­ lo hace bien `grammar-a2-004`).

### [A] La pista revela la respuesta

42. `grammar-a2-013` (l. 988) â€” `Ich wohne ___ meiner Schwester. (bei)`, `answer:'bei'`.
    Mismo patrÃ³n que `g-a2-014`. Quitar la pista o poner la glosa espaÃ±ola.
    (En cambio `grammar-a2-014`, l. 1001, usa `(der Tisch)` â€” eso sÃ­ es correcto: da el
    lema, no la soluciÃ³n.)

### [B] Detalles

43. `listening-a2-005` (l. 1087) â€” `Ja, der Balkon ist **im** Schlafzimmer.`
    Un balcÃ³n no estÃ¡ *dentro* del dormitorio. â†’ `Der Balkon liegt **am** Schlafzimmer`
    o `Der Balkon geht vom Schlafzimmer ab`.
44. `reading-a2-005` (l. 1029) â€” `Die Miete ist 750 Euro im Monat, **mit** Nebenkosten.`
    El tÃ©rmino del sector es **`inklusive Nebenkosten`** (o `warm`).
45. `grammar-b1-012` (l. 1556) â€” `___ dem Studium hat sie sofort eine Stelle gefunden.`
    Mismo problema de doble soluciÃ³n que `g-b1-012` (`Vor` tambiÃ©n es vÃ¡lido), aunque aquÃ­
    el `sofort` y la explicaciÃ³n sÃ­ orientan. Prioridad menor.

### Nota de contenido (no gramatical)

Varios Ã­tems estÃ¡n **duplicados** entre `exercises-part1.js` y `a1.js`/`a2.js`/`b1.js`:
`Ich ___ mÃ¼de.`, `Ich sehe ___ Mann.`, `Das Problem ___ sofort gelÃ¶st werden.`
Este Ãºltimo con **respuestas distintas**: `grammar-b1-007` = `muss`, `g-b2-002` =
`Alle sind mÃ¶glich`. Conviene decidir cuÃ¡l es la fuente Ãºnica.

---

## src/data/extra-path.js

Nota positiva: **este archivo sÃ­ trae las traducciones en espaÃ±ol**
(`{word:'aufstehen', translation:'levantarse'}`), a diferencia de `a1.js`, `a2.js`, `b1.js`,
`b2.js`, `c1.js` y `exercises-part1.js`, que glosan en alemÃ¡n. Este es el formato correcto.

### [A] Errores de gÃ©nero y concordancia

46. `w-a1-022` (l. 228) â€” `Du hast **eine** T-Shirt online gekauft.`
    â†’ **`ein T-Shirt`** (`das T-Shirt`). La propia pista de la lÃ­nea siguiente ya dice
    `ich habe ein T-Shirt bei Ihnen gekauft` â€” el ejercicio se contradice a sÃ­ mismo.

47. `r-a2-019` (l. 328) â€” `ein Praktikum in **einer** Kindergarten in MÃ¼nchen gemacht`
    â†’ **`in einem Kindergarten`** (`der Kindergarten`, dativo masculino).

48. `r-a2-018` (l. 320) â€” `Im Sommer **kommt** Tante Eva und ich gerne zu Besuch.`
    Sujeto compuesto con `ich` â†’ 1.Âª persona del plural.
    â†’ **`Im Sommer kommen Tante Eva und ich gerne zu Besuch.`**

49. `g-b1-016` (l. 534) â€” explicaciÃ³n: `**Der** Relativpronomen steht im Nominativâ€¦`
    â†’ **`Das Relativpronomen`** (neutro).
    (En `exercises-part1.js` l. 1585 estÃ¡ bien: `Das Relativpronomen stimmtâ€¦`)

50. `l-c1-020` (l. 1199) â€” `**Stadtplaner** Dr. Lehmann ist zu Gast. **Frau Doktor**, â€¦`
    ContradicciÃ³n de gÃ©nero dentro del mismo audio.
    â†’ **`Stadtplanerin Dr. Lehmann ist zu Gast.`**
    (Mismo problema de tratamiento femenino que `Frau Professor` en `c1.js`.)

### [A] TÃ­tulos y opciones rotas

51. `s-b2-027` (l. 1043) â€” `title:'Lebenslange Lernens'` â†’ **`Lebenslanges Lernen`**.
52. `l-b1-020` (l. 679) â€” opciÃ³n `'Ãœber das Essen war kalt'`: mezcla preposiciÃ³n y oraciÃ³n
    completa. â†’ `'Das Essen war kalt'`.
53. `l-c1-023` (l. 1222) â€” respuesta `'Strukturellen Kollaps'` en acusativo, mientras la
    pregunta es `Welcher Begriff â€¦?` (nominativo) y los otros distractores van en nominativo.
    â†’ **`Struktureller Kollaps`**.

### [A] Pregunta que no es alemÃ¡n

54. `l-b1-025` (l. 714) â€” `**Wohin empfiehlt** der ReisebÃ¼ro-Mitarbeiter?`
    `empfehlen` no admite `wohin`. â†’ **`Was empfiehlt der ReisebÃ¼ro-Mitarbeiter?`**
    o `Wohin soll die Familie laut dem Mitarbeiter fahren?`

### [A] La respuesta marcada produce una frase incorrecta

55. `g-c1-019` (l. 1066-1068) â€” `___ hatte sie alle Vorbereitungen erledigt.`
    `answer:'Aufgestanden'` â†’ **`Aufgestanden hatte sie alle Vorbereitungen erledigt.`**
    no es alemÃ¡n: la construcciÃ³n de participio absoluto exige coma **y** un complemento
    (`FrÃ¼h aufgestanden, hatte sie â€¦`). La propia explicaciÃ³n escribe la coma que falta en
    el enunciado. Y el distractor `Beim Aufstehen` sÃ­ da una frase gramatical.
    â†’ Reformular: `___ , hatte sie alle Vorbereitungen erledigt.` con `FrÃ¼h aufgestanden`.

56. `g-b2-017` (l. 797-799) â€” `Das ___ Kind weinte laut.` `answer:'fallende'`.
    Dos problemas: (a) **falta el verbo de referencia** entre parÃ©ntesis, que sÃ­ tienen los
    Ã­tems paralelos (`g-b2-008` pone `(lachen)`), asÃ­ que el alumno no puede deducir
    `fallen`; (b) `Das fallende Kind weinte laut` no es una frase alemana sensata.
    â†’ `Das ___ Kind lief zu seiner Mutter. (weinen)` â†’ `weinende`.

### [A] Ãtems sin soluciÃ³n Ãºnica (patrÃ³n recurrente en C1)

57. `g-c1-022` (l. 1078) â€” `Sie ___ sich der Verantwortung stets bewusst.` `answer:'war'`.
    **`ist` es igualmente correcto** (y `sind` si `Sie` es plural o cortesÃ­a): nada en la
    frase fija el tiempo. La explicaciÃ³n dice `hier PrÃ¤teritum` sin ningÃºn indicio que lo
    motive. â†’ AÃ±adir marcador temporal: `Damals ___ sie sich der Verantwortung stets bewusst.`
    AdemÃ¡s la explicaciÃ³n llama a `sich â€¦ bewusst sein` **verbo reflexivo**: no lo es.
    Es `bewusst` (adjetivo) + pronombre reflexivo en **dativo** + objeto en genitivo.

58. `g-c1-025` (l. 1090) â€” `Der LÃ¤rm war ___ laut, dass niemand schlafen konnte.`
    `answer:'derart'`. **`so` es la construcciÃ³n consecutiva estÃ¡ndar** y queda marcada
    como error â€” la propia explicaciÃ³n reconoce que `derart` es solo una variante mÃ¡s
    enfÃ¡tica de `so â€¦ dass`. â†’ Quitar `so` de las opciones o pedir explÃ­citamente el
    registro elevado.

59. Mismo patrÃ³n, prioridad media:
    - `g-c1-016` (l. 1054) `Sie ___ uns einen Bericht zur VerfÃ¼gung gestellt.` `answer:'hat'`:
      con `Sie` de cortesÃ­a o plural, `haben` es correcto.
    - `g-c1-021` (l. 1074) `___ der aktuellen Lage mÃ¼ssen wir umdenken.` `answer:'Angesichts'`:
      `Wegen` y `Trotz` dan frases igualmente gramaticales.
    - `g-b2-022` (l. 817) `Ich habe ihn nicht kommen ___.` `answer:'sehen'`: con `sehen`/`hÃ¶ren`
      el Duden admite **tambiÃ©n** el participio (`kommen gesehen`), asÃ­ que el distractor
      `gesehen` no es un error.

### [A] Orden de palabras tras `jedoch`

60. `r-c1-020` (l. 1120) â€” `â€¦hat das Wirtschaftswachstum jahrzehntelang befeuert,
    **jedoch ihre AnfÃ¤lligkeit ist** mit jeder Krise sichtbarer geworden.`
    `jedoch` en primera posiciÃ³n exige el verbo en segunda.
    â†’ **`jedoch ist ihre AnfÃ¤lligkeit mit jeder Krise sichtbarer geworden`**
    (o `ihre AnfÃ¤lligkeit ist jedoch â€¦`).

### [B] LÃ©xico y colocaciones

61. `s-c1-020` (l. 1286) â€” hint `**Verstehbar** ist auch die Gegenposition, jedoch â€¦`
    â†’ **`VerstÃ¤ndlich ist auch die Gegenposition`**. `verstehbar` no es idiomÃ¡tico.
62. `l-b1-019` (l. 669) â€” tÃ­tulo `**Auf** der Volkshochschule` â†’ **`An der Volkshochschule`**
    (como `an der UniversitÃ¤t`).
63. `s-b1-022` (l. 769) â€” hint `Falls ich noch einmal **hingehen** kÃ¶nnteâ€¦` en un ejercicio
    sobre un viaje en el que se `fÃ¤hrt` â†’ **`hinfahren`**.
64. `s-a2-028` (l. 525) â€” `die Vor- und Nachteile **von einem Leben** in einer groÃŸen Stadt`
    â†’ **`eines Lebens in einer groÃŸen Stadt`** (genitivo).
65. `s-a2-023` (l. 511) â€” hint `Das Foto **ist** im â€¦ gemacht.`
    â†’ `Das Foto **wurde** im â€¦ **aufgenommen**.`
66. `l-a1-020` (l. 156) â€” `**Wie viel** Tomaten kauft die Person?` â†’ **`Wie viele Tomaten`**
    (mismo error que `r-b1-005` en `b1.js`).

### [C] PrecisiÃ³n de contenido

67. `r-b1-025` (l. 638) â€” `Romanisch in der Schweiz`: el nombre estÃ¡ndar en alemÃ¡n es
    **`RÃ¤toromanisch`**. Y decir que estas lenguas las hablan `nur noch wenige tausend
    Menschen` subestima las cifras (romanche â‰ˆ 40 000â€“60 000; sorabo â‰ˆ 20 000â€“30 000).
68. `g-b2-020` (l. 809) â€” junto a `Da er krank war, konnte er nicht kommen` (marcada),
    la opciÃ³n `Er war krank, also kam er nicht` tambiÃ©n es una conversiÃ³n vÃ¡lida al estilo
    verbal. Sustituir ese distractor.


---

## src/data/extra-reading-listening-writing.js

### [A] ColocaciÃ³n imposible: no se "gana" un segundo puesto

69. `r-a2-015` (l. 300) â€” `Letztes Jahr haben sie den zweiten Platz in der Meisterschaft
    **gewonnen**.` y la pregunta correspondiente (l. 305)
    `Welchen Platz hat die Mannschaft **gewonnen**?`
    En alemÃ¡n un puesto se **`belegt`** o se **`erreicht`**; solo se *gana* el primer puesto
    o un premio.
    â†’ `â€¦haben sie den zweiten Platz **belegt**` / `Welchen Platz hat die Mannschaft
    **belegt**?`
    Nota: en `extra-b1b2.js` (l. 133) el mismo contenido estÃ¡ bien resuelto:
    `ich habe den dritten Platz **bekommen** und ein neues Objektiv als Preis **gewonnen**`.

### [A] Pleonasmo

70. `r-a2-016` (l. 309) â€” `Bitte machen Sie **keinen lauten LÃ¤rm** nach dieser Zeit.`
    `LÃ¤rm` ya significa ruido molesto: `lauter LÃ¤rm` es redundante y suena mal.
    â†’ `Bitte machen Sie nach dieser Zeit **keinen LÃ¤rm**.`

### [B] `in der NÃ¤he` rige genitivo

71. `r-a2-008` (l. 235) â€” `ganz in der NÃ¤he **von einem Park**`
    â†’ **`ganz in der NÃ¤he eines Parks`**.

---

## src/data/extra-b1b2.js

Los textos son de muy buena calidad. Dos puntos:

### [A] GÃ©nero

72. `l-b1-008` (l. 105) â€” `**Der neue Abflugzeit** ist 16:30 Uhr.`
    `die Abflugzeit` es femenino â†’ **`Die neue Abflugzeit ist 16:30 Uhr.`**

### [B] `wegen` + dativo en los distractores

73. `l-b1-008` (l. 107) â€” opciones `'Wegen schlechtem Wetter'` y `'Wegen zu vielen Passagieren'`.
    `wegen` rige **genitivo**: `wegen schlechten Wetters`, `wegen zu vieler Passagiere`.
    Llamativo porque la respuesta correcta del mismo Ã­tem â€”
    `'Wegen technischer Probleme'` â€” **sÃ­** estÃ¡ en genitivo. Los distractores modelan
    alemÃ¡n incorrecto.

74. `l-b1-013` (l. 140) â€” `dass in den Wagen 1 bis 3 Ruhebereich ist`
    â†’ `dass die Wagen 1 bis 3 Ruhebereich **sind**` o
    `dass **sich** in den Wagen 1 bis 3 **der** Ruhebereich **befindet**`.

---

## src/data/extra-c1.js

Los textos de lectura y audiciÃ³n son alemÃ¡n acadÃ©mico C1 genuinamente bueno. Solo:

### [A] Anglicismo sintÃ¡ctico en el enunciado

75. `r-c1-014`, primera pregunta (l. 72) â€”
    `**Was** betrachten absolute Straftheorien die Strafe **als**?`
    Calco del inglÃ©s *"What do they regard punishment as?"*. El `als` no puede quedar suelto
    al final.
    â†’ **`Als was betrachten absolute Straftheorien die Strafe?`**
    o `Wie betrachten absolute Straftheorien die Strafe?`

---

## src/data/flashcards.js

El alemÃ¡n de las 456 tarjetas es de calidad alta. Hallazgos:

### [A] Elipsis imposible del verbo

76. Tarjeta `einerseits â€¦ andererseits` (tema `c1-connectors`) â€” ejemplo:
    `Einerseits ist es gÃ¼nstig, andererseits die QualitÃ¤t schlecht.`
    En la segunda oraciÃ³n falta el verbo y no se puede elidir aquÃ­.
    â†’ **`Einerseits ist es gÃ¼nstig, andererseits ist die QualitÃ¤t schlecht.`**

### [B] Ejemplos que no encajan con la entrada

77. `{ de:'der zweite', example:'Das zweite Haus links.' }` â€” la entrada es masculina,
    el ejemplo neutro. â†’ `Der zweite Versuch war erfolgreich.`
78. `{ de:'der Schmerz', example:'Ich habe Kopfschmerzen.' }` â€” el ejemplo no contiene la
    palabra de la tarjeta en singular. â†’ `Der Schmerz lÃ¤sst langsam nach.`
79. `{ de:'eins', example:'Ich habe eins bekommen.' }` â€” ambiguo (suena a "saquÃ© un uno" de
    nota). â†’ `Eins plus eins ist zwei.`
80. `{ de:'die Begebenheit', example:'Eine seltsame Begebenheit hat sich ereignet.' }` â€”
    `Begebenheit` + `sich ereignen` es tautolÃ³gico.
    â†’ `Er erzÃ¤hlte eine seltsame Begebenheit aus seiner Kindheit.`

---

## src/data/pruefungen/ (simulacros Goethe)

Es la parte mejor escrita de la app: alemÃ¡n correcto, comillas alemanas bien puestas en la
mayorÃ­a de los archivos, estructuras conformes al formato oficial. Dos cosas:

### [A] Forma inexistente en el modelo B1 de lectura

81. `goethe-b1-lesen.js` (l. 44) â€” `Die Vorlesungen sind anders als in Deutschland â€”
    viel **diskutierender** und freier.`
    **`diskutierender` no existe**: no se puede formar un comparativo del participio I
    `diskutierend`.
    â†’ `â€¦viel **diskussionsorientierter** und freier` o, mejor para B1,
    `â€¦dort wird viel mehr diskutiert, und es ist freier`.

### [A] `ErzÃ¤hle Ã¼ber` en un enunciado de examen

82. `goethe-a2-sprechen.js` (l. 49) â€” `**ErzÃ¤hle Ã¼ber** das vorgegebene Thema.`
    La formulaciÃ³n estÃ¡ndar del Goethe es **`Sprich Ã¼ber â€¦`**.
    â†’ `**Sprich Ã¼ber** das vorgegebene Thema.`
    (En la lÃ­nea 52 del mismo archivo ya estÃ¡ bien: `ErzÃ¤hle ausfÃ¼hrlich **darÃ¼ber**.`)

---

## Texto de interfaz (componentes .jsx)

El alemÃ¡n de la UI estÃ¡ casi todo correcto. Tres correcciones:

### [A] ColocaciÃ³n

83. `Fortgeschritten â€” Du sprichst flieÃŸend **in** komplexen Themen.`
    (descripciÃ³n de nivel C1) â†’ **`Du sprichst flieÃŸend Ã¼ber komplexe Themen.`**

### [A] Frase incompleta

84. `Neues Passwort (leer lassen, um nicht zu Ã¤ndern)` â€” falta el objeto de `Ã¤ndern`.
    â†’ `Neues Passwort (leer lassen, um **es** nicht zu Ã¤ndern)`
    o `(leer lassen, wenn das Passwort unverÃ¤ndert bleiben soll)`.

### [B] Imperativos abreviados y colocaciÃ³n

85. `Probier eine GrammatikÃ¼bung` (y las variantes HÃ¶r-/Lese-/Schreib-/SprechÃ¼bung).
    EstÃ¡ndar: **`Probiere eine GrammatikÃ¼bung aus`** (`ausprobieren`), o simplemente
    `Mach eine GrammatikÃ¼bung`.
86. `Klick zum AnhÃ¶ren (du kannst es mehrmals abspielen)` â†’ `**Klicke** zum AnhÃ¶ren
    (du kannst **die Aufnahme** mehrmals abspielen)` â€” `es` no tiene antecedente claro.

---

# Problemas transversales (resolver de una vez en toda la app)

### T1. [A] El campo espaÃ±ol contiene alemÃ¡n â€” inconsistencia estructural

- `flashcards.js` usa `es:` y `nameEs:`, pero el contenido estÃ¡ **en alemÃ¡n**
  (`{ de:'Hallo', es:'informelle BegrÃ¼ÃŸung' }`).
- `a1.js`, `a2.js`, `b1.js`, `b2.js`, `c1.js`, `exercises-part1.js`, `extra-b1b2.js`,
  `extra-c1.js`, `extra-reading-listening-writing.js`: el campo `translation` da
  **parÃ¡frasis alemanas**.
- `extra-path.js` **sÃ­** estÃ¡ en espaÃ±ol (`{word:'aufstehen', translation:'levantarse'}`).

Para un alumno A1 hispanohablante, glosar `heiÃŸe` como `ich trage den Namen` es inservible.
Hay que decidir un criterio Ãºnico y aplicarlo. Si la definiciÃ³n monolingÃ¼e se quiere
conservar para niveles altos, conviene un campo aparte (`de_def` + `es`) en lugar de meter
alemÃ¡n en un campo llamado `es`.

### T2. [B] `erzÃ¤hlen Ã¼ber` â€” 15 apariciones

`a1.js` (l. 136, 148, 166, 169, 178), `a2.js` (l. 132, 138, 141, 144, 156),
`b1.js` (l. 130, 139, 145, 163), `pruefungen/goethe-a2-sprechen.js` (l. 49).

En alemÃ¡n estÃ¡ndar: **`ErzÃ¤hle von â€¦`** o **`ErzÃ¤hle etwas Ã¼ber â€¦`**; para consignas de
examen, **`Sprich Ã¼ber â€¦`**. El patrÃ³n correcto ya existe en la app:
`b1.js` l. 69 `Bitte erzÃ¤hlen Sie uns **etwas Ã¼ber** sich.`

### T3. [C] TerminologÃ­a del gÃ©nero gramatical â€” tres variantes en paralelo

- `neutral` â†’ `a1.js` (l. 12, 14), `b1.js` (l. 13), `b2.js` (l. 10)
- `neutrum` (minÃºscula, como adjetivo) â†’ `level-test-questions.js` (l. 30, 176),
  `exercises-part1.js` (l. 422), `extra-path.js` (l. 39)
- `Neutrum` (correcto, sustantivo) â†’ `exercises-part1.js` (l. 207)

Unificar en **`Neutrum`** (sustantivo) o **`sÃ¤chlich`** (adjetivo). `neutral` no es el
nombre del gÃ©nero.

### T4. [C] Comillas alemanas mal cerradas

Se abre con `â€ž` y se cierra con la comilla recta `"` en lugar de `"`:
`goethe-b2-hoeren.js` (22Ã—), `goethe-c1-hoeren.js` (9Ã—), `goethe-c2-hoeren.js` (8Ã—),
`extra-c1.js` (10Ã—), `extra-b1b2.js`, `goethe-a1/a2/b1/b2/c1-sprechen.js`.
El par alemÃ¡n es **`â€žâ€¦"`**. Es visible para el usuario en pantalla.

### T5. [A] PatrÃ³n de diseÃ±o: Ã­tems de opciÃ³n mÃºltiple sin soluciÃ³n Ãºnica

No es un error de alemÃ¡n, sino de construcciÃ³n, y afecta a la fiabilidad del test:
`g-b1-012`, `grammar-b1-012`, `g-c1-005`, `g-c1-016`, `g-c1-021`, `g-c1-022`, `g-c1-025`,
`g-b2-022`, `g-b2-020`, `b1-g-006`, `c1-g-003`.
En todos, un distractor produce una frase alemana igual de correcta que la marcada. Un
alumno que sepa alemÃ¡n es penalizado. RecomendaciÃ³n: aÃ±adir al enunciado el marcador que
fije la respuesta (temporal, de registro o de sentido), o sustituir el distractor.

### T6. [A] PatrÃ³n: la pista entre parÃ©ntesis revela la respuesta

`g-a2-014` (`(ihm)`), `g-a2-015` (`(unterhalb)`), `grammar-a2-013` (`(bei)`).
Vienen de glosas espaÃ±olas traducidas al alemÃ¡n por error. Uso correcto del parÃ©ntesis
â€”dar el lema, no la soluciÃ³nâ€” en `grammar-a2-014` (`(der Tisch)`) y `g-a1-011` (`(lernen)`).

### T7. [A] PatrÃ³n: la respuesta insertada rompe la frase

`grammar-a1-014` (prefijo `auf` duplicado), `a2-g-003` (`Wie fÃ¼hlst dich du heute?`),
`g-c1-012` (`WorÃ¼berÃ¼ber`), `g-b2-015` (huecos mal colocados), `c1-g-001`
(fuerza el `gehabt` del doppeltes Perfekt), `g-c1-019` (falta la coma).
Conviene una comprobaciÃ³n automÃ¡tica: para cada Ã­tem `fill_blank`/`multiple_choice`,
insertar la respuesta en el hueco y revisar la frase resultante.

---

# Prioridades sugeridas

**Bloque 1 â€” corregir ya (visible y evaluado):**
`level-test-questions.js` completo (nÂº 33-40): es el test de nivel y decide el itinerario
del alumno. En especial `c1-g-001` (doppeltes Perfekt como respuesta correcta),
`c1-v-003` (`Welche FunktionsverbgefÃ¼ge`) y `a2-g-003` (orden de palabras imposible).

**Bloque 2 â€” errores duros de alemÃ¡n:**
nÂº 16, 17, 18, 19, 20, 25, 26, 27, 28, 41, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
58, 60, 69, 70, 72, 75, 76, 81, 82, 83, 84.

**Bloque 3 â€” transversales:** T1 (campo `es`/`translation`), T2 (`erzÃ¤hlen Ã¼ber`),
T3 (`Neutrum`), T4 (comillas).

**Bloque 4 â€” rediseÃ±o de Ã­tems:** T5, T6, T7 y los puntos [B]/[C] restantes.

