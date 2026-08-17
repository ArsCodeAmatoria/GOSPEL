export const INSPECTION_LOOP = [
  { n: "01", title: "FINDING", body: "Name the defect, the missing control, or the broken plan. Crane, rigging, ground, zone, or people." },
  { n: "02", title: "ACTION", body: "What will change. Repair, replace, isolate, rewrite the plan, add a spotter, stop the lift." },
  { n: "03", title: "RESPONSIBLE PERSON", body: "A named person. Not “the site.” Not “someone.”" },
  { n: "04", title: "DUE DATE", body: "A date that matches the risk. Out-of-service gear is immediate, not next Tuesday." },
  { n: "05", title: "COMPLETION", body: "Done, with evidence. A photo, a ticket, a replaced sling. Not a promise." },
  { n: "06", title: "VERIFICATION", body: "A second set of eyes. The person who found it can close it only if they can prove it." },
] as const;

export const INSPECTION_SCOPE = [
  "Crane pre-use and defects that affect lifting",
  "Potain tower, luffing jib and self-erecting machines",
  "Rigging and below-the-hook gear",
  "Outriggers, mats, mast ties and supporting surface",
  "Exclusion zone and access",
  "Communication equipment",
  "PPE used on the lift",
  "Corrective actions from incidents and near misses on lifting work",
];
