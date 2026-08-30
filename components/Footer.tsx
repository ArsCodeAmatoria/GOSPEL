import Link from "next/link";
import { CorMark } from "@/components/CorMark";
import { ProvenName } from "@/components/ProvenMark";
import { StandardMarks } from "@/components/StandardsList";
import { COR, SITE } from "@/lib/site";
import { WIRE } from "@/lib/whoopwire";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h2 className="display">{SITE.name}</h2>
        </div>
        <nav className="footer-links mono">
          <Link href="/safety">
            <ProvenName />
          </Link>
          <Link href="/whoopwire">{WIRE.name}</Link>
          <Link href="/#cor">COR CERTIFIED</Link>
          <Link href="/philosophy">PHILOSOPHY</Link>
          <Link href="/safety/builder">FORM BUILDER</Link>
          <a href={SITE.emailHref}>{SITE.email}</a>
        </nav>
      </div>
      <p className="display giant-sm">
        {SITE.tagline}
        <br />
        {SITE.sub}
      </p>
      <div className="footer-cred">
        <CorMark className="cor-mark cor-mark-foot" />
        <p className="mono">
          {COR.mark}
          <br />
          Certifying partner:{" "}
          <a href={COR.partnerUrl} rel="noreferrer" target="_blank">
            {COR.partner}
          </a>
        </p>
      </div>
      <div className="footer-marks">
        <StandardMarks compact />
      </div>
      <p className="mono footer-std">
        <Link href="/#standards">Work done to</Link> CSA Z150 / Z248, WorkSafeBC,
        BC Crane Safety, Technical Safety BC, ASME B30, manufacturer
        requirements and site policies. Those marks identify the bodies — they
        are not a claim those organizations endorse GOSPEL.
      </p>
      <div className="footer-bot mono">
        <span>© {new Date().getFullYear()} {SITE.legalName}</span>
        <span>OPEN. USABLE. ACCOUNTABLE.</span>
      </div>
    </footer>
  );
}
