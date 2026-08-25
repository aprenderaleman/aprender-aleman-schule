// Lektion 01 · Das Zertifikat B1 im Überblick
//
// Bloque 0 «Einführung» — qué certifica el B1 (GER), los 4 módulos con el
// canon del KANON, el sistema 100/60 modular y el camino de la Anmeldung
// al Zeugnis.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau B1', 'Prüfungsrelevanz: alle Module'],
  h1: 'Das Zertifikat B1 im Überblick',
  lead: 'Vier Module, 100 Punkte pro Modul, bestanden ab 60 — dein Weg von der Anmeldung bis zum Zeugnis. ~~El examen completo, de un vistazo.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'wissen, was das Niveau B1 bedeutet und wofür das Zertifikat gut ist',
        'die vier Module mit Zeit und Aufgaben kennen',
        'das Punktesystem verstehen: 100 pro Modul, bestanden ab 60',
        'den Weg von der Anmeldung bis zum Zeugnis kennen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — rund um die Prüfung',
      items: [
        { wort: 'das Zertifikat, -e', kollokation: 'das Zertifikat B1 machen', es: 'el certificado' },
        { wort: 'die Prüfung, -en', kollokation: 'die Prüfung bestehen', es: 'el examen' },
        { wort: 'das Modul, -e', kollokation: 'ein Modul einzeln ablegen', es: 'el módulo (parte del examen)' },
        { wort: 'der Teil, -e', kollokation: 'Lesen hat fünf Teile', es: 'la parte (de un módulo)' },
        { wort: 'die Aufgabe, -n', kollokation: 'die Aufgabe genau lesen', es: 'la tarea, el ejercicio' },
        { wort: 'die Anmeldung, -en', kollokation: 'die Anmeldung online machen', es: 'la inscripción' },
        { wort: 'das Prüfungszentrum, ·zentren', kollokation: 'ein Prüfungszentrum in der Nähe suchen', es: 'el centro examinador' },
        { wort: 'der Termin, -e', kollokation: 'einen Termin wählen', es: 'la fecha, la cita' },
        { wort: 'bestehen', kollokation: 'ein Modul mit 60 Punkten bestehen', es: 'aprobar' },
        { wort: 'das Ergebnis, -se', kollokation: 'das Ergebnis online sehen', es: 'el resultado' },
        { wort: 'die Bewertung, -en', kollokation: 'die Bewertung verstehen', es: 'la evaluación, los criterios' },
        { wort: 'das Zeugnis, -se', kollokation: 'das Zeugnis abholen', es: 'el diploma, el título' },
      ],
      hinweis: '~~Ojo, falso amigo: «bestehen» = aprobar, no «existir» aquí. Y el Zeugnis es el documento oficial que recibes al final.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — was B1 bedeutet',
      absaetze: [
        'B1 ist eine Stufe des __Gemeinsamen Europäischen Referenzrahmens (GER)__ und heißt dort **„selbstständige Sprachverwendung“** ~~(usuario independiente)~~. Mit B1 verstehst du die **Hauptpunkte** klarer Alltagstexte, kommst auf Reisen zurecht, schreibst **einfache zusammenhängende Texte** und sprichst über Erfahrungen, Pläne und Meinungen.',
        'Das Zertifikat B1 wird international anerkannt. Viele Behörden verlangen es z. B. für **Aufenthaltstitel oder die Einbürgerung** — die Regeln sind aber **je nach Land und Behörde** unterschiedlich. Frag immer bei der zuständigen Behörde nach, welches Zertifikat sie akzeptiert.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die vier Module',
      kopf: ['Modul', 'Zeit', 'Struktur'],
      zeilen: [
        ['Lesen', '65 Min.', '5 Teile — Blogs & E-Mails, Anzeigen, Meinungen, Anweisungen & formelle Texte'],
        ['Hören', 'ca. 40 Min.', '4 Teile — Durchsagen & kurze Texte, Gespräch & Diskussion'],
        ['Schreiben', '60 Min.', '3 Teile — informelle E-Mail (~80 W.), Forumsbeitrag (~80 W.), formelle E-Mail (~40 W.)'],
        ['Sprechen', 'ca. 15 Min.', '3 Teile (Paarprüfung) — gemeinsam planen, Präsentation (~3 Min.), Feedback & Fragen'],
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: '100 Punkte pro Modul — bestanden ab 60',
      absaetze: [
        'Die Prüfung ist **modular**: Jedes Modul gibt maximal **100 Punkte**, und du bestehst es ab **60 Punkten**. Du kannst alle vier Module an einem Tag ablegen — oder **einzeln**, und ein nicht bestandenes Modul später **einzeln wiederholen**. ~~No repites todo el examen: solo el módulo suspendido. Esa es la gran ventaja del sistema modular.~~',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — von der Anmeldung zum Zeugnis',
      steps: [
        {
          titel: 'Prüfungszentrum und Termin finden',
          text: 'Such ein __Prüfungszentrum__ in deiner Nähe und schau dir die freien Termine an. Beliebte Termine sind schnell ausgebucht — plane **früh**.',
        },
        {
          titel: 'Anmeldung',
          text: 'Die __Anmeldung__ läuft meist online: Module wählen, Daten eingeben, bezahlen. Am Prüfungstag brauchst du deinen **Ausweis oder Pass**.',
        },
        {
          titel: 'Prüfungstag',
          text: 'Vormittags meist Lesen, Hören und Schreiben, danach oder an einem anderen Tag das Modul __Sprechen__ als Paarprüfung.',
        },
        {
          titel: 'Ergebnis und Zeugnis',
          text: 'Nach einigen Wochen siehst du dein __Ergebnis__; danach bekommst du das __Zeugnis__ mit den Punkten pro Modul.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — das kannst du mit B1',
      kicker: 'GER · Kann-Beschreibungen',
      titel: 'So klingt das Niveau B1',
      items: [
        { text: 'Ich kann über meine **Arbeit und meine Pläne** sprechen: *„Ich möchte in Deutschland als Pflegerin arbeiten.“*' },
        { text: 'Ich kann eine **einfache E-Mail** schreiben und darin etwas erklären oder um etwas bitten.' },
        { text: 'Ich kann meine **Meinung** sagen und kurz begründen: *„Ich finde Homeoffice gut, weil ich Zeit spare.“*' },
        { text: 'Ich verstehe die **Hauptpunkte**, wenn jemand klar und in Standardsprache spricht.', gl: '— no cada palabra: las ideas principales' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Richtig oder falsch?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Du musst immer alle vier Module am selben Tag machen.',
        'Ein Modul ist ab 60 von 100 Punkten bestanden.',
        'Wenn du Schreiben nicht bestehst, wiederholst du die ganze Prüfung.',
        'Das Modul Sprechen ist eine Paarprüfung.',
      ],
      loesungen: [
        '**Falsch** — die Module kannst du auch einzeln ablegen.',
        '**Richtig** — 60 Punkte pro Modul reichen.',
        '**Falsch** — du wiederholst nur das Modul Schreiben. ~~Solo el módulo suspendido.~~',
        '**Richtig** — du sprichst mit einer Partnerin oder einem Partner.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Wortschatz anwenden',
      frage: 'Welches Wort aus dem Kernwortschatz passt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Für die Prüfung muss ich zuerst die ___ online machen.',
        'Nach vier Wochen konnte ich mein ___ im Internet sehen.',
        'Ich habe alle Module ___ — jetzt bekomme ich das Zeugnis!',
      ],
      loesungen: [
        'die **Anmeldung** ~~(la inscripción)~~',
        'mein **Ergebnis**',
        '**bestanden** ~~(Partizip II de bestehen)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib drei Sätze: Warum machst du die B1-Prüfung? Welches Modul findest du leicht, welches schwer?',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ich mache die B1-Prüfung, **weil** ich in Deutschland studieren möchte. Lesen finde ich leicht, **denn** ich lese jeden Tag deutsche Texte. Sprechen finde ich noch schwer, **deshalb** übe ich es in diesem Kurs besonders viel. ~~Vale cualquier contenido personal — fíjate en los conectores weil/denn/deshalb, que verás en la Lektion 4.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Alle Module',
      titel: 'Welches Modul ist das?',
      anweisung: 'Ordne jede Aufgabe dem richtigen Modul zu: Lesen, Hören, Schreiben oder Sprechen.',
      absaetze: [
        '{1} Du hörst eine Durchsage am Bahnhof und wählst die richtige Antwort.\n{2} Du schreibst deiner Freundin eine E-Mail mit ca. 80 Wörtern.\n{3} Du planst mit deinem Partner zusammen eine Party für den Kurs.\n{4} Du liest vier Anzeigen und findest die passende für eine Situation.',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Hören** — Teil 1: Durchsagen & kurze Texte.',
        '{2} **Schreiben** — Teil 1: informelle E-Mail.',
        '{3} **Sprechen** — Teil 1: gemeinsam etwas planen.',
        '{4} **Lesen** — Teil 2: Anzeigen zuordnen.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lade dir den **offiziellen Modellsatz** herunter und schau ihn einmal komplett an — noch ohne zu üben. Wer das Format kennt, hat in der Prüfung **keine Überraschungen** und spart wertvolle Minuten.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Was ist B1?', 'GER-Stufe „selbstständige Sprachverwendung“'],
        ['Wie viele Module?', '4 — Lesen, Hören, Schreiben, Sprechen'],
        ['Wann bestanden?', 'ab 60 von 100 Punkten pro Modul'],
        ['Modular?', 'Ja — Module einzeln ablegen und einzeln wiederholen'],
        ['Wofür brauchst du es?', 'Studium, Arbeit, oft Aufenthalt/Einbürgerung — je nach Land und Behörde'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann erklären, was das Niveau B1 bedeutet.',
        'Ich kenne die vier Module mit Zeit und Aufgaben.',
        'Ich weiß, dass jedes Modul ab 60 von 100 Punkten bestanden ist.',
        'Ich kenne den Weg von der Anmeldung bis zum Zeugnis.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kennst jetzt die Prüfung — aber immer öfter legst du sie **am Computer** ab. In der nächsten Lektion lernst du das digitale Format (CBT) kennen: navigieren, markieren, mit deutscher Tastatur tippen.',
    },
  ],
}
