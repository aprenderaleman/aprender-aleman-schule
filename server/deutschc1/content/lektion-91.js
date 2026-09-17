// Geschichte 1 · Die Einladung nach München
//
// Lectura graduada C1 — la saga de María, capítulo 1 del nivel C1.
// Léxico: Bloque 0-1 (Einführung + Sprachliche Konsolidierung) sobre la
// base A1-B2 asumida. María presenta la Reihe «Zwischenräume» en München
// y una amiga de Valencia le hace la pregunta que ningún éxito responde.

export default {
  spec: ['Geschichte 1', 'Lectura graduada', 'Niveau C1', 'Wortschatz: Bloque 0-1'],
  h1: 'Geschichte 1 — Die Einladung nach München',
  lead: 'María soll die Reihe „Zwischenräume“ in München vorstellen — und eine Stimme aus Valencia stellt ihr eine Frage, die schwerer wiegt als jedes Podiumsgespräch.',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'anlässlich', kollokation: 'anlässlich der diesjährigen Literaturtage', es: 'con motivo de' },
        { wort: 'die Teilnahme', kollokation: 'um die Teilnahme an einem Podiumsgespräch bitten', es: 'participación' },
        { wort: 'die Stellungnahme', kollokation: 'eine kurze Stellungnahme abgeben', es: 'toma de postura, declaración' },
        { wort: 'beruhen auf', kollokation: 'auf keiner Übertreibung beruhen', es: 'basarse en' },
        { wort: 'folglich', kollokation: 'folglich beschloss sie, sich zu freuen', es: 'por consiguiente' },
        { wort: 'wenngleich', kollokation: 'wenngleich die Fahrt erst später losging', es: 'si bien, aunque (culto)' },
        { wort: 'einschätzen', kollokation: 'die eigene Zukunft nüchtern einschätzen', es: 'evaluar, valorar' },
        { wort: 'die Ankunft', kollokation: 'an die Ankunft vor vier Jahren denken', es: 'llegada' },
        { wort: 'gleichwohl', kollokation: 'gleichwohl blieb ein stiller Zweifel', es: 'no obstante, con todo' },
        { wort: 'einräumen', kollokation: 'einen berechtigten Punkt einräumen', es: 'admitir, conceder' },
        { wort: 'in Frage stellen', kollokation: 'eine Lebensentscheidung in Frage stellen', es: 'cuestionar' },
        { wort: 'eine Entscheidung treffen', kollokation: 'irgendwo hinter Nürnberg eine Entscheidung treffen', es: 'tomar una decisión' },
      ],
      hinweis: 'Ein Wort aus der Verlagswelt, das du gleich brauchst: der **Klappentext** ist der Werbetext auf der Buchrückseite — ~~la contraportada: texto brillante, impecable y, por definición, impersonal. Recuérdalo cuando Lucía lo use como pequeño dardo.~~',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Geschichte',
      card: true,
      titel: 'Die Einladung nach München',
      absaetze: [
        'Es war ein Dienstag im Oktober, als Herr Lindström María in sein Büro rief. Er hielt ein Schreiben hoch, dessen Briefkopf sie schon vom anderen Ende des Raumes erkannte: die Literaturtage in München. „Man lädt uns ein“, sagte er. „Genauer: Man lädt Sie ein. Sie fahren.“ Drei Sätze, mehr nicht — bei Herrn Lindström war das eine Festrede.',
        'Das Schreiben selbst war ein kleines Kunstwerk der Verwaltungsprosa. Man bitte, hieß es dort, um die Vorstellung der Reihe „Zwischenräume“ **anlässlich** der diesjährigen Literaturtage, ferner um die **Teilnahme** an einem Podiumsgespräch sowie um eine kurze **Stellungnahme** zu der Frage, wie eine kleine Berliner Reihe binnen zwei Jahren zu einer der meistbeachteten des Landes habe werden können. María las den letzten Satz dreimal. Meistbeachtet. Das Wort **beruhte auf** keiner Übertreibung; es stand nur zum ersten Mal in der Nähe ihres Namens. Dabei hatte alles so klein angefangen: mit einem Band namens „Zwölf Anfänge“ und der Idee, aus zwölf Anfängen eine ganze Reihe zu machen.',
        'Später erzählte Carla ihr, Herr Lindström habe im Flur gesagt, die Reihe sei von Anfang an Marías Kind gewesen, und wer das Kind großgezogen habe, solle es auch zeigen. Ein Lob aus seinem Mund war ungefähr so häufig wie Schnee im Juli; **folglich** beschloss María, sich zu freuen — und packte noch am selben Abend probeweise den Koffer, **wenngleich** die Fahrt erst in zwei Wochen losging.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Der Zug nach München verließ Berlin an einem klaren Novembermorgen. María hatte ihre Unterlagen auf dem Klapptisch ausgebreitet und sah stattdessen aus dem Fenster. Hätte man sie vor vier Jahren gebeten, ihre Zukunft **einzuschätzen**, sie hätte vieles genannt: einen Job vielleicht, ein paar Freunde, ein besseres Deutsch. Aber nicht das hier — nicht einen reservierten Sitzplatz erster Klasse, bezahlt von einem Festival, das ihre Meinung hören wollte.',
        'Sie dachte an ihre **Ankunft** in Berlin: zwei Koffer, drei Wörter Deutsch und die felsenfeste Überzeugung, dass alles gut werden würde, weil es gar nicht anders könne. Die Überzeugung hatte sich, mit erheblicher Verspätung und auf Umwegen, als richtig erwiesen. Heute schrieb sie Gutachten über fremde Manuskripte, stritt in Konferenzen über Kommas und träumte gelegentlich auf Deutsch — mit Untertiteln, wie sie Paul gegenüber behauptete.',
        '**Gleichwohl** saß da, irgendwo zwischen Stolz und Vorfreude, ein kleiner, stiller Zweifel. Er hatte keinen Namen und keine Adresse; er fuhr einfach mit, wie ein Passagier ohne Ticket. María beschloss, ihn zu ignorieren. Das war, wie sich zeigen sollte, nur eine vorläufige Lösung.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Der Abend in München war, das durfte man ohne Übertreibung sagen, ein Erfolg. Nach der Begrüßung durch die Veranstalter, der Lesung zweier Texte aus der Reihe und einer halben Stunde erstaunlich kluger Fragen stand María am Rednerpult und sprach frei. Sie erklärte, was „Zwischenräume“ wollte: Bücher von Menschen, die von außen zum Deutschen gekommen waren und die Sprache deshalb anders hörten — genauer, dankbarer, manchmal respektloser. Sie sprach über die **Voraussetzungen**, unter denen solche Texte entstehen, über die **Lücken**, die der Literaturbetrieb jahrzehntelang übersehen hatte, und über ihre Lieblingsthese: dass eine Sprache reicher wird, wenn man sie teilt — eine **Behauptung**, für die sie inzwischen Verkaufszahlen hatte.',
        'Ein älterer Herr in der dritten Reihe wollte wissen, ob solche Texte denn „richtige deutsche Literatur“ seien. María lächelte. „Es ist deutsche Literatur mit Anlauf“, sagte sie, und der Saal lachte, und der ältere Herr, das musste man ihm lassen, lachte mit. Danach gab es Sekt in Plastikgläsern und Visitenkarten von Menschen, deren Namen sie aus Fachzeitschriften kannte.',
        'Und dann, mitten im Gemurmel, eine Stimme, die nicht zum Saal gehörte, sondern zu einem Schulhof am Mittelmeer: „Perdona — schreibt man Weltliteratur eigentlich mit V?“ María drehte sich um. Vor ihr stand, zwanzig Jahre älter als in ihrer Erinnerung und exakt gleich frech, Lucía.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Lucía Ferrer. Dieselbe Schule, dieselbe Straße, dieselben Sommer. Sie lebte seit drei Jahren in München, Architektin, und sie hatten es — wie das so geht — bei zwei kurzen Besuchen und tausend guten Vorsätzen belassen. Am nächsten Vormittag saßen sie an der Isar, tranken Kaffee aus Pappbechern und schlüpften ins Spanische wie in alte Hausschuhe.',
        'Lucía ging zurück. Im Frühjahr, endgültig, nach Valencia. Sie habe nichts gegen Deutschland, sagte sie, das Land sei ihr sogar ans Herz gewachsen; aber ein Leben bestehe nicht aus Terminen, und sie wolle nicht mit fünfzig feststellen, dass sie das eigentliche Leben immer auf später verschoben habe. Dann sah sie María an. „Und du? Wie lange noch?“',
        'María antwortete, was man so antwortet: der Verlag, die Reihe, Paul, die Freunde, das Leben, das man sich aufgebaut hat. Es klang gut. Es stimmte auch. Lucía **räumte** jeden einzelnen Punkt **ein**, geduldig, wie man einer Kollegin recht gibt. „Weißt du“, sagte sie schließlich, ganz ohne Bosheit, „du sprichst wunderbar über Bücher. Aber wenn ich dich nach dir frage, klingst du wie ein Klappentext.“ Der Satz saß.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Auf der Rückfahrt versuchte María, die Bemerkung als Unsinn abzutun. Es gelang ihr ausgezeichnet — jeweils für ungefähr vier Minuten. Dann tauchte der Satz wieder auf, höflich und unerbittlich wie ein Schaffner. Man kann eine Frage **in Frage stellen**, so viel wurde ihr zwischen Ingolstadt und Nürnberg klar; los wird man sie dadurch nicht.',
        'Denn das war es ja: Lucías Frage war nicht neu. Sie war nur bisher immer leise gewesen — der Passagier ohne Ticket, der schon auf der Hinfahrt mitgereist war. Wie lange noch? Und was hieße danach? Und in welcher Sprache würde dieses Danach stattfinden? María sah hinaus in die dunkler werdende Landschaft und spürte, dass sie diese Fragen nicht mehr allein im Kopf bewegen wollte.',
        'Beruflich hätte sie den Fall mühelos zusammengefasst: **Vorliegen** einer offenen Frage, erkennbarer **Handlungsbedarf**, Klärung erforderlich. Das Komische war nur: Sobald es um das eigene Leben ging, half der ganze schöne Nominalstil nichts mehr. Man musste die Verben zurückholen — reden, bleiben, gehen, lieben. Verben verlangen eine Person, die handelt; genau deshalb sind sie unbequemer als Substantive.',
        'Irgendwo hinter Nürnberg **traf** sie eine **Entscheidung** — keine große, nur die erste einer langen Kette. Sie würde mit Paul reden. Nicht irgendwann, nicht „wenn es sich ergibt“. Am Wochenende. Sie schrieb ihm eine Nachricht: „Bin um zehn zu Hause. Ich bringe Brezeln mit und eine Frage.“ Paul antwortete nach elf Sekunden: „Für Brezeln bin ich zu allem bereit.“ María lächelte und steckte das Handy weg. Der Zug fuhr nach Norden, nach Hause. Oder jedenfalls: in eines ihrer Zuhause.',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die vier Fragen in ganzen Sätzen. Belege deine Antworten, wo möglich, mit einer Textstelle.',
      aufgaben: [
        '**Detail:** Worum genau bitten die Veranstalter der Literaturtage in ihrem Einladungsschreiben? Nenne alle drei Punkte.',
        '**Schlussfolgerung:** María versucht, Lucías Bemerkung „abzutun“ — warum gelingt ihr das nicht? Was verrät das Bild vom „Passagier ohne Ticket“?',
        '**Autorenabsicht:** Der berufliche Triumph in München und der private Zweifel stehen unmittelbar nebeneinander. Welche Wirkung erzielt der Text mit diesem Kontrast?',
        '**Sprache & Register:** „Man bitte um die Vorstellung der Reihe …“ — in welcher Form ist das Einladungsschreiben wiedergegeben, und wie steht der Erzähler dazu? Achte auf die Formulierung „ein kleines Kunstwerk der Verwaltungsprosa“.',
      ],
      loesungen: [
        'Die Veranstalter bitten **erstens** um die Vorstellung der Reihe „Zwischenräume“, **zweitens** um die Teilnahme an einem Podiumsgespräch und **drittens** um eine kurze Stellungnahme zu der Frage, wie die kleine Berliner Reihe so erfolgreich werden konnte.',
        'Lucía hat nichts Neues gesagt, sondern einen Zweifel ausgesprochen, den María längst mit sich trägt — der „Passagier ohne Ticket“ sitzt schon **auf der Hinfahrt** im Zug, also vor dem Wiedersehen. Deshalb lässt sich die Bemerkung nicht abtun: Man kann eine Frage in Frage stellen, aber nicht loswerden, wenn sie aus einem selbst kommt.',
        'Der Kontrast zeigt das Grundthema des Kapitels: Beruflicher Erfolg beantwortet die Lebensfragen nicht — er macht sie sogar lauter, weil nun etwas auf dem Spiel steht. Gerade im Moment der größten Anerkennung („meistbeachtet“) wird María gefragt, ob dieses Leben ihr eigenes ist. Der Text wertet dabei nicht; er stellt beide Wahrheiten nebeneinander.',
        'Das Schreiben wird im **Konjunktiv I** wiedergegeben („Man bitte …“, „… habe werden können“) — klassische indirekte Rede, verbunden mit dichtem **Nominalstil** (die Vorstellung, die Teilnahme, die Stellungnahme). Der Erzähler hält ironische Distanz: „ein kleines Kunstwerk der Verwaltungsprosa“ ist ein Kompliment, das keines ist — es macht die förmliche Sprache sichtbar und lächelt zugleich über sie.',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Die Brezeln sind gekauft, die Frage ist gestellt. In **Geschichte 2** wird der Küchentisch in der Gartenstraße zum Verhandlungstisch: María und Paul reden eine ganze Nacht über zwei Sprachen, zwei Länder und die Kunst, sich zu einigen, ohne sich zu verlieren.',
    },
  ],
}
