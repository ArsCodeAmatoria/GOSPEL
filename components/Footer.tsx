import Link from "next/link";
import { CorMark } from "@/components/CorMark";
import { COR, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h2 className="display">WHOOP</h2>
        </div>
        <nav className="footer-links mono">
          <Link href="/hire">HIRE A CREW</Link>
          <Link href="/safety">SAFETY PROGRAM</Link>
          <Link href="/whoopwire">WHOOPWIRE</Link>
          <Link href="/#cor">COR CERTIFIED</Link>
          <Link href="/crew">THE CREW</Link>
          <Link href="/philosophy">PHILOSOPHY</Link>
          <a href={SITE.phoneHref}>{SITE.phone}</a>
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
          <br />
          {SITE.union}
        </p>
      </div>
      <div className="footer-bot mono">
        <span>© {new Date().getFullYear()} WHOOP</span>
        <span>PEOPLE. COMPETENCY. RELIABILITY. {SITE.union}.</span>
      </div>
    </footer>
  );
}
