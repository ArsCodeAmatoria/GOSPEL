"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LibraryCard } from "@/lib/ohs";

export function SafetyLibrary({
  items,
  placeholder,
}: {
  items: LibraryCard[];
  placeholder: string;
}) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) =>
      `${item.number} ${item.title} ${item.summary} ${item.meta ?? ""}`
        .toLowerCase()
        .includes(q)
    );
  }, [items, query]);

  return (
    <div className="ohs-library">
      <label className="ohs-search">
        <span className="mono steel">SEARCH</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
        />
      </label>
      <p className="mono steel ohs-count">
        {filtered.length} DOCUMENT{filtered.length === 1 ? "" : "S"}
      </p>
      <nav className="ohs-lib-list" aria-label="Document library">
        {filtered.map((item) => (
          <Link key={item.href} href={item.href}>
            <span className="mono steel">{item.number}</span>
            <strong className="display">{item.title}</strong>
            <em>{item.summary}</em>
          </Link>
        ))}
      </nav>
      {filtered.length === 0 ? (
        <p className="lede mt">No documents match. Try the number or the task.</p>
      ) : null}
    </div>
  );
}
