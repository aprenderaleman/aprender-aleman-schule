// Lektion 32 · Sprechen Teil 2 — Diskussion mit dem Partner
//
// Bloque 2 — cierra el módulo Sprechen Y todo el bloque de estrategia
// (Lektionen 18-32). Canon: Diskussion ~5 Min. über eine Alltagsfrage,
// gemeinsames Ergebnis obligatorio. Diálogo modelo comentado que termina
// en acuerdo + tabla-síntesis estratégica de los 4 módulos
// (65/40/75/15 · 100/60 · repartos). Ausblick → Bloque 3 (Lektion 33).

export default {
  spec: ['Bloque 2', 'Modul Sprechen · Teil 2', 'Niveau B2', 'Prüfungsrelevanz: Sprechen'],
  h1: 'Sprechen Teil 2 — Diskussion mit dem Partner',
  lead: 'Ca. 5 Minuten zu zweit eine Alltagsfrage diskutieren und zu einem gemeinsamen Ergebnis kommen: höflich widersprechen, auf den Partner eingehen, einen Kompromiss aushandeln — und damit ist der Strategie-Block komplett.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'in der Diskussion höflich zustimmen, widersprechen und Kompromisse vorschlagen',
        'aktiv auf die Argumente des Partners reagieren, statt Monologe zu halten',
        'die Diskussion mit einem gemeinsamen Ergebnis abschließen',
        'die Kernstrategie aller vier B2-Module im Überblick behalten',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Sprache der Diskussion',
      items: [
        { wort: 'zustimmen + Dat.', kollokation: 'dem Partner in einem Punkt zustimmen', es: 'estar de acuerdo' },
        { wort: 'widersprechen + Dat.', kollokation: 'höflich widersprechen', es: 'contradecir, discrepar' },
        { wort: 'der Einwand, -wände', kollokation: 'einen Einwand vorbringen', es: 'objeción' },
        { wort: 'der Kompromiss, -e', kollokation: 'einen Kompromiss aushandeln', es: 'solución intermedia' },
        { wort: 'sich einigen auf + Akk.', kollokation: 'sich auf eine Lösung einigen', es: 'ponerse de acuerdo' },
        { wort: 'der Vorschlag, -schläge', kollokation: 'einen Vorschlag machen', es: 'propuesta' },
        { wort: 'überzeugen', kollokation: 'den Partner mit Argumenten überzeugen', es: 'convencer' },
        { wort: 'das Argument, -e', kollokation: 'ein Argument aufgreifen', es: 'argumento' },
        { wort: 'abwägen', kollokation: 'Vor- und Nachteile gegeneinander abwägen', es: 'sopesar' },
        { wort: 'das Ergebnis, -se', kollokation: 'zu einem gemeinsamen Ergebnis kommen', es: 'resultado, conclusión' },
        { wort: 'unterbrechen', kollokation: 'den Partner nicht unterbrechen', es: 'interrumpir' },
        { wort: 'einverstanden sein', kollokation: 'mit dem Vorschlag einverstanden sein', es: 'estar conforme' },
      ],
      hinweis: 'Falsche Freunde: **diskutieren** ist neutral (*debatir*) — sich **streiten** ist *pelearse*. Und der **Kompromiss** ist die Lösung in der Mitte, ~~no el „compromiso“ español en el sentido de obligación (das ist die Verpflichtung)~~.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Aufgabe',
      absaetze: [
        'In Teil 2 diskutiert ihr **zu zweit ca. 5 Minuten** über eine Alltagsfrage — das Aufgabenblatt nennt die Frage und in der Regel einige Denkanstöße (das Layout zeigt dir der offizielle Modellsatz). Bewertet wird vor allem die ==Interaktion==: aufeinander eingehen, Argumente aufgreifen und am Ende zu einem **gemeinsamen Ergebnis** kommen. Es gibt keine „richtige“ Meinung — ihr seid keine Gegner, sondern Partner: ==Wenn das Gespräch gut läuft, gewinnt ihr beide Punkte.==',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — der Fahrplan in vier Zügen',
      steps: [
        {
          titel: 'Eröffnen & Position beziehen',
          text: 'Einer übernimmt die Initiative: die Frage kurz aufgreifen, die eigene Meinung nennen und mit __einem Grund + Beispiel__ stützen. Kein langer Vortrag — zwei, drei Sätze reichen.',
        },
        {
          titel: 'Auf den Partner reagieren',
          text: 'Erst würdigen, dann einschränken: __„Da hast du recht, aber …“__ Greif ein Wort des Partners auf und führe es weiter — das ist die Interaktion, die die Prüfenden hören wollen.',
        },
        {
          titel: 'Alternativen abwägen',
          text: 'Zweite Runde: weitere Argumente, eigene Beispiele, __Nachfragen an den Partner__ („Wie ist das bei dir?“). Wer fragt, steuert das Gespräch.',
        },
        {
          titel: 'Kompromiss & gemeinsames Fazit',
          text: 'Rechtzeitig die Landung einleiten: __„Wie wäre es, wenn wir …?“__ — dann die Einigung in einem Satz zusammenfassen. ==Das gemeinsame Ergebnis gehört zur Aufgabe==; ohne Abschluss bleibt die Erfüllung unvollständig.',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — die goldene Regel',
      card: true,
      titel: 'Reagieren schlägt Referieren',
      absaetze: [
        'Eine Diskussion ist **kein doppelter Vortrag**: Zwei Monologe nebeneinander verfehlen die Aufgabe, auch wenn jeder einzelne perfekt ist. Halte deine Redebeiträge bei **2-4 Sätzen** und baue in jeden zweiten Beitrag eine Reaktion oder Frage ein. Ist dein Partner sehr dominant, unterbrich höflich („Darf ich da kurz einhaken?“); ist er blockiert, hilf ihm mit einer Frage weiter — **beides zählt für dich** als Interaktion. Und Vorsicht mit dem Calco: ~~„Ich bin de acuerdo“ no existe~~ — auf Deutsch heißt es __„Ich bin einverstanden“__ oder __„Da stimme ich dir zu“__.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele: Redemittel + Modell ────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Interaktion in der Diskussion',
      gruppen: [
        {
          fn: 'Eröffnen',
          saetze: [
            { satz: 'Sollen wir anfangen? Was meinst du zu der Frage?' },
            { satz: 'Ich fange mal an: Ich finde, dass …' },
          ],
        },
        {
          fn: 'Zustimmen',
          saetze: [
            { satz: 'Da stimme ich dir völlig zu.' },
            { satz: 'Das sehe ich genauso.' },
            { satz: 'Genau — und dazu kommt noch, dass …', gloss: 'asentir y añadir: interacción doble' },
          ],
        },
        {
          fn: 'Höflich widersprechen',
          saetze: [
            { satz: 'Da hast du recht, aber …' },
            { satz: 'Das stimmt schon, trotzdem finde ich, dass …' },
            { satz: 'Ich sehe das ein bisschen anders: …' },
          ],
        },
        {
          fn: 'Nachfragen & einbeziehen',
          saetze: [
            { satz: 'Wie meinst du das genau?' },
            { satz: 'Was hältst du denn von …?' },
          ],
        },
        {
          fn: 'Kompromiss & Abschluss',
          saetze: [
            { satz: 'Wie wäre es, wenn wir …?' },
            { satz: 'Können wir uns darauf einigen, dass …?' },
            { satz: 'Gut, dann sind wir uns einig: …' },
          ],
        },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Diskussionsmodell — kommentiert',
      thema: 'Frage: Sollten Geschäfte auch am Sonntag öffnen dürfen?',
      woerter: 'ca. 5 Minuten Gesprächszeit',
      absaetze: [
        '**A:** Sollen wir anfangen? Also, ich finde, Geschäfte sollten auch sonntags öffnen dürfen, weil viele Menschen unter der Woche einfach keine Zeit zum Einkaufen haben. Ich arbeite selbst bis 18 Uhr — da wird es oft knapp.',
        '**B:** ==Da hast du recht==, praktisch wäre das. ==Aber== man darf nicht vergessen, dass dann die Verkäuferinnen und Verkäufer am Sonntag arbeiten müssen. Die brauchen doch auch einen freien Tag mit ihrer Familie.',
        '**A:** ==Das stimmt schon==, an die Angestellten habe ich noch gar nicht gedacht. ==Trotzdem== glaube ich, dass es mit freiwilligen Schichten und Zuschlägen funktionieren könnte. ==Wie siehst du das?==',
        '**B:** Freiwillig klingt gut, aber in der Praxis gibt es oft Druck vom Chef. ==Deshalb wäre mein Vorschlag==, dass nicht alle Geschäfte öffnen, sondern nur bestimmte — Bäckereien zum Beispiel, oder Läden in Bahnhöfen. So ist das ja heute schon teilweise geregelt.',
        '**A:** ==Das klingt vernünftig.== Man könnte zusätzlich ein paar verkaufsoffene Sonntage im Jahr erlauben — dann haben Berufstätige eine Chance, und die Angestellten wissen es lange vorher.',
        '**B:** Genau. ==Können wir uns also darauf einigen==, dass die Geschäfte nicht generell öffnen, sondern nur Ausnahmen erlaubt sind: kleine Läden für den täglichen Bedarf und einige geplante Sonntage im Jahr?',
        '**A:** ==Einverstanden==, das ist ein guter Kompromiss. ==Damit sind wir uns einig.==',
      ],
      annotationen: [
        { tag: 'Eröffnung', text: 'A übernimmt die Initiative, bezieht sofort Position und stützt sie mit weil-Satz und eigenem Beispiel — kein Zögern, kein Monolog.' },
        { tag: 'Widerspruch', text: 'B nutzt das Muster ==erst würdigen, dann einschränken== („Da hast du recht, aber …“) — Widerspruch ohne Konfrontation, genau der Ton der Prüfung.' },
        { tag: 'Interaktion', text: 'A gibt offen zu, einen Aspekt übersehen zu haben, und gibt die Frage zurück („Wie siehst du das?“) — aufeinander eingehen ist das Herz von Teil 2.' },
        { tag: 'Kompromiss', text: 'B schlägt mit „Deshalb wäre mein Vorschlag …“ eine Mittellösung vor; A ergänzt sie, statt nur ja zu sagen — die Einigung entsteht ==gemeinsam==.' },
        { tag: 'Abschluss', text: 'Der vorletzte Zug fasst das Ergebnis in einem Satz zusammen, der letzte bestätigt es. Dieses hörbare gemeinsame Fazit erfüllt die Aufgabe vollständig.' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Reagieren statt referieren',
      items: [
        { text: 'In diesem Punkt **stimme** ich dir völlig **zu**: Das Angebot für Familien muss besser werden.', gl: '— *zustimmen* + Dat., sin preposición' },
        { text: 'Da muss ich dir leider **widersprechen** — mit dem Rad ist man in der Stadt oft schneller.', gl: '— *widersprechen* + Dat.' },
        { text: 'Dein **Argument** mit den Kosten greife ich gern auf, aber man muss auch an die Umwelt denken.', gl: '— retomar la palabra del compañero = interacción' },
        { text: 'Einen **Einwand** habe ich noch: Nicht jeder hat zu Hause genug Platz dafür.', gl: '' },
        { text: 'Entschuldige, ich wollte dich nicht **unterbrechen** — sprich ruhig weiter.', gl: '— tras interrumpir, devolver la palabra con cortesía' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Kompromiss',
      titel: 'Zu einem gemeinsamen Ergebnis kommen',
      items: [
        { text: 'Mein **Vorschlag** wäre, dass wir abwechselnd kochen und bestellen.', gl: '— Konjunktiv II suaviza la propuesta' },
        { text: 'Wenn wir beide Seiten **abwägen**, ist ein Tag Homeoffice pro Woche wohl die beste Lösung.', gl: '' },
        { text: 'Mit diesem **Kompromiss** bin ich **einverstanden**.', gl: '— *einverstanden sein mit* + Dat.; nunca «Ich bin de acuerdo»' },
        { text: 'Gut, dann **einigen** wir uns **auf** eine kurze Reise im Frühling.', gl: '— *sich einigen auf* + Akk.' },
        { text: 'Du hast mich **überzeugt** — so kommen wir zu einem gemeinsamen **Ergebnis**.', gl: '' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Sprechen · Teil 2',
      titel: 'Diskussion, ca. 5 Minuten',
      anweisung: 'So sieht die Aufgabe im Prüfungsformat aus. Übe zu zweit — oder übernimm beide Rollen laut, mit Timer.',
      absaetze: [
        '**Sie nehmen an einer Diskussion teil. Ihre Frage: Urlaub in der Heimat oder im Ausland — was ist besser?**',
        '· Tauschen Sie Ihre Meinungen und Argumente aus. · Reagieren Sie auf die Argumente Ihrer Gesprächspartnerin / Ihres Gesprächspartners. · Kommen Sie am Ende zu einem gemeinsamen Ergebnis.',
      ],
      loesungLabel: 'Lösungsskizze',
      loesungen: [
        '**Mögliche Argumentlinien:** Heimat → günstiger, keine Sprachbarriere, kurze Anreise; Ausland → neue Kultur, Sprache üben, anderes Klima.',
        '**Möglicher Kompromiss:** „Es kommt darauf an“ reicht nicht — konkret einigen, z. B.: kurze Urlaube in der Heimat, einmal im Jahr eine größere Auslandsreise. Der Abschlusssatz macht die Einigung hörbar: „Dann sind wir uns einig, dass …“.',
      ],
      kommentar: 'Die drei Spiegelpunkte der Aufgabe (austauschen · reagieren · Ergebnis) sind exakt die Kriterien: Wer nur seine Meinung sagt, erfüllt ein Drittel der Aufgabe.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Fünf Minuten zu zweit heißt: ==etwa 6-8 kurze Redebeiträge pro Person== — keine Vorträge. Behalte die Zeit im Gefühl und leite nach gut drei Minuten die Landung ein („Wie wäre es, wenn …?“): Ein sauberer Kompromiss in der Zeit ist mehr wert als ein brillantes Argument, das vom Gong abgeschnitten wird.',
    },

    { type: 'rule' },

    // ── Abschluss: síntesis del Bloque 2 completo ─────────────────
    {
      type: 'prose',
      eyebrow: 'Zusammenfassung — Block 2 komplett',
      absaetze: [
        'Mit dieser Lektion kennst du **alle vier Module** des Zertifikats B2: Format, Bewertung und Strategie. Jedes Modul bringt **100 Punkte, bestanden ab 60** — und jedes kann einzeln abgelegt und wiederholt werden. Die Tabelle ist deine Landkarte für die Vorbereitung:',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — die vier Module im Überblick',
      kopf: ['Modul', 'Zeit', 'Strategie-Kern'],
      zeilen: [
        ['Lesen', '65 Min.', '5 Teile · Zeitplan ca. 25 + 12 + 15 + 8 Min. + 5 Min. Puffer · erst die Aufgabe, dann der Text'],
        ['Hören', 'ca. 40 Min.', '4 Teile · Aufgaben vor dem Hören lesen und antizipieren · Faden verloren? Raten und weiter'],
        ['Schreiben', '75 Min.', 'T1 Forumsbeitrag ~150 Wörter (empf. 50 Min.) + T2 formelle Nachricht ~100 Wörter (empf. 25 Min.)'],
        ['Sprechen', 'ca. 15 Min.', '15 Min. Vorbereitung mit Stichwortzettel · T1 Vortrag ~4 Min. + Nachfragen · T2 Diskussion ~5 Min. mit Kompromiss'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich widerspreche höflich, ohne die Diskussion zu blockieren („Da hast du recht, aber …“).',
        'Ich reagiere auf die Argumente meines Partners, statt Monologe zu halten.',
        'Ich schließe die Diskussion aktiv mit einem Kompromiss und einem gemeinsamen Fazit ab.',
        'Ich habe für alle vier Module Zeitplan und Kernstrategie im Kopf.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Block 2 ist geschafft — die Strategie steht. Jetzt wechselt die Perspektive: In Block 3 trainierst du die **Themenfelder**, aus denen die Prüfung ihre Texte und Fragen baut. Den Anfang macht **„Arbeit & Beruf“** — mit dem Wortschatz und den Argumenten, die dir in Vortrag, Forumsbeitrag und Diskussion immer wieder begegnen werden.',
    },
  ],
}
