/**
 * Goethe-Zertifikat C2 — Hören
 *
 * Offiziell: 4 Teile, ~28 Items, 35 min, pass = 60%.
 * Kompakte Version: 2 Teile, 10 Items, pass bei 6.
 *   Teil 1: Komplexes Interview, MC, 2x hören
 *   Teil 2: Akademischer Vortrag, R/F, 1x hören
 */

export const goetheC2HoerenExams = [
  {
    id: 'goethe-c2-hoeren-modellsatz-1',
    provider: 'goethe',
    level: 'C2',
    module: 'hoeren',
    title: 'Goethe C2 — Hören · Modellsatz 1',
    description: 'Anspruchsvolles Hörverstehen mit Interview und akademischem Vortrag.',
    durationMinutes: 35,
    maxScore: 10,
    passScore: 6,
    parts: [
      /* ─────────── TEIL 1 ─────────── */
      {
        id: 'teil-1',
        title: 'Teil 1 — Interview',
        instructions: 'Du hörst ein Interview mit der Philosophin Prof. Dr. Hannah Lehmann über das Thema „Verantwortung im digitalen Zeitalter". Du hörst das Interview zweimal. Wähle die richtige Lösung a, b oder c.',
        context: {
          type: 'audio',
          allowedPlays: 2,
          label: 'Interview: Verantwortung im digitalen Zeitalter',
          audioUrl: '/audio/pruefungen/goethe-c2-hoeren-modellsatz-1/teil-1.mp3',
          transcript:
            `Interviewer: „Frau Professor Lehmann, Sie haben kürzlich ein vielbeachtetes Buch über Verantwortung im digitalen Zeitalter veröffentlicht. Was hat Sie zu diesem Thema gebracht?"

Prof. Dr. Lehmann: „Ausgangspunkt war ein Erlebnis, das mich nachdenklich gemacht hat. Eine Studentin erzählte mir, sie habe eine wichtige Hausarbeit zu großen Teilen von einer KI schreiben lassen — und fühlte sich dabei nicht im Geringsten verantwortlich für das Ergebnis. Diese Entkopplung von Handlung und Verantwortung ist meines Erachtens die zentrale ethische Herausforderung unserer Zeit."

Interviewer: „Aber ist das wirklich neu? Schon immer haben Menschen Werkzeuge benutzt, ohne sich für jedes Detail verantwortlich zu fühlen."

Prof. Dr. Lehmann: „Das ist ein berechtigter Einwand. Allerdings gibt es einen entscheidenden Unterschied: Frühere Werkzeuge waren passiv. Eine Schreibmaschine schreibt nicht selbst. Eine KI hingegen trifft eigenständige Entscheidungen, die wir oft gar nicht mehr nachvollziehen können. Sie ist ein Akteur, kein bloßes Instrument. Und genau deshalb verschwimmen die klassischen Kategorien von Handlung, Absicht und Schuld."

Interviewer: „Sehen Sie eine Lösung?"

Prof. Dr. Lehmann: „Eine einfache Lösung gibt es nicht. Was wir aber dringend brauchen, ist eine neue Verantwortungsethik, die diese Hybridität anerkennt. Es geht nicht mehr darum, einen einzelnen Schuldigen zu finden, sondern Verantwortlichkeiten innerhalb komplexer Mensch-Maschine-Systeme zu verteilen — und zwar in voller Transparenz."

Interviewer: „Klingt theoretisch sehr anspruchsvoll. Was bedeutet das konkret?"

Prof. Dr. Lehmann: „Ganz konkret: Wer eine KI einsetzt, muss verstehen, was sie tut, und bereit sein, für ihre Ergebnisse einzustehen. Universitäten müssen neue Prüfungsformate entwickeln, die nicht nur Wissen abfragen, sondern den Umgang mit KI reflektieren. Und Unternehmen, die Algorithmen einsetzen — etwa bei Personalentscheidungen — müssen für deren Folgen haften, auch wenn sie das System nicht selbst programmiert haben."

Interviewer: „Sie fordern also eine Art kollektive Verantwortung?"

Prof. Dr. Lehmann: „Eher eine verteilte Verantwortung. Nicht jeder ist gleich verantwortlich, aber alle Beteiligten — Entwickler, Anwender, Aufsichtsbehörden — tragen einen Teil der Last. Und genau hier versagt das aktuelle Recht: Es kennt nur klassische Schuldzuschreibungen und hinkt der Realität meilenweit hinterher."`,
        },
        questions: [
          {
            id: 'c2h1-1',
            type: 'multiple-choice',
            prompt: 'Was war für Prof. Dr. Lehmann der Auslöser ihres Buches?',
            options: [
              { id: 'a', text: 'Eine Studie über KI in Unternehmen.' },
              { id: 'b', text: 'Eine Studentin, die KI ohne Verantwortungsgefühl einsetzte.' },
              { id: 'c', text: 'Ein Streit mit einem Kollegen.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'c2h1-2',
            type: 'multiple-choice',
            prompt: 'Worin besteht laut Lehmann der entscheidende Unterschied zwischen früheren Werkzeugen und KI?',
            options: [
              { id: 'a', text: 'KI ist schneller.' },
              { id: 'b', text: 'KI ist ein Akteur, der eigenständig Entscheidungen trifft.' },
              { id: 'c', text: 'KI ist billiger als menschliche Arbeit.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'c2h1-3',
            type: 'multiple-choice',
            prompt: 'Welche Lösung schlägt sie vor?',
            options: [
              { id: 'a', text: 'KI sollte komplett verboten werden.' },
              { id: 'b', text: 'Eine neue Verantwortungsethik, die Verantwortlichkeiten verteilt.' },
              { id: 'c', text: 'Nur Programmierer sollten haften.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'c2h1-4',
            type: 'multiple-choice',
            prompt: 'Was sollen Universitäten laut Lehmann tun?',
            options: [
              { id: 'a', text: 'KI an Universitäten verbieten.' },
              { id: 'b', text: 'Neue Prüfungsformate entwickeln, die den Umgang mit KI reflektieren.' },
              { id: 'c', text: 'Keine Hausarbeiten mehr verlangen.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'c2h1-5',
            type: 'multiple-choice',
            prompt: 'Was kritisiert sie am aktuellen Recht?',
            options: [
              { id: 'a', text: 'Es ist zu streng.' },
              { id: 'b', text: 'Es kennt nur klassische Schuldzuschreibungen und passt nicht zur Realität.' },
              { id: 'c', text: 'Es ist international zu unterschiedlich.' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 2 ─────────── */
      {
        id: 'teil-2',
        title: 'Teil 2 — Akademischer Vortrag',
        instructions: 'Du hörst einen akademischen Vortrag über das Thema „Mehrsprachigkeit im Gehirn". Du hörst den Vortrag einmal. Entscheide, ob die Aussagen richtig oder falsch sind.',
        context: {
          type: 'audio',
          allowedPlays: 1,
          label: 'Vortrag: Mehrsprachigkeit im Gehirn',
          audioUrl: '/audio/pruefungen/goethe-c2-hoeren-modellsatz-1/teil-2.mp3',
          transcript:
            `„Sehr verehrte Kolleginnen und Kollegen, in den nächsten Minuten möchte ich Ihnen einige Erkenntnisse aus der jüngeren neurolinguistischen Forschung vorstellen, die unser Verständnis von Mehrsprachigkeit grundlegend verändert haben.

Lange Zeit ging man davon aus, dass mehrsprachig aufwachsende Kinder einen Nachteil hätten. Es hieß, sie würden Sprachen 'vermischen', langsamer sprechen lernen oder sogar geistig 'verwirrt' werden. Diese Vorstellungen gelten heute als wissenschaftlich widerlegt. Neuere Studien zeigen das Gegenteil: Mehrsprachige Kinder verfügen über kognitive Vorteile, die ihre einsprachigen Altersgenossen oft nicht haben.

Besonders bemerkenswert ist die sogenannte exekutive Funktion. Mehrsprachige müssen ständig zwischen ihren Sprachen wechseln und Interferenzen unterdrücken — eine Art mentales Training, das im Alltag wie ein ständiger Aufmerksamkeitstest wirkt. Studien aus Toronto und Barcelona haben gezeigt, dass dieses Training die Konzentrationsfähigkeit verbessert und sogar das Auftreten von Demenzsymptomen im Alter um durchschnittlich vier bis fünf Jahre verzögern kann.

Allerdings darf man die Vorteile nicht romantisieren. Mehrsprachigkeit allein macht nicht intelligenter, und nicht alle Studien bestätigen die positiven Effekte gleich deutlich. Eine aktuelle Metaanalyse aus dem Jahr 2022 wies darauf hin, dass viele frühere Befunde mit kleinen Stichproben gewonnen wurden und teils nicht replizierbar sind. Die Effekte existieren, sind aber kleiner und stärker kontextabhängig als ursprünglich angenommen.

Eine zweite wichtige Frage betrifft den Zeitpunkt des Spracherwerbs. Die berühmte 'kritische Periode' — also die These, dass Sprachen vor dem 12. Lebensjahr besonders gut erworben werden — ist heute differenzierter zu sehen. Aussprache und intuitives Grammatikgefühl scheinen tatsächlich von einem frühen Beginn zu profitieren. Wortschatz und Lesekompetenz hingegen lassen sich in jedem Alter erwerben, mit ausreichend Übung sogar sehr erfolgreich.

Mein persönliches Fazit: Wer die Möglichkeit hat, Kinder mehrsprachig aufwachsen zu lassen, sollte das tun — nicht primär wegen vermeintlicher kognitiver 'Boni', sondern weil Sprachen Türen zu Kulturen und Menschen öffnen. Vielen Dank für Ihre Aufmerksamkeit."`,
        },
        questions: [
          { id: 'c2h2-1', type: 'true-false', statement: 'Früher dachte man, mehrsprachige Kinder hätten einen Nachteil.', correct: true, points: 1 },
          { id: 'c2h2-2', type: 'true-false', statement: 'Mehrsprachigkeit kann Demenzsymptome um mehrere Jahre verzögern.', correct: true, points: 1 },
          { id: 'c2h2-3', type: 'true-false', statement: 'Eine Metaanalyse von 2022 hat alle früheren Vorteile glänzend bestätigt.', correct: false, points: 1 },
          { id: 'c2h2-4', type: 'true-false', statement: 'Wortschatz und Lesekompetenz lassen sich in jedem Alter gut erwerben.', correct: true, points: 1 },
          { id: 'c2h2-5', type: 'true-false', statement: 'Der Vortragende rät davon ab, Kinder mehrsprachig aufwachsen zu lassen.', correct: false, points: 1 },
        ],
      },
    ],
  },
]
