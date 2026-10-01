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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen Ausschnitt aus einem wissenschaftlichen Vortrag. Entscheide beim Hören, welche Antwort zutrifft bzw. ob die Aussage richtig oder falsch ist.',
      audio: {
        transcript: 'Meine Damen und Herren, was unterscheidet gute Texte von schwachen, wenn die Zeit knapp ist? Dieser Frage sind wir am Institut für Schreibforschung in einer aktuellen Studie nachgegangen. Ich möchte Ihnen zunächst den Aufbau der Untersuchung schildern und dann zwei Ergebnisse vorstellen, die uns selbst überrascht haben. Wir haben hundertsechzig Studierende gebeten, in fünfundvierzig Minuten einen argumentativen Text zu verfassen, und dabei jeden Tastendruck aufgezeichnet. Nun könnte man annehmen, dass diejenigen am besten abschneiden, die am längsten planen. Das hat sich nicht bestätigt. Wer mehr als ein Viertel der Zeit auf die Gliederung verwendete, geriet am Ende in Zeitnot und brach den Schluss häufig ab. Damit komme ich zum zweiten Ergebnis. Entscheidend war nicht, wie viel jemand überarbeitete, sondern wann. Die stärksten Texte stammten von Personen, die nach jedem Absatz kurz innehielten und das Geschriebene noch einmal lasen. Wer die Überarbeitung dagegen ganz ans Ende schob, korrigierte dort fast nur noch Tippfehler und Endungen, der rote Faden blieb unangetastet. Was folgt daraus? Kohärenz entsteht während des Schreibens und nicht danach. Im nächsten Teil zeige ich Ihnen, wie sich dieses Innehalten gezielt einüben lässt.',
      },
      items: [
        { typ: 'rf', aussage: 'Die besten Texte schrieben diejenigen, die sich für die Planung am meisten Zeit nahmen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was beobachteten die Forschenden bei Personen, die mehr als ein Viertel der Zeit für die Gliederung aufwendeten?',
          optionen: ['Ihnen fehlte am Ende die Zeit für einen vollständigen Schluss.', 'Ihre Texte wiesen einen besonders klaren roten Faden auf.', 'Sie machten auffallend viele Tippfehler.'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wodurch zeichneten sich die Verfasser der stärksten Texte aus?',
          optionen: ['Sie überarbeiteten insgesamt am meisten.', 'Sie überarbeiteten ihren Text erst am Schluss, dafür aber besonders gründlich.', 'Sie lasen das Geschriebene schon während des Schreibens abschnittsweise durch.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Den Teilnehmenden stand für ihren Text eine Dreiviertelstunde zur Verfügung.', loesung: true },
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte ein Kurzreferat von etwa zweieinhalb Minuten. Sprich frei und in einer für deine Zuhörer nachvollziehbaren Reihenfolge.',
      aufgabe: 'In deinem Vorbereitungskurs auf das Zertifikat C1 stellt jede Person in einem Kurzreferat ihren persönlichen Plan für das Modul Schreiben vor. Halte dein Referat (etwa zweieinhalb Minuten, frei gesprochen): Erkläre in einer für deine Zuhörer nachvollziehbaren Reihenfolge, wie du die 75 Minuten einteilst, und begründe deine Entscheidungen.',
      punkte: [
        'Stelle deine Zeiteinteilung für die beiden Aufgaben und die Überarbeitung vor.',
        'Begründe, warum du vor dem Schreiben eine Gliederung anfertigst oder darauf verzichtest.',
        'Erkläre, worauf du in der Überarbeitungsphase zuerst achtest und warum.',
      ],
      redemittel: ['Für … plane ich … Minuten ein, weil …', 'Mit … beginne ich, da …', 'Auf einen ausformulierten Entwurf verzichte ich, denn …', 'In der Überarbeitungsphase achte ich zuerst darauf, ob …', 'Ausschlaggebend dafür ist, dass …'],
      maxSekunden: 150,
      beispielLoesung: 'Ich stelle euch heute kurz meinen Plan für das Modul Schreiben vor. Für die beiden Aufgaben stehen mir fünfundsiebzig Minuten zur Verfügung, und die teile ich folgendermaßen ein: vierzig Minuten für den Diskussionsbeitrag, dreißig für die formelle Nachricht und die letzten fünf für die Überarbeitung. Mit dem Diskussionsbeitrag beginne ich, da er länger ist, mehr Punkte bringt und einen frischen Kopf verlangt. Bei Minute vierzig breche ich ab, selbst wenn mir noch der Schlusssatz fehlt. Das fällt mir schwer, aber eine halbe Nachricht kostet mehr als ein unfertiger Schluss. Vor jedem Text mache ich eine kurze Gliederung, höchstens fünf Minuten. Früher habe ich einfach losgeschrieben und dann mittendrin gemerkt, dass ich einen Leitpunkt vergessen hatte. Seit ich mir zu jedem Leitpunkt zwei Stichwörter notiere, passiert mir das nicht mehr, und der rote Faden ergibt sich fast von selbst. Auf einen ausformulierten Entwurf verzichte ich dagegen, denn den lässt die Zeit schlicht nicht zu. In den letzten fünf Minuten kontrolliere ich zuerst, ob wirklich alle Leitpunkte im Text vorkommen, denn die Erfüllung der Aufgabe wiegt am schwersten. Danach suche ich gezielt nach meinen typischen Fehlern, also nach der Verbstellung im Nebensatz und nach den Artikeln. Mehr ist in dieser Zeit nicht zu schaffen, aber genau diese Fehler kosten mich erfahrungsgemäß die meisten Punkte.',
    },
  ],
}
