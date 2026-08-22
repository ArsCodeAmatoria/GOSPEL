import type { Metadata } from "next";
import { HireForm } from "@/components/HireForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hire a crew",
  description:
    "Request crane operators, riggers, signalpersons, crane supervisors or safety support from 1415.",
};

export default function HirePage() {
  return (
    <div className="wrap" style={{ paddingBottom: "5rem" }}>
      <header className="page-hero">
        <p className="mono kicker">DISPATCH</p>
        <h1 className="display giant">HIRE A CREW</h1>
        <p className="lede mt">
          Tell us the work. We will tell you who is coming — and whether we can
          do it. If we cannot, you will hear that first. {SITE.dek}{" "}
          {SITE.position}
        </p>
      </header>
      <div className="contact-rail">
        <a className="contact-hit" href={SITE.phoneHref}>
          <span className="mono">PHONE</span>
          <strong className="display">{SITE.phone}</strong>
        </a>
        <a className="contact-hit" href={SITE.emailHref}>
          <span className="mono">EMAIL</span>
          <strong className="display">{SITE.email}</strong>
        </a>
      </div>
      <p className="mono steel mt-2">OR SEND THE JOB</p>
      <HireForm />
    </div>
  );
}
