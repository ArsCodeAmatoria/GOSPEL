import type { DocControl, RoleLine } from "./types";

export const OHS_META = {
  revision: "01",
  effective: "2026-09-01",
  owner: "WHOOP Safety",
  approvedBy: "WHOOP",
  review: "2027-09-01",
} as const;

export function control(number: string, title: string): DocControl {
  return { number, title, ...OHS_META };
}

export const CREW_ROLES: RoleLine[] = [
  {
    title: "WHOOP",
    body: "Publishes this document, verifies competency before dispatch, and backs stop-work. Does not own the client’s site.",
  },
  {
    title: "Supervisor",
    body: "Confirms the plan, the crew, the zone and the stop criteria. Owns whether the hook moves when WHOOP is supplying supervision.",
  },
  {
    title: "Crane operator",
    body: "Runs only the machine they are competent on, to the chart, after inspection. Stops on an unclear signal or a broken plan.",
  },
  {
    title: "Rigger",
    body: "Selects, inspects and applies the hitch. Does not guess weight, centre of gravity or angle.",
  },
  {
    title: "Signalperson",
    body: "One set of hands on the crane. Holds the zone. STOP means stop.",
  },
  {
    title: "Worker",
    body: "Works to this program and to site rules — whichever is stricter. Uses the three rights. Reports damaged gear.",
  },
];

export const LIFT_PPE = [
  "Hard hat",
  "CSA-grade footwear",
  "High-visibility clothing",
  "Eye protection",
  "Task-rated gloves",
  "Hearing protection where required",
  "Fall protection where the work exposes a fall",
];

export const LIFT_REFS = [
  "Workers Compensation Act s. 21 — known or reasonably foreseeable hazards; instruction and supervision",
  "OHS Regulation (B.C. Reg. 296/97, in force 15 Apr 1998) Part 3 — OHS program, instruction, inspections",
  "OHS Regulation Part 4 s. 4.13 — risk assessment where rescue or evacuation may arise",
  "OHS Regulation Part 8 — PPE; headwear CSA Z94.1-05 or Z94.1-15",
  "OHS Regulation Part 11 — fall protection",
  "OHS Regulation Part 14 — Cranes and Hoists",
  "14.2(5) — CSA Z150-1998, or ASME B30.5-2004, or ASME B30.22-2005 (articulating boom)",
  "14.2(6) — CSA Z248-2004 for tower, hammerhead and self-erecting tower cranes",
  "14.35 pre-use inspection · 14.36 load weight · 14.42.1 critical lift · 14.44 loads over work areas · 14.45 unattended loads · 14.47–14.49 signals",
  "OHS Regulation Part 15 — Rigging",
  "Manufacturer load chart, manual and configuration limits",
  "Site lift plan, FLHA and client rules where stricter",
];
