import Link from "next/link";
import { CorMark } from "@/components/CorMark";
import { ProvenName } from "@/components/ProvenMark";
import { COR, SITE } from "@/lib/site";

export function CorPanel() {
  const extras: { label: string; value: string }[] = [];
  if (COR.certificateNumber) {
    extras.push({ label: "Certificate no.", value: COR.certificateNumber });
  }
  if (COR.certifiedDate) {
    extras.push({ label: "Certified", value: COR.certifiedDate });
  }
  if (COR.classification) {
    extras.push({ label: "Classification", value: COR.classification });
  }

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
        {extras.map((item) => (
          <div key={item.label}>
            <dt className="mono">{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export function CorSection() {
  return (
    <section className="section wrap" id="cor">
      <p className="mono kicker">04 — ACCOUNTABLE</p>
      <h2 className="display giant">
        COR
        <br />
        CERTIFIED.
      </h2>
      <p className="mono mt">Certificate of Recognition — COR®</p>
      <p className="lede mt">
        KYUK maintains Proven — a certified occupational health and safety
        management system — and is committed to continuous improvement in how we
        plan, perform and verify our work.
      </p>
      <div className="cor-grid">
        <div>
          <h3 className="display giant-sm">
            SAFETY
            <br />
            IS PUBLIC.
          </h3>
          <p className="lede mt">
            We don&apos;t believe safety should be hidden behind a login or an
            expiring link. Proven is available for clients and workers to
            review, and our COR certification provides an independent framework
            for maintaining and improving that system.
          </p>
          <div className="rules mt-2">
            <article className="rule">
              <h3 className="display">
                <ProvenName />
              </h3>
              <p>Open to everyone.</p>
            </article>
            <article className="rule">
              <h3 className="display">Our COR</h3>
              <p>
                Proves we take the system seriously. It certifies the management
                system — not that incidents will never occur.
              </p>
            </article>
          </div>
          <div className="inline-cta">
            <Link className="btn btn-solid" href="/safety">
              VIEW {SITE.system} →
            </Link>
            <a className="btn btn-ghost" href={COR.packHref} download>
              DOWNLOAD COR PACK →
            </a>
            <Link className="btn btn-ghost" href="/hire">
              CONTACT KYUK →
            </Link>
          </div>
        </div>
        <CorPanel />
      </div>
      <p className="display giant-sm cor-close">
        WE HAVE NOTHING
        <br />
        TO HIDE.
      </p>
      <p className="mono steel mt">
        COR CERTIFIED. {SITE.system} — OPEN. CRANE + RIGGING — READY.
      </p>
      <p className="mono steel mt">
        WE SHOW YOU OUR SYSTEM. WE SHOW YOU OUR CREDENTIALS. THEN WE SHOW UP AND
        DO THE WORK.
      </p>
    </section>
  );
}
