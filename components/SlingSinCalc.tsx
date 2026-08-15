"use client";

import { useMemo, useState } from "react";

function sinDeg(deg: number) {
  return Math.sin((deg * Math.PI) / 180);
}

export function SlingSinCalc() {
  const [load, setLoad] = useState("4000");
  const [angle, setAngle] = useState("60");
  const w = Number(load);
  const theta = Number(angle);

  const result = useMemo(() => {
    if (!Number.isFinite(w) || w <= 0) return null;
    if (!Number.isFinite(theta) || theta <= 0 || theta > 90) return null;
    const s = sinDeg(theta);
    if (s <= 0) return null;
    return {
      sin: s,
      factor: 1 / s,
      tension: w / (2 * s),
      low: theta < 30,
    };
  }, [w, theta]);

  return (
    <div className="wire-calc">
      <p className="mono steel">T = W / (2 × SIN θ)</p>
      <div className="wire-calc-fields">
        <label className="field">
          <span className="mono steel">LOAD W</span>
          <input
            type="number"
            min="1"
            step="any"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            inputMode="decimal"
          />
        </label>
        <label className="field">
          <span className="mono steel">ANGLE θ FROM HORIZONTAL</span>
          <input
            type="number"
            min="1"
            max="90"
            step="1"
            value={angle}
            onChange={(e) => setAngle(e.target.value)}
            inputMode="decimal"
          />
        </label>
      </div>
      {result ? (
        <dl className="wire-calc-out">
          <div>
            <dt className="mono">sin(θ)</dt>
            <dd className="display">{result.sin.toFixed(3)}</dd>
          </div>
          <div>
            <dt className="mono">1 / sin(θ)</dt>
            <dd className="display">{result.factor.toFixed(3)}</dd>
          </div>
          <div>
            <dt className="mono">T PER LEG</dt>
            <dd className="display">{formatTension(result.tension)}</dd>
          </div>
        </dl>
      ) : (
        <p className="steel mt">Enter a load and an angle between 1° and 90°.</p>
      )}
      {result?.low ? (
        <p className="wire-calc-warn mono">
          BELOW 30° WE DO NOT RIG THIS WAY UNLESS AN ENGINEER OWNS THE NUMBERS.
        </p>
      ) : null}
      <p className="mono steel wire-calc-note">
        Two equal legs. Centre of gravity in the middle. Vertical lift. Units of
        T match units of W.
      </p>
    </div>
  );
}

function formatTension(n: number) {
  if (n >= 100) return n.toFixed(0);
  if (n >= 10) return n.toFixed(1);
  return n.toFixed(2);
}
