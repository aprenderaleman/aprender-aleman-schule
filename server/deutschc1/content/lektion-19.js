// Lektion 19 · Lesen: Zuordnung Aussagen–Autoren (Teil 4)

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau C1', 'Modul Lesen · Teil 4 · Zuordnung'],
  h1: 'Lesen: Zuordnung Aussagen–Autoren',
  lead: 'Vier Meinungen, eine Streitfrage — und Aussagen, die nie mit den Worten der Texte formuliert sind: Teil 4 ist die Prüfung der Paraphrase.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kennst du das Format von Teil 4: mehrere kurze Meinungstexte, denen du Aussagen sinngemäß zuordnest.',
        'Du durchschaust das Paraphrase-Prinzip: Die Aussage wiederholt nie die Wörter des Textes — Wortgleichheit ist ein Warnsignal.',
        'Du liest die Sprache der Meinung präzise: befürworten, bezweifeln, einräumen, plädieren, relativieren.',
        'Du arbeitest mit der Unterstreichungsmethode: pro Autor eine Kernposition, pro Zuordnung eine Belegstelle.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Die Sprache der Meinung',
      items: [
        { wort: 'befürworten', kollokation: 'einen Vorschlag befürworten', es: 'estar a favor de, apoyar' },
        { wort: 'ablehnen', kollokation: 'eine Forderung entschieden ablehnen', es: 'rechazar' },
        { wort: 'bezweifeln', kollokation: 'den Nutzen einer Maßnahme bezweifeln', es: 'poner en duda' },
        { wort: 'einräumen', kollokation: 'einräumen, dass es Probleme gibt', es: 'admitir, conceder' },
        { wort: 'plädieren für', kollokation: 'für eine Übergangslösung plädieren', es: 'abogar por' },
        { wort: 'sich aussprechen für/gegen', kollokation: 'sich gegen ein Verbot aussprechen', es: 'pronunciarse a favor/en contra' },
        { wort: 'relativieren', kollokation: 'eine Aussage relativieren', es: 'matizar, relativizar' },
        { wort: 'entgegnen', kollokation: 'den Kritikern entgegnen', es: 'replicar' },
        { wort: 'der Standpunkt', kollokation: 'einen Standpunkt vertreten', es: 'punto de vista' },
        { wort: 'die Haltung', kollokation: 'eine skeptische Haltung einnehmen', es: 'postura, actitud' },
        { wort: 'die Einschätzung', kollokation: 'diese Einschätzung teilen', es: 'valoración, apreciación' },
        { wort: 'der Einwand', kollokation: 'einen Einwand vorbringen', es: 'objeción' },
        { wort: 'abwägen', kollokation: 'Vor- und Nachteile gegeneinander abwägen', es: 'sopesar' },
        { wort: 'überzogen', kollokation: 'eine Forderung für überzogen halten', es: 'exagerado, desmedido' },
      ],
      hinweis: 'Achte auf die feinen Abstufungen: **einräumen** ist kein Zustimmen, sondern ein Zugeständnis vor dem *aber*; **relativieren** schwächt ab, ohne zu widersprechen. ~~*Bezweifeln* no es «dudar» a secas: es cuestionar activamente una afirmación concreta.~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das Format — und was es wirklich prüft',
      absaetze: [
        'In Teil 4 liest du **mehrere kurze Meinungstexte** — Kommentare, Leserbriefe, Statements von Fachleuten — zu **einer** Streitfrage. Dazu bekommst du eine Liste von Aussagen; für jede entscheidest du, **welcher Autor sie sinngemäß vertritt**. Ein Autor kann mehrfach vorkommen, ein anderer vielleicht gar nicht — verlass dich nie auf eine „gerechte Verteilung“.',
        'Geprüft wird **selektives Lesen auf der Ebene der Positionen**: Du musst nicht jedes Detail verstehen, sondern für jeden Autor beantworten können: *Wofür ist er, wogegen, mit welchem Hauptargument, mit welchem Zugeständnis?* Die Aussagen fragen genau diese vier Dinge ab — nur eben in anderen Worten.',
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Das Paraphrase-Prinzip',
      absaetze: [
        'Die eiserne Regel des Teils: **Die Aussage wiederholt nie die Formulierung des Textes.** Sie arbeitet mit Synonymen (*teuer → kostspielig*), mit Umformungen zwischen Verbal- und Nominalstil (*weil die Mieten steigen → angesichts steigender Mieten* — Lektion 3 zahlt sich hier aus), mit Perspektivwechseln (*Der Staat sollte eingreifen → Man dürfe das nicht dem Markt überlassen*) und mit Verdichtungen ganzer Absätze in einen Satz.',
        'Daraus folgt die Umkehrung: **Wortgleichheit ist ein Warnsignal.** Wenn eine Aussage dasselbe seltene Wort benutzt wie Text B, ist das oft der Köder — und die Aussage gehört zu Text C, der denselben Gedanken anders formuliert. Ordne über **Positionen**, nie über Vokabeln. ~~Es la trampa más rentable del examen: la palabra repetida te señala al autor equivocado.~~',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die Unterstreichungsmethode in fünf Schritten',
      steps: [
        {
          titel: 'Zuerst die Aussagen lesen',
          text: 'Lies alle Aussagen __vor den Texten__ und markiere pro Aussage den Kern: Geht es um Kosten? Um Wirksamkeit? Um Gerechtigkeit? So liest du die Texte gleich mit einem Suchraster.',
        },
        {
          titel: 'Pro Autor eine Positionszeile notieren',
          text: 'Lies jeden Text einmal und notiere daneben in Stichworten: __dafür/dagegen/teils-teils + Hauptargument__. Beispiel: „B: dagegen — kostet zu viel, trifft Falsche“. Diese Zeile ist dein Arbeitsgedächtnis.',
        },
        {
          titel: 'Meinungssignale unterstreichen',
          text: 'Markiere beim Lesen die __Verben und Wendungen der Meinung__: *halte ich für, überzeugt mich nicht, zu Recht, allerdings, zwar … aber*. Die Position steht fast immer hinter dem *aber*.',
        },
        {
          titel: 'Zuordnen über die Positionszeilen',
          text: 'Vergleiche jede Aussage __zuerst mit deinen Notizen__, nicht mit den Texten. Erst wenn zwei Autoren infrage kommen, gehst du in die Texte zurück und suchst die genaue Belegstelle.',
        },
        {
          titel: 'Belegstelle verlangen — von dir selbst',
          text: 'Keine Zuordnung ohne Textstelle, die du __unterstreichen könntest__. „Klingt nach A“ ist keine Begründung; „A schreibt: *…*, das ist sinngemäß die Aussage“ ist eine.',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Meinungssprache decodieren',
      kopf: ['Signal im Text', 'Was es bedeutet'],
      zeilen: [
        ['*halte ich für sinnvoll · zu Recht · überfällig*', 'Zustimmung — der Autor befürwortet'],
        ['*überzeugt mich nicht · daran habe ich Zweifel*', 'Skepsis — der Autor bezweifelt Nutzen oder Machbarkeit'],
        ['*zwar …, aber … · gewiss …, doch …*', 'Einräumung: Das Zugeständnis steht vorn, die eigentliche Position hinter dem *aber*'],
        ['*man sollte … · es wäre an der Zeit, …*', 'Forderung — der Autor plädiert für etwas Konkretes'],
        ['*so einfach ist es nicht · das greift zu kurz*', 'Relativierung — der Autor widerspricht einer verbreiteten Sicht'],
        ['*Oft heißt es, … / Befürworter argumentieren, …*', 'Referierte Fremdmeinung — noch nicht die Position des Autors; warte auf seine Antwort'],
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Paraphrasen erkennen',
      kicker: 'Zustimmung',
      titel: 'Ein Gedanke, zwei Gewänder',
      items: [
        { text: 'Text: *„Es war überfällig, dass die Politik hier endlich handelt.“* → Aussage: *Der Autor **begrüßt das Eingreifen** des Gesetzgebers.*', gl: '' },
        { text: 'Text: *„Wer hier von Bevormundung spricht, verkennt den Ernst der Lage.“* → Aussage: *Der Autor **weist den Vorwurf der Bevormundung zurück**.*', gl: '— la doble negación retórica es afirmación' },
        { text: 'Text: *„Kein anderes Instrument wirkt so schnell und so sozial ausgewogen.“* → Aussage: *Der Autor hält die Maßnahme **für wirksam und gerecht**.*', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Skepsis',
      titel: 'Zweifel in höflicher Verpackung',
      items: [
        { text: 'Text: *„Ob das die erhofften Effekte bringt, wage ich zu bezweifeln.“* → Aussage: *Der Autor **stellt die Wirksamkeit infrage**.*', gl: '' },
        { text: 'Text: *„Die Rechnung wird ohne die Betriebe gemacht, die das umsetzen müssen.“* → Aussage: *Der Autor hält die Pläne **für praxisfern**.*', gl: '' },
        { text: 'Text: *„Gut gemeint ist eben noch lange nicht gut gemacht.“* → Aussage: *Der Autor kritisiert **die Umsetzung, nicht das Ziel**.*', gl: '~~El refrán distingue intención y ejecución — la Aussage recoge exactamente esa distinción.~~' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Einräumung',
      titel: 'Das Zugeständnis vor dem Aber',
      items: [
        { text: 'Text: *„Zwar sind die Kosten beträchtlich, doch gemessen an den Folgeschäden sind sie ein Schnäppchen.“* → Aussage: *Der Autor **räumt hohe Kosten ein**, hält sie aber für gerechtfertigt.*', gl: '' },
        { text: 'Text: *„Gewiss, nicht jeder Einwand ist aus der Luft gegriffen. Am Kern der Sache ändert das nichts.“* → Aussage: *Der Autor **nimmt die Kritik ernst, bleibt aber bei seiner Position**.*', gl: '' },
        { text: 'Falle: Wer nur den ersten Halbsatz liest (*„Zwar sind die Kosten beträchtlich …“*), ordnet den Autor den ==Gegnern== zu — die Position steht **hinter** dem *doch*.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Distraktor',
      titel: 'Gleiches Wort, andere Meinung',
      items: [
        { text: 'Text A: *„Das Tempolimit ist reine **Symbolpolitik**.“* — Text B: *„Auch **Symbolpolitik** kann Verhalten verändern.“* → Die Aussage *Symbolische Maßnahmen seien nicht wirkungslos* gehört zu **B** — obwohl das Schlagwort aus A stammt.', gl: '' },
        { text: 'Text: *„Oft heißt es, Verbote brächten nichts. Die Datenlage zeigt das Gegenteil.“* → Die Aussage *Verbote seien wirkungslos* gehört **nicht** zu diesem Autor: Er referiert die Fremdmeinung, um sie zu widerlegen.', gl: '' },
        { text: 'Aussage mit Extremwort: *Der Autor lehnt **jede** staatliche Regulierung ab.* → Prüfe streng: Wer nur eine **bestimmte** Regel kritisiert, vertritt diese Aussage nicht.', gl: '~~*Jede, alle, nie* en la Aussage exigen un texto igual de rotundo.~~' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welche Haltung steckt in der Formulierung — Zustimmung, Ablehnung, Einräumung, Skepsis oder referierte Fremdmeinung? Nenne das Signalwort.',
      aufgaben: [
        'Dass hier Handlungsbedarf besteht, will ich gar nicht bestreiten — nur setzt der Entwurf am falschen Ende an.',
        'Befürworter verweisen gern auf skandinavische Vorbilder.',
        'Endlich traut sich jemand, das Problem beim Namen zu nennen.',
        'Mir erschließt sich nicht, wie das finanziert werden soll.',
        'Das klingt gut — auf dem Papier.',
      ],
      loesungen: [
        '**Einräumung** — *will ich gar nicht bestreiten* gesteht den Handlungsbedarf zu; die Position folgt nach dem Gedankenstrich: Ablehnung des Entwurfs.',
        '**Referierte Fremdmeinung** — *Befürworter verweisen* gibt die Meinung anderer wieder; die Haltung des Autors ist noch offen (das *gern* deutet Distanz an).',
        '**Zustimmung** — *endlich* und *traut sich* signalisieren Erleichterung und Beifall.',
        '**Skepsis** — *mir erschließt sich nicht* bezweifelt die Finanzierbarkeit, ohne das Ziel anzugreifen.',
        '**Skepsis/Ablehnung** — der Nachsatz *auf dem Papier* entwertet das Lob: rhetorische Wendung, die Theorie und Praxis gegeneinander ausspielt.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Ordne jeder Textstelle die passende Paraphrase zu: A · *Der Autor fordert staatliche Unterstützung.* — B · *Der Autor hält die Debatte für übertrieben.* — C · *Der Autor sieht vor allem die Unternehmen in der Pflicht.* — D · *Der Autor warnt vor sozialer Ungleichheit.*',
      aufgaben: [
        '„Wer profitiert, soll auch zahlen: Es kann nicht sein, dass die Allgemeinheit die Weiterbildung finanziert, deren Früchte allein die Firmen ernten.“',
        '„Ohne Zuschüsse werden sich nur Gutverdiener die neuen Angebote leisten können — der Rest schaut zu.“',
        '„So viel Aufregung um eine Entwicklung, die uns seit zwanzig Jahren begleitet — Gelassenheit stünde allen gut zu Gesicht.“',
        '„Hier ist der Gesetzgeber gefragt: Ohne öffentliche Förderprogramme bleibt jede Reform Stückwerk.“',
      ],
      loesungen: [
        '**C** — *Wer profitiert, soll auch zahlen* + *die Firmen ernten* = die Unternehmen sollen finanzieren. ~~Ni «Staat» ni «Pflicht» aparecen en el texto — la posición sí.~~',
        '**D** — *nur Gutverdiener … der Rest schaut zu* = Warnung vor einer sozialen Schere.',
        '**B** — *So viel Aufregung* + *Gelassenheit* = die Debatte ist dem Autor zu aufgeregt.',
        '**A** — *der Gesetzgeber ist gefragt* + *öffentliche Förderprogramme* = Forderung nach staatlicher Unterstützung.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Jetzt baust du die Paraphrasen selbst — das schärft den Blick für die Prüfung doppelt. Formuliere jede Aussage neu, **ohne ein inhaltstragendes Wort des Originals zu wiederholen**.',
      aufgaben: [
        'Die Maßnahme ist zu teuer.',
        'Der Autor findet das Verbot richtig.',
        'Homeoffice hat Vorteile, aber auch Nachteile.',
        'Die Politik reagiert zu langsam.',
      ],
      loesungen: [
        '**Mögliche Lösung:** *Die Kosten des Vorhabens stehen in keinem Verhältnis zum Nutzen* oder *Der finanzielle Aufwand erscheint dem Autor unverhältnismäßig.*',
        '**Mögliche Lösung:** *Der Verfasser befürwortet die Untersagung* oder *Er hält es für geboten, die Praxis zu untersagen.*',
        '**Mögliche Lösung:** *Der Autor wägt die Chancen und Risiken des ortsunabhängigen Arbeitens gegeneinander ab.* ~~Fíjate: *abwägen* condensa el «pero» en un solo verbo.~~',
        '**Mögliche Lösung:** *Der Autor wirft den Entscheidungsträgern Zögerlichkeit vor* oder *Aus seiner Sicht kommt die staatliche Antwort zu spät.*\nGültig ist jede Variante, die Position und Gegenstand bewahrt und den Wortlaut vollständig ersetzt — genau das leisten die Aussagen in Teil 4.',
      ],
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 4 · Zuordnung',
      titel: 'Aufgabe im Prüfungsformat · 4 Texte, 7 Aussagen · 15 Minuten',
      anweisung: 'Vier Personen äußern sich in einem Debattenforum zur Frage: „Braucht Deutschland ein verpflichtendes Gesellschaftsjahr für junge Menschen?“ Ordnen Sie jede Aussage 1-7 der Person zu, die sie sinngemäß vertritt (A-D). Personen können mehrfach vorkommen.',
      absaetze: [
        '**Text A — Renate M.:** Ich habe selbst ein freiwilliges soziales Jahr gemacht und zehre bis heute davon. Trotzdem sträubt sich bei mir alles gegen eine Pflicht: Was erzwungen wird, verliert seinen Wert. Wer junge Leute für das Gemeinwesen gewinnen will, sollte die Freiwilligendienste so attraktiv machen — ordentlich bezahlt, anerkannt, mit Vorteilen bei der Studienplatzvergabe —, dass sich die Frage nach dem Zwang erübrigt.',
        '**Text B — Karim Ö.:** Die Debatte hat einen blinden Fleck: Über die jungen Menschen wird geredet, mit ihnen kaum. Ein ganzes Jahr ist ein massiver Eingriff in Lebensläufe, die ohnehin unter Druck stehen — verkürzte Schulzeit, teure Wohnungen, unsichere Aussichten. Bevor der Staat eine solche Pflicht beschließt, müsste er erklären, warum ausgerechnet die Jüngsten die Lücken stopfen sollen, die eine verfehlte Personalpolitik in Pflege und Katastrophenschutz gerissen hat.',
        '**Text C — Ingrid S.:** Natürlich ist eine Pflicht ein Eingriff — aber einer, der sich auszahlt. In einer Gesellschaft, die in Milieus zerfällt, wäre das Gesellschaftsjahr der einzige Ort, an dem sich die Abiturientin aus dem Villenviertel und der Hauptschüler aus dem Hochhaus tatsächlich begegnen. Diesen Kitt kann keine Kampagne und kein Freiwilligenprogramm ersetzen, denn freiwillig kommen eben immer nur dieselben.',
        '**Text D — Thomas B.:** Mich überzeugen beide Lager nur halb. Ja, verpflichtende Dienste haben eine integrierende Kraft — aber ein volles Jahr ist unverhältnismäßig und rechtlich heikel. Warum nicht klein anfangen: drei Monate, flexibel zwischen Schule, Ausbildung und Studium, mit echter Wahl zwischen sozialen, ökologischen und technischen Einsatzfeldern? Dann ließe sich prüfen, ob die erhofften Effekte überhaupt eintreten, bevor man Millionen junger Menschen verplant.',
      ],
      optionen: [
        '1 · Verpflichtung zerstört gerade das Engagement, das sie erzeugen soll.',
        '2 · Der Staat schiebt jungen Menschen Probleme zu, die er selbst verursacht hat.',
        '3 · Nur eine Pflicht bringt Menschen aus unterschiedlichen sozialen Welten zusammen.',
        '4 · Statt eines Zwangs sollten bestehende Angebote deutlich aufgewertet werden.',
        '5 · Ein kürzeres, flexibles Modell sollte zunächst erprobt werden.',
        '6 · Die Betroffenen selbst kommen in der Diskussion zu wenig zu Wort.',
        '7 · Freiwillige Programme erreichen immer nur einen begrenzten, ähnlichen Personenkreis.',
      ],
      loesungen: [
        '**1 → A** — Belegstelle: *„Was erzwungen wird, verliert seinen Wert.“* Die Aussage paraphrasiert den Gedanken, ohne *erzwingen* oder *Wert* zu benutzen.',
        '**2 → B** — Belegstelle: *„die Lücken stopfen …, die eine verfehlte Personalpolitik … gerissen hat“*. Der Vorwurf der Verantwortungsverschiebung gehört B — nicht A, obwohl auch A gegen die Pflicht ist: gleiche Richtung, anderes Argument.',
        '**3 → C** — Belegstelle: *„der einzige Ort, an dem sich … tatsächlich begegnen“*. Das Extremwort *nur* in der Aussage ist hier gedeckt: C sagt selbst *der einzige Ort* und *kein Freiwilligenprogramm kann das ersetzen*.',
        '**4 → A** — Belegstelle: *„die Freiwilligendienste so attraktiv machen — ordentlich bezahlt, anerkannt …“*. *Aufwerten* fasst die Aufzählung zusammen.',
        '**5 → D** — Belegstelle: *„drei Monate, flexibel … Dann ließe sich prüfen, ob die erhofften Effekte überhaupt eintreten.“* *Erproben* paraphrasiert *prüfen, ob … eintreten*.',
        '**6 → B** — Belegstelle: *„Über die jungen Menschen wird geredet, mit ihnen kaum.“*',
        '**7 → C** — Belegstelle: *„freiwillig kommen eben immer nur dieselben“*. Achtung, Köderwort: Auch A spricht über Freiwilligendienste — aber A will sie stärken, während nur C ihre begrenzte Reichweite behauptet.',
      ],
      kommentar: 'Sieh dir die Verteilung an: A und B und C je zweimal, D einmal — keine „gerechte“ Aufteilung. Und beachte die Doppelgänger-Falle bei 2 und 7: Jeweils zwei Autoren teilen das Lager, aber nur einer trägt genau dieses Argument. Deine Positionszeilen (*A: contra, Freiwilligkeit stärken · B: contra, Staatskritik + Jugend übergangen · C: pro, sozialer Kitt · D: teils-teils, Pilotmodell*) entscheiden solche Fälle in Sekunden.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Investiere die ersten drei Minuten von Teil 4 in die **Positionszeilen** — ein Stichwort-Steckbrief pro Autor. Danach ordnest du fast alle Aussagen aus dem Gedächtnis zu und gehst nur bei Zweifelsfällen in den Text zurück. Und wenn zwei Autoren im selben Lager stehen: Die Aussage gehört dem, der **das Argument** trägt, nicht dem, der nur **die Richtung** teilt.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Die Aussage zitiert nie', 'Synonyme, Nominalisierung, Perspektivwechsel, Verdichtung'],
        ['Wortgleichheit ist ein Warnsignal', 'das wiederholte Schlagwort zeigt oft auf den falschen Autor'],
        ['Position hinter dem Aber', 'zwar/gewiss/natürlich = Zugeständnis, danach kommt die Meinung'],
        ['Referiert ist nicht vertreten', '„Oft heißt es …“ — warte auf die Antwort des Autors'],
        ['Positionszeile pro Autor', 'dafür/dagegen/teils-teils + Hauptargument, dann erst zuordnen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich lese die Aussagen vor den Texten und markiere ihren Kern.',
        'Ich notiere zu jedem Autor eine Positionszeile und ordne zuerst über sie zu.',
        'Ich erkenne Einräumungen und referierte Fremdmeinungen und lasse mich von ihnen nicht täuschen.',
        'Ich kann zu jeder Zuordnung eine konkrete Belegstelle unterstreichen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist das Modul Lesen komplett — und alles, was du hier über Positionen, Paraphrasen und Meinungssignale gelernt hast, nimmst du direkt mit ins nächste Modul: Beim **Hören** begegnen dir dieselben Aussagen-Formate, nur läuft der Text jetzt in Echtzeit und meistens nur ein einziges Mal. Die nächste Lektion verschafft dir den Überblick über die vier Hörteile — und eine Methode, mit Transkripten zu trainieren.',
    },
  ],
}
