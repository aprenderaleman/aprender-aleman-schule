// Lektion 21 · Hören: Podcast & Interview (Teile 1-2)

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau C1', 'Modul Hören · Teile 1-2 · Podcast & Interview'],
  h1: 'Hören: Podcast & Interview',
  lead: 'Gesprochenes Deutsch sagt selten beim ersten Anlauf, was es meint: Wer Füllwörter, Selbstkorrekturen und Reformulierungen lesen kann, weiß, wo im Gespräch die Punkte versteckt sind.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende erkennst du die Marker des gesprochenen Deutsch — Reformulierung, Selbstkorrektur, Füllwörter, Einschübe — und weißt, welche davon Information tragen.',
        'Du verstehst, wie eine abgewogene, vorsichtig formulierte Meinung klingt — und übersetzt sie in die klare Sprache der Antwortoptionen.',
        'Du unterscheidest die Suggestivfrage des Interviewers von der tatsächlichen Position der befragten Person.',
        'Du löst ein Interview im Prüfungsformat anhand eines Transkripts in Echtzeit.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Marker des gesprochenen Deutsch',
      items: [
        { wort: 'die Reformulierung', kollokation: 'eine Aussage durch Reformulierung präzisieren', es: 'reformulación' },
        { wort: 'die Selbstkorrektur', kollokation: 'eine Zahl per Selbstkorrektur berichtigen', es: 'autocorrección' },
        { wort: 'das Füllwort', kollokation: 'Füllwörter wie „äh“ und „halt“ überhören', es: 'muletilla' },
        { wort: 'der Einschub', kollokation: 'einen Einschub in den Satz einbauen', es: 'inciso' },
        { wort: 'abschweifen', kollokation: 'vom Thema abschweifen', es: 'irse por las ramas' },
        { wort: 'nachhaken', kollokation: 'der Moderator hakt nach', es: 'insistir, repreguntar' },
        { wort: 'andeuten', kollokation: 'Kritik nur andeuten', es: 'insinuar' },
        { wort: 'abschwächen', kollokation: 'eine Aussage nachträglich abschwächen', es: 'suavizar, atenuar' },
        { wort: 'sozusagen', kollokation: 'das ist sozusagen unser Markenzeichen', es: 'por así decirlo' },
        { wort: 'im Grunde', kollokation: 'im Grunde stimme ich zu', es: 'en el fondo' },
        { wort: 'allerdings', kollokation: 'allerdings gibt es eine Ausnahme', es: 'sin embargo, eso sí' },
        { wort: 'beziehungsweise', kollokation: 'zwei, beziehungsweise drei Standorte', es: 'o mejor dicho, respectivamente' },
        { wort: 'die Suggestivfrage', kollokation: 'auf eine Suggestivfrage nicht eingehen', es: 'pregunta capciosa/inductiva' },
        { wort: 'dahingestellt', kollokation: 'das sei einmal dahingestellt', es: 'está por ver, queda en el aire' },
      ],
      hinweis: 'Merke: **beziehungsweise** (oft *bzw.*) korrigiert oder präzisiert im laufenden Satz — nach ihm steht häufig die Angabe, die zählt. ~~En español no existe un equivalente exacto: es «o más exactamente», y en el examen suele introducir el dato correcto.~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Warum gesprochene Sprache anders funktioniert',
      absaetze: [
        'Ein Zeitungstext ist redigiert — ein Gespräch nicht. Menschen setzen an, brechen ab, korrigieren sich, schieben Nebengedanken ein und finden ihre eigentliche Aussage oft erst **im zweiten Anlauf**: *„Das war schwierig — also, sagen wir so: Es war teurer als geplant.“* Für ungeübte Hörer ist das Chaos. Für dich ist es ein System aus Signalen, denn die Prüfung nutzt genau diese Eigenheiten: **Die Items zielen bevorzugt auf die Stelle nach der Korrektur, nach der Reformulierung, hinter dem *aber*.**',
        'Die Grundregel für Podcast und Interview lautet deshalb: **Der letzte Anlauf gilt.** Wenn eine Sprecherin eine Zahl, eine Einschätzung oder eine Formulierung nachbessert, ist die nachgebesserte Version die prüfungsrelevante — die erste Version lebt als Distraktor in den Antwortoptionen weiter.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Marker und ihre Funktion',
      kopf: ['Marker', 'Funktion', 'Für die Prüfung heißt das'],
      zeilen: [
        ['also · das heißt · sprich · anders gesagt', 'Reformulierung: derselbe Gedanke, klarer', 'die Antwort steht oft direkt nach dem Marker'],
        ['nein, warte · beziehungsweise · oder besser gesagt', 'Selbstkorrektur', 'die korrigierte Angabe gilt, die erste ist der Köder'],
        ['äh · halt · irgendwie · ja', 'Füllwörter ohne Inhalt', 'überhören — sie tragen keine Information'],
        ['übrigens · nebenbei bemerkt · um kurz abzuschweifen', 'Einschub / Exkurs', 'selten prüfungsrelevant; nicht den Faden verlieren'],
        ['im Grunde · eigentlich · an sich', 'Relativierung: Zustimmung mit Hintertür', 'auf das folgende *aber* warten'],
        ['schon · durchaus · gewissermaßen', 'abgeschwächte Zustimmung', 'als „ja, mit Einschränkung“ dekodieren'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Wie eine nuancierte Meinung klingt — und wie die Optionen sie übersetzen',
      absaetze: [
        'Auf C1 sagt kaum jemand *„Ich bin dagegen“*. Man hört: *„Ich will das gar nicht schlechtreden, aber ob das die Lösung ist, wage ich zu bezweifeln.“* Die Antwortoption dazu lautet nüchtern: *Der Sprecher ist skeptisch.* Deine Aufgabe ist eine **Übersetzungsleistung**: von der höflich verpackten Äußerung zur klaren Position — dieselbe Paraphrase-Kompetenz wie in Lesen Teil 4, nur in Echtzeit.',
        'Eine zweite Falle stellt der **Interviewer** selbst: Suggestivfragen wie *„Würden Sie sagen, das Modell ist gescheitert?“* formulieren eine These, die die befragte Person oft gerade **nicht** übernimmt: *„So weit würde ich nicht gehen …“*. Die Option *„Das Modell ist gescheitert“* steht dann bereit — sie zitiert aber die Frage, nicht die Antwort. ~~Interferencia típica: en español la discrepancia suele ser explícita («no estoy de acuerdo»); en alemán culto se disiente *bajando el tono*, no subiéndolo. Quien espera un «no» claro, no lo oirá.~~',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Hörstrategie für Teile 1 und 2',
      steps: [
        {
          titel: 'In der Einlesezeit: Meinungswörter markieren',
          text: 'Markiere in den Optionen die __Haltungsverben und Abtönungen__: *befürwortet, bezweifelt, räumt ein, hält für übertrieben*. Die Items fragen fast immer nach Positionen und Begründungen, selten nach bloßen Fakten.',
        },
        {
          titel: 'Beim Hören: auf zweite Anläufe lauern',
          text: 'Sobald du *also*, *das heißt*, *beziehungsweise* oder ein Zögern hörst: __Aufmerksamkeit hoch__ — jetzt kommt die präzisierte Fassung, und mit ihr meist die Antwort.',
        },
        {
          titel: 'Frage und Antwort trennen',
          text: 'Notiere gedanklich, __wem__ eine Aussage gehört: Was der Moderator formuliert, ist ein Angebot; Position wird es erst, wenn die befragte Person es __übernimmt__ — und sie übernimmt selten wörtlich.',
        },
        {
          titel: 'Nach dem Abschnitt: sofort entscheiden',
          text: 'Interviews liefern zwischen den Fragen kurze Atempausen — nutze sie, um das laufende Item __endgültig anzukreuzen__. Wer sammelt statt entscheidet, trägt am Ende drei halboffene Items mit sich.',
        },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Gesagtes und Gemeintes',
      kicker: 'Reformulierung',
      titel: 'Der zweite Anlauf trägt die Antwort',
      items: [
        { text: '*„Das Projekt lief … na ja, sagen wir so: ==Ohne die Ehrenamtlichen wäre es gestorben==.“* → Gemeint: Das Projekt hing vollständig vom Ehrenamt ab.', gl: '' },
        { text: '*„Wir sind gewachsen, also — das heißt konkret: ==Wir haben die Belegschaft verdreifacht==.“* → Die prüfbare Information steht nach *das heißt*.', gl: '' },
        { text: '*„Es geht nicht ums Sparen, sprich: ==Wir geben dasselbe Geld nur anders aus==.“* → *sprich* kündigt die zitierfähige Version an.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Selbstkorrektur',
      titel: 'Die letzte Version gilt',
      items: [
        { text: '*„Das betrifft etwa hundert — ==nein, ich muss mich korrigieren: knapp hundertfünfzig== Betriebe.“* → Richtige Antwort: ca. 150. Die 100 wartet als Distraktor in Option a.', gl: '' },
        { text: '*„Wir starten im Frühjahr, ==beziehungsweise realistischerweise im Sommer==.“* → Prüfungsrelevant: Sommer.', gl: '' },
        { text: '*„Ich würde sagen, es ist ein Erfolg — ==oder besser gesagt: ein Teilerfolg==.“* → Die Abschwächung ist die Antwort: kein voller Erfolg.', gl: '~~El examen adora este patrón: la primera versión aparece literal entre las opciones.~~' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Nuancierte Meinung',
      titel: 'Höflich verpackt, klar gemeint',
      items: [
        { text: '*„Ich will niemandem zu nahe treten, aber ==da wurde schlicht schlecht geplant==.“* → Option: *Der Sprecher übt Kritik an der Planung.*', gl: '' },
        { text: '*„Das ist sicher gut gemeint. ==Ob es auch gut gemacht ist, steht auf einem anderen Blatt==.“* → Option: *Er bezweifelt die Umsetzung.*', gl: '' },
        { text: '*„==Ganz von der Hand weisen lässt sich der Einwand nicht==.“* → Doppelte Verneinung = vorsichtige Zustimmung zum Einwand.', gl: '— la doble negación es concesión, no rechazo' },
        { text: '*„Da bin ich ==leidenschaftslos==, ehrlich gesagt.“* → Option: *Die Frage ist ihm nicht wichtig.* — Auch Gleichgültigkeit ist eine prüfbare Haltung.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Interviewer-Falle',
      titel: 'Die Frage ist nicht die Antwort',
      items: [
        { text: 'Moderator: *„Also ist Homeoffice ein Auslaufmodell?“* — Expertin: *„==So pauschal würde ich das nicht sagen==. Es verschiebt sich etwas.“* → Die Option „Homeoffice ist ein Auslaufmodell“ zitiert die Frage — falsch.', gl: '' },
        { text: 'Moderator: *„Das klingt nach einem Riesenerfolg!“* — Gast: *„==Zwischenbilanz, würde ich sagen==.“* → Der Gast dämpft; die richtige Option spricht von einem vorläufigen Ergebnis.', gl: '' },
        { text: 'Moderator hakt nach: *„Wirklich? In allen Filialen?“* — Gast: *„==In den großen, ja==.“* → Das Nachhaken produziert die Einschränkung — und die Einschränkung ist das Item.', gl: '' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welcher Marker liegt vor — Reformulierung, Selbstkorrektur, Füllwort, Einschub oder Relativierung? Und: Trägt die Stelle prüfungsrelevante Information?',
      aufgaben: [
        '„Das war, äh, halt eine schwierige Phase für uns alle.“',
        '„Wir haben zwanzig Standorte — beziehungsweise neunzehn, einer schließt gerade.“',
        '„Im Grunde finde ich die Idee ja richtig.“',
        '„Das Verfahren ist — übrigens haben das die Kollegen in Wien entwickelt — inzwischen Standard.“',
        '„Es war keine Krise, eher — wie soll ich sagen — eine Zäsur, ein Einschnitt eben.“',
      ],
      loesungen: [
        '**Füllwörter** (*äh, halt*) — keine Information; die Aussage ist schlicht „schwierige Phase“.',
        '**Selbstkorrektur** — prüfungsrelevant: ==19== Standorte; die 20 ist der geborene Distraktor.',
        '**Relativierung** (*im Grunde … ja*) — hochrelevant: Das *aber* ist noch nicht gefallen, kommt aber fast sicher. Warte, bevor du „stimmt zu“ ankreuzt.',
        '**Einschub** (*übrigens …*) — Nebeninformation; die Hauptaussage ist „inzwischen Standard“. Nicht den Faden verlieren.',
        '**Reformulierung** — relevant: Der Sprecher ersetzt *Krise* bewusst durch *Zäsur* — die Option „Er beschreibt die Zeit als Krise“ wäre falsch.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Übersetze die nuancierte Äußerung in die nüchterne Sprache einer Antwortoption: Welche Haltung liegt vor?',
      aufgaben: [
        '„Ich möchte die Studie nicht kleinreden — nur basiert sie auf ganzen dreißig Befragten.“',
        '„Ob uns das Gesetz weiterbringt? Schauen wir mal. Ich lasse mich gern überraschen.“',
        '„Dagegen kann man ja im Ernst nichts haben.“',
        '„Das würde ich so unterschreiben — mit einer Fußnote vielleicht.“',
      ],
      loesungen: [
        '**Er zweifelt die Aussagekraft der Studie an** — die Einleitung ist Höflichkeit, das Argument (winzige Stichprobe) ist die Kritik.',
        '**Sie ist skeptisch, ob das Gesetz etwas bewirkt** — *schauen wir mal* + ironisches *überraschen lassen* = höfliche Zweifel, keine Vorfreude.',
        '**Er stimmt zu** — die doppelte Verneinung (*nichts dagegen haben*) ist Zustimmung im Understatement.',
        '**Sie stimmt weitgehend zu, mit einem Vorbehalt** — *unterschreiben* = volle Zustimmung, die *Fußnote* meldet die Einschränkung an. ~~La opción correcta dirá «stimmt überwiegend zu» — no «stimmt vorbehaltlos zu».~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Die Gegenrichtung schärft das Ohr: Verwandle die plumpe Aussage in gesprochenes C1-Deutsch — mit mindestens einem Marker dieser Lektion (Reformulierung, Abschwächung, Einräumung, Selbstkorrektur).',
      aufgaben: [
        'Die App ist schlecht.',
        'Das Projekt hat zu viel gekostet.',
        'Ich stimme dir nicht zu.',
      ],
      loesungen: [
        '**Mögliche Lösung:** *„Also, die App hat sicher ihre Stärken — nur die Bedienung, ehrlich gesagt, die ist noch nicht ausgereift, oder sagen wir: verbesserungswürdig.“* — Einräumung + Reformulierung.',
        '**Mögliche Lösung:** *„Wir sind, na ja, nicht ganz im Budget geblieben — beziehungsweise, um ehrlich zu sein, deutlich darüber.“* — Understatement + Selbstkorrektur nach *beziehungsweise*.',
        '**Mögliche Lösung:** *„Da bin ich, offen gestanden, nicht ganz bei dir — im Grunde sehe ich es fast umgekehrt.“* — abgeschwächter Widerspruch statt frontalem *nein*.\nGültig ist jede Variante, die die Kernaussage bewahrt und sie hörbar abfedert — genau diese Verpackungen musst du in der Prüfung rückwärts auspacken.',
      ],
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören · Teil 2 · Interview (Transkript)',
      titel: 'Aufgabe im Prüfungsformat · Interview, vier Items',
      anweisung: 'Simulation mit Transkript: 60 Sekunden Einlesezeit für die vier Aufgaben, Lösungen abdecken, dann das Transkript einmal in Echtzeit lesen und währenddessen ankreuzen. Im echten Teil 2 hörst du das Interview nur einmal.',
      absaetze: [
        '**Transkript** ~~(en el examen: audio, una sola escucha)~~ — **Moderatorin:** „Frau Dr. Lindner, Sie beraten Unternehmen bei hybrider Arbeit. Kritiker sagen, im Homeoffice leide vor allem der Teamgeist. Ist das Büro also die Seele der Firma?“ — **Dr. Lindner:** „So romantisch würde ich es nicht formulieren. Was tatsächlich leidet, ist der informelle Austausch — also die zufälligen Gespräche an der Kaffeemaschine, aus denen erstaunlich viele Ideen entstehen. Die geplante Zusammenarbeit dagegen, Meetings, Abstimmungen, funktioniert remote nachweislich gut, teils sogar besser, weil pünktlicher und fokussierter.“ — **Moderatorin:** „Firmen holen ihre Leute jetzt trotzdem zurück ins Büro. Zu Recht?“ — **Dr. Lindner:** „Mit Anwesenheitspflichten allein erreicht man, äh — na ja, vor allem eines: volle Züge und leere Gesichter. Ich überspitze natürlich. Aber der Punkt ist: Präsenz muss einen erkennbaren Mehrwert haben. Wer Leute ins Büro holt, damit sie dort acht Stunden in Videokonferenzen sitzen, hat das Problem nicht verstanden. Sinnvoll sind gemeinsame Präsenztage mit echtem Programm — Workshops, Projektstarts, auch mal Feiern.“ — **Moderatorin:** „Und die Sorge der Beschäftigten, im Homeoffice bei Beförderungen übersehen zu werden?“ — **Dr. Lindner:** „Die ist leider nicht unbegründet — Studien zeigen da einen messbaren Effekt. Nur wäre die Konsequenz nicht, alle zurückzubeordern, sondern Beförderungskriterien transparent zu machen. Das Problem liegt in den Köpfen der Führungskräfte, nicht im Arbeitsort.“',
      ],
      optionen: [
        '1 · Was leidet laut Dr. Lindner im Homeoffice? — a) die geplante Zusammenarbeit in Meetings — b) der informelle, zufällige Austausch — c) die Pünktlichkeit der Beschäftigten',
        '2 · Wie steht sie zur These, das Büro sei die Seele der Firma? — a) Sie übernimmt die Formulierung ausdrücklich. — b) Sie weist die Formulierung als zu romantisch zurück. — c) Sie hält das Büro für überflüssig.',
        '3 · Was hält sie von Anwesenheitspflichten? — a) Präsenz braucht einen erkennbaren Mehrwert, sonst ist sie sinnlos. — b) Sie lehnt jede Form von Präsenz ab. — c) Anwesenheitspflichten steigern nachweislich die Kreativität.',
        '4 · Was sagt sie zur Sorge, im Homeoffice übersehen zu werden? — a) Die Sorge ist durch Studien widerlegt. — b) Die Sorge ist berechtigt; die Lösung sind transparente Kriterien. — c) Beschäftigte sollten deshalb ins Büro zurückkehren.',
      ],
      loesungen: [
        '1 **b** — nach der Reformulierung: *„Was tatsächlich leidet, ist der informelle Austausch — also die zufälligen Gespräche …“*. Option a kehrt die Aussage um (Meetings funktionieren *gut, teils sogar besser*); c pickt das Wort *pünktlicher* aus dem falschen Zusammenhang.',
        '2 **b** — *„So romantisch würde ich es nicht formulieren“*: Sie übernimmt die Suggestivformel der Moderatorin nicht. Option c überdehnt — dass etwas leidet, heißt nicht, das Büro sei überflüssig.',
        '3 **a** — die Kernaussage nach dem Ausbessern der eigenen Zuspitzung: *„Präsenz muss einen erkennbaren Mehrwert haben.“* Option b scheitert an ihren Vorschlägen für Präsenztage; c erfindet einen Beleg.',
        '4 **b** — *„nicht unbegründet“* (doppelte Verneinung = berechtigt) + *„Beförderungskriterien transparent … machen“*. Option a verdreht die Studienlage, c zieht die Konsequenz, die sie ausdrücklich verwirft (*„nicht, alle zurückzubeordern“*).',
      ],
      kommentar: 'Sieh dir an, wo die vier Antworten standen: nach dem *also* der Reformulierung (1), in der Zurückweisung der Suggestivfrage (2), nach der Selbstkorrektur der eigenen Überspitzung (3) und in einer doppelten Verneinung (4). Kein einziges Item war eine simple Faktenfrage — genau das ist Teil 2.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Trainiere mit echten Interview-Podcasts eine einzige Fähigkeit gezielt: **Stopp die Aufnahme nach jeder Antwort und sage in einem Satz, was die Person meint** — nüchtern, ohne ihre Verpackung. Wer diese Übersetzung dreißigmal gemacht hat, hört in der Prüfung durch jedes *na ja, sagen wir so* hindurch.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Der letzte Anlauf gilt', 'nach also/das heißt/beziehungsweise steht die zählende Version'],
        ['Füllwörter überhören, Marker nutzen', 'äh/halt = nichts · sprich/genauer gesagt = Antwort im Anmarsch'],
        ['Meinungen sind verpackt', 'doppelte Verneinung, Understatement, Einräumung — rückwärts auspacken'],
        ['Frage ≠ Antwort', 'Suggestivfragen des Moderators werden selten übernommen'],
        ['Erst entscheiden, dann weiterhören', 'Atempausen zwischen den Fragen zum Ankreuzen nutzen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich erkenne Reformulierungen und Selbstkorrekturen und weiß, dass die letzte Version zählt.',
        'Ich übersetze nuancierte Äußerungen in klare Positionen — auch doppelte Verneinungen und Understatement.',
        'Ich trenne die These des Interviewers von der Position der befragten Person.',
        'Ich habe ein Interview-Transkript in Echtzeit gelöst, ohne zurückzuspringen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Podcast und Interview sind Dialoge auf Augenhöhe — jetzt kommen die **formellen Formate**: der Vortrag mit seiner angekündigten Gliederung und die Diskussion, in der du drei Positionen gleichzeitig verfolgen musst. Die nächste Lektion gibt dir die Landkarte für beide — Signalwörter der Struktur und eine Technik, um Sprecher und Standpunkte nicht zu verwechseln.',
    },
  ],
}
