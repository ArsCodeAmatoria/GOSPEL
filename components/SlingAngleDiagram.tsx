export function SlingAngleDiagram() {
  return (
    <figure className="wire-diagram">
      <svg
        viewBox="0 0 420 270"
        role="img"
        aria-label="Two-leg bridle. Sling angle theta is measured from the horizontal. Tension T runs up each sling. Load W hangs from the middle."
      >
        <line className="ghost" x1="40" y1="200" x2="380" y2="200" />
        <line x1="210" y1="36" x2="70" y2="200" />
        <line x1="210" y1="36" x2="350" y2="200" />
        <circle cx="210" cy="36" r="5" />
        <rect x="62" y="196" width="16" height="8" />
        <rect x="342" y="196" width="16" height="8" />
        <rect x="70" y="204" width="280" height="10" />
        <path d="M210 214 v44" />
        <path d="M204 248 l6 10 6 -10" />
        <path className="arc" d="M118 200 A48 48 0 0 1 96 164" />
        <text x="210" y="26" textAnchor="middle">
          HOOK
        </text>
        <text x="124" y="118" transform="rotate(-49 124 118)">
          T
        </text>
        <text x="296" y="118" transform="rotate(49 296 118)">
          T
        </text>
        <text x="222" y="250">W</text>
        <text className="theta" x="132" y="176">
          θ
        </text>
        <text className="muted" x="210" y="190" textAnchor="middle">
          HORIZONTAL
        </text>
      </svg>
      <figcaption className="mono">
        θ is the sling angle — from the sling to the horizontal. Not the angle
        between the two legs.
      </figcaption>
    </figure>
  );
}
