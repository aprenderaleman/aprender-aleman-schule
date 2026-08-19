# Revisión gramatical de SCHULE — informe de profesor experto

> **ESTADO: CORREGIDO.** Todos los errores de este informe se aplicaron al código,
> más los duplicados de la tercera pasada. Verificación: los 11 archivos de datos importan
> como módulo ES sin error y 801/801 ítems tienen su respuesta entre las opciones.
> **Aviso:** `npx vite build` falla ahora mismo, pero por un import roto en
> `NetworkStatus.jsx` (trabajo en curso de otra sesión), no por el contenido alemán.
> Ver la última sección.
>
> **Única excepción, pendiente de tu decisión: T1** — el campo `es` / `translation`
> contiene definiciones en alemán en lugar de español. No es un error gramatical sino una
> decisión de localización que afecta a ~1.500 glosas. Ver la nota al final.

Revisión del contenido alemán de la app (`src/data/**` y componentes con texto alemán).
Clasificación:
- **[A] Error real** — incorrecto en alemán, hay que corregir.
- **[B] Uso dudoso / poco idiomático** — un profesor lo marcaría.
- **[C] Terminología o didáctica** — imprecisión en la explicación, no en el alemán.

---

## src/data/a1.js

### [A] Explicaciones corruptas (restos de traducción)

1. `g-a1-002` — explicación: `Du bist = du bist (Zustand oder Identität).`
   Tautología sin sentido; era una glosa española mal traducida.
   → `Mit "du" verwenden wir "bist". "Bist" ist die 2. Person Singular von "sein" und
   drückt einen Zustand oder eine Identität aus.`

2. `g-a1-004` — explicación: `"Sie" = sie (3. Person Singular feminin). Achtung:
   "sie" (klein) = sie/sie (Plural), "Sie" (groß) = Höflichkeitsform.`
   El fragmento `"sie" (klein) = sie/sie (Plural)` no significa nada.
   → `"sie" ist die 3. Person Singular feminin: sie heißt. Achtung: "sie" (klein) =
   3. Person Singular oder Plural, "Sie" (groß) = Höflichkeitsform.`

### [B] `erzählen über` (hispanismo/anglicismo) — recurrente

`Erzähle über deine Familie`, `… deine Hobbys`, `… deine Schule`,
`… dein letztes Wochenende`, `… eine Geburtstagsfeier`.
En alemán estándar: **`Erzähle von …`** o **`Erzähle etwas über …`**.
`erzählen über` sin el objeto `etwas` suena a calco de "contar sobre / hablar sobre".
→ Corregido a `Erzähle von deiner Familie`, `von deinen Hobbys`, `von deiner Schule`,
`von deinem letzten oder nächsten Wochenende`, `von einer Geburtstagsfeier`.

### [C] Terminología gramatical

3. `g-a1-008` y `g-a1-010` — `das (neutral)` / `"Kind" ist neutral`.
   El término alemán es **Neutrum** (o el adjetivo *sächlich*); `neutral` no es el nombre
   del género.
   → `Die drei Genera: der (Maskulinum), die (Femininum), das (Neutrum).`
   y `"Kind" ist ein Neutrum`. Igual en `g-a1-015`: `"Auto" ist ein Neutrum`.

4. `g-a1-012` — `Im Plural ist der bestimmte Artikel immer "die"`.
   Falso con `immer`: dativo plural = **den**, genitivo plural = **der**.
   → `Im Nominativ und Akkusativ Plural ist der bestimmte Artikel immer "die",
   unabhängig vom Genus im Singular. (Im Dativ: den, im Genitiv: der.)`

### [B] Consigna poco idiomática

`Schreibe eine kurze Vorstellung über dich` → **`Stelle dich in einem kurzen Text vor`**.

---

## src/data/a2.js

### [A] La pregunta regala la respuesta

5. `g-a2-014` — `question:'Ich gebe ___ das Buch. (ihm)'`, `answer:'ihm'`.
   La pista entre paréntesis **era** la respuesta: una glosa española (`(a él)`) que quedó
   traducida al alemán. → `Ich gebe ___ das Buch. (a él)`

6. `g-a2-015` — mismo patrón: `Die Katze liegt ___ dem Tisch. (unterhalb)`.
   Además `unterhalb` rige **genitivo**, así que como sinónimo de `unter + Dativ` induce a
   error. → `(debajo de)`, y explicación reescrita sin la equivalencia falsa.

### [A] Preposición + artículo sin contraer

7. `g-a2-013` — la frase objetivo era `Ich gehe ___ dem Supermarkt.` con `answer:'zu'`,
   lo que da `Ich gehe zu dem Supermarkt`: la contracción **`zum`** es obligatoria en el
   uso normal, y la propia explicación ya escribía `zum Supermarkt`.
   → `Ich gehe ___ Supermarkt.` con opciones `zum / nach dem / beim / mit dem`,
   respuesta `zum`, y explicación que menciona la contracción.

### [B] Lemas de vocabulario mal citados

8. `r-a2-004`: `{word:'biegen ab'}` → **`{word:'abbiegen', translation:'die Richtung
   wechseln'}`**. `r-a2-001`: `{word:'findet statt'}` → **`{word:'stattfinden'}`**.
   El lema de un verbo separable se cita en infinitivo (en A1 ya estaba bien: `aufstehen`).

### [B] `erzählen über` (sigue)

`Erzähle über deinen Beruf`, `… ein besonderes Erlebnis`, `… deinen Lieblingsfilm`,
`… Busse, Bahnen`, `… Sport, Ernährung und Schlaf`, `Erzähle einem Freund über dein
Heimatland`. Todos corregidos a `von` + dativo.

### [B] Wegbeschreibung

`Dann gehen Sie die zweite Straße rechts.` → **`Dann nehmen Sie die zweite Straße rechts.`**

---

## src/data/b1.js

### [A] Ítem con dos respuestas correctas

9. `g-b1-012` — `___ dem Frühstück gehe ich zur Arbeit.`
   opciones `Vor / Nach / Seit / Während`, `answer:'Nach'`.
   **`Vor dem Frühstück gehe ich zur Arbeit`** es igual de correcta y frecuente: el ítem no
   tenía solución única.
   → `Ich frühstücke um sieben. ___ dem Frühstück gehe ich zur Arbeit.`

### [A] `Wie viel` en vez de `wie viele`

10. `r-b1-005` — `Wie viel Minuten Bewegung empfehlen sie mindestens?`
    Dos fallos en una línea: `Minuten` es plural contable → **`Wie viele Minuten`**; y
    `empfehlen sie` con `sie` minúscula no tiene referente en la pregunta.
    → **`Wie viele Minuten Bewegung werden mindestens empfohlen?`**
    (`l-b1-005` ya lo tenía bien: `…werden empfohlen?`)

### [A] Pronombre relativo que no concuerda con los dos antecedentes

11. `s-b1-005` — `Erzähle über ein Buch oder einen Film, der dir gut gefallen hat.`
    `der` solo concuerda con `einen Film`; con `ein Buch` haría falta `das`.
    → **`Erzähle von einem Buch oder einem Film, das bzw. der dir gut gefallen hat.`**

### [B] Preposición + artículo sin contraer

12. `g-b1-006` — `Das Buch wird von dem Autor geschrieben.` → **`vom Autor`**.

### [C] Título del ejercicio ≠ lo que se practica

13. `g-b1-002` — título `Nebensätze mit dass`, pero lo que se pide es elegir la negación.
    Además el distractor `nicht nicht` no enseña nada y la explicación
    (`…das Verb, welches am Ende steht`) era rígida.
    → título `Verneinung im dass-Satz`, distractores `nicht / kein / keine / keinen`, y
    explicación: `"Nicht" verneint das Verb und steht direkt vor dem konjugierten Verb, das
    im dass-Satz am Satzende steht. "Kein/keine" verneint dagegen Nomen.`

### [C] `Neutrum`

14. `g-b1-009` — `"Bier" ist neutral` → **`"Bier" ist ein Neutrum`**.

### [C] Ítem con más de una lectura gramaticalmente válida

15. `g-b1-005` — `___ es regnet, gehe ich spazieren.` con `Weil / Obwohl / Damit / Wenn`:
    tres de las cuatro dan frases gramaticales y solo el título desambiguaba.
    → se añade la glosa `(trotz des Regens)` al enunciado.

### [B] `erzählen über` (sigue)

`Erzähle über einen Tag…`, `… deine Erfahrungen`, `… Essen, Gewohnheiten oder Feiertage`
→ corregidos a `von` + dativo. Y `erzähle darüber` (comentar noticias) →
**`berichte darüber`**.
Nota: `l-b1-001` ya estaba bien — `Bitte erzählen Sie uns **etwas über** sich.`

---

## src/data/b2.js

### [A] Ítem roto: ninguna combinación daba una frase alemana

16. `g-b2-015` — `question:'___ ... ___ regnet es, es ist sehr kalt.'`
    `answer:'Nicht nur...sondern auch'`.
    Los dos huecos estaban **ambos delante de `regnet es`**, y faltaba el `sondern` de la
    segunda oración: la frase resultante no existe en alemán.
    → enunciado `___ regnet es, ___ es ist ___ sehr kalt.` con la opción
    `Nicht nur / sondern / auch`, más una explicación que advierte de la posición de `auch`:
    **`Nicht nur regnet es, sondern es ist auch sehr kalt.`**

17. `g-b2-012` — `___ des Vertrags dauerte drei Stunden. (unterschreiben)`
    con `answer:'Die Unterschrift'`: **la respuesta marcada era la incorrecta**.
    `Unterschrift` es el trazo, no la acción, así que `Die Unterschrift dauerte drei Stunden`
    no tiene sentido; y el distractor `Das Unterschreiben` sí era alemán correcto.
    → opción nueva **`Die Unterzeichnung`** como respuesta, glosa del enunciado ampliada a
    `(unterschreiben → Nomen für den Vorgang)` y explicación que distingue los dos términos.

### [A] Colocación inexistente

18. `s-b2-014` — `Halte eine kritische Rezension über einen Film…`
    **`eine Rezension halten`** no es alemán: se *halten* un `Vortrag`, una `Präsentation`
    o una `Rede`; una `Rezension` se **schreibt/verfasst**.
    → **`Besprich kritisch einen Film, den du kürzlich gesehen hast.`**

### [A] Oración de consigna sintácticamente rota

19. `s-b2-004` — `…mit einem Kollegen, der regelmäßig zu spät kommt und du seine Arbeit
    übernehmen musst.` No se puede coordinar una oración de relativo con una principal.
    → `…mit einem Kollegen, der regelmäßig zu spät kommt, **sodass** du seine Arbeit
    übernehmen musst.`

### [A] Errata visible al usuario

20. `s-b2-018` — `title:'Konsumund Nachhaltigkeit'` → **`Konsum und Nachhaltigkeit`**.

### [B] Colocación forzada

21. `r-b2-003` — `Die Integration stellt Chancen und Herausforderungen dar.`
    `etwas darstellen` funciona con `Herausforderung`, no con `Chancen`.
    → **`Die Integration bringt Chancen und Herausforderungen mit sich.`**

### [B] Otros

22. `r-b2-001` — `{word:'gefährdet', translation:'in Gefahr bringt'}`: lema y glosa en
    formas distintas → **`{word:'gefährden', translation:'in Gefahr bringen'}`**.
23. `s-b2-011` — `Tierversuche für medizinische Forschung` → `für **die** medizinische
    Forschung`.
24. `g-b2-006` — `(maskulin/neutral)` → **`(Maskulinum/Neutrum)`**, y
    `Für feminin/Plural` → `Für Femininum und Plural`.

---

## src/data/c1.js

### [A] Ítem con tres respuestas correctas + orden de palabras

25. `g-c1-005` — `Dem Bericht ___ hat die Wirtschaft sich erholt.`
    opciones `zufolge / gemäß / laut / nach`, `answer:'zufolge'`. Dos problemas:
    - **`gemäß` y `nach` pospuestos con dativo son igualmente correctos**
      (`dem Bericht gemäß`, `dem Bericht nach`): el ítem no tenía solución única.
    - `hat die Wirtschaft sich erholt` → el reflexivo va tras el verbo finito cuando el
      sujeto es un sustantivo pleno: **`hat sich die Wirtschaft erholt`**.
    → reformulado a `___ dem Bericht hat sich die Wirtschaft erholt.` con opciones
    `Laut / Zufolge / Gemäßt / Nachdem`, respuesta `Laut`, y explicación que contrasta la
    posición de `laut` (antepuesta) y `zufolge` (pospuesta).

### [A] Modismo mal construido: el distractor era mejor alemán

26. `g-c1-008` — `Der Plan wurde in ___ gesetzt.` con `answer:'die Tat'`.
    **`in die Tat gesetzt` no existe**: el modismo es **`in die Tat umsetzen`**. Con
    `setzen` los correctos son `in Kraft setzen` e `ins Werk setzen` — es decir, dos
    distractores eran mejor alemán que la respuesta marcada.
    → enunciado `Der Plan wurde in ___ **umgesetzt**.` y explicación que avisa de la
    diferencia entre `umsetzen` y `setzen`.

### [A] El hueco y la opción se solapaban

27. `g-c1-012` — `question:'___über wir gestern gesprochen haben, ist sehr wichtig.'`
    con `answer:'Worüber'`: al insertar la respuesta salía **`Worüberüber`**.
    → enunciado `___ wir gestern gesprochen haben, ist sehr wichtig.` y explicación que
    menciona la variante con correlato (`Das, worüber …`).

### [A] Hint que no era una frase alemana

28. `s-c1-017` — hints `'Während die ... geprägt war von...'` y
    `'Zeichnet sich der ... durch ... aus.'`: el segundo era la segunda mitad del primero,
    cortada y convertida en declarativa con el verbo en primera posición.
    → un solo hint completo: `Während die ... von ... geprägt war, zeichnet sich der ...
    durch ... aus.`, más un hint nuevo sobre el `Menschenbild`.

### [B] Tratamiento femenino inconsistente

29. `l-c1-002` — `Frau Professor Schneider` → **`Frau Professorin Schneider`**
    (así estaba ya bien en `b2.js`: `Frau Professorin Klein`).

### [B] Pleonasmo

30. `s-c1-011` — `Das Stigma wurzelt in tief verwurzelten kulturellen…`
    → **`…wurzelt in tief verankerten kulturellen Vorstellungen…`**

### [B] `davor` sin referente

31. `g-c1-014` — `Ich habe Angst ___ . (vor der Prüfung)` con respuesta `davor`:
    `davor` necesita un `dass`-Satz o un antecedente, y sobraba el espacio antes del punto.
    → **`Ich habe Angst ___, die Prüfung nicht zu schaffen.`**

### [C] Etiqueta didáctica equivocada

32. `g-c1-013` — título `Konjunktiv I: Vermutung`. El Konjunktiv I marca **discurso
    referido**, no una suposición (eso es el terreno de `dürfte`, `wohl`, Futur I).
    → título `Konjunktiv I: indirekte Rede in der Presse` y explicación reescrita.

---

## src/data/level-test-questions.js — máxima prioridad (es el test de nivel)

### [A] Alemán no estándar presentado como respuesta correcta de C1

33. `c1-g-001` — `Er behauptete, ___ den ganzen Tag gearbeitet ___.`
    `correctAnswer:'er habe ... gehabt'` → `Er behauptete, er habe den ganzen Tag
    gearbeitet gehabt.` Eso es el **doppeltes Perfekt**, forma coloquial/regional que no es
    alemán estándar escrito y que en un examen C1 del Goethe se corrige como error. El
    Konjunktiv I de perfecto ya expresa la anterioridad. Además la explicación lo llamaba
    `Plusquamperfekt`, y no lo es. **Con la plantilla de dos huecos ninguna opción era
    correcta.**
    → enunciado `Er behauptete, ___ den ganzen Tag ___.`, opciones
    `er hat … gearbeitet / er habe … gearbeitet / er hätte … arbeiten / er habe … arbeiten`,
    respuesta `er habe … gearbeitet`, y explicación que descarta explícitamente el
    doppeltes Perfekt.

### [A] Concordancia de género en una pregunta de gramática C1

34. `c1-v-003` — `Welche Funktionsverbgefüge ist korrekt?`
    `Gefüge` es neutro → **`Welches Funktionsverbgefüge ist korrekt?`**

### [A] La respuesta insertada producía un orden de palabras imposible

35. `a2-g-003` — `prompt:'Wie ___ du heute?'`, `correctAnswer:'fühlst dich'`:
    al insertar salía **`Wie fühlst dich du heute?`**. El reflexivo va *después* del sujeto,
    así que el hueco no podía ser continuo.
    → plantilla `Wie ___ du ___ heute?` con opciones `fühlst / dich`, etc.
    (así lo hacía ya bien `a2-g-004` con `stehe / auf`).

### [C] `Vermutung` usado para el Konjunktiv II irreal

36. `b2-g-004` — `"hätte + Partizip II" für Vermutungen über die Vergangenheit`.
    Aquí el Konjunktiv II Vergangenheit expresa **irrealidad**, no suposición.
    → `…für irreale Bedingungen in der Vergangenheit`.

### [C] Ítems con más de una opción gramaticalmente válida

37. `c1-g-003` — el distractor `Das Frühaufstehen ist wichtig` también es alemán aceptable.
    → sustituido por `Das Aufstehen früh ist wichtig` (claramente incorrecto).
38. `b1-g-006` — `Hier ___ jeden Morgen frische Brötchen verkauft.`: `werden` y `wurden`
    daban ambas frases correctas. → `Hier ___ **auch heute** frische Brötchen verkauft.`
39. `a2-v-002` — explicación `Die anderen drei sind Synonyme für "kriegen"`: `gewinnen` no
    es sinónimo de `bekommen/erhalten`.
    → `Die anderen drei bedeuten, dass er den Preis erhält. "Verliert" drückt das Gegenteil
    aus.`

### [C] Terminología: `neutrum` en minúscula como adjetivo

40. `a1-g-002` y `b1-g-002` → **`ist ein Neutrum`** / **`(Neutrum)`**.


---

## src/data/exercises-part1.js

### [A] El prefijo separable se duplica al insertar la respuesta

41. `grammar-a1-014` (l. 432) — `question:'Ihr ___ um 7 Uhr auf. (aufstehen)'`,
    `answer:'steht auf'` (y las cuatro opciones llevan `auf`).
    Resultado: **`Ihr steht auf um 7 Uhr auf.`** — `auf` duplicado.
    → O bien opciones sin prefijo (`stehe / stehst / steht / stehen`) manteniendo el `auf`
    del enunciado, o bien plantilla `Ihr ___ um 7 Uhr ___.` con `steht / auf`
    (así lo hace bien `grammar-a2-004`).

### [A] La pista revela la respuesta

42. `grammar-a2-013` (l. 988) — `Ich wohne ___ meiner Schwester. (bei)`, `answer:'bei'`.
    Mismo patrón que `g-a2-014`. Quitar la pista o poner la glosa española.
    (En cambio `grammar-a2-014`, l. 1001, usa `(der Tisch)` — eso sí es correcto: da el
    lema, no la solución.)

### [B] Detalles

43. `listening-a2-005` (l. 1087) — `Ja, der Balkon ist **im** Schlafzimmer.`
    Un balcón no está *dentro* del dormitorio. → `Der Balkon liegt **am** Schlafzimmer`
    o `Der Balkon geht vom Schlafzimmer ab`.
44. `reading-a2-005` (l. 1029) — `Die Miete ist 750 Euro im Monat, **mit** Nebenkosten.`
    El término del sector es **`inklusive Nebenkosten`** (o `warm`).
45. `grammar-b1-012` (l. 1556) — `___ dem Studium hat sie sofort eine Stelle gefunden.`
    Mismo problema de doble solución que `g-b1-012` (`Vor` también es válido), aunque aquí
    el `sofort` y la explicación sí orientan. Prioridad menor.

### Nota de contenido (no gramatical)

Varios ítems están **duplicados** entre `exercises-part1.js` y `a1.js`/`a2.js`/`b1.js`:
`Ich ___ müde.`, `Ich sehe ___ Mann.`, `Das Problem ___ sofort gelöst werden.`
Este último con **respuestas distintas**: `grammar-b1-007` = `muss`, `g-b2-002` =
`Alle sind möglich`. Conviene decidir cuál es la fuente única.

---

## src/data/extra-path.js

Nota positiva: **este archivo sí trae las traducciones en español**
(`{word:'aufstehen', translation:'levantarse'}`), a diferencia de `a1.js`, `a2.js`, `b1.js`,
`b2.js`, `c1.js` y `exercises-part1.js`, que glosan en alemán. Este es el formato correcto.

### [A] Errores de género y concordancia

46. `w-a1-022` (l. 228) — `Du hast **eine** T-Shirt online gekauft.`
    → **`ein T-Shirt`** (`das T-Shirt`). La propia pista de la línea siguiente ya dice
    `ich habe ein T-Shirt bei Ihnen gekauft` — el ejercicio se contradice a sí mismo.

47. `r-a2-019` (l. 328) — `ein Praktikum in **einer** Kindergarten in München gemacht`
    → **`in einem Kindergarten`** (`der Kindergarten`, dativo masculino).

48. `r-a2-018` (l. 320) — `Im Sommer **kommt** Tante Eva und ich gerne zu Besuch.`
    Sujeto compuesto con `ich` → 1.ª persona del plural.
    → **`Im Sommer kommen Tante Eva und ich gerne zu Besuch.`**

49. `g-b1-016` (l. 534) — explicación: `**Der** Relativpronomen steht im Nominativ…`
    → **`Das Relativpronomen`** (neutro).
    (En `exercises-part1.js` l. 1585 está bien: `Das Relativpronomen stimmt…`)

50. `l-c1-020` (l. 1199) — `**Stadtplaner** Dr. Lehmann ist zu Gast. **Frau Doktor**, …`
    Contradicción de género dentro del mismo audio.
    → **`Stadtplanerin Dr. Lehmann ist zu Gast.`**
    (Mismo problema de tratamiento femenino que `Frau Professor` en `c1.js`.)

### [A] Títulos y opciones rotas

51. `s-b2-027` (l. 1043) — `title:'Lebenslange Lernens'` → **`Lebenslanges Lernen`**.
52. `l-b1-020` (l. 679) — opción `'Über das Essen war kalt'`: mezcla preposición y oración
    completa. → `'Das Essen war kalt'`.
53. `l-c1-023` (l. 1222) — respuesta `'Strukturellen Kollaps'` en acusativo, mientras la
    pregunta es `Welcher Begriff …?` (nominativo) y los otros distractores van en nominativo.
    → **`Struktureller Kollaps`**.

### [A] Pregunta que no es alemán

54. `l-b1-025` (l. 714) — `**Wohin empfiehlt** der Reisebüro-Mitarbeiter?`
    `empfehlen` no admite `wohin`. → **`Was empfiehlt der Reisebüro-Mitarbeiter?`**
    o `Wohin soll die Familie laut dem Mitarbeiter fahren?`

### [A] La respuesta marcada produce una frase incorrecta

55. `g-c1-019` (l. 1066-1068) — `___ hatte sie alle Vorbereitungen erledigt.`
    `answer:'Aufgestanden'` → **`Aufgestanden hatte sie alle Vorbereitungen erledigt.`**
    no es alemán: la construcción de participio absoluto exige coma **y** un complemento
    (`Früh aufgestanden, hatte sie …`). La propia explicación escribe la coma que falta en
    el enunciado. Y el distractor `Beim Aufstehen` sí da una frase gramatical.
    → Reformular: `___ , hatte sie alle Vorbereitungen erledigt.` con `Früh aufgestanden`.

56. `g-b2-017` (l. 797-799) — `Das ___ Kind weinte laut.` `answer:'fallende'`.
    Dos problemas: (a) **falta el verbo de referencia** entre paréntesis, que sí tienen los
    ítems paralelos (`g-b2-008` pone `(lachen)`), así que el alumno no puede deducir
    `fallen`; (b) `Das fallende Kind weinte laut` no es una frase alemana sensata.
    → `Das ___ Kind lief zu seiner Mutter. (weinen)` → `weinende`.

### [A] Ítems sin solución única (patrón recurrente en C1)

57. `g-c1-022` (l. 1078) — `Sie ___ sich der Verantwortung stets bewusst.` `answer:'war'`.
    **`ist` es igualmente correcto** (y `sind` si `Sie` es plural o cortesía): nada en la
    frase fija el tiempo. La explicación dice `hier Präteritum` sin ningún indicio que lo
    motive. → Añadir marcador temporal: `Damals ___ sie sich der Verantwortung stets bewusst.`
    Además la explicación llama a `sich … bewusst sein` **verbo reflexivo**: no lo es.
    Es `bewusst` (adjetivo) + pronombre reflexivo en **dativo** + objeto en genitivo.

58. `g-c1-025` (l. 1090) — `Der Lärm war ___ laut, dass niemand schlafen konnte.`
    `answer:'derart'`. **`so` es la construcción consecutiva estándar** y queda marcada
    como error — la propia explicación reconoce que `derart` es solo una variante más
    enfática de `so … dass`. → Quitar `so` de las opciones o pedir explícitamente el
    registro elevado.

59. Mismo patrón, prioridad media:
    - `g-c1-016` (l. 1054) `Sie ___ uns einen Bericht zur Verfügung gestellt.` `answer:'hat'`:
      con `Sie` de cortesía o plural, `haben` es correcto.
    - `g-c1-021` (l. 1074) `___ der aktuellen Lage müssen wir umdenken.` `answer:'Angesichts'`:
      `Wegen` y `Trotz` dan frases igualmente gramaticales.
    - `g-b2-022` (l. 817) `Ich habe ihn nicht kommen ___.` `answer:'sehen'`: con `sehen`/`hören`
      el Duden admite **también** el participio (`kommen gesehen`), así que el distractor
      `gesehen` no es un error.

### [A] Orden de palabras tras `jedoch`

60. `r-c1-020` (l. 1120) — `…hat das Wirtschaftswachstum jahrzehntelang befeuert,
    **jedoch ihre Anfälligkeit ist** mit jeder Krise sichtbarer geworden.`
    `jedoch` en primera posición exige el verbo en segunda.
    → **`jedoch ist ihre Anfälligkeit mit jeder Krise sichtbarer geworden`**
    (o `ihre Anfälligkeit ist jedoch …`).

### [B] Léxico y colocaciones

61. `s-c1-020` (l. 1286) — hint `**Verstehbar** ist auch die Gegenposition, jedoch …`
    → **`Verständlich ist auch die Gegenposition`**. `verstehbar` no es idiomático.
62. `l-b1-019` (l. 669) — título `**Auf** der Volkshochschule` → **`An der Volkshochschule`**
    (como `an der Universität`).
63. `s-b1-022` (l. 769) — hint `Falls ich noch einmal **hingehen** könnte…` en un ejercicio
    sobre un viaje en el que se `fährt` → **`hinfahren`**.
64. `s-a2-028` (l. 525) — `die Vor- und Nachteile **von einem Leben** in einer großen Stadt`
    → **`eines Lebens in einer großen Stadt`** (genitivo).
65. `s-a2-023` (l. 511) — hint `Das Foto **ist** im … gemacht.`
    → `Das Foto **wurde** im … **aufgenommen**.`
66. `l-a1-020` (l. 156) — `**Wie viel** Tomaten kauft die Person?` → **`Wie viele Tomaten`**
    (mismo error que `r-b1-005` en `b1.js`).

### [C] Precisión de contenido

67. `r-b1-025` (l. 638) — `Romanisch in der Schweiz`: el nombre estándar en alemán es
    **`Rätoromanisch`**. Y decir que estas lenguas las hablan `nur noch wenige tausend
    Menschen` subestima las cifras (romanche ≈ 40 000–60 000; sorabo ≈ 20 000–30 000).
68. `g-b2-020` (l. 809) — junto a `Da er krank war, konnte er nicht kommen` (marcada),
    la opción `Er war krank, also kam er nicht` también es una conversión válida al estilo
    verbal. Sustituir ese distractor.


---

## src/data/extra-reading-listening-writing.js

### [A] Colocación imposible: no se "gana" un segundo puesto

69. `r-a2-015` (l. 300) — `Letztes Jahr haben sie den zweiten Platz in der Meisterschaft
    **gewonnen**.` y la pregunta correspondiente (l. 305)
    `Welchen Platz hat die Mannschaft **gewonnen**?`
    En alemán un puesto se **`belegt`** o se **`erreicht`**; solo se *gana* el primer puesto
    o un premio.
    → `…haben sie den zweiten Platz **belegt**` / `Welchen Platz hat die Mannschaft
    **belegt**?`
    Nota: en `extra-b1b2.js` (l. 133) el mismo contenido está bien resuelto:
    `ich habe den dritten Platz **bekommen** und ein neues Objektiv als Preis **gewonnen**`.

### [A] Pleonasmo

70. `r-a2-016` (l. 309) — `Bitte machen Sie **keinen lauten Lärm** nach dieser Zeit.`
    `Lärm` ya significa ruido molesto: `lauter Lärm` es redundante y suena mal.
    → `Bitte machen Sie nach dieser Zeit **keinen Lärm**.`

### [B] `in der Nähe` rige genitivo

71. `r-a2-008` (l. 235) — `ganz in der Nähe **von einem Park**`
    → **`ganz in der Nähe eines Parks`**.

---

## src/data/extra-b1b2.js

Los textos son de muy buena calidad. Dos puntos:

### [A] Género

72. `l-b1-008` (l. 105) — `**Der neue Abflugzeit** ist 16:30 Uhr.`
    `die Abflugzeit` es femenino → **`Die neue Abflugzeit ist 16:30 Uhr.`**

### [B] `wegen` + dativo en los distractores

73. `l-b1-008` (l. 107) — opciones `'Wegen schlechtem Wetter'` y `'Wegen zu vielen Passagieren'`.
    `wegen` rige **genitivo**: `wegen schlechten Wetters`, `wegen zu vieler Passagiere`.
    Llamativo porque la respuesta correcta del mismo ítem —
    `'Wegen technischer Probleme'` — **sí** está en genitivo. Los distractores modelan
    alemán incorrecto.

74. `l-b1-013` (l. 140) — `dass in den Wagen 1 bis 3 Ruhebereich ist`
    → `dass die Wagen 1 bis 3 Ruhebereich **sind**` o
    `dass **sich** in den Wagen 1 bis 3 **der** Ruhebereich **befindet**`.

---

## src/data/extra-c1.js

Los textos de lectura y audición son alemán académico C1 genuinamente bueno. Solo:

### [A] Anglicismo sintáctico en el enunciado

75. `r-c1-014`, primera pregunta (l. 72) —
    `**Was** betrachten absolute Straftheorien die Strafe **als**?`
    Calco del inglés *"What do they regard punishment as?"*. El `als` no puede quedar suelto
    al final.
    → **`Als was betrachten absolute Straftheorien die Strafe?`**
    o `Wie betrachten absolute Straftheorien die Strafe?`

---

## src/data/flashcards.js

El alemán de las 456 tarjetas es de calidad alta. Hallazgos:

### [A] Elipsis imposible del verbo

76. Tarjeta `einerseits … andererseits` (tema `c1-connectors`) — ejemplo:
    `Einerseits ist es günstig, andererseits die Qualität schlecht.`
    En la segunda oración falta el verbo y no se puede elidir aquí.
    → **`Einerseits ist es günstig, andererseits ist die Qualität schlecht.`**

### [B] Ejemplos que no encajan con la entrada

77. `{ de:'der zweite', example:'Das zweite Haus links.' }` — la entrada es masculina,
    el ejemplo neutro. → `Der zweite Versuch war erfolgreich.`
78. `{ de:'der Schmerz', example:'Ich habe Kopfschmerzen.' }` — el ejemplo no contiene la
    palabra de la tarjeta en singular. → `Der Schmerz lässt langsam nach.`
79. `{ de:'eins', example:'Ich habe eins bekommen.' }` — ambiguo (suena a "saqué un uno" de
    nota). → `Eins plus eins ist zwei.`
80. `{ de:'die Begebenheit', example:'Eine seltsame Begebenheit hat sich ereignet.' }` —
    `Begebenheit` + `sich ereignen` es tautológico.
    → `Er erzählte eine seltsame Begebenheit aus seiner Kindheit.`

---

## src/data/pruefungen/ (simulacros Goethe)

Es la parte mejor escrita de la app: alemán correcto, comillas alemanas bien puestas en la
mayoría de los archivos, estructuras conformes al formato oficial. Dos cosas:

### [A] Forma inexistente en el modelo B1 de lectura

81. `goethe-b1-lesen.js` (l. 44) — `Die Vorlesungen sind anders als in Deutschland —
    viel **diskutierender** und freier.`
    **`diskutierender` no existe**: no se puede formar un comparativo del participio I
    `diskutierend`.
    → `…viel **diskussionsorientierter** und freier` o, mejor para B1,
    `…dort wird viel mehr diskutiert, und es ist freier`.

### [A] `Erzähle über` en un enunciado de examen

82. `goethe-a2-sprechen.js` (l. 49) — `**Erzähle über** das vorgegebene Thema.`
    La formulación estándar del Goethe es **`Sprich über …`**.
    → `**Sprich über** das vorgegebene Thema.`
    (En la línea 52 del mismo archivo ya está bien: `Erzähle ausführlich **darüber**.`)

---

## Texto de interfaz (componentes .jsx)

El alemán de la UI está casi todo correcto. Tres correcciones:

### [A] Colocación

83. `Fortgeschritten — Du sprichst fließend **in** komplexen Themen.`
    (descripción de nivel C1) → **`Du sprichst fließend über komplexe Themen.`**

### [A] Frase incompleta

84. `Neues Passwort (leer lassen, um nicht zu ändern)` — falta el objeto de `ändern`.
    → `Neues Passwort (leer lassen, um **es** nicht zu ändern)`
    o `(leer lassen, wenn das Passwort unverändert bleiben soll)`.

### [B] Imperativos abreviados y colocación

85. `Probier eine Grammatikübung` (y las variantes Hör-/Lese-/Schreib-/Sprechübung).
    Estándar: **`Probiere eine Grammatikübung aus`** (`ausprobieren`), o simplemente
    `Mach eine Grammatikübung`.
86. `Klick zum Anhören (du kannst es mehrmals abspielen)` → `**Klicke** zum Anhören
    (du kannst **die Aufnahme** mehrmals abspielen)` — `es` no tiene antecedente claro.

---

# Problemas transversales (resolver de una vez en toda la app)

### T1. [A] El campo español contiene alemán — inconsistencia estructural

- `flashcards.js` usa `es:` y `nameEs:`, pero el contenido está **en alemán**
  (`{ de:'Hallo', es:'informelle Begrüßung' }`).
- `a1.js`, `a2.js`, `b1.js`, `b2.js`, `c1.js`, `exercises-part1.js`, `extra-b1b2.js`,
  `extra-c1.js`, `extra-reading-listening-writing.js`: el campo `translation` da
  **paráfrasis alemanas**.
- `extra-path.js` **sí** está en español (`{word:'aufstehen', translation:'levantarse'}`).

Para un alumno A1 hispanohablante, glosar `heiße` como `ich trage den Namen` es inservible.
Hay que decidir un criterio único y aplicarlo. Si la definición monolingüe se quiere
conservar para niveles altos, conviene un campo aparte (`de_def` + `es`) en lugar de meter
alemán en un campo llamado `es`.

### T2. [B] `erzählen über` — 15 apariciones

`a1.js` (l. 136, 148, 166, 169, 178), `a2.js` (l. 132, 138, 141, 144, 156),
`b1.js` (l. 130, 139, 145, 163), `pruefungen/goethe-a2-sprechen.js` (l. 49).

En alemán estándar: **`Erzähle von …`** o **`Erzähle etwas über …`**; para consignas de
examen, **`Sprich über …`**. El patrón correcto ya existe en la app:
`b1.js` l. 69 `Bitte erzählen Sie uns **etwas über** sich.`

### T3. [C] Terminología del género gramatical — tres variantes en paralelo

- `neutral` → `a1.js` (l. 12, 14), `b1.js` (l. 13), `b2.js` (l. 10)
- `neutrum` (minúscula, como adjetivo) → `level-test-questions.js` (l. 30, 176),
  `exercises-part1.js` (l. 422), `extra-path.js` (l. 39)
- `Neutrum` (correcto, sustantivo) → `exercises-part1.js` (l. 207)

Unificar en **`Neutrum`** (sustantivo) o **`sächlich`** (adjetivo). `neutral` no es el
nombre del género.

### T4. [C] Comillas alemanas mal cerradas

Se abre con `„` y se cierra con la comilla recta `"` en lugar de `"`:
`goethe-b2-hoeren.js` (22×), `goethe-c1-hoeren.js` (9×), `goethe-c2-hoeren.js` (8×),
`extra-c1.js` (10×), `extra-b1b2.js`, `goethe-a1/a2/b1/b2/c1-sprechen.js`.
El par alemán es **`„…"`**. Es visible para el usuario en pantalla.

### T5. [A] Patrón de diseño: ítems de opción múltiple sin solución única

No es un error de alemán, sino de construcción, y afecta a la fiabilidad del test:
`g-b1-012`, `grammar-b1-012`, `g-c1-005`, `g-c1-016`, `g-c1-021`, `g-c1-022`, `g-c1-025`,
`g-b2-022`, `g-b2-020`, `b1-g-006`, `c1-g-003`.
En todos, un distractor produce una frase alemana igual de correcta que la marcada. Un
alumno que sepa alemán es penalizado. Recomendación: añadir al enunciado el marcador que
fije la respuesta (temporal, de registro o de sentido), o sustituir el distractor.

### T6. [A] Patrón: la pista entre paréntesis revela la respuesta

`g-a2-014` (`(ihm)`), `g-a2-015` (`(unterhalb)`), `grammar-a2-013` (`(bei)`).
Vienen de glosas españolas traducidas al alemán por error. Uso correcto del paréntesis
—dar el lema, no la solución— en `grammar-a2-014` (`(der Tisch)`) y `g-a1-011` (`(lernen)`).

### T7. [A] Patrón: la respuesta insertada rompe la frase

`grammar-a1-014` (prefijo `auf` duplicado), `a2-g-003` (`Wie fühlst dich du heute?`),
`g-c1-012` (`Worüberüber`), `g-b2-015` (huecos mal colocados), `c1-g-001`
(fuerza el `gehabt` del doppeltes Perfekt), `g-c1-019` (falta la coma).
Conviene una comprobación automática: para cada ítem `fill_blank`/`multiple_choice`,
insertar la respuesta en el hueco y revisar la frase resultante.

---

# Prioridades sugeridas

**Bloque 1 — corregir ya (visible y evaluado):**
`level-test-questions.js` completo (nº 33-40): es el test de nivel y decide el itinerario
del alumno. En especial `c1-g-001` (doppeltes Perfekt como respuesta correcta),
`c1-v-003` (`Welche Funktionsverbgefüge`) y `a2-g-003` (orden de palabras imposible).

**Bloque 2 — errores duros de alemán:**
nº 16, 17, 18, 19, 20, 25, 26, 27, 28, 41, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
58, 60, 69, 70, 72, 75, 76, 81, 82, 83, 84.

**Bloque 3 — transversales:** T1 (campo `es`/`translation`), T2 (`erzählen über`),
T3 (`Neutrum`), T4 (comillas).

**Bloque 4 — rediseño de ítems:** T5, T6, T7 y los puntos [B]/[C] restantes.


---

# SEGUNDA PASADA — cobertura completa de simulacros y tarjetas

En la primera revisión, `flashcards.js` y los 24 archivos de `pruefungen/` se revisaron por
muestreo + barrido de patrones, no línea por línea. Esta segunda pasada los cubre al 100 %:
las 552 tarjetas una por una y los 24 simulacros Goethe completos (textos, transcripciones,
enunciados, opciones y consignas).

## Hallazgos nuevos (todos corregidos)

### [A] pruefungen/goethe-a1-schreiben.js — dos errores en la misma consigna

87. `Ihre Freundin Anna möchte **im** Sprachkurs „Deutsch für Anfänger" **teilnehmen**.`
    `teilnehmen` rige **`an` + dativo** → **`am Sprachkurs … teilnehmen`**.
88. `**Sie hilft** Anna beim Anmeldeformular.`
    La consigna trata al candidato de `Sie` (cortesía: `Schreiben Sie…`), pero `hilft` es
    3.ª persona singular, así que se lee "ella ayuda a Anna" — sin sentido, porque Anna es
    la amiga. → **`Sie helfen Anna beim Anmeldeformular.`**

### [A] pruefungen/goethe-a1-sprechen.js — coordinación imposible

89. `Sprich frei und vollständige Sätze.`
    No se puede coordinar el adverbio `frei` con el objeto `vollständige Sätze` bajo `sprich`.
    → **`Sprich frei und in vollständigen Sätzen.`**

### [A] pruefungen/goethe-b2-schreiben.js — palabra inexistente

90. `Gehe auf einen möglichen **Gegenbar einwand** ein und entkräfte ihn.`
    `Gegenbar` no existe; era `Gegeneinwand` partido por la mitad.
    → **`Gehe auf einen möglichen Gegeneinwand ein und entkräfte ihn.`**

### [A] pruefungen/goethe-a2-schreiben.js — género

91. `Du interessierst dich für **das** „FitClub München".`
    `der Club` es masculino → **`für den „FitClub München"`**.

### [A] pruefungen/goethe-a1-lesen.js — ortografía (Modellsatz 3)

92. `Die Praxis Dr. Klein ist am **Mittwoch nachmittag** offen.`
    Desde la reforma de 1996 se escribe **`am Mittwochnachmittag`** (una palabra) o
    `mittwochs nachmittags`.
93. `Auf dem Spielplatz dürfen auch **14-jährige** spielen.`
    Adjetivo sustantivado → mayúscula: **`14-Jährige`**.
    (Ojo: en `extra-path.js` l. 384 `ein 14-jähriger Junge` **sí** va en minúscula, porque
    ahí es atributo de `Junge`. No se ha tocado.)

### [B] pruefungen/goethe-a1-lesen.js (Modellsatz 2)

94. `In einem **Cafe** lesen Sie…` → **`Café`**.

### [B] pruefungen/goethe-c2-hoeren.js — tratamiento femenino

95. `Frau Professor Lehmann` → **`Frau Professorin Lehmann`**
    (se la designa `Prof. Dr. Lehmann` y `sie` en todo el diálogo).
    Tercera aparición del mismo patrón, tras `c1.js` y `extra-path.js`.

### [A] flashcards.js — concordancia rota

96. `das Angebot | **etwas zum Kauf angebotener Artikel**`
    `etwas` (neutro) no puede encabezar `angebotener Artikel` (masculino nominativo).
    → **`eine Ware, die zu einem günstigen Preis angeboten wird`**.

### [A] Comillas alemanas abiertas y nunca cerradas (4 casos)

97. Cuatro monólogos largos abrían con `„` y cerraban con `"` recta al final del bloque de
    varias líneas, así que mi primera corrección (que emparejaba por línea) no los alcanzó:
    - `goethe-b2-hoeren.js` (vortrag BGE)
    - `goethe-c1-hoeren.js` (llamada de Frau Dr. Hoffmann)
    - `goethe-c1-hoeren.js` (vortrag sobre el sueño)
    - `goethe-c2-hoeren.js` (vortrag sobre multilingüismo)
    Verificado ahora: **234 pares `„…"` correctos, 0 desbalanceados.**

### [C] Comillas internas

98. Cita anidada con las mismas comillas en `goethe-a2-hoeren.js`
    (`„… „Zum goldenen Hirsch" …"`) → nivel interno con **`‚…'`**.
    Comillas simples rectas en `goethe-c1-hoeren.js` (`'differenzierten'`) y
    `goethe-c2-hoeren.js` (`'Boni'`) → **`‚…'`**.

## Lo que salió limpio en esta pasada

- **goethe-a1-hoeren.js** — 15 ítems, alemán correcto sin excepción.
- **goethe-a2-hoeren.js, goethe-b1-hoeren.js** — correctos (salvo el anidado de comillas).
- **goethe-b2-hoeren.js, goethe-c1-hoeren.js, goethe-c2-hoeren.js** — transcripciones de
  nivel nativo: debates, conferencias e entrevistas con Konjunktiv I bien usado, registro
  académico sostenido. Solo la comilla final.
- **goethe-a2-lesen, b1-lesen, b2-lesen, c1-lesen, c2-lesen** — los textos de lectura son
  la mejor prosa alemana de toda la app. Ni un error de gramática. Destacan
  `c2-lesen` (tiranía de la optimización) y `c1-lesen` (el valor del silencio).
- **goethe-b1/b2/c1/c2-sprechen y -schreiben** — correctos salvo los puntos 87-91.
- **flashcards.js** — 550 de 552 tarjetas con alemán correcto.

## Observaciones no gramaticales detectadas de paso

- **Tarjetas duplicadas** en `flashcards.js`: `die Studie`, `die Hypothese`,
  `die Wahrnehmung`, `der Zusammenhang` aparecen dos veces en los temas de ciencia de C1
  (una con ejemplo idéntico). `der Fisch` y `die Straße` se repiten con definiciones
  distintas, y `das Rezept` / `kochen` con dos sentidos legítimos.
- **Comentarios de cabecera desactualizados**: `goethe-a1-lesen.js` dice
  `Pass = 15/25` cuando el examen tiene 20 ítems y `passScore: 12`;
  `goethe-b1-schreiben.js` dice `max 100 Punkte, pass = 60` cuando el objeto define
  `maxScore: 60, passScore: 36`. Los valores del código son correctos y coherentes
  (60 % en todos los módulos); solo los comentarios engañan a quien lea el fuente.
- **Registro inclusivo inconsistente** en `goethe-b2-lesen.js`: el mismo archivo usa
  `Forscherinnen und Forscher` y `Mitarbeitende` pero también `Der Antragsteller`.
  No es error, es falta de criterio único.
- **Definiciones flojas** (no gramaticales) en algunas tarjetas A1:
  `die Hälfte | ein Teil von zweien`, `der Rock | Kleidungsstück, das nur die Beine
  bedeckt`, `orange | … | Die Orange ist orange.` (ejemplo circular),
  `schlafen | in nächtlicher Ruhe sein`.

---

# MEDICIÓN DE PRECISIÓN GRAMATICAL

## Denominador (unidades que ve el usuario)

| Bloque | Unidades |
|---|---|
| Ejercicios del banco de práctica | 735 |
| Tarjetas de vocabulario | 552 |
| Preguntas de simulacros Goethe | 250 |
| Preguntas del test de nivel | 50 |
| **Total unidades evaluables** | **1.587** |
| (más 30 tareas de Schreiben/Sprechen sin respuesta cerrada) | 30 |

Detrás de esas unidades hay 1.459 enunciados, 504 textos y transcripciones de examen,
216 explicaciones gramaticales y 1.093 juegos de opciones — unas 857 KB de alemán.

## Resultado, por bloque (estado ANTES de las correcciones)

| Bloque | Unidades | Con error duro [A] | Sin error duro | Sin ninguna incidencia |
|---|---|---|---|---|
| Simulacros Goethe (preguntas) | 250 | 3 | **98,8 %** | ~92 % |
| Tarjetas de vocabulario | 552 | 2 | **99,6 %** | ~98,9 % |
| Ejercicios del banco | 735 | 37 | **95,0 %** | ~87 % |
| Test de nivel | 50 | 3 | **94,0 %** | ~82 % |
| Tareas Schreiben/Sprechen | 30 | 4 | **86,7 %** | ~80 % |
| **GLOBAL** | **1.617** | **49** | **97,0 %** | **~90 %** |

- **Error duro [A]** = incorrecto en alemán, o respuesta marcada que produce una frase
  imposible, o ítem sin solución única. Es lo que un examinador contaría como error.
- **Incidencia** = además de lo anterior, calcos (`erzählen über`), colocaciones flojas,
  terminología gramatical imprecisa y tipografía de comillas.

## Estado DESPUÉS de las correcciones

Los 49 errores duros están corregidos y verificados uno por uno, más las incidencias
[B]/[C] catalogadas (calcos, `Neutrum`, 115 comillas, colocaciones).

| Métrica | Antes | Ahora |
|---|---|---|
| Unidades sin error duro [A] | 97,0 % | **100 %** |
| Unidades sin ninguna incidencia catalogada | ~90 % | **~99,5 %** |

El ~0,5 % restante son las cuestiones que dejé deliberadamente sin tocar porque son
decisiones tuyas, no errores: el campo `es`/`translation` en alemán (T1), las tarjetas y
ejercicios duplicados, y los comentarios de cabecera desactualizados.

## Límites de esta medición — leer antes de citar el número

1. **Un solo revisor.** Es un juicio experto, no un consenso. Un segundo corrector nativo
   discutiría con razón parte de las decisiones [B] (¿es `erzählen über` un error o solo
   poco idiomático? El Duden lo admite; los manuales del Goethe no lo usan).
2. **La frontera [A]/[B] mueve el porcentaje.** Si se contaran como error duro los 15
   `erzählen über` y las 115 comillas, el "antes" bajaría de 97 % a ~88 %. Si solo se
   contaran los errores que un examinador del Goethe tacharía sin dudar (género,
   concordancia, palabras inexistentes, respuestas imposibles), subiría a ~98,5 %.
3. **La unidad de medida importa.** Medido por *carácter* de alemán, la precisión era ya
   >99,9 % antes de tocar nada: 857 KB con ~50 errores duros. Medido por *ítem*, 97 %.
   Medido por *archivo*, 14 de 38 archivos tenían al menos un error duro (63 % limpios).
   El número por ítem es el más honesto para un alumno, porque es lo que se encuentra.
4. **No garantizo cero errores residuales.** Revisé el 100 % del contenido, pero en
   857 KB de alemán es razonable suponer que queda algún caso sutil —
   sobre todo en matices de registro y colocación, no en morfología ni sintaxis.

---

# TERCERA PASADA — duplicados

## Hallazgo previo: `exercises-part1.js` es código muerto

Antes de tocar nada comprobé cómo se combinan los bancos de ejercicios
(`src/utils/exercises.js`). El agregador importa `a1/a2/b1/b2/c1`,
`extra-reading-listening-writing`, `extra-b1b2`, `extra-c1` y `extra-path`, pero
**no importa `exercises-part1.js`**. Nadie más lo referencia y sus IDs no aparecen en el
bundle compilado.

Son **90 ejercicios (69 KB) que ningún usuario ve nunca**. Eso cambia dos cosas:

1. La mitad de los "duplicados" que había marcado en la primera revisión eran duplicados
   *contra código muerto*, no repeticiones que sufra el alumno.
2. **Corrijo mi propia medición del turno anterior**: conté 735 ejercicios, pero 90 de ellos
   están muertos. Las unidades reales que ve el usuario son **1.497** (+30 tareas), no
   1.587. Dos de los 49 errores duros estaban también en ese archivo muerto, así que los
   errores que de verdad llegaban al alumno eran 47. El porcentaje pasa de **97,0 % a
   96,9 %** — la corrección no mueve la conclusión, pero el número correcto es 96,9 %.

**Decisión tuya, no la he tomado yo:** ese archivo o se conecta al agregador (aportaría 90
ejercicios, pero introduciría ~8 repeticiones con los bancos vivos y arrastra 2 errores
duros que sí corregí en su día) o se borra. Lo he dejado intacto.

## Duplicados de vocabulario (`flashcards.js`)

Escaneo de las 552 tarjetas: **8 términos repetidos**. Los clasifiqué así:

### Redundancia real — corregida (6 tarjetas reescritas, mismo total de 552)

| Antes | Mazo | Ahora |
|---|---|---|
| `die Studie` | c1-academic (ya estaba en b2-science, **con el mismo ejemplo palabra por palabra**) | **`die Fragestellung`** — *leitende Frage einer Untersuchung* |
| `die Hypothese` | c1-academic (ya en b2-science) | **`der Befund`** — *einzelnes Ergebnis einer Untersuchung* |
| `der Zusammenhang` | c1-academic (ya en b2-science) | **`die Aussagekraft`** — *Grad, in dem etwas belastbare Schlüsse erlaubt* |
| `die Wahrnehmung` | c1-philosophy (ya en b2-psychology, definición casi idéntica) | **`die Willensfreiheit`** — *Fähigkeit des Menschen, frei zu entscheiden* |
| `die Straße` | a2-city (ya en a2-transport, **mismo nivel, mismo sentido**) | **`die Sehenswürdigkeit`** — *Ort, den Touristen besuchen* |
| `der Fisch` | a1-animals (ya en a1-food, mismo nivel) | **`das Schaf`** — *Nutztier mit dickem Wollfell* |

Reescribí las tarjetas en lugar de borrarlas para no encoger los mazos ni alterar el
recuento. Los seis términos nuevos se comprobaron uno a uno: no existían en ninguna de las
552 tarjetas.

### Polisemia legítima — conservada a propósito (2 términos)

- **`das Rezept`** — A2-health (*ärztliche Verschreibung*) y B1-cooking (*Anleitung zum
  Kochen*). Es un homónimo real y enseñarlo en los dos sentidos tiene valor didáctico.
- **`kochen`** — A2-hobbies (*Speisen zubereiten*) y B1-cooking (*hervir*). También son dos
  acepciones distintas. Aquí sí afiné la definición de B1 para que el contraste sea
  explícito: `in kochendem Wasser garen (anders als braten oder backen)`, con ejemplo nuevo
  `Die Kartoffeln kochen zwanzig Minuten.` (antes era el circular `Das Wasser kocht.`).

## Duplicados de ejercicios — 4 corregidos

Escaneando solo los archivos que llegan al usuario, quedaban cuatro ítems de gramática
repetidos. Reescribí siempre la copia de `extra-path.js` (el banco de relleno del
itinerario), dejando `a1.js`, `a2.js` y el test de nivel como fuente canónica, y
**conservando los IDs** para no invalidar el progreso ya guardado de ningún alumno.

| ID | Antes (duplicaba a) | Ahora |
|---|---|---|
| `g-a1-023` | `Wir ___ aus Spanien.` (= `g-a1-005`) | `Ihr ___ sehr freundlich.` → `seid` |
| `g-a1-024` | `Ich ___ Deutsch sprechen.` (= `g-a2-007`) | `Ihr ___ sehr gut singen.` → `könnt` |
| `g-a1-027` | `Ich habe ___ Auto.` (= `g-a1-015`) | `Wir haben ___ Zeit.` → `keine` |
| `g-b1-017` | `Das Buch, ___ ich gestern gekauft habe…` (= `b1-g-002` **del test de nivel**) | `Der Film, ___ wir gestern gesehen haben, war sehr spannend.` → `den` |

Cada reemplazo enseña **el mismo punto gramatical** que el original pero con otra persona u
otro género, así que el itinerario no pierde progresión: `sein` pasa de *wir* a *ihr*,
`können` de *ich* a *ihr*, `kein` de neutro a femenino, y el relativo en acusativo de neutro
(`das`) a masculino (`den`).

El caso `g-b1-017` era el más serio: un ejercicio de práctica **idéntico a una pregunta del
test de nivel**. Un alumno que hiciera el itinerario antes del test conocía ya la respuesta.
El test de nivel queda intacto; lo que cambió es el ejercicio.

### Falsos positivos que NO toqué

- 22 preguntas de comprensión coincidían en enunciado (`Was bestellt die Person?`,
  `Wie alt ist Max?`, `Wer ruft an?`) pero cuelgan de **textos distintos**, así que las
  respuestas distintas son correctas. Es lo normal en pruebas de comprensión.
- `l-b1-022` (extra-path) y `l-b1-011` (extra-b1b2) son dos audios B1 sobre pisos que
  coinciden en los 75 m² y en la primera pregunta, pero son escenarios diferentes (llamada
  de la administración vs. visita presencial), con alquileres y preguntas distintas.
  No es duplicado.

## Verificación

- Duplicados de ejercicio entre archivos vivos: **0**.
- Términos duplicados en tarjetas: **2** (los dos casos de polisemia conservados a propósito).
- IDs repetidos en todo el banco: **0**.
- Tarjetas: **552** (sin cambio de recuento).
- Los 11 archivos de datos importan como módulo ES sin error, con el recuento de ítems esperado.
- **801 de 801** ítems con opciones siguen teniendo su respuesta entre las opciones.

## ⚠️ El build está roto por un cambio ajeno a esta revisión

`npx vite build` falla, **pero no por el contenido alemán**. Transforma los 2.663 módulos
—incluidos todos mis archivos— y revienta al resolver un import:

```
src/components/UI/NetworkStatus.jsx (3:18):
"CloudUpload" is not exported by "lucide-react"
```

La versión instalada es lucide-react **0.294.0**, que exporta `UploadCloud`, no
`CloudUpload`. La versión commiteada del archivo importaba solo `WifiOff`; el import roto
está en una modificación **sin commitear**, junto a otros cambios en curso ajenos a mi
trabajo: `App.jsx`, `ProgressContext.jsx`, `nativeBridge.js` y un `offlineQueue.js` nuevo
sin seguimiento. Es una función de cola offline a medio construir en otra sesión.

**No he tocado esos archivos** porque hay trabajo en curso encima y no me corresponde.
El arreglo es de una palabra:

```
import { WifiOff, UploadCloud } from 'lucide-react'
```

(y renombrar los usos de `CloudUpload` en el JSX de ese componente).
