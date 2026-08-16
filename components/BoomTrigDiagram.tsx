export function BoomTrigDiagram() {
  return (
    <figure className="wire-diagram">
      <svg
        viewBox="0 0 420 270"
        role="img"
        aria-label="Mobile crane boom as a right triangle. Boom length L is the hypotenuse. Boom angle theta is from the horizontal at the pin. Height H is L times sin theta. Radius R from the pin is L times cos theta."
      >
        <line className="ghost" x1="36" y1="208" x2="384" y2="208" />
        <line className="ghost" x1="88" y1="188" x2="250" y2="188" />
        <line className="ghost" x1="250" y1="44" x2="250" y2="188" />
        <line x1="88" y1="188" x2="250" y2="44" />
        <circle cx="88" cy="188" r="5" />
        <circle cx="250" cy="44" r="5" />
        <path className="arc" d="M148 188 A60 60 0 0 1 136 142" />
        <text x="88" y="178" textAnchor="middle">
          PIN
        </text>
        <text x="250" y="34" textAnchor="middle">
          TIP
        </text>
        <text x="178" y="108" transform="rotate(-42 178 108)">
          L
        </text>
        <text x="262" y="124">H</text>
        <text x="164" y="204">R</text>
        <text className="theta" x="156" y="172">
          θ
        </text>
        <text className="muted" x="300" y="184">
          HORIZONTAL
        </text>
      </svg>
      <figcaption className="mono">
        θ is boom angle from the horizontal — what the angle indicator reads.
        H = L × sin θ. R from the pin = L × cos θ.
      </figcaption>
    </figure>
  );
}
