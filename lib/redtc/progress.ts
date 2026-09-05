import type { Question, TestResult } from "./types";

export type CategoryScore = {
  attempted: number;
  correct: number;
};

export type DisciplineProgress = {
  attempted: number;
  correct: number;
  byCategory: Record<string, CategoryScore>;
  masterAttempts: number;
  masterBest: number | null;
};

const EMPTY: DisciplineProgress = {
  attempted: 0,
  correct: 0,
  byCategory: {},
  masterAttempts: 0,
  masterBest: null,
};

export function loadProgress(key: string): DisciplineProgress {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as DisciplineProgress;
    return {
      ...EMPTY,
      ...parsed,
      byCategory: parsed.byCategory || {},
    };
  } catch {
    return EMPTY;
  }
}

function saveProgress(key: string, data: DisciplineProgress) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    /* ignore quota */
  }
}

function applySit(
  prev: DisciplineProgress,
  questions: Question[],
  results: TestResult,
): DisciplineProgress {
  const next: DisciplineProgress = {
    ...prev,
    attempted: prev.attempted + questions.length,
    correct: prev.correct + results.correctCount,
    byCategory: { ...prev.byCategory },
  };

  for (const question of questions) {
    const label = question.category || "Uncategorized";
    const bucket = next.byCategory[label] || { attempted: 0, correct: 0 };
    bucket.attempted += 1;
    if (results.answers[question.id]?.isCorrect) bucket.correct += 1;
    next.byCategory[label] = bucket;
  }

  return next;
}

export function recordPractice(
  key: string,
  questions: Question[],
  results: TestResult,
): DisciplineProgress {
  const next = applySit(loadProgress(key), questions, results);
  saveProgress(key, next);
  return next;
}

export function recordMaster(
  key: string,
  questions: Question[],
  results: TestResult,
): DisciplineProgress {
  const next = applySit(loadProgress(key), questions, results);
  next.masterAttempts += 1;
  next.masterBest =
    next.masterBest == null ? results.percentage : Math.max(next.masterBest, results.percentage);
  saveProgress(key, next);
  return next;
}

export function weakestCategories(progress: DisciplineProgress, limit = 4) {
  return Object.entries(progress.byCategory)
    .filter(([, score]) => score.attempted > 0)
    .map(([name, score]) => ({
      name,
      attempted: score.attempted,
      correct: score.correct,
      pct: Math.round((score.correct / score.attempted) * 100),
    }))
    .sort((a, b) => a.pct - b.pct || b.attempted - a.attempted)
    .slice(0, limit);
}
