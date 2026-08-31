"use client";

import { useCallback, useEffect, useRef } from "react";

/** Intrinsic PNG space for luffer-tower-crane.png (862×1509). */
const NAT_W = 862;
const NAT_H = 1509;
const TIP_X = 826;
const TIP_Y = 53;
const HOOK_X = 814;
const HOOK_Y = 279;
const HOOK_W = 25;
const HOOK_H = 98;
const DRAWING_BOTTOM = 1484;
const TRAVEL = DRAWING_BOTTOM - (HOOK_Y + HOOK_H);

function objectPosAxes(value: string): [number, number] {
  const named: Record<string, number> = {
    left: 0,
    center: 0.5,
    right: 1,
    top: 0,
    bottom: 1,
  };
  const axis = (token: string | undefined, fallback: number) => {
    if (!token) return fallback;
    if (token in named) return named[token];
    if (token.endsWith("%")) return Number.parseFloat(token) / 100;
    return fallback;
  };
  const [x, y] = value.trim().split(/\s+/);
  return [axis(x, 0), axis(y, 1)];
}

function containOffset(
  boxW: number,
  boxH: number,
  pos: string,
): { scale: number; ox: number; oy: number } {
  const scale = Math.min(boxW / NAT_W, boxH / NAT_H);
  const dw = NAT_W * scale;
  const dh = NAT_H * scale;
  const [px, py] = objectPosAxes(pos);
  return {
    scale,
    ox: (boxW - dw) * px,
    oy: (boxH - dh) * py,
  };
}

export function LeadCrane() {
  const figureRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const layout = useCallback(() => {
    const figure = figureRef.current;
    const img = imgRef.current;
    if (!figure || !img) return;

    const boxW = img.clientWidth;
    const boxH = img.clientHeight;
    if (boxW < 2 || boxH < 2) return;

    const pos = getComputedStyle(img).objectPosition;
    const { scale, ox, oy } = containOffset(boxW, boxH, pos);
    const lineW = Math.max(1, 3 * scale);

    figure.style.setProperty("--crane-scale", String(scale));
    figure.style.setProperty("--line-x", `${ox + TIP_X * scale - lineW / 2}px`);
    figure.style.setProperty("--line-top", `${oy + TIP_Y * scale}px`);
    figure.style.setProperty("--line-width", `${lineW}px`);
    figure.style.setProperty(
      "--line-rest",
      `${Math.max(0, (HOOK_Y - TIP_Y) * scale)}px`,
    );
    figure.style.setProperty("--hook-left", `${ox + HOOK_X * scale}px`);
    figure.style.setProperty("--hook-top", `${oy + HOOK_Y * scale}px`);
    figure.style.setProperty("--hook-width", `${HOOK_W * scale}px`);
    figure.style.setProperty("--hook-travel", `${TRAVEL * scale}px`);
    figure.dataset.ready = "true";
  }, []);

  useEffect(() => {
    layout();
    const img = imgRef.current;
    const ro = new ResizeObserver(layout);
    if (img) ro.observe(img);
    window.addEventListener("resize", layout);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", layout);
    };
  }, [layout]);

  useEffect(() => {
    const figure = figureRef.current;
    if (!figure) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;

    const write = () => {
      if (reduce.matches) {
        figure.style.setProperty("--hoist", "0");
        return;
      }
      const range = Math.max(160, window.innerHeight * 0.36);
      const hoist = Math.min(1, Math.max(0, window.scrollY / range));
      figure.style.setProperty("--hoist", String(hoist));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(write);
    };

    write();
    window.addEventListener("scroll", onScroll, { passive: true });
    reduce.addEventListener("change", write);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      reduce.removeEventListener("change", write);
    };
  }, []);

  return (
    <figure className="lead-crane" ref={figureRef}>
      <div className="lead-crane-stage">
        <img
          ref={imgRef}
          className="lead-crane-body"
          src="/illustrations/luffer-tower-crane.png"
          alt="Luffing jib tower crane, technical illustration"
          width={NAT_W}
          height={NAT_H}
          onLoad={layout}
        />
        <span className="lead-crane-line" aria-hidden />
        <img
          className="lead-crane-hook"
          src="/illustrations/luffer-hook.png"
          alt=""
          width={HOOK_W}
          height={HOOK_H}
          aria-hidden
        />
      </div>
    </figure>
  );
}
