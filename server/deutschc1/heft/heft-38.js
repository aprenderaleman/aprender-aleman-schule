// Übungsheft C1 — Lektion 38: Globalisierung & Wirtschaft
export default {
  lektion: 38,
  titel: 'Übungsheft — Globalisierung & Wirtschaft',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Setze den Kernwortschatz der Lektion in der vom Kontext verlangten Form ein, achte auf Rektion und feste Verbindungen und entscheide, welche Variante der Norm entspricht.',
      items: [
        {
          typ: 'luecke',
          text: 'Große Unternehmen müssen ihrer {1} entlang der gesamten Lieferkette nachkommen und bei ihren Zulieferern für {2} Arbeitsbedingungen sorgen.',
          bank: ['Sorgfaltspflicht', 'menschenwürdige', 'Wettbewerbsfähigkeit', 'menschenwürdigen'],
          loesungen: { 1: 'Sorgfaltspflicht', 2: 'menschenwürdige' },
        },
        {
          typ: 'luecke',
          text: 'Die {1} der Produktion ins Ausland senkt zwar die Kosten, doch ein erheblicher Teil der {2} geht dem Inland dadurch verloren.',
          bank: ['Verlagerung', 'Wertschöpfung', 'Verzicht', 'Nachhaltigkeit'],
          loesungen: { 1: 'Verlagerung', 2: 'Wertschöpfung' },
        },
        {
          typ: 'luecke',
          text: 'Wer bewussten {1} übt, stellt damit auch den eigenen {2} kritisch in Frage.',
          bank: ['Verzicht', 'Konsum', 'Gefälle', 'Freihandel'],
          loesungen: { 1: 'Verzicht', 2: 'Konsum' },
        },
        {
          typ: 'luecke',
          text: 'Die EU will mit mehreren südamerikanischen Staaten ein Handelsabkommen {1}; Kritiker befürchten jedoch, es könne die soziale Ungleichheit in den Partnerländern weiter {2}.',
          bank: ['aushandeln', 'verschärfen', 'nachkommen', 'umstellen'],
          loesungen: { 1: 'aushandeln', 2: 'verschärfen' },
        },
        {
          typ: 'mc',
          frage: 'Viele Ökonomen plädieren ___ einen Ausbau des Freihandels, warnen aber zugleich vor neuen Abhängigkeiten.',
          optionen: ['auf', 'zu', 'für'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Bleiben die Energiepreise dauerhaft hoch, büßt die europäische Industrie an ___ ein.',
          optionen: ['Wettbewerbsfähigkeit', 'Kompetenz', 'Konkurrenz'],
          loesung: 0,
          warum: 'La «competitividad» es **die Wettbewerbsfähigkeit**; *die Konkurrenz* son los rivales y *die Kompetenz*, la capacidad o atribución.',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Konzern ist seine Sorgfaltspflicht bei den Zulieferern nicht nachgekommen.', 'Der Konzern ist seiner Sorgfaltspflicht bei den Zulieferern nicht nachgekommen.'],
          loesung: 1,
          warum: '**nachkommen** rige dativo: *einer Pflicht nachkommen* → **seiner** Sorgfaltspflicht.',
        },
        {
          typ: 'korrektur',
          optionen: ['Der harte Wettbewerb zwischen den Anbietern hat die Preise gedrückt.', 'Die harte Kompetenz zwischen den Anbietern hat die Preise gedrückt.'],
          loesung: 0,
          warum: 'Falso amigo: la «competencia» de mercado es **der Wettbewerb** (o *die Konkurrenz*); *die Kompetenz* es capacidad o atribución.',
        },
        {
          typ: 'zuordnen',
          links: ['für ungehinderten Freihandel', 'seiner Sorgfaltspflicht', 'bewussten Verzicht', 'ein Handelsabkommen', 'den Übergang zur Kreislaufwirtschaft'],
          rechts: ['plädieren', 'nachkommen', 'üben', 'aushandeln', 'beschleunigen'],
          loesung: {
            'für ungehinderten Freihandel': 'plädieren',
            'seiner Sorgfaltspflicht': 'nachkommen',
            'bewussten Verzicht': 'üben',
            'ein Handelsabkommen': 'aushandeln',
            'den Übergang zur Kreislaufwirtschaft': 'beschleunigen',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['seines', 'verdankt', 'Teil', 'Dem', 'Wohlstands', 'Deutschland', 'einen', 'Freihandel'],
          loesung: 'Dem Freihandel verdankt Deutschland einen Teil seines Wohlstands.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Bericht und entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Bericht: Zurück an den Webstuhl',
      text: 'Jahrzehntelang galt die Verlagerung der Produktion nach Asien in der Textilbranche als alternativlos. Umso mehr Aufsehen erregt ein mittelständischer Betrieb aus dem Allgäu, der seit zwei Jahren wieder in der Region fertigt. Geschäftsführerin Theresa Kübler betont, es gehe ihr nicht um Nostalgie. Ausschlaggebend seien vielmehr die Erfahrungen während der Pandemie gewesen: Monatelang hätten Container in überlasteten Häfen festgesteckt, während die Kundschaft vergeblich auf ihre Ware wartete.\nDie Rückverlagerung hat allerdings ihren Preis. Die Löhne liegen um ein Vielfaches höher als bei den früheren Zulieferern, weshalb das Unternehmen konsequent auf Automatisierung setzt; neue Arbeitsplätze sind dadurch nur in geringer Zahl entstanden. Wettbewerbsfähig bleibt der Betrieb nach eigenen Angaben vor allem, weil er auf Langlebigkeit statt auf Masse setzt: Ausgediente Kleidungsstücke nimmt er zurück, zerfasert sie und verarbeitet sie zu neuem Garn.\nBranchenkenner bleiben skeptisch. Das Modell funktioniere im hochpreisigen Segment, lasse sich aber kaum auf Fast Fashion übertragen, deren Geschäft gerade auf niedrigen Preisen beruhe. Kübler widerspricht nur halb: Solange Verbraucher beim Kauf in erster Linie auf den Preis achteten, werde nachhaltige Mode eine Nische bleiben. Die Politik müsse daher faire Wettbewerbsbedingungen schaffen, statt allein auf das Gewissen der Kundschaft zu setzen.',
      items: [
        { typ: 'rf', aussage: 'Durch die Rückverlagerung sind in der Region zahlreiche neue Arbeitsplätze entstanden.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was gab laut Theresa Kübler den Ausschlag für die Rückverlagerung?',
          optionen: ['Die Verbundenheit mit der traditionellen Textilherstellung ihrer Heimatregion.', 'Die Lieferschwierigkeiten, die während der Pandemie aufgetreten waren.', 'Die stark gestiegenen Löhne bei den asiatischen Zulieferern.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Worauf führt das Unternehmen seine Wettbewerbsfähigkeit in erster Linie zurück?',
          optionen: ['Darauf, dass es dank Automatisierung inzwischen günstiger produziert als die asiatische Konkurrenz.', 'Darauf, dass es seine Kollektionen gezielt an preisbewusste Fast-Fashion-Kunden vermarktet.', 'Darauf, dass es langlebige Ware herstellt und ausgediente Kleidung wiederverwertet.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Kübler hält politische Rahmenbedingungen für nötig, damit nachhaltige Mode über eine Nische hinauskommt.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Stellungnahme (mindestens 80 Wörter). Verwende dabei mindestens vier Begriffe aus dem Kernwortschatz, etwa Konsum, Verzicht, Nachhaltigkeit, Kreislaufwirtschaft oder Ungleichheit.',
      aufgabe: 'In einem Online-Forum zum Thema Konsum wird gefordert, billig produzierte Kleidung mit einer Abgabe zu belegen, um Fast Fashion einzudämmen. Nimm zu diesem Vorschlag Stellung.',
      punkte: [
        'Erläutere kurz, welches Problem mit der Abgabe gelöst werden soll.',
        'Wäge ein Argument dafür und ein Argument dagegen ab — auch unter dem Gesichtspunkt der Verteilung.',
        'Beziehe begründet Position und nenne eine Alternative oder Ergänzung.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Fast Fashion steht sinnbildlich für ein Wirtschaftsmodell, das auf Wegwerfen statt auf Weiterverwenden setzt: Kleidung wird billig produziert, kurz getragen und schnell entsorgt. Eine Abgabe soll diesen Konsum verteuern und so die Umwelt entlasten.\nFür den Vorschlag spricht, dass Preissignale eine nachweisbare Lenkungswirkung haben; bewusster Verzicht allein bleibt dagegen Symbolik. Allerdings träfe eine solche Abgabe ausgerechnet Menschen mit geringem Einkommen, die nicht aus Überzeugung billig kaufen. Konsumkritik darf nicht zur Frage des Geldbeutels werden, sonst verschärft sie die soziale Ungleichheit.\nMeines Erachtens ist eine Abgabe daher nur vertretbar, wenn die Einnahmen zurückfließen — etwa in die Förderung von Reparaturangeboten und in den Ausbau der Kreislaufwirtschaft. So würde die nachhaltige Wahl zur einfachsten, ohne den Einzelnen zu bevormunden.',
    },
  ],
}
