// Lektion 25 · Hören: Gespräch & Diskussion (Teil 3-4)
//
// Cierra el bloque Hören (23-25). Práctica con un Gespräch-Transkript
// (~150 palabras) y una Diskussion en formato de examen (zuordnen).
// Marcadores del habla (also, na ja, eigentlich) + tabla-síntesis del
// módulo completo. Ausblick → 26 «Modul Schreiben».

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Hören Teil 3-4'],
  h1: 'Hören: Gespräch & Diskussion (Teil 3-4)',
  lead: 'Zwei oder mehr Stimmen, verschiedene Meinungen: In Teil 3 und 4 zählt **wer was sagt**. ~~Voces, opiniones y las muletillas del alemán hablado.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'in einem Gespräch die Sprecher unterscheiden',
        'einfache Meinungen erkennen: dafür, dagegen, unentschieden',
        'die kleinen Wörter des gesprochenen Deutsch verstehen (*also, na ja, eigentlich*)',
        'Aussagen den richtigen Personen zuordnen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Meinungen im Gespräch',
      items: [
        { wort: 'die Meinung', kollokation: 'meiner Meinung nach', es: 'la opinión' },
        { wort: 'zustimmen', kollokation: 'Ich stimme dir zu.', es: 'estar de acuerdo' },
        { wort: 'dafür sein', kollokation: 'Ich bin klar dafür.', es: 'estar a favor' },
        { wort: 'dagegen sein', kollokation: 'Ich bin total dagegen.', es: 'estar en contra' },
        { wort: 'recht haben', kollokation: 'Da hast du recht.', es: 'tener razón' },
        { wort: 'der Vorschlag', kollokation: 'einen Vorschlag machen', es: 'la propuesta' },
        { wort: 'sich einigen', kollokation: 'Wir einigen uns auf Samstag.', es: 'ponerse de acuerdo' },
        { wort: 'überzeugt sein', kollokation: 'Ich bin nicht überzeugt.', es: 'estar convencido/a' },
        { wort: 'der Vorteil / der Nachteil', kollokation: 'ein großer Vorteil', es: 'la ventaja / la desventaja' },
        { wort: 'unterbrechen', kollokation: 'Darf ich kurz unterbrechen?', es: 'interrumpir' },
        { wort: 'der Moderator / die Moderatorin', kollokation: 'die Moderatorin stellt Fragen', es: 'el/la moderador(a)' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Schritte zum „Wer sagt was?“',
      steps: [
        {
          titel: 'Stimmen unterscheiden',
          text: 'Die Namen fallen __am Anfang__: „Ich begrüße Frau Kern und Herrn Roth.“ Notiere sofort Kürzel (K, R) und Mann/Frau — danach erkennst du die Stimme.',
        },
        {
          titel: 'Meinungssignale hören',
          text: 'Dafür: __„gute Idee“, „finde ich auch“__. Dagegen: __„das sehe ich anders“__. Unentschieden: __„es kommt darauf an“, „einerseits … andererseits“__.',
        },
        {
          titel: 'Auf das „aber“ warten',
          text: 'Erst Zustimmung, dann Wende: __„Schon, aber …“__ — die echte Meinung steht meistens **nach** dem *aber*. ~~Lo que cuenta viene después del «aber».~~',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die kleinen Wörter des Sprechens',
      kopf: ['Du hörst …', 'Das bedeutet', 'Beispiel'],
      zeilen: [
        ['also', 'jetzt kommt meine Meinung ~~(«pues» — ¡no significa «también»!)~~', '„Also, ich finde das gut.“'],
        ['na ja', 'Zweifel, halbes Nein', '„Na ja, ich weiß nicht.“'],
        ['eigentlich', 'ja — aber gleich kommt ein Aber', '„Eigentlich schon, aber …“'],
        ['genau / stimmt', 'Zustimmung', '„Genau, das meine ich.“'],
        ['ach so', 'jetzt verstehe ich', '„Ach so, jetzt ist es klar.“'],
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Diese Wörter tragen **keine Information** — sie zeigen eine Haltung. Nutze sie als **Signal**: Nach *na ja* kommt ein Zweifel, nach *eigentlich* fast immer ein *aber*. ~~Son señales de tráfico, no vocabulario.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Zustimmung',
      titel: 'Ja sagen',
      items: [
        { text: '„Da hast du völlig **Recht**.“' },
        { text: '„Das finde ich **auch**.“' },
        { text: '„**Genau**, so sehe ich das auch.“' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Ablehnung',
      titel: 'Nein sagen',
      items: [
        { text: '„Das sehe ich ganz **anders**.“' },
        { text: '„**Na ja**, ich bin nicht so überzeugt.“' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Dazwischen',
      titel: 'Halb ja, halb nein',
      items: [
        { text: '„**Eigentlich** schon, **aber** es ist mir zu teuer.“' },
        { text: '„Es **kommt darauf an**.“', gl: '— depende' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      kicker: 'Kernwortschatz',
      titel: 'Meinungen im Gespräch',
      items: [
        { text: '„Ich bin **dafür**, dass wir den Ausflug am Samstag machen.“', gl: '— klare Zustimmung' },
        { text: '„Darf ich kurz **unterbrechen**? Ich habe einen **Vorschlag**.“' },
        { text: '„Der **Vorteil** ist der Preis, der **Nachteil** ist die lange Fahrt.“' },
        { text: '„Nach einer Stunde haben wir uns endlich **geeinigt**.“', gl: '~~por fin nos pusimos de acuerdo~~' },
        { text: '„Ich **stimme** Ihnen **zu**, Frau Berger — aber nur zum Teil.“', gl: '— nach dem *aber* kommt die Einschränkung' },
        { text: 'Die **Moderatorin** fragt: „Herr Okafor, sind Sie jetzt **überzeugt**?“' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Signale',
      titel: 'Wo steht die echte Meinung?',
      items: [
        { text: '„**Eigentlich** gefällt mir die Idee, **aber** sie ist zu kompliziert.“', gl: '— dagegen' },
        { text: '„**Na ja**, ich weiß nicht, ob das klappt.“', gl: '— Zweifel' },
        { text: '„**Also**, ich finde den Vorschlag wirklich gut.“', gl: '— dafür' },
        { text: '„**Einerseits** spart man Geld, **andererseits** verliert man Zeit.“', gl: '— unentschieden' },
        { text: '„**Genau**, da hast du **Recht**.“', gl: '— Zustimmung' },
      ],
    },

    { type: 'rule' },

    // ── Transkript zum Mitlesen ───────────────────────────────────
    {
      type: 'modell',
      eyebrow: 'Transkript — so klingt ein Alltagsgespräch (Teil 3)',
      thema: 'Lies das Gespräch nur einmal in normalem Tempo — oder lass es dir mit verteilten Rollen vorlesen. ~~(En el examen es audio.)~~ Achte darauf, wer was meint.',
      absaetze: [
        '==Lena:== Hallo Jonas! Na, wie läuft es mit der neuen Wohnung?',
        '==Jonas:== Ach, na ja. Die Wohnung ist schön, aber die Miete ist echt hoch. Ich überlege, ob ich mir eine Wohnung mit jemandem teile.',
        '==Lena:== Eine WG? Das finde ich super! Ich habe drei Jahre in einer WG gewohnt — das war eine tolle Zeit.',
        '==Jonas:== Schon, aber ich arbeite viel zu Hause. Ich brauche Ruhe.',
        '==Lena:== Verstehe. Aber allein wohnen ist doch auch manchmal langweilig, oder?',
        '==Jonas:== Eigentlich nicht. Also, ich koche gern allein und höre laut Musik — das geht in einer WG nicht so einfach.',
        '==Lena:== Na gut. Und was machst du jetzt?',
        '==Jonas:== Ich suche erst mal eine kleinere Wohnung. Die ist billiger, und ich habe trotzdem meine Ruhe.',
        '==Lena:== Das klingt vernünftig.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören · Teil 4',
      titel: 'Diskussion — Aussagen zuordnen',
      anweisung: 'Wie in der Prüfung: erst die drei Aussagen lesen, dann das Transkript **einmal** in Echtzeit lesen ~~(en el examen: audio)~~. Wer sagt das — Frau Kern oder Herr Roth?',
      absaetze: [
        '**Moderatorin:** Willkommen zu unserer Sendung! Unser Thema heute: Sollen Geschäfte auch am Sonntag öffnen? Frau Kern, was meinen Sie?',
        '**Frau Kern:** Also, ich bin klar dafür. Viele Menschen arbeiten die ganze Woche und haben nur am Sonntag Zeit zum Einkaufen.',
        '**Herr Roth:** Das sehe ich ganz anders. Der Sonntag ist für die Familie da. Und die Verkäuferinnen und Verkäufer wollen auch mal frei haben.',
        '**Frau Kern:** Na ja, aber niemand muss am Sonntag arbeiten — das kann doch freiwillig sein.',
        '**Herr Roth:** Da bin ich nicht überzeugt.',
      ],
      optionen: [
        '(1) „Die Geschäfte sollen am Sonntag öffnen.“',
        '(2) „Der freie Sonntag ist wichtig für die Familie.“',
        '(3) „Sonntagsarbeit könnte freiwillig sein.“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '(1) **Frau Kern** — „ich bin klar dafür“.',
        '(2) **Herr Roth** — „der Sonntag ist für die Familie da“.',
        '(3) **Frau Kern** — ihr zweiter Beitrag: Auch spät im Gespräch kommen neue Argumente.',
      ],
      kommentar: 'Die Aussagen auf dem Aufgabenblatt sind **Paraphrasen** — im Audio hörst du andere Wörter mit derselben Bedeutung.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Notiere in Teil 4 bei jedem Namen die **erste Meinung** (K = dafür, R = dagegen). Die Diskussion läuft schnell — mit dieser Mini-Tabelle ordnest du auch spätere Aussagen sicher zu.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — das Modul Hören komplett',
      kopf: ['Teil', 'Textsorte', 'Deine Aufgabe', 'Schlüsselstrategie'],
      zeilen: [
        ['1-2', 'Durchsagen & kurze Texte', 'Fakten ankreuzen', 'Zahlen notieren · *nicht … sondern*'],
        ['3', 'Alltagsgespräch', 'richtig oder falsch', 'Sprecher unterscheiden'],
        ['4', 'Diskussion', 'Wer sagt was?', 'Meinungssignale · auf das *aber* warten'],
        ['Training', 'Transkripte + Modellsatz', 'einmal lesen/hören', 'Lösung abdecken, ehrlich kontrollieren'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich unterscheide in einem Gespräch die Sprecher und notiere ihre erste Meinung.',
        'Ich erkenne, ob jemand dafür, dagegen oder unentschieden ist.',
        'Ich verstehe *also*, *na ja* und *eigentlich* als Signale — nicht als Vokabeln.',
        'Ich kann Aussagen den richtigen Personen zuordnen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist das Modul Hören komplett: Fakten in Teil 1-2, Meinungen in Teil 3-4 — und deine Trainingsmethode mit Transkripten und Modellsatz. Weiter geht es mit dem **Modul Schreiben**: drei Texte in 60 Minuten — informelle E-Mail, Forumsbeitrag und formelle Nachricht.',
    },
  ],
}
