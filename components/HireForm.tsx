"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";

const PERSONNEL = [
  "Crane operators",
  "Riggers",
  "Signalpersons",
  "Crane supervisors",
  "Safety support",
  "Mixed crew",
];

export function HireForm() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/hire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("fail");
      setDone(true);
    } catch {
      const subject = encodeURIComponent(`Hire a crew — ${data.company || "KYUK"}`);
      const body = encodeURIComponent(
        Object.entries(data)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n")
      );
      window.location.href = `${SITE.emailHref}?subject=${subject}&body=${body}`;
      setError(
        "The form could not be sent from the browser. Your email client should open with the request filled in — or call us."
      );
    }
  }

  if (done) {
    return (
      <div className="success">
        <p className="mono kicker">REQUEST RECEIVED</p>
        <h2 className="display">WE HAVE IT.</h2>
        <p className="lede mt">
          Someone at KYUK will call you. If the start date is close, call us
          now.
        </p>
        <div className="inline-cta">
          <a className="btn btn-solid" href={SITE.phoneHref}>
            {SITE.phone}
          </a>
          <a className="btn btn-ghost" href={SITE.emailHref}>
            {SITE.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <Field name="company" label="Company" required />
        <Field name="contact" label="Contact name" required />
      </div>
      <div className="form-row">
        <Field name="phone" label="Phone" type="tel" required />
        <Field name="email" label="Email" type="email" required />
      </div>
      <div className="form-row">
        <Field name="project" label="Project" required />
        <Field name="location" label="Location" required />
      </div>
      <div className="form-row">
        <div className="field">
          <label className="mono" htmlFor="personnel">
            Required personnel
          </label>
          <select id="personnel" name="personnel" required defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {PERSONNEL.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <Field name="workers" label="Number of workers" type="number" required />
      </div>
      <div className="form-row">
        <Field name="start" label="Start date" type="date" required />
        <Field name="duration" label="Duration" placeholder="e.g. 3 weeks" required />
      </div>
      <div className="field">
        <label className="mono" htmlFor="notes">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Machine type, tickets required, shift, site rules."
        />
      </div>
      {error ? <p className="mt steel">{error}</p> : null}
      <div className="form-actions">
        <button className="btn btn-solid" type="submit">
          SEND REQUEST
        </button>
        <a className="btn btn-ghost" href={SITE.phoneHref}>
          OR CALL {SITE.phone}
        </a>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="field">
      <label className="mono" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}
