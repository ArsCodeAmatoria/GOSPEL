"use client";

import type { Question } from "@/lib/redtc/types";

const LETTERS = ["A", "B", "C", "D"];

export function AnswerOption({
  option,
  index,
  isSelected,
  isCorrect,
  showResult,
  onClick,
  disabled = false,
}: {
  option: Question["options"][0];
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  showResult: boolean;
  onClick: () => void;
  disabled?: boolean;
}) {
  const wrong = showResult && isSelected && !isCorrect;
  const right = showResult && isCorrect;
  const state = right ? "right" : wrong ? "wrong" : isSelected ? "picked" : "";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`redtc-opt${state ? ` ${state}` : ""}`}
    >
      <span className="mono redtc-opt-letter">
        {showResult && right ? "✓" : showResult && wrong ? "×" : LETTERS[index]}
      </span>
      <span>{option.text}</span>
      {showResult && (right || wrong) ? (
        <span className="mono steel">{right ? "Correct" : "Wrong"}</span>
      ) : null}
    </button>
  );
}
