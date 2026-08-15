import Link from "next/link";
import { MapleDot } from "@/components/MapleLeaf";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { CREW } from "@/lib/crew";
import { RIGGING_A_LOAD, SAFETY } from "@/lib/safety";
import { BELIEFS, PLACEMENT, PRINCIPLES, SERVICES, SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-meta mono">
          <span>VANCOUVER</span>
          <span>CANADA</span>
        </div>
        <div className="hero-lines">
          <h1 className="display">
            <span>CRANE.</span>
          </h1>
          <h1 className="display">
            <span>RIGGING.</span>
          </h1>
          <h1 className="display">
            <span>
              PEOPLE
              <MapleDot />
            </span>
          </h1>
        </div>
        <div className="hero-bottom">
          <p className="lede">
            Reliable crane operators, riggers and lifting crews for construction
            and industrial work.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn-solid" href="/hire">
              HIRE A CREW
            </Link>
            <Link className="btn btn-ghost" href="/safety">
              VIEW OUR SAFETY PROGRAM
            </Link>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden>
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div key={copy}>
              {PRINCIPLES.map((p) => (
                <span key={`${copy}-${p}`}>
                  {p} <i>/</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="say-do wrap">
        <p className="mono kicker">THE STANDARD</p>
        <h2 className="display">SAY IT.</h2>
        <h2 className="display">DO IT.</h2>
        <p className="lede mt-2">
          Reliability is not a claim. It is a sequence: show up, be competent,
          work safe, do what you said you would do.
        </p>
      </section>

      <section className="section wrap">
        <p className="mono kicker">01 — WHAT WE SUPPLY</p>
        <h2 className="display giant">THE WORK.</h2>
        <div className="mt-2">
          {SERVICES.map((s) => (
            <article className="service" key={s.num}>
              <span className="mono steel">{s.num}</span>
              <h3 className="display">{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <div className="split top">
          <div>
            <p className="mono kicker">02 — COMPETENCY</p>
            <h2 className="display giant">
              A TICKET
              <br />
              IS NOT
              <br />
              COMPETENCY.
            </h2>
          </div>
          <div>
            <p className="lede-lg">
              We verify qualifications, experience and practical competency
              before placing workers on site.
            </p>
            <p className="mt lede">
              We don&apos;t supply random labour. We supply competent crane and
              rigging personnel.
            </p>
            <div className="inline-cta">
              <Link className="btn btn-ghost" href="/safety/training-competency">
                11 — TRAINING + COMPETENCY
              </Link>
            </div>
          </div>
        </div>
        <div className="place mt-2">
          {PLACEMENT.map((p) => (
            <article key={p.num}>
              <span className="mono steel">{p.num}</span>
              <h3 className="display">{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="mono kicker">03 — OPEN BOOK</p>
          <h2 className="display giant">
            OUR SAFETY
            <br />
            PROGRAM
            <br />
            IS OPEN.
          </h2>
          <p className="lede mt-2">
            Safety isn&apos;t proprietary. Clients, workers and contractors
            should be able to see how we expect work to be performed before they
            hire us.
          </p>
          <div className="inline-cta">
            <Link className="btn btn-solid" href="/safety">
              READ THE PROGRAM
            </Link>
            <Link className="btn btn-ghost" href="/hire">
              HIRE A CREW
            </Link>
          </div>
        </div>
        <nav className="wrap safety-index mt-2" aria-label="Safety program">
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
      </section>

      <section className="section wrap">
        <p className="mono kicker">04 — USABLE PROCEDURES</p>
        <h2 className="display giant">
          RIGGING
          <br />
          A LOAD
        </h2>
        <p className="lede mt">
          If a procedure cannot be followed on a jobsite, it is not a procedure.
        </p>
        <div className="mt-2">
          <ProcedureSteps items={RIGGING_A_LOAD} />
        </div>
        <div className="inline-cta">
          <Link className="btn btn-ghost" href="/safety/safe-work-procedures">
            MORE PROCEDURES
          </Link>
        </div>
      </section>

      <section className="section wrap">
        <div className="split">
          <div>
            <p className="mono kicker">05 — THE PEOPLE</p>
            <h2 className="display giant">THE CREW</h2>
          </div>
          <p className="lede">
            Crane operators. Riggers. Signalpersons. Supervisors. Matched to the
            work. Verified before they arrive.
          </p>
        </div>
        <div className="mt-2">
          {CREW.map((person) => (
            <article className="crew-line" key={person.slug}>
              <h3 className="display">{person.name}</h3>
              <span className="mono">{person.role}</span>
            </article>
          ))}
        </div>
        <div className="inline-cta">
          <Link className="btn btn-ghost" href="/crew">
            MEET THE CREW
          </Link>
        </div>
      </section>

      <section className="section wrap">
        <p className="mono kicker">06 — HOW WE THINK</p>
        <h2 className="display giant">
          NO BULLSHIT.
          <br />
          JUST GOOD PEOPLE
          <br />
          DOING HEAVY WORK.
        </h2>
        <div className="rules mt-2">
          {BELIEFS.map((b) => (
            <article className="rule" key={b.title}>
              <h3 className="display">{b.title}</h3>
              <p>{b.body}</p>
            </article>
          ))}
        </div>
        <div className="inline-cta">
          <Link className="btn btn-ghost" href="/philosophy">
            READ THE PHILOSOPHY
          </Link>
        </div>
      </section>

      <section className="section wrap">
        <p className="mono kicker">07 — START</p>
        <h2 className="display giant">HIRE A CREW</h2>
        <div className="contact-rail mt">
          <a className="contact-hit" href={SITE.phoneHref}>
            <span className="mono">PHONE</span>
            <strong className="display">{SITE.phone}</strong>
          </a>
          <a className="contact-hit" href={SITE.emailHref}>
            <span className="mono">EMAIL</span>
            <strong className="display">{SITE.email}</strong>
          </a>
        </div>
        <p className="lede mt-2">
          {SITE.location}. Crews deployed where the lift is. Tell us the work.
          We will tell you who is coming.
        </p>
        <div className="inline-cta">
          <Link className="btn btn-solid" href="/hire">
            HIRE A CREW
          </Link>
          <Link className="btn btn-ghost" href="/safety">
            VIEW OUR SAFETY PROGRAM
          </Link>
        </div>
      </section>
    </>
  );
}
