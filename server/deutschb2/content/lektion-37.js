// Lektion 37 · Medien & Digitalisierung
//
// Bloque 3 — Themenfelder & Wortschatz. Estructura temática B2:
// Kernwortschatz como lista, Erklärung = debate cotidiano con posturas,
// Beispiele por subtema, Redemittel de opinión, 3 Übungen, Prüfungsbezug real.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B2', 'Prüfungsrelevanz: Schreiben Teil 1 & Sprechen'],
  h1: 'Medien & Digitalisierung',
  lead: 'Über Smartphones, soziale Medien und Bildschirmzeit sprechen und schreiben — mit dem Wortschatz, den das Thema in jeder Prüfung braucht.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Kernwortschatz zu Medien und Digitalisierung mit den richtigen Kollokationen verwenden',
        'die typischen Positionen der Debatte um Bildschirmzeit und Datenschutz wiedergeben',
        'deine eigene Meinung zum Thema in einem Forumsbeitrag begründen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'das Smartphone / das Handy', kollokation: 'ständig aufs Handy schauen', es: 'el móvil' },
        { wort: 'die App, -s', kollokation: 'eine App herunterladen', es: 'la aplicación' },
        { wort: 'das soziale Netzwerk, -e', kollokation: 'in sozialen Netzwerken aktiv sein', es: 'la red social' },
        { wort: 'posten', kollokation: 'ein Foto posten', es: 'publicar (en redes)' },
        { wort: 'die Nachricht, -en', kollokation: 'eine Nachricht verschicken', es: 'el mensaje' },
        { wort: 'der Streamingdienst, -e', kollokation: 'einen Streamingdienst abonnieren', es: 'la plataforma de streaming' },
        { wort: 'die Bildschirmzeit', kollokation: 'die Bildschirmzeit begrenzen', es: 'el tiempo de pantalla' },
        { wort: 'der Datenschutz', kollokation: 'auf den Datenschutz achten', es: 'la protección de datos' },
        { wort: 'der Nutzer, -', kollokation: 'die Daten der Nutzer sammeln', es: 'el usuario' },
        { wort: 'das Passwort, -wörter', kollokation: 'ein sicheres Passwort wählen', es: 'la contraseña' },
        { wort: 'die Quelle, -n', kollokation: 'die Quelle einer Information prüfen', es: 'la fuente' },
        { wort: 'abschalten', kollokation: 'abends bewusst abschalten', es: 'desconectar' },
      ],
      hinweis: 'Achtung, Artikel: **das** Handy, **das** Internet, **die** App. Man surft und recherchiert **im Internet** — ~~no calques „en internet“: *auf Internet* o *in Internet* sin artículo son errores típicos.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Debatte',
      absaetze: [
        'Kaum ein Thema wird in Deutschland, Österreich und der Schweiz so oft diskutiert wie der Umgang mit digitalen Medien: am Küchentisch, in der Schule, in den Nachrichten. Drei Positionen hörst du immer wieder — und alle drei brauchst du für die Prüfung.',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Pro',
          titel: 'Digitalisierung erleichtert den Alltag',
          text: 'Mit dem Smartphone bleibt man in Kontakt, findet Informationen in Sekunden und erledigt Termine, Bankgeschäfte und Einkäufe von unterwegs. Für viele ist das __ein Gewinn an Zeit und Freiheit__.',
        },
        {
          badge: 'Contra',
          titel: 'Zu viel Bildschirm, zu wenig Kontrolle',
          text: 'Kritiker warnen: Wir schauen ständig aufs Handy, konzentrieren uns schlechter und geben __zu viele persönliche Daten__ preis. Besonders bei Kindern machen sich viele Eltern Sorgen um die Bildschirmzeit.',
        },
        {
          badge: 'Mitte',
          titel: 'Bewusster Umgang statt Verbote',
          text: 'Die vermittelnde Position: Das Problem ist nicht das Gerät, sondern der Umgang damit. Wer __Medienkompetenz__ lernt — Quellen prüfen, Pausen machen, Datenschutz-Einstellungen nutzen —, profitiert von der Technik, ohne von ihr abhängig zu werden.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Alltag mit dem Smartphone',
      kicker: 'Subthema 1',
      titel: 'Nutzung im Alltag',
      items: [
        { text: 'Ich schaue morgens **als Erstes aufs Handy** — das möchte ich eigentlich ändern.' },
        { text: 'Ohne meine Apps würde ich weder den Bus noch meine Termine finden.' },
        { text: 'Am Wochenende versuche ich, **bewusst abzuschalten** und das Handy wegzulegen.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 2',
      titel: 'Soziale Medien & Streaming',
      items: [
        { text: 'In sozialen Netzwerken **poste** ich selten etwas, aber ich lese viel mit.' },
        { text: 'Wir haben zwei Streamingdienste **abonniert** — fernsehen wie früher tun wir kaum noch.' },
        { text: 'Man sollte **die Quelle prüfen**, bevor man eine Nachricht weiterschickt.', gl: '— clave contra las fake news' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 3',
      titel: 'Datenschutz & Kinder',
      items: [
        { text: 'Viele Apps **sammeln die Daten der Nutzer**, ohne dass man es merkt.' },
        { text: 'Für jedes Konto wähle ich **ein sicheres Passwort** — nie zweimal dasselbe.' },
        { text: 'Meine Schwester **begrenzt die Bildschirmzeit** ihrer Kinder auf eine Stunde pro Tag.' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Meinung äußern',
      gruppen: [
        {
          fn: 'Position beziehen und begründen',
          saetze: [
            { satz: 'Meiner Meinung nach hat die Digitalisierung mehr Vorteile als Nachteile.' },
            { satz: 'Ich bin davon überzeugt, dass Verbote bei Kindern wenig bringen.' },
            { satz: 'Einerseits spart das Smartphone Zeit, andererseits kostet es auch viel Zeit.', gloss: 'einerseits … andererseits = por un lado … por otro' },
            { satz: 'Aus meiner Erfahrung kann ich sagen, dass feste Regeln helfen.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz',
      frage: 'Welches Wort passt zur Definition?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'die Zeit, die man täglich vor Handy, Tablet oder Fernseher verbringt',
        'der Schutz persönlicher Informationen im Internet',
        'ein Foto oder einen Text in sozialen Netzwerken veröffentlichen',
        'prüfen, woher eine Information stammt',
      ],
      loesungen: [
        '**die Bildschirmzeit**',
        '**der Datenschutz**',
        '**posten**',
        '**die Quelle prüfen**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Kollokationen einsetzen',
      frage: 'Ergänze das passende Verb in der richtigen Form.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Kannst du mir die App zeigen? Ich möchte sie auch ___ . ~~(descargar)~~',
        'Viele Firmen ___ die Daten ihrer Nutzer und verkaufen sie weiter.',
        'Wir haben letzten Monat einen neuen Streamingdienst ___ .',
        'Abends lege ich das Handy weg — ich muss lernen, richtig ___ .',
      ],
      loesungen: [
        'Ich möchte sie auch **herunterladen**.',
        'Viele Firmen **sammeln** die Daten ihrer Nutzer.',
        'Wir haben einen neuen Streamingdienst **abonniert**.',
        'Ich muss lernen, richtig **abzuschalten**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe 80–100 Wörter: Wie nutzt du dein Smartphone — und was würdest du gern ändern? Nutze mindestens fünf Wörter aus dem Kernwortschatz und ein Redemittel.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ich nutze mein Smartphone jeden Tag: Ich verschicke Nachrichten, höre Musik und bin in einem sozialen Netzwerk aktiv, obwohl ich selten etwas poste. Einerseits erleichtern mir die Apps den Alltag, andererseits ist meine Bildschirmzeit viel zu hoch — oft mehr als vier Stunden. Meiner Meinung nach liegt das Problem nicht am Gerät, sondern am Umgang damit. Deshalb möchte ich zwei Dinge ändern: abends bewusst abschalten und beim Datenschutz vorsichtiger sein, zum Beispiel mit sicheren Passwörtern. ~~(~85 Wörter — vale cualquier texto que use el léxico y justifique la opinión.)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1 — Forumsbeitrag',
      titel: 'Feste Regeln für die Bildschirmzeit?',
      anweisung: 'Im Forum einer Elternzeitschrift wird diskutiert: „Brauchen Kinder feste Regeln für die Bildschirmzeit?“ Schreibe einen Forumsbeitrag (ca. 150 Wörter): Äußere deine Meinung, nenne Vor- und Nachteile fester Regeln und begründe mit einem Beispiel.',
      absaetze: [
        'So gehst du vor: kurzer Einstieg ins Thema → deine Position → ein Argument dafür, ein Argument dagegen → Beispiel → Schluss mit Fazit.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Bildschirmzeit ist bei uns zu Hause fast jeden Tag ein Thema, deshalb finde ich die Frage sehr wichtig. Meiner Meinung nach brauchen Kinder klare Regeln — aber keine strengen Verbote.',
        'Einerseits helfen feste Zeiten den Kindern, auch andere Dinge zu tun: Sport, Freunde treffen, lesen. Ohne Regeln schauen viele stundenlang Videos, sodass am Ende keine Zeit für Hausaufgaben bleibt. Andererseits kann ein totales Verbot das Interesse nur noch größer machen, und die Kinder lernen nicht, selbst mit Medien umzugehen. Außerdem gehören digitale Medien heute zum Alltag — auch in der Schule arbeiten die Kinder mit Tablets und Lernprogrammen.',
        'Meine Schwester macht es aus meiner Sicht richtig: Ihre Kinder dürfen eine Stunde pro Tag ans Tablet, aber sie entscheiden selbst, wann. Das funktioniert erstaunlich gut: So lernen sie Medienkompetenz, ohne dass die Eltern ständig kontrollieren müssen. Mein Fazit: Regeln ja — aber gemeinsam vereinbart, nicht einfach von oben bestimmt. ~~(~150 Wörter)~~',
      ],
      kommentar: 'Der Beitrag erfüllt alle drei Punkte der Aufgabe (Meinung, Vor- und Nachteile, Beispiel), nutzt Konnektoren (deshalb, einerseits … andererseits, sodass) und den Themenwortschatz — genau das bewerten die Kriterien Erfüllung, Kohärenz, Wortschatz und Strukturen.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Medien und Digitalisierung gehören zu den häufigsten Prüfungsthemen — im Forumsbeitrag, im Vortrag und in den Lesetexten. Lerne die zwölf Wörter oben **mit ihren Kollokationen**: „die Bildschirmzeit begrenzen“ bringt mehr Punkte als „Bildschirmzeit“ allein.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Baustein', 'Das Wichtigste'],
      zeilen: [
        ['Wortschatz', 'das Handy, die App, posten, die Bildschirmzeit, der Datenschutz, abschalten'],
        ['Kollokationen', 'eine App herunterladen · die Bildschirmzeit begrenzen · die Quelle prüfen'],
        ['Debatte', 'Pro (Alltag leichter) · Contra (Daten, Ablenkung) · Mitte (Medienkompetenz)'],
        ['Redemittel', 'Meiner Meinung nach … · Einerseits …, andererseits … · Ich bin überzeugt, dass …'],
        ['Typischer Fehler', 'im Internet (nicht *auf Internet*) · das Handy, die App'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verwende den Medienwortschatz mit den richtigen Artikeln und Kollokationen.',
        'Ich kann die drei Positionen der Bildschirmzeit-Debatte wiedergeben.',
        'Ich kann meine Meinung zum Thema in einem Forumsbeitrag begründen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Vom Bildschirm in die eigenen vier Wände: In der nächsten Lektion geht es um **Wohnen & Zusammenleben** — Wohnungssuche mit Kaltmiete und Kaution, Nachbarschaft und die Frage Stadt oder Land. Die Redemittel von heute nimmst du einfach mit.',
    },
  ],
}
