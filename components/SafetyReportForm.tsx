"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";

export function SafetyReportForm({
  kind,
  title,
}: {
  kind: string;
  title: string;
}) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSending(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/safety/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, ...data }),
      });
      const json = (await res.json()) as { ok?: boolean };
      if (!res.ok || !json.ok) {
        setError("Could not send. Call KYUK or use the email.");
        return;
      }
      setSent(true);
    } catch {
      setError("Could not send. Call KYUK or use the email.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <p className="lede mt">
        Received. If this is still dangerous, stop the lift and call{" "}
        <a href={SITE.phoneHref}>{SITE.phone}</a>.
      </p>
    );
  }

  return (
    <form className="form mt-2" onSubmit={onSubmit}>
      <div className="form-row">
        <label className="field">
          <span className="mono">YOUR NAME</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className="field">
          <span className="mono">ROLE</span>
          <input name="role" required placeholder="Operator, rigger, signalperson…" />
        </label>
      </div>
      <div className="form-row">
        <label className="field">
          <span className="mono">SITE</span>
          <input name="site" required />
        </label>
        <label className="field">
          <span className="mono">CRANE / GEAR</span>
          <input name="gear" placeholder="Machine, sling, hook — if known" />
        </label>
      </div>
      <label className="field">
        <span className="mono">WHEN</span>
        <input name="when" required placeholder="Date and time" />
      </label>
      <label className="field">
        <span className="mono">WHAT HAPPENED</span>
        <textarea name="body" required />
      </label>
      {error ? <p className="mt steel">{error}</p> : null}
      <div className="form-actions">
        <button className="btn btn-solid" type="submit" disabled={sending}>
          {sending ? "SENDING…" : `${title} →`}
        </button>
        <a className="btn btn-ghost" href={SITE.phoneHref}>
          CALL {SITE.phone}
        </a>
      </div>
      <p className="mono steel mt">
        Call {SITE.phone} if people are still in danger.
      </p>
    </form>
  );
}
