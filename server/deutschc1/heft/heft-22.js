// Übungsheft C1 — Lektion 22: Hören: Diskussion & Vortrag
export default {
  lektion: 22,
  titel: 'Übungsheft — Diskussion & Vortrag',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zur Sprache von Vortrag und Diskussion. Achte besonders auf feste Verbindungen, die Rektion der Verben und die typischen Signalwörter der formellen Rede.',
      items: [
        {
          typ: 'luecke',
          text: 'Die Referentin {1} ihre Gliederung gleich in den ersten Sätzen an. Im Hauptteil {2} sie ihre zentrale These an einem Beispiel aus der kommunalen Praxis.',
          bank: ['kündigte', 'veranschaulichte', 'widersprach', 'bezog'],
          loesungen: { 1: 'kündigte', 2: 'veranschaulichte' },
        },
        {
          typ: 'zuordnen',
          links: ['einen Vortrag', 'ein Fazit', 'eine These', 'einen Exkurs', 'klar Position'],
          rechts: ['halten', 'ziehen', 'aufstellen', 'einschieben', 'beziehen'],
          loesung: { 'einen Vortrag': 'halten', 'ein Fazit': 'ziehen', 'eine These': 'aufstellen', 'einen Exkurs': 'einschieben', 'klar Position': 'beziehen' },
        },
        {
          typ: 'luecke',
          text: 'Damit {1} ich zum zweiten Punkt: den Kosten. Ein weiterer Aspekt, {2} in der Debatte oft übersehen wird, betrifft die Wartung der Anlagen.',
          bank: ['komme', 'bringe', 'der', 'den'],
          loesungen: { 1: 'komme', 2: 'der' },
        },
        {
          typ: 'mc',
          frage: 'Da muss ich meiner Vorrednerin entschieden ___: Die Zahlen belegen das genaue Gegenteil.',
          optionen: ['zustimmen', 'widersprechen', 'abstreiten'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Nach einem kurzen ___ in die Geschichte des Genossenschaftswesens kehrte der Referent zu seiner Ausgangsthese zurück.',
          optionen: ['Einwand', 'Übergang', 'Exkurs'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Zusammenfassend lässt sich ___, dass sich der Kreislauf nicht von selbst schließt.',
          optionen: ['festhalten', 'bestehen', 'ziehen'],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Da gebe ich Sie recht, allerdings übersehen Sie die Folgekosten.', 'Da gebe ich Ihnen recht, allerdings übersehen Sie die Folgekosten.'],
          loesung: 1,
          warum: '*jemandem recht geben* rige **dativo**: *Ihnen*. La Teilzustimmung clásica de las Diskussionsrunden — y un error de caso que en el Sprechen cuesta puntos.',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Moderatorin knüpfte an den Beitrag ihres Vorredners an.', 'Die Moderatorin knüpfte an dem Beitrag ihres Vorredners an.'],
          loesung: 0,
          warum: '*anknüpfen an* va con **acusativo** (dirección: se «engancha» a algo): *an den Beitrag*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Dieser Einwand greift zu knapp.', 'Dieser Einwand greift zu kurz.'],
          loesung: 1,
          warum: 'La colocación fija es **zu kurz greifen** (quedarse corto). *zu knapp* no forma locución con *greifen*.',
        },
        {
          typ: 'satzbau',
          woerter: ['beginnen', 'mit', 'Lassen', 'einer', 'Sie', 'mich', 'Zahl'],
          loesung: 'Lassen Sie mich mit einer Zahl beginnen.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Bericht über eine Diskussionsrunde. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Bericht: Freier Eintritt — Geschenk oder Illusion?',
      text: 'Wie viel darf Kultur kosten? Dieser Frage widmete sich am Dienstagabend eine Diskussionsrunde im Leipziger Rathaus. Moderatorin Ingrid Lohse umriss in ihrer Einleitung die Ausgangslage: Seit zwei Jahren verlangen die städtischen Museen sonntags keinen Eintritt mehr; nun steht zur Debatte, das Modell auf die ganze Woche auszuweiten.\nMuseumsdirektor Felix Adeyemi bezog gleich zu Beginn klar Position: Die Besucherzahlen an den Sonntagen hätten sich verdoppelt, vor allem Familien kämen häufiger. Stadträtin Carla Brandt widersprach ihrem Vorredner entschieden. Wer die Einnahmeausfälle nicht gegenfinanziere, gefährde am Ende Ausstellungen und Personal. Die Kulturwissenschaftlerin Mei Lin Hartmann veranschaulichte an Beispielen aus Skandinavien, dass freier Eintritt allein wenig bewirke. Neue Publikumsgruppen erreiche man nur, wenn die Museen zugleich in Vermittlungsangebote investierten. Nun könne man einwenden, das sei zu teuer — doch ohne Vermittlung verpuffe jeder Euro, der in den Gratiseintritt fließe.\nBemerkenswert war der Schluss: Brandt räumte ein, Hartmanns Argument habe sie nachdenklich gemacht, und zeigte sich offen für ein Pilotjahr — allerdings nur, sofern sich das Land an den Kosten beteilige. Ein Fazit zog Lohse bewusst nicht; entscheiden wird der Stadtrat im Herbst.',
      items: [
        { typ: 'rf', aussage: 'Schon jetzt ist der Eintritt in die städtischen Museen an einem Tag der Woche frei.', loesung: true },
        {
          typ: 'mc',
          frage: 'Welche Position vertritt Mei Lin Hartmann?',
          optionen: ['Freier Eintritt ist zu teuer und sollte deshalb nicht ausgeweitet werden.', 'Freier Eintritt hat in Skandinavien zahlreiche neue Publikumsgruppen erschlossen.', 'Freier Eintritt lohnt sich nur, wenn die Museen zugleich in Vermittlung investieren.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Wie verhält sich Carla Brandt am Ende der Diskussion?',
          optionen: ['Sie hält an ihrer grundsätzlichen Ablehnung fest.', 'Sie zeigt sich für ein Pilotjahr offen, knüpft ihre Zustimmung aber an eine Bedingung.', 'Sie fordert die Moderatorin auf, die Positionen in einem Fazit zu bündeln.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Moderatorin fasst die Diskussion am Ende in einem Fazit zusammen.', loesung: false },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen Ausschnitt aus einer Podiumsdiskussion. Entscheide beim Hören, welche Antwort zutrifft bzw. ob die Aussage richtig oder falsch ist. Halte die Positionen der Beteiligten auseinander.',
      audio: {
        transcript: 'Moderatorin: Guten Abend und willkommen zu unserer Diskussionsrunde. Soll die Universität die Anwesenheitspflicht in Seminaren wieder einführen? Herr Professor Kramer, Sie haben das gefordert.\nProfessor: Ja, und zwar aus Erfahrung. In meinem Seminar saßen zu Semesterbeginn vierzig Studierende, im Januar noch vierzehn. Ein Seminar lebt aber vom Gespräch. Wie soll man diskutieren, wenn jede Woche andere Gesichter im Raum sitzen?\nModeratorin: Frau Sommer, Sie vertreten die Studierenden. Was entgegnen Sie?\nFrau: Dass leere Seminare ein Problem sind, da gebe ich meinem Vorredner recht. Nur trifft eine Pflicht die Falschen. Zwei Drittel unserer Studierenden arbeiten neben dem Studium. Wer wegen einer Schicht dreimal fehlt, verliert dann das ganze Seminar.\nProfessor: Nun könnte man einwenden, wer arbeiten muss, solle eben weniger Kurse belegen. Das halte ich allerdings selbst für weltfremd. Mir geht es nicht um Strafe, sondern um Verbindlichkeit.\nFrau: Dann schlage ich etwas anderes vor, nämlich keine Pflicht für alle, sondern eine verbindliche Anmeldung mit festen Arbeitsgruppen. Wer fehlt, lässt seine Gruppe im Stich. Das wirkt stärker als jede Liste.\nProfessor: Das überzeugt mich mehr, als ich erwartet hätte. Ich wäre bereit, dieses Modell ein Semester lang zu erproben, vorausgesetzt, wir werten es danach gemeinsam aus.\nModeratorin: Vielen Dank. Über den Vorschlag berät der Senat im Mai.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Wie viele Studierende besuchten das Seminar von Professor Kramer im Januar noch?',
          optionen: ['40', '24', '14'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Frau Sommer bestreitet, dass schlecht besuchte Seminare ein Problem darstellen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie steht Professor Kramer zu dem Einwand, berufstätige Studierende sollten eben weniger Kurse belegen?',
          optionen: ['Er schließt sich ihm ausdrücklich an.', 'Er hält ihn selbst für realitätsfern.', 'Er hält ihn für rechtlich bedenklich.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Am Ende ist Professor Kramer bereit, den Vorschlag von Frau Sommer unter einer Bedingung zu testen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Textzusammenfassung mit Kommentar (mindestens 80 Wörter). Gib die Positionen in indirekter Rede wieder und trenne die Wiedergabe deutlich von deiner eigenen Einschätzung.',
      aufgabe: 'Du hast die im Bericht beschriebene Diskussionsrunde besucht. Für den Newsletter deines Kulturvereins sollst du die Debatte zusammenfassen und kommentieren.',
      punkte: [
        'Fasse die Positionen der drei Diskutierenden knapp und sachlich zusammen.',
        'Stelle dar, wie sich die Haltung der Stadträtin im Verlauf der Diskussion verändert hat.',
        'Nimm begründet Stellung: Sollte die Stadt den freien Eintritt auf die ganze Woche ausweiten?',
      ],
      minWoerter: 80,
      beispielLoesung: 'In der Diskussionsrunde im Rathaus ging es um die Frage, ob die städtischen Museen künftig täglich freien Eintritt gewähren sollen. Museumsdirektor Adeyemi sprach sich klar dafür aus: Seit Einführung des freien Sonntags hätten sich die Besucherzahlen verdoppelt. Stadträtin Brandt widersprach zunächst, da ungedeckte Einnahmeausfälle Ausstellungen und Personal gefährdeten. Die Kulturwissenschaftlerin Hartmann gab zu bedenken, dass freier Eintritt nur in Verbindung mit Vermittlungsangeboten neues Publikum erreiche. Dieses Argument überzeugte offenbar auch Frau Brandt, die sich am Ende für ein Pilotjahr offen zeigte, sofern das Land sich an den Kosten beteiligt.\nMeiner Ansicht nach hat Frau Hartmann den entscheidenden Punkt benannt. Ein Pilotjahr halte ich für sinnvoll, allerdings nur, wenn ein Teil der Mittel gezielt in Führungen und Schulprojekte fließt. Andernfalls profitieren vor allem jene, die ohnehin ins Museum gehen.',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte einen Diskussionsbeitrag von etwa zweieinhalb Minuten. Knüpf an das Gesagte an, bevor du widersprichst, und beziehe am Ende klar Position.',
      aufgabe: 'Du nimmst an einer Diskussionsrunde zur Kulturpolitik deiner Stadt teil. Dein Vorredner hat soeben die These vertreten: „Öffentliche Bibliotheken sind im digitalen Zeitalter überflüssig; das Geld wäre anderswo besser angelegt.“ Halte dazu einen Diskussionsbeitrag von etwa zweieinhalb Minuten: Knüpf an das Gesagte an, bevor du widersprichst, begründe deinen Widerspruch und beziehe am Ende klar Position.',
      punkte: [
        'Nimm ausdrücklich Bezug auf deinen Vorredner und gib seine These knapp wieder.',
        'Gesteh ihm zu, was an seiner Beobachtung zutrifft.',
        'Widersprich ihm mit zwei Argumenten und veranschauliche eines davon an einem Beispiel.',
        'Beziehe zum Schluss klar Position.',
      ],
      redemittel: ['Mein Vorredner hat die These vertreten, dass …', 'In einem Punkt gebe ich Ihnen recht: …', 'Ihrer Schlussfolgerung muss ich allerdings entschieden widersprechen.', 'Das lässt sich an einem Beispiel veranschaulichen.'],
      maxSekunden: 150,
      beispielLoesung: 'Vielen Dank. Mein Vorredner hat die These vertreten, öffentliche Bibliotheken seien im digitalen Zeitalter überflüssig. In einem Punkt gebe ich Ihnen recht: Wer nur schnell eine Information sucht, geht heute nicht mehr in den Lesesaal, sondern greift zum Handy. Auch die Ausleihzahlen gedruckter Bücher gehen zurück, das will ich gar nicht bestreiten. Ihrer Schlussfolgerung muss ich allerdings entschieden widersprechen. Erstens ist eine Bibliothek längst mehr als ein Bücherlager. Sie ist einer der wenigen Orte in der Stadt, an denen man sich aufhalten kann, ohne etwas zu bezahlen. Das lässt sich an einem Beispiel veranschaulichen. In der Bibliothek in meinem Viertel sitzen nachmittags Schülerinnen und Schüler, die zu Hause kein eigenes Zimmer haben, neben Rentnern, die Zeitung lesen, und Zugewanderten, die dort Deutsch lernen. Wohin sollen diese Menschen gehen, wenn das Haus schließt? Zweitens ist das Digitale kein Ersatz, sondern eine zusätzliche Aufgabe. Nicht jeder kann sich Abonnements für Zeitungen, Datenbanken und Hörbücher leisten, und nicht jeder findet sich im Netz allein zurecht. Genau hier beraten Bibliotheken. Ich beziehe deshalb klar Position: Wer an den Bibliotheken spart, spart nicht an Büchern, sondern an Bildung und Begegnung. Statt sie zu schließen, sollten wir ihre Öffnungszeiten verlängern.',
    },
  ],
}
