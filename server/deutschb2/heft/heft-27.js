// Übungsheft B2 — Lektion 27: Modul Schreiben — Überblick & Bewertung
export default {
  lektion: 27,
  titel: 'Übungsheft — Schreiben: Überblick & Bewertung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bewertungskriterien und Schluss-Check: Wähle die passende Lösung und achte auf die typischen Fehlerquellen.',
      items: [
        {
          typ: 'luecke',
          text: 'Lies zuerst die {1} genau und notiere zu jedem {2} ein paar Stichwörter.',
          bank: ['Aufgabenstellung', 'Inhaltspunkt', 'Flüchtigkeitsfehler', 'Kohärenz'],
          loesungen: { 1: 'Aufgabenstellung', 2: 'Inhaltspunkt' },
        },
        {
          typ: 'luecke',
          text: 'Wer die Prüfung {1} will, sollte am Ende genug Zeit einplanen, um den eigenen Text zu {2}.',
          bank: ['bestehen', 'überarbeiten', 'durchfallen', 'verknüpfen'],
          loesungen: { 1: 'bestehen', 2: 'überarbeiten' },
        },
        {
          typ: 'luecke',
          text: 'Online-Kurse sind praktisch, {1} man zu Hause lernen kann. {2} fehlt vielen die Disziplin, und sie brechen den Kurs ab.',
          bank: ['weil', 'Allerdings', 'denn', 'Zum Beispiel'],
          loesungen: { 1: 'weil', 2: 'Allerdings' },
        },
        {
          typ: 'mc',
          frage: 'Welches Kriterium ist betroffen, wenn ein Inhaltspunkt der Aufgabe komplett fehlt?',
          optionen: ['Wortschatz', 'Erfüllung', 'Strukturen'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welche Anrede passt zum Register einer formellen Nachricht an deine Vermieterin?',
          optionen: ['Hallo Frau Krüger, wie geht’s dir?', 'Liebe Anja,', 'Sehr geehrte Frau Krüger,'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Für deinen Forumsbeitrag hast du ___ interessantes Thema gewählt.',
          optionen: ['eine', 'ein', 'einen'],
          loesung: 1,
        },
        {
          typ: 'zuordnen',
          links: ['Erfüllung', 'Kohärenz', 'Wortschatz', 'Strukturen'],
          rechts: [
            'Ein Inhaltspunkt fehlt.',
            'Die Sätze stehen unverbunden nebeneinander.',
            'Der Text benutzt achtmal „gut“ und sechsmal „machen“.',
            'Nach „weil“ steht das Verb an Position 2.',
          ],
          loesung: {
            Erfüllung: 'Ein Inhaltspunkt fehlt.',
            Kohärenz: 'Die Sätze stehen unverbunden nebeneinander.',
            Wortschatz: 'Der Text benutzt achtmal „gut“ und sechsmal „machen“.',
            Strukturen: 'Nach „weil“ steht das Verb an Position 2.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Deshalb ich schreibe Ihnen diese E-Mail.', 'Deshalb schreibe ich Ihnen diese E-Mail.'],
          loesung: 1,
          warum: 'Si la frase empieza por *deshalb*, *gestern*, *leider*…, el verbo sigue **en posición 2** y el sujeto va detrás.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin sicher dass die Lösung funktioniert.', 'Ich bin sicher, dass die Lösung funktioniert.'],
          loesung: 1,
          warum: 'Delante de *dass, weil, wenn, obwohl* la **coma es obligatoria** en alemán, aunque en español no se ponga.',
        },
        {
          typ: 'korrektur',
          optionen: ['Leider bin ich in der Prüfung durchgefallen.', 'Leider wurde ich in der Prüfung suspendiert.'],
          loesung: 0,
          warum: '«Suspender un examen» es **durchfallen**; *suspendieren* significa apartar a alguien de su cargo.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag und löse die Aufgaben.',
      textTitel: 'Forumsbeitrag: Wie ich das Modul Schreiben geschafft habe',
      text: 'Hallo zusammen, letzte Woche habe ich die Prüfung für das Zertifikat B2 bestanden, und im Modul Schreiben hatte ich sogar mehr Punkte als im Lesen. Dabei war Schreiben lange mein Albtraum. Bei meinem ersten Übungstest bin ich glatt durchgefallen, weil ich beim Forumsbeitrag einen Inhaltspunkt einfach übersehen hatte. Seitdem lese ich die Aufgabenstellung zweimal und hake jeden Punkt ab, sobald ich ihn behandelt habe. Mein zweites Problem war die Zeit: Ich habe immer zu lange am ersten Text gesessen. Jetzt stelle ich mir einen Wecker auf 50 Minuten. Am meisten geholfen hat mir aber der Schluss-Check. Meine Tutorin hat mir gezeigt, dass fast alle meine Fehler Flüchtigkeitsfehler waren: fehlende Kommas vor „dass“ und das Verb an der falschen Stelle. Die Regeln kannte ich eigentlich. Mein Tipp: Plant die letzten fünf Minuten fest zum Überarbeiten ein — und verzichtet auf komplizierte Formulierungen, wenn ihr euch nicht sicher seid. Viel Erfolg! Lucía',
      items: [
        {
          typ: 'mc',
          frage: 'Warum ist Lucía beim ersten Übungstest durchgefallen?',
          optionen: [
            'Sie hat zu viele Grammatikfehler gemacht.',
            'Sie hat einen Inhaltspunkt nicht behandelt.',
            'Sie hat den zweiten Text nicht fertig geschrieben.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Regeln für Kommas und Verbstellung waren Lucía vorher unbekannt.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was empfiehlt Lucía am Ende?',
          optionen: [
            'feste Zeit für die Überarbeitung einzuplanen',
            'möglichst viele komplizierte Formulierungen zu benutzen',
            'den ersten Text besonders ausführlich zu schreiben',
          ],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Im Modul Schreiben hat Lucía besser abgeschnitten als im Modul Lesen.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst eine Sprachnachricht einer Tutorin. Löse die Aufgaben.',
      audio: {
        transcript: 'Hallo Diego, hier ist Katrin, deine Tutorin. Ich habe deinen Forumsbeitrag von gestern korrigiert und wollte dir kurz eine Rückmeldung geben. Zuerst das Positive. Du bist auf alle drei Inhaltspunkte eingegangen, und dein Text ist in klare Absätze gegliedert. Das war beim letzten Mal noch anders. Auch dein Wortschatz gefällt mir, du findest inzwischen oft einen treffenden Ausdruck. Weniger gut sieht es bei den Strukturen aus. Ich habe vierzehn Fehler gezählt, und fast alle sind Flüchtigkeitsfehler. Das Verb steht bei dir meistens richtig, aber viele Adjektivendungen stimmen nicht, und einige Nomen hast du kleingeschrieben. Solche Fehler findest du selbst, wenn du den Text am Ende überarbeitest. Mein Vorschlag wäre, dass du beim nächsten Text nicht bis zur letzten Minute schreibst, sondern fünf Minuten früher aufhörst und nur noch kontrollierst. Ach ja, noch etwas Organisatorisches. Unsere Stunde am Dienstag muss ich leider verschieben. Passt dir stattdessen Donnerstag um halb sieben? Schreib mir bitte kurz. Bis dann!',
      },
      items: [
        { typ: 'rf', aussage: 'Diego hat in seinem Text einen Inhaltspunkt vergessen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie viele Fehler hat Katrin in Diegos Text gezählt?',
          optionen: ['vier', 'vierzehn', 'vierzig'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welche Fehler macht Diego laut Katrin vor allem?',
          optionen: [
            'Viele Adjektivendungen sind falsch, und einige Nomen sind kleingeschrieben.',
            'Das Verb steht meistens an der falschen Stelle.',
            'Sein Wortschatz ist zu einfach.',
          ],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Katrin schlägt vor, die gemeinsame Stunde auf Donnerstag zu verlegen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Im Forum deines Sprachkurses schreibt Tomasz: „In zwei Monaten habe ich meine B2-Prüfung. Im Schreiben mache ich immer wieder dieselben Fehler. Was soll ich tun?“ Antworte ihm.',
      punkte: [
        'Beschreibe einen typischen Fehler, den du von dir selbst kennst.',
        'Gib ihm zwei konkrete Tipps für die Vorbereitung.',
        'Erkläre, wie er die letzten Minuten in der Prüfung nutzen sollte.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Hallo Tomasz, dein Problem kenne ich gut! Auch ich habe lange nach „weil“ das Verb an die falsche Stelle gesetzt, obwohl ich die Regel eigentlich kannte. Mein erster Tipp: Lies die Aufgabenstellung immer zweimal und notiere zu jedem Inhaltspunkt Stichwörter, bevor du schreibst. Außerdem hilft es, alte Texte mit einer Liste deiner typischen Fehler zu überarbeiten. In der Prüfung solltest du die letzten fünf Minuten nur für den Schluss-Check nutzen: Artikel, Verbposition, Kommas und Großschreibung. So findest du die meisten Flüchtigkeitsfehler selbst. Viel Erfolg! Amira',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Nimm Stellung zu einer Streitfrage. Sprich etwa 90 Sekunden.',
      aufgabe: 'In deinem Sprachkurs wird diskutiert, ob man in der Schreibprüfung ein Wörterbuch benutzen dürfen sollte. Nimm dazu in etwa 90 Sekunden Stellung.',
      punkte: [
        'Sag klar, ob du dafür oder dagegen bist.',
        'Begründe deine Meinung mit zwei Argumenten.',
        'Geh auf ein Gegenargument ein und entkräfte es.',
      ],
      redemittel: [
        'Meiner Meinung nach …',
        'Erstens … / Zweitens …',
        'Natürlich verstehe ich das Gegenargument: …',
        'Trotzdem überzeugt mich das nicht, denn …',
      ],
      maxSekunden: 90,
      beispielLoesung: 'Meiner Meinung nach sollte man in der Schreibprüfung kein Wörterbuch benutzen dürfen. Dafür habe ich zwei Gründe. Erstens kostet das Nachschlagen viel Zeit. Wer für zwei Texte nur fünfundsiebzig Minuten hat, kann nicht jedes dritte Wort suchen. Am Ende fehlt dann die Zeit, um den Text zu überarbeiten, und genau dabei findet man ja die meisten Flüchtigkeitsfehler. Zweitens soll die Prüfung zeigen, was ich wirklich kann. Im Alltag, zum Beispiel in einer Besprechung, muss ich mich auch mit meinem eigenen Wortschatz ausdrücken. Natürlich verstehe ich das Gegenargument: Mit einem Wörterbuch wäre man weniger nervös, und im Beruf darf man schließlich auch nachschlagen. Trotzdem überzeugt mich das nicht, denn ein treffender Ausdruck hilft wenig, wenn der Satz drumherum falsch ist. Deshalb bin ich dagegen. Besser ist es, vor der Prüfung viel zu schreiben und typische Formulierungen zu lernen.',
    },
  ],
}
