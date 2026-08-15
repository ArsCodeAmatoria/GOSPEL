"use client";

import { useEffect, useState } from "react";

function readTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export function ThemeSwitch() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  function toggle() {
    const next = readTheme() === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("whoop-theme", next);
    } catch {
      /* ignore */
    }
  }

  const lightsOn = theme === "light";

  return (
    <button
      type="button"
      className="switch"
      role="switch"
      aria-checked={lightsOn}
      aria-label={lightsOn ? "Lights on. Switch to dark mode." : "Lights off. Switch to light mode."}
      onClick={toggle}
    >
      <span className="switch-paddle" aria-hidden />
    </button>
  );
}
