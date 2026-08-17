"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SAFETY, safetyByGroup } from "@/lib/safety";

function sectionFromPath(path: string): string | undefined {
  if (path === "/safety" || path === "/safety/") return undefined;
  const part = path.slice("/safety/".length).split("/")[0];
  const nested: Record<string, string> = {
    swp: "swp-library",
    jha: "jha-library",
    policy: "ohs-policies",
    form: "safety-forms",
    builder: "safety-forms",
    sds: "whmis-sds",
    report: "incident-reporting",
    crane: "inspections",
  };
  return nested[part] ?? part;
}

function NavLinks({
  current,
  onPick,
}: {
  current: string | undefined;
  onPick?: () => void;
}) {
  const groups = safetyByGroup();
  return (
    <>
      <Link
        href="/safety"
        className={!current ? "active" : undefined}
        onClick={onPick}
      >
        <span>00</span>
        INDEX
      </Link>
      {groups.map((group) => (
        <div className="doc-nav-group" key={group.id}>
          <p className="mono steel">{group.label}</p>
          {group.sections.map((s) => (
            <Link
              key={s.slug}
              href={`/safety/${s.slug}`}
              className={current === s.slug ? "active" : undefined}
              onClick={onPick}
            >
              <span>{s.num}</span>
              {s.title}
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}

export function SafetyNav() {
  const pathname = usePathname();
  const current = sectionFromPath(pathname);
  const stripRef = useRef<HTMLDivElement>(null);
  const [tocOpen, setTocOpen] = useState(false);
  const here = SAFETY.find((s) => s.slug === current);
  const label = here ? `${here.num}  ${here.title}` : "SAFETY PROGRAM";

  useEffect(() => {
    setTocOpen(false);
    const el = stripRef.current?.querySelector<HTMLElement>("a.active");
    el?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [current]);

  return (
    <aside className="doc-nav">
      <div className="doc-nav-mobile">
        <div
          ref={stripRef}
          className="doc-nav-scroll"
          aria-label="Safety sections"
        >
          <Link href="/safety" className={!current ? "active" : undefined}>
            00
          </Link>
          {SAFETY.map((s) => (
            <Link
              key={s.slug}
              href={`/safety/${s.slug}`}
              className={current === s.slug ? "active" : undefined}
            >
              {s.num}
            </Link>
          ))}
        </div>
        <details
          className="doc-nav-pick"
          open={tocOpen}
          onToggle={(e) =>
            setTocOpen((e.target as HTMLDetailsElement).open)
          }
        >
          <summary>
            <span className="mono steel">NOW</span>
            <strong className="display">{label}</strong>
          </summary>
          <nav aria-label="Safety program">
            <NavLinks current={current} onPick={() => setTocOpen(false)} />
          </nav>
        </details>
      </div>
      <div className="doc-nav-inner">
        <p className="mono steel" style={{ marginBottom: "1rem" }}>
          SAFETY PROGRAM
        </p>
        <nav>
          <NavLinks current={current} />
        </nav>
      </div>
    </aside>
  );
}
