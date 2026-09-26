// Lektion 25 · Schreiben Teil 2 — Die formelle Nachricht
//
// Ausbau der Kurzversion auf den Standard der 8 Secciones. Erhalten:
// Struktur-Steps, Redemittel-Gruppen und das kommentierte Musterbeispiel
// „Beschwerde über einen Sprachkurs". Neu: Kernwortschatz des formellen
// Registers, die vier Nachrichtentypen, Konjunktiv II der Höflichkeit,
// Modelltext (Entschuldigung), Mehr Beispiele und Prüfungsbezug mit kompletter Aufgabe + Mögliche Lösung.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau C1', 'Prüfungsrelevanz: Schreiben Teil 2 (~120 Wörter · 30 Min)'],
  h1: 'Schreiben Teil 2 — Die formelle Nachricht',
  lead: 'Eine offizielle Nachricht adressatengerecht und im richtigen Register verfassen — kürzer als Teil 1, aber jede Zeile zählt doppelt.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du eine formelle Nachricht von ~120 Wörtern klar strukturieren: Anrede, Anlass, Anliegen, Schluss, Grußformel.',
        'Du unterscheidest die vier Nachrichtentypen (Beschwerde, Anfrage, Bitte, Entschuldigung) und wählst Ton und Redemittel passend.',
        'Du setzt den Konjunktiv II gezielt als Höflichkeitsform ein (*ich wäre Ihnen dankbar, könnten Sie…*).',
        'Du hältst das formelle Sie-Register lückenlos durch und deckst alle Leitpunkte der Aufgabe ab.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — das formelle Register',
      items: [
        { wort: 'das Anliegen', kollokation: 'mein Anliegen vortragen', es: 'petición, asunto que a uno le ocupa' },
        { wort: 'sich wenden an', kollokation: 'ich wende mich an Sie, weil…', es: 'dirigirse a' },
        { wort: 'der Sachverhalt', kollokation: 'den Sachverhalt schildern', es: 'los hechos, la situación' },
        { wort: 'beanstanden', kollokation: 'die Rechnung beanstanden', es: 'reclamar, objetar' },
        { wort: 'die Frist', kollokation: 'eine Frist setzen/einhalten', es: 'plazo' },
        { wort: 'die Rückerstattung', kollokation: 'eine Rückerstattung beantragen', es: 'reembolso' },
        { wort: 'die Unannehmlichkeiten', kollokation: 'die entstandenen Unannehmlichkeiten bedauern', es: 'molestias, inconvenientes' },
        { wort: 'die Rückmeldung', kollokation: 'um eine baldige Rückmeldung bitten', es: 'respuesta, feedback' },
        { wort: 'zuständig', kollokation: 'die zuständige Stelle', es: 'competente, responsable (de un asunto)' },
        { wort: 'das Entgegenkommen', kollokation: 'für Ihr Entgegenkommen danken', es: 'deferencia, buena disposición' },
        { wort: 'verbindlich', kollokation: 'eine verbindliche Zusage', es: 'vinculante, en firme' },
        { wort: 'bedauerlicherweise', kollokation: 'bedauerlicherweise muss ich Ihnen mitteilen…', es: 'lamentablemente' },
        { wort: 'umgehend', kollokation: 'um umgehende Bearbeitung bitten', es: 'de inmediato (registro formal)' },
        { wort: 'die Kulanz', kollokation: 'aus Kulanz erstatten', es: 'buena voluntad comercial (sin obligación legal)' },
      ],
      hinweis: 'Zwei falsche Freunde des formellen Registers: **die Notiz** ist eine Randbemerkung, keine ~~«noticia»~~ (das wäre *die Nachricht*), und ~~«asistir a una reunión»~~ heißt **an einer Besprechung teilnehmen** — *assistieren* bedeutet, jemandem als Helfer zur Hand zu gehen.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das Aufgabenformat',
      absaetze: [
        'Die Aufgabe beschreibt eine halboffizielle Situation — ein Kurs fällt aus, eine Wohnung hat Mängel, ein Termin platzt — und nennt **Leitpunkte**, die deine Nachricht von etwa **120 Wörtern** behandeln muss. Der Adressat ist eine Institution oder eine Person in offizieller Funktion: Kursleitung, Vermieterin, Vorgesetzter, Kundenservice.',
        'Bei nur 120 Wörtern gibt es keinen Platz für Umwege: **Jeder Satz muss einen Leitpunkt bedienen oder den Ton setzen.** Die vier Kriterien gelten unverändert, aber die Gewichte verschieben sich spürbar: „Erfüllung der Aufgabe“ hängt hier fast vollständig am **Register** — eine inhaltlich perfekte Nachricht im Du-Ton ist eine verfehlte Aufgabe. Plane **30 Minuten**: zwei fürs Sortieren der Leitpunkte, zwanzig fürs Schreiben, den Rest fürs Prüfen von Anrede, Groß- und Kleinschreibung und Grußformel.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die Struktur',
      steps: [
        { titel: 'Anrede', text: '__Sehr geehrte Damen und Herren,__ / __Sehr geehrte Frau Dr. Weber,__ — mit Komma, danach **klein** weiterschreiben. ~~En español pondrías dos puntos y mayúscula; en alemán, coma y minúscula.~~' },
        { titel: 'Einleitung — der Anlass', text: '*„Ich wende mich an Sie, weil…“ / „Bezugnehmend auf Ihre E-Mail vom…“* Ein Satz genügt: Wer bist du in dieser Situation und warum schreibst du?' },
        { titel: 'Hauptteil — das Anliegen', text: '__Sachverhalt + alle Leitpunkte__, höflich und präzise. Gliedere mit *zum einen … zum anderen* oder *darüber hinaus*, wenn es mehrere Punkte gibt.' },
        { titel: 'Schluss + Gruß', text: 'Bitte oder Erwartung formulieren (*„Für eine baldige Rückmeldung wäre ich Ihnen dankbar.“*), dann __„Mit freundlichen Grüßen“__ — **ohne Komma** danach — und der Name.' },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die vier Nachrichtentypen',
      kopf: ['Typ', 'Ziel', 'Ton', 'Kern-Redemittel'],
      zeilen: [
        ['Beschwerde', 'Mangel benennen + Abhilfe fordern', 'bestimmt, aber sachlich', 'Leider muss ich feststellen, dass…'],
        ['Anfrage', 'Information erhalten', 'neutral-interessiert', 'Ich hätte einige Fragen zu…'],
        ['Bitte', 'Ausnahme/Gefallen erreichen', 'besonders höflich, begründend', 'Ich wäre Ihnen sehr dankbar, wenn…'],
        ['Entschuldigung', 'Fehler einräumen + Lösung anbieten', 'bedauernd, konstruktiv', 'Bitte entschuldigen Sie, dass… / Ich bedaure sehr, dass…'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Der Konjunktiv II als Höflichkeitsform',
      absaetze: [
        'Im formellen Deutsch ist der Konjunktiv II kein Irrealis, sondern ein **Abstandshalter**: Er verwandelt eine Forderung in eine Bitte. *Ich will eine Rückerstattung* klingt wie ein Ultimatum; *Ich **würde** Sie bitten, mir den Betrag zu erstatten* oder *Ich **wäre** Ihnen dankbar, wenn Sie den Betrag erstatten **könnten*** erreicht dasselbe — und bleibt verbindlich im Ton.',
        'Die Skala für die Prüfung: **direkt** (*Erstatten Sie mir den Betrag*) → **höflich** (*Könnten Sie mir bitte den Betrag erstatten?*) → **sehr höflich** (*Ich wäre Ihnen dankbar, wenn Sie mir den Betrag erstatten könnten*). In der Beschwerde darfst du am Ende eine Stufe härter werden: *Sollte sich die Situation nicht verbessern, **sähe** ich mich gezwungen, …* — Konjunktiv II als samtene Drohung. ~~Es el equivalente funcional de «me vería obligado/a a…».~~',
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel nach Funktion',
      gruppen: [
        {
          fn: 'Einleiten / Bezug nehmen',
          saetze: [
            { satz: 'Ich wende mich an Sie, weil…' },
            { satz: 'Bezugnehmend auf Ihr Schreiben vom 12. Mai möchte ich…' },
            { satz: 'Ich bin seit September Teilnehmerin Ihres Abendkurses und…' },
          ],
        },
        {
          fn: 'Beschwerde führen',
          saetze: [
            { satz: 'Leider muss ich feststellen, dass…' },
            { satz: 'Zu meinem Bedauern entspricht … nicht dem, was vereinbart wurde.' },
            { satz: 'Sollte sich die Situation nicht verbessern, sähe ich mich gezwungen, …', gloss: '~~la escalada cortés: «me vería obligado/a a…»~~' },
          ],
        },
        {
          fn: 'Bitten / Anfragen',
          saetze: [
            { satz: 'Ich möchte Sie bitten, … / Ich würde Sie bitten, …' },
            { satz: 'Ich wäre Ihnen sehr dankbar, wenn Sie … könnten.' },
            { satz: 'Könnten Sie mir bitte mitteilen, ob…?' },
          ],
        },
        {
          fn: 'Sich entschuldigen',
          saetze: [
            { satz: 'Bitte entschuldigen Sie, dass ich Ihnen erst jetzt antworte.' },
            { satz: 'Ich bedaure sehr, Ihnen mitteilen zu müssen, dass…' },
            { satz: 'Für die entstandenen Unannehmlichkeiten möchte ich mich aufrichtig entschuldigen.' },
          ],
        },
        {
          fn: 'Schließen',
          saetze: [
            { satz: 'Für eine baldige Rückmeldung wäre ich Ihnen dankbar.' },
            { satz: 'Vielen Dank im Voraus für Ihr Entgegenkommen.' },
            { satz: 'Gern stehe ich Ihnen für Rückfragen zur Verfügung.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele + Musterbeispiel ─────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Register im Vergleich',
      kicker: 'direkt → formell',
      titel: 'Dieselbe Botschaft, drei Tonlagen',
      items: [
        { text: '**Zu direkt:** *Schicken Sie mir mein Geld zurück.* → **Formell:** *Ich möchte Sie bitten, mir den Betrag **zu erstatten**.*', gl: '— Imperativ raus, Infinitivkonstruktion rein' },
        { text: '**Zu direkt:** *Das geht so nicht.* → **Formell:** *Leider **entspricht** dies **nicht** unserer Vereinbarung.*' },
        { text: '**Umgangssprachlich:** *Sorry für die späte Antwort!* → **Formell:** *Bitte entschuldigen Sie meine verspätete Antwort.*', gl: '— kein *sorry*, kein *okay*, kein Ausrufezeichen-Feuerwerk' },
        { text: '**Zu weich:** *Vielleicht könnten Sie eventuell mal schauen…* → **Formell:** *Ich wäre Ihnen dankbar, wenn Sie die Angelegenheit **prüfen könnten**.*', gl: '— ein Konjunktiv genügt; drei Abschwächungen hintereinander wirken unsicher' },
      ],
    },

    {
      type: 'modell',
      eyebrow: 'Musterbeispiel — kommentiert',
      thema: 'Beschwerde über einen Sprachkurs',
      woerter: '104 Wörter',
      absaetze: [
        '==Sehr geehrte Damen und Herren,==',
        '==ich bin seit September Teilnehmerin Ihres Abendkurses== und wende mich an Sie, weil ich mit dem Ablauf des Unterrichts leider nicht zufrieden bin.',
        '==Zum einen== beginnt der Unterricht regelmäßig mit deutlicher Verspätung, ==zum anderen== fällt er häufig kurzfristig aus, ohne dass ein Ersatztermin angeboten wird. Dadurch kommen wir mit dem Stoff kaum voran.',
        '==Ich möchte Sie daher bitten,== für einen pünktlichen und verlässlichen Ablauf zu sorgen und die ausgefallenen Stunden nachzuholen. Sollte sich die Situation nicht verbessern, ==sähe== ich mich gezwungen, eine Rückerstattung zu beantragen.',
        'Für eine baldige Rückmeldung wäre ich Ihnen sehr dankbar.',
        '==Mit freundlichen Grüßen==\nMaría López',
      ],
      annotationen: [
        { tag: 'Anrede', text: 'Formell, mit Komma; danach klein weiter (*ich bin…*).' },
        { tag: 'Anlass', text: 'Ein Satz stellt Rolle (*Teilnehmerin seit September*) und Grund klar.' },
        { tag: 'Hauptteil', text: 'Zwei Kritikpunkte sauber gegliedert (*zum einen … zum anderen*) + Folge (*dadurch*).' },
        { tag: 'Register', text: 'Höfliche Forderung, dann die Eskalationsstufe im Konjunktiv II (*sähe, wäre*).' },
        { tag: 'Schluss', text: 'Standardformel + Gruß ohne Komma + Name. Fertig — kein Wort zu viel.' },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Plane ca. **30 Minuten** für Teil 2. Halte das **Sie-Register** lückenlos durch — *Sie, Ihnen, Ihr* immer groß — und hake **alle Leitpunkte** ab: Bei 120 Wörtern fällt jeder fehlende sofort auf. Lerne Anrede, zwei Einleitungssätze und zwei Schlussformeln **auswendig**; das sind 30 geschenkte Wörter, deren Korrektheit garantiert ist.',
    },

    { type: 'rule' },

    // ── 6. Modelltext · Mehr Beispiele ────────────────────────────
    {
      type: 'modell',
      eyebrow: 'Modelltext — die Entschuldigung',
      thema: 'Absage eines verbindlich zugesagten Workshops an die Organisatorin, Frau Krüger (ca. 90 Wörter): Anrede, Anlass, Entschuldigung mit Grund, Lösungsvorschlag, Schluss.',
      woerter: 'ca. 90 Wörter',
      absaetze: [
        'Sehr geehrte Frau Krüger,',
        'ich bedaure sehr, Ihnen mitteilen zu müssen, dass ich am Workshop zur Projektplanung am 14. November nicht teilnehmen kann, obwohl ich bereits fest zugesagt hatte. Bitte entschuldigen Sie die kurzfristige Absage: Mein Vorgesetzter hat mich für genau diese Woche unerwartet auf eine Dienstreise geschickt, die sich leider nicht verschieben lässt.',
        'Sehr gern würde ich den Workshop beim nächsten Termin nachholen. Ich wäre Ihnen sehr dankbar, wenn Sie mich dafür vormerken und mir den neuen Termin mitteilen könnten.',
        'Vielen Dank für Ihr Verständnis.',
        'Mit freundlichen Grüßen\nDaniel Ortega',
      ],
      annotationen: [
        { tag: 'Aufbau', text: 'Entschuldigung + Grund + Lösungsvorschlag. ~~Una Entschuldigung sin propuesta de solución queda coja.~~' },
      ],
    },
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Der Kernwortschatz im formellen Satz',
      items: [
        { text: 'Mit meinem **Anliegen** habe ich mich bereits zweimal an Ihre Hotline gewandt, bislang jedoch ohne Ergebnis.', gl: '— *sich wenden an*: Partizip *gewandt* (auch *gewendet*)' },
        { text: 'Könnten Sie mir bitte mitteilen, welche Abteilung für Reklamationen **zuständig** ist?' },
        { text: 'Ich **beanstande** die Rechnung vom 4. März, da mir zwei nicht erbrachte Leistungen berechnet wurden.', gl: '— erst der Mangel, dann die Begründung' },
        { text: 'Da Sie mir den Umzugstermin **verbindlich** zugesagt hatten, bitte ich um **umgehende** Klärung.' },
        { text: 'Obwohl die Garantie abgelaufen ist, wären wir bereit, Ihnen die Reparaturkosten aus **Kulanz** zu erstatten.', gl: '— *Kulanz*: Entgegenkommen ohne rechtliche Verpflichtung' },
        { text: 'Sollte die **Rückerstattung** nicht bis zum Ende der **Frist** erfolgen, sähe ich mich gezwungen, weitere Schritte zu prüfen.', gl: '— die höfliche Eskalationsstufe im Konjunktiv II' },
      ],
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2 · komplette Aufgabe',
      titel: 'Formelle Nachricht „Bildungsurlaub“ · ca. 120 Wörter · 30 Minuten',
      anweisung: 'Bearbeite die Aufgabe unter Echtbedingungen und vergleiche erst danach mit der Lösung. Alle vier Leitpunkte müssen erkennbar vorkommen.',
      absaetze: [
        'Sie möchten an einer einwöchigen beruflichen Fortbildung teilnehmen und benötigen dafür die Zustimmung Ihrer Vorgesetzten, Frau Berger. Schreiben Sie ihr eine Nachricht (ca. 120 Wörter). Gehen Sie dabei auf folgende Punkte ein:\n• Nennen Sie den Anlass Ihrer Nachricht (Fortbildung, Termin).\n• Begründen Sie, warum die Fortbildung für Ihre Arbeit nützlich ist.\n• Erklären Sie, wie Ihre Aufgaben während Ihrer Abwesenheit erledigt werden.\n• Bitten Sie höflich um Zustimmung.',
      ],
      loesungen: [
        '*Sehr geehrte Frau Berger,*',
        '*ich wende mich an Sie, weil ich vom 12. bis zum 16. Oktober an einer Fortbildung zum Thema Projektmanagement teilnehmen möchte, und bitte Sie hierfür um Ihre Zustimmung.*',
        '*Die Fortbildung ist für meine aktuelle Tätigkeit unmittelbar relevant: Da ich seit März das Kundenportal-Projekt koordiniere, würden mir die vermittelten Methoden helfen, die Abläufe in unserem Team deutlich effizienter zu gestalten.*',
        '*Selbstverständlich würde ich meine laufenden Aufgaben rechtzeitig und vollständig an meinen Kollegen Herrn Vidal übergeben und dringende Anfragen auch während der Fortbildungswoche täglich per E-Mail beantworten.*',
        '*Ich wäre Ihnen sehr dankbar, wenn Sie meinem Antrag zustimmen könnten. Gern erläutere ich Ihnen die genauen Inhalte vorab in einem persönlichen Gespräch.*',
        '*Mit freundlichen Grüßen\nAna Ruiz*',
      ],
      loesungLabel: 'Mögliche Lösung (ca. 120 Wörter)',
      kommentar: 'Die Architektur trägt die Punkte: Absatz 1 = Leitpunkt 1 + die Bitte angekündigt, Absatz 2 = Nutzen, Absatz 3 = Vertretungsregelung, Absatz 4 = höfliche Bitte im Konjunktiv II plus Gesprächsangebot. Beachte die **Begründungskette** in Absatz 2 (*da …, würden …*): Eine Bitte ohne Begründung wirkt auf Deutsch fordernd.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Die Wortzahl ist bei Teil 2 dein Freund: **Anrede, Einleitungsformel, Schlussformel und Gruß** belegen schon ~30 Wörter. Bleiben ~90 für die Leitpunkte — also etwa **ein kurzer Absatz pro Leitpunkt**. Wenn du deutlich über 150 Wörtern liegst, erzählst du zu viel Geschichte und zu wenig Anliegen.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Feste Architektur', 'Anrede → Anlass → Anliegen (Leitpunkte) → Schluss → Gruß'],
        ['Vier Typen', 'Beschwerde · Anfrage · Bitte · Entschuldigung — je eigener Ton'],
        ['Konjunktiv II', 'wäre, könnte, würde, sähe mich gezwungen — Höflichkeit mit Rückgrat'],
        ['Register-Fallen', 'Anrede: Komma + klein weiter · Sie/Ihnen/Ihr groß · kein *sorry*'],
        ['Ökonomie', '~30 Wörter Formeln + ~90 Wörter Leitpunkte = 120'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann eine formelle Nachricht mit allen fünf Bausteinen in 30 Minuten schreiben.',
        'Ich erkenne, welcher Nachrichtentyp verlangt ist, und treffe seinen Ton.',
        'Ich formuliere Bitten und sogar Drohungen höflich im Konjunktiv II.',
        'Ich habe Anrede, Einleitungs- und Schlussformeln auswendig parat.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist das Modul Schreiben komplett. Als Nächstes wechseln wir das Medium: Das **Modul Sprechen** verlangt dieselbe Klarheit — nur in Echtzeit, zu zweit und mit Publikum. Die nächste Lektion zeigt dir die Paarprüfung Minute für Minute: was wann passiert, was bewertet wird und wie du die eine Minute Vorbereitungszeit in Gold verwandelst.',
    },
  ],
}
