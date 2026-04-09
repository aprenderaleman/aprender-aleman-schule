import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../UI/Button'
import { CheckCircle, XCircle } from 'lucide-react'

export default function GrammarExercise({ exercise, userName, onComplete }) {
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [dragOrder, setDragOrder] = useState(exercise.subtype === 'reorder' ? exercise.options : [])

  const isCorrect = selected === exercise.answer || (exercise.subtype === 'reorder' && dragOrder.join(' ') === exercise.answer)

  const handleSubmit = () => {
    if (!selected && exercise.subtype !== 'reorder') return
    setSubmitted(true)
    const correct = exercise.subtype === 'reorder'
      ? dragOrder.join(' ') === exercise.answer
      : selected === exercise.answer

    onComplete({
      correct,
      selected: exercise.subtype === 'reorder' ? dragOrder.join(' ') : selected,
      answer: exercise.answer,
      explanation: exercise.explanation,
    })
  }

  if (exercise.subtype === 'reorder') {
    return (
      <div className="space-y-6">
        <p className="text-gray-700 dark:text-gray-200 text-lg font-medium">{exercise.question}</p>

        <div className="min-h-14 bg-orange-50 dark:bg-orange-900/20 border-2 border-dashed border-orange-300 dark:border-orange-600 rounded-xl p-3 flex flex-wrap gap-2">
          {dragOrder.map((word, i) => (
            <button
              key={i}
              onClick={() => {
                if (submitted) return
                setDragOrder(prev => prev.filter((_, idx) => idx !== i))
              }}
              disabled={submitted}
              className="px-3 py-1.5 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors disabled:cursor-default"
            >
              {word}
            </button>
          ))}
        </div>

        {!submitted && (
          <Button onClick={handleSubmit} variant="primary" className="w-full">
            Comprobar
          </Button>
        )}

        {submitted && (
          <FeedbackBlock correct={isCorrect} explanation={exercise.explanation} answer={exercise.answer} userName={userName} />
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{exercise.question}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {exercise.options.map((option, i) => {
          let optClass = 'border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-orange-400'
          if (submitted) {
            if (option === exercise.answer) optClass = 'border-2 border-green-500 bg-green-50 dark:bg-green-900/30'
            else if (option === selected && option !== exercise.answer) optClass = 'border-2 border-red-400 bg-red-50 dark:bg-red-900/30'
            else optClass = 'border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 opacity-60'
          } else if (selected === option) {
            optClass = 'border-2 border-orange-500 bg-orange-50 dark:bg-orange-900/30'
          }

          return (
            <motion.button
              key={i}
              whileTap={{ scale: submitted ? 1 : 0.98 }}
              onClick={() => !submitted && setSelected(option)}
              disabled={submitted}
              aria-pressed={selected === option}
              className={`p-4 rounded-xl text-left font-medium text-gray-800 dark:text-gray-100 transition-all ${optClass} disabled:cursor-default`}
            >
              <span className="mr-2 font-bold text-gray-400">{String.fromCharCode(65 + i)}.</span>
              {option}
            </motion.button>
          )
        })}
      </div>

      {!submitted && (
        <Button onClick={handleSubmit} disabled={!selected} variant="primary" className="w-full">
          Comprobar respuesta
        </Button>
      )}

      <AnimatePresence>
        {submitted && (
          <FeedbackBlock
            correct={isCorrect}
            explanation={exercise.explanation}
            answer={exercise.answer}
            userName={userName}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

function FeedbackBlock({ correct, explanation, answer, userName }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl p-4 ${correct ? 'bg-green-50 dark:bg-green-900/30 border border-green-300 dark:border-green-700' : 'bg-red-50 dark:bg-red-900/30 border border-red-300 dark:border-red-700'}`}
    >
      <div className="flex items-start gap-3">
        {correct
          ? <CheckCircle className="text-green-500 mt-0.5 shrink-0" size={22} />
          : <XCircle className="text-red-500 mt-0.5 shrink-0" size={22} />
        }
        <div>
          <p className={`font-bold mb-1 ${correct ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
            {correct
              ? `¡Muy bien, ${userName}!`
              : `Casi, ${userName}. La respuesta correcta es "${answer}"`
            }
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{explanation}</p>
        </div>
      </div>
    </motion.div>
  )
}
