// Übungsheft C1 — Lektion 25: Schreiben Teil 2 — Die formelle Nachricht
export default {
  lektion: 25,
  titel: 'Übungsheft — Die formelle Nachricht',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zur Sprache der formellen Nachricht. Achte auf feste Formeln, den Konjunktiv II der Höflichkeit, die Rektion der Verben und ein lückenlos durchgehaltenes Sie-Register.',
      items: [
        {
          typ: 'luecke',
          text: 'Ich {1} mich an Sie, weil die zugesagte Reparatur bis heute nicht erfolgt ist. Ich bitte Sie daher, den {2} zu prüfen und mir den bereits gezahlten Betrag zu erstatten.',
          bank: ['wende', 'beziehe', 'Sachverhalt', 'Rückmeldung', 'Frist'],
          loesungen: { 1: 'wende', 2: 'Sachverhalt' },
        },
        {
          typ: 'luecke',
          text: 'Bedauerlicherweise konnten wir die vereinbarte {1} nicht einhalten. Für die dadurch entstandenen {2} bitten wir Sie vielmals um Entschuldigung.',
          bank: ['Frist', 'Unannehmlichkeiten', 'Kulanz', 'Entgegenkommen'],
          loesungen: { 1: 'Frist', 2: 'Unannehmlichkeiten' },
        },
        {
          typ: 'luecke',
          text: 'Wir bedauern, Ihnen mitteilen zu {1}, dass eine Rückerstattung nach Ablauf der Widerrufsfrist nicht mehr möglich ist. Aus {2} bieten wir Ihnen jedoch einen Gutschein über 50 Euro an.',
          bank: ['müssen', 'können', 'Kulanz', 'Anliegen'],
          loesungen: { 1: 'müssen', 2: 'Kulanz' },
        },
        {
          typ: 'mc',
          frage: 'Ich ___ Ihnen sehr verbunden, wenn Sie mir den neuen Termin bis Freitag verbindlich bestätigen könnten.',
          optionen: ['wäre', 'hätte', 'würde'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Welche Formulierung trifft den Ton einer formellen Beschwerde an eine Hausverwaltung?',
          optionen: [
            'Das geht so echt nicht — kümmern Sie sich bitte endlich drum!',
            'Vielleicht könnten Sie eventuell mal nach der Heizung schauen, falls es passt?',
            'Leider muss ich feststellen, dass die Heizung seit nunmehr zwei Wochen ausgefallen ist.',
          ],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: ['Ich danke ihnen für ihr Entgegenkommen.', 'Ich danke Ihnen für Ihr Entgegenkommen.'],
          loesung: 1,
          warum: 'En la carta formal, el pronombre de cortesía y sus formas se escriben **siempre con mayúscula**: *Sie, Ihnen, Ihr*. Con minúscula, *ihnen/ihr* se refiere a «ellos» — un error que cambia el destinatario.',
        },
        {
          typ: 'korrektur',
          optionen: ['Leider konnte ich der Besprechung am Montag nicht assistieren.', 'Leider konnte ich an der Besprechung am Montag nicht teilnehmen.'],
          loesung: 1,
          warum: '«Asistir a una reunión» es **an etwas teilnehmen**. *assistieren* significa «ayudar a alguien como asistente» (*dem Chirurgen assistieren*): falso amigo.',
        },
        {
          typ: 'korrektur',
          optionen: ['Könnten Sie mir bitte mitteilen, wann der Aufbaukurs beginnt?', 'Könnten Sie mir bitte mitteilen, wann beginnt der Aufbaukurs?'],
          loesung: 0,
          warum: 'Tras *mitteilen, wann…* sigue una **pregunta indirecta**: el verbo conjugado va al final (*wann der Aufbaukurs beginnt*).',
        },
        {
          typ: 'zuordnen',
          links: ['eine Frist', 'eine Rückerstattung', 'den Sachverhalt', 'die Rechnung', 'um eine baldige Rückmeldung'],
          rechts: ['einhalten', 'beantragen', 'schildern', 'beanstanden', 'bitten'],
          loesung: {
            'eine Frist': 'einhalten',
            'eine Rückerstattung': 'beantragen',
            'den Sachverhalt': 'schildern',
            'die Rechnung': 'beanstanden',
            'um eine baldige Rückmeldung': 'bitten',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['stehe', 'Verfügung', 'Ihnen', 'Gern', 'Rückfragen', 'ich', 'zur', 'für'],
          loesung: 'Gern stehe ich Ihnen für Rückfragen zur Verfügung.',
          alt: [
            'Für Rückfragen stehe ich Ihnen gern zur Verfügung.',
            'Ich stehe Ihnen gern für Rückfragen zur Verfügung.',
            'Ich stehe Ihnen für Rückfragen gern zur Verfügung.',
          ],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Auszug aus einem Ratgeberartikel und entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Artikelauszug: Beschwerden, die ankommen',
      text: 'Wer sich über eine mangelhafte Leistung ärgert, greift oft im ersten Zorn zur Tastatur. Das ist verständlich, aber selten klug. Mitarbeiterinnen und Mitarbeiter aus Kundenservice und Hausverwaltungen, die für diesen Beitrag befragt wurden, berichten übereinstimmend, dass wütende Nachrichten zwar gelesen, aber keineswegs schneller bearbeitet werden. Im Gegenteil: Wer ausschließlich Vorwürfe erhebt, ohne den Sachverhalt nachvollziehbar zu schildern, zwingt die zuständige Stelle zu Rückfragen — und verliert Zeit.\nErfolgreich sind dagegen Schreiben, die dreierlei leisten: Sie benennen den Mangel präzise, belegen ihn mit Daten oder Rechnungsnummern und formulieren eine konkrete Erwartung. „Ich bitte Sie, mir den Betrag bis zum 30. Juni zu erstatten“ lässt sich bearbeiten, „Ich erwarte, dass endlich etwas passiert“ hingegen nicht. Auch eine Frist zeigt Wirkung, sofern sie realistisch bemessen ist.\nBemerkenswert ist die Rolle des Tons. Eine höfliche Formulierung wird keineswegs als Schwäche ausgelegt. Mehrere Befragte räumten ein, sie seien bei freundlichen Kundinnen und Kunden eher bereit, aus Kulanz über das rechtlich Gebotene hinauszugehen. Eine Einschränkung machten sie allerdings: Übertriebene Unterwürfigkeit wirke unglaubwürdig. Wer sich für seine Beschwerde gleich mehrfach entschuldige, signalisiere, dass er selbst nicht an sein Anliegen glaube.',
      items: [
        { typ: 'rf', aussage: 'Nach Aussage der Befragten werden verärgerte Nachrichten schneller bearbeitet als sachliche.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum gilt der Satz „Ich erwarte, dass endlich etwas passiert“ im Text als ungeeignet?',
          optionen: [
            'Weil er keine konkrete Erwartung enthält, die sich bearbeiten ließe.',
            'Weil er so unhöflich ist, dass er gar nicht erst gelesen wird.',
            'Weil er auf eine rechtlich verbindliche Frist verzichtet.',
          ],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Was berichten die Befragten über den Ton von Beschwerden?',
          optionen: [
            'Höflichkeit wird häufig als Zeichen mangelnder Entschlossenheit verstanden.',
            'Wer sich mehrfach entschuldigt, verleiht seinem Anliegen zusätzliches Gewicht.',
            'Freundliche Kunden erhalten mitunter mehr, als ihnen rechtlich zusteht.',
          ],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Laut Text führen unklare Schilderungen des Sachverhalts zu Verzögerungen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine formelle Nachricht (mindestens 80 Wörter). Halte das Sie-Register lückenlos durch, gehe auf alle drei Leitpunkte ein und formuliere deine Forderung höflich im Konjunktiv II.',
      aufgabe: 'Du hast für ein Wochenende in Dresden ein ruhiges Zimmer mit Frühstück gebucht. Vor Ort bekamst du jedoch ein Zimmer zur Straße mit Baustellenlärm, und das Frühstück wurde dir zusätzlich berechnet. Schreibe an die Hotelleitung.',
      punkte: [
        'Schildere kurz den Sachverhalt (Buchung, Aufenthalt).',
        'Benenne die beiden Mängel und beanstande die Rechnung.',
        'Fordere eine teilweise Rückerstattung und setze eine angemessene Frist.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Damen und Herren,\nich wende mich an Sie, weil ich mit meinem Aufenthalt in Ihrem Hotel vom 3. bis 5. Mai leider nicht zufrieden war.\nGebucht und bestätigt hatte ich ein ruhiges Zimmer mit Frühstück. Zum einen wurde mir jedoch ein Zimmer zur Straße zugewiesen, in dem wegen einer Baustelle ab sieben Uhr an Schlaf nicht zu denken war. Zum anderen wurde mir das Frühstück zusätzlich in Rechnung gestellt, obwohl es im Buchungspreis enthalten war.\nIch möchte Sie daher bitten, mir den Frühstückspreis vollständig sowie einen angemessenen Teil des Zimmerpreises bis zum 31. Mai zu erstatten. Für eine baldige Rückmeldung wäre ich Ihnen sehr dankbar.\nMit freundlichen Grüßen\nLukas Hoffmann',
    },
  ],
}
