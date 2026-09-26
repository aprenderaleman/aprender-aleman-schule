// Übungsheft C1 — Lektion 30: Umwelt & Klimawandel
export default {
  lektion: 30,
  titel: 'Übungsheft — Umwelt & Klimawandel',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Ergänze die festen Verbindungen der Klimadebatte, achte auf Präpositionen, Kasus und Nominalstil und erkenne typische Fehlübertragungen aus dem Spanischen.',
      items: [
        {
          typ: 'zuordnen',
          links: ['die Energiewende entschlossen', 'ein Verbot', 'den Ausstoß von Treibhausgasen', 'das eigene Konsumverhalten kritisch', 'schonend mit natürlichen Ressourcen'],
          rechts: ['vorantreiben', 'verhängen', 'senken', 'hinterfragen', 'umgehen'],
          loesung: {
            'die Energiewende entschlossen': 'vorantreiben',
            'ein Verbot': 'verhängen',
            'den Ausstoß von Treibhausgasen': 'senken',
            'das eigene Konsumverhalten kritisch': 'hinterfragen',
            'schonend mit natürlichen Ressourcen': 'umgehen',
          },
        },
        {
          typ: 'luecke',
          text: 'Der Verzicht {1} Kurzstreckenflüge ist ein sichtbares Zeichen, doch der Ausstoß {2} Treibhausgasen sinkt dadurch nur geringfügig.',
          bank: ['auf', 'von', 'zu', 'für'],
          loesungen: { 1: 'auf', 2: 'von' },
        },
        {
          typ: 'luecke',
          text: 'Eine CO₂-Bepreisung entfaltet ihre Lenkungswirkung nur, {1} der Preis spürbar ist; {2} müssen die Einnahmen sozial gerecht zurückverteilt werden, damit die Maßnahme zumutbar bleibt.',
          bank: ['wenn', 'zudem', 'obwohl', 'sonst'],
          loesungen: { 1: 'wenn', 2: 'zudem' },
        },
        {
          typ: 'luecke',
          text: 'Wegen ihres {1} in die persönliche Freiheit {2} Verbote in der Bevölkerung häufig auf Widerstand.',
          bank: ['Eingriffs', 'stoßen', 'Eingriff', 'führen'],
          loesungen: { 1: 'Eingriffs', 2: 'stoßen' },
        },
        {
          typ: 'mc',
          frage: 'Der Schutz ___ Umwelt ist im Grundgesetz als Staatsziel verankert.',
          optionen: ['des', 'der', 'dem'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Die ___ Klimaziele lassen sich ohne eine konsequente Verkehrswende kaum erreichen.',
          optionen: ['von der Regierung selbst steckenden', 'von der Regierung selbst gesteckten', 'von der Regierung selbst gesteckte'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Klimapolitik muss auch für einkommensschwache Haushalte ___ bleiben, sonst verliert sie an Rückhalt.',
          optionen: ['zumutbar', 'zugemutet', 'zumutend'],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Die Regierung muss endlich wirksame Maßnahmen nehmen.', 'Die Regierung muss endlich wirksame Maßnahmen ergreifen.'],
          loesung: 1,
          warum: '«Tomar medidas» es **Maßnahmen ergreifen** (o *treffen*); *nehmen* es un calco.',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Anteil erneuerbarer Energien am Strommix wächst stetig.', 'Der Anteil renovierbarer Energien am Strommix wächst stetig.'],
          loesung: 0,
          warum: '«Renovable» es **erneuerbar**; *renovieren* significa «reformar» un edificio o una vivienda.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Bericht und entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Bericht: Ein Jahr Verkehrsversuch in Lindenfeld',
      text: 'Vor einem Jahr hat die Stadt Lindenfeld ein ehrgeiziges Experiment gestartet: Statt Autos aus der Innenstadt zu verbannen, setzte der Stadtrat ausschließlich auf Anreize. Busse fahren seither im Zehnminutentakt und sind für Einheimische kostenlos, entlang der Ausfallstraßen entstanden breite Radwege. Ein Fahrverbot, wie es die örtlichen Umweltverbände gefordert hatten, lehnte die Ratsmehrheit jedoch ab — man wolle niemanden bevormunden.\nDie nun vorgelegte Bilanz fällt gemischt aus. Die Zahl der Fahrgäste hat sich nahezu verdoppelt, und auch der Anteil des Radverkehrs ist deutlich gestiegen. Der Autoverkehr in der Innenstadt ging hingegen nur um rund acht Prozent zurück. Offenbar, so das mit der Auswertung beauftragte Planungsbüro, seien vor allem Menschen umgestiegen, die zuvor zu Fuß gegangen waren oder ohnehin selten das Auto nutzten. Pendlerinnen und Pendler aus dem Umland fahren weiterhin mit dem eigenen Wagen in die Stadt.\nOberbürgermeisterin Katrin Albers zeigt sich dennoch zufrieden: Der Versuch habe bewiesen, dass die Verkehrswende auf breite Zustimmung stoße, wenn sie niemandem etwas wegnehme. Die Umweltverbände sehen das anders. Ohne flankierende Maßnahmen wie höhere Parkgebühren, so ihr Sprecher, bleibe der kostenlose Bus ein teures Geschenk ohne nennenswerte Klimawirkung.',
      items: [
        { typ: 'rf', aussage: 'Der Stadtrat hat die Forderung nach einem Fahrverbot in der Innenstadt abgelehnt.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie erklärt das Planungsbüro den geringen Rückgang des Autoverkehrs?',
          optionen: ['Die neuen Radwege lägen für Pendler aus dem Umland zu weit von der Innenstadt entfernt.', 'Viele Autofahrer hätten von dem kostenlosen Busangebot gar nichts erfahren.', 'Die neuen Angebote nutzten vor allem Menschen, die ohnehin kaum Auto fuhren.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Worin unterscheiden sich Oberbürgermeisterin und Umweltverbände in ihrer Bewertung?',
          optionen: ['Albers wertet die breite Zustimmung als Erfolg, die Verbände vermissen eine spürbare Klimawirkung.', 'Albers hält den Versuch für zu teuer, die Verbände halten ihn für zu zaghaft.', 'Albers will nun doch ein Fahrverbot prüfen, die Verbände lehnen es inzwischen ab.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Der Autoverkehr in der Innenstadt ist um knapp ein Viertel gesunken.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Textzusammenfassung mit Kommentar (mindestens 80 Wörter). Verwende mindestens vier Begriffe aus dem Kernwortschatz der Lektion, etwa Anreiz, Verbot, Maßnahmen ergreifen oder sozial zumutbar.',
      aufgabe: 'Fasse den Bericht über den Verkehrsversuch in Lindenfeld für den Newsletter einer Bürgerinitiative zusammen und nimm anschließend Stellung.',
      punkte: [
        'Gib Ziel, Maßnahmen und Ergebnisse des Versuchs in eigenen Worten wieder.',
        'Bewerte, ob sich die Strategie, ausschließlich auf Anreize zu setzen, bewährt hat.',
        'Schlage eine Maßnahme vor, die die Klimawirkung erhöhen könnte, und begründe sie.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Der Bericht zieht Bilanz nach einem einjährigen Verkehrsversuch in Lindenfeld. Die Stadt hat dabei bewusst auf Verbote verzichtet und ausschließlich auf Anreize gesetzt: kostenlose Busse im Zehnminutentakt und neue Radwege. Während sich die Zahl der Fahrgäste nahezu verdoppelt hat, ist der Autoverkehr in der Innenstadt lediglich um rund acht Prozent zurückgegangen, da vor allem Menschen umgestiegen sind, die ohnehin selten Auto fuhren.\nMeines Erachtens zeigt der Versuch, dass Anreize allein nicht genügen. Zwar ist die breite Zustimmung ein wertvolles Ergebnis, doch ohne flankierende Maßnahmen bleibt die Klimawirkung gering. Sinnvoll wären höhere Parkgebühren in der Innenstadt, deren Einnahmen vollständig in den Nahverkehr fließen. So bliebe die Verkehrswende sozial zumutbar und würde den Ausstoß von Treibhausgasen tatsächlich senken.',
    },
  ],
}
