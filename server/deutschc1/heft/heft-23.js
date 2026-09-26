// Übungsheft C1 — Lektion 23: Modul Schreiben — Überblick
export default {
  lektion: 23,
  titel: 'Übungsheft — Modul Schreiben im Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben so, wie du in den letzten fünf Minuten der Prüfung deinen Text überarbeitest: Prüfe Genus und Endungen, Verbstellung, Rektion und Register.',
      items: [
        {
          typ: 'luecke',
          text: 'Wer alle {1} abdeckt, sichert sich beim Kriterium „Erfüllung der Aufgabe“ eine solide Note. Ein einziger {2} gegen das Register kann diesen Vorsprung allerdings zunichtemachen.',
          bank: ['Leitpunkte', 'Verstoß', 'Entwürfe', 'Einwand'],
          loesungen: { 1: 'Leitpunkte', 2: 'Verstoß' },
        },
        {
          typ: 'zuordnen',
          links: ['den roten Faden', 'die vorgegebene Wortzahl', 'eine Gliederung in Stichpunkten', 'fünf Minuten für die Überarbeitung', 'Genusfehler gezielt'],
          rechts: ['nicht verlieren', 'einhalten', 'anlegen', 'reservieren', 'aufspüren'],
          loesung: { 'den roten Faden': 'nicht verlieren', 'die vorgegebene Wortzahl': 'einhalten', 'eine Gliederung in Stichpunkten': 'anlegen', 'fünf Minuten für die Überarbeitung': 'reservieren', 'Genusfehler gezielt': 'aufspüren' },
        },
        {
          typ: 'luecke',
          text: 'Der Fachkräftemangel stellt ein {1} Problem dar; {2} Thema verdient deshalb eine differenzierte Betrachtung.',
          bank: ['erhebliches', 'erheblicher', 'das', 'der'],
          loesungen: { 1: 'erhebliches', 2: 'das' },
        },
        {
          typ: 'mc',
          frage: 'Die Maßnahme ist sinnvoll. Dem ___ allerdings entgegen, dass viele Betroffene das Gegenteil berichten.',
          optionen: ['spricht', 'hält', 'steht'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Ich bitte Sie, mir den neuen Termin schriftlich zu bestätigen. Für eine baldige Rückmeldung ___.',
          optionen: ['bin ich dir echt dankbar', 'danke ich schon mal', 'wäre ich Ihnen sehr dankbar'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: '___ der Aufgabenstellung steht, dass der Beitrag etwa 230 Wörter umfassen soll.',
          optionen: ['In', 'Auf', 'An'],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Wegen des Streiks wurde die Prüfung um eine Woche verschoben.', 'Wegen dem Streik wurde die Prüfung um eine Woche verschoben.'],
          loesung: 0,
          warum: 'En la lengua escrita *wegen* rige **genitivo**: *wegen des Streiks*. *wegen dem* es coloquial y en un texto C1 se penaliza.',
        },
        {
          typ: 'korrektur',
          optionen: ['Zusammenfassend, die Weiterbildung ist eine Investition in die Zukunft.', 'Zusammenfassend ist die Weiterbildung eine Investition in die Zukunft.'],
          loesung: 1,
          warum: 'Tras un adverbio en posición 1 no va coma y el verbo ocupa **inmediatamente** la posición 2. Calco de «En resumen, la formación es…».',
        },
        {
          typ: 'korrektur',
          optionen: ['Im vergangenen Semester habe ich an einem Schreibworkshop assistiert.', 'Im vergangenen Semester habe ich an einem Schreibworkshop teilgenommen.'],
          loesung: 1,
          warum: 'Falso amigo: «asistir a un curso» = **an etwas teilnehmen**. *assistieren* significa ayudar como asistente.',
        },
        {
          typ: 'satzbau',
          woerter: ['bleibe', 'Vorteile', 'es', 'skeptisch', 'Obwohl', 'ich', 'viele', 'gibt'],
          loesung: 'Obwohl es viele Vorteile gibt, bleibe ich skeptisch.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Rezension. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Rezension: Henrike Vogt, „Fünfundsiebzig Minuten“',
      text: 'Wer unter Zeitdruck schreiben muss, greift gern zu Ratgebern, die schnelle Rezepte versprechen. Henrike Vogts schmaler Band „Fünfundsiebzig Minuten“ verspricht keine — und ist gerade deshalb lesenswert. Die Autorin, die seit zwanzig Jahren Prüfungstexte bewertet, räumt zunächst mit einem verbreiteten Irrtum auf: Nicht der fehlende Wortschatz koste die meisten Punkte, sondern die mangelnde Erfüllung der Aufgabe. Wer einen Leitpunkt übergehe, verliere mehr, als ein Dutzend Genusfehler je kosten könnte.\nÜberzeugend ist auch Vogts Plädoyer für die Gliederung. Fünf Minuten Planung, so ihre These, sparten am Ende eine Viertelstunde, weil niemand mehr ganze Absätze streichen müsse. Einen ausformulierten Entwurf hält sie dagegen für einen Luxus, den sich unter Prüfungsbedingungen kaum jemand leisten könne.\nWeniger gelungen ist das Kapitel zur Kohärenz. Statt zu zeigen, wie ein roter Faden entsteht, reiht Vogt Listen von Konnektoren aneinander — ausgerechnet jene mechanische Aufzählung, vor der sie an anderer Stelle eindringlich warnt. Wer jedoch vor allem wissen will, wie man die letzten Minuten sinnvoll für die Überarbeitung nutzt, findet hier die klügste Checkliste, die derzeit zu haben ist.',
      items: [
        { typ: 'rf', aussage: 'Nach Vogt verlieren Prüflinge die meisten Punkte durch einen zu begrenzten Wortschatz.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie beurteilt die Autorin einen ausformulierten Entwurf?',
          optionen: ['Sie hält ihn für unverzichtbar, damit später keine Absätze gestrichen werden müssen.', 'Sie hält ihn unter Prüfungsbedingungen für kaum realisierbar.', 'Sie empfiehlt, ihn in den letzten fünf Minuten anzufertigen.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was kritisiert die Rezension am Kapitel zur Kohärenz?',
          optionen: ['Es verfährt genau so mechanisch, wie die Autorin es an anderer Stelle selbst kritisiert.', 'Es enthält zu wenige Konnektoren, um im Prüfungsalltag nützlich zu sein.', 'Es fällt deutlich umfangreicher aus als die übrigen Kapitel.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Rezension hebt die Hinweise zur Überarbeitungsphase besonders lobend hervor.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine formelle Nachricht mit mindestens 80 Wörtern. Achte auf ein durchgehaltenes Sie-Register, eine angemessene Anrede und Grußformel und den Konjunktiv II der Höflichkeit.',
      aufgabe: 'Du hast im Modul Schreiben die Bestehensgrenze knapp verfehlt und möchtest das Modul einzeln wiederholen. Schreibe an das Prüfungszentrum.',
      punkte: [
        'Nenne den Anlass deines Schreibens und deinen Prüfungstermin.',
        'Bitte um eine Aufschlüsselung deiner Bewertung nach den vier Bewertungskriterien.',
        'Erkundige dich nach dem nächsten Termin für die Wiederholung des Moduls und nenne eine Frist für die Antwort.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Damen und Herren,\nam 14. Juni habe ich in Ihrem Prüfungszentrum die Prüfung zum Zertifikat C1 abgelegt. Im Modul Schreiben habe ich die Bestehensgrenze leider um drei Punkte verfehlt.\nDa ich gezielt an meinen Schwächen arbeiten möchte, wäre ich Ihnen dankbar, wenn Sie mir eine Aufschlüsselung meiner Bewertung nach den vier Bewertungskriterien zukommen lassen könnten. Insbesondere interessiert mich, ob eher die Erfüllung der Aufgabe oder die Strukturen den Ausschlag gegeben haben.\nDarüber hinaus möchte ich mich erkundigen, wann der nächste Termin stattfindet, an dem ich das Modul einzeln wiederholen kann. Für eine Rückmeldung bis zum 30. Juni wäre ich Ihnen sehr verbunden.\nMit freundlichen Grüßen\nLucía Fernández',
    },
  ],
}
