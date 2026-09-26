// Übungsheft B1 — Lektion 22: Lesen Teil 4–5: Anweisungen & formelle Texte
export default {
  lektion: 22,
  titel: 'Übungsheft — Anweisungen & formelle Texte',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Offizielle Texte haben feste Muster. Wähle die richtige Form oder das richtige Wort.',
      items: [
        { typ: 'mc', frage: 'Der Müll ___ zu trennen.', optionen: ['ist', 'hat', 'wird'], loesung: 0 },
        {
          typ: 'mc',
          frage: '„Rauchen ist im Haus nicht gestattet.“ Das heißt:',
          optionen: ['Man muss im Haus rauchen.', 'Man kann im Haus rauchen.', 'Man darf im Haus nicht rauchen.'],
          loesung: 2,
        },
        { typ: 'mc', frage: 'Ich möchte beim Amt einen ___ vereinbaren.', optionen: ['Frist', 'Termin', 'Antrag'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Bitte füllen Sie das {1} aus und bezahlen Sie die {2}. Die {3} endet am 30. Juni.',
          bank: ['Formular', 'Gebühr', 'Frist', 'Termin', 'Antrag'],
          loesungen: { 1: 'Formular', 2: 'Gebühr', 3: 'Frist' },
        },
        {
          typ: 'luecke',
          text: 'Bitte {1} Sie die Hausordnung. Bei Fragen {2} Sie sich an die Verwaltung. Online können Sie auch einen Termin {3}.',
          bank: ['beachten', 'wenden', 'vereinbaren', 'stellen', 'einhalten'],
          loesungen: { 1: 'beachten', 2: 'wenden', 3: 'vereinbaren' },
        },
        {
          typ: 'zuordnen',
          links: [
            'Das Treppenhaus ist frei zu halten.',
            'Grillen ist untersagt.',
            'Die Waschküche ist bis 20 Uhr geöffnet.',
            'Der Antrag ist bis Freitag einzureichen.',
            'Haustiere sind gestattet.',
          ],
          rechts: [
            'Man muss das Treppenhaus frei halten.',
            'Man darf nicht grillen.',
            'Man kann bis 20 Uhr waschen.',
            'Man muss den Antrag bis Freitag abgeben.',
            'Man darf Haustiere haben.',
          ],
          loesung: {
            'Das Treppenhaus ist frei zu halten.': 'Man muss das Treppenhaus frei halten.',
            'Grillen ist untersagt.': 'Man darf nicht grillen.',
            'Die Waschküche ist bis 20 Uhr geöffnet.': 'Man kann bis 20 Uhr waschen.',
            'Der Antrag ist bis Freitag einzureichen.': 'Man muss den Antrag bis Freitag abgeben.',
            'Haustiere sind gestattet.': 'Man darf Haustiere haben.',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['abzugeben', 'Der', 'bei', 'ist', 'Verwaltung', 'der', 'Schlüssel'],
          loesung: 'Der Schlüssel ist bei der Verwaltung abzugeben.',
        },
        {
          typ: 'satzbau',
          woerter: ['einen', 'gestellt', 'Wir', 'Amt', 'gestern', 'haben', 'Antrag', 'beim'],
          loesung: 'Wir haben gestern einen Antrag beim Amt gestellt.',
          alt: ['Wir haben gestern beim Amt einen Antrag gestellt.'],
        },
        {
          typ: 'korrektur',
          optionen: ['Bitte wenden Sie sich an der Verwaltung.', 'Bitte wenden Sie sich an die Verwaltung.'],
          loesung: 1,
          warum: '*sich wenden an* va siempre con **Akkusativ** → *an die Verwaltung*. No es un lugar donde estás, es la dirección a la que te diriges.',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Schlüssel ist bis Freitag abzugeben.', 'Der Schlüssel ist bis Freitag zu abgeben.'],
          loesung: 0,
          warum: 'Con verbos separables, **zu** va entre el prefijo y el verbo: *ab**zu**geben*, *ein**zu**reichen* — en una sola palabra.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Brief vom Bürgerbüro. Löse dann die vier Aufgaben.',
      textTitel: 'Brief: Ihr Antrag auf einen Parkausweis',
      text: 'Sehr geehrte Frau Haddad, vielen Dank für Ihren Antrag auf einen Parkausweis vom 3. März. Leider ist Ihr Antrag noch nicht vollständig. Es fehlt eine Kopie von Ihrem Mietvertrag. Diese Kopie ist bis zum 31. März einzureichen. Sie können sie per Post schicken oder persönlich im Bürgerbüro abgeben. Für einen Besuch ist vorher ein Termin zu vereinbaren. Ohne Termin ist eine Bearbeitung leider nicht möglich. Die Gebühr von 30 Euro ist erst nach der Prüfung zu bezahlen. Sie bekommen dann eine Rechnung. Wenn Sie die Frist nicht einhalten, müssen Sie einen neuen Antrag stellen. Bei Fragen wenden Sie sich bitte an Herrn Brandt, Telefon 0351 / 12 34 56, montags bis donnerstags von 8 bis 12 Uhr. Mit freundlichen Grüßen, Ihr Bürgerbüro',
      items: [
        { typ: 'rf', aussage: 'Frau Haddad hat schon alle Unterlagen geschickt.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie kann Frau Haddad die Kopie abgeben?',
          optionen: ['Nur per E-Mail.', 'Ohne Termin im Bürgerbüro.', 'Per Post oder mit Termin im Bürgerbüro.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Wenn die Kopie zu spät kommt, muss sie einen neuen Antrag stellen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wann kann Frau Haddad Herrn Brandt anrufen?',
          optionen: ['Am Montag um 10 Uhr.', 'Am Freitag um 9 Uhr.', 'Am Dienstag um 14 Uhr.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht an das Bürgerbüro. Ergänze dann das Formular.',
      quelle: 'Guten Tag, mein Name ist Kemal Aydın. Ich wohne seit dem 1. Mai in der Lindenstraße 8. Jetzt möchte ich meine neue Adresse anmelden. Am liebsten komme ich am Dienstagvormittag, denn nachmittags arbeite ich. Sie erreichen mich unter 0176 / 44 55 66. Mit freundlichen Grüßen, Kemal Aydın',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Kemal Aydın', 'Aydın', 'Kemal Aydin', 'Aydin'] },
        { id: 'adresse', label: 'Neue Adresse', erwartet: ['Lindenstraße 8', 'Lindenstr. 8', 'in der Lindenstraße 8'] },
        { id: 'anliegen', label: 'Anliegen', erwartet: ['Adresse anmelden', 'neue Adresse anmelden', 'meine neue Adresse anmelden', 'Anmeldung', 'Wohnung anmelden', 'Ummeldung'] },
        { id: 'wunschtermin', label: 'Wunschtermin', erwartet: ['Dienstagvormittag', 'am Dienstagvormittag', 'Dienstag vormittags', 'Dienstag Vormittag', 'Dienstag vormittag'] },
        { id: 'telefon', label: 'Telefon', erwartet: ['0176 / 44 55 66', '0176 445566', '0176/445566', '0176 44 55 66', '0176/44 55 66', '0176445566'] },
      ],
    },
  ],
}
