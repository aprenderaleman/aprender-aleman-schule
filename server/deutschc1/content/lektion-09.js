// Lektion 09 · Präpositionen mit Genitiv
//
// Estándar de 8 secciones — véase docs/deutschc1/FORMAT.md y lektion-03.js (modelo)

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Lesen Teil 2 · Schreiben'],
  h1: 'Präpositionen mit Genitiv',
  lead: 'Aufgrund, angesichts, hinsichtlich, zwecks: die Präpositionen, die geschriebenes Deutsch zusammenhalten — nach Bedeutung geordnet, mit Registerkompass und der Gretchenfrage „wegen dem oder wegen des?“.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende beherrschst du die zentralen Genitivpräpositionen der Schriftsprache, gruppiert nach Bedeutung (kausal, konzessiv, temporal, modal, final, referierend).',
        'Du wählst die Präposition nach Register: neutral-formell (*aufgrund*), gehoben (*angesichts, ungeachtet*) oder amtlich (*zwecks, mangels*).',
        'Du markierst den Genitiv korrekt — und weißt, wann der Dativ ausnahmsweise Pflicht ist (*mangels Beweisen*).',
        'Du verbindest die Präpositionen mit dem Nominalstil aus Lektion 3 und setzt sie im Schreiben gezielt ein.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'aufgrund', kollokation: 'aufgrund der hohen Nachfrage', es: 'debido a' },
        { wort: 'infolge', kollokation: 'infolge des Unwetters', es: 'a consecuencia de' },
        { wort: 'angesichts', kollokation: 'angesichts der angespannten Lage', es: 'en vista de, ante' },
        { wort: 'mangels', kollokation: 'mangels eindeutiger Beweise', es: 'a falta de' },
        { wort: 'anlässlich', kollokation: 'anlässlich des Firmenjubiläums', es: 'con motivo de' },
        { wort: 'innerhalb', kollokation: 'innerhalb einer Woche', es: 'dentro de, en el plazo de' },
        { wort: 'außerhalb', kollokation: 'außerhalb der Geschäftszeiten', es: 'fuera de' },
        { wort: 'mittels', kollokation: 'mittels eines neuen Verfahrens', es: 'mediante' },
        { wort: 'anhand', kollokation: 'anhand konkreter Beispiele', es: 'a partir de, con ayuda de' },
        { wort: 'zwecks', kollokation: 'zwecks Klärung des Sachverhalts', es: 'a efectos de' },
        { wort: 'ungeachtet', kollokation: 'ungeachtet aller Proteste', es: 'a pesar de (elevado)' },
        { wort: 'hinsichtlich', kollokation: 'hinsichtlich der Kosten', es: 'en cuanto a' },
        { wort: 'bezüglich', kollokation: 'bezüglich Ihrer Anfrage', es: 'con respecto a' },
        { wort: 'seitens', kollokation: 'seitens der Geschäftsführung', es: 'por parte de' },
      ],
      hinweis: 'Lerne jede Präposition **in ihrer Kollokation**, nicht isoliert — *angesichts der Lage*, *bezüglich Ihrer Anfrage* sind fertige Bausteine für Diskussionsbeitrag und formelle Nachricht. Die Genitivmarkierung (*des, der, -s*) gehört zum Baustein dazu.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Der Genitiv als Registersignal',
      absaetze: [
        'Genitivpräpositionen sind das Skelett des **Nominalstils** aus Lektion 3: Sie hängen die verdichteten Nominalphrasen in den Satz. *Aufgrund **der gestiegenen Kosten*** ersetzt einen ganzen *weil*-Satz — die Präposition liefert die Logik (kausal), der Genitiv das Material. Wer sie beherrscht, schreibt automatisch dichter und formeller.',
        'Für Hispanohablantes liegt die Hürde nicht in der Bedeutung — *debido a, en vista de, por parte de* sind exakte Parallelen —, sondern in der **Kasusmarkierung**: ~~El español conecta con „de“ invariable; el alemán exige marcar el genitivo en artículo, adjetivo y a menudo en el propio sustantivo: aufgrund de**s** hohe**n** Alter**s**. La preposición sola no basta.~~',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Nach Bedeutung geordnet',
      kopf: ['Bedeutung', 'Präpositionen', 'Beispiel'],
      zeilen: [
        ['kausal (Grund)', 'aufgrund · infolge · angesichts · mangels', 'aufgrund des schlechten Wetters · mangels ausreichender Mittel'],
        ['konzessiv (trotzdem)', 'trotz · ungeachtet', 'ungeachtet der Kritik wurde abgestimmt'],
        ['temporal', 'während · innerhalb · außerhalb · anlässlich', 'innerhalb der Frist · anlässlich des Jubiläums'],
        ['modal / instrumental', 'mittels · anhand · mithilfe', 'mittels einer Umfrage · anhand der Daten'],
        ['final (Zweck)', 'zwecks · um … willen', 'zwecks Terminvereinbarung'],
        ['referierend (Bezug)', 'hinsichtlich · bezüglich · seitens', 'hinsichtlich der Finanzierung · seitens der Behörde'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Der Registerkompass',
      absaetze: [
        '**Neutral-formell und überall einsetzbar:** *aufgrund, trotz, während, innerhalb* — die sichere Wahl für jeden Prüfungstext. **Gehoben, ideal für den Diskussionsbeitrag:** *angesichts* (mit Blick auf ein Problem), *ungeachtet* (stärker als *trotz*), *infolge* (betont die Folgekette). **Amtlich-bürokratisch, nur für die formelle Nachricht:** *zwecks, mangels, seitens, bezüglich* — in einem Essay wirken sie steif, in einer Beschwerde sitzen sie perfekt.',
        'Drei Feinheiten: __seitens__ ersetzt im Nominalstil das Agens (*seitens der Verwaltung wurde zugesagt* = die Verwaltung sagte zu — ein Cousin des Passivs). __anlässlich__ heißt „aus dem festlichen/offiziellen Anlass von“, nicht einfach „wegen“: *anlässlich des Jubiläums*, aber *aufgrund der Krise*. Und __hinsichtlich__ und __bezüglich__ sind austauschbar — *hinsichtlich* passt eher in den Sachtext, *bezüglich* in den Brief; beide brauchen ein abstraktes Bezugsnomen (*der Kosten, der Frist*), nie eine Person.',
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Wegen dem oder wegen des? Genitiv, Dativ und die Prüfung',
      absaetze: [
        'Gesprochen hört man überall *wegen **dem** Wetter*, *trotz **dem** Regen* — der Dativ hat die Alltagssprache längst erobert. Für die Prüfung gilt trotzdem eine einfache Regel: **Im Schriftlichen immer Genitiv** (*wegen **des** Wetters, trotz **des** Regens*). Ein *wegen dem* im Schreiben kostet Punkte beim Kriterium „Strukturen“; ein sauberer Genitiv zahlt genau dort ein.',
        'Die echte Ausnahme: Ist der Genitiv **nicht erkennbar** — Plural ohne Artikel und ohne Adjektiv —, springt der **Dativ** ein: *mangels Beweise**n***, *wegen Geschäfte**n***. Mit Artikel oder Adjektiv kehrt der Genitiv zurück: *mangels eindeutig**er** Beweise*. Bei Personalpronomen weicht die Schriftsprache ganz aus: nicht *~wegen mir~*, sondern **meinetwegen**. ~~Regla práctica para el examen: genitivo siempre que sea marcable; dativo solo cuando no hay nada que lo marque.~~',
        'Ein Sonderfall ist __dank__: Historisch mit Dativ (*dank seinem Einsatz*), heute schriftlich meist mit Genitiv (*dank seines Einsatzes*) — beides gilt als korrekt. Inhaltlich ist *dank* immer **positiv** gefärbt: *dank der schnellen Hilfe*, aber niemals *~dank des Unfalls~* — für negative Ursachen bleiben *wegen*, *aufgrund* und *infolge* zuständig.',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Bedeutung',
      kicker: 'kausal',
      titel: 'Grund und fehlender Grund',
      items: [
        { text: '**Aufgrund der anhaltenden Trockenheit** rechnen die Landwirte mit Ernteausfällen.', gl: '— die Standardform: neutral und immer richtig' },
        { text: '**Infolge eines Signalfehlers** kam es zu erheblichen Verspätungen.', gl: '— infolge: die Ursache-Folge-Kette, typisch für Berichte' },
        { text: '**Angesichts der steigenden Mieten** fordern viele ein Eingreifen der Politik.' },
        { text: 'Das Verfahren wurde **mangels eindeutiger Beweise** eingestellt.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'temporal · final',
      titel: 'Zeitrahmen und Zweck',
      items: [
        { text: '**Während der gesamten Verhandlungen** drang nichts nach außen.' },
        { text: 'Der Antrag ist **innerhalb eines Monats** einzureichen.', gl: '— innerhalb + Frist: die Formel jeder Behördenmitteilung' },
        { text: '**Anlässlich des 100-jährigen Bestehens** lädt die Stiftung zu einem Festakt.' },
        { text: 'Wir bitten um Ihre Rückmeldung **zwecks weiterer Planung**.', gl: '— zwecks: nur in formellen Nachrichten, nie im Essay' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'referierend',
      titel: 'Bezug nehmen — der Ton der formellen Nachricht',
      items: [
        { text: '**Bezüglich Ihres Schreibens vom 12. Mai** möchten wir Folgendes klarstellen.' },
        { text: '**Hinsichtlich der Kosten** besteht noch erheblicher Klärungsbedarf.' },
        { text: '**Seitens der Geschäftsführung** wurde eine Prüfung zugesagt.', gl: '— seitens + Passiv: der doppelt unpersönliche Behördenton' },
        { text: '**Bezüglich der offenen Rechnung** erwarten wir Ihre Antwort **innerhalb von 14 Tagen**.', gl: '— *innerhalb von + Dat.*: die gängige Alternative, wenn kein Artikel folgt' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'konzessiv · Kasusgrenzen',
      titel: 'Einräumung — und wo der Genitiv endet',
      items: [
        { text: '**Ungeachtet aller Warnungen** hielt der Konzern an seinem Zeitplan fest.', gl: '— gehobener als trotz; perfekt für den Diskussionsbeitrag' },
        { text: '**Trotz des schlechten Wetters** fand das Konzert statt. / ==Gesprochen:== Trotz dem Wetter …', gl: '— schriftlich nur Genitiv' },
        { text: 'Der Laden ist **wegen Umbaus** geschlossen — umgangssprachlich meist: *wegen Umbau*.' },
        { text: 'Sie kündigte **wegen Differenzen** mit der Leitung.', gl: '— Plural ohne Artikel: Genitiv unmarkierbar → Dativ ist hier korrekt' },
        { text: '**Dank des Engagements** vieler Freiwilliger konnte das Fest stattfinden.', gl: '— dank: nur für positive Ursachen' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Bestimme Bedeutung (kausal, konzessiv, temporal, modal, final, referierend) und Register (neutral, gehoben, amtlich) der markierten Präposition.',
      aufgaben: [
        'Angesichts der Haushaltslage sind Einsparungen unvermeidlich.',
        'Zwecks Rückfragen erreichen Sie uns unter der genannten Nummer.',
        'Die Echtheit des Dokuments wurde anhand der Unterschrift geprüft.',
        'Ungeachtet des Widerstands wurde das Gesetz verabschiedet.',
        'Seitens der Universität gab es zunächst keine Stellungnahme.',
      ],
      loesungen: [
        '**kausal, gehoben** — *angesichts*: der sichtbare Anlass; ideal für Argumentationen.',
        '**final, amtlich** — *zwecks*: reines Verwaltungsdeutsch, nur für formelle Nachrichten.',
        '**modal/instrumental, neutral-formell** — *anhand*: das Hilfsmittel der Prüfung.',
        '**konzessiv, gehoben** — *ungeachtet*: stärker und schriftlicher als *trotz*.',
        '**referierend, amtlich** — *seitens*: benennt den Urheber, ohne ihn zum Subjekt zu machen.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Forme den Nebensatz in eine Präpositionalphrase mit Genitivpräposition um — das Handwerk aus Lektion 3, jetzt mit dem vollen Inventar.',
      aufgaben: [
        'Weil es an Personal fehlt, bleibt das Schwimmbad geschlossen.',
        'Obwohl die Experten mehrfach gewarnt hatten, wurde weitergebaut.',
        'Weil das Interesse groß ist, wird ein zweiter Termin angeboten.',
        'Indem man die Daten analysierte, konnte der Fehler gefunden werden.',
        'Solange die Messe dauert, sind alle Hotels ausgebucht.',
        'Die Stadt äußerte sich nicht dazu, wie es mit dem Stadion weitergeht.',
      ],
      loesungen: [
        '**Mangels Personals** bleibt das Schwimmbad geschlossen. ~~También correcto: *mangels Personal* — el genitivo del singular sin artículo suele quedar sin marcar; lo agramatical sería *mangels dem Personal*.~~',
        '**Ungeachtet der mehrfachen Warnungen** der Experten wurde weitergebaut. / **Trotz mehrfacher Warnungen** …',
        '**Aufgrund des großen Interesses** wird ein zweiter Termin angeboten.',
        '**Mittels einer Analyse der Daten** / **Anhand der Daten** konnte der Fehler gefunden werden.',
        '**Während der Messe** sind alle Hotels ausgebucht.',
        '**Hinsichtlich der Zukunft des Stadions** äußerte sich die Stadt nicht. / **Bezüglich der Zukunft** …',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe den Anfang einer formellen Beschwerde (4-5 Sätze) an eine Sprachschule: Der gebuchte C1-Kurs wurde kurzfristig abgesagt. Verwende mindestens **vier** verschiedene Genitivpräpositionen in passendem Register.',
      aufgabe: 'Bausteine: Bezug auf die Buchung — Grund der Beschwerde — Folge für dich — Forderung mit Frist.',
      loesung: '**Mögliche Lösung** (andere Präpositionen und Reihenfolgen sind gültig):\n*Sehr geehrte Damen und Herren,\n**bezüglich meiner Buchung** vom 3. August wende ich mich mit einer Beschwerde an Sie. **Aufgrund der kurzfristigen Absage** des C1-Kurses — **seitens Ihrer Verwaltung** lediglich per SMS mitgeteilt — musste ich bereits gebuchte Fahrten stornieren. **Angesichts dieser Umstände** halte ich eine bloße Gutschrift für unzureichend. Ich bitte Sie daher, mir **innerhalb von zwei Wochen** den vollen Betrag zu erstatten.*\nPrüfe beim Korrekturlesen jede Phrase auf die Genitivmarkierung — und dass höchstens eine amtliche Präposition (*zwecks, mangels*) pro Text steht.',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2 · Lückentext',
      titel: 'Mini-Aufgabe · 6 Lücken',
      anweisung: 'Genitivpräpositionen sind Dauergäste im Lückentext — der Genitiv nach der Lücke ist dein wichtigster Hinweis. Wähle für jede Lücke das passende Wort.',
      absaetze: [
        '{1} der dramatischen Lage auf dem Wohnungsmarkt hat der Senat ein Förderprogramm beschlossen — {2} aller Bedenken aus der Opposition. {3} der nächsten fünf Jahre sollen zehntausend neue Wohnungen entstehen. {4} der Verwaltung heißt es, erste Anträge könnten bereits im Herbst gestellt werden. Kritiker bezweifeln jedoch, dass sich das Ziel {5} ausreichenden Personals erreichen lässt, und fordern {6} der Finanzierung mehr Transparenz.',
      ],
      optionen: ['Angesichts', 'hinsichtlich', 'Innerhalb', 'mangels', 'Seitens', 'ungeachtet'],
      loesungen: [
        '{1} **Angesichts** — kausal: die sichtbare Notlage als Anlass des Handelns',
        '{2} **ungeachtet** — konzessiv: trotz der Bedenken; die Gedankenstriche signalisieren den Einschub',
        '{3} **Innerhalb** — temporal: der Zeitrahmen *der nächsten fünf Jahre*',
        '{4} **Seitens** — referierend: die Verwaltung als Urheber der Aussage',
        '{5} **mangels** — kausal-negativ: das Fehlen von Personal als Hindernis',
        '{6} **hinsichtlich** — referierend: der Bezugspunkt der Forderung',
      ],
      kommentar: 'Strategie: Erst die **Logik** klären (Grund? Gegensatz? Zeit? Bezug?), dann das **Register** prüfen. Und wie in Lektion 3: Ein Genitiv direkt nach der Lücke (*der, aller, ausreichenden*) verrät fast immer eine Genitivpräposition.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Schreiben** öffnen diese Präpositionen deine Absätze: *Angesichts dieser Entwicklung …* als Einstieg ins Argument, *bezüglich* und *innerhalb + Frist* in der formellen Nachricht. Zwei Warnungen: **wegen/trotz + Dativ** kostet im Schriftlichen Punkte — und häufe die Phrasen nicht: Zwei Genitivpräpositionen pro Absatz sind Würze, vier sind Amtsstube.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['kausal: aufgrund · infolge · angesichts · mangels', 'aufgrund des Wetters · mangels Beweisen'],
        ['konzessiv: trotz · ungeachtet', 'ungeachtet aller Proteste'],
        ['temporal: während · innerhalb · anlässlich', 'innerhalb eines Monats'],
        ['modal/final: mittels · anhand · zwecks', 'anhand der Daten · zwecks Klärung'],
        ['referierend: hinsichtlich · bezüglich · seitens', 'seitens der Behörde'],
        ['Schriftlich Genitiv — Dativ nur unmarkierbar', 'wegen des Wetters · aber: wegen Geschäften'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich ordne jede Genitivpräposition ihrer Bedeutung zu und markiere den Genitiv korrekt.',
        'Ich wähle nach Register: *aufgrund* im Essay, *zwecks* und *bezüglich* nur in der formellen Nachricht.',
        'Ich weiß, wann der Dativ Pflicht ist (*mangels Beweisen*) und meide *wegen dem* im Schriftlichen.',
        'Ich verbinde die Präpositionen mit Nominalisierungen zu dichten C1-Phrasen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Präpositionen verdichten **innerhalb** des Satzes — Konnektoren verknüpfen **zwischen** den Sätzen. In der nächsten Lektion lernst du die Konnektoren der Schriftsprache (*folglich, gleichwohl, demzufolge, indes* …): dieselben logischen Beziehungen wie hier, nur eine Ebene höher — der letzte Schliff für kohärente C1-Texte.',
    },
  ],
}
