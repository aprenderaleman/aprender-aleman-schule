// Lektion 18 · Modul Lesen — Überblick
//
// Bloque 2 «Prüfungsstrategie» — abre el módulo Lesen (Lektionen 18-22).
// FIJA EL CANON INTERNO de Lesen: 65 Min., 5 Teile,
// Zeitplan: T1 10 · T2 15 · T3 15 · T4 15 · T5 10 = 65 Min.
// Las lecciones 19-22 respetan este reparto.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Modul Lesen'],
  h1: 'Modul Lesen — Überblick',
  lead: '65 Minuten, 5 Teile, 100 Punkte: So funktioniert das Modul Lesen — und mit der richtigen Strategie brauchst du **nicht jedes Wort** zu verstehen. ~~No hace falta entenderlo todo.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die fünf Teile des Moduls Lesen und ihre Reihenfolge kennen',
        'deine 65 Minuten sinnvoll einteilen',
        'die Kernstrategie anwenden: überfliegen und **Paraphrasen** suchen, nicht Wort für Wort lesen',
        'die Aufgabentypen *richtig/falsch* und *Auswahl (a/b/c)* unterscheiden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Sprache der Arbeitsanweisungen',
      items: [
        { wort: 'die Aufgabe, -n', kollokation: 'Lesen Sie zuerst die Aufgaben.', es: 'la tarea, el ítem' },
        { wort: 'die Anweisung, -en', kollokation: 'die Anweisung genau lesen', es: 'la instrucción, la consigna' },
        { wort: 'die Aussage, -n', kollokation: 'Ist die Aussage richtig oder falsch?', es: 'la afirmación' },
        { wort: 'ankreuzen', kollokation: 'die richtige Lösung ankreuzen', es: 'marcar (con una cruz)' },
        { wort: 'zuordnen', kollokation: 'die Anzeigen den Personen zuordnen', es: 'emparejar, asignar' },
        { wort: 'die Lösung, -en', kollokation: 'die Lösungen übertragen', es: 'la solución, la respuesta' },
        { wort: 'der Antwortbogen, -bögen', kollokation: 'alles auf den Antwortbogen schreiben', es: 'la hoja de respuestas' },
        { wort: 'überfliegen', kollokation: 'den Text schnell überfliegen', es: 'leer por encima' },
        { wort: 'unterstreichen', kollokation: 'Schlüsselwörter unterstreichen', es: 'subrayar' },
        { wort: 'das Schlüsselwort, -wörter', kollokation: 'nach Schlüsselwörtern suchen', es: 'la palabra clave' },
        { wort: 'passen zu + Dat.', kollokation: 'Welcher Text passt zu welcher Person?', es: 'encajar con, corresponder a' },
      ],
      hinweis: 'Diese Wörter stehen in **jeder** Arbeitsanweisung der Prüfung. ~~Apréndelas antes que nada: son las palabras de las consignas.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die fünf Teile auf einen Blick',
      kopf: ['Teil', 'Textsorte', 'Aufgabentyp', 'Zeitplan'],
      zeilen: [
        ['Teil 1', 'Blog oder E-Mail (persönlich)', 'richtig/falsch + Auswahl', 'ca. 10 Min.'],
        ['Teil 2', 'Anzeigen', 'zuordnen (Person → Anzeige)', 'ca. 15 Min.'],
        ['Teil 3', 'Meinungen & Kommentare', 'zuordnen (dafür/dagegen)', 'ca. 15 Min.'],
        ['Teil 4', 'Anweisungen (z. B. Hausordnung)', 'richtig/falsch', 'ca. 15 Min.'],
        ['Teil 5', 'formelle Texte (z. B. vom Amt)', 'Auswahl (a/b/c)', 'ca. 10 Min.'],
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Der Zeitplan **10 · 15 · 15 · 15 · 10 = 65 Minuten** ist die Empfehlung dieses Kurses. Wie viele Aufgaben jeder Teil genau hat, siehst du im **offiziellen Modellsatz**.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Strategie in vier Schritten',
      steps: [
        {
          titel: 'Zuerst die Aufgaben lesen',
          text: 'Lies die Aufgaben **vor** dem Text — dann weißt du, was du suchst. ~~Primero los ítems, luego el texto.~~',
        },
        {
          titel: 'Überfliegen, nicht übersetzen',
          text: 'Lies **nicht Wort für Wort**. Unbekannte Wörter? Weiterlesen — meist brauchst du sie nicht.',
        },
        {
          titel: 'Die Paraphrase suchen',
          text: 'Die Lösung steht fast nie mit **denselben Wörtern** im Text. Suche die gleiche __Bedeutung__ in anderen Worten. ~~Si un ítem repite una palabra exacta del texto, sospecha: suele ser trampa.~~',
        },
        {
          titel: 'Zeit im Blick — und alles ankreuzen',
          text: 'Bleib nicht an einer schweren Aufgabe hängen. Am Ende kreuzt du **jede** Aufgabe an — es gibt **keine Minuspunkte**.',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Richtig/falsch oder Auswahl?',
      absaetze: [
        'Bei **richtig/falsch** prüfst du __eine__ Aussage gegen den Text. Bei der **Auswahl (a/b/c)** vergleichst du __drei__ Optionen — oft klingen zwei ähnlich, aber nur eine steht wirklich im Text.',
        '**Wichtig:** Es zählt **nur der Text**, nicht dein Weltwissen — „falsch“ heißt „steht so nicht im Text“.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — so sehen Paraphrasen aus',
      kicker: 'Text → Aufgabe',
      titel: 'Gleiche Bedeutung, andere Wörter',
      items: [
        { text: 'Text: „Der Eintritt ist frei.“ → Aufgabe: „Der Besuch **kostet nichts**.“', gl: '— richtig' },
        { text: 'Text: „Das Geschäft ist montags geschlossen.“ → Aufgabe: „Am Montag **kann man dort nicht einkaufen**.“', gl: '— richtig' },
        { text: 'Text: „Ich habe die Stelle bekommen!“ → Aufgabe: „Sie hat jetzt **eine neue Arbeit**.“', gl: '— richtig' },
      ],
    },
    {
      type: 'beispiele',
      titel: 'Vorsicht, falsche Freunde beim Lesen',
      items: [
        { text: 'das **Gymnasium** = eine Schule', gl: '~~no es el gimnasio (eso es «das Fitnessstudio»)~~' },
        { text: 'die **Firma** = das Unternehmen', gl: '~~no es la firma (la firma = «die Unterschrift»)~~' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Zu welchem Teil des Moduls Lesen passt die Anweisung?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Welche Anzeige passt zu welcher Person? Ordnen Sie zu.“',
        '„Lesen Sie den Blog. Sind die Aussagen richtig oder falsch?“',
        '„Ist die Person dafür oder dagegen?“',
      ],
      loesungen: [
        '**Teil 2** — Anzeigen zuordnen.',
        '**Teil 1** — Blogs & E-Mails.',
        '**Teil 3** — Meinungen & Kommentare.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Paraphrasen erkennen',
      frage: 'Welche Aussage bedeutet dasselbe? a oder b?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Die Wohnung ist ab sofort frei.“ — a) Man kann sofort einziehen. b) Die Wohnung kostet nichts.',
        '„Der Kurs findet nur bei gutem Wetter statt.“ — a) Der Kurs ist immer draußen. b) Bei Regen gibt es keinen Kurs.',
        '„Kinder unter 6 Jahren zahlen keinen Eintritt.“ — a) Für kleine Kinder ist der Besuch gratis. b) Kinder dürfen nicht mitkommen.',
      ],
      loesungen: [
        '**a** — „frei“ heißt hier „nicht besetzt“, nicht „gratis“. ~~«frei» ≠ gratis en este contexto.~~',
        '**b** — „nur bei gutem Wetter“ = bei Regen fällt er aus.',
        '**a** — „keinen Eintritt zahlen“ = gratis.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Sag es mit anderen Worten — bilde selbst eine Paraphrase.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        '„Das Museum hat sonntags von 10 bis 18 Uhr geöffnet.“',
        '„Anmeldung bis 15. März per E-Mail.“',
      ],
      loesungen: [
        '„Am Sonntag kann man das Museum **tagsüber besuchen**.“ ~~Vale cualquier frase con el mismo sentido, p. ej. «Sonntags ist das Museum offen».~~',
        '„Man muss sich **vor dem 16. März** per E-Mail **anmelden**.“',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Training',
      titel: 'Mini-Training: ein kurzer Blog, vier Aufgaben',
      anweisung: 'Lies den Blog (ca. 150 Wörter). Sind die Aussagen 1–3 richtig oder falsch? Kreuze bei Aufgabe 4 die richtige Lösung an. Arbeite mit der Strategie: erst die Aufgaben, dann der Text.',
      absaetze: [
        '**Mein erster Monat im Deutschkurs — Blog von Lucía**',
        'Seit vier Wochen besuche ich einen Deutschkurs hier in Köln. Am Anfang hatte ich Angst, denn die anderen im Kurs sprechen schneller als ich. Aber unsere Lehrerin sagt immer: „Fehler sind normal!“ Das hilft mir sehr. Zum Glück lacht auch niemand, wenn ich etwas falsch sage.',
        'Der Kurs findet dreimal pro Woche am Abend statt, nach meiner Arbeit. Das ist manchmal anstrengend, aber die Gruppe ist super: Wir sind zwölf Leute aus acht Ländern. In den Pausen sprechen wir nur Deutsch, weil das unsere einzige gemeinsame Sprache ist. Nach dem Unterricht gehen wir oft noch zusammen einen Kaffee trinken. So habe ich schon zwei gute Freundinnen gefunden.',
        'Mein Tipp: Sucht euch einen Tandempartner! Ich treffe mich jeden Samstag mit Jonas. Er lernt Spanisch, ich lerne Deutsch — eine Stunde in jeder Sprache. Das kostet nichts und macht mehr Spaß als jede App. Nach dem Kurs möchte ich die B1-Prüfung machen.',
      ],
      optionen: [
        '(1) Lucía lernt seit einem Monat Deutsch in Köln. — richtig / falsch',
        '(2) Der Kurs ist am Vormittag. — richtig / falsch',
        '(3) Das Tandem mit Jonas ist kostenlos. — richtig / falsch',
        '(4) Was empfiehlt Lucía ihren Lesern? — a) eine App kaufen · b) einen Tandempartner suchen · c) dreimal pro Woche Kaffee trinken',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '(1) **Richtig.** „Seit vier Wochen besuche ich einen Deutschkurs hier in Köln“ — vier Wochen = ein Monat. ~~Paráfrasis: el texto no dice «Monat».~~',
        '(2) **Falsch.** Der Kurs findet „am Abend statt, nach meiner Arbeit“.',
        '(3) **Richtig.** „Das kostet nichts“ = kostenlos.',
        '(4) **b.** „Mein Tipp: Sucht euch einen Tandempartner!“ — Die App wird sogar negativ verglichen (Falle a), der Kaffee ist ein Detail, kein Tipp (Falle c).',
      ],
      kommentar: 'Genau so arbeitest du in der Prüfung: Aufgabe lesen → Textstelle finden → Paraphrase prüfen → ankreuzen.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lass am Ende **keine Aufgabe leer**: Für falsche Antworten gibt es keine Minuspunkte. Und plane 2–3 Minuten für den **Antwortbogen** ein — nur was dort steht, zählt.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Teil', 'Was du liest', 'Zeit'],
      zeilen: [
        ['Teil 1', 'Blog / E-Mail → richtig/falsch + Auswahl', '10 Min.'],
        ['Teil 2', 'Anzeigen → Personen zuordnen', '15 Min.'],
        ['Teil 3', 'Meinungen → dafür/dagegen', '15 Min.'],
        ['Teil 4', 'Anweisungen → richtig/falsch', '15 Min.'],
        ['Teil 5', 'formelle Texte → Auswahl (a/b/c)', '10 Min.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die fünf Teile des Moduls Lesen und meinen Zeitplan (10·15·15·15·10).',
        'Ich lese zuerst die Aufgaben und überfliege dann den Text.',
        'Ich suche Paraphrasen — nicht dieselben Wörter.',
        'Ich weiß: keine Minuspunkte, also immer ankreuzen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt kennst du die Landkarte des Moduls Lesen. In der nächsten Lektion trainierst du **Teil 1**: einen persönlichen Blog lesen und Aussagen prüfen — richtig oder falsch? Mit einem kompletten Übungstext.',
    },
  ],
}
