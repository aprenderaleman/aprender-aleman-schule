// Geschichte 3 · Ärger in der WG
//
// Lectura graduada B1 — la saga de María (ver BIBLIA de la saga).
// Gramática: bloques 0-2 (Hausordnung, sich entschuldigen, sich einigen,
// Vorschläge — léxico del bloque 2). Carla entra como Mitbewohnerin
// (canon: en B1+ comparte piso con María en la Gartenstraße 12).

export default {
  spec: ['Geschichte 3', 'Lectura graduada', 'Niveau B1', 'Wortschatz: Bloque 0-2'],
  h1: 'Ärger in der WG',
  lead: 'Carla zieht bei María ein: zwei Freundinnen, eine Küche — und ein Berg schmutziges Geschirr. ~~Convivir es un idioma aparte.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'die WG, -s (Wohngemeinschaft)', kollokation: 'in einer WG wohnen', es: 'el piso compartido' },
        { wort: 'einziehen', kollokation: 'bei einer Freundin einziehen', es: 'mudarse (a), instalarse (en)' },
        { wort: 'die Mitbewohnerin, -nen', kollokation: 'die neue Mitbewohnerin', es: 'la compañera de piso' },
        { wort: 'der Streit', kollokation: 'Streit haben', es: 'la pelea, la discusión' },
        { wort: 'sich streiten mit + Dat.', kollokation: 'sich mit der Mitbewohnerin streiten', es: 'pelearse con' },
        { wort: 'das Geschirr', kollokation: 'das Geschirr spülen', es: 'la vajilla, los platos' },
        { wort: 'spülen', kollokation: 'nach dem Essen spülen', es: 'fregar (los platos)' },
        { wort: 'der Putzplan, ·pläne', kollokation: 'einen Putzplan an den Kühlschrank hängen', es: 'el plan de limpieza' },
        { wort: 'der Lärm', kollokation: 'nachts Lärm machen', es: 'el ruido' },
        { wort: 'schmutzig', kollokation: 'schmutziges Geschirr', es: 'sucio/a' },
      ],
      hinweis: 'La **WG** (Wohngemeinschaft) es una institución alemana: piso compartido con normas, Putzplan y, casi siempre, un drama con el Geschirr.',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      card: true,
      titel: 'Zwei Freundinnen, eine Küche',
      absaetze: [
        'Im März wurde das kleine Zimmer neben Marías Küche frei, und Carla **zog** bei ihr **ein**. Die Idee war perfekt: zwei Freundinnen, eine **WG**, halbe Miete, doppelt so viel Spaß — dachten sie.',
        'Die ersten zwei Wochen waren wunderbar. Carla kochte mexikanisch, María spanisch, und abends saßen sie in der Küche und redeten über alles: über den Deutschkurs von damals, über Berlin, über Marías Bewerbung, von der es immer noch keine Antwort gab. „Drei Wochen, hat er gesagt", wiederholte María jeden Abend. „Erst zwei sind vorbei", antwortete Carla jeden Abend. Dann kam der Alltag. Und mit dem Alltag kam das **Geschirr**.',
        'Carla war ein fröhlicher Mensch — und ein chaotischer. Sie ließ Tassen im Wohnzimmer stehen, ihre Musik lief bis Mitternacht, und **gespült** wurde „morgen". „Morgen" war bei Carla ein sehr flexibles Wort. María sagte nichts. Dann sagte sie es freundlich: „Vielleicht könnten wir …" Dann sagte sie es weniger freundlich. Und der **Lärm**? Über den Lärm sagte inzwischen jemand anders etwas — mit kleinen Zetteln im Treppenhaus.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Am dritten Aprilwochenende passierte es. María kam müde aus dem Café nach Hause und fand die Küche voll: **schmutziges** Geschirr auf dem Tisch, auf dem Herd, sogar auf der Fensterbank ~~(el alféizar)~~. In diesem Moment klingelte es an der Tür.',
        'Frau Krüger stand davor, mit einem Zettel in der Hand. „Ein neuer **Aushang** für das Treppenhaus", sagte sie. „Ab 22 Uhr Ruhe. So steht es in der **Hausordnung**. Und das gilt auch für den dritten Stock, meine Damen." Sie sah María lange an. Dann ging sie.',
        'Als die Tür zu war, begann der **Streit**. „Ich wohne hier auch!", rief Carla. „Eben!", rief María. „Du wohnst hier — aber ich putze hier!" Carla nahm ihre Jacke und ging. Die Wohnung war plötzlich sehr leise und sehr groß.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'María räumte die Küche auf, obwohl sie es nicht wollte. Oder gerade deshalb. Beim Spülen übte sie wütende Sätze auf Deutsch — der Kurs hatte sich gelohnt ~~(había valido la pena)~~: Ihre Grammatik war noch nie so gut gewesen wie in dieser Stunde.',
        'Um Mitternacht kam Carla zurück. María saß noch in der Küche. Vor ihr standen zwei Tassen Tee. „Die eine ist für dich", sagte sie. Carla setzte sich. Lange sagte niemand etwas.',
        '„Es tut mir leid", sagte Carla dann. „Bei uns zu Hause hat immer jemand anders geputzt. Ich habe das nie gelernt — das ist keine Ausrede ~~(excusa)~~, nur die Wahrheit." — „Und mir tut es leid, dass ich geschrien ~~(gritado)~~ habe", sagte María. „Ich hätte früher ehrlich sein sollen. Richtig ehrlich, nicht freundlich-ehrlich."',
        'Sie redeten bis zwei Uhr, machten **Vorschläge**, und am Ende **einigten sie sich**: Am Kühlschrank hing jetzt ein **Putzplan** — Montag María, Dienstag Carla — und Musik nur bis 22 Uhr, Frau Krüger lässt grüßen. Darunter schrieb Carla mit rotem Stift: „Sonntag: gemeinsames Kochen. **Streiten verboten**."',
        'Es **klappte**. Nicht immer, aber fast immer. Und das ist bei einem Plan schon sehr viel.',
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
        'Warum gibt es Streit zwischen María und Carla?',
        'Welche Rolle spielt Frau Krüger an diesem Abend?',
        'Wie lösen die beiden das Problem am Ende?',
        '**Interpretation:** María sagt: „Ich hätte früher ehrlich sein sollen. Richtig ehrlich, nicht freundlich-ehrlich." Was meint sie damit?',
      ],
      loesungen: [
        'Carla ist chaotisch: schmutziges Geschirr, Tassen im Wohnzimmer, laute Musik bis Mitternacht. María putzt allein und sagt zu lange nichts — bis sie explodiert.',
        'Sie bringt einen neuen Aushang mit der Hausordnung („ab 22 Uhr Ruhe") und macht klar, dass die Regeln auch für María und Carla gelten. Ihr Besuch ist der Startpunkt für den Streit.',
        'Sie entschuldigen sich beide, machen Vorschläge und einigen sich auf einen Putzplan und feste Regeln — plus gemeinsames Kochen am Sonntag.',
        'Mögliche Antwort: María hat ihre Kritik zu lange hinter Freundlichkeit versteckt. „Freundlich-ehrlich" heißt: etwas so vorsichtig sagen, dass die andere Person das Problem gar nicht versteht. Echte Ehrlichkeit wäre früher unbequem gewesen — aber hätte den großen Streit verhindert. ~~Decir las cosas a medias no es ser amable: es aplazar el conflicto.~~',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Beim ersten Sonntagskochen legt Carla plötzlich den Löffel weg: „Weißt du, was wir zwei brauchen? Eine Reise." Wohin es geht — und warum fast nichts wie geplant läuft — liest du in **Geschichte 4 — Die Reise nach Hamburg**.',
    },
  ],
}
