// Lektion 16 · Nominalisierung ↔ Verbalisierung
//
// Bloque 1 «Grammatik & Struktur». B2-Version des Themas: -ung,
// substantivierter Infinitiv, beim/zum + Infinitiv, Basistrans-
// formationen (weil→wegen, wenn→bei) — eine Einführung, ohne die
// Dichte des C1. Ausblick → Lektion 17.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: Lesen & Schreiben'],
  h1: 'Nominalisierung ↔ Verbalisierung',
  lead: 'Aus Verben werden Nomen und zurück: die Anmeldung, das Lernen, beim Einkaufen — der erste Schritt in den schriftlichen Stil, den die Prüfungstexte sprechen.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Nomen auf -ung und substantivierte Infinitive bilden und erkennen',
        'beim + Infinitiv (während) und zum + Infinitiv (Zweck) verwenden',
        'einfache Transformationen beherrschen: weil → wegen, wenn → bei',
        'Nominalstil in Prüfungstexten in verständliche Sätze zurückübersetzen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Verb → Nomen',
      kopf: ['Verb', 'Nomen', 'español'],
      zeilen: [
        ['sich anmelden', 'die Anmeldung', 'la inscripción'],
        ['sich bewerben', 'die Bewerbung', 'la candidatura'],
        ['lösen', 'die Lösung', 'la solución'],
        ['erfahren', 'die Erfahrung', 'la experiencia'],
        ['sich verspäten', 'die Verspätung', 'el retraso'],
        ['prüfen', 'die Prüfung', 'el examen'],
        ['einladen', 'die Einladung', 'la invitación'],
        ['lernen', 'das Lernen', 'el (hecho de) aprender'],
        ['einkaufen', 'das Einkaufen', 'el hacer la compra'],
        ['rauchen', 'das Rauchen', 'el fumar ~~— «Rauchen verboten»~~'],
      ],
    },
    {
      type: 'prose',
      absaetze: [
        'Zwei Muster, zwei Genera: Nomen auf **-ung** sind ==immer feminin== (Plural -en), der **substantivierte Infinitiv** ist ==immer neutral== (das Lernen, das Einkaufen) und wird großgeschrieben.',
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — warum Nominalstil?',
      card: true,
      absaetze: [
        'Formelle Texte — Hausordnungen, Prüfungsordnungen, amtliche Mitteilungen — sagen nicht *„wenn Sie sich anmelden“*, sondern *„**bei der Anmeldung**“*. Für B2 reicht ein doppeltes Ziel: solche Sätze im **Lesen (Teil 5)** sicher verstehen und im **Schreiben** ein paar nominale Wendungen gezielt einsetzen. ~~No hace falta escribir como un funcionario — sí entenderlo.~~',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'beim',
          titel: 'beim + Infinitiv = während',
          text: '__**Beim** Lernen__ höre ich Musik. = **Während** ich lerne, höre ich Musik. ~~«mientras / al + infinitivo»~~. Auch mit -ung: __bei der Anmeldung__ = wenn/während man sich anmeldet.',
        },
        {
          badge: 'zum',
          titel: 'zum + Infinitiv = Zweck',
          text: '__**Zum** Lernen__ brauche ich Ruhe. = **Um** zu lernen, brauche ich Ruhe. ~~«para + infinitivo» en versión nominal — la tercera forma de decir «para», tras um…zu y damit (Lektion 14).~~',
        },
        {
          badge: 'wegen',
          titel: 'weil → wegen + Nomen',
          text: 'Der Grund als Nomen: __**Weil** es regnete__ → __**wegen** des Regens__. Das Subjekt oder Objekt des Nebensatzes wird zum Genitiv-Attribut: *weil der Zug sich verspätete → wegen der Verspätung des Zuges*.',
        },
        {
          badge: 'bei',
          titel: 'wenn → bei + Nomen',
          text: 'Die Bedingung als Nomen: __**Wenn** es Fragen gibt__ → __**bei** Fragen__. · __Wenn es regnet__ → __bei Regen__ (findet das Fest drinnen statt). Sehr häufig in Ansagen und Regeltexten.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — die zwei Richtungen',
      kicker: 'Verb → Nomen',
      titel: 'Nominalisierung',
      items: [
        { text: 'Wir müssen das Problem lösen. → Wir suchen eine **Lösung** für das Problem.', gl: '— lösen → die Lösung' },
        { text: 'Sie hat sich beworben. → Ihre **Bewerbung** ist angekommen.', gl: '— reflexivo desaparece' },
        { text: '**Das Pendeln** zur Arbeit kostet mich zwei Stunden täglich.', gl: '— substantivierter Infinitiv como sujeto' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'beim / zum',
      titel: 'Die zwei Klassiker',
      items: [
        { text: '**Beim Kochen** höre ich immer Podcasts.', gl: '= mientras cocino' },
        { text: '**Zum Arbeiten** brauche ich einen ruhigen Platz.', gl: '= para trabajar' },
        { text: '**Bei der Prüfung** ist das Handy verboten.', gl: '= durante el examen' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'Verbal ↔ nominal — derselbe Satz, zwei Register',
      zeilen: [
        { satz: 'Weil so viele teilnehmen, brauchen wir einen größeren Raum. → Wegen der hohen Teilnehmerzahl brauchen wir einen größeren Raum.', label: 'weil → wegen + Genitiv' },
        { satz: 'Wenn Sie Fragen haben, rufen Sie uns an. → Bei Fragen rufen Sie uns an.', label: 'wenn → bei + Dativ' },
        { satz: 'Während wir umziehen, bleibt das Büro geschlossen. → Während des Umzugs bleibt das Büro geschlossen.', label: 'während funktioniert in beiden Registern' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Nominalstil auf Schildern und in Mitteilungen',
      items: [
        { text: '**Das Betreten** des Rasens ist verboten.', gl: '— típico cartel: substantivierter Infinitiv + verboten/untersagt' },
        { text: '**Bei Verlust** des Schlüssels wenden Sie sich bitte an den Hausmeister.', gl: '= wenn Sie den Schlüssel verlieren' },
        { text: '**Wegen der Verspätung** des Busses hat die Prüfung zehn Minuten später begonnen.', gl: '= weil sich der Bus verspätet hat' },
        { text: '**Nach der Anmeldung** erhalten Sie eine Bestätigung per E-Mail.', gl: '= nachdem Sie sich angemeldet haben' },
        { text: '**Zum Einkaufen** fahre ich lieber mit dem Fahrrad als mit dem Auto.', gl: '= para hacer la compra' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Nomen → Verb',
      titel: 'Zurück in den verbalen Stil',
      items: [
        { text: '**Die Lösung** des Problems dauert länger als geplant. → Es dauert länger als geplant, das Problem zu **lösen**.', gl: '— Infinitivsatz mit zu (Lektion 14)' },
        { text: '**Beim Einkaufen** vergesse ich immer die Hälfte. → **Wenn** ich **einkaufe**, vergesse ich immer die Hälfte.', gl: '' },
        { text: 'Vielen Dank für **die Einladung**! → Vielen Dank, dass ihr uns **eingeladen** habt!', gl: '' },
        { text: '**Bei der Bewerbung** hat mir meine Schwester geholfen. → Meine Schwester hat mir geholfen, als ich mich **beworben** habe.', gl: '— el reflexivo vuelve con el verbo' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Prüfungsformat · Verständnisaufgabe',
      titel: 'Formeller Regeltext',
      anweisung: 'Im Modul Lesen (Teil 5) ist der Regeltext nominal formuliert. Entscheide: Welche verbale Aussage entspricht der Regel?',
      absaetze: [
        '„§ 3 — Die **Nutzung** des Fitnessraums ist nur nach **vorheriger Anmeldung** an der Rezeption möglich. **Bei Verlust** der Zugangskarte wird eine Gebühr von 15 Euro erhoben.“',
      ],
      optionen: [
        '(1) a) Man muss sich anmelden, bevor man den Fitnessraum benutzt. · b) Die Rezeption meldet alle Gäste automatisch an.',
        '(2) a) Die Zugangskarte kostet immer 15 Euro. · b) Wer die Karte verliert, zahlt 15 Euro.',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **a)** — „nach vorheriger Anmeldung“ = nachdem man sich angemeldet hat.',
        '{2} **b)** — „bei Verlust“ = wenn man die Karte verliert. ~~La estrategia: verbaliza mentalmente cada Nomen antes de contestar.~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Deine wichtigste Waffe im Lesen Teil 5: **rückwärts verbalisieren**. Frag bei jedem -ung-Nomen: welches Verb steckt darin, wer macht es? *„die Kündigung des Vertrags“* → jemand kündigt den Vertrag. Im Schreiben reichen zwei, drei nominale Wendungen (*bei Fragen, nach der Anmeldung, zum Lernen*) — mehr wirkt auf B2 schnell unnatürlich.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Muster', 'Regel', 'Beispiel'],
      zeilen: [
        ['-ung', 'immer feminin, Plural -en', 'anmelden → die Anmeldung'],
        ['das + Infinitiv', 'immer neutral, großgeschrieben', 'das Lernen, das Rauchen'],
        ['beim + Inf.', '= während', 'beim Kochen'],
        ['zum + Inf.', '= Zweck (para)', 'zum Lernen'],
        ['weil → wegen', 'Grund nominal, + Genitiv', 'wegen des Regens'],
        ['wenn → bei', 'Bedingung nominal, + Dativ', 'bei Fragen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde Nomen auf -ung und substantivierte Infinitive mit dem richtigen Genus.',
        'Ich verwende beim + Infinitiv für Gleichzeitigkeit und zum + Infinitiv für den Zweck.',
        'Ich forme weil-Sätze in wegen + Nomen um und zurück.',
        'Ich kann einen nominalen Regeltext mental verbalisieren.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Bei *wegen des Regens* hast du ihn schon benutzt: den **Genitiv nach Präpositionen**. Die nächste Lektion sortiert die B2-Gruppe komplett — *wegen, trotz, während, innerhalb, statt* — und schließt damit den Grammatik-Block ab: mit einem Forumsbeitrag, in dem alles aus den Lektionen 4–17 zusammen auftritt.',
    },
  ],
}
