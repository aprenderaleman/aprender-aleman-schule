// Lektion 15 · Verben mit Präpositionen & Präpositionaladverbien
//
// Bloque 1 «Grammatik & Struktur». Die 20+ essenziellen B2-Verben mit
// fester Präposition, da(r)- und wo(r)-Formen, das Korrelat
// (Ich freue mich darauf, dass …). Ausblick → Lektion 16.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Verben mit Präpositionen & Präpositionaladverbien',
  lead: 'Warten auf, sich freuen über, denken an: die festen Verb-Präposition-Paare des B2 — und die kleinen Wörter darauf, daran und worüber, die sie im Satz vertreten.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die wichtigsten B2-Verben mit fester Präposition und Kasus verwenden',
        'Fragen mit worauf/woran (Sache) und Präposition + wen/wem (Person) bilden',
        'mit darauf, daran, darüber auf Dinge und Sätze verweisen',
        'das Korrelat bilden: Ich freue mich darauf, dass …',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die B2-Liste',
      kopf: ['Verb + Präposition', 'Kasus', 'español'],
      zeilen: [
        ['warten auf', 'Akk.', 'esperar (a) ~~— no *warten für*~~'],
        ['sich freuen auf', 'Akk.', 'esperar con ilusión (futuro)'],
        ['sich freuen über', 'Akk.', 'alegrarse de (presente)'],
        ['denken an', 'Akk.', 'pensar en'],
        ['sich erinnern an', 'Akk.', 'acordarse de'],
        ['sich gewöhnen an', 'Akk.', 'acostumbrarse a'],
        ['sich interessieren für', 'Akk.', 'interesarse por'],
        ['sich bedanken für / bei', 'Akk. / Dat.', 'agradecer (algo / a alguien)'],
        ['sich ärgern über', 'Akk.', 'enfadarse por'],
        ['sich beschweren über', 'Akk.', 'quejarse de'],
        ['diskutieren über', 'Akk.', 'discutir sobre'],
        ['nachdenken über', 'Akk.', 'reflexionar sobre'],
        ['sich kümmern um', 'Akk.', 'ocuparse de'],
        ['sich bewerben um', 'Akk.', 'solicitar (un puesto)'],
        ['bitten um', 'Akk.', 'pedir'],
        ['gehören zu', 'Dat.', 'formar parte de'],
        ['passen zu', 'Dat.', 'pegar con, ir bien con'],
        ['teilnehmen an', 'Dat.', 'participar en'],
        ['abhängen von', 'Dat.', 'depender de'],
        ['träumen von', 'Dat.', 'soñar con ~~— no *mit*~~'],
        ['sich verabschieden von', 'Dat.', 'despedirse de'],
        ['anfangen mit', 'Dat.', 'empezar con'],
        ['sich beschäftigen mit', 'Dat.', 'ocuparse de, dedicarse a'],
        ['sich verlieben in', 'Akk.', 'enamorarse de ~~— no *von*~~'],
      ],
    },
    {
      type: 'tipp',
      label: 'Lerntipp',
      text: 'Lerne nie das Verb allein, sondern den **Dreierpack**: Verb + Präposition + Kasus, am besten in einem Beispielsatz. *Ich warte **auf den** Bus* speichert alle drei Informationen auf einmal.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — feste Paare',
      card: true,
      absaetze: [
        'Die Präposition ist hier **nicht logisch, sondern fest** — sie gehört zum Verb wie eine Vokabel. Deshalb funktioniert die Übersetzung aus dem Spanischen oft nicht: *soñar **con*** ist __träumen **von**__, *enamorarse **de*** ist __sich verlieben **in**__, *depender **de*** ist __abhängen **von**__. ~~La preposición española es el peor consejero posible: apréndela con el verbo, no la traduzcas.~~',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'wo(r)-',
          titel: 'Fragen: Sache vs. Person',
          text: 'Nach einer **Sache** fragst du mit __wo(r) + Präposition__: **Worauf** wartest du? **Woran** denkst du? Nach einer **Person** mit Präposition + Fragewort: **Auf wen** wartest du? **An wen** denkst du? Das -r- erscheint vor Vokal: wor**auf**, wor**über**, aber wo**für**, wo**mit**.',
        },
        {
          badge: 'da(r)-',
          titel: 'Antworten: darauf, daran, damit',
          text: 'Dieselbe Logik beim Verweisen: Sache → __da(r) + Präposition__ (*Ja, ich denke oft **daran***), Person → Präposition + Pronomen (*Ich denke oft **an sie***). ~~da- sustituye cosas, nunca personas.~~',
        },
        {
          badge: 'Korrelat',
          titel: 'Das Korrelat: darauf, dass …',
          text: 'Wenn nach dem Verb ein **ganzer Satz** kommt, kündigt das da(r)-Wort ihn an: __Ich freue mich **darauf**, **dass** du kommst.__ · __Es hängt **davon** ab, **ob** es regnet.__ Auch mit Infinitivsatz: __Ich freue mich darauf, dich **zu sehen**.__ Das ist die Brücke zur letzten Lektion.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — auf oder über?',
      kicker: 'Kontrast',
      titel: 'sich freuen auf vs. über',
      items: [
        { text: 'Ich freue mich **auf** den Urlaub.', gl: '— todavía no ha llegado (futuro)' },
        { text: 'Ich freue mich **über** das Geschenk.', gl: '— ya lo tengo (presente)' },
        { text: 'Sie ärgert sich **über** die Verspätung.', gl: '— ärgern siempre con über' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'da(r)- & wo(r)-',
      titel: 'Fragen und Verweisen',
      items: [
        { text: '**Womit** beschäftigst du dich gerade? — **Mit** meiner Bewerbung.', gl: '— Sache → womit' },
        { text: 'Erinnerst du dich an den Kurs? — Ja, ich erinnere mich gut **daran**.', gl: '— Sache → daran' },
        { text: 'Erinnerst du dich an Frau Berger? — Ja, ich erinnere mich gut **an sie**.', gl: '— Person → an sie, nunca daran' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Korrelat',
      titel: 'darauf, dass … / darauf, zu …',
      items: [
        { text: 'Wir freuen uns **darauf**, Sie im September wiederzusehen.', gl: '— fórmula perfecta para la formelle Nachricht' },
        { text: 'Es kommt **darauf** an, **wie** viel Zeit man investiert.', gl: '— ankommen auf + indirekte Frage' },
        { text: 'Ich bedanke mich **dafür**, **dass** Sie so schnell geantwortet haben.', gl: '— agradecimiento formal' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welche Präposition fehlt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Sie interessiert sich sehr ___ Politik.',
        'Wir warten schon eine Stunde ___ den Techniker.',
        'Das hängt ___ Wetter ab.',
        'Er hat sich ___ eine Stelle als Ingenieur beworben.',
        'Ich träume ___ einem Haus am Meer.',
      ],
      loesungen: [
        '**für** Politik — sich interessieren für + Akk. ~~(interesarse *por* → für, nunca *für über*)~~',
        '**auf** den Techniker — warten auf + Akk.',
        '**vom** Wetter — abhängen von + Dat. (von + dem = vom).',
        '**um** eine Stelle — sich bewerben um + Akk.',
        '**von** einem Haus — träumen von, nunca *mit*.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Antworte mit da(r)-Wort oder Präposition + Pronomen — je nachdem, ob Sache oder Person.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Denkst du noch an die Prüfung? — Ja, …',
        'Kümmerst du dich um deine Großmutter? — Ja, …',
        'Nimmst du am Seminar teil? — Ja, …',
        'Wie fragst du nach dem Objekt? „Er wartet auf den Bescheid.“',
      ],
      loesungen: [
        'Ja, ich denke noch oft **daran**. ~~Sache → daran.~~',
        'Ja, ich kümmere mich **um sie**. ~~Person → um sie.~~',
        'Ja, ich nehme **daran** teil.',
        '**Worauf** wartet er? ~~Sache → worauf.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib drei Sätze über deinen Deutschkurs mit Korrelat: sich freuen auf, abhängen von, sich bedanken für.',
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Ich freue mich **darauf**, nach der Prüfung das Zertifikat in der Hand zu halten.',
        'Mein Erfolg hängt **davon** ab, **ob** ich jeden Tag übe.',
        'Ich bedanke mich bei meiner Lehrerin **dafür**, **dass** sie meine Texte korrigiert. ~~Estructura evaluable: da(r)-Wort + coma + dass/ob/zu-Satz.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Prüfungsformat · Auswahlaufgabe',
      titel: '3 Lücken',
      anweisung: 'Typischer Prüfungskontext: eine formelle Nachricht. Wähle die korrekte Form.',
      absaetze: [
        'Sehr geehrter Herr Weber, ich bedanke mich {1} Ihre schnelle Antwort. Leider muss ich mich {2} beschweren, dass die Lieferung erneut beschädigt ankam. Ich bitte Sie {3}, mir bis Freitag eine Lösung vorzuschlagen.',
      ],
      optionen: [
        '(1) a) für · b) über · c) von',
        '(2) a) darauf · b) darüber · c) damit',
        '(3) a) darum · b) dafür · c) daran',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **a) für** — sich bedanken für + Akk.',
        '{2} **b) darüber** — sich beschweren über; das Korrelat kündigt den dass-Satz an.',
        '{3} **a) darum** — bitten um; Korrelat vor dem Infinitivsatz.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Diese Verben sind in **allen vier Modulen** Punktebringer: im Lesen erkennst du an der Präposition die Bedeutung, im Schreiben liefern *Ich freue mich darauf, … / Ich bedanke mich dafür, …* fertige formelle Formeln. Häufigster Fehler der Prüfung: die **spanische Präposition zu übersetzen** — im Zweifel lieber die auswendig gelernte Kollokation als die Intuition.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Situation', 'Form', 'Beispiel'],
      zeilen: [
        ['Verb lernen', 'Dreierpack: Verb + Präp. + Kasus', 'warten auf + Akk.'],
        ['Frage nach Sache', 'wo(r) + Präposition', 'Worauf wartest du?'],
        ['Frage nach Person', 'Präposition + wen/wem', 'Auf wen wartest du?'],
        ['Verweis auf Sache', 'da(r) + Präposition', 'Ich denke daran.'],
        ['Verweis auf Person', 'Präposition + Pronomen', 'Ich denke an sie.'],
        ['Vor dass/zu-Satz', 'Korrelat da(r)-Wort', 'Ich freue mich darauf, dass …'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die festen Präpositionen der wichtigsten B2-Verben mit Kasus.',
        'Ich unterscheide Sache (worauf/darauf) und Person (auf wen / auf sie).',
        'Ich bilde das Korrelat vor dass-, ob- und Infinitivsätzen.',
        'Ich übersetze die Präposition nicht aus dem Spanischen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kannst jetzt komplexe Sätze mit Verben bauen. Die nächste Lektion zeigt die andere Richtung des B2-Schriftstils: aus Verben werden Nomen — **Nominalisierung**. Aus *Wir melden uns an* wird *die Anmeldung*, aus *weil es regnet* wird *wegen des Regens*.',
    },
  ],
}
