// Übungsheft C1 — Lektion 07: Erweiterte Partizipialattribute
export default {
  lektion: 7,
  titel: 'Übungsheft — Erweiterte Partizipialattribute',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zu den Partizipialattributen. Prüfe jeweils, ob das Bezugsnomen handelt, behandelt wird oder noch behandelt werden muss — und achte auf die Adjektivendung.',
      items: [
        {
          typ: 'luecke',
          text: 'Die {1} Studie belegt, dass die seit Jahren stetig {2} Zahl der Pendler die regionale Infrastruktur überlastet.',
          bank: ['vorliegende', 'zunehmende', 'zugenommene', 'vorgelegene'],
          loesungen: { 1: 'vorliegende', 2: 'zunehmende' },
        },
        {
          typ: 'luecke',
          text: 'Die bis Ende März {1} Unterlagen werden nach {2} Recht vertraulich behandelt.',
          bank: ['einzureichenden', 'zu einreichenden', 'geltendem', 'gegoltenem'],
          loesungen: { 1: 'einzureichenden', 2: 'geltendem' },
        },
        {
          typ: 'luecke',
          text: 'Die bereits vor Jahren aus dem Ausland {1} Fachkräfte werden bei der Anerkennung ihrer Abschlüsse von den {2} Stellen beraten.',
          bank: ['zurückgekehrten', 'zurückkehrenden', 'entsprechenden', 'entsprochenen'],
          loesungen: { 1: 'zurückgekehrten', 2: 'entsprechenden' },
        },
        {
          typ: 'mc',
          frage: 'Welcher Relativsatz gibt die Bedeutung von „die noch zu prüfenden Anträge“ korrekt wieder?',
          optionen: ['die Anträge, die noch prüfen müssen', 'die Anträge, die noch geprüft werden müssen', 'die Anträge, die noch geprüft worden sind'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Mit dem ___ Bericht hat sich die Kommission angreifbar gemacht.',
          optionen: ['von zahlreichen Fachleuten kritisierten', 'von zahlreichen Fachleuten kritisierte', 'von zahlreichen Fachleuten kritisierenden'],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Die Preise steigend belasten vor allem Haushalte mit geringem Einkommen.', 'Die steigenden Preise belasten vor allem Haushalte mit geringem Einkommen.'],
          loesung: 1,
          warum: 'El español pospone («los precios en aumento»); en alemán el Partizip I va **delante** del nombre y se declina como un adjetivo: *die steigenden Preise*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Die zugenommenen Beschwerden zwingen die Stadt zum Handeln.', 'Die zunehmenden Beschwerden zwingen die Stadt zum Handeln.'],
          loesung: 1,
          warum: '*zunehmen* es intransitivo con Perfekt en **haben**: su Partizip II no puede funcionar como atributo. Usa el Partizip I o un relativo (*die Beschwerden, die zugenommen haben*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Die in der Einleitung erwähnten Aspekte werden im Hauptteil vertieft.', 'Die in der Einleitung erwähnenden Aspekte werden im Hauptteil vertieft.'],
          loesung: 0,
          warum: 'Los aspectos **son mencionados** (pasiva) → Partizip II *erwähnten*. *erwähnend* significaría que los aspectos mencionan algo.',
        },
        {
          typ: 'zuordnen',
          links: ['entsprechende Maßnahmen', 'eine Untersuchung', 'eine Konstruktion in einen Nebensatz', 'eine höchst umstrittene These', 'einen bereits erwähnten Aspekt'],
          rechts: ['ergreifen', 'veröffentlichen', 'auflösen', 'vertreten', 'aufgreifen'],
          loesung: {
            'entsprechende Maßnahmen': 'ergreifen',
            'eine Untersuchung': 'veröffentlichen',
            'eine Konstruktion in einen Nebensatz': 'auflösen',
            'eine höchst umstrittene These': 'vertreten',
            'einen bereits erwähnten Aspekt': 'aufgreifen',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['vorgelegten', 'sind', 'Kommission', 'Die', 'umstritten', 'der', 'Zahlen', 'von'],
          loesung: 'Die von der Kommission vorgelegten Zahlen sind umstritten.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Artikelauszug. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Artikelauszug: Bröckelnde Wände, wachsende Kosten',
      text: 'Die vorliegende Untersuchung eines unabhängigen Instituts in Hannover zeichnet ein ernüchterndes Bild: Rund ein Drittel der in Niedersachsen befragten Schulleitungen bezeichnet den Zustand ihrer Gebäude als mangelhaft. Besonders häufig genannt wurden undichte Dächer, veraltete Sanitäranlagen und die seit Jahrzehnten nicht modernisierte Haustechnik. Der sogenannte Sanierungsstau ist dabei kein neues Phänomen; neu ist jedoch das Tempo, mit dem die noch zu behebenden Schäden zunehmen. Die Autorinnen der Studie führen dies vor allem auf die in den vergangenen Jahren stark gestiegenen Baukosten zurück, die zahlreiche bereits genehmigte Projekte verzögert hätten.\nUmstritten bleibt, wer die anstehenden Investitionen tragen soll. Während die Kommunen auf das Land verweisen, betont das zuständige Ministerium, nach geltendem Recht seien die Schulträger verantwortlich. Für die Betroffenen ist dieser Streit wenig tröstlich: In einer ergänzend durchgeführten Umfrage gab fast die Hälfte der befragten Jugendlichen an, sich in ihren Klassenräumen nicht wohlzufühlen. Die Studie empfiehlt daher einen gemeinsamen, auf mehrere Jahre angelegten Fonds, in den Land und Kommunen zu gleichen Teilen einzahlen sollen.',
      items: [
        { typ: 'rf', aussage: 'Dem Text zufolge ist der Sanierungsstau an Schulen erst in jüngster Zeit entstanden.', loesung: false },
        {
          typ: 'mc',
          frage: 'Worauf führen die Autorinnen zurück, dass sich die Lage verschärft?',
          optionen: ['auf den starken Anstieg der Baukosten', 'auf fehlende Genehmigungen für Bauprojekte', 'auf den Zuständigkeitsstreit zwischen Land und Kommunen'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Welche Position vertritt das Ministerium?',
          optionen: ['Land und Kommunen sollen die Kosten zu gleichen Teilen tragen.', 'Die Schulleitungen müssen die Schäden selbst beheben lassen.', 'Nach geltendem Recht sind die Schulträger zuständig.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Neben den Schulleitungen wurden auch Jugendliche befragt.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Zusammenfassung mit Kommentar von mindestens 80 Wörtern. Trenne die sachliche Wiedergabe deutlich von deiner eigenen Bewertung.',
      aufgabe: 'Ein Forum für Lehrkräfte bittet um kurze Beiträge zum Artikelauszug über den Sanierungsstau an Schulen. Fasse den Text zusammen und kommentiere ihn.',
      punkte: [
        'Gib die zentralen Ergebnisse der Studie knapp und sachlich wieder.',
        'Nimm Stellung zur Frage, wer die anstehenden Investitionen tragen sollte.',
        'Verwende mindestens ein erweitertes Partizipialattribut, etwa „die von der Studie empfohlene Lösung“.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Der Artikelauszug stellt eine Studie aus Hannover vor, der zufolge rund ein Drittel der befragten Schulleitungen den Zustand ihrer Gebäude als mangelhaft einstuft. Die seit Langem bekannten Schäden nehmen inzwischen schneller zu, vor allem wegen der stark gestiegenen Baukosten. Ungeklärt ist, ob Land oder Kommunen die anstehenden Investitionen finanzieren sollen.\nMeiner Ansicht nach ist die von der Studie empfohlene Lösung überzeugend. Ein gemeinsamer Fonds beendet das gegenseitige Zuschieben der Verantwortung und schafft Planungssicherheit. Entscheidend ist allerdings, dass die bereitgestellten Mittel zuerst dort ankommen, wo die Schäden am gravierendsten sind. Denn die eigentlich Betroffenen, die Schülerinnen und Schüler, können auf das Ende eines Zuständigkeitsstreits nicht warten.',
    },
  ],
}
