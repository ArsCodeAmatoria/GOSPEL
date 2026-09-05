"use client";

const FORMULAS: { name: string; abbr: string }[] = [
  { name: "Cube", abbr: "L × w × H × U.W." },
  { name: "Cylinder", abbr: "π × D²/4 × L × U.W." },
  { name: "Hollow ball", abbr: "π × D × D × T × U.W." },
  { name: "Load (share)", abbr: "y/z × W" },
  { name: "Pipe", abbr: "π × D × L × T × U.W." },
  { name: "Pipe (mean Ø)", abbr: "π × M.D. × L × T × U.W." },
  { name: "Plate steel", abbr: "L × w × T × U.W." },
  { name: "Solid cylinder", abbr: "π r² × L" },
  { name: "Stress", abbr: "w / (# slings × L/H)" },
  { name: "Tandem lift", abbr: "W × D = W × D" },
  { name: "Tension", abbr: "# lines × S.L. / (2 × H)" },
  { name: "Wedge", abbr: "w × L/2 × H × U.W." },
];

const ACRONYMS: { abbr: string; name: string }[] = [
  { abbr: "COG", name: "centre of gravity" },
  { abbr: "CSA", name: "Canadian Standards Association" },
  { abbr: "ASME", name: "American Society of Mechanical Engineers" },
  { abbr: "LMI", name: "load moment indicator" },
  { abbr: "WLL", name: "working load limit" },
  { abbr: "OHS", name: "Occupational Health and Safety" },
  { abbr: "PPE", name: "personal protective equipment" },
  { abbr: "NDT", name: "non-destructive testing" },
  { abbr: "PSLP", name: "permissible single line pull" },
  { abbr: "IWRC", name: "independent wire rope core" },
  { abbr: "EIPS", name: "extra improved plough steel" },
  { abbr: "FLHA", name: "field level hazard assessment" },
];

export function FormulaSheet({
  open,
  onClose,
  extraFormulas = [],
  extraAcronyms = [],
}: {
  open: boolean;
  onClose: () => void;
  extraFormulas?: { name: string; abbr: string }[];
  extraAcronyms?: { abbr: string; name: string }[];
}) {
  if (!open) return null;
  const formulas = [...FORMULAS, ...extraFormulas];
  const acronyms = [...ACRONYMS, ...extraAcronyms];

  return (
    <div className="redtc-sheet">
      <button type="button" className="redtc-sheet-back" aria-label="Close formula sheet" onClick={onClose} />
      <div className="redtc-sheet-panel" role="dialog" aria-labelledby="redtc-formulas-title">
        <div className="redtc-sheet-head">
          <div>
            <p className="mono steel">Supplied at the sitting</p>
            <h2 id="redtc-formulas-title" className="display">
              Formulas + acronyms
            </h2>
            <p className="steel">Same sheet Red Seal provides. π = 3.14. No code book.</p>
          </div>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Close
          </button>
        </div>
        <table className="redtc-table">
          <thead>
            <tr>
              <th>Shape</th>
              <th>Formula</th>
            </tr>
          </thead>
          <tbody>
            {formulas.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td className="mono">{row.abbr}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mono steel mt">Acronyms</p>
        <dl className="redtc-acronyms">
          {acronyms.map((item) => (
            <div key={item.abbr}>
              <dt className="mono">{item.abbr}</dt>
              <dd>{item.name}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
