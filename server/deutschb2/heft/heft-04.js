// Übungsheft B2 — Lektion 04: Konnektoren I — Grund, Einräumung, Folge
export default {
  lektion: 4,
  titel: 'Übungsheft — Konnektoren I',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Grund, Einräumung oder Folge? Wähle den passenden Konnektor und achte auf die Verbstellung.',
      items: [
        {
          typ: 'luecke',
          text: 'Der Zug hatte eine Stunde Verspätung, {1} verpasste Laura ihren Anschluss. {2} sie sofort beim Kundenservice anrief, bekam sie keine Entschädigung.',
          bank: ['deshalb', 'Obwohl', 'Weil', 'trotzdem'],
          loesungen: { 1: 'deshalb', 2: 'Obwohl' },
        },
        {
          typ: 'luecke',
          text: 'Die Mieten in der Innenstadt sind stark gestiegen, {1} viele Familien an den Stadtrand ziehen. Die Wege zur Arbeit sind dort länger, {2} ist das Leben insgesamt günstiger.',
          bank: ['sodass', 'dennoch', 'denn', 'obwohl'],
          loesungen: { 1: 'sodass', 2: 'dennoch' },
        },
        {
          typ: 'luecke',
          text: '{1} die Bibliothek am Wochenende geschlossen ist, lernen viele Studierende zu Hause. Das ist praktisch, {2} man spart sich den Weg.',
          bank: ['Da', 'denn', 'Trotzdem', 'sodass'],
          loesungen: { 1: 'Da', 2: 'denn' },
        },
        { typ: 'mc', frage: 'Ich konnte nicht zur Sitzung kommen, ___ ich hatte einen Arzttermin.', optionen: ['weil', 'denn', 'deshalb'], loesung: 1 },
        { typ: 'mc', frage: '___ des schlechten Wetters fand das Konzert im Freien statt.', optionen: ['Trotz', 'Wegen', 'Obwohl'], loesung: 0 },
        { typ: 'mc', frage: 'Im Großraumbüro war es so laut, ___ niemand konzentriert arbeiten konnte.', optionen: ['sodass', 'denn', 'dass'], loesung: 2 },
        {
          typ: 'korrektur',
          optionen: ['Ich habe viel gelernt, deshalb ich habe die Prüfung bestanden.', 'Ich habe viel gelernt, deshalb habe ich die Prüfung bestanden.'],
          loesung: 1,
          warum: 'Tras **deshalb** va la inversión: primero el verbo, luego el sujeto. En español «por eso yo he aprobado» no cambia el orden.',
        },
        {
          typ: 'korrektur',
          optionen: ['Obwohl es regnete, gingen wir spazieren.', 'Obwohl es regnete, trotzdem gingen wir spazieren.'],
          loesung: 0,
          warum: '*obwohl* ya expresa la concesión: no se añade *trotzdem* (calco de «aunque llovía, aun así…»). Tras el Nebensatz viene directamente el verbo.',
        },
        {
          typ: 'korrektur',
          optionen: ['Weil ich hatte keine Zeit, habe ich nicht angerufen.', 'Weil ich keine Zeit hatte, habe ich nicht angerufen.'],
          loesung: 1,
          warum: '*weil* abre un Nebensatz: el verbo conjugado va **al final** (*… keine Zeit hatte*). En español «porque no tenía tiempo» no mueve el verbo.',
        },
        { typ: 'satzbau', woerter: ['blieb', 'sie', 'Weil', 'war', 'zu', 'krank', 'Hause', 'sie'], loesung: 'Weil sie krank war, blieb sie zu Hause.', alt: ['Sie blieb zu Hause, weil sie krank war.'] },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Kommentar aus der Lokalzeitung und löse die vier Aufgaben.',
      textTitel: 'Kommentar: Ein Jahr autofreie Altstadt',
      text: 'Seit einem Jahr dürfen in der Altstadt von Lindenau keine Autos mehr fahren. Viele Geschäftsleute waren anfangs dagegen, weil sie weniger Kundschaft befürchteten. Tatsächlich sanken die Umsätze in den ersten Monaten leicht. Trotzdem hat sich die Stimmung inzwischen gedreht: Die Straßen sind so ruhig geworden, dass die Cafés ihre Tische nun bis auf die Fahrbahn stellen. Familien kommen gern, denn die Kinder können dort gefahrlos spielen. Obwohl die Busverbindungen verbessert wurden, klagen ältere Menschen aus den Vororten über lange Wege. Deshalb fordert der Seniorenbeirat einen kostenlosen Shuttlebus. Die Stadt prüft den Vorschlag, da sie niemanden ausschließen möchte. Allerdings fehlt bisher das Geld dafür. Mein Fazit: Die autofreie Altstadt ist ein Erfolg, und mehrere Nachbarstädte haben sich schon nach unseren Erfahrungen erkundigt. Dennoch darf die Stadt die Menschen nicht vergessen, die auf das Auto angewiesen sind. Ein Shuttlebus wäre ein kleiner Preis für eine Altstadt, die wirklich allen gehört. (Jonas Petersen)',
      items: [
        { typ: 'rf', aussage: 'Die Umsätze der Geschäfte gingen zu Beginn etwas zurück.', loesung: true },
        {
          typ: 'mc',
          frage: 'Warum kommen Familien gern in die Altstadt?',
          optionen: ['weil es dort viele günstige Cafés gibt', 'weil die Kinder dort sicher spielen können', 'weil die Busse dort kostenlos sind'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Der kostenlose Shuttlebus fährt bereits.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Haltung vertritt der Autor?',
          optionen: [
            'Er sieht das Projekt positiv, fordert aber eine Lösung für Menschen, die auf das Auto angewiesen sind.',
            'Er hält das Projekt für gescheitert, weil die Geschäfte weniger verkaufen.',
            'Er möchte, dass Autos wieder in die Altstadt fahren dürfen.',
          ],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen Radiobeitrag über einen Handwerksbetrieb. Entscheide bei jeder Aufgabe, welche Lösung dem Gehörten entspricht.',
      audio: {
        transcript: 'Und nun zu unserem Thema der Woche. Die Tischlerei Brandner in Kassel arbeitet seit einem halben Jahr nur noch an vier Tagen, und zwar von Montag bis Donnerstag. Der Chef hat das Modell eingeführt, weil er kaum noch Fachkräfte fand. Die Beschäftigten arbeiten jetzt neun Stunden am Tag, sodass die Wochenarbeitszeit nur leicht gesunken ist, nämlich von vierzig auf sechsunddreißig Stunden. Der Lohn ist trotzdem gleich geblieben. Obwohl einige Kunden anfangs skeptisch waren, gab es bisher kaum Beschwerden, denn für Notfälle ist freitags ein Mitarbeiter telefonisch erreichbar. Die Folgen sind deutlich. Auf die letzte Stellenanzeige kamen nicht fünf Bewerbungen wie früher, sondern dreißig. Außerdem sind die Mitarbeiter so selten krank, dass der Betrieb mehr Aufträge schafft als vorher. Ganz ohne Probleme läuft es dennoch nicht. Die langen Tage sind anstrengend, deshalb wünschen sich vor allem ältere Kollegen eine längere Mittagspause. Darüber will der Betrieb im Herbst entscheiden.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Warum hat der Chef die Vier-Tage-Woche eingeführt?',
          optionen: ['weil er kaum noch Fachkräfte fand', 'weil die Mitarbeiter oft krank waren', 'weil sich Kunden beschwert hatten'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Beschäftigten arbeiten jetzt vierzig Stunden pro Woche.', loesung: false },
        { typ: 'rf', aussage: 'Die Beschäftigten verdienen genauso viel wie vor der Umstellung.', loesung: true },
        { typ: 'mc', frage: 'Wie viele Bewerbungen kamen auf die letzte Stellenanzeige?', optionen: ['fünf', 'dreizehn', 'dreißig'], loesung: 2 },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern. Verwende mindestens drei verschiedene Konnektoren aus dieser Lektion.',
      aufgabe: 'In einem Online-Forum für Eltern und Jugendliche lautet die Frage der Woche: „Sollten Jugendliche neben der Schule jobben?“ Schreib einen Beitrag, in dem du deine Meinung begründest.',
      punkte: [
        'Nenne einen Grund für deine Meinung (weil, da oder denn).',
        'Räume einen möglichen Nachteil ein (obwohl, trotzdem oder dennoch).',
        'Zieh eine Schlussfolgerung oder berichte von einer eigenen Erfahrung (deshalb, daher oder sodass).',
      ],
      minWoerter: 60,
      beispielLoesung: 'Hallo zusammen, ich finde, dass Jugendliche ruhig neben der Schule jobben sollten, denn sie lernen dabei, Verantwortung zu übernehmen. Außerdem verdienen sie ihr eigenes Geld, weil nicht alle Eltern Extras wie den Führerschein bezahlen können. Obwohl ein Job natürlich Zeit kostet, muss die Schule nicht darunter leiden. Wichtig ist nur, dass man nicht mehr als acht Stunden pro Woche arbeitet. Ich selbst habe mit sechzehn in einer Bäckerei gearbeitet, deshalb weiß ich, wie wertvoll diese Erfahrung ist. Trotzdem sollten Eltern darauf achten, dass die Noten stabil bleiben. Viele Grüße, Deniz',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte einen kurzen Vortrag über Vor- und Nachteile. Sprich etwa zwei Minuten und verwende Konnektoren aus dieser Lektion.',
      aufgabe: 'Immer mehr Menschen ziehen aus der Großstadt weg. Halte einen kurzen Vortrag von etwa zwei Minuten zum Thema „Leben auf dem Land“: Stell Vor- und Nachteile dar und sag am Ende deine eigene Meinung. Verbinde deine Sätze mit Konnektoren wie weil, da, obwohl, trotzdem, deshalb oder sodass.',
      punkte: [
        'Stell einen Vorteil dar und begründe ihn (weil, da oder denn).',
        'Stell einen Nachteil dar und schränke ihn ein (obwohl, trotzdem oder dennoch).',
        'Zieh ein Fazit mit deiner eigenen Meinung (deshalb, daher oder sodass).',
      ],
      redemittel: ['Ein großer Vorteil ist, dass …', 'Dagegen spricht, dass …', 'Obwohl …, …', 'Daher bin ich der Meinung, dass …'],
      maxSekunden: 120,
      beispielLoesung: 'Ich spreche heute über das Leben auf dem Land. Ein großer Vorteil ist die Ruhe. Viele Familien ziehen aufs Land, weil die Kinder dort draußen spielen können und die Luft besser ist. Außerdem sind die Mieten niedriger als in der Großstadt, sodass man sich oft ein Haus mit Garten leisten kann. Es gibt aber auch Nachteile. Auf dem Land fahren nur wenige Busse, deshalb braucht fast jede Familie ein Auto, manchmal sogar zwei. Auch Ärzte, Geschäfte und Kinos sind oft weit weg. Obwohl heute viele Menschen im Homeoffice arbeiten, müssen die meisten trotzdem regelmäßig in die Stadt fahren, und das kostet Zeit und Geld. Ich selbst bin in einem kleinen Dorf aufgewachsen. Die Kindheit dort war schön, dennoch habe ich mich als Jugendliche oft gelangweilt, denn abends fuhr kein Bus mehr. Mein Fazit: Das Leben auf dem Land ist ideal für Familien mit kleinen Kindern. Ich persönlich brauche aber kurze Wege und viele Angebote, daher bleibe ich lieber in der Stadt.',
    },
  ],
}
