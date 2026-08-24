// Lektion 31 · Sprechen Teil 1 — Vortrag + Nachfragen
//
// Bloque 2 — segunda lección del módulo Sprechen. Canon (Lektion 30):
// Vortrag ~4 Min. über ein Alltagsthema + Nachfragen. Estructura
// Einleitung → 2-3 Punkte + Beispiel → Fazit; Signalwörter orales;
// Stichwortzettel sin leer; técnica de Nachfragen bestätigen → antworten
// → zurückgeben. Vortrag modelo comentado + práctica de 2 guiones.

export default {
  spec: ['Bloque 2', 'Modul Sprechen · Teil 1', 'Niveau B2', 'Prüfungsrelevanz: Sprechen'],
  h1: 'Sprechen Teil 1 — Vortrag + Nachfragen',
  lead: 'Ca. 4 Minuten frei über ein Alltagsthema sprechen: mit klarem Gerüst, hörbaren Signalwörtern, dem Stichwortzettel als Stütze — und einer Drei-Schritt-Technik für die Nachfragen danach.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'einen Vortrag von ca. 4 Minuten strukturieren: Einleitung, 2-3 Punkte mit eigenem Beispiel, Fazit',
        'mündliche Signalwörter einsetzen, damit die Prüfenden den roten Faden hören',
        'frei mit dem Stichwortzettel sprechen, statt abzulesen',
        'Nachfragen mit der Technik **bestätigen → antworten → zurückgeben** beantworten',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Sprache des Vortrags',
      items: [
        { wort: 'die Einleitung, -en', kollokation: 'mit einer kurzen Einleitung beginnen', es: 'introducción' },
        { wort: 'der Aspekt, -e', kollokation: 'einen wichtigen Aspekt nennen', es: 'aspecto' },
        { wort: 'der Vorteil, -e / der Nachteil, -e', kollokation: 'Vor- und Nachteile nennen', es: 'ventaja / desventaja' },
        { wort: 'die Erfahrung, -en', kollokation: 'aus eigener Erfahrung berichten', es: 'experiencia' },
        { wort: 'das Beispiel, -e', kollokation: 'ein Beispiel aus dem Alltag geben', es: 'ejemplo' },
        { wort: 'das Fazit, -s', kollokation: 'ein kurzes Fazit ziehen', es: 'conclusión' },
        { wort: 'der rote Faden', kollokation: 'den roten Faden nicht verlieren', es: 'hilo conductor' },
        { wort: 'übergehen zu + Dat.', kollokation: 'zum nächsten Punkt übergehen', es: 'pasar a' },
        { wort: 'zusammenfassen', kollokation: 'die wichtigsten Punkte zusammenfassen', es: 'resumir' },
        { wort: 'eingehen auf + Akk.', kollokation: 'auf eine Nachfrage eingehen', es: 'responder a, abordar' },
        { wort: 'der Blickkontakt', kollokation: 'Blickkontakt zum Publikum halten', es: 'contacto visual' },
      ],
      hinweis: 'Achtung, falscher Freund: eine **Frage stellen** heißt *hacer una pregunta* — ~~nunca „eine Frage machen“, calco directo del español~~.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Aufgabe',
      absaetze: [
        'In Teil 1 bekommst du ein **Alltagsthema** — Einkaufen, Wohnen, Arbeit, Medien — und hältst dazu einen Vortrag von **ca. 4 Minuten**. Das Aufgabenblatt nennt das Thema und in der Regel einige Punkte, die du behandeln sollst (das genaue Layout siehst du im offiziellen Modellsatz). Danach stellen dir dein Partner und die Prüfenden **Nachfragen**. Die gute Nachricht: Der Vortrag ist der planbarste Teil der ganzen Prüfung — mit einem festen Gerüst kannst du ihn zu Hause komplett trainieren.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — das Gerüst mit Zeitbudget',
      steps: [
        {
          badge: '30 Sek.',
          titel: 'Einleitung',
          text: 'Thema nennen, kurz sagen, warum es relevant ist, und den Plan ankündigen: __„Zuerst spreche ich über …, danach über …, und am Ende sage ich meine Meinung.“__ Die Prüfenden hören sofort: Hier gibt es einen roten Faden.',
        },
        {
          badge: '90 Sek.',
          titel: 'Punkt 1 + eigenes Beispiel',
          text: 'Erste Perspektive (z. B. die Vorteile) mit 2-3 Argumenten — und **immer** einem Beispiel aus deinem Leben. ==Eigene Beispiele sind dein bester Zeitfüller mit Qualität==: Sie verlängern den Vortrag und heben Erfüllung und Wortschatz.',
        },
        {
          badge: '90 Sek.',
          titel: 'Punkt 2 (und 3) + Beispiel',
          text: 'Die Gegenseite oder ein weiterer Aspekt, wieder mit Beispiel. Der Kontrast (__einerseits … andererseits__) gibt dem Vortrag Spannung und zeigt B2-Strukturen.',
        },
        {
          badge: '45 Sek.',
          titel: 'Meinung & Fazit',
          text: 'Position beziehen und begründen, in einem Satz zusammenfassen — und mit __„Gibt es noch Fragen?“__ elegant zu den Nachfragen überleiten. ~~Fórmula neutra: vale para el compañero (du) y los examinadores (Sie) a la vez.~~',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — frei sprechen mit dem Zettel',
      card: true,
      titel: 'Ansehen → aufsehen → sprechen',
      absaetze: [
        'Der Zettel ist eine **Landkarte, kein Manuskript**. Die Technik: Stichwort kurz ansehen, dann **aufsehen** und 2-3 freie Sätze dazu sprechen, erst danach der nächste Blick. Halte den Zettel tief in einer Hand, damit er das Gesicht nicht verdeckt, und such beim Sprechen den **Blickkontakt** zu Prüfenden und Partner. Für die Nachfragen danach gilt die Drei-Schritt-Technik: **(1) bestätigen** („Gute Frage!“) — das gewinnt Zeit, **(2) kurz antworten** — 1-2 Sätze, kein zweiter Vortrag, **(3) zurückgeben** — bei Fragen des Partners mit einer Gegenfrage („Wie ist das bei dir?“), das zählt als Interaktion.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele: Redemittel + Modell ────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — mündliche Signalwörter',
      gruppen: [
        {
          fn: 'Einleitung',
          saetze: [
            { satz: 'Ich möchte heute über … sprechen.' },
            { satz: 'Viele von uns kennen die Situation: …' },
            { satz: 'Zuerst spreche ich über …, danach über …, und am Ende ziehe ich ein Fazit.' },
          ],
        },
        {
          fn: 'Punkte verbinden',
          saetze: [
            { satz: 'Zuerst einmal …' },
            { satz: 'Außerdem darf man nicht vergessen, dass …' },
            { satz: 'Ein Beispiel dafür ist …', gloss: 'introduce tu experiencia propia' },
            { satz: 'Ich komme jetzt zum nächsten Punkt: …' },
          ],
        },
        {
          fn: 'Meinung & Fazit',
          saetze: [
            { satz: 'Meiner Meinung nach hängt es davon ab, ob …' },
            { satz: 'Zusammenfassend kann man sagen, dass …' },
            { satz: 'Abschließend möchte ich betonen, dass …' },
          ],
        },
        {
          fn: 'Auf Nachfragen reagieren',
          saetze: [
            { satz: 'Danke für die Frage — das sehe ich so: …' },
            { satz: 'Wenn ich dich richtig verstehe, fragst du, ob …' },
            { satz: 'Das ist ein guter Punkt. Wie ist das eigentlich bei dir?' },
          ],
        },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Vortragsmodell — kommentiert',
      thema: 'Thema: Einkaufen im Internet oder im Geschäft?',
      woerter: 'ca. 4 Minuten Sprechzeit',
      absaetze: [
        '==Ich möchte heute über die Frage sprechen, ob== man besser im Internet oder im Geschäft einkauft. Das Thema betrifft fast alle von uns, denn wir kaufen jede Woche ein. ==Zuerst spreche ich über== die Vorteile des Online-Shoppings, ==danach über== die Vorteile des Geschäfts, ==und am Ende sage ich meine Meinung.==',
        '==Zuerst einmal== ist das Einkaufen im Internet sehr bequem. Man kann rund um die Uhr bestellen, in Ruhe die Preise vergleichen und findet auch Produkte, die es in kleineren Städten gar nicht gibt. ==Ein Beispiel aus meinem Alltag:== Ich habe letzten Monat ein spezielles Wörterbuch gesucht. Keine Buchhandlung in meiner Stadt hatte es — online war es in zwei Tagen da.',
        '==Ich komme jetzt zum nächsten Punkt:== dem Einkaufen im Geschäft. Dort kann man die Produkte sehen, anfassen und anprobieren, und man wird persönlich beraten. ==Außerdem darf man nicht vergessen, dass== man damit die Läden in der eigenen Stadt unterstützt. Meine Schwester zum Beispiel kauft Schuhe nie online, weil sie schon zweimal die falsche Größe bekommen hat.',
        '==Meiner Meinung nach hängt es vom Produkt ab:== Bücher und Technik bestelle ich online, aber Kleidung kaufe ich lieber im Geschäft. ==Zusammenfassend kann man sagen, dass== beide Formen Vorteile haben und sich gut ergänzen. Vielen Dank — gibt es noch Fragen?',
      ],
      annotationen: [
        { tag: 'Einleitung', text: 'Thema + Relevanz + Plan in drei Sätzen (~30 Sekunden). Die Prüfenden hören von Anfang an die Struktur — das zahlt direkt auf Kohärenz ein.' },
        { tag: 'Punkt 1', text: '„Zuerst einmal“ öffnet den Punkt hörbar; das ==eigene Beispiel== (Wörterbuch) macht aus einer These gelebte Erfahrung und füllt Zeit mit Qualität.' },
        { tag: 'Übergang', text: '„Ich komme jetzt zum nächsten Punkt“ ersetzt die stumme Pause. Der Kontrast online ↔ Geschäft trägt den ganzen Mittelteil.' },
        { tag: 'Strukturen', text: 'Unauffällig eingebaut: Relativsatz („Produkte, die …“), weil-Satz mit Verb am Ende, differenzierende Meinung mit „hängt davon ab“.' },
        { tag: 'Fazit', text: 'Meinung mit Begründung, ein Satz Zusammenfassung — und „Gibt es noch Fragen?“ als aktive Einladung zu den Nachfragen.' },
      ],
    },
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — die Nachfrage-Technik in Aktion',
      kicker: 'Nachfrage',
      titel: 'Bestätigen → antworten → zurückgeben',
      items: [
        { text: 'Partner: „Du hast gesagt, online ist billiger. Stimmt das wirklich immer?“' },
        { text: 'Du: **„Gute Frage!“** — Schritt 1: bestätigen und Zeit gewinnen.' },
        { text: '**„Nicht immer — mit Versandkosten ist es manchmal sogar teurer.“** — Schritt 2: kurz antworten, kein zweiter Vortrag.' },
        { text: '**„Vergleichst du eigentlich die Preise, bevor du etwas kaufst?“** — Schritt 3: zurückgeben; die Gegenfrage zählt als Interaktion.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welche Funktion hat das Signalwort — Einleitung, Übergang, Beispiel oder Fazit?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Zusammenfassend kann man sagen, dass …“',
        '„Ein Beispiel dafür ist …“',
        '„Ich möchte heute über … sprechen.“',
        '„Ich komme jetzt zum nächsten Punkt.“',
      ],
      loesungen: [
        '**Fazit** — leitet die Zusammenfassung am Ende ein.',
        '**Beispiel** — kündigt die eigene Erfahrung an.',
        '**Einleitung** — nennt das Thema im ersten Satz.',
        '**Übergang** — verbindet zwei Punkte hörbar.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Antworte laut mit der Drei-Schritt-Technik (bestätigen → kurz antworten → zurückgeben). Dein Vortragsthema war „Sport im Alltag“.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Nachfrage: „Du hast gesagt, Sport kostet Zeit. Wie viel Zeit brauchst du pro Woche?“',
        'Nachfrage: „Ist ein Fitnessstudio nicht ziemlich teuer?“',
      ],
      loesungen: [
        '„Gute Frage! Bei mir sind es ungefähr drei Stunden pro Woche — zweimal joggen und einmal schwimmen. Machst du selbst auch regelmäßig Sport?“',
        '„Das stimmt, billig ist es nicht. Deshalb laufe ich lieber draußen — das kostet nichts. Warst du schon mal in einem Fitnessstudio?“ — Jede Antwort mit den drei Schritten und 1-2 Sätzen Inhalt ist richtig.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Bereite **zwei** Stichwortgerüste vor (je max. 25 Wörter, 7-8 Minuten pro Thema — mit Timer!): **a)** „Leben in der Stadt oder auf dem Land?“ · **b)** „Braucht man heute noch Bargeld?“ Halte danach einen der beiden Vorträge laut und stoppe die Zeit.',
      loesung: '**Mögliche Lösung zu a):** „Einl.: Wo lebt man besser? / P1: Stadt → Arbeit, Kultur, ÖPNV (Bsp. mein Umzug) / P2: Land → Ruhe, Natur, Miete billiger (Bsp. Großeltern) / Meinung: jung Stadt, Familie Land / Fazit + Fragen?“ — Andere Punkte und Beispiele sind genauso gültig; entscheidend sind Stichwörter statt Sätze, je ein eigenes Beispiel pro Punkt und ein klares Fazit. Wer beim lauten Vortrag unter 3 Minuten bleibt, verlängert die **Beispiele**, nicht die Theorie.',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Sprechen · Teil 1',
      titel: 'Vortrag, ca. 4 Minuten',
      anweisung: 'So sieht die Aufgabe im Prüfungsformat aus. Nimm dir 15 Minuten Vorbereitungszeit (Timer!), halte den Vortrag laut — am besten mit Handy-Aufnahme — und stoppe die Sprechzeit.',
      absaetze: [
        '**Thema: Fast Food — praktisch oder problematisch?**',
        'Halten Sie einen kurzen Vortrag: · Beschreiben Sie verschiedene Aspekte des Themas. · Berichten Sie von eigenen Erfahrungen oder geben Sie Beispiele. · Bewerten Sie: Was ist Ihre Meinung?',
      ],
      loesungLabel: 'Lösungsskizze',
      loesungen: [
        '**Gerüst:** Einleitung (Fast Food überall — Fluch oder Segen?) → P1: praktisch, schnell, günstig (Bsp. Mittagspause) → P2: ungesund, viel Verpackung (Bsp. eigener Vorsatz) → Meinung: ab und zu ja, täglich nein → Fazit + „Gibt es noch Fragen?“.',
        '**Check nach der Aufnahme:** Habe ich 3:30-4:30 Min. gesprochen? Sind die Signalwörter hörbar? Habe ich frei gesprochen statt abgelesen? Fällt die Stimme am Satzende?',
      ],
      kommentar: 'Die drei Spiegelpunkte (beschreiben · Beispiele · bewerten) entsprechen genau dem Gerüst dieser Lektion — dein Vortrag erfüllt die Aufgabe automatisch, wenn du das Gerüst abarbeitest.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Vier Minuten sind länger, als du denkst. Wer beim Üben schon nach zwei Minuten fertig ist, hat zu wenige **Beispiele** — sie sind der Verlängerungshebel, nicht mehr Theorie. Und nimm dich beim Üben mit dem Handy auf: ==Beim Anhören findest du Wortakzent- und Melodie-Fehler selbst==, die dir beim Sprechen nie auffallen.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Baustein', 'Das Wichtigste'],
      zeilen: [
        ['Gerüst', 'Einleitung (~30 Sek.) → 2-3 Punkte mit Beispiel (~3 Min.) → Meinung & Fazit (~45 Sek.)'],
        ['Signalwörter', 'Zuerst einmal · Außerdem · Ein Beispiel dafür ist · Ich komme zum nächsten Punkt · Zusammenfassend'],
        ['Zettel', 'Stichwörter statt Sätze — ansehen, aufsehen, frei sprechen'],
        ['Beispiele', 'pro Punkt ein eigenes Erlebnis: verlängert und hebt gleichzeitig die Note'],
        ['Nachfragen', 'bestätigen → kurz antworten → zurückgeben (Gegenfrage = Interaktion)'],
        ['Training', 'mit Timer vorbereiten (15 Min.), laut sprechen, aufnehmen, Zeit stoppen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich strukturiere einen Vortrag in Einleitung, 2-3 Punkte mit Beispiel und Fazit.',
        'Ich setze mündliche Signalwörter, damit man meinen roten Faden hört.',
        'Ich spreche frei mit dem Stichwortzettel, statt abzulesen.',
        'Ich beantworte Nachfragen in drei Schritten: bestätigen, antworten, zurückgeben.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Nach dem Vortrag kommt das Gespräch: In der nächsten Lektion trainierst du **Teil 2, die Diskussion mit dem Partner** — höflich widersprechen, auf Argumente reagieren und gemeinsam einen Kompromiss finden. Damit schließt du den kompletten Strategie-Block ab.',
    },
  ],
}
