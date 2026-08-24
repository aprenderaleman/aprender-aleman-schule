// Lektion 35 · Themenfeld: Gesundheit & Ernährung

export default {
  spec: ['Bloque 3', 'Themenfelder', 'Niveau C1', 'Prüfungsrelevanz: Schreiben Teil 1 · Sprechen · Hören'],
  h1: 'Gesundheit & Ernährung',
  lead: 'Zuckersteuer, Zweiklassenmedizin, Leistungsdruck: kaum ein Themenfeld liefert dem Examen so verlässlich Diskussionsstoff — und dir so viele wiederverwendbare Argumente.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du das deutsche Gesundheitssystem (gesetzlich/privat) in seinen Grundzügen darstellen und die Kritik daran wiedergeben.',
        'Du argumentierst differenziert zu Prävention, fleischloser Ernährung und Zuckersteuer — mit dem Begriffspaar *Eigenverantwortung vs. Bevormundung*.',
        'Du kannst über Leistungsdruck und psychische Gesundheit in einem sachlichen, nicht umgangssprachlichen Register schreiben.',
        'Du verfasst zu einer Gesundheitsfrage einen prüfungsreifen Diskussionsbeitrag mit klarer Gliederung.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die gesetzliche Krankenversicherung', kollokation: 'in der gesetzlichen Krankenversicherung versichert sein', es: 'seguro médico público' },
        { wort: 'die Zweiklassenmedizin', kollokation: 'vor einer Zweiklassenmedizin warnen', es: 'medicina de dos velocidades' },
        { wort: 'der Beitrag', kollokation: 'einkommensabhängige Beiträge entrichten', es: 'cotización, cuota' },
        { wort: 'die Prävention', kollokation: 'auf Prävention statt auf Reparatur setzen', es: 'prevención' },
        { wort: 'die Vorsorgeuntersuchung', kollokation: 'eine Vorsorgeuntersuchung wahrnehmen', es: 'chequeo preventivo' },
        { wort: 'die ausgewogene Ernährung', kollokation: 'auf eine ausgewogene Ernährung achten', es: 'alimentación equilibrada' },
        { wort: 'der Fleischkonsum', kollokation: 'den Fleischkonsum deutlich einschränken', es: 'consumo de carne' },
        { wort: 'die Zuckersteuer', kollokation: 'die Einführung einer Zuckersteuer befürworten', es: 'impuesto al azúcar' },
        { wort: 'die Volkskrankheit', kollokation: 'Diabetes zählt zu den Volkskrankheiten', es: 'enfermedad muy extendida' },
        { wort: 'der Leistungsdruck', kollokation: 'dem ständigen Leistungsdruck standhalten', es: 'presión por el rendimiento' },
        { wort: 'die psychische Gesundheit', kollokation: 'die psychische Gesundheit ernst nehmen', es: 'salud mental' },
        { wort: 'die Erschöpfung', kollokation: 'an chronischer Erschöpfung leiden', es: 'agotamiento' },
        { wort: 'die Eigenverantwortung', kollokation: 'an die Eigenverantwortung der Bürger appellieren', es: 'responsabilidad individual' },
        { wort: 'die Bevormundung', kollokation: 'staatliche Bevormundung entschieden ablehnen', es: 'paternalismo, tutela' },
      ],
      hinweis: 'Unterscheide **die Krankenversicherung** (das System) von **der Krankenkasse** (die konkrete Institution, z. B. AOK oder TK). ~~Falso amigo: „la condición física“ es *die Kondition*, pero „una condición médica“ es *eine Erkrankung / ein Leiden* — nunca *Kondition*.~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das duale System — Deutschlands Sonderweg',
      absaetze: [
        'Deutschland leistet sich als eines der wenigen Länder ein **duales Gesundheitssystem**: Rund neun von zehn Menschen sind in der __gesetzlichen Krankenversicherung__ versichert und entrichten einkommensabhängige Beiträge — die Gesunden finanzieren die Kranken, die Besserverdienenden die Geringverdiener (**Solidarprinzip**). Eine Minderheit, vor allem Beamte, Selbstständige und Gutverdiener, ist **privat** versichert und zahlt risikoabhängige Prämien.',
        'Genau an dieser Trennlinie entzündet sich die Dauerdebatte: Kritiker sprechen von __Zweiklassenmedizin__, weil Privatversicherte oft schneller Facharzttermine erhalten. Verteidiger des Systems verweisen darauf, dass die Versorgung im internationalen Vergleich flächendeckend und ohne lange Wartelisten funktioniere — und dass eine Einheitsversicherung („Bürgerversicherung“) den Wettbewerb um Qualität schwächen könnte. ~~Aprende el par Solidarprinzip ↔ Zweiklassenmedizin: resume todo el debate en dos palabras.~~',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die Streitfragen im Überblick',
      kopf: ['Streitfrage', 'Dafür spricht…', 'Dagegen wird eingewandt…'],
      zeilen: [
        ['Zuckersteuer', 'nachweisbare Lenkungswirkung (Großbritannien: Hersteller reduzierten den Zuckergehalt); Entlastung der Krankenkassen', 'Bevormundung mündiger Bürger; trifft einkommensschwache Haushalte überproportional; Bildung wirke nachhaltiger'],
        ['Vegetarisch/vegan', 'gesundheitliche Vorteile bei ausgewogener Planung; Klima- und Tierschutz; sinkender Fleischkonsum als Trend', 'Ernährung sei Privatsache; Nährstoffversorgung erfordert Wissen; kulturelle Esstraditionen'],
        ['Prävention', 'Vorbeugen ist billiger als Heilen; Vorsorgeuntersuchungen werden von den Kassen bezahlt', 'Verantwortung dürfe nicht allein beim Einzelnen liegen; Verhältnisse (Werbung, Preise) prägen das Verhalten mit'],
        ['Leistungsdruck', 'Enttabuisierung psychischer Erkrankungen; Krankenkassen melden steigende Fehltage wegen psychischer Leiden', 'Gefahr der Modediagnose; Belastung ist ungleich verteilt und schwer messbar'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Fakten und Institutionen für deine Argumentation',
      absaetze: [
        '**Erstens:** Das __Robert Koch-Institut__ ist die zentrale Einrichtung des Bundes für die Beobachtung der Gesundheit der Bevölkerung; seine Daten zu Übergewicht und Diabetes werden in fast jeder Ernährungsdebatte zitiert. **Zweitens:** Die __Deutsche Gesellschaft für Ernährung__ gibt die offiziellen Ernährungsempfehlungen heraus — mit deutlich gesenkten Richtwerten für Fleisch und Zucker. Die __Weltgesundheitsorganisation__ empfiehlt, höchstens zehn Prozent der Energiezufuhr aus freiem Zucker zu beziehen.',
        '**Drittens — das Kontrastbeispiel:** __Großbritannien__ erhebt seit 2018 eine Abgabe auf stark gezuckerte Getränke; viele Hersteller senkten daraufhin den Zuckergehalt ihrer Rezepturen. Deutschland setzt dagegen bislang auf eine **freiwillige Reduktionsstrategie** der Industrie — für die einen ein Beweis für Augenmaß, für die anderen ein Beleg dafür, dass Freiwilligkeit zu langsam wirkt. Dieses Länderpaar ist dein stärkster Beleg im Diskussionsbeitrag.',
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Der rote Faden: Eigenverantwortung oder Verhältnisprävention?',
      absaetze: [
        'Fast jede Frage dieses Feldes läuft auf dieselbe Achse hinaus: Setzt man beim **Verhalten** des Einzelnen an (Aufklärung, Appelle an die Eigenverantwortung) oder bei den **Verhältnissen** (Steuern, Werbeverbote, Kantinenangebot)? Die Fachbegriffe __Verhaltensprävention__ und __Verhältnisprävention__ heben jeden Text sofort auf C1-Niveau.',
        'Beim Thema **psychische Gesundheit** gilt dieselbe Logik: Man kann dem Einzelnen Resilienztraining empfehlen — oder fragen, ob Arbeitsverdichtung und ständige Erreichbarkeit die eigentlichen Ursachen sind. Wer beide Ebenen benennt und dann gewichtet, argumentiert prüfungsreif.',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Sätze fürs Examen',
      kicker: 'Gesundheitssystem',
      titel: 'Solidarprinzip und seine Grenzen',
      items: [
        { text: 'Das deutsche Gesundheitssystem beruht auf dem **Solidarprinzip**: Die Beiträge richten sich nach dem Einkommen, die Leistungen nach dem Bedarf.' },
        { text: 'Kritiker bemängeln, dass Privatversicherte **bevorzugt behandelt** würden — ein Befund, der die Debatte um die Zweiklassenmedizin immer wieder anheizt.', gl: '— „würden“: Konjunktiv II en lugar del Konjunktiv I ambiguo („werden“) — refieres la crítica sin suscribirla'},
        { text: 'Eine flächendeckende Versorgung **aufrechtzuerhalten** wird angesichts des Ärztemangels auf dem Land zunehmend schwieriger.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Ernährung',
      titel: 'Vom Fleischkonsum zur Zuckersteuer',
      items: [
        { text: 'Der Fleischkonsum ist in Deutschland seit Jahren **rückläufig** — ein Wandel, der weniger auf Verbote als auf ein verändertes Bewusstsein zurückgeht.' },
        { text: 'Befürworter einer Zuckersteuer versprechen sich von ihr eine **Lenkungswirkung**; das britische Beispiel zeigt, dass Hersteller ihre Rezepturen tatsächlich anpassen.' },
        { text: 'Gegner halten dagegen, eine solche Abgabe **bevormunde mündige Verbraucher** und belaste ausgerechnet einkommensschwache Haushalte.', gl: '— *ausgerechnet*: precisamente (con matiz crítico), muy útil en argumentación' },
        { text: 'Eine ausgewogene vegane Ernährung ist nach Ansicht der Fachgesellschaften **möglich, aber planungsbedürftig** — sie erfordert Wissen, keine Verbote.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Prävention',
      titel: 'Vorbeugen statt heilen',
      items: [
        { text: 'Es gilt der Grundsatz: **Vorbeugen ist billiger als Heilen** — dennoch fließt der Löwenanteil der Ausgaben in die Behandlung, nicht in die Prävention.' },
        { text: 'Wer Vorsorgeuntersuchungen regelmäßig **wahrnimmt**, erhöht die Chance, dass Volkskrankheiten wie Diabetes früh erkannt werden.' },
        { text: 'Aufklärungskampagnen allein **greifen zu kurz**, solange Werbung und Preisgestaltung in die Gegenrichtung wirken.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Psychische Gesundheit',
      titel: 'Leistungsdruck sachlich benennen',
      items: [
        { text: 'Die Krankenkassen verzeichnen seit Jahren **einen Anstieg der Fehltage** aufgrund psychischer Erkrankungen — ein Befund, der sich quer durch alle Branchen zieht.' },
        { text: 'Ständige Erreichbarkeit und Arbeitsverdichtung setzen viele Beschäftigte **unter einen Druck, dem sie auf Dauer nicht standhalten**.' },
        { text: 'Dass über Erschöpfung und Depression heute offener gesprochen wird, ist **kein Zeichen von Schwäche, sondern von Enttabuisierung**.' },
        { text: 'Betriebliche Gesundheitsförderung bleibt **ein Feigenblatt**, wenn zugleich die Personaldecke immer dünner wird.', gl: '— *das Feigenblatt*: la hoja de parra; metáfora estándar para medidas cosméticas' },
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Meinung äußern im Themenfeld',
      gruppen: [
        {
          fn: 'Abwägen',
          saetze: [
            { satz: 'So berechtigt der Appell an die Eigenverantwortung ist, so wenig ändert er an den Verhältnissen, unter denen Menschen einkaufen und arbeiten.' },
            { satz: 'Zwischen Fürsorge und Bevormundung verläuft ein schmaler Grat — entscheidend ist, ob eine Maßnahme Wahlfreiheit lässt.' },
          ],
        },
        {
          fn: 'Mit Belegen argumentieren',
          saetze: [
            { satz: 'Wie das britische Beispiel zeigt, kann eine Abgabe die Hersteller dazu bewegen, ihre Rezepturen zu ändern.' },
            { satz: 'Den Daten des Robert Koch-Instituts zufolge zählen Übergewicht und Diabetes inzwischen zu den größten Herausforderungen des Gesundheitssystems.', gloss: '~~„zufolge“ pospuesto + Dativ: den Daten zufolge~~' },
          ],
        },
        {
          fn: 'Forderungen formulieren',
          saetze: [
            { satz: 'Es wäre an der Zeit, Prävention nicht länger als Privatsache zu behandeln, sondern strukturell zu verankern.' },
            { satz: 'Statt auf Verbote zu setzen, sollte der Staat gesunde Entscheidungen zur einfachsten Option machen.' },
          ],
        },
        {
          fn: 'Einschränken und schließen',
          saetze: [
            { satz: 'Bei aller Skepsis gegenüber staatlichen Eingriffen: Wo die Allgemeinheit die Folgekosten trägt, endet das rein private Ermessen.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz & Kollokationen',
      frage: 'Welches Verb passt? Ergänze in der richtigen Form: *entrichten · wahrnehmen · standhalten · appellieren · warnen*.',
      aufgaben: [
        'Gewerkschaften ______ seit Langem vor einer schleichenden Zweiklassenmedizin.',
        'Alle Beschäftigten ______ einkommensabhängige Beiträge zur gesetzlichen Krankenversicherung.',
        'Nur etwa die Hälfte der Berechtigten ______ die angebotenen Vorsorgeuntersuchungen ______.',
        'Die Ministerin ______ an die Eigenverantwortung der Verbraucher, statt eine Steuer einzuführen.',
        'Viele Berufseinsteiger fragen sich, wie lange sie diesem Leistungsdruck ______ können.',
      ],
      loesungen: [
        '… **warnen** seit Langem vor … (*warnen vor* + Dat.)',
        '… **entrichten** einkommensabhängige Beiträge … ~~Registro formal: entrichten = pagar (cuotas, tasas); nunca para compras.~~',
        '… **nimmt** die angebotenen Vorsorgeuntersuchungen **wahr**. (*wahrnehmen* = aprovechar una oferta/cita)',
        '… **appelliert** an die Eigenverantwortung … (*appellieren an* + Akk.)',
        '… wie lange sie diesem Leistungsdruck **standhalten** können. (*standhalten* + Dat.)',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Von B2 zu C1',
      frage: 'Formuliere die B2-Sätze mit dem Kernwortschatz und komplexeren Strukturen auf C1-Niveau um.',
      aufgaben: [
        'Zucker ist schlecht für die Gesundheit, deshalb wollen manche eine Steuer.',
        'Privatpatienten bekommen schneller einen Termin. Das finden viele unfair.',
        'Viele junge Leute haben Stress im Job und werden krank.',
        'Es ist besser, Krankheiten zu verhindern, als sie zu behandeln.',
      ],
      loesungen: [
        '**Da übermäßiger Zuckerkonsum als Mitursache mehrerer Volkskrankheiten gilt, mehren sich die Stimmen, die eine Zuckersteuer mit Lenkungswirkung fordern.**',
        '**Dass Privatversicherte bei der Terminvergabe bevorzugt werden, empfinden viele als Verstoß gegen das Solidarprinzip — das Stichwort Zweiklassenmedizin macht die Runde.**',
        '**Immer mehr Berufseinsteiger leiden unter einem Leistungsdruck, der auf Dauer in chronische Erschöpfung münden kann.** ~~*in etwas münden*: desembocar en; alternativa elegante a „führen zu“.~~',
        '**Prävention ist der Behandlung vorzuziehen — vorzubeugen ist nicht nur wirksamer, sondern auch kostengünstiger als zu heilen.**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Entwirf in Stichpunkten einen Kurz-Vortrag (5 Punkte: Einleitung, zwei Aspekte, Bewertung, Fazit) zum Thema **„Sollten Mensen und Kantinen ein tägliches veganes Gericht anbieten müssen?“**',
      loesung: '**Mögliche Lösung** (andere Gliederungen sind richtig, wenn beide Seiten und eine Bewertung vorkommen):\n**Einleitung** — Ausgangslage: sinkender Fleischkonsum, wachsende Nachfrage nach pflanzlichen Gerichten.\n**Aspekt 1 (dafür)** — Wahlfreiheit wird erweitert, nicht eingeschränkt; Klima- und Gesundheitsargumente; geringe Kosten.\n**Aspekt 2 (dagegen)** — Verpflichtung als Symbolpolitik; Bevormundungsvorwurf; Qualität zählt mehr als Quote.\n**Bewertung** — ein Angebot verpflichtend zu machen ist keine Bevormundung, solange niemandem etwas weggenommen wird; entscheidend ist die Attraktivität des Gerichts.\n**Fazit** — Verhältnisprävention im Kleinen: Die gesunde Wahl zur einfachen Wahl machen.',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1 · Diskussionsbeitrag',
      titel: 'Diskussionsbeitrag: „Braucht Deutschland eine Zuckersteuer?“',
      anweisung: 'Im echten Schreiben Teil 1 verfasst du in ca. 40 Minuten einen Diskussionsbeitrag von etwa 230 Wörtern. Behandle alle vier Leitpunkte: Bedeutung des Themas erläutern · Argumente für und gegen abwägen · eigene Meinung begründen · ein Beispiel anführen.',
      absaetze: [
        'Für ein Online-Forum zum Thema Verbraucherpolitik schreiben Sie einen Diskussionsbeitrag zur Frage: **Sollte der Staat stark gezuckerte Lebensmittel höher besteuern?**',
      ],
      loesungLabel: 'Musterlösung (~230 Wörter)',
      loesungen: [
        'Kaum eine verbraucherpolitische Frage wird so kontrovers diskutiert wie die Zuckersteuer. Da Übergewicht und Diabetes zu den großen Volkskrankheiten zählen und ihre Folgekosten von der Allgemeinheit getragen werden, geht das Thema weit über den privaten Speiseplan hinaus.\n\nFür eine solche Abgabe spricht vor allem ihre Lenkungswirkung: Wie das britische Beispiel zeigt, senken viele Hersteller den Zuckergehalt ihrer Produkte, sobald er sie Geld kostet — der Effekt tritt also ein, bevor der Verbraucher überhaupt an der Kasse steht. Zudem entlastet ein sinkender Zuckerkonsum langfristig die Krankenkassen und damit alle Beitragszahler. Ein Preissignal erreicht überdies auch jene, an denen Aufklärungskampagnen erfahrungsgemäß vorbeigehen.\n\nDagegen wird eingewandt, eine Zuckersteuer bevormunde mündige Bürger und treffe ausgerechnet einkommensschwache Haushalte am härtesten. Auch sei Aufklärung nachhaltiger als jeder Preisaufschlag, denn wer die Zusammenhänge verstehe, entscheide selbstständig besser. Zudem sei fraglich, ob ein moderater Aufpreis das Kaufverhalten überhaupt spürbar verändere.\n\nMeines Erachtens greift der Bevormundungsvorwurf jedoch zu kurz. Niemandem wird etwas verboten; es ändert sich lediglich der Preis eines Produkts, dessen Folgekosten bislang die Solidargemeinschaft trägt. Deutschland setzt bisher auf eine freiwillige Reduktionsstrategie der Industrie — die Ergebnisse bleiben nach Ansicht vieler Fachleute hinter den Erwartungen zurück, während Großbritannien messbare Erfolge erzielt hat. Eine Steuer ersetzt die Aufklärung im Übrigen nicht — sie ergänzt sie dort, wo Appelle allein verpuffen.\n\nUnterm Strich halte ich eine maßvolle Zuckersteuer daher für gerechtfertigt — vorausgesetzt, die Einnahmen fließen in Prävention und Ernährungsbildung. So würde aus einem Preissignal ein doppelter Gesundheitsgewinn.',
      ],
      kommentar: 'Beachte die Vier-Absatz-Logik: Relevanz → Pro → Contra → begründete eigene Position mit Beispiel. Die Leitpunkte sind vollständig abgedeckt; Konnektoren (*zudem, dagegen, meines Erachtens, unterm Strich*) machen die Gliederung sichtbar.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im Diskussionsbeitrag zählt **Abdeckung vor Brillanz**: Ein fehlender Leitpunkt kostet mehr Punkte als ein schlichter Satz. Hake die vier Leitpunkte nach dem Schreiben einzeln ab — und halte dir das Paar **Eigenverantwortung/Bevormundung** bereit: Es passt auf fast jedes Gesundheits- und Konsumthema.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Streitfrage', 'Argumentationsachse', 'Schlüsselwörter'],
      zeilen: [
        ['Gesundheitssystem', 'Solidarprinzip vs. Zweiklassenmedizin', 'Beiträge entrichten · flächendeckend'],
        ['Zuckersteuer', 'Lenkungswirkung vs. Bevormundung', 'Volkskrankheit · Folgekosten'],
        ['Ernährung', 'Privatsache vs. Gemeinwohl', 'Fleischkonsum · ausgewogen · planungsbedürftig'],
        ['Psychische Gesundheit', 'individuelle Resilienz vs. Arbeitsbedingungen', 'Leistungsdruck · Erschöpfung · Enttabuisierung'],
        ['Prävention', 'Verhaltens- vs. Verhältnisprävention', 'vorbeugen · Vorsorgeuntersuchung wahrnehmen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann das duale Krankenversicherungssystem und die Kritik daran in drei Sätzen darstellen.',
        'Ich argumentiere zur Zuckersteuer mit Pro, Contra und einem realen Beispiel (Großbritannien vs. freiwillige Reduktionsstrategie).',
        'Ich unterscheide Verhaltens- und Verhältnisprävention und setze das Begriffspaar aktiv ein.',
        'Ich schreibe in 40 Minuten einen vollständigen Diskussionsbeitrag mit allen vier Leitpunkten.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Das Gesundheitswesen führt direkt zum nächsten Themenfeld: Ohne zugewanderte Pflegekräfte und Ärztinnen stünden viele Kliniken still. In der nächsten Lektion geht es um **Migration & Integration** — Einwanderungsgesellschaft, Fachkräftezuwanderung, doppelte Staatsbürgerschaft — und darum, wie man über ein sensibles Thema differenziert und respektvoll spricht.',
    },
  ],
}
