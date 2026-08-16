"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { AddressHit } from "@/lib/form-builder/types";

export function AddressFinder({
  id,
  value,
  invalid,
  required,
  placeholder,
  disabled,
  onChange,
}: {
  id?: string;
  value: string;
  invalid?: boolean;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}) {
  const listId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const picked = useRef(false);
  const [open, setOpen] = useState(false);
  const [hits, setHits] = useState<AddressHit[]>([]);
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (disabled) return;
    if (picked.current) {
      picked.current = false;
      return;
    }
    const q = value.trim();
    if (q.length < 3) {
      setHits([]);
      setStatus("");
      return;
    }
    const ac = new AbortController();
    const timer = window.setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/safety/address?q=${encodeURIComponent(q)}`,
          { signal: ac.signal }
        );
        const json = (await res.json()) as { results?: AddressHit[] };
        const results = json.results ?? [];
        setHits(results);
        setActive(0);
        setOpen(true);
        setStatus(results.length ? "" : "No match. Type the site as written.");
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setHits([]);
        setStatus("Finder unavailable. Type the address.");
      }
    }, 280);
    return () => {
      window.clearTimeout(timer);
      ac.abort();
    };
  }, [value, disabled]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function pick(hit: AddressHit) {
    picked.current = true;
    onChange(hit.label);
    setHits([]);
    setOpen(false);
    setStatus("");
  }

  if (disabled) {
    return (
      <input
        id={id}
        className={`fb-input${invalid ? " invalid" : ""}`}
        disabled
        value={value}
        readOnly
      />
    );
  }

  return (
    <div className="fb-address" ref={wrapRef}>
      <input
        id={id}
        className={`fb-input${invalid ? " invalid" : ""}`}
        type="text"
        autoComplete="street-address"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={open && hits.length > 0}
        aria-controls={listId}
        aria-activedescendant={
          open && hits[active] ? `${listId}-${active}` : undefined
        }
        required={required}
        placeholder={placeholder || "Start typing the site address"}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => hits.length && setOpen(true)}
        onKeyDown={(e) => {
          if (!open || !hits.length) return;
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setActive((i) => Math.min(i + 1, hits.length - 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((i) => Math.max(i - 1, 0));
          } else if (e.key === "Enter" && hits[active]) {
            e.preventDefault();
            pick(hits[active]);
          } else if (e.key === "Escape") {
            setOpen(false);
          }
        }}
      />
      {open && hits.length ? (
        <ul className="fb-address-list" id={listId} role="listbox">
          {hits.map((hit, i) => (
            <li
              key={`${hit.label}-${i}`}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={i === active}
              className={i === active ? "is-active" : undefined}
              onMouseDown={(e) => e.preventDefault()}
              onMouseEnter={() => setActive(i)}
              onClick={() => pick(hit)}
            >
              {hit.label}
            </li>
          ))}
        </ul>
      ) : null}
      {status ? <p className="fb-address-status">{status}</p> : null}
    </div>
  );
}
