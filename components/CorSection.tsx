import Link from "next/link";
import { CorMark } from "@/components/CorMark";
import { ProvenName } from "@/components/ProvenMark";
import { COR, SITE } from "@/lib/site";

export function CorPanel() {
  return (
    <aside className="cred">
      <CorMark />
      <p className="mono steel">CERTIFICATE OF RECOGNITION</p>
      <p className="display cred-title">{COR.mark}</p>
      <dl className="cred-list">
        <div>
          <dt className="mono">Certifying partner</dt>
          <dd>
            <a href={COR.partnerUrl} rel="noreferrer" target="_blank">
              {COR.partner}
            </a>
          </dd>
        </div>
        <div>
          <dt className="mono">Program</dt>
          <dd>{COR.program}</dd>
        </div>
      </dl>
    </aside>
  );
}

export function CorSection() {
  return (
    <section className="section wrap" id="cor">
      <p className="mono kicker">04 — COR®</p>
      <h2 className="display giant">
        WHAT
        <br />
        COR IS.
      </h2>
      <p className="mono mt">Certificate of Recognition — COR®</p>
      <p className="lede mt-2">
        COR is a WorkSafeBC incentive program. In B.C. the certifying partner
        for construction is the {COR.partner}. An independent audit measures
        an occupational health and safety management system against the CFCSA
        14 elements. Passing the audit is certification of that system — not a
        promise that nothing will go wrong.
      </p>
      <p className="lede mt">
        Proven includes a document map to those elements so the framework is
        readable. The official program lives with BCCSA and WorkSafeBC.
      </p>
      <div className="cor-grid">
        <div>
          <h3 className="display giant-sm">
            THE
            <br />
            FRAMEWORK.
          </h3>
          <p className="lede mt">
            Safety information should not sit behind a login or an expiring
            link. Proven is public. COR is an independent look at how a
            management system is maintained.
          </p>
          <div className="rules mt-2">
            <article className="rule">
              <h3 className="display">
                <ProvenName />
              </h3>
              <p>Open to everyone.</p>
            </article>
            <article className="rule">
              <h3 className="display">COR</h3>
              <p>
                Measures the management system — not that incidents will never
                occur.
              </p>
            </article>
          </div>
          <div className="inline-cta">
            <Link className="btn btn-solid" href="/safety/ohs-management-system">
              READ THE MAP →
            </Link>
            <a className="btn btn-ghost" href={COR.partnerUrl} rel="noreferrer" target="_blank">
              BCCSA COR® PROGRAM
            </a>
            <Link className="btn btn-ghost" href="/philosophy">
              READ THE PHILOSOPHY →
            </Link>
          </div>
        </div>
        <CorPanel />
      </div>
      <p className="display giant-sm cor-close">
        THE SYSTEM
        <br />
        IS PUBLIC.
      </p>
      <p className="mono steel mt">
        {COR.mark}. {SITE.system} — OPEN. CRANE SAFETY — PUBLIC.
      </p>
    </section>
  );
}
