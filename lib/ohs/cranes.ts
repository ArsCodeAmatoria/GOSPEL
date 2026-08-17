import type { Crane } from "./types";

/** Official Manitowoc / Potain data-sheet downloads. Serial chart in the cab wins. */
function mw(id: number) {
  return `https://www.manitowoc.com/media/${id}/download`;
}

export const CRANE_GROUP_ORDER = [
  "TOPLESS",
  "LUFFING JIB",
  "SELF-ERECTING",
] as const;

export const CRANES: Crane[] = [
  {
    slug: "mdt-219",
    title: "POTAIN MDT 219",
    number: "WHOOP-CRN-001",
    family: "TOPLESS",
    maker: "Potain",
    summary:
      "Topless city crane. J8 and J10. CCS. The published range is below. Lift to the serial chart in the cab.",
    productUrl: "https://www.manitowoc.com/potain/top-slewing-cranes/mdt-219-j10",
    specs: [
      {
        title: "J10",
        body: "10 t (11 USt) max. 65 m (213.3 ft) jib. 1.9 t (2.1 USt) at max radius. 70.4 m (231 ft) hook height on the published base.",
      },
      {
        title: "J8",
        body: "8 t (8.8 USt) max. Same 65 m jib. 1.95 t (2.1 USt) at max radius. Same published hook height on base.",
      },
      {
        title: "Control",
        body: "Manitowoc CCS. Cab configuration from the display: jib length, trolley limits, sensors. Top Tracing 3 where fitted. Cab-IN operator lift where fitted.",
      },
      {
        title: "Mast",
        body: "K-mast and climbing gear shared with other Potain top-slewing models. Confirm this mast, this tie-in, this climbing frame against the configuration in the cab.",
      },
    ],
    charts: [
      {
        href: mw(13461),
        label: "MDT 219 J10 — ASCE LOAD CHART →",
        note: "Imperial. North American wind. 02D_ASCEUSt_MDT219J10.",
      },
      {
        href: mw(13453),
        label: "MDT 219 J8 — ASCE LOAD CHART →",
        note: "Imperial. 02D_ASCEUSt_MDT219J8.",
      },
      {
        href: mw(13462),
        label: "MDT 219 J10 — EN 14439 C25 DATA SHEET →",
      },
      {
        href: "https://www.manitowoc.com/potain/top-slewing-cranes/mdt-219-j8",
        label: "MDT 219 J8 — PRODUCT PAGE →",
      },
      {
        href: mw(13432),
        label: "MDT CCS CITY RANGE BROCHURE →",
      },
    ],
    manuals: [
      {
        href: "https://www.manitowoc.com/manuals",
        label: "MANITOWOC MANUALS — BRAND POTAIN →",
        note: "Operator, service, inspection and lubrication. Filter brand Potain. Use the serial on the builder’s plate.",
      },
      {
        href: "https://www.manitowoc.com/potain/top-slewing-cranes/mdt-219-j10#documentation",
        label: "MDT 219 J10 DOCUMENTATION ON MANITOWOC →",
      },
    ],
    inspect: [
      "Serial, jib length, reeving, counterweight and mast match the chart in the cab",
      "CCS display: configuration, limits, no bypass, no uncleared alarm",
      "Hoist rope, trolley rope, hook block, trolley, jib and counter-jib",
      "Slew ring bolts, weathervaning, anemometer",
      "Mast bolts, pins, ties, climbing frame if fitted",
      "Access, platforms, Cab-IN if fitted",
      "Limit switches: hoist, trolley, slew. Anti-two-block",
      "Out-of-service / weathervane set for this jib",
    ],
    maint: [
      "CCS maintenance screen — items due this interval",
      "Hoist and trolley winches: oil, brakes, rope spooling",
      "Slew: grease, bolts, weathervane function",
      "Trolley: wheels, rope, limits",
      "Electrical, earthing, aviation lights",
      "OEM lubrication chart for this serial",
    ],
    forms: [
      { href: "/safety/form/tower-pre-use", label: "TOWER PRE-USE — WHOOP-FRM-027 →" },
      { href: "/safety/builder/tower-pre-use", label: "FILL TOWER PRE-USE →" },
      {
        href: "/safety/form/tower-weekly-maintenance",
        label: "TOWER WEEKLY MAINTENANCE — WHOOP-FRM-030 →",
      },
      {
        href: "/safety/form/tower-monthly-maintenance",
        label: "TOWER MONTHLY MAINTENANCE — WHOOP-FRM-031 →",
      },
    ],
  },
  {
    slug: "mrh-125",
    title: "POTAIN MRH 125",
    number: "WHOOP-CRN-002",
    family: "LUFFING JIB",
    maker: "Potain",
    summary:
      "Hydraulic luffing jib on a topless upper. VVH rams, no luffing rope. Built for tight urban sites. Lift to the serial chart in the cab.",
    productUrl: "https://www.manitowoc.com/potain/top-slewing-cranes/mrh-125",
    specs: [
      {
        title: "Capacity",
        body: "8 t (8.8 USt) max. 50 m (164 ft) jib. 2 t (2.2 USt) at 50 m. Jib in 5 m steps from 30 m to 50 m.",
      },
      {
        title: "Footprint",
        body: "Counter-jib 7 m. Weathervane radius about 10 m on the 50 m jib. Cab can sit left or right of the jib.",
      },
      {
        title: "Luffing",
        body: "VVH hydraulic. Jib can be fully raised in about two minutes. Oil tank and retention tank with level gauges. 2-fall / 4-fall reeving.",
      },
      {
        title: "Mast",
        body: "K-mast 1.6 m and 2.0 m. Cab-IN where fitted. Upper transports as a short package — four containers or four trucks for the 50 m jib upper.",
      },
    ],
    charts: [
      {
        href: mw(13899),
        label: "MRH 125 — ASCE LOAD CHART →",
        note: "Imperial. 02D_ASCEUSt_MRH125.",
      },
      {
        href: mw(13900),
        label: "MRH 125 — EN 14439 C25 DATA SHEET →",
        note: "Metric load curves, ballast, mechanisms.",
      },
      {
        href: mw(13901),
        label: "MRH 125 — EN 14439 C50 DATA SHEET →",
      },
      {
        href: mw(13898),
        label: "MRH 125 FLYER →",
      },
    ],
    manuals: [
      {
        href: "https://www.manitowoc.com/manuals",
        label: "MANITOWOC MANUALS — BRAND POTAIN →",
        note: "Operator, service, inspection and lubrication for this serial. Hydraulic luffing lives in the maintenance manual — follow that interval.",
      },
      {
        href: "https://www.manitowoc.com/potain/top-slewing-cranes/mrh-125#documentation",
        label: "MRH 125 DOCUMENTATION ON MANITOWOC →",
      },
    ],
    inspect: [
      "Serial, jib length, reeving, counterweight and mast match the chart in the cab",
      "Hydraulic luffing: rams, hoses, tank, retention tank, leaks, level",
      "Jib pins, keepers, luffing geometry. Jib can go near-vertical — check clearance",
      "Hoist rope, hook block, anti-two-block",
      "Slew, weathervaning at the published short radius for this jib",
      "Mast bolts, pins, ties. Cab side (left or right) as installed",
      "Limit devices and overload. Anemometer",
      "Out-of-service jib position per the OEM for this wind",
    ],
    maint: [
      "Hydraulic oil, filters, ram glands, hoses — OEM interval",
      "Luffing pins and greasing",
      "Hoist winch oil, brakes, rope",
      "Slew grease and bolts",
      "Electrical and earthing",
      "CCS or cab maintenance screen where fitted",
    ],
    forms: [
      {
        href: "/safety/form/luffing-jib-inspection",
        label: "LUFFING JIB INSPECTION — WHOOP-FRM-028 →",
      },
      { href: "/safety/builder/luffing-jib-inspection", label: "FILL LUFFING JIB INSPECTION →" },
      { href: "/safety/form/tower-pre-use", label: "TOWER PRE-USE — WHOOP-FRM-027 →" },
      {
        href: "/safety/form/tower-weekly-maintenance",
        label: "TOWER WEEKLY MAINTENANCE — WHOOP-FRM-030 →",
      },
      {
        href: "/safety/form/tower-monthly-maintenance",
        label: "TOWER MONTHLY MAINTENANCE — WHOOP-FRM-031 →",
      },
    ],
  },
  {
    slug: "luffing-jib",
    title: "POTAIN LUFFING JIB",
    number: "WHOOP-CRN-003",
    family: "LUFFING JIB",
    maker: "Potain",
    summary:
      "MRH hydraulic luffers and MR rope luffers. Same job: a jib that luffs so the crane can work tight to the building. Match the machine on site to the right chart.",
    productUrl: "https://www.manitowoc.com/potain/top-slewing-cranes/mrh-125",
    specs: [
      {
        title: "MRH 125",
        body: "Hydraulic topless luffer. 8 t, 50 m jib. See WHOOP-CRN-002.",
      },
      {
        title: "MRH 175",
        body: "Hydraulic topless luffer. 10 t (11 USt), 55 m (180 ft) jib. 1.5 t (1.65 USt) at 55 m. Weathervane about 10 m.",
      },
      {
        title: "MR 229",
        body: "Current rope-luffing jib with CCS. 14 t (15.4 USt), 55 m (180 ft) jib. 2.7 t (2.95 USt) at max jib. Out-of-service radius from about 10.25 m.",
      },
      {
        title: "MR 225 A",
        body: "Earlier rope luffer still on sites. 55 m jib. Cathead and luffing rope. Confirm the serial chart — this is a non-current product.",
      },
    ],
    charts: [
      {
        href: "/safety/crane/mrh-125",
        label: "MRH 125 — CHARTS AND FORMS →",
      },
      {
        href: mw(14214),
        label: "MRH 175 — ASCE LOAD CHART →",
      },
      {
        href: "https://www.manitowoc.com/potain/top-slewing-cranes/mrh-175",
        label: "MRH 175 — PRODUCT PAGE →",
      },
      {
        href: mw(16824),
        label: "MR 229 — ASCE LOAD CHART →",
      },
      {
        href: "https://www.manitowoc.com/potain/top-slewing-cranes/mr-229",
        label: "MR 229 — PRODUCT PAGE →",
      },
      {
        href: "https://www.manitowoc.com/sites/default/files/media/divers/file/2023-03/02D_EN14439C25D25_MR225A_2009_36-15.pdf",
        label: "MR 225 A — EN 14439 C25 DATA SHEET →",
      },
      {
        href: "https://www.manitowoc.com/potain/top-slewing-cranes/mr-225",
        label: "MR 225 A — PRODUCT PAGE →",
      },
    ],
    manuals: [
      {
        href: "https://www.manitowoc.com/manuals",
        label: "MANITOWOC MANUALS — BRAND POTAIN →",
        note: "Rope luffers: luffing rope, cathead, luffing winch. Hydraulic luffers: VVH rams and tank. The serial manual names the interval.",
      },
    ],
    inspect: [
      "Which luffer: hydraulic (MRH) or rope (MR). Inspection follows that machine",
      "Jib angle against the chart for this radius and this reeving",
      "Out-of-service / weathervane radius for this jib length",
      "Rope luffer: luffing rope, cathead sheaves, luffing winch, dead ends",
      "Hydraulic luffer: rams, hoses, tank, pins — see MRH 125",
      "Hoist rope, hook, limits, overload, anemometer",
      "Slew, mast, ties, access",
    ],
    maint: [
      "Luffing system on the OEM interval for this serial",
      "Hoist and slew as the lubrication chart",
      "Wire rope: hoist and, on MR machines, luffing line",
      "Structure: jib, cathead or ram attachments, mast",
    ],
    forms: [
      {
        href: "/safety/form/luffing-jib-inspection",
        label: "LUFFING JIB INSPECTION — WHOOP-FRM-028 →",
      },
      { href: "/safety/builder/luffing-jib-inspection", label: "FILL LUFFING JIB INSPECTION →" },
      {
        href: "/safety/form/tower-weekly-maintenance",
        label: "TOWER WEEKLY MAINTENANCE — WHOOP-FRM-030 →",
      },
      {
        href: "/safety/form/tower-monthly-maintenance",
        label: "TOWER MONTHLY MAINTENANCE — WHOOP-FRM-031 →",
      },
    ],
  },
  {
    slug: "self-erecting",
    title: "POTAIN SELF-ERECTING",
    number: "WHOOP-CRN-004",
    family: "SELF-ERECTING",
    maker: "Potain",
    summary:
      "Hup, Igo and Igo T. Unfold, lift, fold. CSA Z248 still applies. Lift to the serial chart for this jib position and this ballast.",
    productUrl: "https://www.manitowoc.com/potain/self-erecting-cranes",
    specs: [
      {
        title: "Hup 32-27",
        body: "4 t (4.4 USt). 32 m (105 ft) jib. 1 t (1.1 USt) at max radius. 27 m (89 ft) hook height on base, up to about 40 m with raised jib. Multiple mast and jib configurations.",
      },
      {
        title: "Hup 40-30",
        body: "4 t (4.4 USt). 40 m (131 ft) jib. 1 t (1.1 USt) at max radius. 30 m (98 ft) hook height on base.",
      },
      {
        title: "Igo T 85",
        body: "Trolley self-erect with a tower. Published product guide and ASME / metric data sheets. Confirm jib and ballast on the plate.",
      },
      {
        title: "Igo T 130",
        body: "Larger Igo T. ASME and metric data sheets on Manitowoc. 8 t class on the published range leaflet.",
      },
      {
        title: "Igo 50",
        body: "Folding Igo. Metric data sheet and product guide. Confirm the imperial chart in the cab for North American machines.",
      },
    ],
    charts: [
      {
        href: mw(12966),
        label: "HUP 32-27 — ASME LOAD CHART →",
      },
      {
        href: mw(12967),
        label: "HUP 32-27 — METRIC DATA SHEET →",
      },
      {
        href: "https://www.manitowoc.com/potain/self-erecting-cranes/hup-32-27",
        label: "HUP 32-27 — PRODUCT PAGE →",
      },
      {
        href: mw(12984),
        label: "HUP 40-30 — ASME LOAD CHART →",
      },
      {
        href: "https://www.manitowoc.com/potain/self-erecting-cranes/hup-40-30",
        label: "HUP 40-30 — PRODUCT PAGE →",
      },
      {
        href: mw(13108),
        label: "IGO T 85 A — ASME LOAD CHART →",
      },
      {
        href: mw(13106),
        label: "IGO T 85 A — PRODUCT GUIDE →",
      },
      {
        href: "https://www.manitowoc.com/potain/self-erecting-cranes/igo-t-85",
        label: "IGO T 85 — PRODUCT PAGE →",
      },
      {
        href: mw(13119),
        label: "IGO T 130 — ASME LOAD CHART →",
      },
      {
        href: "https://www.manitowoc.com/potain/self-erecting-cranes/igo-t-130",
        label: "IGO T 130 — PRODUCT PAGE →",
      },
      {
        href: mw(13044),
        label: "IGO 50 — METRIC DATA SHEET →",
      },
      {
        href: mw(13043),
        label: "IGO 50 — PRODUCT GUIDE →",
      },
      {
        href: "https://www.manitowoc.com/potain/self-erecting-cranes",
        label: "POTAIN SELF-ERECTING RANGE →",
      },
    ],
    manuals: [
      {
        href: "https://www.manitowoc.com/manuals",
        label: "MANITOWOC MANUALS — BRAND POTAIN →",
        note: "Unfold / fold sequence, ballast, outriggers, remote, lubrication. Smart Set-up on Hup is in the serial manual — follow it.",
      },
    ],
    inspect: [
      "Chassis, outriggers, jacks, pads, slope within the OEM limit",
      "Ballast complete and locked as the chart for this jib",
      "Unfold complete. Transport locks off. Pins and keepers in",
      "Jib position (horizontal / raised / short) matches the chart in use",
      "Remote or cab: function, E-stop, no uncleared alarm",
      "Hoist rope, hook, trolley or luffing as fitted, limits",
      "Power: voltage, phase, earthing as the plate",
      "Weathervane / out-of-service as the OEM for this wind",
    ],
    maint: [
      "Unfold / fold mechanisms, pins, hydraulic rams where fitted",
      "Outrigger beams, jacks, holding valves",
      "Hoist, slew, trolley — OEM lubrication",
      "Electrical panel, remote batteries, cables",
      "Wire rope and hook block",
      "Transport axles and locks when the crane will travel",
    ],
    forms: [
      {
        href: "/safety/form/self-erect-inspection",
        label: "SELF-ERECT INSPECTION — WHOOP-FRM-029 →",
      },
      { href: "/safety/builder/self-erect-inspection", label: "FILL SELF-ERECT INSPECTION →" },
      { href: "/safety/form/tower-pre-use", label: "TOWER PRE-USE — WHOOP-FRM-027 →" },
      {
        href: "/safety/form/tower-weekly-maintenance",
        label: "TOWER WEEKLY MAINTENANCE — WHOOP-FRM-030 →",
      },
      {
        href: "/safety/form/tower-monthly-maintenance",
        label: "TOWER MONTHLY MAINTENANCE — WHOOP-FRM-031 →",
      },
    ],
  },
];

export function getCrane(slug: string) {
  return CRANES.find((item) => item.slug === slug);
}
