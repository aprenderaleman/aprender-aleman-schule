// Lektion 21 · Lesen: Kommentar & Standpunkt (Teil 4)
//
// Bloque 2 «Prüfungsstrategie» — cuarta lección del módulo Lesen.
// Sigue el canon fijado en lektion-18.js: Teil 4 = Kommentar,
// Fragen zum Standpunkt des Verfassers, ca. 15 Minuten.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B2', 'Prüfungsrelevanz: Lesen Teil 4'],
  h1: 'Lesen: Kommentar & Standpunkt',
  lead: 'Teil 4 des Moduls Lesen: In einem Kommentar versteckt sich die Haltung des Verfassers in Wertungen, Konnektoren — und manchmal in leiser Ironie.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Textsorte Kommentar erkennen: Meinung statt neutraler Bericht',
        'Wertungssprache und Ironiesignale identifizieren',
        'die echte Position des Verfassers hinter *zwar … aber* und *allerdings* finden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Wertungssprache',
      items: [
        { wort: 'erfreulich', kollokation: 'eine erfreuliche Entwicklung', es: 'positivo, alentador' },
        { wort: 'bedauerlich', kollokation: 'ein bedauerlicher Rückschritt', es: 'lamentable' },
        { wort: 'fragwürdig', kollokation: 'eine fragwürdige Entscheidung', es: 'cuestionable' },
        { wort: 'überfällig', kollokation: 'eine längst überfällige Reform', es: 'que ya tocaba hace tiempo' },
        { wort: 'angeblich', kollokation: 'die angeblich perfekte Lösung', es: 'supuestamente (con duda)' },
        { wort: 'zu Recht / zu Unrecht', kollokation: 'Die Kritik kommt zu Recht.', es: 'con razón / sin razón' },
        { wort: 'allerdings', kollokation: 'Die Idee ist gut, allerdings teuer.', es: 'sin embargo, eso sí' },
        { wort: 'immerhin', kollokation: 'Immerhin gibt es erste Fortschritte.', es: 'al menos, algo es algo' },
        { wort: 'letztlich', kollokation: 'Letztlich zählt das Ergebnis.', es: 'al final, en definitiva' },
        { wort: 'kaum verwunderlich', kollokation: 'Das Ergebnis ist kaum verwunderlich.', es: 'nada sorprendente' },
        { wort: 'es ist höchste Zeit', kollokation: 'Es ist höchste Zeit, dass sich etwas ändert.', es: 'ya va siendo hora' },
        { wort: 'auf Kosten + Gen.', kollokation: 'Erfolg auf Kosten der Schwächeren', es: 'a costa de' },
      ],
      hinweis: '~~*angeblich* es un falso amigo parcial: no significa «amablemente» ni «supuesto» neutro — expresa que el autor DUDA de la afirmación. Si el comentario dice „die angeblich saubere Lösung", el autor no se lo cree.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — was ein Kommentar ist',
      absaetze: [
        'Ein **Kommentar** ist ein meinungsbetonter Zeitungstext: Der Verfasser berichtet nicht neutral, sondern **bewertet** ein Thema und will überzeugen. Anders als in Teil 3 sagt hier niemand brav „Ich bin dafür“ — die Haltung verteilt sich über den ganzen Text und steckt in drei Arten von Signalen.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die drei Signalarten',
      kopf: ['Signal', 'Beispiel', 'Was es verrät'],
      zeilen: [
        ['Wertungswörter', 'erfreulich, fragwürdig, überfällig, zu Recht', 'direkte Bewertung: plus oder minus'],
        ['Konnektoren', 'zwar … aber, allerdings, dennoch, immerhin', 'Nach *aber/allerdings* steht die echte Position.'],
        ['Ironiesignale', 'Anführungszeichen, übertriebenes Lob, „schade nur, dass …“', 'Der Verfasser meint das Gegenteil des Gesagten.'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Methode für Teil 4',
      steps: [
        {
          titel: 'Einmal ganz lesen — für den Ton',
          text: 'Lies den Kommentar zuerst __komplett__ und frage dich nur: Klingt der Verfasser insgesamt positiv, negativ oder gemischt?',
        },
        {
          titel: 'Wertungen markieren: plus oder minus',
          text: 'Markiere beim zweiten Lesen jede __Wertung__ mit + oder −. Achte auf Anführungszeichen: Sie zitieren oft eine Meinung, die der Verfasser __nicht__ teilt.',
        },
        {
          titel: 'Das Ende ernst nehmen',
          text: 'Die Kernposition steht fast immer im __Schlussabsatz__: Forderung, Fazit, Ausblick. Wer nur den Anfang liest, verwechselt das referierte Problem mit der Meinung des Verfassers.',
        },
        {
          titel: 'Fragen wie in Teil 1–2 lösen',
          text: 'Für die Auswahlaufgaben gilt dieselbe Technik: Textstelle finden, __paraphrasieren__, Distraktoren ausschließen.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Wertung & Ironie erkennen',
      kicker: 'Signale',
      titel: 'Was steht da wirklich?',
      items: [
        { text: '„Die Reform ist **längst überfällig**.“', gl: '— pro: el autor la quería desde hace tiempo' },
        { text: '„**Zwar** spart die Stadt damit Geld, **aber** der Preis ist hoch.“', gl: '— la posición real viene tras *aber*: contra' },
        { text: '„Eine **wirklich geniale** Idee — wenn man vergisst, dass sie schon dreimal gescheitert ist.“', gl: '— ironía: el elogio exagerado + el «detalle» lo desmonta' },
        { text: '„Die **„Experten“** haben wieder einmal alles im Griff.“', gl: '— comillas + *wieder einmal*: el autor no les cree' },
        { text: '„**Immerhin** hat die Politik das Problem jetzt erkannt.“', gl: '— concesión mínima: algo es algo, pero insuficiente' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Positiv, negativ oder ironisch? Bestimme die Wertung.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Es ist erfreulich, dass endlich jemand Verantwortung übernimmt.“',
        '„Na großartig — noch ein Formular, das niemand versteht.“',
        '„Die Entscheidung ist mehr als fragwürdig.“',
        '„Die angeblich alternativlose Lösung hat erstaunlich viele Alternativen.“',
      ],
      loesungen: [
        '**positiv** — *erfreulich* + *endlich* (lang erwartet).',
        '**ironisch** — *großartig* ist als Kritik gemeint; das Detail („niemand versteht“) entlarvt es.',
        '**negativ** — *fragwürdig*, verstärkt durch *mehr als*.',
        '**ironisch/negativ** — *angeblich* signalisiert Zweifel; der Nachsatz widerlegt die Behauptung.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Die echte Position finden',
      frage: 'Wofür ist der Verfasser wirklich? Achte auf *zwar … aber* und *allerdings*.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Zwar kostet die Sanierung der Schwimmbäder Millionen, aber eine Stadt ohne Schwimmbad ist ärmer, als jede Bilanz zeigen kann.“',
        '„Das neue Bezahlsystem ist bequem, allerdings bezahlen wir mit etwas, das teurer ist als Geld: unseren Daten.“',
      ],
      loesungen: [
        '**Für die Sanierung** — der *zwar*-Teil räumt die Kosten ein, der *aber*-Teil trägt die Position.',
        '**Gegen das System** (oder stark skeptisch) — nach *allerdings* kommt der entscheidende Einwand: der Preis sind die Daten.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe einen Mini-Kommentar (3–4 Sätze) zum Thema „Mehr Videokameras auf öffentlichen Plätzen?“ — mit mindestens einem Wertungswort und einem *zwar … aber*.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Position frei wählbar — wichtig sind die sprachlichen Mittel.',
      ],
      loesungen: [
        '**Zwar** versprechen Kameras mehr Sicherheit, **aber** sie schaffen vor allem ein Gefühl der Überwachung. Dass Straftaten dadurch verschwinden, ist eine **fragwürdige** Hoffnung — meistens verlagern sie sich nur. **Es ist höchste Zeit**, stattdessen in Beleuchtung und Präsenz von Menschen zu investieren. ~~Vale la posición contraria, si usa los mismos recursos: valoración + zwar/aber.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Lesen · Teil 4',
      titel: 'Kommentar mit 5 Fragen zum Standpunkt (ca. 300 Wörter)',
      anweisung: 'Lies den Kommentar und kreuze bei jeder Aufgabe die richtige Lösung an: a, b oder c. Zeitlimit für die Übung: 15 Minuten.',
      absaetze: [
        '**Gut gemeint ist nicht gut gemacht: E-Scooter in unseren Städten**',
        'Sie sollten die Städte revolutionieren: leise, elektrisch, flexibel. Als die ersten Leih-Scooter vor einigen Jahren auftauchten, sprachen ihre Anbieter von einer „neuen Ära der Mobilität“. Eine schöne Vision — schade nur, dass die Realität auf unseren Gehwegen liegt. Wörtlich.',
        'Denn genau dort landen die Roller: quer auf dem Bürgersteig, vor Hauseingängen, gern auch einmal im Fluss. Für ältere Menschen, Eltern mit Kinderwagen oder Menschen mit Behinderung sind die abgestellten Fahrzeuge längst mehr als ein Ärgernis — sie sind ein echtes Hindernis. Wer morgens mit dem Rollstuhl zur Arbeit will, fährt heute Slalom. Und die Zahl der Unfälle, bei denen Fußgänger verletzt werden, steigt seit Jahren. Dass die Anbieter seit Jahren „an Lösungen arbeiten“, wie es in jeder Pressemitteilung heißt, macht die Sache nicht besser: Passiert ist wenig.',
        'Dabei ist die Idee ja nicht falsch. Wer kurze Strecken mit dem Scooter statt mit dem Auto fährt, entlastet die Innenstadt — theoretisch. Und natürlich gibt es sie, die Pendlerin, die mit dem Roller die letzten zwei Kilometer vom Bahnhof fährt. Studien zeigen allerdings, dass die meisten Fahrten gar nicht das Auto ersetzen, sondern den Fußweg oder das Fahrrad. Die Umweltbilanz der Geräte, deren Lebensdauer anfangs oft nur wenige Monate betrug, verbessert das nicht gerade. Klimaschutz sieht anders aus.',
        'Ein Verbot, wie es manche fordern, halte ich trotzdem für den falschen Weg. Andere Städte machen vor, wie es geht: feste Abstellzonen, weniger Anbieter, klare Regeln — und wer seinen Roller auf dem Gehweg parkt, zahlt. Es ist höchste Zeit, dass auch unsere Stadt den Anbietern solche Bedingungen stellt. Die Unternehmen werden das überleben — wer Millionen für Werbung übrig hat, findet auch das Geld für ein paar Abstellzonen. Ihre „neue Ära der Mobilität“ darf nur eben nicht länger auf Kosten derer gehen, die schlicht zu Fuß unterwegs sind.',
      ],
      optionen: [
        '(1) Welche Haltung hat der Verfasser insgesamt? — a) Er lehnt E-Scooter grundsätzlich ab. · b) Er kritisiert die heutige Praxis, hält das Konzept aber mit Regeln für sinnvoll. · c) Er findet, die Anbieter lösen die Probleme bereits gut.',
        '(2) „Schade nur, dass die Realität auf unseren Gehwegen liegt“ ist … — a) ein Lob für die flexible Nutzung · b) ironisch: Vision und Wirklichkeit passen nicht zusammen · c) eine neutrale Ortsangabe',
        '(3) Zur Klimabilanz sagt der Text: … — a) Scooter ersetzen meist Auto-Fahrten. · b) Es gibt dazu keine Untersuchungen. · c) Scooter ersetzen meist Wege zu Fuß oder mit dem Rad.',
        '(4) Die Anführungszeichen bei „an Lösungen arbeiten“ zeigen, dass der Verfasser … — a) die Anbieter wörtlich zitiert und ihnen zustimmt · b) diese Aussage bezweifelt · c) selbst an einer Lösung arbeitet',
        '(5) Am Ende fordert der Verfasser … — a) ein Verbot der Leih-Scooter · b) mehr Anbieter und mehr Fahrzeuge · c) verbindliche Bedingungen für die Anbieter',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '(1) **b** — Kritik an der Praxis (Absatz 2–3) + „Die Idee ist ja nicht falsch“ + Forderung nach Regeln (Schluss). a scheitert an „Ein Verbot … halte ich für den falschen Weg“.',
        '(2) **b** — übertrieben höfliches *schade nur* + Wortspiel („liegt … wörtlich“): klassische leise Ironie.',
        '(3) **c** — „ersetzen gar nicht das Auto, sondern den Fußweg oder das Fahrrad“. a ist die Sinnumkehr; b widerspricht „Studien zeigen“.',
        '(4) **b** — Zitat aus „jeder Pressemitteilung“ + „Passiert ist wenig“: Die Anführungszeichen distanzieren den Verfasser von der Behauptung.',
        '(5) **c** — „den Anbietern solche Bedingungen stellt“ = verbindliche Regeln (Abstellzonen, Strafen). Ein Verbot lehnt er ausdrücklich ab.',
      ],
      kommentar: 'Beachte Frage 1: Die Gesamthaltung stand in **keinem einzelnen Satz** — sie ergibt sich aus Wertungen, dem *allerdings*-Absatz und dem Schluss. Genau das unterscheidet Teil 4 von Teil 1–2.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Plane für Teil 4 **ca. 15 Minuten**. Wenn eine Frage nach der „Meinung des Verfassers“ fragt, prüfe die Optionen gegen den **Schlussabsatz** — dort steht fast immer das Fazit. Und Vorsicht: Ein Kommentar referiert oft zuerst die Gegenposition. ~~No confundas lo que el autor *cita* con lo que el autor *opina*.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Signal', 'Lesestrategie'],
      zeilen: [
        ['Wertungswörter', 'mit + / − markieren, Gesamtton bestimmen'],
        ['zwar … aber / allerdings', 'die echte Position steht im zweiten Teil'],
        ['Anführungszeichen', 'oft Distanz: Der Verfasser glaubt es nicht'],
        ['Übertriebenes Lob', 'Ironie-Verdacht — auf den Nachsatz achten'],
        ['Schlussabsatz', 'Fazit und Forderung = Kernposition'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich unterscheide einen Kommentar von einem neutralen Bericht.',
        'Ich erkenne Wertungswörter und bestimme, ob sie positiv oder negativ sind.',
        'Ich finde die echte Position hinter *zwar … aber* und in Anführungszeichen.',
        'Ich suche das Fazit des Verfassers zuerst im Schlussabsatz.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Nach der Meinungssprache kommt das genaue Gegenteil: **Teil 5** arbeitet mit **formellen Regeltexten** — Hausordnung, AGB, Vertrag. Keine Ironie, keine Wertung, dafür Amtsdeutsch und klare Struktur. In der nächsten Lektion knackst du diese Textsorte und schließt das Modul Lesen ab.',
    },
  ],
}
