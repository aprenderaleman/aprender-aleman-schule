// Lektion 26 · Hören Teil 4 — Vortrag
//
// Bloque 2 — cierra el módulo Hören (23-26). Respeta el canon de la
// Lektion 23: ca. 40 min, 4 Teile; detalles finos en genérico + Modellsatz.
// Práctica central: Vortrag-Transkript (~180 palabras) con selección.
// Cierre: tabla-síntesis de todo el módulo. Ausblick → 27 (Modul Schreiben).

export default {
  spec: ['Bloque 2', 'Modul Hören · Teil 4', 'Niveau B2', 'Prüfungsrelevanz: Hören'],
  h1: 'Hören Teil 4: Vortrag',
  lead: 'Eine Stimme, viele Minuten: der strukturierte Monolog. Wer die Signalwörter der Gliederung kennt, hat im Vortrag jederzeit einen Wegweiser — und findet nach jedem Aussetzer sofort zurück.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Struktur eines Vortrags an Signalwörtern erkennen (*zunächst, außerdem, abschließend*)',
        'der Argumentationslinie folgen, ohne jedes Wort zu verstehen',
        'das gesamte Modul Hören überblicken und gezielt weitertrainieren',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Signalwörter des Vortrags',
      items: [
        { wort: 'zunächst', kollokation: 'zunächst zum ersten Punkt', es: 'primero, para empezar' },
        { wort: 'außerdem', kollokation: 'außerdem spielt der Preis eine Rolle', es: 'además' },
        { wort: 'darüber hinaus', kollokation: 'darüber hinaus gibt es ein Problem', es: 'más allá de eso' },
        { wort: 'einerseits … andererseits', kollokation: 'einerseits praktisch, andererseits teuer', es: 'por un lado … por otro' },
        { wort: 'der Aspekt, -e', kollokation: 'ein weiterer Aspekt ist …', es: 'aspecto' },
        { wort: 'die Studie, -n', kollokation: 'eine aktuelle Studie zeigt, dass …', es: 'estudio (científico)' },
        { wort: 'eingehen auf', kollokation: 'auf drei Punkte eingehen', es: 'tratar, abordar' },
        { wort: 'zusammenfassend', kollokation: 'zusammenfassend lässt sich sagen …', es: 'en resumen' },
        { wort: 'abschließend', kollokation: 'abschließend noch ein Beispiel', es: 'para terminar' },
        { wort: 'das Fazit, -s', kollokation: 'ein Fazit ziehen', es: 'conclusión' },
        { wort: 'der rote Faden', kollokation: 'den roten Faden nicht verlieren', es: 'el hilo conductor' },
      ],
      hinweis: '~~„abschließend“ viene de „abschließen“ (concluir) — aquí no tiene nada que ver con cerrar con llave.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — was Teil 4 von dir will',
      absaetze: [
        'In Teil 4 hörst du einen **Vortrag**: eine Person spricht mehrere Minuten über ein Sachthema — wissenschaftsnah, aber verständlich. Es ist der **letzte Teil** des Moduls; Konzentration ist deine erste Aufgabe. Die gute Nachricht: Der Vortrag ist der **am besten strukturierte** Text des Moduls — Einleitung, Punkte, Fazit werden angekündigt, und die Aufgaben folgen dieser Reihenfolge. Wie oft der Text gespielt wird, zeigt dir der Modellsatz.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Wegweiser-Strategie',
      steps: [
        {
          badge: 'Anfang',
          titel: 'Die Einleitung verrät den Bauplan',
          text: 'Typisch: __„Ich möchte dabei auf drei Punkte eingehen.“__ Notiere diese Ankündigung — sie ist die **Landkarte** des Vortrags.',
        },
        {
          badge: 'Mitte',
          titel: 'Jeder Punkt hat ein Signalwort',
          text: 'Neue Punkte beginnen mit __zunächst, außerdem, ein weiterer Aspekt__. Was danach kommt (*zum Beispiel, eine Studie zeigt*), **belegt** den Punkt — Vertiefung, kein neues Thema.',
        },
        {
          badge: 'Schluss',
          titel: 'Fazit = Kernaussage',
          text: 'Bei __zusammenfassend / abschließend__ höchste Aufmerksamkeit: Hier verdichtet der Sprecher seine **Hauptbotschaft** — darauf zielt oft eine Aufgabe.',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — Linie statt Wörter',
      card: true,
      titel: 'Nach dem Aussetzer zurückfinden',
      absaetze: [
        'Die Aufgaben zielen meist auf die **Argumentationslinie**, nicht auf jede Einzelzahl. Verstehst du ein Wort oder einen Satz nicht: **kein Drama** — das nächste Signalwort ist dein Neustart-Knopf, dort beginnt sicher ein neuer Gedanke. ~~No intentes reconstruir lo perdido mientras el Vortrag sigue: pierdes también el punto siguiente.~~ Wer die Gliederung mitschreibt (drei Stichwörter reichen), weiß immer, **wo** er gerade ist.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Struktur ankündigen',
      kicker: 'Einleitung',
      titel: 'So beginnen Vorträge',
      items: [
        { text: '„In meinem Vortrag geht es um das Thema X. Dabei möchte ich **auf drei Punkte eingehen**: …“', gl: '— apunta los tres puntos: es tu mapa' },
        { text: '„**Zunächst** möchte ich das Problem beschreiben, **dann** die Ursachen erklären und **abschließend** Lösungen vorstellen.“' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Signal → Funktion',
      titel: 'Woran du erkennst, was gerade passiert',
      items: [
        { text: '„**Zunächst** zum Ausmaß des Problems: …“', gl: '— primer punto' },
        { text: '„**Ein weiterer Aspekt** sind die Kosten.“', gl: '— nuevo punto' },
        { text: '„**Eine aktuelle Studie zeigt**, dass …“', gl: '— evidencia del punto anterior, no tema nuevo' },
        { text: '„**Zusammenfassend lässt sich sagen**: …“', gl: '— aquí viene la Kernaussage' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welche Funktion hat der Satz im Vortrag: Einleitung, neuer Punkt, Beleg oder Fazit?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Darüber hinaus dürfen wir die Umwelt nicht vergessen.“',
        '„Ich möchte heute über das Ehrenamt sprechen und dabei auf zwei Fragen eingehen.“',
        '„Ein Beispiel dafür ist das Repair-Café in unserer Stadt.“',
        '„Zusammenfassend lässt sich sagen: Ohne Freiwillige geht es nicht.“',
      ],
      loesungen: [
        '**Neuer Punkt** — *darüber hinaus* eröffnet einen weiteren Aspekt.',
        '**Einleitung** — Thema + Bauplan.',
        '**Beleg** — vertieft den vorherigen Punkt, kein neues Thema.',
        '**Fazit** — die Kernaussage.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden — die Gliederung wiederherstellen',
      frage: 'Diese fünf Sätze stammen aus einem Vortrag über das Fahrrad in der Stadt — aber in falscher Reihenfolge. Bring sie mithilfe der Signalwörter in die logische Ordnung (1-5).\n\na) „Abschließend lässt sich sagen: Die Stadt der Zukunft fährt Rad — wenn die Politik mitspielt.“\nb) „Zunächst zu den Vorteilen: Radfahren ist günstig, gesund und leise.“\nc) „In meinem Vortrag geht es um die Frage, welche Rolle das Fahrrad im Stadtverkehr spielen kann.“\nd) „Eine Studie aus Kopenhagen zeigt, dass gute Radwege die Zahl der Radfahrer verdoppeln können.“\ne) „Außerdem müssen wir über die Infrastruktur sprechen — ohne sichere Radwege steigt niemand um.“',
      loesung: '**c → b → e → d → a.** Einleitung (c: Thema), erster Punkt (b: *zunächst*), neuer Punkt (e: *außerdem*), Beleg zum Infrastruktur-Punkt (d: *eine Studie zeigt*), Fazit (a: *abschließend*). Der Beleg (d) muss **nach** e stehen, weil er die Radwege-These stützt.',
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren — dein Mini-Vortrag',
      frage: 'Baue das Gerüst eines Mini-Vortrags (4-5 Sätze) zum Thema „Lernen mit dem Handy“. Pflicht: eine Einleitung mit Bauplan und die Signalwörter *zunächst*, *außerdem* und *abschließend*.',
      loesung: '**Mögliche Lösung:** „In meinem Vortrag geht es um das Lernen mit dem Handy; dabei möchte ich auf zwei Punkte eingehen. Zunächst zu den Vorteilen: Mit Apps kann man überall üben. Außerdem muss man die Nachteile sehen — das Handy lenkt leicht ab. Abschließend lässt sich sagen: Das Handy ist ein gutes Werkzeug, wenn man es bewusst benutzt.“ — Gültig ist jede Variante mit klarem Bauplan und korrekter Verbstellung nach dem Signalwort (*Außerdem **muss** man …* — Inversion, ~~no calques „además uno debe“~~). Dieses Gerüst brauchst du wieder im Modul Sprechen.',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Hören · Teil 4 (Trainingsformat)',
      titel: 'Vortrag: Lebensmittelverschwendung',
      anweisung: 'Lies zuerst die drei Aufgaben, dann das Transkript **einmal** in normalem Tempo ~~(en el examen: audio)~~. Wähle die richtige Lösung.',
      absaetze: [
        '„Meine Damen und Herren, in meinem Vortrag geht es um das Thema Lebensmittelverschwendung, und ich möchte dabei auf drei Punkte eingehen: das Ausmaß des Problems, seine Ursachen und mögliche Lösungen.',
        'Zunächst zum Ausmaß: Eine aktuelle Studie zeigt, dass in Deutschland jedes Jahr viele Millionen Tonnen Lebensmittel im Müll landen. Der größte Teil davon stammt nicht etwa aus Supermärkten, sondern aus privaten Haushalten.',
        'Außerdem sollten wir nach den Ursachen fragen. Viele Menschen kaufen mehr ein, als sie brauchen — und sie verstehen das Mindesthaltbarkeitsdatum falsch: Es bedeutet nicht, dass ein Produkt danach schlecht ist. Man sollte also erst prüfen und dann entscheiden, nicht automatisch wegwerfen. Ein weiterer Aspekt sind die Folgen für die Umwelt: Für jedes weggeworfene Brot wurden Wasser, Energie und Ackerfläche verbraucht.',
        'Abschließend zu den Lösungen: Hilfreich sind ein Einkaufszettel, die richtige Lagerung und Apps, über die Restaurants übrig gebliebenes Essen günstig abgeben. Zusammenfassend lässt sich sagen: Das Problem entsteht vor allem zu Hause — und genau dort können wir am meisten ändern.“',
      ],
      optionen: [
        '(1) Der größte Teil der weggeworfenen Lebensmittel stammt … a) aus Supermärkten · b) aus Restaurants · c) aus privaten Haushalten',
        '(2) Über das Mindesthaltbarkeitsdatum sagt der Sprecher: … a) Danach sind Produkte schlecht. · b) Es wird oft falsch verstanden. · c) Es sollte abgeschafft werden.',
        '(3) Die Kernaussage am Schluss: … a) Supermärkte müssen strenger kontrolliert werden. · b) Zu Hause lässt sich am meisten ändern. · c) Apps lösen das Problem allein.',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '(1) **c)** — „nicht etwa aus Supermärkten, **sondern** aus privaten Haushalten“: die *nicht … sondern*-Falle aus Teil 1.',
        '(2) **b)** — „sie verstehen das Mindesthaltbarkeitsdatum falsch“.',
        '(3) **b)** — steht direkt nach „Zusammenfassend lässt sich sagen“: das Signalwort führt zur Lösung.',
      ],
      kommentar: 'Die drei Aufgaben folgen der Gliederung: Punkt 1 (Ausmaß), Punkt 2 (Ursachen), Fazit. Wer die Einleitung notiert hat, weiß bei jeder Aufgabe, in welchem Abschnitt die Antwort kommt.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Teil 4 kommt am **Ende** des Moduls — trainiere Ausdauer: Übe den Vortrag als Abschluss einer kompletten Hör-Session, nie isoliert. Und nutze die Lesezeit: Die **Reihenfolge der Aufgaben** verrät dir die Reihenfolge der Punkte im Vortrag.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — das Modul Hören komplett',
      kopf: ['Teil', 'Textsorte', 'Deine Strategie'],
      zeilen: [
        ['Teil 1', 'Gespräche & Ansagen', 'ein Detail fangen: Uhrzeit, Ort, Änderung — Vorsicht bei nicht … sondern'],
        ['Teil 2', 'Interview', 'Fragen = Gliederung; Antwort beginnt oft nach na ja / ehrlich gesagt'],
        ['Teil 3', 'Diskussion', 'Stimmen verankern (Kürzel!) — Meinung steht nach dem aber'],
        ['Teil 4', 'Vortrag', 'Bauplan notieren, Signalwörter als Wegweiser, Fazit = Kernaussage'],
        ['Immer', '—', 'Aufgaben vorher lesen, raten statt hängen bleiben, Modellsatz als Generalprobe'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich erkenne an *zunächst, außerdem, abschließend*, wo ich im Vortrag bin.',
        'Ich unterscheide neue Punkte von Belegen (*ein Beispiel, eine Studie zeigt*).',
        'Nach einem Aussetzer steige ich beim nächsten Signalwort wieder ein.',
        'Ich habe für jeden der vier Hör-Teile eine klare Strategie.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Das Modul Hören ist geschafft — vom Alltagsdialog bis zum Vortrag. Jetzt wechselst du die Rolle: vom Verstehen zum Produzieren. Die nächste Lektion eröffnet das **Modul Schreiben** — Forumsbeitrag und formelle Nachricht. Und die Signalwörter von hier (*zunächst, außerdem, abschließend*) funktionieren auch auf dem Papier.',
    },
  ],
}
