import Link from "next/link";
import { SAFETY } from "@/lib/safety";

export function SafetyNav({ current }: { current?: string }) {
  return (
    <aside className="doc-nav">
      <div className="doc-nav-scroll" aria-label="Safety sections">
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
      <div className="doc-nav-inner">
        <p className="mono steel" style={{ marginBottom: "1rem" }}>
          SAFETY PROGRAM
        </p>
        <nav>
          {SAFETY.map((s) => (
            <Link
              key={s.slug}
              href={`/safety/${s.slug}`}
              className={current === s.slug ? "active" : undefined}
            >
              <span>{s.num}</span>
              {s.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
