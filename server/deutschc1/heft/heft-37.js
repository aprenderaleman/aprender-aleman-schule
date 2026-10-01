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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen Ausschnitt aus einem Wissenschaftspodcast. Entscheide, welche Antwort dem Gehörten entspricht bzw. ob die Aussage richtig oder falsch ist. Achte darauf, was als belegt gilt und was die Daten lediglich nahelegen.',
      audio: {
        transcript: 'Jana: Willkommen zu einer neuen Folge unseres Wissenschaftspodcasts. Felix, du hast diese Woche ein Labor in Jena besucht, das Tierversuche ersetzen will.\nFelix: Genau, Jana. Dort arbeitet ein Team mit sogenannten Organchips. Das sind winzige Plättchen, auf denen menschliche Leberzellen wachsen. An ihnen lässt sich prüfen, ob ein neuer Wirkstoff die Leber schädigt.\nJana: Und das funktioniert so zuverlässig wie am Tier?\nFelix: Die ersten Daten legen das zumindest nahe. Von siebzig getesteten Substanzen hat der Chip bei gut sechzig die Schäden richtig vorhergesagt. Belegt ist damit allerdings noch nichts, betont die Leiterin der Gruppe, denn die Ergebnisse müssten erst von unabhängigen Laboren bestätigt werden.\nJana: Heißt das, Tierversuche wären bald überflüssig?\nFelix: Eben nicht. Ein Chip bildet ein einzelnes Organ ab, nicht das Zusammenspiel im ganzen Körper. Die Forscherin rechnet damit, dass sich in den nächsten zehn Jahren etwa ein Drittel der Versuche ersetzen lässt, keineswegs alle.\nJana: Und woran hängt es dann?\nFelix: Überraschenderweise weniger an der Technik als an der Forschungsförderung. Das Projekt wird nur für drei Jahre finanziert, und für die aufwendige Überprüfung der Methode gibt es bisher kaum Geld, weil sie als wenig originell gilt.\nJana: Das klingt paradox.\nFelix: Ist es auch. Wer Tierversuche schrittweise ersetzen will, muss gerade diese unspektakuläre Arbeit bezahlen.',
      },
      items: [
        { typ: 'rf', aussage: 'Die Leiterin der Forschungsgruppe betrachtet die Zuverlässigkeit des Chips durch die bisherigen Daten als belegt.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie viele Substanzen wurden mit dem Organchip insgesamt getestet?',
          optionen: ['siebzehn', 'gut sechzig', 'siebzig'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Womit begründet Felix, dass Tierversuche auch künftig nicht völlig überflüssig werden?',
          optionen: [
            'Damit, dass ein Chip nur ein einzelnes Organ und nicht das Zusammenspiel im gesamten Körper abbildet.',
            'Damit, dass der Chip bei einem Teil der Substanzen die Schäden nicht richtig vorhergesagt hat.',
            'Damit, dass die Technik der Chips noch nicht ausgereift ist.',
          ],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Überprüfung der neuen Methode wird bislang kaum gefördert, weil sie als wenig originell gilt.', loesung: true },
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte einen Kurzvortrag von etwa zweieinhalb Minuten. Sprich frei, trenne Belegtes von bloß Befürchtetem und formuliere dein Urteil mit wissenschaftlicher Vorsicht.',
      aufgabe: 'Halte vor deinem Kurs einen Kurzvortrag zu der Frage: „Sollten Eingriffe ins menschliche Erbgut erlaubt werden, um schwere Erbkrankheiten zu verhindern?“ Gliedere den Vortrag nach dem ethischen Dreischritt Nutzen — Risiko — Alternativen, trenne dabei Belegtes von bloß Befürchtetem und schließe mit einem abgewogenen, vorsichtig formulierten Urteil.',
      punkte: [
        'Nutzen: Was steht zu gewinnen?',
        'Risiko: Was ist belegt, was wird lediglich befürchtet?',
        'Alternativen: Geht es auch anders?',
        'dein Urteil, gegebenenfalls an Bedingungen geknüpft',
      ],
      redemittel: [
        'Nach derzeitigem Stand des Wissens …',
        'Dem stehen allerdings erhebliche Risiken gegenüber.',
        'So groß die Chancen sind, so wenig lassen sich die Risiken beziffern.',
        'Vertretbar erscheint mir das nur unter strengen Auflagen.',
        'Entscheidend ist letztlich nicht, ob …, sondern …',
      ],
      maxSekunden: 150,
      beispielLoesung: 'Stellen wir uns vor, eine schwere Erbkrankheit ließe sich verhindern, noch bevor ein Kind geboren wird. Genau das verspricht die sogenannte Genschere, und darüber möchte ich heute sprechen. Ich gehe in drei Schritten vor: Nutzen, Risiko, Alternativen.\nZunächst zum Nutzen. Er liegt auf der Hand: Familien, in denen eine schwere Krankheit seit Generationen weitergegeben wird, könnten gesunde Kinder bekommen. Für die Betroffenen wäre das eine enorme Erleichterung.\nDem stehen allerdings erhebliche Risiken gegenüber. Ein Eingriff ins Erbgut ist unumkehrbar, und er betrifft nicht nur einen einzelnen Menschen, sondern auch dessen Nachkommen. Nach derzeitigem Stand des Wissens lässt sich nicht ausschließen, dass dabei unbeabsichtigte Veränderungen entstehen. Belegt sind solche Fehler im Labor; welche Langzeitfolgen sie hätten, weiß schlicht niemand. Hinzu kommt die Sorge, dass man eines Tages nicht mehr nur heilt, sondern Kinder nach Wunsch gestaltet. Das ist bislang eine Befürchtung, kein Befund — ernst nehmen sollte man sie trotzdem.\nBleibt die Frage nach den Alternativen. Und die gibt es durchaus: Paare mit einem erhöhten Risiko können sich schon heute genetisch beraten lassen, und manche Erkrankungen lassen sich nach der Geburt behandeln, ohne dass man ins Erbgut künftiger Generationen eingreift.\nIch komme zum Schluss. So groß die Chancen sind, so wenig lassen sich die Risiken derzeit seriös beziffern. Eine Freigabe hielte ich deshalb für verfrüht. Vertretbar erscheint mir allenfalls Forschung unter strengen Auflagen, also mit der Genehmigung einer unabhängigen Ethikkommission. Entscheidend ist letztlich nicht, ob wir forschen, sondern wer darüber wacht.',
    },
  ],
}
