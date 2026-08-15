import Link from "next/link";
import { SITE } from "@/lib/site";

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
      <div className="footer-bot mono">
        <span>© {new Date().getFullYear()} WHOOP</span>
        <span>PEOPLE. COMPETENCY. RELIABILITY. LIFTING.</span>
      </div>
    </footer>
  );
}
