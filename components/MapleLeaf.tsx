"use client";

import { useEffect, useRef } from "react";

export function MapleDot() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const paint = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const box = canvas.getBoundingClientRect();
      const w = Math.max(64, Math.ceil(box.width * dpr));
      const h = Math.max(64, Math.ceil(box.height * dpr));
      canvas.width = w;
      canvas.height = h;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      ctx.clearRect(0, 0, w, h);
      ctx.font = `${Math.floor(h * 0.92)}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("🍁", w / 2, h / 2 + h * 0.04);

      const img = ctx.getImageData(0, 0, w, h);
      const px = img.data;
      const rgb = parseRgb(getComputedStyle(canvas).color);

      for (let i = 0; i < px.length; i += 4) {
        const alpha = px[i + 3];
        if (alpha < 24) {
          px[i + 3] = 0;
          continue;
        }
        px[i] = rgb[0];
        px[i + 1] = rgb[1];
        px[i + 2] = rgb[2];
        px[i + 3] = alpha > 140 ? 255 : alpha;
      }

      ctx.putImageData(img, 0, 0);
    };

    paint();
    const observer = new ResizeObserver(paint);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  return <canvas ref={ref} className="maple-dot" aria-hidden />;
}

function parseRgb(input: string): [number, number, number] {
  const match = input.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return [193, 18, 31];
  return [Number(match[1]), Number(match[2]), Number(match[3])];
}
