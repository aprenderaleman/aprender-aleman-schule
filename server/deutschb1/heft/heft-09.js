// Übungsheft B1 — Lektion 09: Verben mit Präpositionen
export default {
  lektion: 9,
  titel: 'Übungsheft — Verben mit Präpositionen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Lerne Verb, Präposition und Kasus zusammen. Wähle oder ergänze die richtige Form.',
      items: [
        { typ: 'mc', frage: 'Ich denke oft ___ meine Familie in Bogotá.', optionen: ['in', 'an', 'auf'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Wir freuen uns schon {1} den Urlaub im Juli. Und gestern habe ich mich sehr {2} deinen Brief gefreut.',
          bank: ['auf', 'über', 'für', 'von'],
          loesungen: { 1: 'auf', 2: 'über' },
        },
        {
          typ: 'luecke',
          text: 'Mateo nimmt {1} Kurs teil. Er interessiert sich sehr {2} Sprachen.',
          bank: ['am', 'an den', 'für', 'über'],
          loesungen: { 1: 'am', 2: 'für' },
        },
        {
          typ: 'zuordnen',
          links: ['warten', 'träumen', 'sich kümmern', 'Angst haben', 'fragen'],
          rechts: ['auf', 'von', 'um', 'vor', 'nach'],
          loesung: { 'warten': 'auf', 'träumen': 'von', 'sich kümmern': 'um', 'Angst haben': 'vor', 'fragen': 'nach' },
        },
        { typ: 'mc', frage: '___ wartest du? — Auf die Straßenbahn.', optionen: ['Worauf', 'Auf wen', 'Darauf'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Kommst du am Samstag zur Party? — Ja, ich freue mich schon {1}! Wir haben gestern lange {2} gesprochen.',
          bank: ['darauf', 'darüber', 'worauf', 'daran'],
          loesungen: { 1: 'darauf', 2: 'darüber' },
        },
        { typ: 'satzbau', woerter: ['Bus', 'seit', 'Ich', 'den', 'warte', 'Minuten', 'auf', 'zehn'], loesung: 'Ich warte seit zehn Minuten auf den Bus.' },
        { typ: 'satzbau', woerter: ['kümmern', 'die', 'dich', 'du', 'um', 'Kinder', 'Kannst'], loesung: 'Kannst du dich um die Kinder kümmern?' },
        {
          typ: 'korrektur',
          optionen: ['Ich träume mit einer Reise nach Japan.', 'Ich träume von einer Reise nach Japan.'],
          loesung: 1,
          warum: '«Soñar **con**» es *träumen* **von** + Dativ, nunca *mit*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich denke jeden Tag an dich.', 'Ich denke jeden Tag in dich.'],
          loesung: 0,
          warum: '«Pensar **en**» es *denken* **an** + Akkusativ, no *in*.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Sind die Aussagen richtig oder falsch? Wähle bei Aufgabe 3 die richtige Antwort.',
      textTitel: 'Sprachcafé im Nachbarschaftszentrum Lindenhof',
      text: 'Sie interessieren sich für Sprachen und möchten neue Leute kennenlernen? Dann kommen Sie ins Sprachcafé! Jeden Mittwoch von 18 bis 20 Uhr sprechen wir in kleinen Gruppen über Alltag, Reisen und Kultur. Sie müssen keine Angst vor Fehlern haben, denn hier lernen alle voneinander. Am Anfang fragen wir nach Ihrem Niveau, und dann nehmen Sie an einer passenden Gruppe teil. Sie haben kleine Kinder? Kein Problem: Beim Treffen kümmert sich eine Erzieherin um die Kleinen. Die Teilnahme kostet nichts, aber wir freuen uns über eine kleine Spende für Kaffee und Kuchen. Bitte melden Sie sich bis Montag bei Frau Szabo an: Telefon 0341 2267190. Wir freuen uns auf Sie!',
      items: [
        { typ: 'rf', aussage: 'Das Sprachcafé findet jeden Mittwochabend statt.', loesung: true },
        { typ: 'rf', aussage: 'Man muss für das Sprachcafé bezahlen.', loesung: false },
        { typ: 'mc', frage: 'Wer kümmert sich beim Treffen um die Kinder?', optionen: ['Frau Szabo', 'eine Erzieherin', 'die Eltern'], loesung: 1 },
        { typ: 'rf', aussage: 'Man muss sich vorher nicht anmelden.', loesung: false },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Interview im Radio. Löse dann die vier Aufgaben.',
      audio: {
        transcript: 'Moderatorin: Guten Morgen, hier ist das Stadtradio! Unsere Frage heute: Worüber ärgern Sie sich im Alltag, und worauf freuen Sie sich? Am Telefon ist Herr Demir. Hallo!\nMann: Guten Morgen! Also, ich ärgere mich oft über die Busse. Ich warte jeden Morgen lange auf den Bus, manchmal zwanzig Minuten.\nModeratorin: Haben Sie schon mit der Stadt darüber gesprochen?\nMann: Ja, ich habe einen Brief geschrieben, aber ich warte immer noch auf eine Antwort.\nModeratorin: Und worauf freuen Sie sich?\nMann: Auf den Urlaub! In drei Wochen fahre ich mit meiner Familie ans Meer. Meine Kinder träumen schon lange davon.\nModeratorin: Interessieren sich Ihre Kinder für Wassersport?\nMann: Nein, dafür nicht. Sie interessieren sich mehr für Tiere, und am Meer gibt es ein großes Aquarium.\nModeratorin: Dann viel Spaß! Danke für Ihren Anruf.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Worüber ärgert sich Herr Demir?',
          optionen: ['über die Busse', 'über seinen Urlaub', 'über das Radio'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Herr Demir hat schon eine Antwort von der Stadt bekommen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wann fährt die Familie ans Meer?',
          optionen: ['in zwei Wochen', 'in drei Tagen', 'in drei Wochen'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Die Kinder von Herrn Demir interessieren sich für Tiere.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Dein Freund Jan hat dich zu seiner Geburtstagsparty am Samstag eingeladen. Schreib ihm eine E-Mail.',
      punkte: [
        'Bedanke dich für die Einladung.',
        'Erzähl: Worauf freust du dich besonders?',
        'Biete Hilfe an: Worum kannst du dich kümmern?',
      ],
      minWoerter: 40,
      beispielLoesung: 'Lieber Jan, vielen Dank für deine Einladung! Ich freue mich sehr darüber und komme natürlich gern. Besonders freue ich mich auf deine Freunde aus Hamburg und auf die Musik. Soll ich dir helfen? Ich kann mich um den Kuchen kümmern oder am Samstag früher kommen. Bis bald und liebe Grüße, Aylin',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Erzähl von dir. Sprich ungefähr 60 Sekunden.',
      aufgabe: 'Wofür interessierst du dich, worüber ärgerst du dich, wovon träumst du? Erzähl.',
      punkte: [
        'Wofür interessierst du dich? Warum?',
        'Worüber ärgerst du dich manchmal?',
        'Wovon träumst du?',
      ],
      redemittel: ['Ich interessiere mich für …', 'Ich ärgere mich oft über …', 'Ich träume von …', 'Ich denke oft daran.'],
      maxSekunden: 60,
      beispielLoesung: 'Ich interessiere mich sehr für Musik. Ich spiele seit fünf Jahren Gitarre, und am Wochenende gehe ich oft auf Konzerte. Darüber spreche ich auch gern mit meinen Freunden. Manchmal ärgere ich mich über meine Nachbarn, weil sie nachts sehr laut sind. Dann kann ich nicht schlafen. Ich habe schon mit ihnen darüber gesprochen, aber es hat nicht geholfen. Und wovon träume ich? Ich träume von einer Reise nach Japan. Ich denke oft daran und spare schon Geld dafür.',
    },
  ],
}
