"use client";

import { useMemo, useState } from "react";

function rad(deg: number) {
  return (deg * Math.PI) / 180;
}

export function BoomTrigCalc() {
  const [length, setLength] = useState("30");
  const [angle, setAngle] = useState("60");
  const [offset, setOffset] = useState("0");
  const l = Number(length);
  const theta = Number(angle);
  const d = Number(offset);

  const result = useMemo(() => {
    if (!Number.isFinite(l) || l <= 0) return null;
    if (!Number.isFinite(theta) || theta <= 0 || theta >= 90) return null;
    const s = Math.sin(rad(theta));
    const c = Math.cos(rad(theta));
    const height = l * s;
    const radiusPin = l * c;
    const radiusSlew = (Number.isFinite(d) ? d : 0) + radiusPin;
    return {
      sin: s,
      cos: c,
      height,
      radiusPin,
      radiusSlew,
      hasOffset: Number.isFinite(d) && d > 0,
      flat: theta < 40,
    };
  }, [l, theta, d]);

  return (
    <div className="wire-calc">
      <p className="mono steel">H = L × SIN θ &nbsp;&nbsp; R = L × COS θ</p>
      <div className="wire-calc-fields">
        <label className="field">
          <span className="mono steel">BOOM LENGTH L</span>
          <input
            type="number"
            min="1"
            step="any"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            inputMode="decimal"
          />
        </label>
        <label className="field">
          <span className="mono steel">ANGLE θ FROM HORIZONTAL</span>
          <input
            type="number"
            min="1"
            max="89"
            step="1"
            value={angle}
            onChange={(e) => setAngle(e.target.value)}
            inputMode="decimal"
          />
        </label>
      </div>
      <div className="wire-calc-fields">
        <label className="field">
          <span className="mono steel">PIN OFFSET D FROM SLEW — OPTIONAL</span>
          <input
            type="number"
            min="0"
            step="any"
            value={offset}
            onChange={(e) => setOffset(e.target.value)}
            inputMode="decimal"
          />
        </label>
      </div>
      {result ? (
        <dl className="wire-calc-out is-quad">
          <div>
            <dt className="mono">sin(θ)</dt>
            <dd className="display">{result.sin.toFixed(3)}</dd>
          </div>
          <div>
            <dt className="mono">cos(θ)</dt>
            <dd className="display">{result.cos.toFixed(3)}</dd>
          </div>
          <div>
            <dt className="mono">HEIGHT H ABOVE PIN</dt>
            <dd className="display">{formatLen(result.height)}</dd>
          </div>
          <div>
            <dt className="mono">
              {result.hasOffset ? "RADIUS FROM SLEW" : "RADIUS FROM PIN"}
            </dt>
            <dd className="display">
              {formatLen(result.hasOffset ? result.radiusSlew : result.radiusPin)}
            </dd>
          </div>
        </dl>
      ) : (
        <p className="steel mt">Enter a boom length and an angle between 1° and 89°.</p>
      )}
      {result?.flat ? (
        <p className="wire-calc-warn mono">
          LOW ANGLE MEANS LONG RADIUS. CAPACITY USUALLY FALLS. THIS IS NOT THE
          CHART.
        </p>
      ) : null}
      <p className="mono steel wire-calc-note">
        Straight main boom. θ from horizontal. Units of H and R match L. Chart
        radius still needs the range diagram for that crane.
      </p>
    </div>
  );
}

function formatLen(n: number) {
  if (n >= 100) return n.toFixed(0);
  if (n >= 10) return n.toFixed(1);
  return n.toFixed(2);
}
