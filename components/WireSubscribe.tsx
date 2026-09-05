"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";
import { WIRE } from "@/lib/whoopwire";

export function WireSubscribe({ compact = false }: { compact?: boolean }) {
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    if (!email) return;

    try {
      const res = await fetch("/api/whoopwire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("fail");
      setDone(true);
    } catch {
      window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent(WIRE.name)}&body=${encodeURIComponent(email)}`;
      setError("If your email client opened, send that. Otherwise try again.");
    }
  }

  if (done) {
    return (
      <div className={compact ? undefined : "section wrap"} id="subscribe">
        <p className="mono kicker">{WIRE.name}</p>
        <h2 className="display giant-sm">YOU&apos;RE ON THE LIST.</h2>
        <p className="lede mt">We will send stories. We will not bury you in mail.</p>
      </div>
    );
  }

  return (
    <section className={compact ? "wire-sub" : "section wrap"} id="subscribe">
      <p className="mono kicker">{WIRE.name}</p>
      <h2 className="display giant">
        GET
        <br />
        THE WIRE.
      </h2>
      <p className="lede mt">
        {WIRE.subscribe}
      </p>
      <form className="wire-sub-form" onSubmit={onSubmit}>
        <div className="field">
          <label className="mono" htmlFor="wire-email">
            EMAIL
          </label>
          <input
            id="wire-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.ca"
          />
        </div>
        {error ? <p className="steel mt">{error}</p> : null}
        <div className="form-actions">
          <button className="btn btn-solid" type="submit">
            SUBSCRIBE
          </button>
        </div>
      </form>
    </section>
  );
}
