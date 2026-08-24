// Lektion 27 · Sprechen Teil 1 — Der Vortrag
//
// Bloque 2 «Prüfungsstrategie». Baut auf Lektion 26 (Überblick Sprechen)
// auf: Struktur des Kurzvortrags, mündliche Signalwörter, Nachfragen,
// kommentiertes Vortragsmodell. Estándar de 8 secciones.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau C1', 'Prüfungsrelevanz: Sprechen Teil 1 (Vortrag ~4 Min + Nachfragen)'],
  h1: 'Sprechen Teil 1 — Der Vortrag',
  lead: 'Vier Minuten frei sprechen, ohne den Faden zu verlieren: Ein hörbares Gerüst aus Signalwörtern trägt dich von der Einleitung bis zum Fazit.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du einen Kurzvortrag nach dem Muster Einleitung — Hauptpunkte — Fazit aufbauen und frei nach Stichwörtern halten.',
        'Du machst deine Gliederung mit mündlichen Signalwörtern hörbar (*zunächst, anschließend, abschließend*).',
        'Du reagierst souverän auf Nachfragen — auch auf solche, die du nicht erwartet hast.',
        'Du hast zwei eigene Themen vollständig vorbereitet und kannst das Verfahren auf jedes neue Thema übertragen.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Vortragssprache',
      items: [
        { wort: 'der Einstieg', kollokation: 'einen gelungenen Einstieg finden', es: 'arranque, entrada en materia' },
        { wort: 'der Aspekt', kollokation: 'einen Aspekt beleuchten', es: 'aspecto' },
        { wort: 'die Entwicklung', kollokation: 'eine Entwicklung nachzeichnen', es: 'evolución, desarrollo' },
        { wort: 'veranschaulichen', kollokation: 'etwas an einem Beispiel veranschaulichen', es: 'ilustrar, hacer visible' },
        { wort: 'anführen', kollokation: 'ein Beispiel/Argument anführen', es: 'aducir, citar' },
        { wort: 'hervorheben', kollokation: 'einen Punkt besonders hervorheben', es: 'destacar' },
        { wort: 'eingehen auf', kollokation: 'auf eine Frage näher eingehen', es: 'tratar, abordar (un punto)' },
        { wort: 'das Fazit', kollokation: 'ein Fazit ziehen', es: 'conclusión' },
        { wort: 'abschließend', kollokation: 'abschließend lässt sich festhalten…', es: 'para terminar' },
        { wort: 'festhalten', kollokation: 'es bleibt festzuhalten, dass…', es: 'constatar, dejar sentado' },
        { wort: 'der Wandel', kollokation: 'ein tiefgreifender Wandel', es: 'cambio, transformación' },
        { wort: 'die Tendenz', kollokation: 'eine deutliche Tendenz zu…', es: 'tendencia' },
        { wort: 'beobachten', kollokation: 'es lässt sich beobachten, dass…', es: 'observarse (impersonal)' },
        { wort: 'einschätzen', kollokation: 'eine Entwicklung kritisch einschätzen', es: 'valorar, evaluar' },
      ],
      hinweis: '**Anführen** und **eingehen auf** sind die Arbeitspferde des Vortrags — merke sie dir mit Rektion: *ein Beispiel anführen* (Akk.), *auf einen Punkt eingehen* (auf + Akk.). ~~Y ojo: «exponer un tema» es *ein Thema vorstellen/darstellen*, no *exponieren*.~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Die Aufgabe',
      absaetze: [
        'Du erhältst ein Themenblatt mit einer Fragestellung und Leitpunkten — typischerweise: das Thema vorstellen, **mehrere Seiten oder Alternativen beleuchten** (Vor- und Nachteile, verschiedene Möglichkeiten) und **abschließend bewerten**. Nach einer Minute Vorbereitung sprichst du **rund 4 Minuten**; danach stellen die Prüfenden und dein Partner **Nachfragen**.',
        'Der Vortrag ist ein Monolog, aber kein Aufsatz. Gesprochenes C1 heißt: **kürzere Hauptsätze, hörbare Wegweiser, gezielte Beispiele** — nicht die Nominalketten des Schrifttexts. Ein Satz wie *Die Zunahme der Inanspruchnahme digitaler Dienstleistungen…* ist geschrieben stark und gesprochen tödlich. Sag: *Immer mehr Menschen nutzen digitale Angebote — und das verändert…*',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die Architektur des Kurzvortrags',
      steps: [
        {
          badge: '~30 s',
          titel: 'Einleitung',
          text: 'Thema nennen, Relevanz zeigen, Gliederung **ankündigen**: *Ich möchte über … sprechen. Zunächst gehe ich auf … ein, danach auf …, und zum Schluss ziehe ich ein Fazit.* Die angekündigte Gliederung ist dein Vertrag mit den Zuhörern — und dein eigenes Geländer.',
        },
        {
          badge: '~1,5 Min',
          titel: 'Hauptpunkt 1 — die eine Seite',
          text: 'Erster Aspekt oder die Vorteile: Behauptung, Begründung, **ein konkretes Beispiel**. Beispiele aus dem eigenen Land sind Gold wert — sie sind einzigartig und niemand kann sie dir streitig machen.',
        },
        {
          badge: '~1,5 Min',
          titel: 'Hauptpunkt 2 — die andere Seite',
          text: 'Gegenseite oder zweiter Aspekt, mit hörbarem Übergang: *Auf der anderen Seite… / Nun zum zweiten Punkt:* Ohne dieses Signal klingen zwei Punkte wie ein einziger Brei.',
        },
        {
          badge: '~30 s',
          titel: 'Fazit',
          text: 'Bewertung + persönliche Einschätzung: *Abschließend lässt sich festhalten, dass… Ich persönlich denke…* Der letzte Satz steht wörtlich fest (Lektion 26) — so endest du stark statt zu verstummen.',
        },
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Nachfragen: der unterschätzte Teil',
      absaetze: [
        'Nach dem Vortrag kommen zwei bis drei **Nachfragen** — von den Prüfenden oder vom Partner. Hier zeigst du, dass du **spontan** auf C1-Niveau sprichst, nicht nur vorbereitet. Die Grundtechnik: **bestätigen — antworten — anbinden**. Erst die Frage kurz aufnehmen (*Eine berechtigte Frage…*), dann in zwei, drei Sätzen antworten, dann an den Vortrag zurückbinden (*…und das passt zu dem, was ich über die Kosten gesagt habe*).',
        'Wenn du die Antwort nicht weißt: **nicht raten, sondern einordnen**. *Dazu habe ich keine genauen Zahlen — aber meine Einschätzung ist…* wirkt souveräner als jede improvisierte Statistik. Und wenn du die Frage nicht verstehst, frag nach (Lektion 26): Eine präzise Rückfrage kostet nichts, eine Antwort an der Frage vorbei kostet Erfüllungspunkte.',
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Signalwörter des mündlichen Vortrags',
      gruppen: [
        {
          fn: 'Einstieg',
          saetze: [
            { satz: 'Ich möchte heute über … sprechen — ein Thema, das mich auch persönlich betrifft.' },
            { satz: 'Mein Thema ist die Frage, ob/wie…' },
          ],
        },
        {
          fn: 'Gliederung ankündigen',
          saetze: [
            { satz: 'Zunächst gehe ich auf … ein, anschließend auf …, und zum Schluss ziehe ich ein kurzes Fazit.' },
            { satz: 'Ich möchte das Thema von zwei Seiten beleuchten.' },
          ],
        },
        {
          fn: 'Punkte verbinden',
          saetze: [
            { satz: 'So viel zum ersten Punkt — nun zum zweiten.' },
            { satz: 'Auf der anderen Seite darf man nicht vergessen, dass…' },
            { satz: 'Ein weiterer Aspekt, den ich hervorheben möchte, ist…' },
          ],
        },
        {
          fn: 'Beispiel geben',
          saetze: [
            { satz: 'Lassen Sie mich das an einem Beispiel veranschaulichen: …' },
            { satz: 'In meinem Heimatland lässt sich das gut beobachten: …' },
          ],
        },
        {
          fn: 'Fazit ziehen',
          saetze: [
            { satz: 'Abschließend lässt sich festhalten, dass…' },
            { satz: 'Alles in allem überwiegen für mich…' },
            { satz: 'Ich persönlich bin überzeugt, dass…' },
          ],
        },
        {
          fn: 'Auf Nachfragen reagieren',
          saetze: [
            { satz: 'Das ist eine berechtigte Frage. Ich denke, dass…' },
            { satz: 'Darauf bin ich vorhin nur kurz eingegangen — gern führe ich das aus: …' },
            { satz: 'Dazu habe ich keine genauen Zahlen, aber meine Einschätzung ist…' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele + Modell ─────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — geschrieben vs. gesprochen',
      kicker: 'Mündlichkeit',
      titel: 'Derselbe Gedanke, sprechbar gemacht',
      items: [
        { text: '**Geschrieben:** *Aufgrund der zunehmenden Digitalisierung der Arbeitswelt…* → **Gesprochen:** *Die Arbeitswelt wird immer digitaler — **und das hat Folgen**: …*', gl: '— Hauptsatz + Doppelpunkt-Effekt statt Nominalphrase' },
        { text: '**Geschrieben:** *Hinsichtlich der Finanzierung bestehen erhebliche Zweifel.* → **Gesprochen:** ***Bleibt die Frage:** Wer soll das bezahlen?*', gl: '— rhetorische Frage: das stärkste mündliche Strukturmittel' },
        { text: '**Geschrieben:** *Zusammenfassend ist eine differenzierte Betrachtung erforderlich.* → **Gesprochen:** *Mein Fazit: **So einfach ist es nicht** — beide Seiten haben gute Argumente, aber…*' },
      ],
    },

    {
      type: 'modell',
      eyebrow: 'Vortragsmodell — kommentiert',
      thema: 'Thema: Sollte man für ein Studium ins Ausland gehen?',
      woerter: 'ca. 4 Minuten Sprechzeit · inkl. einer Nachfrage',
      absaetze: [
        '==Ich möchte heute über die Frage sprechen, ob== man für das Studium ins Ausland gehen sollte — ein Thema, das mich persönlich betrifft, denn ich stand vor genau dieser Entscheidung. ==Zunächst gehe ich auf die Vorteile ein, anschließend auf die Schwierigkeiten, und zum Schluss ziehe ich ein kurzes Fazit.==',
        '==Beginnen wir mit den Vorteilen.== Ein Auslandsstudium erweitert den Horizont wie kaum etwas anderes: Man lernt nicht nur eine Sprache auf hohem Niveau, sondern auch, sich in einer fremden Kultur zurechtzufinden. ==Lassen Sie mich das an einem Beispiel veranschaulichen:== Eine Freundin von mir hat zwei Semester in Leipzig studiert — sie sagt heute, dass sie dort mehr über sich selbst gelernt hat als in vier Jahren an der Heimatuniversität. Hinzu kommt der berufliche Nutzen, denn viele Arbeitgeber werten Auslandserfahrung als Zeichen von Selbstständigkeit.',
        '==Auf der anderen Seite darf man die Schwierigkeiten nicht vergessen.== Ein Auslandsstudium kostet Geld — Miete, Versicherung, oft Studiengebühren —, und nicht jede Familie kann das tragen. Dazu kommt die emotionale Seite: Heimweh, Bürokratie, am Anfang auch Einsamkeit. Wer glaubt, das Auslandsjahr sei ein langer Urlaub, wird schnell korrigiert.',
        '==Abschließend lässt sich festhalten, dass== die Vorteile für mich klar überwiegen — allerdings nur, wenn die Finanzierung gesichert ist. ==Ich persönlich bin überzeugt, dass== man eine solche Chance nutzen sollte: Was man dort an Selbstständigkeit gewinnt, trägt einen ein Leben lang.',
        '**Nachfrage der Prüferin:** *Sie sprachen von den Kosten — sollten Staaten Auslandssemester stärker fördern?* — ==Das ist eine berechtigte Frage.== Ich denke, ja: Programme wie Erasmus zeigen, dass Förderung den Zugang gerechter macht. ==Das passt zu dem, was ich vorhin sagte:== Die Chance darf nicht vom Einkommen der Eltern abhängen.',
      ],
      annotationen: [
        { tag: 'Einstieg', text: 'Thema + persönlicher Bezug + angekündigte Gliederung: der Vertrag mit den Zuhörern steht nach 30 Sekunden.' },
        { tag: 'Hauptpunkt 1', text: 'Behauptung → Begründung → konkretes Beispiel (die Freundin in Leipzig). Persönliche Beispiele sind unangreifbar.' },
        { tag: 'Übergang', text: '*Auf der anderen Seite…* macht den Wechsel hörbar — die Zuhörer wissen immer, wo im Vortrag sie sind.' },
        { tag: 'Fazit', text: 'Bewertung mit Bedingung (*allerdings nur, wenn…*) — differenzierter als ein bloßes Ja.' },
        { tag: 'Nachfrage', text: 'Technik bestätigen — antworten — anbinden: Die Antwort endet mit einem Rückverweis auf den Vortrag.' },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Sprich **langsamer, als sich richtig anfühlt**. Unter Prüfungsstress beschleunigt fast jeder — und Tempo frisst Aussprache, Endungen und Satzmelodie. Ein ruhiger Vortrag mit hörbaren Absätzen wirkt automatisch strukturierter. Und: Die 4 Minuten musst du nicht auf die Sekunde treffen; die Prüfenden signalisieren, wenn es reicht.',
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Ein Vortrag ist in Bausteine zerfallen. Bringe die Signalsätze in die richtige Reihenfolge und benenne die Funktion jedes Satzes.',
      aufgaben: [
        '„Abschließend lässt sich festhalten, dass beide Wohnformen ihre Berechtigung haben.“',
        '„Lassen Sie mich das an einem Beispiel veranschaulichen: Meine Nachbarn haben drei Generationen unter einem Dach.“',
        '„Ich möchte heute darüber sprechen, ob mehrere Generationen unter einem Dach leben sollten.“',
        '„Auf der anderen Seite kann das enge Zusammenleben auch Konflikte verschärfen.“',
        '„Zunächst gehe ich auf die Vorteile ein, danach auf die Probleme.“',
      ],
      loesungen: [
        'Reihenfolge: **3 → 5 → 2 → 4 → 1.**',
        'Satz 3 = **Einstieg** (Thema nennen), Satz 5 = **Gliederungsankündigung**, Satz 2 = **Beispiel** im Hauptpunkt 1, Satz 4 = **Übergang** zum Hauptpunkt 2, Satz 1 = **Fazit**.',
        'Merke: Ohne die Sätze 5 und 4 wäre der Inhalt identisch — aber die Zuhörer hätten keine Landkarte. Genau diese Wegweiser bewertet die Kohärenz.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Aus Stichwörtern werden Vortragssätze: Formuliere jeden Stichpunkt als vollständigen gesprochenen Satz mit einem passenden Signalwort oder Redemittel.',
      aufgaben: [
        'Thema nennen: Homeoffice — Zukunft der Arbeit?',
        'Pro: flexible Zeiteinteilung + kein Arbeitsweg',
        'Beispiel: eigener Bruder, IT-Firma, 3 Tage zu Hause',
        'Contra: Teamgefühl leidet, Grenze Arbeit/Privat verschwimmt',
        'Fazit: hybride Modelle am sinnvollsten',
      ],
      loesungen: [
        '*Ich möchte heute über das Homeoffice sprechen — und über die Frage, ob es die Zukunft der Arbeit ist.*',
        '*Ein klarer Vorteil ist die flexible Zeiteinteilung, zumal auch der tägliche Arbeitsweg entfällt.*',
        '*Lassen Sie mich das an einem Beispiel veranschaulichen: Mein Bruder arbeitet in einer IT-Firma und ist drei Tage pro Woche zu Hause — er möchte nicht mehr tauschen.*',
        '*Auf der anderen Seite darf man nicht vergessen, dass das Teamgefühl leidet und die Grenze zwischen Arbeit und Privatleben verschwimmt.*',
        '*Abschließend lässt sich festhalten, dass hybride Modelle am sinnvollsten sind — sie verbinden die Freiheit des Homeoffice mit dem Zusammenhalt im Büro.*',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Bereite zwei komplette Vortragsgerüste vor — Thema A: „Sollte gesunde Ernährung in der Schule unterrichtet werden?“, Thema B: „Brauchen wir noch Bargeld?“ Für jedes: Stichwortzettel (Position, 2 Punkte, Beispiel) + wörtlicher Einstiegs- und Schlusssatz. Halte danach beide Vorträge laut, mit Timer auf 4 Minuten.',
      aufgabe: 'Ziel ist nicht der perfekte Text, sondern das wiederholbare Verfahren: Gerüst bauen → Klammer festlegen → frei sprechen.',
      loesung: '**Mögliche Lösung für Thema A** (Thema B analog):\n*Zettel: Position: ja, als Praxisfach · 1 Gesundheit: Übergewicht ↑, früh Gewohnheiten · 2 Aber: Lehrpläne voll, Aufgabe der Eltern? · Bsp: Kochprojekt an meiner Schule*\n**Einstieg:** *Ich möchte heute darüber sprechen, ob gesunde Ernährung ein Schulfach sein sollte — meiner Meinung nach eine der unterschätztesten Bildungsfragen.*\n**Schluss:** *Abschließend lässt sich festhalten: Ein eigenes Fach braucht es vielleicht nicht — aber feste Praxisprojekte, denn was man als Kind kochen lernt, isst man als Erwachsener.*\n~~Guarda estos guiones: los temas del examen se repiten en familias (educación, salud, digitalización, medio ambiente) y un guion se recicla para toda la familia.~~',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1 · komplette Aufgabe',
      titel: 'Vortrag „Ehrenamtliches Engagement“ · 1 Min Vorbereitung + ~4 Min Vortrag',
      anweisung: 'Simuliere den Ernstfall komplett: eine Minute Vorbereitung mit Stichwortzettel, dann vier Minuten Vortrag (aufnehmen!), dann beantworte die beiden Nachfragen unten spontan.',
      absaetze: [
        '**Themenblatt:** „Immer weniger Menschen engagieren sich ehrenamtlich, etwa in Vereinen, bei der Feuerwehr oder in sozialen Projekten. Stellen Sie das Thema vor, erläutern Sie mögliche Ursachen und Folgen dieser Entwicklung und bewerten Sie sie abschließend.“\n**Nachfrage 1:** „Was könnte der Staat konkret tun, um Ehrenamt attraktiver zu machen?“\n**Nachfrage 2:** „Haben Sie selbst Erfahrungen mit ehrenamtlicher Arbeit?“',
      ],
      loesungen: [
        '**Mögliches Gerüst:** *Ursachen: Zeitdruck im Beruf, Individualisierung, Konkurrenz digitale Freizeit · Folgen: Vereine sterben, sozialer Kitt fehlt, Freiwillige Feuerwehr! · Bewertung: alarmierend, aber umkehrbar · Bsp: Sportverein im Heimatort*',
        '**Möglicher Einstieg:** *Ich möchte heute über eine stille Krise sprechen: Immer weniger Menschen engagieren sich ehrenamtlich. Zunächst gehe ich auf die Ursachen ein, dann auf die Folgen, und zum Schluss bewerte ich die Entwicklung.*',
        '**Mögliches Fazit:** *Abschließend lässt sich festhalten, dass diese Entwicklung unsere Gesellschaft teurer zu stehen kommt, als es scheint — denn was Freiwillige leisten, kann kein Staat vollständig ersetzen.*',
        '**Zu Nachfrage 1:** *Eine berechtigte Frage. Denkbar wären steuerliche Anreize oder eine Anerkennung bei der Rente — vor allem aber weniger Bürokratie, denn viele geben auf, weil die Formulare mehr Zeit kosten als das Engagement selbst.*',
        '**Zu Nachfrage 2:** *Ja — ich habe in meiner Heimatstadt Nachhilfe für Kinder aus einkommensschwachen Familien gegeben. Das knüpft an meine Bewertung an: Man bekommt dabei mehr zurück, als man investiert.*',
      ],
      loesungLabel: 'Mögliche Lösung (Gerüst + Klammer + Nachfragen)',
      kommentar: 'Vergleiche deine Aufnahme mit dem Gerüst: Hast du die Gliederung **angekündigt** und die Übergänge **markiert**? Kamen beide Nachfrage-Antworten mit der Technik bestätigen — antworten — anbinden? Das sind die drei Stellschrauben, an denen ein guter Vortrag zu einem sehr guten wird.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Die Vortragsthemen kreisen um wiederkehrende Felder: **Bildung, Arbeit, Digitalisierung, Umwelt, Gesundheit, Gesellschaft**. Bereite pro Feld ein Gerüst mit einem persönlichen Beispiel vor — in der Prüfung passt du nur noch an. Vier Minuten über ein „neues“ Thema sind viel; vier Minuten über ein Nachbarthema deines vorbereiteten Gerüsts sind ein Heimspiel.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Architektur', 'Einleitung (30 s) → Punkt 1 → Punkt 2 → Fazit (30 s)'],
        ['Gliederung ankündigen', 'zunächst … anschließend … abschließend — der Vertrag mit den Zuhörern'],
        ['Mündlich ≠ schriftlich', 'kurze Hauptsätze, rhetorische Fragen — keine Nominalketten'],
        ['Beispiele', 'ein persönliches Beispiel pro Hauptpunkt: konkret und unangreifbar'],
        ['Nachfragen', 'bestätigen → antworten → an den Vortrag anbinden'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann einen Vier-Minuten-Vortrag nach der Dreiteilung aufbauen und frei nach Stichwörtern halten.',
        'Ich kündige meine Gliederung an und markiere jeden Übergang mit einem Signalwort.',
        'Ich beantworte Nachfragen mit der Technik bestätigen — antworten — anbinden.',
        'Ich habe mindestens zwei Themengerüste mit persönlichen Beispielen einsatzbereit.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Im Vortrag gehörte die Bühne dir allein — in **Teil 2, der Diskussion**, musst du sie teilen. Die nächste Lektion zeigt die Kunst der echten Interaktion: höflich das Wort ergreifen, an die Argumente des Partners anknüpfen, mit Nuancen zustimmen und widersprechen — und damit schließen wir den Strategie-Block ab.',
    },
  ],
}
