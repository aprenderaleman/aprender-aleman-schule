// Übungsheft B2 — Lektion 05: Konnektoren II — final, temporal, konditional
export default {
  lektion: 5,
  titel: 'Übungsheft — Konnektoren II',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Zweck, Zeit oder Bedingung? Ergänze den passenden Konnektor und achte bei nachdem auf die Zeitenfolge.',
      items: [
        {
          typ: 'luecke',
          text: 'Tarek besucht einen Abendkurs, {1} seine Chancen auf dem Arbeitsmarkt zu verbessern. Seine Frau bringt abends die Kinder ins Bett, {2} er in Ruhe lernen kann.',
          bank: ['um', 'damit', 'obwohl', 'bis'],
          loesungen: { 1: 'um', 2: 'damit' },
        },
        {
          typ: 'luecke',
          text: 'Nachdem die letzten Gäste {1}, räumten wir gemeinsam die Küche auf. — Nachdem ich die Unterlagen {2}, schicke ich sie Ihnen per E-Mail zu.',
          bank: ['gegangen waren', 'gegangen sind', 'geprüft habe', 'geprüft hatte'],
          loesungen: { 1: 'gegangen waren', 2: 'geprüft habe' },
        },
        {
          typ: 'luecke',
          text: 'Sofia fährt jeden Morgen mit dem Rad zur Arbeit. {1} sie unterwegs ist, hört sie Podcasts auf Deutsch. {2} sie im Büro ankommt, holt sie sich noch schnell einen Kaffee beim Bäcker. Dieses Ritual will sie beibehalten, {3} sie fließend Deutsch spricht.',
          bank: ['Während', 'Bevor', 'bis', 'seitdem', 'Nachdem'],
          loesungen: { 1: 'Während', 2: 'Bevor', 3: 'bis' },
        },
        { typ: 'mc', frage: '___ du Fragen hast, melde dich bitte jederzeit bei mir.', optionen: ['Falls', 'Bis', 'Damit'], loesung: 0 },
        { typ: 'mc', frage: '___ alle Teilnehmenden einverstanden sind, verschieben wir die Sitzung auf Donnerstag.', optionen: ['Bevor', 'Seitdem', 'Sofern'], loesung: 2 },
        { typ: 'mc', frage: 'Er spart jeden Monat Geld, ___ sich im Sommer ein neues Fahrrad zu kaufen.', optionen: ['damit', 'um', 'für'], loesung: 1 },
        {
          typ: 'korrektur',
          optionen: ['Ich lerne jeden Abend, für die Prüfung zu bestehen.', 'Ich lerne jeden Abend, um die Prüfung zu bestehen.'],
          loesung: 1,
          warum: '«para + infinitivo» es **um … zu**, nunca *für … zu* (calco de «para»).',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich spreche langsam, damit du mich verstehst.', 'Ich spreche langsam, um du mich zu verstehen.'],
          loesung: 0,
          warum: 'Con dos sujetos distintos (*ich* / *du*) solo vale **damit**; *um … zu* no admite sujeto propio. Y tras *damit* va indicativo, no hay subjuntivo como en «para que me entiendas».',
        },
        {
          typ: 'korrektur',
          optionen: ['Seit ich auf dem Land gewohnt habe, gehe ich oft wandern.', 'Seit ich auf dem Land wohne, gehe ich oft wandern.'],
          loesung: 1,
          warum: 'Si la situación dura hasta hoy, *seit* va con **presente**: *seit ich hier wohne*. No lo pongas en pasado por influencia de «desde que me mudé».',
        },
        {
          typ: 'satzbau',
          woerter: ['das', 'gehst', 'aus', 'Bevor', 'bitte', 'du', 'Licht', 'mach'],
          loesung: 'Bevor du gehst, mach bitte das Licht aus.',
          alt: ['Bevor du gehst, mach das Licht bitte aus.', 'Mach bitte das Licht aus, bevor du gehst.', 'Mach das Licht bitte aus, bevor du gehst.', 'Bitte mach das Licht aus, bevor du gehst.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Auszug aus einem Zeitungsartikel. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Artikelauszug: Plaudern ohne Notendruck',
      text: 'Jeden Donnerstagabend verwandelt sich der Lesesaal der Stadtbibliothek Ahlfeld in ein Sprachcafé. Die Idee stammt von der pensionierten Lehrerin Renate Kowalski. Nachdem sie jahrelang Deutschkurse für Zugewanderte gegeben hatte, wollte sie einen Ort schaffen, an dem man ohne Notendruck üben kann. Seit das Café vor zwei Jahren eröffnet wurde, kommen regelmäßig bis zu vierzig Gäste. Während die einen über Alltagsthemen plaudern, bereiten sich andere gezielt auf Vorstellungsgespräche vor. Damit niemand allein am Tisch sitzt, begrüßen Ehrenamtliche jeden neuen Gast persönlich. Die Teilnahme ist kostenlos. Einen festen Platz hat man aber nur, sofern man sich vorher auf der Webseite der Bibliothek anmeldet. Wer spontan vorbeikommt, bekommt nur einen Platz, falls noch Stühle frei sind. Bevor die Sommerferien beginnen, plant Kowalski ein großes Fest mit Musik und Gerichten aus den Herkunftsländern der Gäste. Bis dahin sucht das Team noch Freiwillige, die einmal im Monat einen Abend leiten.',
      items: [
        { typ: 'rf', aussage: 'Renate Kowalski hat früher selbst Deutsch unterrichtet.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was muss man tun, um sicher einen Platz zu bekommen?',
          optionen: ['einen kleinen Beitrag bezahlen', 'möglichst früh am Abend kommen', 'sich vorher auf der Webseite anmelden'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Im Sprachcafé sprechen alle Gäste über dieselben Themen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wofür sucht das Team Freiwillige?',
          optionen: ['für die Organisation des Sommerfests', 'um einmal im Monat einen Abend zu leiten', 'um Deutschkurse für Zugewanderte zu geben'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst eine Nachricht auf dem Anrufbeantworter. Entscheide bei jeder Aufgabe, welche Lösung dem Gehörten entspricht.',
      audio: {
        transcript: 'Guten Tag, Herr Okafor, hier spricht Katrin Lindner von der Personalabteilung. Ich rufe an, damit Sie für Ihren ersten Arbeitstag alles Wichtige wissen. Wir hatten ursprünglich Montag, den dritten März, vereinbart. Da an diesem Tag aber das ganze Team auf einer Messe ist, beginnen Sie erst am Dienstag, und zwar um halb neun. Bevor Sie in Ihre Abteilung gehen, kommen Sie bitte zu mir in den zweiten Stock, um Ihren Mitarbeiterausweis abzuholen. Bringen Sie dafür ein Passfoto mit. Nachdem Sie den Ausweis bekommen haben, zeigt Ihnen ein Kollege das Haus. In der ersten Woche sind Sie nur bis zwölf Uhr in der Abteilung, denn nachmittags finden die Schulungen statt. Den Arbeitsvertrag haben wir Ihnen gestern geschickt. Sofern Sie mit allem einverstanden sind, schicken Sie ihn bitte unterschrieben zurück. Dafür haben Sie Zeit, bis die Woche zu Ende ist, also bis Freitag. Falls Sie noch Fragen haben, erreichen Sie mich heute bis siebzehn Uhr. Auf Wiederhören.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Wann beginnt der erste Arbeitstag von Herrn Okafor?',
          optionen: ['am Montag um 8:30 Uhr', 'am Dienstag um 8:30 Uhr', 'am Dienstag um 9:30 Uhr'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Herr Okafor soll zuerst in seine Abteilung gehen und danach den Ausweis abholen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was soll Herr Okafor am ersten Tag mitbringen?',
          optionen: ['ein Passfoto', 'den unterschriebenen Arbeitsvertrag', 'seinen Mitarbeiterausweis'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Für den unterschriebenen Vertrag hat Herr Okafor bis Freitag Zeit.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern. Denk an Betreff, Anrede und Gruß.',
      aufgabe: 'Die Bildungsakademie Nordstern bietet im Oktober einen Wochenendkurs „Präsentieren im Beruf“ an. Du möchtest teilnehmen. Schreib der Akademie eine E-Mail, um dich anzumelden.',
      punkte: [
        'Erkläre, wozu du den Kurs besuchen möchtest (um … zu oder damit).',
        'Frag, was passiert, falls du einen Termin verpasst.',
        'Erkundige dich, was du erledigen musst, bevor der Kurs beginnt.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Betreff: Anmeldung zum Kurs „Präsentieren im Beruf“ — Sehr geehrte Damen und Herren, hiermit möchte ich mich für Ihren Wochenendkurs „Präsentieren im Beruf“ im Oktober anmelden. Ich besuche den Kurs, um sicherer vor Kunden zu sprechen, denn in meiner neuen Stelle muss ich regelmäßig Projekte vorstellen. Außerdem habe ich eine Frage: Was passiert, falls ich wegen einer Dienstreise einen Termin verpasse? Kann ich ihn dann nachholen? Bitte teilen Sie mir auch mit, was ich erledigen muss, bevor der Kurs beginnt. Muss ich die Gebühr vorher überweisen? Ich würde mich über eine kurze Rückmeldung freuen. Mit freundlichen Grüßen, Paula Richter',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Berichte von einer eigenen Erfahrung. Sprich etwa 90 Sekunden und verwende Konnektoren aus dieser Lektion.',
      aufgabe: 'In einem Podcast für Deutschlernende erzählen Hörerinnen und Hörer von einem Neuanfang. Berichte von einer wichtigen Veränderung in deinem Leben, zum Beispiel von einem Umzug, einer neuen Stelle oder dem Beginn einer Ausbildung. Sprich etwa 90 Sekunden und verwende Konnektoren wie bevor, nachdem, seit, bis, um … zu, damit oder falls.',
      punkte: [
        'Erzähl, wie dein Leben vorher aussah und wozu du dich für die Veränderung entschieden hast (bevor, um … zu oder damit).',
        'Beschreibe, wie die erste Zeit danach verlief (nachdem, während oder bis).',
        'Sag, was sich seitdem verändert hat, und gib einen Rat für alle, die dasselbe planen (seit, falls oder wenn).',
      ],
      redemittel: ['Bevor ich …, …', 'Nachdem ich … war, …', 'Seit ich …, …', 'Falls ihr …, …'],
      maxSekunden: 90,
      beispielLoesung: 'Ich möchte von meinem Umzug nach Deutschland erzählen. Bevor ich nach Hamburg kam, habe ich in Valencia in einem kleinen Hotel gearbeitet. Die Arbeit war in Ordnung, aber ich wollte etwas Neues lernen. Deshalb bin ich vor drei Jahren umgezogen, um hier eine Ausbildung als Hotelkauffrau zu machen. Der Anfang war nicht leicht. Nachdem ich angekommen war, wohnte ich zuerst zwei Monate bei einer Freundin, bis ich endlich ein eigenes Zimmer gefunden hatte. Während ich die Ausbildung gemacht habe, habe ich abends noch einen Deutschkurs besucht, damit mich die Gäste besser verstehen. Das war anstrengend, aber es hat sich gelohnt. Seit ich hier lebe, bin ich viel selbstständiger geworden. Ich habe neue Freunde gefunden und spreche jeden Tag Deutsch. Wenn ich heute zurückdenke, bin ich froh über diesen Schritt. Falls ihr auch einen Umzug ins Ausland plant, habe ich einen Rat: Lernt die Sprache, bevor ihr umzieht, und sucht euch früh eine Wohnung.',
    },
  ],
}
