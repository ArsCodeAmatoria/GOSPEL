import Link from "next/link";
import { CorSection } from "@/components/CorSection";
import { ProvenName } from "@/components/ProvenMark";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { FactsList, StandardsList } from "@/components/StandardsList";
import { WireStoryLink } from "@/components/WireStoryLink";
import { RIGGING_A_LOAD, safetyByGroup } from "@/lib/safety";
import { ABOUT, BELIEFS, METHOD, PROGRAM, SITE } from "@/lib/site";
import { WIRE, getLatest, summarize } from "@/lib/whoopwire";

export default function HomePage() {
  return (
    <>
      <section className="section section-lead" id="GOSPEL">
        <div className="wrap">
          <p className="mono kicker">01 — THE PROGRAM</p>
          <div className="lead-split">
            <div className="lead-copy">
              <h1 className="display giant">
                CRANE
                <br />
                SAFETY
                <br />
                SYSTEMS.
              </h1>
              <p className="display pitch-line mt-2">
                OPEN.
                <br />
                USABLE.
                <br />
                ACCOUNTABLE.
              </p>
              <p className="lede-lg mt">{SITE.dek}</p>
            </div>
            <figure className="lead-crane">
              <img
                src="/illustrations/luffer-tower-crane.png"
                alt="Luffing jib tower crane, technical illustration"
                width={862}
                height={1509}
              />
            </figure>
          </div>
          <div className="company-copy">
            <p>{SITE.roles}</p>
            <p>{SITE.method}</p>
            <p className="company-copy-close">{SITE.close}</p>
          </div>
          <div>
            <p className="mono steel mt-2">WHAT THIS IS</p>
            <p className="lede mt">The program, the standard, the system.</p>
            <FactsList items={ABOUT} />
          </div>
          <div className="inline-cta">
            <Link className="btn btn-solid" href="/safety">
              READ {SITE.system}
            </Link>
            <Link className="btn btn-ghost" href="/philosophy">
              READ THE PHILOSOPHY
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="safety">
        <div className="wrap">
          <p className="mono kicker">02 — OPEN BOOK</p>
          <h2 className="display giant">
            THE SAFETY
            <br />
            SYSTEM IS
            <br />
            CALLED
            <br />
            <ProvenName />
          </h2>
          <p className="lede-lg mt-2">
            The platform behind every crane operation.
          </p>
          <p className="lede mt">
            People, process and documentation — organized, verified and
            accountable. Operators, riggers, supervisors, contractors and
            clients can read how the work is expected to be performed before
            the gate.
          </p>
          <div id="standards">
            <p className="mono steel mt-2">WHAT THE WORK IS DONE TO</p>
            <p className="lede mt">
              Where these conflict, the stricter applicable requirement wins.
              Law always wins. The marks name the bodies. They are not an
              endorsement of GOSPEL.
            </p>
            <StandardsList />
          </div>
          <div className="inline-cta">
            <Link className="btn btn-solid" href="/safety">
              READ {SITE.system}
            </Link>
            <Link className="btn btn-ghost" href="/safety/builder">
              OPEN THE FORM BUILDER
            </Link>
          </div>
        </div>
        {safetyByGroup().map((group) => (
          <section className="wrap safety-group" key={group.id}>
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
      </section>

      <section className="section wrap">
        <p className="mono kicker">03 — WHAT THE PROGRAM COVERS</p>
        <h2 className="display giant">THE SYSTEM.</h2>
        <div className="mt-2">
          {PROGRAM.map((s) => (
            <article className="service" key={s.num}>
              <span className="mono steel">{s.num}</span>
              <h3 className="display">{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
        <div className="inline-cta">
          <Link className="btn btn-ghost" href="/safety">
            OPEN THE LIBRARY
          </Link>
        </div>
      </section>

      <CorSection />

      <section className="section wrap">
        <div className="split top">
          <div>
            <p className="mono kicker">05 — COMPETENCY</p>
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
              Qualifications, experience and practical competency have to be
              named before the hook is loaded.
            </p>
            <p className="mt lede">
              The program names what each role must hold, verify and refuse —
              and it publishes the procedures they work to.
            </p>
            <div className="inline-cta">
              <Link className="btn btn-ghost" href="/safety/training-competency">
                11 — TRAINING + COMPETENCY
              </Link>
            </div>
          </div>
        </div>
        <div className="place mt-2">
          {METHOD.map((p) => (
            <article key={p.num}>
              <span className="mono steel">{p.num}</span>
              <h3 className="display">{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <p className="mono kicker">06 — USABLE PROCEDURES</p>
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
        <p className="mono kicker">07 — THE STANDARD</p>
        <h2 className="display giant">
          NO BULLSHIT.
          <br />
          JUST THE
          <br />
          STANDARD.
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

      <section className="section wrap" id="whoopwire">
        <p className="mono kicker">08 — GOSPELWIRE</p>
        <h2 className="display giant">GOSPELWIRE</h2>
        <p className="mono mt">{WIRE.descriptor}</p>
        <div className="wire-stack mt-2">
          {getLatest(3).map((story) => (
            <WireStoryLink key={story.slug} story={summarize(story)} size="home" />
          ))}
        </div>
        <div className="inline-cta">
          <Link className="btn btn-solid" href="/whoopwire">
            READ GOSPELWIRE →
          </Link>
        </div>
      </section>

      <section className="section wrap">
        <p className="mono kicker">09 — START</p>
        <h2 className="display giant">
          OPEN
          <br />
          <ProvenName />
        </h2>
        <p className="lede mt-2">
          {SITE.location}. The program is public. Read it on a phone at the
          gate. Print a section if you need it on paper.
        </p>
        <div className="inline-cta">
          <Link className="btn btn-solid" href="/safety">
            READ {SITE.system}
          </Link>
          <Link className="btn btn-ghost" href="/safety/builder">
            OPEN THE FORM BUILDER
          </Link>
        </div>
      </section>
    </>
  );
}
