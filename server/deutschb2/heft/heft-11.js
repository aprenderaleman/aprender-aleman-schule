// Übungsheft B2 — Lektion 11: Passiv mit Modalverben & Passiversatzformen
export default {
  lektion: 11,
  titel: 'Übungsheft — Passiv mit Modalverben',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Pflicht oder Möglichkeit? Ergänze die passende Form und achte auf die Stellung von Modalverb und werden.',
      items: [
        {
          typ: 'luecke',
          text: 'Der Antrag {1} spätestens bis nächsten Freitag eingereicht werden. Letzte Woche {2} der Termin leider nicht mehr verschoben werden.',
          bank: ['muss', 'konnte', 'lässt', 'ist'],
          loesungen: { 1: 'muss', 2: 'konnte' },
        },
        {
          typ: 'luecke',
          text: 'Keine Sorge, das Problem {1} sich leicht lösen. Die Anleitung {2} allerdings vor dem ersten Gebrauch sorgfältig zu lesen.',
          bank: ['lässt', 'ist', 'hat', 'muss'],
          loesungen: { 1: 'lässt', 2: 'ist' },
        },
        {
          typ: 'luecke',
          text: 'Die neue Wohnung ist mit dem Bus gut {1}, und die Miete ist trotz der zentralen Lage noch {2}.',
          bank: ['erreichbar', 'bezahlbar', 'lösbar', 'trinkbar'],
          loesungen: { 1: 'erreichbar', 2: 'bezahlbar' },
        },
        {
          typ: 'mc',
          frage: '„Die Mülltonnen sind dienstags bis 7 Uhr an die Straße zu stellen.“ Was bedeutet dieser Satz?',
          optionen: ['Man kann die Mülltonnen dienstags an die Straße stellen.', 'Die Mülltonnen müssen dienstags an die Straße gestellt werden.', 'Die Mülltonnen lassen sich dienstags an die Straße stellen.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: '„Dieser Fleck lässt sich leicht entfernen.“ Was bedeutet dieser Satz?',
          optionen: ['Der Fleck muss sofort entfernt werden.', 'Der Fleck ist schon entfernt.', 'Der Fleck kann leicht entfernt werden.'],
          loesung: 2,
        },
        { typ: 'mc', frage: 'Der Hausmeister sagt, dass die Heizung noch heute repariert ___.', optionen: ['werden muss', 'muss werden', 'müssen wird'], loesung: 0 },
        {
          typ: 'korrektur',
          optionen: ['Es kann sich hier mit Karte bezahlen.', 'Man kann hier mit Karte bezahlen.'],
          loesung: 1,
          warum: '«Se puede pagar» no se traduce con *sich*: usa **man** + Aktiv o el Passiv (*Hier kann mit Karte bezahlt werden*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Fehler muss sofort behoben werden.', 'Der Fehler muss sofort werden behoben.'],
          loesung: 0,
          warum: 'Calco de «debe ser corregido»: en alemán el orden al final es **Partizip II + werden**.',
        },
        {
          typ: 'korrektur',
          optionen: ['Das Formular hat bis Montag abzugeben.', 'Das Formular ist bis Montag abzugeben.'],
          loesung: 1,
          warum: 'Con una cosa como sujeto se usa **sein + zu**; *haben + zu* («tener que») necesita una persona que actúa: *Du hast das Formular abzugeben.*',
        },
        {
          typ: 'satzbau',
          woerter: ['dass', 'Sie', 'geändert', 'muss', 'der', 'sagt', 'werden', 'Vertrag'],
          loesung: 'Sie sagt, dass der Vertrag geändert werden muss.',
          alt: ['Dass der Vertrag geändert werden muss, sagt sie.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Leserbrief. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Leserbrief: Leihräder — gute Idee, schwache Umsetzung',
      text: 'Zu Ihrem Artikel „Mehr Leihräder für Leipzig“ vom 12. Mai: Grundsätzlich finde ich es richtig, dass der Autoverkehr in der Innenstadt reduziert werden soll. Die neuen Leihräder lassen sich bequem per App ausleihen, und mit einem Euro pro halbe Stunde ist das Angebot für fast alle bezahlbar. Die Umsetzung ist aus meiner Sicht aber noch nicht durchdacht. Laut Nutzungsbedingungen dürfen die Räder nur an offiziellen Stationen abgestellt werden. In meinem Stadtteil gibt es jedoch bisher keine einzige Station; die nächste ist nur mit dem Bus erreichbar. Außerdem ist vor jeder Fahrt eine Kaution von 50 Euro zu hinterlegen, was gerade Studierende abschreckt. Ich schlage deshalb vor, dass zusätzliche Stationen in den Wohngebieten eingerichtet werden. Die Kaution könnte durch eine einmalige Registrierung ersetzt werden. Nur so kann das Projekt wirklich ein Erfolg werden. Emine Aydın, Leipzig-Süd',
      items: [
        {
          typ: 'mc',
          frage: 'Was kritisiert Emine Aydın?',
          optionen: ['den hohen Preis pro Fahrt', 'die fehlenden Stationen in ihrem Stadtteil', 'die komplizierte App'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Leihräder dürfen überall in der Stadt abgestellt werden.', loesung: false },
        { typ: 'rf', aussage: 'Vor jeder Fahrt muss man eine Kaution hinterlegen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was schlägt Emine Aydın vor?',
          optionen: ['Die Kaution soll durch eine einmalige Registrierung ersetzt werden.', 'Die Leihräder sollen nur an Studierende verliehen werden.', 'Der Preis pro halbe Stunde soll gesenkt werden.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern.',
      aufgabe: 'In einem Online-Forum wird diskutiert: „Sollten Einwegverpackungen aus Plastik im Supermarkt verboten werden?“ Schreib deine Meinung.',
      punkte: [
        'Erkläre, was deiner Meinung nach geändert werden muss oder sollte.',
        'Nenne Alternativen und sag, wie leicht sie sich umsetzen lassen.',
        'Beschreibe ein Problem, das dabei gelöst werden müsste.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Ich finde, dass Einwegverpackungen aus Plastik stark reduziert werden müssen. Viele Produkte werden heute doppelt verpackt, obwohl das überhaupt nicht nötig ist. Obst und Gemüse lassen sich problemlos lose verkaufen, und für Käse oder Wurst kann man eigene Dosen mitbringen. Solche Lösungen sind schnell umsetzbar und kosten fast nichts. Ein komplettes Verbot halte ich trotzdem für schwierig, denn manche Lebensmittel sind ohne Verpackung nicht lange haltbar. Hier müsste zuerst geklärt werden, welche umweltfreundlichen Materialien eingesetzt werden können. Deshalb wäre ein schrittweiser Ausstieg aus meiner Sicht die beste Lösung. Rafael',
    },
  ],
}
