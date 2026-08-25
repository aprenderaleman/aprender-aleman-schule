// Lektion 37 · Reisen & Verkehr
//
// Bloque 3 (Themenfelder & Wortschatz): Verkehrsmittel (mit dem Zug — el
// calco «en tren»), Fahrkarten, nach dem Weg fragen, Hotel buchen/reklamieren.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B1', 'Prüfungsrelevanz: Sprechen Teil 1 · Hören Teil 1 · Lesen'],
  h1: 'Reisen & Verkehr',
  lead: 'Mit dem Zug oder mit dem Bus? Fahrkarten, Wegbeschreibungen, Hotelbuchung — und was du bei einer **Verspätung** sagst. ~~Viajar por Alemania empieza en el andén.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Verkehrsmittel benennen und sagen, womit du fährst',
        'nach dem Weg fragen und eine Fahrkarte kaufen',
        'ein Hotelzimmer buchen und ein Problem höflich reklamieren',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'der Zug, Züge', kollokation: 'mit dem Zug fahren', es: 'el tren' },
        { wort: 'der Bahnhof, Bahnhöfe', kollokation: 'zum Bahnhof fahren', es: 'la estación' },
        { wort: 'das Gleis, -e', kollokation: 'von Gleis 5 abfahren', es: 'la vía, el andén' },
        { wort: 'die Fahrkarte, -n', kollokation: 'eine Fahrkarte kaufen', es: 'el billete' },
        { wort: 'die Haltestelle, -n', kollokation: 'an der Haltestelle warten', es: 'la parada' },
        { wort: 'umsteigen', kollokation: 'in Frankfurt umsteigen', es: 'hacer transbordo' },
        { wort: 'die Verspätung, -en', kollokation: 'Verspätung haben', es: 'el retraso' },
        { wort: 'ausfallen', kollokation: 'Der Zug fällt aus.', es: 'cancelarse (un tren)' },
        { wort: 'das Doppelzimmer, -', kollokation: 'ein Doppelzimmer buchen', es: 'la habitación doble' },
        { wort: 'die Rezeption, -en', kollokation: 'an der Rezeption fragen', es: 'la recepción' },
        { wort: 'buchen', kollokation: 'ein Hotel online buchen', es: 'reservar' },
        { wort: 'sich beschweren', kollokation: 'sich über den Lärm beschweren', es: 'quejarse, reclamar' },
      ],
      hinweis: '**mit dem** Zug / Bus / Auto — immer *mit + Dativ*. ~~«Voy en tren» → mit dem Zug, nunca *in Zug*. Y a pie: **zu Fuß**.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — unterwegs in Deutschland',
      card: true,
      titel: 'Bahn fahren',
      absaetze: [
        'Die __Fahrkarte__ kaufst du **vor** der Fahrt — am Automaten oder in der App. Am Bahnhof musst du die **Durchsagen** verstehen: Gleiswechsel, Verspätung, Anschlusszüge. Genau solche Durchsagen hörst du auch in **Hören Teil 1**. ~~Viajar sin billete (schwarzfahren) sale caro: hay controles en el tren.~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'In der Stadt',
      absaetze: [
        'Bus, U-Bahn und S-Bahn fahren nach festem Plan; an jeder __Haltestelle__ hängt er aus. Praktisch ist die **Tageskarte**, wenn du viel fährst. Und wenn du dich verläufst: Die Leute helfen gern — du musst nur **nach dem Weg fragen**.',
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Im Hotel',
      absaetze: [
        'Gebucht wird meistens online, eingecheckt an der __Rezeption__. Wenn etwas nicht stimmt — das Zimmer ist laut, die Dusche kaputt —, __reklamierst__ du **höflich**: Mit dem Konjunktiv II aus Lektion 13 (*Könnten Sie … ?*) bekommst du fast immer eine Lösung.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Subthema 1',
      titel: 'Unterwegs mit Zug & Bus',
      items: [
        { text: 'Ich fahre **mit dem** Zug nach Berlin.', gl: '— mit + Dativ' },
        { text: 'Der Zug hat 20 Minuten **Verspätung**.' },
        { text: 'Sie müssen in Köln **umsteigen**.' },
        { text: 'Der Zug fährt heute von **Gleis 7** ab.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 2',
      titel: 'Nach dem Weg fragen',
      items: [
        { text: 'Entschuldigung, wie komme ich **zum** Bahnhof?', gl: '— zu + Dativ' },
        { text: 'Gehen Sie geradeaus und dann die zweite Straße links.' },
        { text: 'Ist es weit? — Nein, zehn Minuten **zu Fuß**.' },
        { text: 'An der Ampel müssen Sie rechts abbiegen.' },
      ],
    },

    { type: 'rule' },

    // ── Redemittel ────────────────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — im Hotel',
      gruppen: [
        {
          fn: 'ein Zimmer buchen',
          saetze: [
            { satz: 'Ich möchte ein Doppelzimmer für zwei Nächte buchen.' },
            { satz: 'Haben Sie vom 10. bis zum 12. Mai noch etwas frei?' },
            { satz: 'Was kostet das Zimmer mit Frühstück?' },
          ],
        },
        {
          fn: 'höflich reklamieren',
          saetze: [
            { satz: 'Entschuldigung, aber das Zimmer ist sehr laut.' },
            { satz: 'Die Dusche funktioniert leider nicht. Könnten Sie das bitte reparieren lassen?', gloss: '~~queja + petición en Konjunktiv II: la fórmula que siempre funciona~~' },
            { satz: 'Könnte ich bitte ein anderes Zimmer bekommen?' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz',
      frage: 'Welches Wort passt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Der Zug kommt 30 Minuten später — er hat ___',
        'Hier wartest du auf den Bus: ___',
        'In Mannheim aus dem einen Zug aussteigen und in den anderen einsteigen: ___',
        'Ein Hotelzimmer für zwei Personen: ___',
      ],
      loesungen: [
        '**Verspätung**',
        '**die Haltestelle**',
        '**umsteigen**',
        '**das Doppelzimmer**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze ergänzen',
      frage: 'Welche Präposition (mit Artikel) fehlt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich fahre ___ ___ Bus zur Arbeit. ~~(¿«en bus»?)~~',
        'Entschuldigung, wie komme ich ___ Bahnhof? ~~(zu + der Bahnhof)~~',
        'Der Zug ___ Hamburg fährt von Gleis 3 ab. ~~(¿destino?)~~',
        'Wir möchten ein Zimmer ___ drei Nächte buchen.',
      ],
      loesungen: [
        '**mit dem** Bus ~~(mit + Dativ, nunca «in Bus»)~~',
        '**zum** Bahnhof ~~(zu + dem = zum)~~',
        'Der Zug **nach** Hamburg ~~(destino con ciudades: nach)~~',
        'ein Zimmer **für** drei Nächte',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Deine letzte Reise: Schreib 60–80 Wörter. ~~(¿adónde? ¿en qué medio de transporte? ¿problemas? — Perfekt de la Lektion 6)~~',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Im Sommer bin ich mit dem Zug nach München gefahren. Ich habe die Fahrkarte online gekauft, das war billiger. Leider hatte mein Zug eine Stunde Verspätung, und ich habe in Stuttgart den Anschluss verpasst. In München habe ich in einem kleinen Hotel gewohnt. Das Doppelzimmer war schön, aber die Heizung hat nicht funktioniert. Ich habe mich an der Rezeption beschwert und ein anderes Zimmer bekommen. Trotzdem war die Reise super! *(~72 Wörter — Perfekt + mindestens un «mit dem …».)*',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1 (Gemeinsam etwas planen)',
      titel: 'Einen Ausflug planen',
      anweisung: 'Sie möchten am Wochenende mit Ihrem Partner / Ihrer Partnerin einen Ausflug nach Heidelberg machen. Planen Sie gemeinsam: Wann fahren Sie? Womit fahren Sie? Was machen Sie dort?',
      absaetze: [
        'Wichtig ist der **Dialog**: Vorschlag machen → reagieren → gemeinsam entscheiden. Nicht nur reden — auch fragen!',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        '**A:** Wollen wir am Samstag schon früh fahren? Dann haben wir den ganzen Tag.\n**B:** Gute Idee! Und womit fahren wir — mit dem Auto oder mit dem Zug?\n**A:** Lieber mit dem Zug, dann müssen wir keinen Parkplatz suchen. Ich kaufe die Fahrkarten online.\n**B:** Einverstanden. In Heidelberg könnten wir zuerst das Schloss besichtigen.\n**A:** Ja, und danach schlage ich vor, dass wir am Fluss spazieren gehen und ein Eis essen.\n**B:** Perfekt. Also: Samstag um 8 Uhr am Bahnhof?\n**A:** Abgemacht!',
      ],
      kommentar: 'Alle drei Punkte sind geplant (wann · womit · was), beide Partner machen Vorschläge und reagieren (*Gute Idee, Einverstanden, Abgemacht*). Genau diese Interaktion bewerten die Prüfer in Teil 1.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In **Hören Teil 1** sind Bahnhofsdurchsagen ein Klassiker: *„Der Zug nach … hat circa 15 Minuten Verspätung und fährt heute von Gleis 9 ab.“* Trainiere gezielt **Gleisnummern, Uhrzeiten und Städtenamen** — das sind die typischen Fragen.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Ausdruck', 'So benutzt du ihn'],
      zeilen: [
        ['mit dem …', 'mit dem Zug / Bus / Auto fahren (mit + Dativ) · zu Fuß gehen'],
        ['nach + Stadt', 'Ich fahre **nach** Berlin. / der Zug **nach** Hamburg'],
        ['umsteigen', 'trennbar: Sie steigen in Köln **um**.'],
        ['Verspätung / ausfallen', 'Der Zug hat Verspätung. / Der Zug fällt aus.'],
        ['buchen / sich beschweren', 'ein Zimmer buchen · sich über + Akk. beschweren'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann sagen, womit ich fahre — mit „mit + Dativ“.',
        'Ich kann nach dem Weg fragen und eine Wegbeschreibung verstehen.',
        'Ich kann ein Hotelzimmer buchen und ein Problem höflich reklamieren.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Die Reise ist geplant — und was machst du in deiner freien Zeit? In der nächsten Lektion geht es um Hobbys, Sport, Fernsehen und das Smartphone: **Freizeit & Medien**.',
    },
  ],
}
