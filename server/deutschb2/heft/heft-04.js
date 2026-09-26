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
  ],
}
