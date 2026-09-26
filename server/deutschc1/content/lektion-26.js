// Lektion 26 · Modul Sprechen — Überblick
//
// Bloque 2 «Prüfungsstrategie». Öffnet die Sprechen-Strecke:
// 26 Überblick → 27 Teil 1 Vortrag → 28 Teil 2 Diskussion.
// Estándar de 8 secciones (vgl. lektion-03.js).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau C1', 'Prüfungsrelevanz: Sprechen (ca. 15 Min · Paarprüfung)'],
  h1: 'Modul Sprechen — Überblick',
  lead: 'Fünfzehn Minuten zu zweit vor zwei Prüfenden: Wer den Ablauf kennt, hat den Kopf frei fürs Deutsch.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kennst du den Ablauf der Paarprüfung Minute für Minute und weißt, was in jedem Abschnitt von dir erwartet wird.',
        'Du weißt, welche Kriterien die Prüfenden ansetzen — einschließlich der Aussprache — und was in jedem den Ausschlag gibt.',
        'Du nutzt die Vorbereitungszeit systematisch: Stichwörter statt Sätze, Gerüst statt Text.',
        'Du hast Notfallstrategien parat: für den Blackout, für unbekannte Wörter und für einen deutlich stärkeren oder schwächeren Partner.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — über das Sprechen sprechen',
      items: [
        { wort: 'die Paarprüfung', kollokation: 'die mündliche Prüfung als Paarprüfung ablegen', es: 'examen oral en pareja' },
        { wort: 'der Vortrag', kollokation: 'einen kurzen Vortrag halten', es: 'exposición, presentación' },
        { wort: 'die Nachfrage', kollokation: 'auf Nachfragen reagieren', es: 'pregunta de seguimiento' },
        { wort: 'die Vorbereitungszeit', kollokation: 'die Vorbereitungszeit nutzen', es: 'tiempo de preparación' },
        { wort: 'das Stichwort', kollokation: 'sich Stichwörter notieren', es: 'palabra clave (de un guion)' },
        { wort: 'die Gliederung', kollokation: 'eine klare Gliederung erkennen lassen', es: 'estructura, esquema' },
        { wort: 'die Aussprache', kollokation: 'eine verständliche Aussprache', es: 'pronunciación' },
        { wort: 'die Flüssigkeit', kollokation: 'an Flüssigkeit gewinnen', es: 'fluidez' },
        { wort: 'der Redebeitrag', kollokation: 'einen Redebeitrag leisten', es: 'intervención, turno de palabra' },
        { wort: 'umschreiben', kollokation: 'ein fehlendes Wort umschreiben', es: 'parafrasear, decir con otras palabras' },
        { wort: 'sich versprechen', kollokation: 'ich habe mich versprochen', es: 'equivocarse al hablar ~~no es «prometerse»~~' },
        { wort: 'ins Stocken geraten', kollokation: 'mitten im Satz ins Stocken geraten', es: 'atascarse, quedarse cortado' },
        { wort: 'aufeinander eingehen', kollokation: 'im Gespräch aufeinander eingehen', es: 'responder a lo que dice el otro' },
        { wort: 'der/die Prüfende', kollokation: 'die beiden Prüfenden', es: 'examinador/a' },
      ],
      hinweis: '**Sich versprechen** heißt, beim Sprechen einen Lapsus zu haben — ~~nada que ver con «prometer» (versprechen sin reflexivo)~~. Der Satz *Entschuldigung, ich habe mich versprochen — ich meinte…* ist selbst schon ein C1-Beweis: Selbstkorrektur wird positiv bewertet.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das Format: Prüfung zu zweit',
      absaetze: [
        'Das Modul Sprechen dauert **etwa 15 Minuten** und wird als __Paarprüfung__ abgelegt: zwei Kandidaten, zwei Prüfende. In **Teil 1** hält jeder von euch einen **Vortrag von rund 4 Minuten** zu einem vorgegebenen Thema und beantwortet anschließend **Nachfragen**. In **Teil 2** führt ihr **miteinander eine Diskussion** über eine Streitfrage — hier zählt die echte Interaktion, nicht zwei parallele Monologe.',
        'Der Partner ist kein Gegner. Die Prüfenden vergleichen euch nicht miteinander, sondern jeden mit den C1-Kriterien — **beide können die volle Punktzahl erreichen**. Ein gutes Zusammenspiel hebt sogar beide Noten, weil das Kriterium Interaktion nur gemeinsam zu haben ist.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Der Ablauf Minute für Minute',
      kopf: ['Phase', 'Dauer', 'Was passiert — und worauf es ankommt'],
      zeilen: [
        ['Begrüßung', '~1 Min', 'Kurze Vorstellung, Aufwärmfragen. Wird nicht bewertet — aber hier legst du dein Sprechtempo fest: ruhig beginnen.'],
        ['Vorbereitung Teil 1', '1 Min', 'Du erhältst dein Vortragsthema und machst dir Notizen. Stichwörter, keine Sätze (Strategie unten).'],
        ['Vortrag Kandidat/in A', '~4 Min', 'Vortrag mit klarer Gliederung + Nachfragen der Prüfenden und des Partners.'],
        ['Vortrag Kandidat/in B', '~4 Min', 'Dasselbe mit vertauschten Rollen. Während der andere spricht: aktiv zuhören — du musst gleich nachfragen.'],
        ['Teil 2: Diskussion', '~5 Min', 'Ihr diskutiert miteinander über eine Streitfrage. Aufeinander eingehen, das Wort abgeben und nehmen.'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Was die Prüfenden bewerten',
      absaetze: [
        'Die Kriterien entsprechen denen des Schreibens — **Erfüllung der Aufgabe, Kohärenz, Wortschatz, Strukturen** — ergänzt um die **Aussprache**: Laute, Wortakzent und Satzmelodie müssen durchgehend gut verständlich sein; ein hörbarer Akzent ist völlig in Ordnung, solange er das Verstehen nie behindert. Zur Kohärenz gehört mündlich auch die **Flüssigkeit**: nicht Geschwindigkeit, sondern das Vermeiden langer Abbrüche und Neustarts.',
        'Wichtig für Spanischsprachige: Die Prüfenden hören besonders auf die __Wortakzente__ (*über-SETZ-en* vs. *ÜBER-setzen*), auf lange und kurze Vokale (*Stadt/Staat*, *bitten/bieten*) und auf konsequentes Satzende-Signal — die deutsche Satzmelodie fällt am Ende ab. ~~El español tiende a subir el tono al final; en alemán eso suena a pregunta o a frase inacabada.~~',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die eine Minute Vorbereitung',
      steps: [
        {
          badge: '0–15 s',
          titel: 'Thema erfassen, Position wählen',
          text: 'Lies die Aufgabe, entscheide dich **sofort** für eine Grundrichtung. Nicht die „beste“ Meinung suchen — die, zu der dir am meisten einfällt.',
        },
        {
          badge: '15–45 s',
          titel: 'Drei Stichwörter, nicht mehr',
          text: 'Notiere ein Gerüst: __Punkt 1 · Punkt 2 · Beispiel__. Nur Substantive und Pfeile, keine ausformulierten Sätze — wer Sätze notiert, liest später ab und verliert bei Flüssigkeit und Interaktion.',
        },
        {
          badge: '45–60 s',
          titel: 'Ersten und letzten Satz festlegen',
          text: 'Den **Einstiegssatz** und den **Fazitsatz** legst du wörtlich im Kopf fest. Mit sicherem Anfang und sicherem Ende trägt dich die Mitte fast von selbst.',
        },
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Stärkerer Partner, schwächerer Partner',
      absaetze: [
        '**Der Partner ist stärker:** Kein Grund zur Panik — du wirst nicht an ihm gemessen. Lass dich nicht zu seinem Tempo drängen; sprich in deinem. Nutze seine guten Beiträge als Vorlage: *Da knüpfe ich gern an…* zeigt Interaktion und verschafft dir Anlaufzeit.',
        '**Der Partner ist schwächer oder sehr still:** Übernimm sanft die Führung, ohne zu dominieren. Stelle ihm konkrete Fragen (*Wie sehen Sie das — überwiegen für Sie die Vorteile?*), greif seine Ansätze auf und baue sie aus. Das ist keine Wohltätigkeit: **Gesprächsführung ist bewertbare Interaktionskompetenz.** Wer den Partner glänzen lässt, glänzt mit.',
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Notfallkoffer',
      gruppen: [
        {
          fn: 'Zeit gewinnen',
          saetze: [
            { satz: 'Das ist eine interessante Frage — da muss ich kurz überlegen.' },
            { satz: 'Wie soll ich es am besten ausdrücken…' },
            { satz: 'Lassen Sie es mich anders formulieren.' },
          ],
        },
        {
          fn: 'Sich selbst korrigieren',
          saetze: [
            { satz: 'Entschuldigung, ich habe mich versprochen — ich meinte natürlich…' },
            { satz: 'Genauer gesagt: …' },
          ],
        },
        {
          fn: 'Ein Wort umschreiben',
          saetze: [
            { satz: 'Mir fällt das genaue Wort gerade nicht ein — ich meine das Gerät, mit dem man…' },
            { satz: 'Es ist so etwas Ähnliches wie…' },
          ],
        },
        {
          fn: 'Nachfragen, wenn man nicht verstanden hat',
          saetze: [
            { satz: 'Könnten Sie die Frage bitte wiederholen?' },
            { satz: 'Verstehe ich Sie richtig, dass Sie … meinen?' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Strategien in Aktion',
      kicker: 'Blackout',
      titel: 'Der Faden reißt — und du knüpfst ihn neu',
      items: [
        { text: '*…und deshalb ist es wichtig, dass — **entschuldigen Sie, ich fange den Satz neu an:** Entscheidend ist, dass Schulen früh damit beginnen.*', gl: '— kontrollierter Neustart schlägt fünf Sekunden Schweigen' },
        { text: '*Was ich **eigentlich sagen möchte, ist Folgendes:** Die Kosten sind nicht das Hauptproblem.*', gl: '— die Formel kauft dir einen ganzen Gedanken Zeit' },
        { text: '*Da bin ich gerade unsicher — **aber was ich sicher weiß:** In meinem Heimatland funktioniert das anders.*', gl: '— Unsicherheit zugeben und sofort auf sicheres Terrain wechseln' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Umschreiben',
      titel: 'Das fehlende Wort ist kein Drama',
      items: [
        { text: 'Gesucht: *die Mülltrennung*. — *…dass man **den Abfall nach Glas, Papier und Plastik sortiert** — diese Sortierung ist in Deutschland sehr streng.*', gl: '— die Umschreibung zeigt mehr Wortschatz als das Wort selbst' },
        { text: 'Gesucht: *der Feierabend*. — *…die Zeit **nach der Arbeit, wenn man endlich abschalten kann**.*' },
        { text: 'Gesucht: *die Umgehungsstraße*. — *…eine **Straße, die um die Stadt herumführt**, damit der Verkehr nicht durchs Zentrum muss.*' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Aussprache',
      titel: 'Woran die Prüfenden hängen bleiben',
      items: [
        { text: '**Vokallänge:** *Er hat den Staat kritisiert* ≠ *er hat die Stadt kritisiert* — langes klares *a* gegen kurzes.', gl: '~~El español no distingue vocales largas/cortas; el alemán sí, y cambia el significado~~' },
        { text: '**Wortakzent:** *Ich muss das noch **über-SETZ-en*** (traducir) ≠ ***ÜBER-setzen*** (cruzar en barca). Trennbare Vorsilbe = Akzent vorn.' },
        { text: '**Satzmelodie:** Aussagesätze **fallen** am Ende ab: *Das halte ich für richtig.* ↘ — bleibt die Stimme oben, klingt es unfertig oder fragend.' },
      ],
    },

    { type: 'rule' },

    // ── 6. Modelltext · Mehr Beispiele ────────────────────────────
    {
      type: 'modell',
      eyebrow: 'Modell — ein Stichwortzettel aus der Vorbereitungsminute',
      thema: 'Thema: „Sollten Städte den öffentlichen Nahverkehr kostenlos anbieten?“ So sieht ein brauchbarer Zettel nach 60 Sekunden aus — deiner wird anders aussehen, entscheidend ist die Form: Position, zwei Punkte, ein Beispiel, wörtlich festgelegter Einstiegs- und Schlusssatz.',
      absaetze: [
        '*Position: ja, aber schrittweise*\n*1 Entlastung Verkehr/Klima → weniger Autos*\n*2 Kosten → Steuern? Qualität leidet?*\n*Bsp: Tallinn/Luxemburg*',
        '**Einstieg:** *Ich möchte über die Frage sprechen, ob der Nahverkehr kostenlos sein sollte — ein Thema, das viele Städte gerade beschäftigt.*',
        '**Schluss:** *Zusammenfassend halte ich einen kostenlosen Nahverkehr für sinnvoll, wenn zugleich in die Qualität investiert wird.*',
      ],
    },
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Rund um die Paarprüfung',
      items: [
        { text: 'Während der **Vorbereitungszeit** notierte sich Tomasz nur vier **Stichwörter** — und sprach anschließend völlig frei.', gl: '— ein Gerüst, kein Manuskript' },
        { text: 'Als Leonie mitten im **Vortrag** **ins Stocken geriet**, rettete sie sich mit der Formel *„Lassen Sie es mich anders formulieren“*.' },
        { text: 'Die beiden **Prüfenden** achten weniger auf Tempo als auf **Flüssigkeit**: Entscheidend ist, dass keine langen Abbrüche entstehen.' },
        { text: 'Auf die **Nachfrage** der Prüferin reagierte Samir mit einer Rückfrage: *„Verstehe ich Sie richtig, dass Sie nach den Kosten fragen?“*', gl: '— Rückfragen sind Gesprächskompetenz, keine Schwäche' },
        { text: 'Weil ihr das Wort *Ehrenamt* nicht einfiel, **umschrieb** Carla es kurzerhand: *Arbeit, die man freiwillig und unbezahlt leistet*.' },
        { text: 'In der Diskussion **gingen** die beiden Kandidaten spürbar **aufeinander ein** — jeder **Redebeitrag** knüpfte an den vorherigen an.', gl: '— genau das misst das Kriterium Interaktion' },
      ],
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Simulation der ersten Minuten',
      titel: 'Vom Themenblatt zum Sprechstart',
      anweisung: 'Du bekommst in der Prüfung dieses Themenblatt. Nutze genau eine Minute Vorbereitungszeit und produziere dann: (a) deinen Stichwortzettel, (b) den wörtlichen Einstiegssatz, (c) den wörtlichen Schlusssatz.',
      absaetze: [
        '**Themenblatt:** „Immer mehr Menschen kaufen fast alles im Internet. Stellen Sie das Thema vor, beleuchten Sie Vor- und Nachteile des Online-Handels und bewerten Sie die Entwicklung abschließend.“',
      ],
      loesungen: [
        '**(a) Stichwortzettel:** *Pro: bequem, Auswahl, Preise vergleichen · Contra: Innenstädte sterben, Retouren/Umwelt · Bsp: eigene Stadt, leere Läden · Position: bewusster mischen*',
        '**(b) Einstieg:** *Ich möchte heute darüber sprechen, warum immer mehr Menschen im Internet einkaufen — und was das für Handel und Städte bedeutet.*',
        '**(c) Schluss:** *Zusammenfassend sehe ich den Online-Handel als Gewinn an Bequemlichkeit, der uns aber etwas kostet — deshalb kaufe ich bewusst auch weiterhin vor Ort ein.*',
      ],
      kommentar: 'Beachte die Ökonomie: Der Zettel enthält **keine Sätze**, aber der erste und der letzte Satz stehen **wörtlich fest**. Genau diese Mischung — freies Gerüst, feste Klammer — trennt einen flüssigen Vortrag von einem abgelesenen.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Trainiere ab jetzt **jede Sprechübung mit Timer und Aufnahme**. Beim Anhören achtest du nur auf drei Dinge: Fällt die Satzmelodie am Ende ab? Wie lang sind deine Pausen? Und benutzt du Füllwörter auf Spanisch (*bueno, o sea, este…*)? Ersetze sie durch deutsche: **also, na ja, sagen wir** — die Prüfenden hören Füllwörter immer, die Sprache der Füllwörter verrät dich.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Format', 'Paarprüfung, ~15 Min: 2 Vorträge (~4 Min) + Diskussion (~5 Min)'],
        ['Bewertung', 'Erfüllung · Kohärenz/Flüssigkeit · Wortschatz · Strukturen · Aussprache'],
        ['Vorbereitungsminute', 'Stichwörter + fester erster und letzter Satz'],
        ['Notfallkoffer', 'Zeit gewinnen · umschreiben · selbst korrigieren · rückfragen'],
        ['Partnerprinzip', 'kein Vergleich untereinander — gute Interaktion hebt beide'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann den Ablauf der Paarprüfung Phase für Phase beschreiben.',
        'Ich weiß, was die fünf Bewertungsbereiche messen und woran die Aussprache konkret gemessen wird.',
        'Ich erstelle in 60 Sekunden einen brauchbaren Stichwortzettel mit festem Einstiegs- und Schlusssatz.',
        'Ich habe für Blackout, fehlende Wörter und Verständnisprobleme je eine eingeübte Formel parat.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Der Rahmen steht — jetzt füllen wir ihn. Die nächste Lektion widmet sich ganz **Teil 1, dem Vortrag**: die Dreiteilung Einleitung–Hauptpunkte–Fazit, die Signalwörter, die deine Gliederung hörbar machen, der souveräne Umgang mit Nachfragen — und ein komplettes, kommentiertes Vortragsmodell.',
    },
  ],
}
