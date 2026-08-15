import type { Metadata } from "next";
import Link from "next/link";
import { CREW } from "@/lib/crew";

export const metadata: Metadata = {
  title: "The Crew",
  description:
    "Crane operators, riggers, signalpersons and supervisors. Competent people, verified before they arrive.",
};

export default function CrewPage() {
  return (
    <div className="wrap">
      <header className="page-hero">
        <p className="mono kicker">THE PEOPLE</p>
        <h1 className="display giant">THE CREW</h1>
        <p className="lede mt">
          We don&apos;t publish a labour catalogue. These are the kinds of
          people we put on a lift — ticketed, experienced, and checked for the
          work you actually have. WHOOP is a union-friendly shop.
        </p>
      </header>
      <div>
        {CREW.map((person) => (
          <article className="crew-row" key={person.slug}>
            <p className="mono steel">{person.role}</p>
            <h2 className="display giant-sm">{person.name}</h2>
            <p className="mono mt">{person.years}</p>
            <p className="mono mt">{person.tickets}</p>
            <p className="lede mt">{person.note}</p>
          </article>
        ))}
      </div>
      <section className="section">
        <h2 className="display giant-sm">
          WE DON&apos;T SUPPLY
          <br />
          RANDOM LABOUR.
        </h2>
        <p className="lede mt">
          Names on this page are representative of the bench — not a promise
          that a specific person is available tomorrow. When you hire a crew,
          you get named people, verified tickets, and a brief before they show
          up.
        </p>
        <div className="inline-cta">
          <Link className="btn btn-solid" href="/hire">
            HIRE A CREW
          </Link>
          <Link className="btn btn-ghost" href="/safety/training-competency">
            HOW WE VERIFY
          </Link>
        </div>
      </section>
    </div>
  );
}
