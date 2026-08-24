// Lektion 38 · Wohnen & Zusammenleben
//
// Bloque 3 — Themenfelder & Wortschatz. Wohnungssuche mit el léxico real
// (Kaltmiete, Nebenkosten, Kaution, WG), Nachbarschaft & Hausordnung
// (enlace con Lesen Teil 5), Stadt vs. Land.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B2', 'Prüfungsrelevanz: Lesen Teil 5 & Schreiben'],
  h1: 'Wohnen & Zusammenleben',
  lead: 'Wohnungssuche, Nachbarschaft und die Frage Stadt oder Land — mit dem Vokabular, das in echten Anzeigen, Mietverträgen und Hausordnungen steht.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Wortschatz der Wohnungssuche verstehen und verwenden (Kaltmiete, Nebenkosten, Kaution, WG)',
        'formelle Regeltexte wie eine Hausordnung lesen — das Format von Lesen Teil 5',
        'Argumente für Stadt und Land abwägen und die eigene Wahl begründen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Kaltmiete, -n', kollokation: 'die Kaltmiete beträgt 700 Euro', es: 'el alquiler sin gastos' },
        { wort: 'die Nebenkosten (Pl.)', kollokation: 'die Nebenkosten kommen noch dazu', es: 'los gastos (agua, calefacción …)' },
        { wort: 'die Kaution, -en', kollokation: 'die Kaution zurückbekommen', es: 'la fianza' },
        { wort: 'die WG, -s (Wohngemeinschaft)', kollokation: 'in eine WG ziehen', es: 'el piso compartido' },
        { wort: 'der Mietvertrag, -verträge', kollokation: 'den Mietvertrag unterschreiben', es: 'el contrato de alquiler' },
        { wort: 'der Vermieter, -', kollokation: 'den Vermieter informieren', es: 'el casero / arrendador' },
        { wort: 'die Besichtigung, -en', kollokation: 'einen Termin zur Besichtigung vereinbaren', es: 'la visita (al piso)' },
        { wort: 'die Anzeige, -n', kollokation: 'auf eine Anzeige antworten', es: 'el anuncio' },
        { wort: 'die Hausordnung, -en', kollokation: 'sich an die Hausordnung halten', es: 'el reglamento del edificio' },
        { wort: 'die Ruhezeit, -en', kollokation: 'die Ruhezeiten einhalten', es: 'las horas de silencio' },
        { wort: 'der Nachbar, -n', kollokation: 'sich gut mit den Nachbarn verstehen', es: 'el vecino' },
        { wort: 'umziehen', kollokation: 'in eine andere Stadt umziehen', es: 'mudarse' },
      ],
      hinweis: 'Kaltmiete + Nebenkosten = **Warmmiete** — so rechnen alle Anzeigen. Und Vorsicht: ~~„alquilar“ vale para los dos lados, el alemán no:~~ der Mieter **mietet** die Wohnung, der Vermieter **vermietet** sie.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Debatte',
      absaetze: [
        'Wohnen ist in den deutschsprachigen Ländern ein Dauerthema: In den großen Städten ist die Wohnungssuche schwierig und teuer, auf dem Land gibt es Platz, aber weite Wege. Drei Positionen prägen die Diskussion.',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Stadt',
          titel: 'Kurze Wege, hohes Tempo — hohe Mieten',
          text: 'Wer in der Stadt wohnt, hat Arbeit, Ärzte, Kultur und Freunde __in der Nähe__ und braucht oft kein Auto. Der Preis dafür: hohe Mieten, viele Bewerber pro Besichtigung und wenig Platz.',
        },
        {
          badge: 'Land',
          titel: 'Mehr Platz, mehr Ruhe — mehr Pendeln',
          text: 'Auf dem Land bekommt man __mehr Wohnung für weniger Geld__, dazu Garten und Ruhe. Dafür muss man pendeln, und ohne Auto wird der Alltag schnell kompliziert.',
        },
        {
          badge: 'Mitte',
          titel: 'WG, Stadtrand, Homeoffice',
          text: 'Viele suchen den Kompromiss: eine __WG__ macht die Stadt bezahlbar — nicht nur für Studierende —, der Stadtrand verbindet beides, und wer im Homeoffice arbeitet, kann weiter draußen wohnen, ohne täglich zu pendeln.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Wohnungssuche',
      kicker: 'Subthema 1',
      titel: 'Von der Anzeige zum Vertrag',
      items: [
        { text: 'Ich habe auf zwanzig Anzeigen geantwortet und nur **zwei Termine zur Besichtigung** bekommen.' },
        { text: 'Die Kaltmiete klingt günstig, aber **mit Nebenkosten** sind es 950 Euro.' },
        { text: 'Bevor du den Mietvertrag **unterschreibst**, lies ihn in Ruhe durch.' },
        { text: 'Die Kaution — meistens **zwei bis drei Kaltmieten** — bekommst du beim Auszug zurück.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 2',
      titel: 'Nachbarschaft & Hausordnung',
      items: [
        { text: 'In unserem Haus gilt die Hausordnung: **Ruhezeiten** ab 22 Uhr und am Sonntag.' },
        { text: 'Mit den Nachbarn **verstehen wir uns gut** — wir gießen sogar gegenseitig die Blumen.' },
        { text: 'Wer eine Party plant, **informiert die Nachbarn** am besten vorher.', gl: '— la convivencia alemana en una frase' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 3',
      titel: 'Stadt oder Land',
      items: [
        { text: 'Wir sind aufs Land **umgezogen**, weil wir uns die Stadt nicht mehr leisten konnten.' },
        { text: 'In der WG zahle ich weniger Miete, **dafür** teile ich Küche und Bad mit drei Leuten.' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — abwägen und begründen',
      gruppen: [
        {
          fn: 'Vor- und Nachteile gegeneinander abwägen',
          saetze: [
            { satz: 'Für das Leben in der Stadt spricht, dass alles in der Nähe ist.' },
            { satz: 'Dagegen spricht allerdings, dass die Mieten sehr hoch sind.' },
            { satz: 'Für mich überwiegen die Vorteile des Landlebens.', gloss: 'überwiegen = pesar más, predominar' },
            { satz: 'Es kommt darauf an, in welcher Lebensphase man ist.' },
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
        'das Geld, das man als Sicherheit zahlt und beim Auszug zurückbekommt',
        'die Miete ohne Heizung, Wasser und andere Kosten',
        'eine Wohnung, die sich mehrere Personen teilen',
        'der Text mit den Regeln für alle Bewohner eines Hauses',
      ],
      loesungen: [
        '**die Kaution**',
        '**die Kaltmiete**',
        '**die WG (Wohngemeinschaft)**',
        '**die Hausordnung**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Mieten oder vermieten?',
      frage: 'Ergänze die passende Form von mieten, vermieten oder umziehen.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Herr Weber ___ die Wohnung im dritten Stock an ein junges Paar.',
        'Wir ___ seit zwei Jahren eine kleine Wohnung am Stadtrand.',
        'Nächsten Monat ___ ich nach Leipzig ___ — ich habe dort eine Stelle gefunden.',
        'Die Wohnung wird erst frei, wenn die alten Mieter ___ sind.',
      ],
      loesungen: [
        'Herr Weber **vermietet** die Wohnung. ~~(el dueño la cede → vermieten)~~',
        'Wir **mieten** seit zwei Jahren eine kleine Wohnung.',
        'Nächsten Monat **ziehe** ich nach Leipzig **um**.',
        '… wenn die alten Mieter **umgezogen** sind.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe 80–100 Wörter: Wohnst du lieber in der Stadt oder auf dem Land — und warum? Wäge mindestens einen Vorteil und einen Nachteil ab und nutze zwei Redemittel.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Im Moment wohne ich in einer WG mitten in der Stadt, und für dieses Leben spricht viel: Ich brauche kein Auto, meine Arbeit und meine Freunde sind in der Nähe. Dagegen spricht allerdings der Preis — allein die Kaltmiete für mein Zimmer ist höher, als früher eine ganze Wohnung auf dem Land gekostet hat. Trotzdem überwiegen für mich die Vorteile der Stadt, zumindest jetzt. Wenn ich später eine Familie habe, sieht das vielleicht anders aus: mehr Platz, ein Garten, ruhige Nachbarn. Es kommt eben darauf an, in welcher Lebensphase man ist. ~~(~90 Wörter)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 5 — formeller Regeltext',
      titel: 'Die Hausordnung im Prüfungsformat',
      anweisung: 'In Lesen Teil 5 liest du einen formellen Regeltext — zum Beispiel eine Hausordnung — und ordnest Aussagen den Abschnitten zu. Zu welchem Abschnitt (A–D) passt jede Aussage? Ein Abschnitt bleibt übrig.',
      absaetze: [
        '**A — Ruhezeiten:** In der Zeit von 22 bis 6 Uhr sowie ganztägig an Sonn- und Feiertagen ist jede Lärmbelästigung zu vermeiden. Musizieren ist werktags maximal zwei Stunden gestattet.',
        '**B — Treppenhaus und Flure:** Das Abstellen von Fahrrädern, Kinderwagen und Schuhen im Treppenhaus ist aus Gründen des Brandschutzes nicht gestattet. Die Fluchtwege sind freizuhalten.',
        '**C — Müllentsorgung:** Abfälle sind getrennt in die dafür vorgesehenen Tonnen zu werfen. Sperrmüll darf nicht im Hof gelagert werden; die Abholung ist bei der Hausverwaltung anzumelden.',
        '**D — Gemeinschaftsräume:** Waschküche und Trockenraum stehen allen Mietparteien nach Plan zur Verfügung. Nach der Nutzung sind die Räume gereinigt zu hinterlassen.',
      ],
      optionen: [
        '(1) Wer etwas Großes wegwerfen möchte, muss vorher Bescheid geben.',
        '(2) Vor der Wohnungstür dürfen keine Gegenstände stehen.',
        '(3) An bestimmten Tagen muss es den ganzen Tag leise sein.',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '(1) → **C** — „Sperrmüll … die Abholung ist bei der Hausverwaltung anzumelden“ = Bescheid geben.',
        '(2) → **B** — das Abstellen im Treppenhaus ist nicht gestattet, Fluchtwege freihalten.',
        '(3) → **A** — „ganztägig an Sonn- und Feiertagen“ = den ganzen Tag leise.',
        'Abschnitt **D** bleibt übrig.',
      ],
      kommentar: 'Typisch für solche Regeltexte ist der unpersönliche Stil: „ist zu vermeiden“, „ist nicht gestattet“, „sind freizuhalten“. Diese sein + zu + Infinitiv-Formen bedeuten müssen oder dürfen — wer sie erkennt, löst Teil 5 deutlich schneller.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lies in Lesen Teil 5 **zuerst die Aussagen**, dann den Regeltext. Die Aussagen benutzen nie dieselben Wörter wie der Text: „Bescheid geben“ statt *anmelden*, „leise sein“ statt *Lärmbelästigung vermeiden*. Du suchst Bedeutungen, nicht Wörter.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Baustein', 'Das Wichtigste'],
      zeilen: [
        ['Wohnungssuche', 'die Anzeige → die Besichtigung → der Mietvertrag → die Kaution'],
        ['Miete', 'Kaltmiete + Nebenkosten = Warmmiete'],
        ['Zusammenleben', 'die Hausordnung, die Ruhezeiten einhalten, die Nachbarn informieren'],
        ['Debatte', 'Stadt (kurze Wege, teuer) · Land (Platz, Pendeln) · Mitte (WG, Stadtrand)'],
        ['Typischer Fehler', 'mieten (tomar en alquiler) ≠ vermieten (dar en alquiler)'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verstehe eine Wohnungsanzeige mit Kaltmiete, Nebenkosten und Kaution.',
        'Ich erkenne in einer Hausordnung, was erlaubt und was verboten ist.',
        'Ich kann Stadt und Land abwägen und meine Wahl begründen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Wohnung gefunden — jetzt wird eingerichtet und eingekauft. In der nächsten Lektion geht es um **Konsum & Geld**: Online-Bestellungen und Rücksendungen, Werbung, sparen oder ausgeben — und die Reklamation, wenn etwas schiefgeht.',
    },
  ],
}
