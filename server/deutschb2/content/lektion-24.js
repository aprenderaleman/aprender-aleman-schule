// Lektion 24 · Hören Teil 1 — Gespräche & Ansagen
//
// Bloque 2 — Modul Hören. Respeta el canon de la Lektion 23:
// ca. 40 min, 4 Teile; detalles finos siempre en genérico + Modellsatz.
// Práctica: 4 mini-Transkripte (~60-80 palabras) con un ítem cada uno.

export default {
  spec: ['Bloque 2', 'Modul Hören · Teil 1', 'Niveau B2', 'Prüfungsrelevanz: Hören'],
  h1: 'Hören Teil 1: Gespräche & Ansagen',
  lead: 'Bahnhofsdurchsage, Anrufbeantworter, Radio: kurze Alltagstexte, aus denen du ein konkretes Detail fischst — eine Uhrzeit, einen Ort, eine Planänderung. Hier trainierst du Zahlen und Daten „im Ohr“.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Alltagsgespräche und Ansagen gezielt nach **einer** Information abhören',
        'Uhrzeiten, Zahlen und Daten beim ersten Hören sicher erfassen',
        'Planänderungen sofort erkennen (*nicht … sondern, verschoben, fällt aus*)',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Ansagen & Termine',
      items: [
        { wort: 'die Durchsage, -n', kollokation: 'eine Durchsage im Supermarkt', es: 'aviso por altavoz' },
        { wort: 'der Anrufbeantworter, -', kollokation: 'eine Nachricht auf dem Anrufbeantworter', es: 'contestador' },
        { wort: 'das Gleis, -e', kollokation: 'der Zug fährt von Gleis 7', es: 'vía, andén' },
        { wort: 'die Verspätung, -en', kollokation: '20 Minuten Verspätung haben', es: 'retraso' },
        { wort: 'ausfallen', kollokation: 'der Kurs fällt heute aus', es: 'cancelarse, no celebrarse' },
        { wort: 'verschieben', kollokation: 'den Termin auf Freitag verschieben', es: 'aplazar' },
        { wort: 'stattfinden', kollokation: 'die Führung findet um 15 Uhr statt', es: 'tener lugar' },
        { wort: 'absagen', kollokation: 'einen Termin kurzfristig absagen', es: 'cancelar (una cita)' },
        { wort: 'sich melden', kollokation: 'melden Sie sich unter der Nummer …', es: 'ponerse en contacto' },
        { wort: 'erreichen', kollokation: 'Sie erreichen uns bis 18 Uhr', es: 'localizar, contactar' },
        { wort: 'die Öffnungszeiten (Pl.)', kollokation: 'geänderte Öffnungszeiten beachten', es: 'horario de apertura' },
        { wort: 'die Änderung, -en', kollokation: 'eine kurzfristige Änderung', es: 'cambio, modificación' },
      ],
      hinweis: '**absagen** = cancelar una cita concreta; **ausfallen** = lo que ya no se celebra (¡el sujeto es el evento!): *Der Kurs fällt aus.* ~~No digas „el curso se cancela“ con „absagen“: „Der Kurs wird abgesagt“ sí, pero „Der Kurs sagt ab“ jamás.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — was Teil 1 von dir will',
      absaetze: [
        'In Teil 1 hörst du **mehrere kurze Alltagstexte**: Durchsagen, Nachrichten auf dem Anrufbeantworter, Radiohinweise, kurze Gespräche. Zu jedem Text gehört in der Regel **eine konkrete Frage** — und die kennst du, bevor der Text beginnt. Deine Aufgabe ist nicht „alles verstehen“, sondern **ein Detail fangen**: Wer? Wann? Wo? Was ändert sich?',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — Zahlen & Uhrzeiten im Ohr',
      steps: [
        {
          badge: 'halb',
          titel: 'halb zehn = 9.30 Uhr',
          text: '__halb__ nennt die **kommende** Stunde. ~~El error clásico del hispanohablante: entender „halb zehn“ como las 10:30. Es las 9:30 — media hora ANTES de la hora nombrada.~~',
        },
        {
          badge: 'Viertel',
          titel: 'Viertel nach / Viertel vor',
          text: '*Viertel nach sieben* = 7.15 Uhr, *Viertel vor sieben* = 6.45 Uhr. Dazu *kurz vor / kurz nach* für ungefähre Zeiten.',
        },
        {
          badge: '-zehn/-zig',
          titel: 'vierzehn oder vierzig?',
          text: 'Der Unterschied liegt nur in der Endung: __-zehn__ gegen __-zig__. Hör auf das Wortende — *VIERzehn* und *VIERzig* beginnen gleich.',
        },
        {
          badge: '45 = 5+40',
          titel: 'Einer zuerst!',
          text: 'Deutsch nennt die Einer **vor** den Zehnern: *fünfundvierzig* = 45. ~~Al oír „fünfund…“ espera la decena y anota el número completo — no „54“.~~',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Distraktoren-Falle',
      card: true,
      titel: 'Alt und Neu im selben Satz',
      absaetze: [
        'Ansagen nennen oft **beide** Daten — das alte und das neue: *„Der Kurs beginnt **nicht** um 18 Uhr, **sondern** um 18.30 Uhr.“* Die falsche Option ist fast immer eine Zahl, die **wirklich im Text vorkommt** — als alter Plan. Signalwörter für die gültige Information: **nicht … sondern, stattdessen, verschoben auf, ab sofort**. Erst am Satzende weißt du, welche Zahl zählt.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Uhrzeit & Zahl',
      kicker: 'Uhrzeiten',
      titel: 'Gesprochene Zeit → Ziffern',
      items: [
        { text: '„Der Zug nach Kiel fährt heute um **halb acht**.“', gl: '— 7:30, no 8:30' },
        { text: '„Treffen wir uns um **Viertel vor sechs** vor dem Kino?“', gl: '— 17:45' },
        { text: '„Die Praxis ist ab **vierzehn** Uhr wieder besetzt.“', gl: '— ¿vierzehn (14) o vierzig (40)? -zehn ≠ -zig: escucha el final' },
        { text: '„Das Ticket kostet **fünfundzwanzig** Euro.“', gl: '— 25: unidades primero' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Planänderung',
      titel: 'Signale, dass sich etwas ändert',
      items: [
        { text: 'Die Besichtigung findet **nicht** am Samstag, **sondern** am Sonntag statt.' },
        { text: 'Der Termin wird **auf** nächste Woche **verschoben**.' },
        { text: 'Die Führung um 15 Uhr **fällt** leider **aus** — **stattdessen** bieten wir 17 Uhr an.' },
        { text: '**Ab sofort** erreichen Sie uns unter einer neuen Nummer.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Schreib die Uhrzeit in Ziffern.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'halb neun (morgens)',
        'Viertel nach sieben (abends)',
        'kurz vor zwölf (mittags)',
        'zwanzig nach drei (nachmittags)',
      ],
      loesungen: [
        '**8.30 Uhr** — halb = media hora antes de la hora nombrada.',
        '**19.15 Uhr**',
        '**ca. 11.55 Uhr** — „kurz vor“ = ungefähre Angabe.',
        '**15.20 Uhr**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden — zwei Mini-Hörtexte',
      frage: 'Lies jedes Transkript **einmal** in normalem Tempo ~~(en el examen: audio)~~, Lösung abdecken, dann antworten.\n\n**Transkript A — Bahnhofsdurchsage:** „Meine Damen und Herren, auf Gleis 5 fährt in wenigen Minuten der ICE 517 nach München ein, planmäßige Abfahrt 14.32 Uhr. Der Zug hat heute circa 20 Minuten Verspätung. Reisende nach Augsburg beachten bitte: Der Anschlusszug wartet **nicht**. Nutzen Sie stattdessen den Regionalexpress um 15.10 Uhr von Gleis 9.“\n\n**Transkript B — Telefongespräch:** „— Praxis Dr. Weber, guten Tag. — Guten Tag, hier Yilmaz. Ich habe morgen um halb elf einen Termin, aber ich schaffe es leider nicht. Könnte ich ihn verschieben? — Moment … Donnerstag um Viertel nach neun wäre etwas frei. — Hm, da arbeite ich. Geht auch nachmittags? — Freitag um 16.20 Uhr? — Ja, das passt. Vielen Dank!“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Zu A: Der Anschlusszug nach Augsburg wartet auf die verspäteten Reisenden. — richtig / falsch',
        'Zu B: Der neue Termin ist am Donnerstag um 9.15 Uhr. — richtig / falsch',
      ],
      loesungen: [
        '**falsch** — „Der Anschlusszug wartet nicht“; die Alternative ist der Regionalexpress um 15.10 Uhr.',
        '**falsch** — Donnerstag 9.15 Uhr wird **angeboten**, aber abgelehnt („da arbeite ich“). Der neue Termin: **Freitag, 16.20 Uhr**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren — hören und notieren',
      frage: 'Lies das Transkript **einmal** ~~(en el examen: audio)~~. Beantworte die Frage und notiere danach aus dem Gedächtnis die drei Kerndaten: **Was? Wann? Wo?**\n\n**Transkript C — Radiohinweis:** „Und noch ein Hinweis für alle, die am Wochenende zum Stadtfest wollen: Wegen des Sturms beginnt das Fest nicht wie geplant am Freitagabend, sondern erst am Samstag um elf Uhr. Das Konzert auf dem Marktplatz fällt komplett aus; stattdessen spielt die Band am Sonntag im Kulturhaus. Der Eintritt bleibt an beiden Tagen frei.“\n\n**Frage:** Das Konzert … a) beginnt am Freitagabend · b) findet im Kulturhaus statt · c) kostet am Sonntag Eintritt',
      loesung: '**b)** — das Konzert fällt auf dem Marktplatz aus und wird ins **Kulturhaus** verlegt. — Mögliche Notizen: *Was?* Stadtfest + Konzert verlegt. *Wann?* Fest ab Sa 11 Uhr, Konzert So. *Wo?* Kulturhaus statt Marktplatz.',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Hören · Teil 1 (Trainingsformat)',
      titel: 'Anrufbeantworter',
      anweisung: 'Lies zuerst die Aufgaben, dann das Transkript **einmal** in normalem Tempo ~~(en el examen: audio)~~. Kreuze an.',
      absaetze: [
        '„Guten Tag, hier ist die Fahrschule Brandt, eine Nachricht für Herrn Costa. Ihre Theorieprüfung am Mittwoch, dem zwölften November, muss leider ausfallen, weil unser Prüfungsraum renoviert wird. Als neuen Termin können wir Ihnen Freitag, den vierzehnten November, um 8.45 Uhr anbieten — diesmal in unserer Filiale in der Bahnhofstraße 23. Bitte rufen Sie uns bis morgen zurück und sagen Sie kurz Bescheid, ob der Termin passt. Sie erreichen uns bis 18 Uhr.“',
      ],
      optionen: [
        '(1) Was ist am neuen Termin anders? a) nur der Tag · b) Tag **und** Ort · c) nur der Ort',
        '(2) Herr Costa soll bis morgen zurückrufen. — richtig / falsch',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '(1) **b)** — neuer Tag (Freitag, 14.11., 8.45 Uhr) **und** neuer Ort (Filiale Bahnhofstraße 23).',
        '(2) **richtig** — „Bitte rufen Sie uns bis morgen zurück.“',
      ],
      kommentar: 'Beide Daten (Mittwoch/Freitag) kommen im Text vor — typische Distraktoren. Entscheidend sind die Signale: *ausfallen* (alter Termin) und *als neuen Termin anbieten* (gültige Information).',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Notiere Zahlen **sofort in Ziffern**, nie als Wort. Bei Uhrzeiten übersetze *halb* und *Viertel* schon beim Lesen der Aufgabe in Ziffern — dann musst du beim Hören nur noch **vergleichen**.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Situation', 'Worauf du hörst'],
      zeilen: [
        ['Durchsage (Bahnhof, Kaufhaus)', 'Ort (Gleis, Etage), Uhrzeit, Änderung (nicht … sondern, stattdessen)'],
        ['Anrufbeantworter', 'Wer spricht? Was soll ich tun? Bis wann? Nummer/Erreichbarkeit'],
        ['Radiohinweis', 'Was findet statt / fällt aus? Neuer Ort, neue Zeit'],
        ['Uhrzeiten', 'halb zehn = 9.30 · Viertel vor/nach · kurz vor/nach'],
        ['Zahlen', '-zehn ≠ -zig (Wortende!) · Einer vor Zehnern (fünfundvierzig = 45)'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verstehe *halb zehn* als 9.30 Uhr und höre bei *-zehn/-zig* auf das Wortende.',
        'Ich erkenne Planänderungen an *nicht … sondern, stattdessen, verschoben, fällt aus*.',
        'Ich weiß, dass Distraktoren echte Zahlen aus dem Text sind — und warte auf das Satzende.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Vom kurzen Alltagstext zu den langen Formaten: In der nächsten Lektion trainierst du **Interview und Diskussion (Teil 2–3)** — mehrere Stimmen, abgeschwächte Meinungen und die Kernfrage „**Wer sagt was?**“.',
    },
  ],
}
