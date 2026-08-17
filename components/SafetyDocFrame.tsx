import type { ReactNode } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

export function SafetyDocFrame({
  kicker,
  num,
  title,
  intro,
  children,
  backHref,
  backLabel,
}: {
  kicker: string;
  num: string;
  title: string;
  intro: string;
  children: ReactNode;
  backHref: string;
  backLabel: string;
}) {
  return (
    <article className="doc-body">
      <header className="doc-title">
        <p className="mono steel">{kicker}</p>
        <div className="num">{num}</div>
        <h1 className="display">{title}</h1>
        <p className="lede mt">{intro}</p>
      </header>
      {children}
      <nav className="pager">
        <Link href={backHref}>
          <span className="mono steel">LIBRARY</span>
          <strong className="display">{backLabel}</strong>
        </Link>
        <Link href="/safety">
          <span className="mono steel">INDEX</span>
          <strong className="display">SAFETY PROGRAM</strong>
        </Link>
      </nav>
      <p className="mono steel doc-colophon">
        WHOOP Safety Program. {SITE.legalName}. Current version on this site.
      </p>
    </article>
  );
}
