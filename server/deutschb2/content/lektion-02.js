// Lektion 02 · Das digitale Prüfungsformat (CBT)
//
// Bloque 0 «Einführung» — la prueba por ordenador: navegación, marcado,
// reloj, teclado alemán (ä ö ü ß), qué cambia respecto al papel y la
// checklist del día del examen digital.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau B2', 'Prüfungsrelevanz: Lesen · Hören · Schreiben'],
  h1: 'Das digitale Prüfungsformat (CBT)',
  lead: 'Lesen, Hören und Schreiben am Computer: sicher navigieren, digital markieren, die Uhr im Blick behalten — und mit deutscher Tastatur tippen.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'wissen, was beim digitalen Format anders ist — und was gleich bleibt',
        'sicher navigieren: Antworten anklicken, ändern und Textstellen markieren',
        'flüssig mit deutschen Sonderzeichen (ä, ö, ü, ß) tippen',
        'das CBT-Format zu Hause realistisch trainieren',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — am Bildschirm',
      items: [
        { wort: 'der Bildschirm, -e', kollokation: 'den Text am Bildschirm lesen', es: 'la pantalla' },
        { wort: 'die Tastatur, -en', kollokation: 'mit deutscher Tastatur schreiben', es: 'el teclado' },
        { wort: 'die Maus, ·Mäuse', kollokation: 'mit der Maus auswählen', es: 'el ratón' },
        { wort: 'anklicken', kollokation: 'die richtige Antwort anklicken', es: 'hacer clic en, seleccionar' },
        { wort: 'markieren', kollokation: 'eine Textstelle markieren', es: 'marcar, resaltar' },
        { wort: 'die Antwort ändern', kollokation: 'die Auswahl noch einmal ändern', es: 'cambiar la respuesta' },
        { wort: 'der Kopfhörer, -', kollokation: 'das Audio über Kopfhörer hören', es: 'los auriculares' },
        { wort: 'die Restzeit', kollokation: 'die Restzeit im Blick behalten', es: 'el tiempo restante' },
        { wort: 'das Eingabefeld, -er', kollokation: 'den Text ins Eingabefeld tippen', es: 'el campo de texto' },
        { wort: 'scrollen', kollokation: 'im Lesetext nach unten scrollen', es: 'desplazarse (por la pantalla)' },
        { wort: 'das Sonderzeichen, -', kollokation: 'Sonderzeichen wie ß eingeben', es: 'el carácter especial' },
        { wort: 'tippen', kollokation: 'schnell und fehlerfrei tippen', es: 'teclear' },
      ],
      hinweis: '~~«Markieren» en el software del examen = resaltar texto o señalar una tarea para revisarla luego — no es «marcar la respuesta correcta» (eso es «anklicken»).~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — was CBT bedeutet',
      absaetze: [
        'CBT heißt „computer-based testing“: Du legst **Lesen, Hören und Schreiben am Computer** ab. Das Modul **Sprechen bleibt eine Paarprüfung** vor echten Prüfenden. Wichtig: **Inhalt, Aufgaben, Zeit und Bewertung sind identisch** mit der Papierprüfung — nur das Medium ändert sich.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — so navigierst du',
      steps: [
        {
          titel: 'Antworten anklicken — und ändern',
          text: 'Eine Antwort wählst du per __Klick__ aus. Bist du unsicher, klickst du einfach später eine andere Option an — **bis die Zeit abläuft, ist nichts endgültig**.',
        },
        {
          titel: 'Aufgaben markieren und zurückkommen',
          text: 'Schwierige Aufgaben kannst du __markieren__ und in der Regel innerhalb des Moduls zu ihnen zurückspringen. Erst weiterarbeiten, dann mit klarem Kopf zurückkommen — das spart Zeit.',
        },
        {
          titel: 'Die Uhr im Blick',
          text: 'Die __Restzeit__ läuft auf dem Bildschirm mit. Du musst nicht auf eine Wanduhr schauen — aber du musst sie **aktiv nutzen**: bei Lesen z. B. pro Teil ein Zeitbudget setzen.',
        },
        {
          titel: 'Schreiben mit der Tastatur',
          text: 'Beim Modul Schreiben tippst du in ein __Eingabefeld__. Löschen, umstellen, ergänzen — Korrekturen sind viel leichter als auf Papier. Die Wortzahl zählt das System meist automatisch mit.',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Papier vs. digital',
      kopf: ['Bereich', 'Auf Papier', 'Am Computer'],
      zeilen: [
        ['Lesen', 'mit dem Stift unterstreichen', 'mit dem Markierungswerkzeug hervorheben'],
        ['Hören', 'Lautsprecher für den ganzen Raum', 'individuell über Kopfhörer, Lautstärke selbst regeln'],
        ['Schreiben', 'Handschrift, Korrekturen unübersichtlich', 'tippen — sauber löschen und umstellen'],
        ['Zeit & Aufgaben', 'identisch', 'identisch — nur die Uhr läuft am Bildschirm'],
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — Tastatur & Training zu Hause',
      card: true,
      titel: 'ä, ö, ü, ß — dein Tipptraining',
      absaetze: [
        'In der Prüfung tippst du auf einer **deutschen Tastatur (QWERTZ)**: __ä, ö, ü__ haben eigene Tasten rechts, __ß__ liegt rechts neben der Null — und __y__ und __z__ sind vertauscht. ~~Si escribes «strasse» en vez de «Straße» o buscas la ß desesperado, pierdes tiempo y nervios: entrénalo antes.~~',
        'So trainierst du realistisch: **(1)** Stell zu Hause das deutsche Tastaturlayout ein und tippe täglich 10 Minuten deutsche Sätze. **(2)** Schreib deine Übungstexte (z. B. Forumsbeiträge) **am Computer mit Zeitlimit**, nicht auf Papier. **(3)** Arbeite den **digitalen Modellsatz** des Goethe-Instituts durch — dort siehst du die echte Prüfungsoberfläche.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Bildschirmsprache',
      kicker: 'Anweisungen',
      titel: 'Das liest du auf dem Bildschirm',
      items: [
        { text: '„**Klicken Sie** die richtige Lösung **an**.“', gl: '— selecciona la respuesta' },
        { text: '„Sie können Ihre Antwort jederzeit **ändern**.“', gl: '— nada es definitivo hasta el final' },
        { text: '„**Markieren** Sie die Aufgabe, um später zurückzukehren.“', gl: '— señálala para revisión' },
        { text: '„Die **verbleibende Zeit** sehen Sie oben rechts.“' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Vorteile & Risiken',
      titel: 'Was dir hilft — und wo du aufpassen musst',
      items: [
        { text: '**Vorteil:** Beim Hören hast du eigene Kopfhörer — du stellst die **Lautstärke selbst** ein.' },
        { text: '**Vorteil:** Getippte Texte kannst du sauber **korrigieren und umstellen** — keine Streichungen wie auf Papier.' },
        { text: '**Risiko:** Du kannst nicht mit dem Stift unterstreichen — nutze konsequent das **Markierungswerkzeug** des Programms.' },
        { text: '**Risiko:** Langsames Tippen kostet beim Schreiben wertvolle Minuten — **Tipptraining ist Prüfungstraining**.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Richtig oder falsch?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Im digitalen Format sprichst du auch das Modul Sprechen am Computer.',
        'Eine angeklickte Antwort kannst du bis zum Ende der Zeit ändern.',
        'Am Computer ist die Prüfungszeit kürzer als auf Papier.',
        'Das Audio beim Hören läuft individuell über Kopfhörer.',
      ],
      loesungen: [
        '**Falsch** — Sprechen bleibt eine Paarprüfung mit echten Prüfenden.',
        '**Richtig** — erst mit Ablauf der Zeit ist die Auswahl endgültig.',
        '**Falsch** — Zeit, Aufgaben und Bewertung sind identisch.',
        '**Richtig** — und die Lautstärke regelst du selbst.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Was tust du in dieser Situation? Antworte mit dem passenden Verb aus dem Kernwortschatz.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Bei Lesen Teil 3 bist du bei einer Aufgabe unsicher, die Zeit läuft.',
        'Im Lesetext willst du eine wichtige Zahl später schnell wiederfinden.',
        'Beim Schreiben merkst du, dass dein zweiter Absatz besser an den Anfang passt.',
      ],
      loesungen: [
        'Die Aufgabe **markieren**, weiterarbeiten und am Ende des Moduls **zurückkommen** — sich nicht festbeißen.',
        'Die Stelle mit dem **Markierungswerkzeug** hervorheben — wie Unterstreichen auf Papier.',
        'Den Absatz einfach **ausschneiden und umstellen** — genau das ist der Vorteil des Tippens.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Tipptraining: Stell die deutsche Tastatur ein und tippe in maximal 5 Minuten vier Sätze über deinen Alltag. Jeder Satz braucht mindestens einen Umlaut (ä, ö, ü), einer davon ein ß.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ich stehe **früh** auf und **öffne** zuerst das Fenster. Zum **Frühstück** trinke ich Kaffee mit Milch. Danach laufe ich durch die **Straßen** zum Büro. Abends **wäre** ich gern sportlicher, aber meistens bin ich **müde**. ~~Cualquier contenido vale — el objetivo es mecánico: encontrar ä, ö, ü y ß sin buscar las teclas. Repite el ejercicio hasta bajar de 5 minutos.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — Checkliste für den digitalen Prüfungstag',
      kopf: ['Wann', 'Das gehört auf deine Checkliste'],
      zeilen: [
        ['Tage vorher', 'Digitalen Modellsatz durchspielen · täglich tippen (ä, ö, ü, ß) · Ausweis und Anmeldebestätigung bereitlegen'],
        ['Am Morgen', 'Früh da sein · Ausweis mitnehmen · Handy und Notizen bleiben draußen'],
        ['Vor dem Start', 'Kopfhörer aufsetzen und Lautstärke testen · Bildschirm und Platz prüfen · Fragen sofort der Aufsicht stellen'],
        ['Während der Prüfung', 'Restzeit aktiv nutzen · markieren statt grübeln · am Ende jedes Teils die Antworten kontrollieren'],
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Simuliere **mindestens einmal komplett digital**: Modellsatz am Computer, mit Kopfhörern, mit laufender Uhr, Schreiben nur mit Tastatur. Wer das Format schon erlebt hat, hat am Prüfungstag **den Kopf frei für die Sprache** — nicht für die Technik.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Was ist digital?', 'Lesen, Hören, Schreiben — Sprechen bleibt Paarprüfung'],
        ['Was bleibt gleich?', 'Inhalt, Aufgaben, Zeit und Bewertung'],
        ['Statt unterstreichen?', 'Markierungswerkzeug nutzen, Aufgaben zum Zurückkommen markieren'],
        ['Größter Vorteil', 'Individuelles Audio über Kopfhörer + saubere Korrekturen beim Tippen'],
        ['Größtes Risiko', 'Langsames Tippen und unbekannte Tastatur → vorher trainieren'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß, welche Module digital laufen und was gleich bleibt.',
        'Ich kann Antworten anklicken, ändern und Textstellen markieren.',
        'Ich finde ä, ö, ü und ß auf der deutschen Tastatur, ohne zu suchen.',
        'Ich habe einen Plan, wie ich das CBT-Format zu Hause trainiere.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kennst jetzt die Prüfung und ihr Format. Bevor der Kurs richtig startet, kommt die ehrliche Frage: **Wo stehst du gerade?** In der nächsten Lektion machst du eine Standortbestimmung mit drei Mini-Tests — und findest heraus, welche Lektionen für dich am wichtigsten sind.',
    },
  ],
}
