// Übungsheft C1 — Lektion 28: Sprechen Teil 2 — Die Diskussion
export default {
  lektion: 28,
  titel: 'Übungsheft — Die Diskussion',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zur Sprache der Diskussion. Achte auf die Rektion der Verben des Zustimmens und Widersprechens, auf Präpositionaladverbien und auf die feinen Abstufungen zwischen voller Zustimmung und klarem Widerspruch.',
      items: [
        {
          typ: 'luecke',
          text: 'Im Kern stimme ich {1} zu, {2} blenden Sie die Folgekosten völlig aus.',
          bank: ['Ihnen', 'Sie', 'allerdings', 'deshalb'],
          loesungen: { 1: 'Ihnen', 2: 'allerdings' },
        },
        {
          typ: 'luecke',
          text: 'Das ist ein berechtigter {1}, den ich gern {2} — nur greift er meiner Ansicht nach zu kurz.',
          bank: ['Einwand', 'Kompromiss', 'aufgreife', 'unterbreche'],
          loesungen: { 1: 'Einwand', 2: 'aufgreife' },
        },
        {
          typ: 'luecke',
          text: 'Vielleicht können wir uns {1} einigen, dass zunächst der Nahverkehr ausgebaut wird. Ihren Standpunkt kann ich gut {2}, teile ihn aber nur {3}.',
          bank: ['darauf', 'dafür', 'nachvollziehen', 'entgegnen', 'bedingt'],
          loesungen: { 1: 'darauf', 2: 'nachvollziehen', 3: 'bedingt' },
        },
        {
          typ: 'mc',
          frage: 'Welche Äußerung drückt eine teilweise Zustimmung aus?',
          optionen: [
            'Da bin ich ganz Ihrer Meinung.',
            'Im Prinzip sehe ich das genauso — mit einer Einschränkung, was die Finanzierung betrifft.',
            'Da muss ich Ihnen entschieden widersprechen.',
          ],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welcher Widerspruch richtet sich gegen das Argument und nicht gegen die Person?',
          optionen: [
            'Da liegen Sie völlig falsch.',
            'Sie haben sich offenbar nicht gründlich genug mit dem Thema befasst.',
            'Dieses Argument überzeugt mich nicht ganz.',
          ],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Du und dein Partner seid euch schon nach zwei Minuten in allem einig. Welche Reaktion entspricht der empfohlenen Strategie?',
          optionen: [
            'Du eröffnest in einem Teilaspekt, etwa bei der Finanzierung, bewusst eine Differenz.',
            'Du erklärst die Diskussion für beendet und fasst das Ergebnis zusammen.',
            'Du wiederholst deine eigene Position noch einmal in aller Ausführlichkeit.',
          ],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Da muss ich Sie leider widersprechen.', 'Da muss ich Ihnen leider widersprechen.'],
          loesung: 1,
          warum: '**widersprechen** rige **dativo**: *jemandem widersprechen* → *Ihnen*. Lo mismo vale para *zustimmen*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Leider habe ich morgen einen Kompromiss und kann nicht kommen.', 'Leider habe ich morgen eine Verpflichtung und kann nicht kommen.'],
          loesung: 1,
          warum: '**der Kompromiss** es solo el acuerdo a mitad de camino. El «compromiso» español en el sentido de obligación o cita es *die Verpflichtung* o *der Termin*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ihrem Vorschlag stimme ich ohne Vorbehalt zu.', 'Mit Ihrem Vorschlag stimme ich ohne Vorbehalt zu.'],
          loesung: 0,
          warum: '**zustimmen** lleva complemento en **dativo** sin preposición (*einem Vorschlag zustimmen*). *mit* solo aparece en *mit jemandem übereinstimmen*: son dos construcciones distintas.',
        },
        {
          typ: 'zuordnen',
          links: ['einen Einwand', 'einen Kompromiss', 'an das Gesagte', 'jemandem in einem Punkt', 'jemanden kurz'],
          rechts: ['vorbringen', 'aushandeln', 'anknüpfen', 'zustimmen', 'unterbrechen'],
          loesung: {
            'einen Einwand': 'vorbringen',
            'einen Kompromiss': 'aushandeln',
            'an das Gesagte': 'anknüpfen',
            'jemandem in einem Punkt': 'zustimmen',
            'jemanden kurz': 'unterbrechen',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Auszug aus einem Essay und entscheide, welche Antwort der Position des Autors entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Essayfragment: Vom Wert des Widerspruchs',
      text: 'Wir leben, so heißt es oft, in einer Zeit der Polarisierung. Doch vielleicht liegt das Problem weniger darin, dass wir zu viel streiten, als darin, dass wir es verlernt haben. Wer heute widerspricht, tut dies häufig in der Absicht, den anderen zu besiegen, nicht aber, ihn zu verstehen. Das Ergebnis sind Parallelmonologe: Jeder trägt seine Position vor, niemand knüpft an das an, was der andere gesagt hat.\nEin gutes Gespräch folgt einer anderen Logik. Es beginnt mit dem Zuhören und mit der Bereitschaft, dem Gegenüber einen berechtigten Punkt einzuräumen. Das ist keine Schwäche, sondern die Voraussetzung dafür, dass der eigene Einwand überhaupt gehört wird. Wer sich ernst genommen fühlt, ist eher bereit, seine Sicht zu überdenken.\nFreilich wäre es naiv, jede Meinungsverschiedenheit in einen Kompromiss auflösen zu wollen. Manche Positionen lassen sich schlicht nicht vereinen, und ein fauler Kompromiss, der lediglich den Frieden wahrt, hilft niemandem. Entscheidend ist vielmehr, dass beide Seiten am Ende nachvollziehen können, warum der andere so denkt, wie er denkt. Dann hat sich der Streit gelohnt — auch wenn keiner ihn gewonnen hat.',
      items: [
        {
          typ: 'mc',
          frage: 'Worin sieht der Autor das eigentliche Problem heutiger Debatten?',
          optionen: [
            'Darin, dass zu viele Meinungsverschiedenheiten offen ausgetragen werden.',
            'Darin, dass Widerspruch oft auf den Sieg statt auf Verständigung zielt.',
            'Darin, dass sich Gesprächspartner zu bereitwillig auf Kompromisse einlassen.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Nach Ansicht des Autors schwächt es die eigene Position, dem Gegenüber einen Punkt einzuräumen.', loesung: false },
        { typ: 'rf', aussage: 'Der Autor hält es für unrealistisch, jede Meinungsverschiedenheit durch einen Kompromiss beizulegen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wann hat sich ein Streit laut Text gelohnt?',
          optionen: [
            'Wenn eine Seite die andere mit besseren Argumenten überzeugt hat.',
            'Wenn beide Seiten den Frieden gewahrt haben.',
            'Wenn beide die Denkweise des jeweils anderen nachvollziehen können.',
          ],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse ein formelles Schreiben (mindestens 80 Wörter). Würdige die Gegenposition, bevor du ihr begründet entgegnest, und halte das formelle Register durchgehend ein.',
      aufgabe: 'Deine Stadt plant, die Innenstadt innerhalb eines Jahres vollständig für den Autoverkehr zu sperren, und bittet die Bürgerinnen und Bürger um schriftliche Stellungnahmen. Schreibe an die zuständige Abteilung der Stadtverwaltung.',
      punkte: [
        'Nenne den Anlass deines Schreibens und deine grundsätzliche Haltung.',
        'Greife einen Einwand gegen die Pläne auf und nimm differenziert dazu Stellung.',
        'Schlage einen Kompromiss vor und bitte um Berücksichtigung deines Vorschlags.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Damen und Herren,\nbezugnehmend auf Ihren Aufruf möchte ich zu den Plänen für eine autofreie Innenstadt Stellung nehmen. Grundsätzlich begrüße ich das Vorhaben, da es Lärm und Luftverschmutzung deutlich verringern würde.\nDen Einwand vieler Einzelhändler, ihnen würden Kundinnen und Kunden verloren gehen, kann ich gut nachvollziehen. Allerdings zeigen Erfahrungen aus anderen Städten, dass Fußgängerzonen die Aufenthaltsqualität steigern und oft sogar mehr Laufkundschaft anziehen.\nIch würde daher einen Kompromiss vorschlagen: Die Sperrung sollte schrittweise, Zone für Zone, erfolgen, und zwar erst, nachdem der Nahverkehr ausgebaut wurde. Für Menschen mit eingeschränkter Mobilität sowie für Lieferverkehr wären Ausnahmen vorzusehen.\nIch wäre Ihnen dankbar, wenn Sie diesen Vorschlag bei Ihren weiteren Planungen berücksichtigen könnten.\nMit freundlichen Grüßen\nElif Demir',
    },
  ],
}
