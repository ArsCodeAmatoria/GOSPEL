"use client";

import { useEffect, useState } from "react";
import { REDMC_PROGRESS_KEY } from "@/lib/redmc/bank";
import { loadProgress, weakestCategories, type DisciplineProgress } from "@/lib/redtc/progress";

export function MobileProgress() {
  const [progress, setProgress] = useState<DisciplineProgress | null>(null);

  useEffect(() => {
    setProgress(loadProgress(REDMC_PROGRESS_KEY));
  }, []);

  if (!progress || (progress.attempted === 0 && progress.masterAttempts === 0)) {
    return null;
  }

  const pct = progress.attempted
    ? Math.round((progress.correct / progress.attempted) * 100)
    : 0;
  const weak = weakestCategories(progress, 3);

  return (
    <section className="section wrap">
      <p className="mono kicker">Mobile Crane progress</p>
      <p className="lede mt-2">
        Separate from Tower Crane. Stored on this device only.
      </p>
      <div className="place mt-2">
        <article>
          <span className="mono steel">Attempted</span>
          <h3 className="display">{progress.attempted}</h3>
        </article>
        <article>
          <span className="mono steel">Correct</span>
          <h3 className="display">{progress.correct}</h3>
        </article>
        <article>
          <span className="mono steel">Percent</span>
          <h3 className="display">{pct}%</h3>
        </article>
        <article>
          <span className="mono steel">Master best</span>
          <h3 className="display">
            {progress.masterBest == null ? "—" : `${progress.masterBest}%`}
          </h3>
        </article>
      </div>
      {weak.length > 0 ? (
        <ul className="std-list mt-2">
          {weak.map((item) => (
            <li key={item.name}>
              <h3 className="display">{item.name}</h3>
              <p>
                {item.pct}% · {item.correct}/{item.attempted} · study this
              </p>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
