// Lektion 40 · Reisen & Mobilität
//
// Bloque 3 — Themenfelder & Wortschatz. Urlaubsplanung, Verkehrsmittel
// (Deutschlandticket como concepto), Beschwerden unterwegs (Verspätung,
// Anschluss, Erstattung), nachhaltig reisen. Cierre del bloque temático:
// reciclar léxico y opiniones entre campos. Ausblick → 41 Prüfungssimulation 1.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B2', 'Prüfungsrelevanz: Sprechen Teil 1 & Hören'],
  h1: 'Reisen & Mobilität',
  lead: 'Urlaub planen, unterwegs Probleme lösen und über nachhaltiges Reisen sprechen — das letzte Themenfeld vor der Prüfungssimulation.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Reisewortschatz von der Buchung bis zur Erstattung verwenden',
        'über Verkehrsmittel und nachhaltiges Reisen mit klaren Argumenten sprechen',
        'einen kurzen Vortrag zum Thema strukturieren — das Format von Sprechen Teil 1',
        'Wortschatz und Redemittel aus allen Themenfeldern des Blocks wiederverwenden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Buchung, -en', kollokation: 'die Buchung stornieren', es: 'la reserva' },
        { wort: 'die Unterkunft, -künfte', kollokation: 'eine günstige Unterkunft finden', es: 'el alojamiento' },
        { wort: 'das Verkehrsmittel, -', kollokation: 'öffentliche Verkehrsmittel nutzen', es: 'el medio de transporte' },
        { wort: 'das Deutschlandticket', kollokation: 'mit dem Deutschlandticket durch ganz Deutschland fahren', es: 'el abono nacional de transporte' },
        { wort: 'die Strecke, -n', kollokation: 'eine lange Strecke zurücklegen', es: 'el trayecto' },
        { wort: 'umsteigen', kollokation: 'in Frankfurt umsteigen', es: 'hacer transbordo' },
        { wort: 'die Verspätung, -en', kollokation: 'der Zug hat zwanzig Minuten Verspätung', es: 'el retraso' },
        { wort: 'der Anschluss, -schlüsse', kollokation: 'den Anschluss verpassen', es: 'el enlace, la conexión' },
        { wort: 'ausfallen', kollokation: 'der Zug fällt aus', es: 'cancelarse (un tren, un vuelo)' },
        { wort: 'die Erstattung, -en', kollokation: 'eine Erstattung beantragen', es: 'el reembolso' },
        { wort: 'das Gepäck', kollokation: 'das Gepäck aufgeben', es: 'el equipaje' },
        { wort: 'nachhaltig', kollokation: 'nachhaltig reisen', es: 'sostenible' },
      ],
      hinweis: 'Man fährt **mit dem Zug**, **mit dem Bus**, **mit dem Auto** — ~~el „en tren“ español se calca mal: *in Zug* o *im Zug fahren* como medio de transporte es el error clásico.~~ Und das Deutschlandticket gilt im Nah- und Regionalverkehr, nicht im ICE.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Debatte',
      absaetze: [
        'Wie sollen wir reisen? Diese Frage wird in den deutschsprachigen Ländern leidenschaftlich diskutiert — zwischen Fernweh und Klimaschutz, zwischen Flugzeug und Deutschlandticket.',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Pro Flug',
          titel: 'Die Welt ist erreichbar geworden',
          text: 'Fliegen ist oft schnell und billig; ferne Länder sind __für viele zum ersten Mal erreichbar__. Reisen bildet, verbindet Kulturen — und der Tourismus sichert vielerorts Arbeitsplätze.',
        },
        {
          badge: 'Pro Bahn',
          titel: 'Das Klima reist mit',
          text: 'Kritiker halten dagegen: Kurzstreckenflüge belasten das Klima unnötig, wenn der Zug dieselbe Strecke schafft. Das Deutschlandticket macht Bus und Bahn im Alltag attraktiv — __auch wenn Verspätungen viele Nutzer frustrieren__.',
        },
        {
          badge: 'Mitte',
          titel: 'Weniger, aber bewusster',
          text: 'Die vermittelnde Position: nicht aufs Reisen verzichten, sondern __nachhaltiger reisen__ — seltener fliegen, dafür länger bleiben; Ziele in der Nähe entdecken; unterwegs öffentliche Verkehrsmittel nutzen.',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Strategie',
      titel: 'Ein Block, ein System: Wortschatz recyceln',
      absaetze: [
        'Mit dieser Lektion endet der Themenblock — und jetzt siehst du das Muster: **Die Themen teilen sich Wortschatz und Redemittel.** Die Reklamation aus Lektion 39 funktioniert genauso bei einer stornierten Buchung; das Abwägen aus Lektion 38 passt auf Fliegen vs. Bahn; die Struktur Pro–Contra–Mitte trägt jedes Prüfungsthema. Lerne also __ein System__ statt vier Listen: zwölf Wörter mit Kollokation pro Thema plus deine festen Meinungs-Redemittel. ~~Esta es la preparación real del examen: pocas estructuras, muy bien amortizadas.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Urlaubsplanung',
      kicker: 'Subthema 1',
      titel: 'Planen und buchen',
      items: [
        { text: 'Wir haben **eine günstige Unterkunft** direkt am See gefunden.' },
        { text: 'Ich musste die Buchung **stornieren**, weil ich krank geworden bin.' },
        { text: 'Für die Städtereise nutzen wir nur **öffentliche Verkehrsmittel**.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 2',
      titel: 'Probleme unterwegs',
      items: [
        { text: 'Der Zug hatte **vierzig Minuten Verspätung**, sodass wir **den Anschluss verpasst** haben.' },
        { text: 'Mein Flug **ist ausgefallen** — jetzt beantrage ich **eine Erstattung**.' },
        { text: 'Bei großer Verspätung gibt es oft **ein Recht auf Erstattung** — heb das Ticket auf.', gl: '— sin comprobante no hay reembolso' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 3',
      titel: 'Nachhaltig reisen',
      items: [
        { text: 'Dieses Jahr bleiben wir in Europa und fahren **mit dem Zug** nach Wien.' },
        { text: 'Mit dem Deutschlandticket erkunden viele Leute Regionen, **die sie vorher nie besucht haben**.' },
        { text: 'Nachhaltig reisen heißt für mich: **seltener, aber länger** unterwegs sein.' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Meinung im Vortrag',
      gruppen: [
        {
          fn: 'Einen kurzen Vortrag strukturieren',
          saetze: [
            { satz: 'Ich möchte heute über das Thema nachhaltiges Reisen sprechen.' },
            { satz: 'Zunächst nenne ich einige Vorteile, danach gehe ich auf die Probleme ein.' },
            { satz: 'Ein Beispiel aus meiner Erfahrung: Letzten Sommer …' },
            { satz: 'Zusammenfassend lässt sich sagen, dass es auf die Balance ankommt.', gloss: 'la frase de cierre que sirve para cualquier Vortrag' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz',
      frage: 'Welches Wort aus dem Kernwortschatz passt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'das Geld, das man zurückbekommt, wenn der Zug ausfällt',
        'der Zug, den man nach dem Umsteigen erreichen muss',
        'eine Reservierung rückgängig machen',
        'Hotel, Ferienwohnung oder Hostel — der Oberbegriff',
      ],
      loesungen: [
        '**die Erstattung**',
        '**der Anschluss**',
        '**(die Buchung) stornieren**',
        '**die Unterkunft**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Unterwegs — Sätze vervollständigen',
      frage: 'Ergänze das passende Wort in der richtigen Form.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Der ICE hat heute leider dreißig Minuten ___ .',
        'In Mannheim müssen Sie in den Regionalzug ___ .',
        'Wegen des Sturms ___ gestern viele Flüge ___ .',
        'Wir fahren am liebsten ___ Zug in den Urlaub. ~~(ojo con la preposición)~~',
      ],
      loesungen: [
        'Der ICE hat dreißig Minuten **Verspätung**.',
        'In Mannheim müssen Sie **umsteigen**.',
        'Wegen des Sturms **fielen** viele Flüge **aus** / sind viele Flüge **ausgefallen**.',
        'Wir fahren am liebsten **mit dem** Zug. ~~(mit + Dativ, no „en el tren“)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe 80–100 Wörter: Erzähle von einer Reise, bei der etwas schiefging — und was du daraus gelernt hast. Nutze mindestens fünf Wörter aus dem Kernwortschatz.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Letzten Sommer wollte ich mit dem Zug nach Hamburg fahren. Die Strecke war lang, und ich musste zweimal umsteigen. Schon der erste Zug hatte eine Stunde Verspätung, sodass ich den Anschluss in Hannover verpasste. Am Ende kam ich nachts an, und meine Unterkunft war schon geschlossen! Daraus habe ich zwei Dinge gelernt: Erstens plane ich beim Umsteigen jetzt immer mehr Zeit ein, und zweitens hebe ich alle Tickets auf — die Erstattung für die Verspätung habe ich nämlich problemlos bekommen. Trotzdem reise ich weiter mit der Bahn: Es ist einfach nachhaltiger. ~~(~95 Wörter)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1 — Vortrag',
      titel: 'Nachhaltig reisen — nur ein Trend?',
      anweisung: 'In Sprechen Teil 1 hältst du einen Vortrag von etwa vier Minuten. Thema: „Nachhaltig reisen — nur ein Trend?“ Nenne Vor- und Nachteile, gib ein Beispiel aus deiner Erfahrung und formuliere ein Fazit. Skizziere den Vortrag mit den Redemitteln der Lektion.',
      absaetze: [
        'Bewährter Aufbau: Einleitung (Thema nennen + Gliederung ankündigen) → Vorteile → Nachteile → eigenes Beispiel → Fazit. Genau diese Struktur erwarten die Prüfer.',
      ],
      loesungLabel: 'Mögliche Lösung (Stichpunkte + Kernsätze)',
      loesungen: [
        '**Einleitung:** „Ich möchte heute über das Thema nachhaltiges Reisen sprechen. Zunächst nenne ich einige Vorteile, danach gehe ich auf die Probleme ein.“',
        '**Vorteile:** weniger Belastung für das Klima · Ziele in der Nähe entdecken · mit Bahn und Deutschlandticket oft günstig.',
        '**Nachteile:** Zugreisen dauern länger und sind nicht immer zuverlässig (Verspätungen, verpasste Anschlüsse) · ferne Ziele ohne Flug kaum erreichbar.',
        '**Beispiel:** „Ein Beispiel aus meiner Erfahrung: Letzten Sommer bin ich mit dem Zug nach Wien gefahren — länger als ein Flug, aber viel entspannter.“',
        '**Fazit:** „Zusammenfassend lässt sich sagen, dass nachhaltiges Reisen mehr als ein Trend ist — aber es muss zum Leben der Menschen passen.“',
      ],
      kommentar: 'Vier Minuten füllst du nicht mit vielen Ideen, sondern mit **wenigen Punkten, die du ausführst**: Behauptung → Begründung → Beispiel. Die Gliederung anzukündigen bringt sofort Punkte bei der Kohärenz.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beim Vortrag zahlt sich der ganze Block aus: **Jedes der vier Themenfelder kann drankommen.** Struktur und Redemittel bleiben immer gleich; nur die zwölf Themenwörter wechselst du aus. Übe denselben Vortrag einmal pro Themenfeld — laut und mit der Uhr.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Baustein', 'Das Wichtigste'],
      zeilen: [
        ['Planung', 'die Buchung (stornieren) · die Unterkunft · die Strecke · das Verkehrsmittel'],
        ['Probleme', 'die Verspätung · den Anschluss verpassen · ausfallen · die Erstattung beantragen'],
        ['Nachhaltig', 'mit dem Zug fahren · das Deutschlandticket (Nahverkehr) · seltener, aber länger'],
        ['Vortrag', 'Einleitung + Gliederung → Pro → Contra → Beispiel → Fazit'],
        ['Block-Strategie', 'ein System: 12 Wörter pro Thema + feste Redemittel, überall wiederverwendet'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich beschreibe eine Reise von der Buchung bis zur Erstattung — auch wenn etwas schiefgeht.',
        'Ich sage mit dem Zug fahren und nutze den Mobilitätswortschatz korrekt.',
        'Ich strukturiere einen kurzen Vortrag mit Einleitung, Pro, Contra, Beispiel und Fazit.',
        'Ich kann Redemittel und Argumente aus allen vier Themenfeldern wiederverwenden.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist der Themenblock komplett. Jetzt beginnt die **letzte Etappe**: In der nächsten Lektion startet die **Prüfungssimulation 1** — alle vier Module unter realen Bedingungen, mit Zeitplan und Auswertung. Zeit zu zeigen, was du kannst.',
    },
  ],
}
