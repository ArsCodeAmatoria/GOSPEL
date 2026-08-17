import type { Metadata } from "next";
import Link from "next/link";
import { SafetyFind } from "@/components/SafetyFind";
import { StandardsList } from "@/components/StandardsList";
import { safetyCatalog } from "@/lib/ohs/catalog";
import { FIND_NOW, safetyByGroup } from "@/lib/safety";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Safety Program",
  description:
    "WHOOP is a safety company. The crew is how you get us. Read how we expect crane and rigging work to be performed — CSA Z150 / Z248, WorkSafeBC, BC Crane Safety, Technical Safety BC, ASME B30, manufacturer requirements and site policies.",
};

export default function SafetyIndexPage() {
  const groups = safetyByGroup();
  const catalog = safetyCatalog();

  return (
    <article className="doc-body">
      <header className="doc-title">
        <p className="mono steel">PUBLIC DOCUMENT</p>
        <h1 className="display">
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

      <p className="mono kicker">NEED IT NOW</p>
      <nav className="safety-now" aria-label="Documents used on the job">
        {FIND_NOW.map((item) => (
          <Link href={item.href} key={item.href}>
            <strong className="display">{item.label}</strong>
            <em>{item.hint}</em>
          </Link>
        ))}
      </nav>

      <SafetyFind catalog={catalog} />

      {groups.map((group) => (
        <section key={group.id} className="safety-group">
          <p className="mono kicker">{group.label}</p>
          <nav className="safety-index" aria-label={group.label}>
            {group.sections.map((s) => (
              <Link href={`/safety/${s.slug}`} key={s.slug}>
                <span className="mono steel">{s.num}</span>
                <span>
                  <strong>{s.title}</strong>
                  <em>{s.kicker}</em>
                </span>
              </Link>
            ))}
          </nav>
        </section>
      ))}

      <p className="lede mt-2">
        Read it on a phone at the gate. Print a section if you need it on paper.
        If you cannot work this way, do not hire us.
      </p>
      <div id="standards" className="mt-2">
        <p className="mono steel">WHAT THE WORK IS DONE TO</p>
        <p className="lede mt">
          Where these conflict, the stricter applicable requirement wins. Law
          always wins. The marks name the bodies. They are not an endorsement
          of WHOOP.
        </p>
        <StandardsList />
      </div>
      <p className="lede mt">
        WHOOP is COR® Certified through the BC Construction Safety Alliance.
        That certification is of our occupational health and safety management
        system — not a claim that incidents will never occur.{" "}
        <Link href="/#cor">COR CERTIFIED →</Link>
      </p>
      <p className="mono steel doc-colophon">
        WHOOP Safety Program. {SITE.legalName}. Current version on this site.
      </p>
    </article>
  );
}
