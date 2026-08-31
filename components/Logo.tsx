import { SITE } from "@/lib/site";

export function Wordmark() {
  return (
    <span className="brand">
      <span className="brand-name">{SITE.name}</span>
    </span>
  );
}
