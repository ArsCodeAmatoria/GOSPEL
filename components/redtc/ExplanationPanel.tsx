"use client";

import type { Question } from "@/lib/redtc/types";

export function ExplanationPanel({
  question,
  isVisible,
}: {
  question: Question;
  selectedAnswer: string | null;
  isVisible: boolean;
}) {
  if (!isVisible) return null;
  const correct = question.options.find((opt) => opt.id === question.correctAnswer);

  return (
    <div className="redtc-explain">
      <p className="mono kicker">Explanation</p>
      <p>
        <strong>{correct?.text}</strong>
        {correct?.explanation ? ` — ${correct.explanation}` : ""}
      </p>
      <p className="mono steel mt">Why the others are wrong</p>
      {question.options
        .filter((opt) => opt.id !== question.correctAnswer)
        .map((opt) => (
          <p key={opt.id}>
            <strong>{opt.text}</strong>
            {opt.explanation ? ` — ${opt.explanation}` : ""}
          </p>
        ))}
      {question.src ? (
        <p className="steel mt">
          <strong>Source. </strong>
          {question.src}
        </p>
      ) : null}
    </div>
  );
}
