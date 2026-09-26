// Übungsheft C1 — Lektion 37: Wissenschaft & Forschung
export default {
  lektion: 37,
  titel: 'Übungsheft — Wissenschaft & Forschung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Setze jeweils das Wort ein, das Kollokation und Kontext verlangen. Unterscheide dabei genau zwischen den Graden der Gewissheit (belegen, nahelegen, widerlegen, infrage stellen) und meide Lehnübersetzungen aus dem Spanischen.',
      items: [
        {
          typ: 'luecke',
          text: 'Die Messergebnisse {1} die Hypothese eindeutig — sie ist damit vom Tisch. Andere Studien {2} lediglich nahe, dass ein schwacher Zusammenhang bestehen könnte.',
          bank: ['widerlegen', 'legen', 'belegen', 'stellen'],
          loesungen: { 1: 'widerlegen', 2: 'legen' },
        },
        {
          typ: 'luecke',
          text: 'Der Skandal um gefälschte Daten hat die {1} des gesamten Fachgebiets {2} gestellt.',
          bank: ['Glaubwürdigkeit', 'infrage', 'Skepsis', 'außer Frage'],
          loesungen: { 1: 'Glaubwürdigkeit', 2: 'infrage' },
          warum: 'Un escándalo de datos falsificados pone la credibilidad en duda: **etwas infrage stellen**. *Außer Frage* significa lo contrario («fuera de toda duda»).',
        },
        {
          typ: 'luecke',
          text: 'Vor Beginn der Studie wurde ein unabhängiges {1} eingeholt; zudem musste die zuständige {2} dem Vorhaben zustimmen.',
          bank: ['Gutachten', 'Ethikkommission', 'Gutachter', 'Ethik'],
          loesungen: { 1: 'Gutachten', 2: 'Ethikkommission' },
        },
        {
          typ: 'luecke',
          text: 'Wer auf {1} setzt, braucht einen langen Atem: Neue {2} zahlen sich oft erst Jahrzehnte später aus.',
          bank: ['Grundlagenforschung', 'Erkenntnisse', 'Bekenntnisse', 'Grundforschung'],
          loesungen: { 1: 'Grundlagenforschung', 2: 'Erkenntnisse' },
        },
        {
          typ: 'mc',
          frage: 'Die Daten ___ einen Zusammenhang, beweisen aber keine Ursache — Korrelation ist keine Kausalität.',
          optionen: ['belegen', 'widerlegen', 'entkräften'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Welche Formulierung drückt die geringste Gewissheit aus?',
          optionen: [
            'Die Befunde belegen, dass die Wirkung überschätzt wurde.',
            'Die Befunde legen nahe, dass die Wirkung überschätzt wurde.',
            'Die Befunde beweisen, dass die Wirkung überschätzt wurde.',
          ],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Nach dem 3R-Prinzip sollen Tierversuche schrittweise ___, verringert und verbessert werden.',
          optionen: ['versetzt', 'besetzt', 'ersetzt'],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: [
            'Das Team hat eine Studie zu Organchips durchgeführt.',
            'Das Team hat eine Forschung über Organchips realisiert.',
          ],
          loesung: 0,
          warum: '*Forschung* no se usa con *eine*, y «realizar» un estudio es **durchführen**; *realisieren* es calco.',
        },
        {
          typ: 'korrektur',
          optionen: [
            'Für seine Behauptung, der Nachbar habe das Fahrrad gestohlen, hat er keine Evidenz.',
            'Für seine Behauptung, der Nachbar habe das Fahrrad gestohlen, hat er keinen Beweis.',
          ],
          loesung: 1,
          warum: 'En la lengua general «evidencia, prueba» es **der Beweis** o **der Beleg**; *die Evidenz* pertenece a la jerga científica.',
        },
        {
          typ: 'zuordnen',
          links: ['neue Erkenntnisse', 'wachsender Skepsis mit Transparenz', 'in die Grundlagenforschung', 'den Einsatz von Gentechnik streng', 'ein Vorhaben von der Ethikkommission'],
          rechts: ['gewinnen', 'begegnen', 'investieren', 'regulieren', 'genehmigen lassen'],
          loesung: {
            'neue Erkenntnisse': 'gewinnen',
            'wachsender Skepsis mit Transparenz': 'begegnen',
            'in die Grundlagenforschung': 'investieren',
            'den Einsatz von Gentechnik streng': 'regulieren',
            'ein Vorhaben von der Ethikkommission': 'genehmigen lassen',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Essayauszug und entscheide, welche Antwort der Position des Autors entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Essay: „Vom Mut zur Vorläufigkeit“ von Lukas Brenner',
      text: 'Es gehört zu den hartnäckigsten Missverständnissen unserer Zeit, dass eine geänderte Empfehlung die Wissenschaft diskreditiere. Wer so denkt, verwechselt Forschung mit einem Orakel, das einmal verkündete Wahrheiten für immer zu verteidigen hat. Tatsächlich lebt die Wissenschaft davon, ihre eigenen Annahmen infrage zu stellen: Eine Hypothese, die sich grundsätzlich nicht widerlegen lässt, ist keine wissenschaftliche Aussage, sondern ein Glaubenssatz.\nDas eigentliche Problem liegt deshalb nicht in der Skepsis eines Teils der Bevölkerung, sondern in einer Wissenschaftskommunikation, die Unsicherheit allzu oft verschweigt. Wer vorläufige Erkenntnisse als endgültige verkauft, erntet Enttäuschung, sobald neue Daten das Bild verändern. Umfragen zeigen zwar, dass das Grundvertrauen in die Forschung erstaunlich stabil ist; es ist aber kein Kapital, das sich beliebig verbrauchen ließe.\nForscherinnen und Forscher sollten daher lernen, klar zwischen dem zu unterscheiden, was ihre Daten belegen, und dem, was sie lediglich nahelegen. Das mag weniger eindrucksvoll klingen als eine griffige Schlagzeile. Doch gerade das offene Eingeständnis von Grenzen wahrt auf Dauer die Glaubwürdigkeit — und nimmt jenen den Wind aus den Segeln, die jede Korrektur als Beweis der Beliebigkeit ausschlachten.',
      items: [
        { typ: 'rf', aussage: 'Der Autor sieht die Hauptursache des Problems in der Skepsis eines Teils der Bevölkerung.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum ist eine grundsätzlich nicht widerlegbare Hypothese nach Ansicht des Autors problematisch?',
          optionen: [
            'Sie ist zu vage, um in Gutachten berücksichtigt zu werden.',
            'Sie verlässt den Bereich der Wissenschaft und wird zur Glaubensfrage.',
            'Sie untergräbt das Vertrauen der Bevölkerung in geänderte Empfehlungen.',
          ],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was sagt der Autor über das Grundvertrauen in die Forschung?',
          optionen: [
            'Es sei stabil, dürfe aber nicht leichtfertig aufs Spiel gesetzt werden.',
            'Es sei durch geänderte Empfehlungen bereits nachhaltig beschädigt.',
            'Es lasse sich nur durch griffigere Schlagzeilen zurückgewinnen.',
          ],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Der Autor räumt ein, dass eine vorsichtige Ausdrucksweise weniger wirkungsvoll klingen kann.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Textzusammenfassung mit Kommentar (mindestens 80 Wörter). Gib die Position des Autors in indirekter Rede wieder und verwende mindestens drei Verben aus dem Feld des Belegens und Bezweifelns.',
      aufgabe: 'Fasse den Essay „Vom Mut zur Vorläufigkeit“ aus Teil 2 zusammen und nimm anschließend Stellung zu der Forderung des Autors.',
      punkte: [
        'Gib die zentrale These und die wichtigsten Argumente des Autors mit eigenen Worten wieder.',
        'Beurteile, ob der Autor die Verantwortung zu Recht vor allem bei der Wissenschaftskommunikation sieht.',
        'Nenne ein eigenes Beispiel, das deine Einschätzung stützt oder relativiert.',
      ],
      minWoerter: 80,
      beispielLoesung: 'In seinem Essay „Vom Mut zur Vorläufigkeit“ vertritt Lukas Brenner die These, geänderte Empfehlungen diskreditierten die Wissenschaft nicht, sondern belegten vielmehr ihre Funktionsweise: Forschung lebe davon, eigene Annahmen infrage zu stellen. Das eigentliche Problem sieht er in einer Kommunikation, die Unsicherheit verschweige und vorläufige Erkenntnisse als endgültig darstelle. Er fordert daher, klar zu trennen, was Daten belegen und was sie lediglich nahelegen.\nIch halte diese Forderung für überzeugend, wenngleich sie zu kurz greift. Auch Medien und Politik tragen Verantwortung, denn sie verkürzen vorsichtige Befunde oft zu griffigen Schlagzeilen. Während der Pandemie wurden etwa Modellrechnungen als sichere Prognosen missverstanden, obwohl die Forschenden ausdrücklich auf ihre Unsicherheit hingewiesen hatten. Ehrliche Wissenschaftskommunikation ist deshalb notwendig, aber nur dann wirksam, wenn auch die Vermittler sorgfältig arbeiten.',
    },
  ],
}
