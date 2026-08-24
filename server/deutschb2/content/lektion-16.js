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

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welches Verb steckt im Nomen? Und was bedeutet der Satz?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Die Benutzung der Waschmaschine ist nach 22 Uhr untersagt.“',
        '„Bei Verspätung informieren Sie bitte das Sekretariat.“',
        '„Das Betreten der Baustelle ist verboten.“',
      ],
      loesungen: [
        '**benutzen** — Man darf die Waschmaschine nach 22 Uhr nicht benutzen.',
        '**sich verspäten** — Wenn Sie sich verspäten, informieren Sie das Sekretariat.',
        '**betreten** — Man darf die Baustelle nicht betreten. ~~Típico cartel alemán: substantivierter Infinitiv + verboten/untersagt.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Transformiere: Nebensatz → nominale Wendung (oder zurück).',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Weil die Straße gesperrt war, kamen wir zu spät. → (wegen …)',
        'Wenn das Wetter schlecht ist, fällt das Grillfest aus. → (bei …)',
        'Zum Anmelden brauchen Sie Ihren Ausweis. → (Wenn …)',
      ],
      loesungen: [
        '**Wegen der gesperrten Straße** kamen wir zu spät. ~~Fíjate: el Partizip II de la Lektion 13 reaparece como atributo.~~',
        '**Bei schlechtem Wetter** fällt das Grillfest aus.',
        '**Wenn Sie sich anmelden** (möchten), brauchen Sie Ihren Ausweis.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib drei Regeln für eine WG (piso compartido) im Nominalstil: eine mit -ung, eine mit substantiviertem Infinitiv, eine mit bei.',
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Die **Reinigung** der Küche übernimmt jede Woche eine andere Person.',
        '**Das Rauchen** ist nur auf dem Balkon erlaubt.',
        '**Bei Problemen** sprechen wir das Thema beim WG-Abend an. ~~Cualquier regla plausible vale — evaluamos el patrón nominal, no el contenido.~~',
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
