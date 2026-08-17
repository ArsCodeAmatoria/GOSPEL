import type { DocControl, DocLink, DocTable, RoleLine } from "./types";

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

/** WorkSafeBC Table 19-1A. BC Hydro publishes the same distances for work near their system. */
export const MAD_APPROACH: DocTable = {
  caption: "TABLE 19-1A — LIMITS OF APPROACH. INTACT LINES. PHASE TO PHASE.",
  columns: ["VOLTAGE", "METRES", "FEET"],
  rows: [
    ["Under 750 V — service / secondary (BC Hydro)", "1", "4"],
    ["Over 750 V to 75 kV", "3", "10"],
    ["Over 75 kV to 250 kV", "4.5", "15"],
    ["Over 250 kV to 550 kV", "6", "20"],
  ],
};

export const MAD_UNKNOWN: DocTable = {
  caption: "VOLTAGE NOT VERIFIED — UNTIL BC HYDRO NAMES IT.",
  columns: ["LINE", "METRES", "FEET"],
  rows: [
    ["Distribution", "3", "10"],
    ["Transmission", "6", "20"],
  ],
};

export const MAD_DOWN: DocTable = {
  caption: "DOWNED, DAMAGED, OR CONTACT. STAY BACK. CALL 911.",
  columns: ["CONDITION", "METRES", "FEET"],
  rows: [
    ["Fallen line or equipment contact — BC Hydro 3 keys", "10", "33"],
    ["Downed transmission or manhole — BC Hydro overhead-system", "33", "108"],
  ],
};

export const MAD_TABLES: DocTable[] = [MAD_APPROACH, MAD_UNKNOWN, MAD_DOWN];

export const MAD_LINKS: DocLink[] = [
  {
    href: "https://www.bchydro.com/safety-outages/electrical-safety/worker-training.html",
    label: "BC HYDRO — WORKING NEAR POWER LINES →",
    note: "Express Connect 1 877 520 1355. Table 19-1A. 30M33 if you cannot hold MAD.",
    external: true,
  },
  {
    href: "https://www.worksafebc.com/en/about-us/news-events/campaigns/planning-work-around-high-voltage-equipment",
    label: "WORKSAFEBC — PLAN FOR 10 →",
    external: true,
  },
  {
    href: "https://www.worksafebc.com/en/resources/health-safety/forms/assurance-of-compliance-with-occupational-health-and-safety-regulation-part-19-form-30m33?lang=en",
    label: "WORKSAFEBC FORM 30M33 →",
    external: true,
  },
];

export const MAD_REFS = [
  "OHS Regulation Part 19 s. 19.24.1 and Table 19-1A — minimum approach distance for persons, tools, machines, material and equipment",
  "19.24.1(2) — tower crane zone-limiting device if practicable",
  "Form 30M33 — assurance in writing if MAD cannot be maintained. Only the coded WorkSafeBC form. Part 19.",
  "14.52.1 — high voltage electrical equipment and cranes",
  "BC Hydro Working near power lines — same Table 19-1A. Express Connect 1 877 520 1355.",
  "BC Hydro: unknown voltage — 3 m distribution, 6 m transmission, until they verify.",
  "BC Hydro: fallen line or contact — 10 m, call 911. Downed transmission or manhole — 33 m.",
];

export const FLYTABLE_REFS = [
  "WorkSafeBC Flytable Safety (Jul 2025) — drop, roll, fly, land. Critical lift.",
  "BC Crane Safety, 14 Aug 2025 — New WorkSafeBC Video: Flytable Lift Safety",
  "OHS Regulation Part 20 — formwork and falsework. Host / prime duty. WHOOP does not write the cycling carpentry.",
  "Manufacturer cycle and shop drawing for this table system — at the lift. Pick points only as the drawing names.",
];

export const FLYTABLE_LINKS: DocLink[] = [
  {
    href: "https://www.worksafebc.com/en/resources/health-safety/videos/flytable-safety",
    label: "WORKSAFEBC — FLYTABLE SAFETY VIDEO →",
    external: true,
  },
  {
    href: "https://bccranesafety.ca/new-worksafebc-video-flytable-lift-safety/",
    label: "BC CRANE SAFETY — FLYTABLE LIFT SAFETY →",
    external: true,
  },
  {
    href: "https://www.efcoforms.com/products/shoring/e-z-fly-tables/",
    label: "EFCO E-Z FLY (OEM PAGE) →",
    note: "Cite. The drawing on this table wins.",
    external: true,
  },
  {
    href: "https://www.doka.com/us/system-groups/doka-floor-systems/tableforms/dokatrusstable/DokaTruss_table",
    label: "DOKA DOKATRUSS TABLE (OEM PAGE) →",
    external: true,
  },
  {
    href: "https://aluma.com/aluma-truss-table-shoring",
    label: "ALUMA TRUSS (OEM PAGE) →",
    note: "User manuals from the manufacturer. Do not copy a hire-yard note as this site’s method.",
    external: true,
  },
];

export const FLYTABLE_ROLES: RoleLine[] = [
  ...CREW_ROLES,
  {
    title: "Formwork supervisor (host)",
    body: "Drops, rolls and lands the table to the manufacturer cycle and the engineered drawing. WHOOP does not lower jacks or invent a cycling sequence.",
  },
  {
    title: "Prime contractor",
    body: "Coordinates floors, drawings, inspections and exclusion. Not a spectator. WorkSafeBC names this duty on flytable work.",
  },
];
