"use client";

import { useRef, useState } from "react";

import { instrumentQuizQuestions, instrumentQuizResults, type InstrumentId, } from "@/data/instrument-quiz";

const instrumentIds: InstrumentId[] = [
  "flute",
  "clarinet",
  "saxophone",
  "trumpet",
  "trombone",
  "tuba",
  "percussion",
];

function calculateInstrumentResult(
  answers: Record<string, string>,
): InstrumentId {
  const scores: Record<InstrumentId, number> = {
    flute: 0,
    clarinet: 0,
    saxophone: 0,
    trumpet: 0,
    trombone: 0,
    tuba: 0,
    percussion: 0,
  };

  for (const question of instrumentQuizQuestions) {
    const selectedOptionId = answers[question.id];

    const selectedOption = question.options.find(
      (option) => option.id === selectedOptionId,
    );

    if (!selectedOption) {
      continue;
    }

    for (const instrumentId of instrumentIds) {
      scores[instrumentId] +=
        selectedOption.scores[instrumentId] ?? 0;
    }
  }

  return instrumentIds.reduce((bestInstrument, instrumentId) => {
    if (scores[instrumentId] > scores[bestInstrument]) {
      return instrumentId;
    }

    return bestInstrument;
  });
}

export function InstrumentQuiz() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [showResult, setShowResult] = useState(false);

  const currentQuestion =
  instrumentQuizQuestions[currentQuestionIndex];

  const selectedOptionId = answers[currentQuestion.id];

  const resultId = calculateInstrumentResult(answers);
  const result = instrumentQuizResults[resultId];

  const isFirstQuestion = currentQuestionIndex === 0;

  const isLastQuestion =
    currentQuestionIndex === instrumentQuizQuestions.length - 1;

  function selectOption(optionId: string) {
    setAnswers((currentAnswers) => ({
        ...currentAnswers,
        [currentQuestion.id]: optionId,
      }));
    }

  function openQuiz() {
    dialogRef.current?.showModal();
  }

  function closeQuiz() {
    dialogRef.current?.close();
  }

  function goToNextStep() {
  if (!selectedOptionId) {
    return;
  }

  if (isLastQuestion) {
    setShowResult(true);
    return;
  }
    setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
  }

    function goToPreviousStep() {
    if (showResult) {
        setShowResult(false);
        return;
    }

    setCurrentQuestionIndex((currentIndex) =>
        Math.max(currentIndex - 1, 0),
    );
    }

    function restartQuiz() {
        setAnswers({});
        setCurrentQuestionIndex(0);
        setShowResult(false);
    }


  return (
    <>
      <button
        type="button"
        onClick={openQuiz}
        className="inline-flex min-h-11 items-center justify-center rounded border border-burgundy px-5 py-3 font-semibold text-burgundy transition-colors hover:bg-burgundy hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        Otkrij instrument ♪
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="instrument-quiz-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeQuiz();
          }
        }}
        className="m-auto h-dvh max-h-none w-full max-w-none overflow-y-auto bg-cream p-0 text-charcoal backdrop:bg-charcoal/80 sm:h-auto sm:max-h-[calc(100dvh-2rem)] sm:w-[calc(100%-2rem)] sm:max-w-2xl sm:rounded-2xl"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Pronađi svoj zvuk
              </p>

              <h2
                id="instrument-quiz-title"
                className="mt-3 font-serif text-3xl italic text-burgundy sm:text-4xl"
              >
                Koji bi instrument mogao biti tvoj?
              </h2>
            </div>

            <button
              type="button"
              onClick={closeQuiz}
              aria-label="Zatvori kviz"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded text-2xl text-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              ×
            </button>
          </div>

          {showResult ? (
            <div className="mt-8 rounded-xl border border-gold/50 bg-white p-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Tvoj rezultat
                </p>

                <h3 className="mt-4 font-serif text-4xl italic text-burgundy">
                {result.name}
                </h3>

                <p className="mt-4 leading-relaxed text-charcoal/70">
                {result.description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a
                        href="#kontakt"
                        onClick={closeQuiz}
                        className="inline-flex min-h-11 items-center justify-center rounded bg-burgundy px-5 py-3 font-semibold text-gold"
                    >
                        Prijavi dolazak na probu
                    </a>

                    <button
                        type="button"
                        onClick={restartQuiz}
                        className="inline-flex min-h-11 items-center justify-center rounded border border-burgundy px-5 py-3 font-semibold text-burgundy"
                    >
                        Ponovi kviz
                    </button>
                </div>
            </div>
            ) : (
            <div className="mt-8 rounded-xl border border-gold/50 bg-white p-6">
              <p className="text-sm font-semibold text-gold">
                Pitanje {currentQuestionIndex + 1} od{" "}
                {instrumentQuizQuestions.length}
              </p>

              <fieldset className="mt-5">
                <legend className="font-serif text-2xl text-burgundy">
                  {currentQuestion.prompt}
                </legend>

                <div className="mt-6 grid gap-3">
                  {currentQuestion.options.map((option) => (
                    <label
                      key={option.id}
                      className="block cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={currentQuestion.id}
                        value={option.id}
                        checked={selectedOptionId === option.id}
                        onChange={() => selectOption(option.id)}
                        className="peer sr-only"
                      />

                      <span className="block rounded border border-gold/50 bg-cream px-4 py-3 text-burgundy transition-colors peer-checked:border-burgundy peer-checked:bg-burgundy peer-checked:text-gold peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
            )}

            {!showResult && (
              <div className="mt-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={goToPreviousStep}
                  disabled={isFirstQuestion}
                  className="inline-flex min-h-11 items-center justify-center rounded border border-burgundy px-5 py-3 font-semibold text-burgundy disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Natrag
                </button>

                <button
                  type="button"
                  onClick={goToNextStep}
                  disabled={!selectedOptionId}
                  className="inline-flex min-h-11 items-center justify-center rounded bg-burgundy px-5 py-3 font-semibold text-gold disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {isLastQuestion ? "Prikaži rezultat" : "Dalje"}
                </button>
              </div>
            )}

          <p className="mt-6 text-sm leading-relaxed text-charcoal/65">
            Rezultat je zabavna preporuka. Instrument ćete najbolje
            upoznati na probi s glazbenicima orkestra.
          </p>
        </div>
      </dialog>
    </>
  );
}