import Link from "next/link";
import { CorSection } from "@/components/CorSection";
import { ProvenName } from "@/components/ProvenMark";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { FactsList, StandardsList } from "@/components/StandardsList";
import { WireStoryLink } from "@/components/WireStoryLink";
import { CREW } from "@/lib/crew";
import { RIGGING_A_LOAD, safetyByGroup } from "@/lib/safety";
import { ABOUT, BELIEFS, PLACEMENT, SERVICES, SITE } from "@/lib/site";
import { WIRE, getLatest, summarize } from "@/lib/whoopwire";

export default function HomePage() {
  return (
    <>
      <section className="section section-lead" id="kyuk">
        <div className="wrap">
          <p className="mono kicker">01 — THE COMPANY</p>
          <h1 className="display giant">
            WE MOVE
            <br />
            HEAVY THINGS.
          </h1>
          <p className="display pitch-line mt-2">
            THE PEOPLE
            <br />
            AND THE SYSTEMS.
          </p>
          <p className="lede-lg mt">{SITE.dek}</p>
          <div className="company-copy">
            <p>{SITE.roles}</p>
            <p>{SITE.method}</p>
            <p className="company-copy-close">{SITE.close}</p>
          </div>
          <div>
            <p className="mono steel mt-2">WHO WE ARE</p>
            <p className="lede mt">The work, the people, the system.</p>
            <FactsList items={ABOUT} />
          </div>
          <div className="inline-cta">
            <Link className="btn btn-solid" href="/hire">
              HIRE A CREW
            </Link>
            <Link className="btn btn-ghost" href="/safety">
              READ {SITE.system}
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="safety">
        <div className="wrap">
          <p className="mono kicker">02 — OPEN BOOK</p>
          <h2 className="display giant">
            OUR SAFETY
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
            accountable. Clients, workers and contractors can read how we
            expect the work to be performed before they hire us.
          </p>
          <div id="standards">
            <p className="mono steel mt-2">WHAT THE WORK IS DONE TO</p>
            <p className="lede mt">
              Where these conflict, the stricter applicable requirement wins.
              Law always wins. The marks name the bodies. They are not an
              endorsement of KYUK.
            </p>
            <StandardsList />
          </div>
          <div className="inline-cta">
            <Link className="btn btn-solid" href="/safety">
              READ {SITE.system}
            </Link>
            <Link className="btn btn-ghost" href="/hire">
              HIRE A CREW
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
        <p className="mono kicker">03 — WHAT WE SUPPLY</p>
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
              We verify qualifications, experience and practical competency
              before placing workers on site.
            </p>
            <p className="mt lede">
              We go beyond supplying labour. We provide the people and the
              systems that support the safe and professional operation of cranes.
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
        <div className="split">
          <div>
            <p className="mono kicker">07 — THE PEOPLE</p>
            <h2 className="display giant">THE CREW</h2>
          </div>
          <p className="lede">
            Crane operators. Riggers. Signalpersons. Crane supervisors. Safety
            support. Matched to the work. Verified before they arrive.
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
        <p className="mono kicker">08 — HOW WE THINK</p>
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

      <section className="section wrap" id="whoopwire">
        <p className="mono kicker">09 — KYUKWIRE</p>
        <h2 className="display giant">KYUKWIRE</h2>
        <p className="mono mt">{WIRE.descriptor}</p>
        <div className="wire-stack mt-2">
          {getLatest(3).map((story) => (
            <WireStoryLink key={story.slug} story={summarize(story)} size="home" />
          ))}
        </div>
        <div className="inline-cta">
          <Link className="btn btn-solid" href="/whoopwire">
            READ KYUKWIRE →
          </Link>
        </div>
      </section>

      <section className="section wrap">
        <p className="mono kicker">10 — START</p>
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
          {SITE.location}. People and systems. Tell us the work. We will tell
          you who is coming.
        </p>
        <div className="inline-cta">
          <Link className="btn btn-solid" href="/hire">
            HIRE A CREW
          </Link>
          <Link className="btn btn-ghost" href="/safety">
            READ {SITE.system}
          </Link>
        </div>
      </section>
    </>
  );
}
