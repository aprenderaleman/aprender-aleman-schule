// Lektion 01 · Das Zertifikat B2 im Überblick
//
// Bloque 0 «Einführung» — qué certifica el B2, los 4 módulos,
// el sistema modular 100/60 y el camino de la Anmeldung al Zeugnis.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau B2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Das Zertifikat B2 im Überblick',
  lead: 'Was das B2 zertifiziert, wie die vier Module aufgebaut sind und wie der Weg von der Anmeldung bis zum Zeugnis aussieht.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'erklären, was das Niveau B2 nach dem GER bedeutet und wozu das Zertifikat dient',
        'die vier Module mit Zeit und Aufbau nennen',
        'das modulare System (100 Punkte, bestanden ab 60) verstehen',
        'die Schritte von der Anmeldung bis zum Zeugnis planen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Sprache der Prüfung',
      items: [
        { wort: 'das Modul, -e', kollokation: 'die vier Module einzeln ablegen', es: 'el módulo (parte del examen)' },
        { wort: 'eine Prüfung ablegen', kollokation: 'die B2-Prüfung ablegen', es: 'presentarse a un examen' },
        { wort: 'bestehen', kollokation: 'ein Modul mit 60 Punkten bestehen', es: 'aprobar' },
        { wort: 'durchfallen', kollokation: 'bei einer Prüfung durchfallen', es: 'suspender' },
        { wort: 'die Anmeldung, -en', kollokation: 'die Anmeldung zur Prüfung', es: 'la inscripción' },
        { wort: 'sich anmelden', kollokation: 'sich für einen Termin anmelden', es: 'inscribirse' },
        { wort: 'die Bewertung, -en', kollokation: 'die Bewertung der Leistung', es: 'la evaluación, la calificación' },
        { wort: 'die Punktzahl, -en', kollokation: 'die nötige Punktzahl erreichen', es: 'la puntuación' },
        { wort: 'das Ergebnis, -se', kollokation: 'das Ergebnis online abrufen', es: 'el resultado' },
        { wort: 'das Zeugnis, -se', kollokation: 'das Zeugnis erhalten', es: 'el certificado, el diploma' },
        { wort: 'der Modellsatz, ·sätze', kollokation: 'den Modellsatz durcharbeiten', es: 'el examen modelo oficial' },
        { wort: 'wiederholen', kollokation: 'nur ein Modul wiederholen', es: 'repetir' },
      ],
      hinweis: '*Ablegen* heißt nur „die Prüfung machen“, nicht „bestehen“. ~~Ojo: «ablegen» = presentarse; «bestehen» = aprobar. No los mezcles como en «hacer/aprobar un examen».~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — was das B2 zertifiziert',
      absaetze: [
        'Das Zertifikat B2 bestätigt das Niveau **B2 des GER** ~~(el Marco Común Europeo, MCER)~~: die __selbstständige Sprachverwendung__ auf fortgeschrittenem Niveau. Auf B2 verstehst du die Hauptinhalte komplexer Texte, diskutierst spontan mit Muttersprachlern und schreibst klare, detaillierte Texte, in denen du **einen Standpunkt begründest**.',
        'Das Zertifikat ist international anerkannt und **unbegrenzt gültig**. Man braucht es typischerweise für den **Beruf** (z. B. Berufsanerkennung im Gesundheitsbereich), für **Studium und Ausbildung** und in manchen Fällen für die **Einbürgerung** — je nach Land und Behörde.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die vier Module',
      kopf: ['Modul', 'Zeit', 'Aufbau'],
      zeilen: [
        ['Lesen', '65 Min.', '5 Teile — Artikel & Detailverständnis (T1–2), Meinungen zuordnen (T3), Kommentar & Standpunkt (T4), formeller Regeltext (T5)'],
        ['Hören', 'ca. 40 Min.', '4 Teile — Gespräche & Ansagen, Interview, Diskussion, Vortrag'],
        ['Schreiben', '75 Min.', '2 Teile — Forumsbeitrag (~150 Wörter) + formelle Nachricht (~100 Wörter)'],
        ['Sprechen', 'ca. 15 Min.', 'Paarprüfung — Vortrag mit Nachfragen (T1) + Diskussion (T2), mit 15 Min. Vorbereitung'],
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — das modulare System',
      card: true,
      titel: '100 Punkte pro Modul, bestanden ab 60',
      absaetze: [
        'Die Prüfung ist **modular**: Jedes Modul wird **einzeln** bewertet — mit maximal __100 Punkten__, bestanden ab __60 Punkten__. Du kannst alle vier Module an einem Tag ablegen oder sie auf mehrere Termine verteilen.',
        'Der große Vorteil: Fällst du in einem Modul durch, **wiederholst du nur dieses Modul** — die bestandenen bleiben gültig. ~~No es «todo o nada»: cada módulo es un examen independiente con su propio certificado.~~',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — von der Anmeldung zum Zeugnis',
      steps: [
        { titel: 'Prüfungszentrum und Termin finden', text: 'Auf der Website deines Prüfungszentrums die Termine prüfen — beliebte Termine sind schnell voll, also **früh planen**.' },
        { titel: 'Anmelden und Gebühr bezahlen', text: 'Die Anmeldung läuft meist online. Du wählst, **welche Module** du ablegst, und bezahlst die Prüfungsgebühr pro Modul oder für das Gesamtpaket.' },
        { titel: 'Gezielt vorbereiten', text: 'Mit diesem Kurs — und mit dem **offiziellen Modellsatz**, damit du das Format vor dem Prüfungstag genau kennst.' },
        { titel: 'Prüfung ablegen', text: 'Am Prüfungstag brauchst du deinen **Ausweis**. Lesen, Hören und Schreiben laufen immer häufiger am Computer — das digitale Format ist das Thema der nächsten Lektion.' },
        { titel: 'Ergebnis und Zeugnis', text: 'Das Ergebnis rufst du in der Regel online ab; danach bekommst du das **Zeugnis** mit der Punktzahl und dem Prädikat für jedes bestandene Modul.' },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — wozu man das B2 braucht',
      kicker: 'im Alltag',
      titel: 'Typische Situationen',
      items: [
        { text: 'Für die **Berufsanerkennung** als Pflegekraft verlangt die Behörde das Zertifikat B2.', gl: '— trabajo' },
        { text: 'Viele Hochschulen akzeptieren B2 für die **Zulassung** zu bestimmten Studiengängen.', gl: '— estudios' },
        { text: 'In manchen Fällen zählt das B2 als Sprachnachweis für die **Einbürgerung**.', gl: '— nacionalidad, según el caso' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Niveau',
      titel: 'Was du auf B2 kannst',
      items: [
        { text: 'Ich verstehe die **Hauptinhalte** komplexer Texte — auch zu abstrakten Themen.' },
        { text: 'Ich diskutiere **spontan und fließend**, sodass ein normales Gespräch mit Muttersprachlern gut möglich ist.' },
        { text: 'Ich schreibe klare, detaillierte Texte und **begründe meinen Standpunkt** mit Vor- und Nachteilen.' },
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
        'Wer ein Modul nicht besteht, muss die ganze Prüfung wiederholen.',
        'Ein Modul ist ab 60 von 100 Punkten bestanden.',
        'Das Modul Sprechen ist eine Paarprüfung.',
        'Das Zertifikat B2 ist nur zwei Jahre gültig.',
      ],
      loesungen: [
        '**Falsch** — die Prüfung ist modular: Man wiederholt nur das nicht bestandene Modul.',
        '**Richtig** — 100 Punkte pro Modul, bestanden ab 60.',
        '**Richtig** — Vortrag + Diskussion, in der Regel mit einem Partner oder einer Partnerin.',
        '**Falsch** — das Zeugnis ist unbegrenzt gültig (Institutionen können aber ein aktuelles Zeugnis verlangen).',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Lies das Ergebnis und entscheide.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Marta hat: Lesen 72, Hören 55, Schreiben 81, Sprechen 63. Welche Module hat sie bestanden? Was macht sie jetzt?',
        'Diego kann nur samstags zur Prüfung und will nicht alles an einem Tag ablegen. Geht das?',
      ],
      loesungen: [
        'Bestanden: **Lesen, Schreiben, Sprechen** (≥ 60). Hören (55) hat sie nicht bestanden — sie meldet sich **nur für das Modul Hören** neu an; die drei bestandenen bleiben gültig.',
        '**Ja** — die Module kann man auf verschiedene Termine verteilen und einzeln ablegen.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Dein Ziel: Schreib 3–4 Sätze — warum machst du das B2, und bis wann willst du es schaffen? Nutze mindestens zwei Wörter aus dem Kernwortschatz.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ich möchte das Zertifikat B2 **ablegen**, weil ich mich in Deutschland um eine Stelle bewerben will. Mein Ziel ist es, alle vier Module beim ersten Versuch zu **bestehen**. Deshalb arbeite ich jeden Tag mit diesem Kurs und melde mich für einen Termin im Sommer an. ~~Vale cualquier variante con tu motivo real — lo importante: 2+ palabras del Kernwortschatz y verbos bien colocados.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Alle Module · Zuordnung',
      titel: 'Welche Aufgabe gehört zu welchem Modul?',
      anweisung: 'Ordne jede Aufgabenbeschreibung einem Modul zu: Lesen, Hören, Schreiben oder Sprechen.',
      absaetze: [
        '{1} Sie hören ein Interview und wählen bei jeder Frage die richtige Antwort aus.\n{2} Sie schreiben einen Beitrag für ein Online-Forum und begründen Ihre Meinung (ca. 150 Wörter).\n{3} Sie ordnen mehrere Meinungen zu einem Thema den passenden Personen zu.\n{4} Sie halten einen kurzen Vortrag und beantworten anschließend Nachfragen.\n{5} Sie lesen einen formellen Regeltext, z. B. eine Hausordnung.',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Hören** — Teil 2 ist ein Interview.',
        '{2} **Schreiben** — Teil 1, der Forumsbeitrag.',
        '{3} **Lesen** — Teil 3, Meinungen zuordnen.',
        '{4} **Sprechen** — Teil 1, Vortrag + Nachfragen.',
        '{5} **Lesen** — Teil 5, der formelle Regeltext.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lade dir schon **jetzt** den offiziellen Modellsatz herunter und schau ihn einmal komplett durch. Wer das Format kennt, verliert am Prüfungstag **keine Zeit mit den Anweisungen** — und genau diese Minuten fehlen sonst bei den schweren Aufgaben.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Was zertifiziert B2?', 'Selbstständige Sprachverwendung auf fortgeschrittenem Niveau (GER)'],
        ['Wie viele Module?', '4 — Lesen, Hören, Schreiben, Sprechen, einzeln ablegbar'],
        ['Wann bestanden?', 'Ab 60 von 100 Punkten pro Modul'],
        ['Nicht bestanden?', 'Nur dieses Modul wiederholen — der Rest bleibt gültig'],
        ['Der Weg', 'Termin → Anmeldung → Vorbereitung → Prüfung → Ergebnis & Zeugnis'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann erklären, was das Niveau B2 bedeutet und wozu das Zertifikat dient.',
        'Ich kenne die vier Module mit Zeit und Aufbau.',
        'Ich weiß, wie das modulare System mit 100/60 Punkten funktioniert.',
        'Ich kenne die Schritte von der Anmeldung bis zum Zeugnis.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Lesen, Hören und Schreiben legst du immer häufiger **am Computer** ab. In der nächsten Lektion lernst du das digitale Prüfungsformat (CBT) kennen: wie du navigierst, markierst und mit deutscher Tastatur schreibst — inklusive **ä, ö, ü und ß**.',
    },
  ],
}
