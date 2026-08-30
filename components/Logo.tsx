import { SITE } from "@/lib/site";

export function Wordmark() {
  return (
    <span className="brand">
      <svg
        className="brand-cross"
        viewBox="0 0 24 64"
        aria-hidden
      >
        <rect x="10" y="0" width="4" height="64" />
        <rect x="0" y="16" width="24" height="4" />
      </svg>
      <span className="brand-name">{SITE.name}</span>
    </span>
  );
}
