// Geschichte 4 · Eine öffentliche Debatte
//
// Lectura graduada C1 — capítulo 4. Léxico: Bloque 0-4 (+ base A1-B2).
// María defiende el manuscrito en un debate público contra Konrad Vogler.
// Generalprobe, Suggestivfrage, y una concesión en el guardarropa.

export default {
  spec: ['Geschichte 4', 'Lectura graduada', 'Niveau C1', 'Wortschatz: Bloque 0-4'],
  h1: 'Geschichte 4 — Eine öffentliche Debatte',
  lead: 'Im Literaturhaus wartet Konrad Vogler, der gefürchtetste Kritiker der Stadt. María hat ein Gutachten, drei Argumente — und eine Generalprobe hinter sich.',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'die Generalprobe', kollokation: 'eine Generalprobe am Küchentisch abhalten', es: 'ensayo general' },
        { wort: 'die Zuversicht', kollokation: 'mit vorsichtiger Zuversicht in den Abend gehen', es: 'confianza, optimismo' },
        { wort: 'die These', kollokation: 'eine These brillant vortragen', es: 'tesis' },
        { wort: 'überzogen', kollokation: 'eine überzogene, aber wirkungsvolle Kritik', es: 'exagerado, desmedido' },
        { wort: 'entkräften', kollokation: 'erst einräumen, dann entkräften', es: 'rebatir, desmontar' },
        { wort: 'stichhaltig', kollokation: 'das stichhaltigste Argument zum Schluss', es: 'sólido, concluyente' },
        { wort: 'anknüpfen an', kollokation: 'an den Vorredner anknüpfen', es: 'enlazar con, retomar' },
        { wort: 'der Vorredner', kollokation: 'dem Vorredner in einem Punkt recht geben', es: 'quien habló antes' },
        { wort: 'die Suggestivfrage', kollokation: 'auf eine Suggestivfrage nicht hereinfallen', es: 'pregunta capciosa' },
        { wort: 'nachhaken', kollokation: 'höflich, aber unerbittlich nachhaken', es: 'insistir, repreguntar' },
        { wort: 'Position beziehen', kollokation: 'vor vollem Saal Position beziehen', es: 'tomar postura' },
        { wort: 'betonen', kollokation: 'einen Punkt ausdrücklich betonen', es: 'recalcar, subrayar' },
      ],
      hinweis: '~~El **Verriss** (la crítica demoledora) es un pequeño género propio del periodismo cultural alemán: reseña que destroza un libro con estilo. Que haya gente que «colecciona» los Verrisse de Vogler te dice todo sobre el personaje.~~',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Geschichte',
      card: true,
      titel: 'Eine öffentliche Debatte',
      absaetze: [
        'Am Mittwoch vor der Debatte verwandelte sich die Küche in der Gartenstraße in ein Literaturhaus mit drei Zuschauern. Carla führte die Stoppuhr und das Protokoll, Paul spielte das Publikum, indem er skeptisch guckte und Wasser trank — er war darin sehr überzeugend —, und Deniz hatte sich die Rolle des Kritikers gesichert. „Darf ich gemein sein?“, fragte er und band sich zur Einstimmung das Geschirrtuch wie einen Schal um. „Du sollst gemein sein.“ — „Endlich“, sagte Deniz, „eine Rolle, für die ich geboren bin.“',
        'Sie hielten eine **Generalprobe** ab, wie María sie aus keiner Prüfung ihres Lebens kannte. Deniz unterbrach, verdrehte ihre Worte, stellte Fragen, die wie Komplimente begannen und wie Fallen endeten. María lernte in dieser Küche mehr über Rhetorik als in jedem Handbuch: erst **einräumen**, dann **entkräften**; nie das Vokabular des Gegners wiederholen; das **stichhaltigste** Argument zum Schluss.',
        '„Frau Vega“, sagte Deniz mit öliger Kritikerstimme, „Ihr Verlag druckt ein Buch von niemandem. Ist Ihnen der Unterschied zwischen Mut und Leichtsinn geläufig?“ — „Sag nicht Leichtsinn“, warf Carla ein, ohne von der Stoppuhr aufzusehen. „Sie darf sein Wort nicht wiederholen. Noch mal.“ Sie probten die Stelle dreimal, bis María antworten konnte, ohne zu blinzeln.',
        'Um Mitternacht erklärte Carla die Probe für bestanden. „Er wird trotzdem besser reden als du“, sagte Deniz beim Abschied, ungerührt Kuchenreste einpackend. „Aber du hast etwas, das er nicht hat: Du hast das Buch wirklich gelesen — mit dem Leben, nicht mit dem Rotstift.“ Es war, für seine Verhältnisse, beinahe zärtlich. María ging mit vorsichtiger **Zuversicht** ins Bett und schlief sofort ein, was sie am Morgen für ein gutes Zeichen hielt.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Das Literaturhaus war voll bis auf den letzten Klappstuhl. In der zweiten Reihe saßen Paul, Carla und Deniz; Herr Lindström stand hinten an der Wand, die Arme verschränkt, wie ein Mann, der einem Gebäude beim Brennen zusehen muss, das er selbst versichert hat. Ganz hinten, halb von einer Säule verdeckt, saß eine Person, die María erst auf den zweiten Blick erkannte: Dr. Behrens, das Gutachten auf den Knien wie ein Gesangbuch.',
        'Konrad Vogler trug einen dunkelgrauen Anzug und die Gelassenheit eines Mannes, der noch nie ein Streitgespräch verloren hatte. Er sprach zuerst, und er sprach glänzend. Literatur ohne Verfasser, so führte er aus, sei wie ein Scheck ohne Unterschrift: Das Papier möge schön sein, aber niemand hafte für die Summe. Die Anonymität sei keine Bescheidenheit, sondern eine Inszenierung, ein Marketinginstrument im Kostüm der Demut; und am Ende, raunte er mit einer Kunstpause, wisse ja niemand, ob hier nicht überhaupt eine Maschine geschrieben habe — man lebe schließlich in Zeiten, in denen das Echte selten und das Täuschend-Echte billig geworden sei. Er sprach acht Minuten, ohne ein einziges Mal auf seine Karteikarten zu sehen, und schloss mit einer rhetorischen Frage, die er selbstverständlich gleich selbst beantwortete.',
        'Seine **These** war **überzogen** — und brillant vorgetragen. Das Publikum applaudierte, und María, die als Nächste ans Mikrofon musste, verstand in diesem Applaus zum ersten Mal vollständig, warum man diesen Mann fürchtete.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Sie **knüpfte an** den **Vorredner an**, wie sie es hundertmal geübt hatte. „Herr Vogler hat recht“, begann sie, und der Saal wurde still, weil niemand diesen Anfang erwartet hatte. „Wir wissen nicht, wer dieses Buch geschrieben hat. Ich **räume** das nicht nur **ein** — ich **betone** es. Es steht so in unserem Nachwort, auf Seite 245, von uns selbst gedruckt. Ein Verlag, der täuschen wollte, hätte einen Namen erfunden. Nichts wäre leichter gewesen.“ Sie ließ den Satz stehen und wartete, bis er im Saal angekommen war — eine Kunstpause, die sie sich, das musste sie später zugeben, bei Vogler abgeschaut hatte.',
        'Dann erzählte sie vom Gutachten: vom Papier aus drei Jahrzehnten, von der Schreibmaschine, von der einen, alternden Hand, die ein halbes Leben lang korrigiert hatte, vom Kaffeerand auf Seite 118. „Wir haben nicht den Verfasser geprüft, sondern den Text“, sagte sie. „Und ein Satz wird nicht wahrer, wenn man weiß, wer ihn unterschrieben hat — und nicht falscher, wenn man es nicht weiß. Herr Vogler nennt das Buch einen Scheck ohne Unterschrift. Ich schlage ein anderes Bild vor: Es ist ein Brief ohne Absender. Man kann ihn nicht beantworten. Aber man kann ihn lesen. Und dieser Brief ist, mit Verlaub, an uns alle adressiert.“',
        'Im Saal blieb es einen Moment sehr still, und dann kam der Applaus — nicht lauter als der für Vogler, aber anders. Wärmer, fand Carla später; länger, behauptete Deniz; Paul sagte nur, er habe vergessen, skeptisch zu gucken.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Vogler wäre nicht Vogler gewesen, hätte er nicht **nachgehakt**. „Sie geben also zu, Frau Vega“, sagte er freundlich, „dass Sie Ihren Lesern etwas verkaufen, von dem Sie selbst nicht wissen, was es ist?“ Es war eine **Suggestivfrage** wie aus dem Lehrbuch, und María hörte förmlich Deniz’ Stimme aus der Küchenprobe: Nicht sein Wort wiederholen. Nicht „verkaufen“ sagen.',
        '„Ich gebe zu, dass ich nicht weiß, *wer* schreibt“, sagte sie. „Was dort *geschrieben steht*, weiß ich sehr genau. Ich habe es dreimal gelesen — zweimal davon beruflich.“ Der Saal lachte, und sogar Vogler verzog anerkennend den Mundwinkel, was Kenner seiner Kolumnen später für die eigentliche Sensation des Abends hielten. Die Debatte wogte noch eine halbe Stunde hin und her; es wurde nachgehakt, relativiert und zugespitzt, und einmal zitierten beide dieselbe Seite des Buches für entgegengesetzte Zwecke, was das Publikum sichtlich genoss. In den Schlussworten bezogen beide noch einmal **Position**, der Moderator erklärte niemanden zum Sieger, und genau das empfanden erstaunlich viele im Saal als das richtige Ergebnis.',
        'An der Garderobe trafen sie noch einmal aufeinander, ohne Mikrofone. „Sie haben mich nicht überzeugt, Frau Vega“, sagte Vogler und schlug den Mantelkragen hoch. „Aber Sie haben mich ins Zweifeln gebracht. In meinem Beruf gilt das als Niederlage.“ Er setzte den Hut auf. „In Ihrem, fürchte ich, als Anfang.“ Draußen warteten Paul, Carla und Deniz mit einer Flasche, die keiner von ihnen bezahlt haben wollte. „Von mir aus kann er gemein bleiben“, sagte Deniz und verteilte Gläser. „Du warst besser. Das sage ich als dein Lehrer.“',
        'Viel später, als die Flasche leer war und Berlin die Straßenlaternen anhatte, gingen María und Paul zu Fuß nach Hause. „Weißt du, was mir aufgefallen ist?“, sagte Paul. „Du hast heute kein einziges Mal geklungen wie ein Klappentext.“ María blieb stehen. Dann lachte sie, mitten auf der leeren Straße, so laut, dass in der Gartenstraße vermutlich ein Fenster aufging. Es war das schönste Kompliment des Abends — und es kam nicht von einem Kritiker.',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die vier Fragen in ganzen Sätzen. Belege deine Antworten, wo möglich, mit einer Textstelle.',
      aufgaben: [
        '**Detail:** Mit welchem Bild eröffnet Vogler seine Kritik, und welches Gegenbild setzt María dagegen? Zitiere beide.',
        '**Schlussfolgerung:** „In meinem Beruf gilt das als Niederlage. In Ihrem, fürchte ich, als Anfang.“ — Warum ist dieser Satz an der Garderobe in Wahrheit ein Zugeständnis? Was unterscheidet Voglers Beruf von Marías?',
        '**Autorenabsicht:** Warum beginnt das Kapitel mit der Generalprobe in der Küche und nicht direkt im Literaturhaus? Was will der Text über Souveränität zeigen?',
        '**Sprache & Register:** María beginnt ihre Antwort mit „Herr Vogler hat recht“ und weigert sich später, das Wort „verkaufen“ zu wiederholen. Welche zwei rhetorischen Strategien stecken dahinter, und wie hängen sie mit der Küchenprobe zusammen?',
      ],
      loesungen: [
        'Vogler nennt das anonyme Buch einen **„Scheck ohne Unterschrift“** — das Papier möge schön sein, aber niemand hafte für die Summe. María setzt dagegen: Es sei ein **„Brief ohne Absender“** — man könne ihn nicht beantworten, aber lesen, und er sei „an uns alle adressiert“. Ihr Bild verschiebt den Maßstab vom Haften (Geld, Garantie) zum Lesen (Bedeutung, Anrede).',
        'Vogler gesteht ein, dass María sein Urteil erschüttert hat — „ins Zweifeln gebracht“. Für einen Kritiker, der von der Sicherheit seines Urteils lebt, ist Zweifel eine Schwäche, also eine „Niederlage“. Für eine Lektorin und Autorin ist der Zweifel dagegen der Ausgangspunkt aller Arbeit — ein „Anfang“. Indem Vogler diesen Unterschied selbst formuliert, erkennt er Marías Welt an: Das ist die eigentliche Konzession des Abends.',
        'Die Küchenszene entzaubert die Souveränität: Was im Saal mühelos wirkt (die Konzession, das Nicht-Wiederholen, das letzte Argument), wurde am Küchentisch erarbeitet und von Freunden trainiert. Der Text zeigt damit, dass rhetorische Stärke kein Talentgeschenk ist, sondern Vorbereitung plus Menschen, die einem gemein genug die Wahrheit sagen — eine sehr unheroische, sehr erwachsene Auffassung von Mut.',
        '**Erstens** die Konzession als Eröffnung: Wer dem Gegner zuerst recht gibt („Herr Vogler hat recht“), entwaffnet ihn und gewinnt Glaubwürdigkeit — erst einräumen, dann entkräften. **Zweitens** die Rahmenverweigerung: Voglers Suggestivfrage arbeitet mit dem Verb „verkaufen“; wer es wiederholt, übernimmt seinen Rahmen. María ersetzt es durch „lesen“ und „geschrieben stehen“. Beide Techniken stammen wörtlich aus der Generalprobe („nie das Vokabular des Gegners wiederholen“) — die Szene löst ein, was die Probe versprochen hat.',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Der Vorhang fällt, die Gläser sind leer. In **Geschichte 5**, dem Epilog der ganzen Saga, springen wir ein Jahr nach vorn: eine Postkarte ohne Absender, ein Bleistiftstrich von Herrn Lindström, ein fünf Jahre alter Zettel aus dem Treppenhaus — und ein letzter Blick zurück auf den Weg von drei Wörtern bis hierher.',
    },
  ],
}
