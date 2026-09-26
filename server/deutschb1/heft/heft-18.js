// Übungsheft B1 — Lektion 18: Modul Lesen — Überblick
export default {
  lektion: 18,
  titel: 'Übungsheft — Modul Lesen: Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du die Wörter aus den Anweisungen. Wähle die richtige Form oder ergänze.',
      items: [
        { typ: 'mc', frage: 'Hast du die richtige Lösung schon ___?', optionen: ['angekreuzt', 'geankreuzt', 'ankreuzt'], loesung: 0 },
        { typ: 'mc', frage: 'Ich habe den Text zuerst nur schnell ___.', optionen: ['übergeflogen', 'überflogen', 'überfliegt'], loesung: 1 },
        { typ: 'mc', frage: 'Welche Anzeige passt zu ___ Person?', optionen: ['welche', 'welchem', 'welcher'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Lies zuerst die {1}. Dann {2} du den Text und suchst die Paraphrase.',
          bank: ['Aufgaben', 'Antwortbogen', 'überfliegst', 'überfliegen'],
          loesungen: { 1: 'Aufgaben', 2: 'überfliegst' },
        },
        {
          typ: 'luecke',
          text: 'Es ist wichtig, jede Aufgabe {1}. Am Ende {2} die Lösungen auf den {3} übertragen.',
          bank: ['anzukreuzen', 'zu ankreuzen', 'werden', 'wird', 'Antwortbogen'],
          loesungen: { 1: 'anzukreuzen', 2: 'werden', 3: 'Antwortbogen' },
        },
        {
          typ: 'zuordnen',
          links: ['überfliegen', 'unterstreichen', 'ankreuzen', 'zuordnen', 'die Aussage'],
          rechts: [
            'schnell lesen, nicht Wort für Wort',
            'eine Linie unter ein Wort machen',
            'ein X in das richtige Feld machen',
            'zwei passende Teile verbinden',
            'ein Satz, der richtig oder falsch ist',
          ],
          loesung: {
            'überfliegen': 'schnell lesen, nicht Wort für Wort',
            'unterstreichen': 'eine Linie unter ein Wort machen',
            'ankreuzen': 'ein X in das richtige Feld machen',
            'zuordnen': 'zwei passende Teile verbinden',
            'die Aussage': 'ein Satz, der richtig oder falsch ist',
          },
        },
        { typ: 'satzbau', woerter: ['Person', 'passt', 'Welcher', 'welcher', 'zu', 'Text'], loesung: 'Welcher Text passt zu welcher Person?' },
        {
          typ: 'satzbau',
          woerter: ['den', 'die', 'Ich', 'dann', 'Aufgaben', 'zuerst', 'und', 'lese', 'Text'],
          loesung: 'Ich lese zuerst die Aufgaben und dann den Text.',
          alt: ['Ich lese die Aufgaben zuerst und dann den Text.'],
        },
        {
          typ: 'korrektur',
          optionen: ['Lies nicht Wort für Wort, um Zeit zu sparen.', 'Lies nicht Wort für Wort, für Zeit zu sparen.'],
          loesung: 0,
          warum: '«Para ahorrar tiempo» = **um** Zeit **zu** sparen. *Für* no introduce un infinitivo.',
        },
        {
          typ: 'korrektur',
          optionen: ['Diese Anzeige passt zu dich.', 'Diese Anzeige passt zu dir.'],
          loesung: 1,
          warum: '*Zu* pide siempre **dativo**: *passen zu **dir** / zu **welcher** Person*.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Zeitungsnotiz. Die Lösung steht oft mit anderen Wörtern im Text.',
      textTitel: 'Stadtbibliothek Neustadt: Mehr Zeit zum Lesen',
      text: 'Ab dem 1. November hat die Stadtbibliothek länger geöffnet: Von Dienstag bis Freitag können Besucher jetzt bis 20 Uhr Bücher ausleihen. Montags bleibt die Bibliothek wie bisher geschlossen. Neu ist auch das Lesecafé im Erdgeschoss. Dort gibt es Zeitungen aus zwölf Ländern, Kaffee und Kuchen. Der Eintritt ins Café ist frei, auch ohne Bibliotheksausweis. Jeden Mittwoch trifft sich dort außerdem ein Leseclub für Deutschlernende. Die Teilnehmer lesen gemeinsam kurze Texte und sprechen darüber. Die Leiterin, Frau Demir, erklärt schwierige Wörter. Für den Leseclub muss man sich vorher per E-Mail anmelden, denn es gibt nur fünfzehn Plätze. Kinder unter zwölf Jahren können leider nicht teilnehmen.',
      items: [
        { typ: 'rf', aussage: 'Am Montag kann man in der Bibliothek keine Bücher ausleihen.', loesung: true },
        { typ: 'rf', aussage: 'Für das Lesecafé braucht man einen Bibliotheksausweis.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was macht man im Leseclub?',
          optionen: ['Man kauft Zeitungen aus zwölf Ländern.', 'Man hilft Kindern bei den Hausaufgaben.', 'Man liest zusammen Texte und diskutiert sie.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Warum muss man sich für den Leseclub anmelden?',
          optionen: ['Weil die Zahl der Plätze begrenzt ist.', 'Weil der Club Geld kostet.', 'Weil er nur für Kinder ist.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die E-Mail von Yuki. Ergänze dann die Anmeldung für den Leseclub.',
      quelle: 'Liebe Frau Demir, ich heiße Yuki Tanaka und möchte mich für den Leseclub anmelden. Ich lerne seit zwei Jahren Deutsch und lese am liebsten Krimis. Ich möchte ab November jeden Mittwoch kommen. Sie erreichen mich unter der Nummer 0176 5523 4410. Viele Grüße, Yuki Tanaka',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Yuki Tanaka', 'Tanaka'] },
        { id: 'seit', label: 'Deutsch seit', erwartet: ['zwei Jahren', 'seit zwei Jahren', '2 Jahren', 'seit 2 Jahren', 'zwei Jahre', '2 Jahre'] },
        { id: 'lektuere', label: 'Was lesen Sie gern?', erwartet: ['Krimis', 'am liebsten Krimis'] },
        { id: 'beginn', label: 'Beginn', erwartet: ['ab November', 'November', 'im November'] },
        { id: 'telefon', label: 'Telefon', erwartet: ['0176 5523 4410', '017655234410', '0176 55234410'] },
      ],
    },
  ],
}
