"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "@/components/redtc/ProgressBar";
import { QuestionCard } from "@/components/redtc/QuestionCard";
import { RedtcNav } from "@/components/redtc/RedtcNav";
import { allQuestions, REDMC_PROGRESS_KEY, REDMC_SEEN_KEY } from "@/lib/redmc/bank";
import { MOBILE_EXAM_SHORT, MOBILE_EXAM_TRACKS, mobileTrackAvailable, selectMobileTrackQuestions } from "@/lib/redmc/exam-tracks";
import type { ExamTrack } from "@/lib/redtc/exam-tracks";
import { recordPractice } from "@/lib/redtc/progress";
import { useTest } from "@/lib/redtc/use-test";

const questions = allQuestions();

function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (minutes > 0) return `${minutes}m ${remainingSeconds}s`;
  return `${remainingSeconds}s`;
}

export default function RedmcTestPage() {
  const [hasStarted, setHasStarted] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<ExamTrack["id"]>("practice");
  const track = MOBILE_EXAM_TRACKS.find((t) => t.id === selectedTrack)!;
  const recorded = useRef(false);

  const {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    showExplanation,
    isComplete,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    resetTest,
    initializeTest,
    testQuestions,
    results,
    answeredCount,
    totalQuestions,
    totalQuestionsInBank,
    canGoNext,
    canGoPrevious,
    isLastQuestion,
    passPercentage,
    totalTestTime,
    timingStats,
  } = useTest(questions, {
    questionsPerTest: Math.min(track.questions, Math.max(1, questions.length)),
    passPercentage: track.passPercent,
    seenKey: REDMC_SEEN_KEY,
  });

  useEffect(() => {
    if (isComplete && !recorded.current) {
      recorded.current = true;
      recordPractice(REDMC_PROGRESS_KEY, testQuestions, results);
    }
  }, [isComplete, testQuestions, results]);

  const start = () => {
    recorded.current = false;
    const paper = selectMobileTrackQuestions(questions, selectedTrack);
    if (!paper.length) return;
    initializeTest(paper);
    setHasStarted(true);
  };

  if (!hasStarted) {
    const paperSize = mobileTrackAvailable(questions, selectedTrack);
    return (
      <div className="redtc wrap">
        <header className="page-hero">
          <p className="mono kicker">REDMC — PRACTICE</p>
          <h1 className="display giant">CHOOSE A PAPER.</h1>
          <p className="lede mt-2">
            BC Provisional, Level 1, Level 2 technical, Level 3, Red Seal IP.
            Every question is tagged. Empty tracks stay empty until questions exist.
          </p>
          <RedtcNav />
        </header>
        <div className="redtc-tracks">
          {MOBILE_EXAM_TRACKS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`redtc-track${item.id === selectedTrack ? " active" : ""}`}
              onClick={() => setSelectedTrack(item.id)}
            >
              <span className="mono steel">{item.questions} Q · {item.passPercent}%</span>
              <strong className="display">{item.title}</strong>
              <em>{item.subtitle}</em>
            </button>
          ))}
        </div>
        <p className="lede mt-2">{track.body}</p>
        <div className="place mt-2">
          <article>
            <span className="mono steel">THIS PAPER</span>
            <h3 className="display">{paperSize}</h3>
          </article>
          <article>
            <span className="mono steel">TO PASS</span>
            <h3 className="display">{track.passPercent}%</h3>
          </article>
          <article>
            <span className="mono steel">IN BANK</span>
            <h3 className="display">{questions.length}</h3>
          </article>
        </div>
        <div className="inline-cta">
          <button type="button" className="btn btn-solid" onClick={start} disabled={!paperSize}>
            {paperSize ? `Start ${track.title}` : "No questions tagged yet"}
          </button>
          <Link className="btn btn-ghost" href="/redmc">
            Back to REDMC
          </Link>
        </div>
      </div>
    );
  }

  if (isComplete) {
    const passed = results.passed;
    return (
      <div className="redtc wrap">
        <header className="page-hero">
          <p className="mono kicker">{passed ? "Passed" : "Not passed"}</p>
          <h1 className="display giant">{results.percentage}%</h1>
          <p className="lede mt">
            {passed
              ? "Solid. Sit another paper or take the master exam."
              : `${passPercentage}% to pass. Read what you missed. Sit it again.`}
          </p>
          <RedtcNav />
        </header>
        <div className="place">
          <article>
            <span className="mono steel">CORRECT</span>
            <h3 className="display">{results.correctCount}</h3>
          </article>
          <article>
            <span className="mono steel">WRONG</span>
            <h3 className="display">{results.incorrectCount}</h3>
          </article>
          <article>
            <span className="mono steel">TIME</span>
            <h3 className="display">{formatTime(totalTestTime)}</h3>
          </article>
          <article>
            <span className="mono steel">AVG / Q</span>
            <h3 className="display">{formatTime(timingStats.average)}</h3>
          </article>
        </div>
        <p className="steel mt">
          {totalQuestions} questions · {passPercentage}% pass · {totalQuestionsInBank} in bank ·
          fastest {formatTime(timingStats.fastest)} · slowest {formatTime(timingStats.slowest)}
        </p>
        <div className="inline-cta">
          <button
            type="button"
            className="btn btn-solid"
            onClick={() => {
              recorded.current = false;
              resetTest();
            }}
          >
            {passed ? "Practice again" : "Try again"}
          </button>
          <Link className="btn btn-ghost" href="/redmc/test/master">
            Master exam
          </Link>
          <Link className="btn btn-ghost" href="/redmc/test/review">
            Review bank
          </Link>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="redtc wrap">
        <p className="lede">Loading questions…</p>
      </div>
    );
  }

  return (
    <div className="redtc wrap redtc-sit">
      <div className="redtc-sit-bar">
        <p className="mono steel">{passPercentage}% to pass</p>
        <RedtcNav />
        <ProgressBar current={answeredCount} total={totalQuestions} />
      </div>
      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        showExplanation={showExplanation}
        onSelectAnswer={selectAnswer}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        examShort={MOBILE_EXAM_SHORT}
        pdfBase="/redmc/charts"
      />
      <div className="redtc-sit-nav">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={previousQuestion}
          disabled={!canGoPrevious}
        >
          Previous
        </button>
        <span className="mono steel">
          {currentQuestionIndex + 1} / {totalQuestions}
        </span>
        <button
          type="button"
          className={`btn ${canGoNext && isLastQuestion ? "btn-solid" : "btn-ghost"}`}
          onClick={nextQuestion}
          disabled={!canGoNext}
        >
          {isLastQuestion ? "Finish" : "Next"}
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            recorded.current = false;
            resetTest();
            setHasStarted(false);
          }}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}
