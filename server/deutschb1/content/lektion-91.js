// Geschichte 1 · Die Bewerbung
//
// Lectura graduada B1 — la saga de María (ver BIBLIA de la saga).
// Gramática: bloques 0-1 ya vistos (Präteritum narrativo, Konjunktiv II,
// Konnektoren, Verben mit Präpositionen). Léxico fuera de canon → 'Vor dem
// Lesen' con glosa.

export default {
  spec: ['Geschichte 1', 'Lectura graduada', 'Niveau B1', 'Wortschatz: Bloque 0-1'],
  h1: 'Die Bewerbung',
  lead: 'María findet eine Anzeige, die alles ändern könnte — und Paul hilft ihr bei der Bewerbung. ~~Primer capítulo: el salto profesional empieza aquí.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'die Bewerbung, -en', kollokation: 'eine Bewerbung schreiben', es: 'la candidatura, la solicitud de empleo' },
        { wort: 'sich bewerben um + Akk.', kollokation: 'sich um eine Stelle bewerben', es: 'postularse a, solicitar (un puesto)' },
        { wort: 'die Stelle, -n', kollokation: 'eine freie Stelle finden', es: 'el puesto de trabajo' },
        { wort: 'die Anzeige, -n', kollokation: 'eine Anzeige im Internet lesen', es: 'el anuncio' },
        { wort: 'der Verlag, -e', kollokation: 'in einem Verlag arbeiten', es: 'la editorial' },
        { wort: 'der Lebenslauf, ·läufe', kollokation: 'den Lebenslauf aktualisieren', es: 'el currículum' },
        { wort: 'das Anschreiben, -', kollokation: 'ein Anschreiben formulieren', es: 'la carta de presentación' },
        { wort: 'die Unterlagen (Pl.)', kollokation: 'die Unterlagen kontrollieren', es: 'los documentos, el expediente' },
        { wort: 'abschicken', kollokation: 'die E-Mail abschicken', es: 'enviar, mandar (algo escrito)' },
        { wort: 'der Betreff, -e', kollokation: 'den Betreff der E-Mail kontrollieren', es: 'el asunto (del correo)' },
      ],
      hinweis: 'Diese Wörter sind neu — alles andere in der Geschichte kennst du schon aus A1, A2 und den Blöcken 0-1. ~~Lee las palabras dos veces antes de empezar.~~',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      card: true,
      titel: 'Eine Anzeige am Dienstagabend',
      absaetze: [
        'Es war ein grauer Dienstag im Februar. María arbeitete jetzt seit anderthalb Jahren im Café Sonne, und sie machte ihre Arbeit gern: Sie kannte die Stammgäste ~~(los clientes habituales)~~, sie lachte viel mit Deniz, und der Kaffee war sowieso der beste der Stadt. Aber abends, wenn sie müde nach Hause kam, las sie Bücher. Immer. Auf Deutsch, auf Spanisch, im Bett, in der Badewanne. Bücher waren ihr großer Traum — nein, mehr als das: ihr **Ziel**.',
        'An diesem Abend saß sie mit ihrem **Handy** auf dem Sofa und fand eine kleine **Anzeige**: „Der **Verlag** Morgenlicht sucht eine Assistentin / einen Assistenten. Wir sind ein kleines Team und machen Bücher mit Herz. Gute Deutschkenntnisse, Interesse an Literatur, Lust auf neue **Aufgaben**."',
        'María las die Anzeige dreimal. Ihr Herz klopfte ~~(le latía el corazón)~~. Eine **Stelle** in einem Verlag! Genau das wollte sie — und genau davor hatte sie Angst. Sie legte das Handy weg, stand auf, machte sich einen Tee, setzte sich wieder. Das Handy lag auf dem Tisch und wartete. „Gute Deutschkenntnisse", stand da. Was heißt das? Wie gut ist gut? Sie dachte an ihre erste Woche in Berlin, als sie nicht einmal Brot kaufen konnte, ohne rot zu werden. Und dann dachte sie an gestern, als sie einem Gast eine halbe Stunde lang die Karte erklärt hatte. Auf Deutsch. Mit Witzen.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Eine Stunde später klopfte sie an Pauls Tür. Paul öffnete mit einer Tasse Tee in der Hand. „Ich brauche deine Hilfe", sagte María. „Ich will mich um eine Stelle **bewerben**. Aber mein Deutsch …" — „Dein Deutsch ist gut", sagte Paul ruhig. „Komm rein."',
        'Sie setzten sich an seinen Schreibtisch, und Paul öffnete den Laptop. Zuerst schrieben sie den **Lebenslauf**: die Schule in Valencia, das Studium, die Zeit im Café Sonne. „Schreib das mit dem Café groß", sagte Paul. „Du organisierst dort viel, du arbeitest mit Menschen, und das seit anderthalb Jahren. Das ist eine **Stärke**, keine Pause im Leben."',
        'Das **Anschreiben** war schwerer. María tippte, löschte, tippte wieder. „Ich mache zu viele **Fehler**", sagte sie. Paul schüttelte den Kopf. „Fehler sind nicht das Problem. Ein Text ohne Herz ist das Problem. Schreib, warum du Bücher liebst." Also schrieb María über die Bibliothek in Valencia, über ihr erstes deutsches Buch und über den Moment, in dem sie verstand: Wörter können eine zweite Heimat ~~(una segunda patria)~~ sein.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Um Mitternacht waren die **Unterlagen** fertig: ein Lebenslauf auf einer Seite und ein Anschreiben, das nach María klang und nicht nach einem Formular. María kontrollierte alles noch einmal: den **Betreff**, die Anrede, jedes Komma. „Wenn ich die Stelle bekommen würde", sagte sie leise, „würde ich jeden Morgen mit Büchern arbeiten." — „Nicht wenn", sagte Paul. „Du klingst schon wie jemand, der dort arbeitet." ~~(klingen = sonar)~~',
        'María atmete tief und klickte auf „Senden". Die E-Mail war weg. Zwei Sekunden Stille. Dann lachten beide, ohne zu wissen, warum. „Und jetzt?", fragte María. „Jetzt", sagte Paul, „wartest du. Und ich koche uns noch einen Tee."',
        'In dieser Nacht schlief María schlecht. Aber es war das gute Schlecht-Schlafen: das von jemandem, der endlich etwas **verbessern** will — nicht nur im Deutschkurs, sondern im Leben.',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die Fragen zur Geschichte.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Warum passt die Stelle beim Verlag Morgenlicht so gut zu María?',
        'Welche Angst hat María — und was antwortet Paul darauf?',
        'Richtig oder falsch? María schickt die Bewerbung ab, ohne sie zu kontrollieren.',
        '**Interpretation:** Was meint die Geschichte am Ende mit dem „guten Schlecht-Schlafen"?',
      ],
      loesungen: [
        'Bücher sind ihr großes **Ziel**: Sie liest jeden Abend, auf Deutsch und auf Spanisch. Eine Stelle im Verlag verbindet ihre Arbeit mit ihrem Traum.',
        'Sie glaubt, ihr Deutsch ist nicht gut genug, und sie macht zu viele Fehler. Paul antwortet: „Fehler sind nicht das Problem. Ein Text ohne Herz ist das Problem."',
        '**Falsch.** Sie kontrolliert alles noch einmal: den Betreff, die Anrede, jedes Komma.',
        'Mögliche Antwort: María schläft schlecht, weil sie aufgeregt ist — aber die Aufregung ist positiv. Sie hat einen wichtigen Schritt gemacht und will ihr Leben verändern, nicht nur ihr Deutsch. ~~Otras respuestas con esta idea también valen.~~',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Zwei Wochen später findet María eine E-Mail in ihrem Postfach. Der **Betreff**: „Einladung zum Gespräch". Wie es weitergeht, liest du in **Geschichte 2 — Das Vorstellungsgespräch**.',
    },
  ],
}
