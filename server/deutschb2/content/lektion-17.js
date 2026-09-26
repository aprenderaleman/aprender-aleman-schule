// Lektion 17 · Präpositionen mit Genitiv
//
// Bloque 1 «Grammatik & Struktur» — Abschluss des Blocks. Die B2-Gruppe:
// wegen, trotz, während, innerhalb/außerhalb, statt (+ aufgrund als
// formale Variante). Umgangssprachlicher Dativ vs. Prüfungs-Genitiv.
// Synthese: ein Forumsbeitrag, in dem die Lektionen 4–17 zusammen
// auftreten. Ausblick → Lektion 18 (Modul Lesen — Überblick).

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: Schreiben & Lesen'],
  h1: 'Präpositionen mit Genitiv',
  lead: 'Wegen, trotz, während, innerhalb und statt: die Genitiv-Präpositionen des B2 — und warum die Prüfung den Genitiv will, auch wenn die Straße Dativ spricht.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die B2-Präpositionen mit Genitiv korrekt verwenden',
        'den Genitiv der Nominalgruppe sicher bilden (des Mannes, der Kinder)',
        'gesprochenen Dativ (wegen dem) und geschriebenen Genitiv unterscheiden',
        'die Grammatik der Lektionen 4–17 in einem Forumsbeitrag wiedererkennen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die B2-Gruppe',
      kopf: ['Präposition', 'Bedeutung', 'Beispiel'],
      zeilen: [
        ['wegen', 'por, a causa de', 'wegen des schlechten Wetters'],
        ['trotz', 'a pesar de', 'trotz der hohen Kosten'],
        ['während', 'durante', 'während der Prüfung'],
        ['innerhalb', 'dentro de (lugar/plazo)', 'innerhalb einer Woche'],
        ['außerhalb', 'fuera de', 'außerhalb der Öffnungszeiten'],
        ['statt / anstatt', 'en vez de', 'statt einer E-Mail'],
        ['==aufgrund==', 'debido a ~~(más formal que wegen)~~', 'aufgrund der aktuellen Lage'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — der Genitiv in 30 Sekunden',
      card: true,
      absaetze: [
        'Der Genitiv hat nur zwei Artikel-Formen: **des** (maskulin/neutral, das Nomen bekommt __-s/-es__: *des Regen**s**, des Kind**es***) und **der** (feminin/Plural, ohne Endung: *der Stadt, der Kinder*). Adjektive dazwischen enden — Dauerregel aus Lektion 13 — ==immer auf -en==: *wegen des schlecht**en** Wetters, trotz der hoh**en** Mieten*.',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Register',
          titel: 'Straße vs. Prüfung: wegen dem oder wegen des?',
          text: 'Gesprochen hörst du überall __wegen dem Stau, trotz dem Regen__ — Dativ. Das ist real, aber **umgangssprachlich**. In der Prüfung (Schreiben!) gilt der Standard: __wegen **des** Staus, trotz **des** Regens__. ~~Regla práctica: lo que escribas en el examen, en Genitiv; lo que oigas en el Hörverstehen, puede venir en Dativ.~~',
        },
        {
          badge: 'Zeit/Raum',
          titel: 'innerhalb & außerhalb — Frist und Ort',
          text: 'Beide funktionieren räumlich (__innerhalb der Stadt__) und zeitlich (__innerhalb einer Woche__ = im Laufe einer Woche). Die Frist-Bedeutung ist Gold für die formelle Nachricht: *Bitte antworten Sie **innerhalb von** 14 Tagen* — mit __von + Dativ__, wenn kein Artikel oder Adjektiv da ist (*innerhalb von zwei Wochen*).',
        },
        {
          badge: 'Brücke',
          titel: 'Präposition ↔ Nebensatz',
          text: 'Jede dieser Präpositionen hat einen verbalen Zwilling aus den Lektionen 4, 5 und 16: __wegen ↔ weil__, __trotz ↔ obwohl__, __während ↔ während + Nebensatz__, __statt ↔ anstatt … zu__. Wer beide Richtungen kann, versteht jeden Prüfungstext — und variiert im Schreiben den Stil.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — die Gruppe im Einsatz',
      kicker: 'Genitiv',
      titel: 'Grund, Gegengrund, Zeit',
      items: [
        { text: '**Wegen des** Streiks fahren heute keine Züge.', gl: '— maskulin → des + -s' },
        { text: '**Trotz der** hohen Miete bleibt sie in der Innenstadt.', gl: '— feminin → der, adjetivo -en' },
        { text: '**Während des** Studiums hat er in einem Café gejobbt.', gl: '— „durante“: Präposition, nicht Konnektor' },
        { text: '**Aufgrund der** aktuellen Nachfrage verlängern wir das Angebot.', gl: '— variante formal de wegen' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Frist & Ersatz',
      titel: 'innerhalb, außerhalb, statt',
      items: [
        { text: 'Bitte melden Sie sich **innerhalb der** nächsten zwei Wochen an.', gl: '— plazo formal' },
        { text: '**Außerhalb der** Sprechzeiten erreichen Sie uns per E-Mail.', gl: '— típico texto de reglas' },
        { text: '**Statt einer** Antwort bekam ich nur eine automatische Mail.', gl: '— en vez de una respuesta' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'Dieselbe Idee, drei Register',
      zeilen: [
        { satz: 'Weil es regnete, fiel das Konzert aus.', label: 'Nebensatz — neutral (Lektion 4)' },
        { satz: 'Wegen des Regens fiel das Konzert aus.', label: 'Genitiv — schriftlich, Prüfungsstandard' },
        { satz: 'Wegen dem Regen ist das Konzert ausgefallen.', label: 'Dativ — nur gesprochen, nicht im Schreiben!' },
      ],
    },

    { type: 'rule' },

    // ── Synthese: der Forumsbeitrag ───────────────────────────────
    {
      type: 'modell',
      eyebrow: 'Erklärung — die Synthese des Blocks',
      thema: 'Forumsbeitrag: „Sollten Innenstädte autofrei werden?“ — so treten die Lektionen 4–17 gemeinsam auf',
      woerter: '~150 Wörter',
      absaetze: [
        'Ich wohne in einer Stadt, **in der** das Zentrum seit einem Jahr autofrei ist — und ich möchte nicht mehr zurück. **Wegen des dichten Verkehrs** war die Luft früher kaum auszuhalten; **die steigenden Unfallzahlen** waren ein weiteres Problem. Vor allem für Kinder und ältere Menschen war der Weg durch das Zentrum oft gefährlich.',
        '**Obwohl** viele Geschäftsleute zuerst protestierten, kamen **innerhalb weniger Monate** sogar mehr Kunden als vorher. Die Stadt hat viel getan, **um den Umstieg zu erleichtern**: Neue Buslinien wurden eingerichtet, und **statt der alten Parkplätze** gibt es jetzt Cafés und Spielplätze. Auch die Händler profitieren **davon**, **dass** die Menschen jetzt länger in der Innenstadt bleiben.',
        'Natürlich hängt der Erfolg **davon ab, ob** es gute Alternativen gibt — niemand lässt das Auto stehen, wenn kein Bus fährt. **Trotz aller Kritik** bin ich deshalb überzeugt: **Bei guter Planung** gewinnen alle. Ich freue mich schon **darauf**, dass andere Städte diesem Beispiel folgen.',
      ],
      annotationen: [
        { tag: 'L12', text: 'Relativsatz mit Präposition: eine Stadt, in der …' },
        { tag: 'L13', text: 'Partizip als Attribut: die steigenden Unfallzahlen' },
        { tag: 'L14', text: 'Infinitivsatz: um den Umstieg zu erleichtern' },
        { tag: 'L15', text: 'Verb + Präposition & Korrelat: hängt davon ab, ob … / freue mich darauf, dass …' },
        { tag: 'L16', text: 'Nominalstil: bei guter Planung (= wenn gut geplant wird)' },
        { tag: 'L17', text: 'Genitiv-Präpositionen: wegen des Verkehrs, trotz aller Kritik, statt der Parkplätze, innerhalb weniger Monate' },
        { tag: 'L4–10', text: 'Konnektoren & Passiv: obwohl, deshalb, wurden eingerichtet' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Genitiv statt Dativ — so schreibst du es in der Prüfung',
      items: [
        { text: '**Wegen des** Staus kam der Techniker erst am Nachmittag.', gl: '— gesprochen oft: wegen dem Stau' },
        { text: '**Trotz der** vielen Beschwerden hat die Hausverwaltung nichts unternommen.', gl: '— a pesar de las muchas quejas' },
        { text: '**Während des** Essens bleibt das Handy bei uns in der Tasche.', gl: '— no: während dem Essen' },
        { text: '**Aufgrund der** großen Nachfrage gibt es für den Kurs eine Warteliste.', gl: '— formal: típico en avisos' },
        { text: 'Die Rechnung muss **innerhalb von** 30 Tagen bezahlt werden.', gl: '— sin artículo → innerhalb von + Dativ' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Präposition ↔ Nebensatz',
      titel: 'Die Brücke in beide Richtungen',
      items: [
        { text: '**Trotz seiner Erkältung** ist Jonas zum Training gegangen. = **Obwohl** er erkältet war, …', gl: '— trotz ↔ obwohl' },
        { text: '**Während der Renovierung** wohnen wir bei meinen Eltern. = **Während** die Wohnung renoviert wird, …', gl: '— Passiv (Lektion 10)' },
        { text: '**Statt eines Anrufs** hat sie mir eine lange Nachricht geschrieben. = **Anstatt** mich **anzurufen**, …', gl: '— anstatt … zu (Lektion 14)' },
        { text: '**Wegen des schlechten Wetters** wurde der Ausflug verschoben. = **Weil** das Wetter schlecht war, …', gl: '— wegen ↔ weil' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Prüfungsformat · Auswahlaufgabe',
      titel: '3 Lücken',
      anweisung: 'Eine formelle Nachricht — wähle die korrekte Form.',
      absaetze: [
        'Sehr geehrte Frau Dr. Kaminski, {1} eines Termins beim Zahnarzt kann ich am Donnerstag leider nicht am Seminar teilnehmen. {2} der kommenden Woche werde ich die verpassten Inhalte selbstständig nacharbeiten. {3} der geplanten Präsentation würde ich Ihnen gern eine schriftliche Ausarbeitung abgeben.',
      ],
      optionen: [
        '(1) a) Wegen · b) Trotz · c) Während',
        '(2) a) Außerhalb · b) Innerhalb · c) Statt',
        '(3) a) Wegen · b) Innerhalb · c) Statt',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **a) Wegen** — der Termin ist der Grund für die Absage.',
        '{2} **b) Innerhalb** — Frist: im Laufe der kommenden Woche.',
        '{3} **c) Statt** — Ersatz: Ausarbeitung anstelle der Präsentation.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In der **formellen Nachricht** (Schreiben Teil 2) ist *wegen/aufgrund + Genitiv* fast immer der erste Satz nach der Anrede — der Grund deines Schreibens. Merksatz für die Endung: ==des + -s, der ohne alles== (*wegen des Termins, wegen der Prüfung*). Und niemals *wegen dem* aufs Papier bringen, egal wie vertraut es klingt.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Präposition', 'Funktion', 'verbaler Zwilling'],
      zeilen: [
        ['wegen / aufgrund + Gen.', 'Grund', 'weil, da'],
        ['trotz + Gen.', 'Gegengrund', 'obwohl'],
        ['während + Gen.', 'Zeitraum', 'während + Nebensatz'],
        ['innerhalb / außerhalb + Gen.', 'Frist & Ort', 'in / nicht in …'],
        ['statt + Gen.', 'Ersatz', 'anstatt … zu'],
        ['Register', 'Prüfung = Genitiv', 'gesprochen oft Dativ'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde den Genitiv nach wegen, trotz, während, innerhalb und statt korrekt.',
        'Ich schreibe in der Prüfung Genitiv, auch wenn ich im Alltag Dativ höre.',
        'Ich wechsle zwischen Präposition und Nebensatz (trotz ↔ obwohl).',
        'Ich erkenne die Strukturen der Lektionen 4–17 in einem echten Forumsbeitrag.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist der Grammatik-Block komplett: Von den Konnektoren bis zum Genitiv hast du jetzt das ganze Werkzeug der B2-Prüfung. Ab der nächsten Lektion wechselt die Perspektive — **von der Sprache zur Strategie**: das Modul Lesen im Überblick, mit seinen fünf Teilen, dem Zeitplan und der Frage, wo man am leichtesten Punkte gewinnt.',
    },
  ],
}
