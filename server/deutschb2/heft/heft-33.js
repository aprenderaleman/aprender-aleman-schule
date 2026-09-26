// Übungsheft B2 — Lektion 33: Arbeit & Beruf
export default {
  lektion: 33,
  titel: 'Übungsheft — Arbeit & Beruf',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Kollokationen, Präpositionen und Konnektoren rund um die Arbeit: Wähle die passende Lösung.',
      items: [
        {
          typ: 'luecke',
          text: 'Ich habe mich {1} eine Stelle als Krankenpfleger {2} einer großen Klinik beworben.',
          bank: ['um', 'bei', 'über', 'nach'],
          loesungen: { 1: 'um', 2: 'bei' },
        },
        {
          typ: 'luecke',
          text: 'Nach dem Studium möchte ich zuerst im Ausland Erfahrung {1}. Danach will ich meinen Lebenslauf {2} und mich neu bewerben.',
          bank: ['sammeln', 'aktualisieren', 'teilnehmen', 'einladen'],
          loesungen: { 1: 'sammeln', 2: 'aktualisieren' },
        },
        {
          typ: 'luecke',
          text: 'Heute Nachmittag nehme ich {1} einer langen Besprechung teil, danach mache ich endlich {2}.',
          bank: ['an', 'bei', 'Feierabend', 'Freizeit'],
          loesungen: { 1: 'an', 2: 'Feierabend' },
        },
        {
          typ: 'mc',
          frage: 'Die Firma hat mich zu einem Vorstellungsgespräch ___.',
          optionen: ['eingeladen', 'angemeldet', 'beworben'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Im Homeoffice kann man sich die Arbeitszeit flexibler ___.',
          optionen: ['verbringen', 'sparen', 'einteilen'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Viele lesen noch berufliche E-Mails, ___ sie längst Feierabend haben.',
          optionen: ['weil', 'obwohl', 'damit'],
          loesung: 1,
        },
        {
          typ: 'zuordnen',
          links: ['in Teilzeit', 'Feierabend', 'auf die Work-Life-Balance', 'sich um eine Stelle', 'an einer Besprechung'],
          rechts: ['arbeiten', 'machen', 'achten', 'bewerben', 'teilnehmen'],
          loesung: {
            'in Teilzeit': 'arbeiten',
            Feierabend: 'machen',
            'auf die Work-Life-Balance': 'achten',
            'sich um eine Stelle': 'bewerben',
            'an einer Besprechung': 'teilnehmen',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Seit zwei Jahren arbeite ich wie Ingenieurin.', 'Seit zwei Jahren arbeite ich als Ingenieurin.'],
          loesung: 1,
          warum: 'La profesión o función va con **als**; *wie* solo compara («igual que una ingeniera», sin serlo).',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe fünf Jahre Erfahrung im Kundenservice.', 'Ich habe fünf Jahre von Erfahrung im Kundenservice.'],
          loesung: 0,
          warum: '«Cinco años de experiencia»: en alemán sin preposición, **fünf Jahre Erfahrung**.',
        },
        {
          typ: 'satzbau',
          woerter: ['sie', 'Zeit', 'Seit', 'arbeitet', 'hat', 'in', 'mehr', 'Teilzeit', 'sie'],
          loesung: 'Seit sie in Teilzeit arbeitet, hat sie mehr Zeit.',
          alt: ['Sie hat mehr Zeit, seit sie in Teilzeit arbeitet.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Leserbrief und löse die Aufgaben.',
      textTitel: 'Leserbrief zum Artikel „Weniger arbeiten, mehr leben?“',
      text: 'Mit großem Interesse habe ich Ihren Artikel über die Vier-Tage-Woche gelesen. Ich arbeite seit drei Jahren als Grafikerin in einer kleinen Agentur, und seit letztem Herbst haben wir dort freitags frei. Anfangs war ich skeptisch, denn dafür arbeiten wir an den anderen Tagen neun Stunden. Inzwischen möchte ich das Modell nicht mehr missen: Die Besprechungen sind kürzer, weil alle konzentrierter arbeiten, und am langen Wochenende kann ich mich wirklich erholen. Meine Work-Life-Balance hat sich deutlich verbessert. Allerdings muss ich Ihrem Artikel in einem Punkt widersprechen. Sie schreiben, dass die Vier-Tage-Woche für alle Berufe geeignet sei. Meine Schwester ist Krankenpflegerin, und in ihrer Klinik fehlt schon jetzt Personal. Dort würde ein freier Freitag bedeuten, dass ihre Kolleginnen und Kollegen noch mehr Stress haben. Ich wünsche mir daher mehr Ehrlichkeit in der Debatte: Nicht jedes Arbeitsmodell passt zu jeder Branche. — Paula Reinhardt',
      items: [
        {
          typ: 'mc',
          frage: 'Wie stand Paula der Vier-Tage-Woche am Anfang gegenüber?',
          optionen: ['Sie war sofort begeistert.', 'Sie hatte Zweifel.', 'Sie wollte ihre Stelle wechseln.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'In Paulas Agentur arbeitet man an den übrigen Tagen länger.', loesung: true },
        { typ: 'rf', aussage: 'Laut Paula dauern die Besprechungen seit der Umstellung länger.', loesung: false },
        {
          typ: 'mc',
          frage: 'In welchem Punkt widerspricht Paula dem Artikel?',
          optionen: ['Die Vier-Tage-Woche verbessert die Work-Life-Balance.', 'Mit der Vier-Tage-Woche werden Besprechungen kürzer.', 'Die Vier-Tage-Woche eignet sich für alle Berufe.'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Eine Firma in deiner Stadt sucht eine Teilzeitkraft für den Kundenservice. In der Anzeige steht nichts über Homeoffice. Schreib an Frau Lindqvist aus der Personalabteilung.',
      punkte: [
        'Stell dich kurz vor und nenne deine Berufserfahrung.',
        'Frag, ob man zwei Tage pro Woche im Homeoffice arbeiten kann.',
        'Frag, bis wann du deine Bewerbung mit Lebenslauf schicken sollst.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Sehr geehrte Frau Lindqvist, mit großem Interesse habe ich Ihre Anzeige für eine Teilzeitstelle im Kundenservice gelesen. Mein Name ist Carla Mendes, und ich habe drei Jahre Erfahrung im Kundenservice eines Möbelhauses gesammelt. Bevor ich meine Bewerbung abschicke, hätte ich eine Frage: Wäre es möglich, zwei Tage pro Woche im Homeoffice zu arbeiten? Da ich zwei kleine Kinder habe, wäre das für meine Work-Life-Balance sehr wichtig. Außerdem möchte ich wissen, bis wann ich Ihnen meine Unterlagen mit Lebenslauf schicken soll. Vielen Dank im Voraus für Ihre Antwort. Mit freundlichen Grüßen, Carla Mendes',
    },
  ],
}
