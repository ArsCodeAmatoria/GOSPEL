import type { Metadata } from "next";
import Link from "next/link";
import { StandardsList } from "@/components/StandardsList";
import { SAFETY } from "@/lib/safety";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Safety Program",
  description:
    "WHOOP is a safety company that supplies a workforce. Read how we expect crane and rigging work to be performed — CSA Z150 / Z248, WorkSafeBC, BC Crane Safety, Technical Safety BC, ASME B30, manufacturer requirements and site policies.",
};

export default function SafetyIndexPage() {
  return (
    <div className="wrap">
      <header className="page-hero">
        <p className="mono kicker">PUBLIC DOCUMENT</p>
        <h1 className="display giant">
          OUR SAFETY
          <br />
          PROGRAM
          <br />
          IS OPEN.
        </h1>
        <p className="lede mt-2">
          {SITE.position} Safety isn&apos;t proprietary. Clients, workers and
          contractors should be able to see how we expect work to be performed
          before they hire us. No request form. No expiring link. No PDF as the
          primary experience.
        </p>
      </header>
      <nav className="safety-index" aria-label="Safety program sections">
        {SAFETY.map((s) => (
          <Link href={`/safety/${s.slug}`} key={s.slug}>
            <span className="mono steel">{s.num}</span>
            <span>
              <strong>{s.title}</strong>
              <em>{s.kicker}</em>
            </span>
          </Link>
        ))}
      </nav>
      <p className="lede mt-2">
        Read it on a phone at the gate. Print a section if you need it on paper.
        If you cannot work this way, do not hire us.
      </p>
      <div id="standards" className="mt-2">
        <p className="mono steel">WHAT THE WORK IS DONE TO</p>
        <p className="lede mt">
          Where these conflict, the stricter applicable requirement wins. Law
          always wins.
        </p>
        <StandardsList />
      </div>
      <p className="lede mt" style={{ paddingBottom: "5rem" }}>
        WHOOP is COR® Certified through the BC Construction Safety Alliance.
        That certification is of our occupational health and safety management
        system — not a claim that incidents will never occur.{" "}
        <Link href="/#cor">COR CERTIFIED →</Link>
      </p>
    </div>
  );
}
