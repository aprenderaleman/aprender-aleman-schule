// Lektion 29 · Schreiben Teil 2 — Die formelle Nachricht
//
// Bloque 2 · Abschluss des Schreib-Moduls: ~100 Wörter an Vorgesetzte,
// Vermieterin oder Kursleitung. Anrede & Gruß, Sie-Register, höflicher
// Konjunktiv II, drei Nachrichtentypen, kommentiertes Muster (104 Wörter,
// nachgezählt), drei Übungen, komplette Prüfungsaufgabe mit Lösung und
// Synthese-Tabelle des Moduls. Ausblick → Lektion 30 (Modul Sprechen).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B2', 'Prüfungsrelevanz: Schreiben Teil 2 (~100 Wörter · empf. 25 Min)'],
  h1: 'Schreiben Teil 2 — Die formelle Nachricht',
  lead: 'Hundert Wörter an die Vorgesetzte, die Vermieterin oder die Kursleitung: kurz, höflich, im Sie-Register — und mit Anrede und Gruß, die auf Anhieb sitzen.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du eine formelle Nachricht von ~100 Wörtern in 25 Minuten schreiben: Anrede, Anlass, Anliegen, Schluss, Gruß.',
        'Du hältst das Sie-Register lückenlos durch und setzt Anrede und Grußformel korrekt — ohne die spanischen Doppelpunkt-Fallen.',
        'Du formulierst höflich mit dem Konjunktiv II: *ich würde gern …, könnten Sie …?*',
        'Du erkennst die drei häufigen Typen — Entschuldigung mit Lösung, Bitte, Mitteilung — und triffst ihren Ton.',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die halboffizielle Situation',
      items: [
        { wort: 'mitteilen', kollokation: 'jemandem einen Termin mitteilen', es: 'comunicar, avisar de' },
        { wort: 'der Grund', kollokation: 'den Grund kurz nennen', es: 'motivo' },
        { wort: 'absagen', kollokation: 'einen Termin leider absagen', es: 'cancelar, anular' },
        { wort: 'verschieben', kollokation: 'die Besprechung auf Freitag verschieben', es: 'aplazar' },
        { wort: 'sich entschuldigen', kollokation: 'sich für die Verspätung entschuldigen', es: 'disculparse' },
        { wort: 'teilnehmen an + Dat.', kollokation: 'an einer Besprechung teilnehmen', es: 'asistir a' },
        { wort: 'die Lösung', kollokation: 'eine Lösung vorschlagen', es: 'solución' },
        { wort: 'das Verständnis', kollokation: 'vielen Dank für Ihr Verständnis', es: 'comprensión' },
        { wort: 'erreichen', kollokation: 'Sie erreichen mich unter dieser Nummer', es: 'localizar (por teléfono)' },
        { wort: 'die Antwort', kollokation: 'um eine kurze Antwort bitten', es: 'respuesta' },
        { wort: 'der Termin', kollokation: 'einen neuen Termin vereinbaren', es: 'cita, hora (con el médico, la casera …)' },
      ],
      hinweis: 'Der wichtigste falsche Freund dieser Aufgabe: «asistir a» heißt **teilnehmen an** — ~~*assistieren* es ayudar como asistente~~. Und **die Notiz** ist ein kurzer Vermerk, keine «noticia» ~~(«noticia» es *die Nachricht*)~~.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das Aufgabenformat',
      absaetze: [
        'Die Aufgabe beschreibt eine **halboffizielle Alltagssituation**: Du kannst an etwas nicht teilnehmen, in der Wohnung ist etwas kaputt, du brauchst etwas von der Kursleitung. Der Adressat ist eine Person in offizieller Funktion — **Vorgesetzte, Vermieterin, Kursleitung** —, also gilt durchgehend das **Sie-Register**. Die Aufgabenstellung nennt Inhaltspunkte, die deine Nachricht von etwa **100 Wörtern** abdecken muss; empfohlen sind **25 Minuten**.',
        'Bei 100 Wörtern zählt jede Zeile doppelt: Anrede, ein Satz zum Anlass, das Anliegen, Schluss und Gruß — mehr Platz gibt es nicht. Die gute Nachricht: **Anrede, Schlusssatz und Grußformel kannst du auswendig lernen.** Das sind rund 20 garantiert korrekte Wörter, bevor du überhaupt nachdenken musst.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die feste Architektur',
      steps: [
        {
          titel: 'Anrede',
          text: '__Sehr geehrte Frau Sommer,__ / __Sehr geehrter Herr Schneider,__ — mit **Komma**, und danach schreibst du **klein** weiter. ~~En español pondrías dos puntos y empezarías con mayúscula; en alemán: coma y minúscula.~~ Ohne Namen: *Sehr geehrte Damen und Herren,*',
        },
        {
          titel: 'Anlass (1 Satz)',
          text: 'Wer bist du in der Situation und warum schreibst du? __Ich wohne seit zwei Jahren in Ihrer Wohnung … / Leider muss ich Ihnen mitteilen, dass …__',
        },
        {
          titel: 'Anliegen',
          text: 'Die Inhaltspunkte der Aufgabe, höflich formuliert: Bitte im __Konjunktiv II__, bei Problemen kurz die Folge, bei Absagen ein **Lösungsvorschlag**.',
        },
        {
          titel: 'Schluss + Gruß',
          text: 'Dank oder Bitte um Antwort (__Vielen Dank für Ihr Verständnis.__), dann __Mit freundlichen Grüßen__ — **ohne Komma** danach — und dein Name auf einer neuen Zeile.',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Drei häufige Typen',
      kopf: ['Typ', 'Situation', 'Schlüsselsatz'],
      zeilen: [
        ['Entschuldigung + Lösung', 'Absage, Verspätung, Fehler', 'Bitte entschuldigen Sie, dass … + Lösungsvorschlag'],
        ['Bitte', 'freier Tag, Information, Reparatur', 'Könnten Sie bitte …? / Ich wäre Ihnen dankbar, wenn …'],
        ['Mitteilung', 'etwas ankündigen oder melden', 'Ich möchte Ihnen mitteilen, dass … / Leider funktioniert … nicht'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Höflich mit Konjunktiv II',
      absaetze: [
        'Auf Deutsch klingt *Ich will* in einer formellen Nachricht wie eine Forderung. Der **Konjunktiv II** macht daraus eine Bitte — und genau drei Formen reichen für das B2 völlig aus: __ich würde gern …__, __könnten Sie (bitte) …?__ und __ich wäre Ihnen dankbar, wenn …__. Vergleiche: *Ich will einen anderen Termin.* → *Ich **würde gern** einen anderen Termin vereinbaren.* → ***Könnten Sie** mir einen anderen Termin anbieten?* Jede Stufe klingt höflicher — und jede zeigt dem Prüfer beim Kriterium „Strukturen“, dass du mehr kannst als das Präsens.',
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel nach Funktion',
      gruppen: [
        {
          fn: 'Anrede & Einstieg',
          saetze: [
            { satz: 'Sehr geehrte Frau … / Sehr geehrter Herr … ,', gloss: '~~coma — y se sigue en minúscula, nunca dos puntos~~' },
            { satz: 'Ich schreibe Ihnen, weil …' },
            { satz: 'Leider muss ich Ihnen mitteilen, dass …' },
          ],
        },
        {
          fn: 'Sich entschuldigen & Lösung anbieten',
          saetze: [
            { satz: 'Bitte entschuldigen Sie, dass ich so kurzfristig absagen muss.' },
            { satz: 'Es tut mir sehr leid, dass ich nicht teilnehmen kann.' },
            { satz: 'Als Lösung schlage ich vor, dass …' },
          ],
        },
        {
          fn: 'Höflich bitten',
          saetze: [
            { satz: 'Könnten Sie mir bitte … schicken?' },
            { satz: 'Ich würde gern wissen, ob / wann …', gloss: '~~pregunta indirecta: el verbo se va al final~~' },
            { satz: 'Ich wäre Ihnen sehr dankbar, wenn Sie … könnten.' },
          ],
        },
        {
          fn: 'Schließen & grüßen',
          saetze: [
            { satz: 'Vielen Dank im Voraus für Ihre Hilfe.' },
            { satz: 'Über eine kurze Antwort würde ich mich freuen.' },
            { satz: 'Mit freundlichen Grüßen + Name', gloss: '~~sin coma después de la fórmula de despedida~~' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele + Muster ────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Du-Ton raus, Sie-Ton rein',
      kicker: 'informell → formell',
      titel: 'Dieselbe Botschaft, richtiges Register',
      items: [
        { text: '*Hallo Frau Berg!* → **Sehr geehrte Frau Berg,**', gl: '— y tras la coma, minúscula: nada de dos puntos ni de mayúscula' },
        { text: '*Ich brauche schnell eine Antwort.* → **Über eine kurze Antwort würde ich mich sehr freuen.**' },
        { text: '*Schick mir bitte die Infos.* → **Könnten Sie** mir die Informationen bitte **schicken**?' },
        { text: '*Sorry, ich komme morgen später!* → **Bitte entschuldigen Sie**, dass ich morgen später komme.', gl: '— kein *sorry*, kein Ausrufezeichen' },
      ],
    },

    {
      type: 'modell',
      eyebrow: 'Musterbeispiel — kommentiert',
      thema: 'Mitteilung + Bitte an die Vermieterin: Die Heizung ist kaputt',
      woerter: '104 Wörter',
      absaetze: [
        '==Sehr geehrte Frau Sommer,==',
        'ich wohne seit zwei Jahren in Ihrer Wohnung in der Gartenstraße 5. ==Leider funktioniert seit Montag die Heizung nicht mehr,== und die Wohnung ist jetzt sehr kalt.',
        'Ich habe schon versucht, die Heizung neu einzustellen, aber das hat leider nicht geholfen. Da für die nächsten Tage sehr kalte Temperaturen angekündigt sind, ist die Situation für uns wirklich unangenehm.',
        '==Könnten Sie bitte== so bald wie möglich einen Techniker schicken? ==Ich würde außerdem gern wissen,== wann die Reparatur ungefähr möglich ist. Am besten erreichen Sie mich nachmittags unter 0176 2345678.',
        'Vielen Dank im Voraus für Ihre Hilfe.',
        '==Mit freundlichen Grüßen==\nLaura Fernández',
      ],
      annotationen: [
        { tag: 'Anrede', text: 'Mit Komma — und der nächste Satz beginnt klein (*ich wohne …*).' },
        { tag: 'Anlass', text: 'Ein Satz stellt die Rolle klar (Mieterin seit zwei Jahren), der zweite meldet das Problem mit *leider*.' },
        { tag: 'Anliegen', text: 'Erst der Kontext (selbst versucht, Kälte angekündigt), dann die zwei Bitten im Konjunktiv II: *Könnten Sie …? Ich würde gern wissen, wann …* — indirekte Frage, Verb am Ende.' },
        { tag: 'Service', text: 'Telefonnummer und Erreichbarkeit: praktisch und typisch für diese Textsorte.' },
        { tag: 'Gruß', text: '*Mit freundlichen Grüßen* ohne Komma, Name auf neuer Zeile. 104 Wörter — Ziel erreicht.' },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lerne Anrede, einen Einstiegssatz, einen Schlusssatz und die Grußformel **auswendig** — das sind ~20 fehlerfreie Wörter von 100. Und kontrolliere in jeder Zeile das Register: **Sie, Ihnen, Ihre** immer groß. Ein einziges *du* kann die „Erfüllung“ der Aufgabe infrage stellen.',
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welcher Typ ist das — Entschuldigung mit Lösung, Bitte oder Mitteilung? Woran erkennst du es?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Es tut mir sehr leid, dass ich am Montag nicht kommen kann. Gern hole ich die Stunde am Mittwoch nach.“',
        '„Könnten Sie mir bitte mitteilen, wann der nächste Kurs beginnt und was er kostet?“',
        '„Ich möchte Ihnen mitteilen, dass ich zum 31. März aus der Wohnung ausziehen werde.“',
      ],
      loesungen: [
        '**Entschuldigung + Lösung** — *es tut mir leid* plus Vorschlag zum Nachholen; ohne den zweiten Teil wäre die Entschuldigung unvollständig.',
        '**Bitte** (Anfrage) — Konjunktiv II *könnten Sie* und zwei erfragte Informationen.',
        '**Mitteilung** — Signalformel *ich möchte Ihnen mitteilen, dass …*; hier wird informiert, nicht gebeten.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Zu direkt für eine formelle Nachricht — formuliere höflich mit Konjunktiv II und Sie-Register.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich will am Freitag frei haben.',
        'Reparieren Sie endlich die Waschmaschine!',
        'Sag mir, wann die Prüfung ist.',
        'Ich komme nicht zum Kurs. Punkt.',
      ],
      loesungen: [
        '*Ich würde am Freitag gern einen Tag freinehmen. Wären Sie damit einverstanden?*',
        '*Könnten Sie bitte bald jemanden schicken, der die Waschmaschine repariert?* ~~La exigencia se convierte en pregunta cortés.~~',
        '*Könnten Sie mir bitte mitteilen, wann die Prüfung stattfindet?* — indirekte Frage: Verb ans Ende.',
        '*Leider kann ich am Kurs nicht teilnehmen. Bitte entschuldigen Sie mein Fehlen.* — Grund oder Entschuldigung gehören immer dazu.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Mitteilung an deinen Vorgesetzten, Herrn Schneider: Du kommst morgen erst gegen 11 Uhr (Grund: dringender Arzttermin). Schreibe die komplette Nachricht (ca. 80 Wörter): Anrede, Grund, Entschuldigung, Lösungsvorschlag, Gruß.',
      aufgabe: 'Prüfe danach: Anrede mit Komma und klein weiter? Sie/Ihnen groß? Lösungsvorschlag enthalten?',
      loesung: '**Mögliche Lösung** (80 Wörter):\n*Sehr geehrter Herr Schneider,\nleider kann ich morgen erst gegen elf Uhr ins Büro kommen, weil ich einen dringenden Arzttermin habe, den ich nicht verschieben konnte. Bitte entschuldigen Sie die kurzfristige Nachricht.\nDamit keine Arbeit liegen bleibt, würde ich morgen Abend eine Stunde länger bleiben. Meine Kollegin Frau Marx weiß außerdem Bescheid und übernimmt am Vormittag die Telefonate.\nWenn Sie noch Fragen haben, erreichen Sie mich jederzeit auf dem Handy.\nVielen Dank für Ihr Verständnis.\nMit freundlichen Grüßen\nPablo Ríos*\n~~Fíjate en el patrón: aviso + disculpa + solución. Un aviso sin propuesta de solución queda cojo.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2 · komplette Aufgabe',
      titel: 'Formelle Nachricht an die Kursleitung · ca. 100 Wörter · empf. 25 Minuten',
      anweisung: 'Bearbeite die Aufgabe unter Echtbedingungen und vergleiche erst danach. Alle vier Punkte müssen erkennbar vorkommen.',
      absaetze: [
        'Sie besuchen einen Deutschkurs, können aber in den nächsten zwei Wochen nicht am Unterricht teilnehmen, weil Ihre Firma Sie auf eine Dienstreise schickt. Schreiben Sie eine Nachricht an Ihre Kursleiterin, Frau Albrecht (ca. 100 Wörter). Gehen Sie dabei auf folgende Punkte ein:\n• Erklären Sie den Grund für Ihr Fehlen.\n• Entschuldigen Sie sich.\n• Bitten Sie um die Materialien aus dem Unterricht.\n• Schlagen Sie vor, wie Sie den Stoff nachholen.',
      ],
      loesungLabel: 'Mögliche Lösung (99 Wörter)',
      loesungen: [
        '*Sehr geehrte Frau Albrecht,*',
        '*leider muss ich Ihnen mitteilen, dass ich in den nächsten zwei Wochen nicht am Deutschkurs teilnehmen kann, weil mich meine Firma auf eine Dienstreise nach Chile schickt. Bitte entschuldigen Sie, dass ich Ihnen erst heute Bescheid gebe.*',
        '*Der Kurs ist mir sehr wichtig, deshalb möchte ich den Stoff auf keinen Fall verpassen. Könnten Sie mir bitte die Arbeitsblätter und die Hausaufgaben per E-Mail schicken? Ich würde die Aufgaben abends im Hotel bearbeiten und sie Ihnen nach meiner Rückkehr zeigen.*',
        '*Ich wäre Ihnen sehr dankbar, wenn Sie mir kurz antworten könnten.*',
        '*Mit freundlichen Grüßen\nAndrés Molina*',
      ],
      kommentar: 'Die vier Punkte in drei Absätzen: Grund + Entschuldigung zusammen im ersten, Bitte + Lösungsvorschlag im zweiten, die höfliche Bitte um Antwort als Schluss. Alle drei Konjunktiv-II-Formen der Lektion sind im Einsatz: *könnten Sie, ich würde, ich wäre Ihnen dankbar.*',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Teile die 25 Minuten in **5 – 15 – 5**: Punkte lesen und je ein Stichwort notieren, schreiben, Schluss-Check. Bei nur ~100 Wörtern fällt **jeder fehlende Inhaltspunkt** sofort auf — hake die Punkte ab wie in Teil 1.',
    },

    { type: 'rule' },

    // ── Abschluss: Synthese des Moduls ────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — Das Modul Schreiben komplett',
      kopf: ['', 'Teil 1 · Forumsbeitrag', 'Teil 2 · formelle Nachricht'],
      zeilen: [
        ['Umfang & Zeit', '~150 Wörter · ca. 50 Min', '~100 Wörter · ca. 25 Min'],
        ['Adressat & Register', 'andere Forum-Nutzer · freundlich-neutral, ich-Form', 'Vorgesetzte, Vermieterin, Kursleitung · formell, Sie'],
        ['Aufbau', 'Einstieg → Meinung → Beispiel → Einräumung + Fazit', 'Anrede → Anlass → Anliegen → Schluss + Gruß'],
        ['Schlüssel-Redemittel', 'Meiner Meinung nach · Ein Beispiel aus meinem Alltag', 'Könnten Sie bitte … · Ich würde gern … · Mit freundlichen Grüßen'],
        ['Typische Falle', 'ein vergessener Inhaltspunkt', 'Anrede mit Doppelpunkt statt Komma · *du* statt *Sie*'],
        ['Bewertung', 'Erfüllung · Kohärenz · Wortschatz · Strukturen — für beide Texte gleich', 'dazu der Schluss-Check: Artikel · Verb 2 · Komma · Großschreibung'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich schreibe eine formelle Nachricht mit allen fünf Bausteinen in 25 Minuten.',
        'Ich setze die Anrede mit Komma und schreibe danach klein weiter — und Sie/Ihnen immer groß.',
        'Ich bitte höflich mit *ich würde gern, könnten Sie, ich wäre Ihnen dankbar*.',
        'Ich erkenne den verlangten Typ (Entschuldigung + Lösung, Bitte, Mitteilung) und treffe seinen Ton.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist das Modul Schreiben komplett — beide Textsorten, alle vier Kriterien, dein Schluss-Check. Als Nächstes wechselt der Kanal: Im **Modul Sprechen** zeigst du dieselbe Klarheit mündlich — die Paarprüfung mit Vortrag und Diskussion in rund 15 Minuten. Die nächste Lektion führt dich durch den Ablauf, Minute für Minute.',
    },
  ],
}
