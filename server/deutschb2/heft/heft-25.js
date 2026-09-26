// Übungsheft B2 — Lektion 25: Hören Teil 2 & 3: Interview & Diskussion
export default {
  lektion: 25,
  titel: 'Übungsheft — Interview & Diskussion',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Gesprächsmarker, Zustimmung und Widerspruch: Wähle die passende Lösung und achte darauf, was die Person wirklich meint.',
      items: [
        {
          typ: 'luecke',
          text: 'Da muss ich Ihnen {1}: Die Zahlen zeigen etwas ganz anderes. In einem Punkt stimme ich Ihnen aber {2}: Wir brauchen eine Lösung.',
          bank: ['widersprechen', 'zu', 'zustimmen', 'bei'],
          loesungen: { 1: 'widersprechen', 2: 'zu' },
        },
        {
          typ: 'luecke',
          text: 'Was {1} Sie von der Vier-Tage-Woche? — Ehrlich gesagt halte ich nicht viel {2}.',
          bank: ['halten', 'davon', 'meinen', 'darüber'],
          loesungen: { 1: 'halten', 2: 'davon' },
        },
        {
          typ: 'mc',
          frage: '„___ gesagt finde ich den Vorschlag ziemlich unrealistisch.“',
          optionen: ['Ehrlich', 'Eigentlich', 'Also'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Welcher Satz drückt einen höflichen Widerspruch aus?',
          optionen: [
            'Da stimme ich Ihnen voll und ganz zu.',
            'Das stimmt schon, aber in der Praxis sieht es anders aus.',
            'Also, ich fasse kurz zusammen.',
          ],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: '„Na ja, ich weiß nicht, ob das wirklich funktioniert.“ Was drückt die Sprecherin aus?',
          optionen: ['Begeisterung', 'eine neutrale Information', 'Skepsis'],
          loesung: 2,
        },
        {
          typ: 'zuordnen',
          links: ['also', 'na ja', 'ehrlich gesagt', 'eigentlich', 'allerdings'],
          rechts: [
            'leitet eine Zusammenfassung oder Folgerung ein',
            'drückt Zögern oder Zweifel aus',
            'leitet eine offene, direkte Meinung ein',
            'nennt, wie es im Grunde ist oder geplant war',
            'schränkt das vorher Gesagte ein',
          ],
          loesung: {
            also: 'leitet eine Zusammenfassung oder Folgerung ein',
            'na ja': 'drückt Zögern oder Zweifel aus',
            'ehrlich gesagt': 'leitet eine offene, direkte Meinung ein',
            eigentlich: 'nennt, wie es im Grunde ist oder geplant war',
            allerdings: 'schränkt das vorher Gesagte ein',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Anna kommt mit, und ihr Bruder kommt auch.', 'Anna kommt mit, und ihr Bruder kommt also.'],
          loesung: 0,
          warum: '«También» es **auch**; *also* significa «pues, o sea, por lo tanto».',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich halte viel über diesen Vorschlag.', 'Ich halte viel von diesem Vorschlag.'],
          loesung: 1,
          warum: '*halten* en el sentido de «opinar» va con **von** + dativo: *viel / wenig von etwas halten*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Da stimme ich Ihnen zu.', 'Da stimme ich mit Ihnen zu.'],
          loesung: 0,
          warum: '*zustimmen* rige dativo sin preposición: *jemandem zustimmen*. El «con» de «estar de acuerdo con» no se traduce.',
        },
        {
          typ: 'satzbau',
          woerter: ['ob', 'Ich', 'die', 'weiß', 'das', 'Lösung', 'nicht', 'ist'],
          loesung: 'Ich weiß nicht, ob das die Lösung ist.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Bericht über eine Podiumsdiskussion und löse die Aufgaben. Achte darauf, wer welchen Standpunkt vertritt.',
      textTitel: 'Artikelauszug: Wie viel Tourismus verträgt die Altstadt?',
      text: 'Wie viel Tourismus verträgt unsere Altstadt? Darüber diskutierten am Dienstag im Rathaus drei Gäste. Die Moderatorin Petra Lindner stellte zu Beginn die Runde vor: den Hotelier Tobias Arnold, die Anwohnerin Selin Demir und den Stadtplaner Jonas Wiegand. Arnold vertrat einen klaren Standpunkt: Ohne Touristen gäbe es viele Geschäfte in der Altstadt längst nicht mehr. Demir widersprach ihm — allerdings nicht grundsätzlich. „Das stimmt schon“, sagte sie, „aber wenn in meinem Haus inzwischen vier Ferienwohnungen sind, habe ich keine Nachbarn mehr.“ Sie fordert deshalb strengere Regeln für die Vermietung an Urlauber. Wiegand hielt sich zunächst zurück. Eigentlich sei die Stadt nicht zu voll, meinte er, sondern nur schlecht organisiert: Fast alle Besucher drängten sich in denselben drei Straßen. Er schlug vor, auch andere Stadtteile bekannter zu machen. Einem Verbot neuer Hotels, wie es einige Zuhörer forderten, stimmte keiner der drei Gäste zu. Einig war man sich am Ende trotzdem nur in einem Punkt: Die Diskussion soll im Herbst weitergehen.',
      items: [
        {
          typ: 'mc',
          frage: 'Welchen Standpunkt vertritt Selin Demir?',
          optionen: [
            'Sie lehnt den Tourismus in der Altstadt grundsätzlich ab.',
            'Sie erkennt das Argument des Hoteliers an, verlangt aber strengere Regeln für Ferienwohnungen.',
            'Sie fordert ein Verbot neuer Hotels.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Laut Jonas Wiegand hat die Altstadt vor allem ein Organisationsproblem.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie reagierten die Gäste auf die Forderung, keine neuen Hotels mehr zu erlauben?',
          optionen: [
            'Nur der Hotelier war dagegen.',
            'Alle drei Gäste unterstützten sie.',
            'Keiner der drei Gäste unterstützte sie.',
          ],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Am Ende waren sich die drei Gäste in allen wichtigen Fragen einig.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Im Online-Forum deiner Stadtzeitung wird diskutiert: „Soll die Innenstadt autofrei werden?“ Ein Nutzer schreibt: „Autos raus — sofort und komplett!“ Antworte ihm.',
      punkte: [
        'Nenne deinen eigenen Standpunkt.',
        'Stimm einem Argument des Nutzers zu und widersprich ihm dann höflich (das stimmt schon, aber … / allerdings).',
        'Mach einen Kompromissvorschlag.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Ehrlich gesagt halte ich wenig davon, die Innenstadt sofort und komplett für Autos zu sperren. Das stimmt schon: Weniger Verkehr bedeutet bessere Luft, und davon profitieren wir alle. Allerdings sind viele ältere Menschen und Handwerker auf das Auto angewiesen, und die kleinen Geschäfte brauchen ihre Kundschaft. Mein Vorschlag wäre deshalb ein Kompromiss: Wir sollten zuerst autofreie Samstage testen und am Stadtrand Parkplätze mit guten Busverbindungen schaffen. Wenn das funktioniert, kann man den nächsten Schritt gehen. Viele Grüße, Matteo',
    },
  ],
}
