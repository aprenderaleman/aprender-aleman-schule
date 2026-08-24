// Lektion 15 · Wortbildung & Kollokationen

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Lesen Teil 2 · Schreiben · Sprechen'],
  h1: 'Wortbildung & Kollokationen',
  lead: 'Suchen, versuchen, besuchen, untersuchen: Präfixe kippen Bedeutungen, Suffixe verraten das Genus — und wer die richtigen Wortpartner kennt, trifft Entscheidungen, statt sie zu „machen“.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du die Kernbedeutungen der Präfixe *ver-, zer-, ent-, miss-, be-, er-* nutzen, um unbekannte Verben zu erschließen.',
        'Du bestimmst das Genus abgeleiteter Nomen über das Suffix — ohne Wörterbuch.',
        'Du bildest und liest Komposita, auch mit Ergänzungsstrich (*Vor- und Nachteile*), und zerlegst lange Fachwörter von hinten.',
        'Du verwendest zentrale C1-Kollokationen aktiv und baust Wortfamilien als Strategie für den Lückentext auf.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Kollokationen, die C1 ausmachen',
      items: [
        { wort: 'eine Entscheidung treffen', kollokation: 'eine weitreichende Entscheidung treffen', es: 'tomar una decisión' },
        { wort: 'Kritik üben', kollokation: 'scharfe Kritik an etwas üben', es: 'criticar, ejercer crítica' },
        { wort: 'eine Rolle spielen', kollokation: 'eine entscheidende Rolle spielen', es: 'desempeñar un papel' },
        { wort: 'Maßnahmen ergreifen', kollokation: 'geeignete Maßnahmen ergreifen', es: 'adoptar medidas' },
        { wort: 'in Betracht ziehen', kollokation: 'eine Alternative in Betracht ziehen', es: 'tomar en consideración' },
        { wort: 'zur Verfügung stehen', kollokation: 'jederzeit zur Verfügung stehen', es: 'estar a disposición' },
        { wort: 'einen Beitrag leisten', kollokation: 'einen wichtigen Beitrag leisten', es: 'contribuir' },
        { wort: 'Rücksicht nehmen', kollokation: 'Rücksicht auf Schwächere nehmen', es: 'tener consideración' },
        { wort: 'Konsequenzen ziehen', kollokation: 'aus Fehlern Konsequenzen ziehen', es: 'sacar las consecuencias, actuar en consecuencia' },
        { wort: 'Verantwortung übernehmen', kollokation: 'die Verantwortung für etwas übernehmen', es: 'asumir la responsabilidad' },
        { wort: 'Einfluss nehmen', kollokation: 'Einfluss auf eine Entscheidung nehmen', es: 'influir' },
        { wort: 'in Frage stellen', kollokation: 'ein Ergebnis in Frage stellen', es: 'cuestionar' },
        { wort: 'eine Frage aufwerfen', kollokation: 'grundsätzliche Fragen aufwerfen', es: 'plantear una cuestión' },
      ],
      hinweis: 'Kollokationen lernt man als **Paar, nie als Einzelwort**. *~Eine Entscheidung machen~* versteht jeder — aber es ist der sicherste Marker für „übersetzt aus einer anderen Sprache“. ~~«Tomar» una decisión tampoco ayuda: en alemán no se toma, se «encuentra» (treffen).~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — Präfixe, die Bedeutung steuern',
      steps: [
        {
          badge: 'ver-',
          titel: 'Veränderung, Fehler, Abschluss',
          text: 'Drei Kernbedeutungen: Zustandswechsel (__armen → verarmen__, __alten → veralten__), Fehlgriff mit *sich* (__sich versprechen, sich verlaufen__), Abschluss/Verbrauch (__verbrauchen, verheilen__).',
        },
        {
          badge: 'zer-',
          titel: 'Auseinander, kaputt',
          text: 'Immer Destruktion in Teile: __zerbrechen, zerreißen, zerlegen, zerfallen__. Wer *zer-* liest, weiß: Am Ende ist es in Stücken.',
        },
        {
          badge: 'ent-',
          titel: 'Wegnehmen, Beginn',
          text: 'Meist Entfernung/Umkehrung: __entfernen, entlassen, entkommen, entwaffnen__ — das Gegenstück zu *be-*. Daneben Beginn: __entstehen, entflammen__.',
        },
        {
          badge: 'miss-',
          titel: 'Falsch, negativ',
          text: 'Kehrt ins Negative: __missverstehen, misslingen, missachten, misstrauen__. Nomen dazu: __der Misserfolg, das Missverständnis__.',
        },
        {
          badge: 'be-',
          titel: 'Transitiv machen',
          text: 'Macht aus Richtungen und Themen direkte Objekte: __antworten auf etwas → etwas beantworten__, __über etwas sprechen → etwas besprechen__, __auf etwas steigen → etwas besteigen__. Zentral für den Nominal- und Schriftstil.',
        },
        {
          badge: 'er-',
          titel: 'Ergebnis, Erreichen',
          text: 'Prozess mit Resultat: __arbeiten → erarbeiten__, __forschen → erforschen__, __kämpfen → erkämpfen__; Zustandseintritt: __erkranken, erröten__.',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Suffix verrät Genus',
      kopf: ['Suffix', 'Genus', 'Beispiele'],
      zeilen: [
        ['-ung, -heit, -keit, -schaft, -ion, -tät, -ur', 'feminin', 'die Lösung · die Freiheit · die Wissenschaft · die Diskussion'],
        ['-er (Personen/Geräte), -ismus, -ling', 'maskulin', 'der Forscher · der Optimismus · der Neuling'],
        ['-chen, -lein, -um, -ment', 'neutral', 'das Märchen · das Studium · das Argument'],
        ['-nis', 'meist neutral, einige feminin', 'das Ergebnis, das Verhältnis · aber: die Erkenntnis, die Erlaubnis'],
        ['substantivierter Infinitiv', 'neutral', 'das Lernen · das Schreiben (Lektion 3)'],
      ],
    },

    {
      type: 'prose',
      eyebrow: 'Erklärung — Komposita',
      card: true,
      titel: 'Komposita: von hinten lesen, mit Bindestrich kürzen',
      absaetze: [
        'Deutsche Komposita bestimmt das **letzte Glied**: Die *Arbeitszeitverkürzung* ist eine Verkürzung (feminin), egal wie lang der Anlauf ist. Lies lange Wörter deshalb **von hinten**: *Kranken·versicherungs·beitrag* → ein Beitrag, für die Versicherung, gegen Krankheit. Das Fugen-s (*Arbeit**s**zeit*, *Versicherung**s**beitrag*) ist Bindematerial ohne eigene Bedeutung.',
        'Der Bindestrich hat zwei seriöse Jobs: Er gliedert Unübersichtliches (*Making-of*, *E-Mail-Anhang*) — und als **Ergänzungsstrich** spart er das gemeinsame Grundwort: __Vor- und Nachteile__, __Ein- und Ausgänge__, __Sprach- und Kulturwissenschaft__. ~~En español se repite el sustantivo («ventajas y desventajas»); en alemán el guion deja el hueco: escribir *Vorteile und Nachteile* no es error, pero sí estilo pesado.~~',
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Wortfamilien: die Strategie für den Lückentext',
      absaetze: [
        'Im Lückentext von Lesen Teil 2 entscheidet oft die **Wortart**, nicht die Bedeutung: Aus der Familie *entscheiden* passt in „eine schwierige ___“ nur *Entscheidung*, in „ein ___ Kriterium“ nur *entscheidendes*. Trainiere deshalb Wortfamilien komplett: __entscheiden — die Entscheidung — entscheidend — unentschieden__; __wirken — die Wirkung — wirksam — die Wirksamkeit__.',
        'Damit schließt sich der Kreis des Blocks: Die **Nominalisierung** (Lektion 3) liefert das Nomen, das **Passiv** und der **Konjunktiv** das Register, **Konnektoren** (10-11) und **Relativsätze** (12) die Architektur, **Modalverben und Partikeln** (13-14) die Sprecherhaltung — und die Wortbildung liefert das Material für alles. Ein echter C1-Text ist nichts anderes als dieses Zusammenspiel: *Ungeachtet der Kritik, die an dem Vorhaben geübt wurde, dürfte die Entscheidung, deren Tragweite kaum zu überschätzen ist, noch in diesem Jahr getroffen werden.* Vier Lektionen, ein Satz.',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Baustelle',
      kicker: 'Präfixe',
      titel: 'Ein Stamm, viele Verben',
      items: [
        { text: '**suchen** → **ver**suchen (probieren) → **be**suchen (hingehen) → **unter**suchen (analysieren) → **er**suchen (formell bitten)', gl: '— derselbe Stamm, vier Bedeutungen: das Präfix entscheidet' },
        { text: 'Der Vertrag wurde **miss**achtet, das Vertrauen **zer**stört, die Zusammenarbeit **be**endet.' },
        { text: 'Die Stadt **ent**lastet den Verkehr, indem sie Busspuren einrichtet.', gl: '— ent- = Last wegnehmen' },
        { text: 'Das Team hat sich die Führung hart **er**kämpft.', gl: '— er- = Ergebnis erreicht' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Genus & Komposita',
      titel: 'Suffix und letztes Glied entscheiden',
      items: [
        { text: '**die** Digitalisierung, **die** Nachhaltigkeit, **die** Globalisierung — alle Modewörter der Prüfungsthemen sind feminin.', gl: '— -ung, -keit, -ion: das Suffix genügt' },
        { text: '**das** Missverständnis ↔ **die** Erkenntnis — bei -nis hilft nur Lernen.' },
        { text: 'der Kranken·versicherungs·beitrag → **der** Beitrag: maskulin, weil das letzte Glied zählt.' },
        { text: 'Das Konzept hat **Vor- und Nachteile**; wir prüfen **Kosten- und Zeitrahmen**.', gl: '— Ergänzungsstrich statt Wiederholung' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Kollokationen',
      titel: 'Feste Partner statt wörtlicher Übersetzung',
      items: [
        { text: 'Der Aufsichtsrat hat gestern eine Entscheidung **getroffen** und erste Maßnahmen **ergriffen**.', gl: '— nie *gemacht*, nie *genommen*' },
        { text: 'Die Opposition **übte** scharfe Kritik und **stellte** den Zeitplan **in Frage**.' },
        { text: 'Digitale Kompetenzen **spielen** dabei eine zentrale **Rolle**.' },
        { text: 'Wer Verantwortung **übernimmt**, muss auch Konsequenzen **ziehen** können.' },
        { text: 'Für Rückfragen **stehe** ich Ihnen gern **zur Verfügung**.', gl: '— die Standardformel der formellen Nachricht (Schreiben Teil 2)' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Erschließe die markierten Wörter über Präfix bzw. Suffix: Was bedeuten sie, welches Genus haben die Nomen?',
      aufgaben: [
        'Nach dem Skandal wuchs das **Misstrauen** gegenüber dem Vorstand.',
        'Die alte Fabrik **zerfällt** seit Jahren.',
        'Die **Entlassung** von zweihundert Beschäftigten wurde angekündigt.',
        'Der Autor hat sich den Erfolg über Jahrzehnte **erschrieben**.',
        'Die **Machbarkeit** des Projekts wird derzeit geprüft.',
      ],
      loesungen: [
        '**das Misstrauen** — miss- kehrt *Vertrauen* ins Negative; substantivierter Infinitiv → neutral.',
        '**zerfallen** — zer- = in Teile: das Gebäude löst sich Stück für Stück auf.',
        '**die Entlassung** — ent- = wegnehmen (aus dem Arbeitsverhältnis) + -ung → feminin.',
        '**sich erschreiben** — er- = durch die Tätigkeit erreichen: Er hat den Erfolg durch Schreiben erlangt.',
        '**die Machbarkeit** — machbar + -keit = die Eigenschaft, machbar zu sein; -keit → feminin.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Korrigiere die Kollokationsfehler — jeder Satz enthält genau einen typischen Übersetzungsfehler.',
      aufgaben: [
        'Die Geschäftsführung hat endlich eine Entscheidung gemacht.',
        'Die Gewerkschaft machte scharfe Kritik an dem Plan.',
        'Erfahrung spielt bei der Auswahl eine große Wichtigkeit.',
        'Die Regierung muss dringend Maßnahmen nehmen.',
        'Ich stehe Ihnen gern zur Disposition.',
        'Aus dem Fehlschlag sollten wir Konsequenzen nehmen.',
      ],
      loesungen: [
        '… eine Entscheidung **getroffen**. ~~El calco de «hacer/tomar» delata al no nativo al instante.~~',
        'Die Gewerkschaft **übte** scharfe Kritik an dem Plan.',
        'Erfahrung **spielt** bei der Auswahl eine große **Rolle**. — *Wichtigkeit* kollokiert nicht mit *spielen*.',
        'Die Regierung muss dringend Maßnahmen **ergreifen**.',
        'Ich stehe Ihnen gern zur **Verfügung**. — *Disposition* existiert, aber nicht in dieser Formel.',
        'Aus dem Fehlschlag sollten wir Konsequenzen **ziehen**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Vervollständige die Wortfamilien und schreibe dann mit jeder Familie einen C1-tauglichen Satz, der zusätzlich eine Kollokation aus dieser Lektion enthält.',
      aufgabe: '*1) wirken → die ___ → ___sam → die ___samkeit\n2) verantworten → die ___ → verantwortungs___ (Adjektiv)\n3) entscheiden → die ___ → ___end (Partizip als Adjektiv)*',
      loesung: '**Wortfamilien:** 1) die Wirkung → wirksam → die Wirksamkeit · 2) die Verantwortung → verantwortungsvoll (auch: verantwortungsbewusst) · 3) die Entscheidung → entscheidend.\n**Mögliche Sätze** (frei; bewertet werden Familie + Kollokation):\n*1) Um die Wirksamkeit der Kampagne zu erhöhen, wurden zusätzliche Maßnahmen ergriffen.\n2) Wer eine Führungsposition anstrebt, muss bereit sein, Verantwortung zu übernehmen — und zwar verantwortungsvoll.\n3) Bei der Standortwahl spielte die Verkehrsanbindung eine entscheidende Rolle.*',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2 · Lückentext (Wortbildung)',
      titel: 'Mini-Aufgabe · 6 Lücken',
      anweisung: 'Eine beliebte Variante des Lückentexts verlangt die **passende Form aus der Wortfamilie**: Das Grundwort steht in Klammern, du bildest Nomen, Adjektiv oder Verb — mit korrektem Suffix, Präfix und Genus.',
      absaetze: [
        'Die {1} *(digitalisieren)* der Verwaltung gilt als eine der größten Aufgaben des Jahrzehnts. Studien belegen die {2} *(wirken)* elektronischer Verfahren: Anträge werden schneller bearbeitet, {3} *(missverstehen)* zwischen Behörden und Bürgern nehmen ab. {4} *(entscheiden)* ist jedoch, dass ältere Menschen nicht den Anschluss verlieren. Kommunen, die entsprechende Maßnahmen {5} *(greifen)*, berichten von hoher Akzeptanz — ein Beleg für die {6} *(machbar)* des Wandels.',
      ],
      loesungen: [
        '{1} **Digitalisierung** — -ierung, feminin: *die Digitalisierung der Verwaltung*',
        '{2} **Wirksamkeit** — die Eigenschaft: wirksam + -keit; auch *die Wirkung* wäre hier grammatisch vertretbar, *Wirksamkeit* trifft „wie gut es wirkt“ genauer',
        '{3} **Missverständnisse** — miss- + -nis, hier Plural; Genus im Singular: das Missverständnis',
        '{4} **Entscheidend** — Partizip I als prädikatives Adjektiv am Satzanfang',
        '{5} **ergreifen** — die Kollokation *Maßnahmen ergreifen* liefert das Präfix er-',
        '{6} **Machbarkeit** — machbar + -keit, feminin',
      ],
      kommentar: 'Strategie: Bestimme zuerst die **verlangte Wortart** (Artikel davor → Nomen; vor Nomen → Adjektiv; nach Subjekt → Verb), dann erst die Form. Wortart vor Bedeutung — das spart in Teil 2 wertvolle Minuten.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lege dir für die zehn häufigsten Prüfungsthemen (Digitalisierung, Umwelt, Arbeit, Bildung …) je **fünf Kollokationen** zurecht — sie tragen im **Schreiben** und **Sprechen** ganze Absätze. Und im **Lesen** gilt: Ein unbekanntes 30-Buchstaben-Wort ist kein Grund zur Panik, sondern eine Aufgabe in Zerlegung — letztes Glied zuerst, Präfixe danach.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — und Bilanz des Blocks',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['Präfix steuert Bedeutung', 'suchen → versuchen → besuchen → untersuchen'],
        ['Suffix verrät Genus', '-ung/-heit/-keit feminin · -chen/-ment neutral'],
        ['Komposita: letztes Glied zählt, von hinten lesen', 'die Arbeitszeitverkürzung'],
        ['Ergänzungsstrich spart das Grundwort', 'Vor- und Nachteile'],
        ['Kollokationen als Paar lernen', 'eine Entscheidung treffen · Kritik üben'],
        ['Wortfamilien = Lückentext-Strategie', 'entscheiden → Entscheidung → entscheidend'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich erschließe unbekannte Verben über die Kernbedeutung ihres Präfixes.',
        'Ich bestimme das Genus abgeleiteter Nomen am Suffix und lese Komposita von hinten.',
        'Ich verwende mindestens zehn C1-Kollokationen aktiv und korrekt.',
        'Ich kann zu einem Grundwort die ganze Wortfamilie bilden — die Kernkompetenz für Lesen Teil 2.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist der Block „Sprachliche Konsolidierung“ abgeschlossen: Von der Nominalisierung bis zur Wortbildung hast du das gesamte sprachliche Werkzeug der Prüfung beisammen. Ab der nächsten Lektion wechselt die Perspektive — **von der Sprache zur Strategie**. Den Anfang macht das Modul Lesen im Überblick: 65 Minuten, vier Teile, und ein Plan, wie du deine Zeit und deine neuen Werkzeuge dort gewinnbringend einsetzt.',
    },
  ],
}
