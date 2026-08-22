import type { Metadata } from "next";
import Link from "next/link";
import { BELIEFS, PRINCIPLES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "No bullshit. Just good people doing heavy work. 1415's operating philosophy for crane and rigging crews.",
};

export default function PhilosophyPage() {
  return (
    <div>
      <header className="page-hero wrap">
        <p className="mono kicker">HOW WE OPERATE</p>
        <h1 className="display giant">
          NO BULLSHIT.
          <br />
          JUST GOOD PEOPLE
          <br />
          DOING HEAVY WORK.
        </h1>
      </header>
      <div className="split wrap top" style={{ paddingBottom: "4rem" }}>
        <p className="lede-lg">
          1415 is a complete crane operations and rigging company. Operators,
          riggers, signalpersons, crane supervisors and safety support — people
          and systems, not just labour.
        </p>
        <p className="lede">
          Competent people matter. Safety information should be accessible.
          Documentation should be useful. Management should keep its promises.
          If 1415 says it will show up, 1415 shows up.
        </p>
      </div>
      <section className="section wrap">
        <p className="mono kicker">SAY IT. DO IT.</p>
        <ul>
          {PRINCIPLES.map((p) => (
            <li
              key={p}
              className="display"
              style={{
                fontSize: "clamp(2.4rem, 8vw, 6rem)",
                padding: "0.4rem 0",
                borderTop: "1px solid var(--line)",
              }}
            >
              {p}
            </li>
          ))}
        </ul>
        <div className="rules mt-2">
          {BELIEFS.map((b) => (
            <article className="rule" key={b.title}>
              <h3 className="display">{b.title}</h3>
              <p>{b.body}</p>
            </article>
          ))}
        </div>
        <p className="lede mt-2">
          Customers should know exactly what they are getting. Workers should be
          treated with respect. That is the whole company.
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
    </div>
  );
}
