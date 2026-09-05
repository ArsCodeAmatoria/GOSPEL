export function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  return (
    <div className="redtc-progress">
      <div className="redtc-progress-meta mono">
        <span>
          {current} of {total} answered
        </span>
        <span>{pct}%</span>
      </div>
      <div className="redtc-progress-track" aria-hidden>
        <div className="redtc-progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
