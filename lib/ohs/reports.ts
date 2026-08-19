import type { ReportKind } from "./types";

export const REPORTS: ReportKind[] = [
  {
    slug: "incident",
    title: "REPORT AN INCIDENT",
    number: "KERN-RPT-001",
    summary: "Injury, dropped load, crane contact, failed rigging, property damage, serious stop-work.",
  },
  {
    slug: "near-miss",
    title: "REPORT A NEAR MISS",
    number: "KERN-RPT-002",
    summary: "It could have hurt someone or dropped the load. It did not, this time.",
  },
  {
    slug: "hazard",
    title: "REPORT A HAZARD",
    number: "KERN-RPT-003",
    summary: "Ground, lines, gear, zone, fatigue, a plan that does not match the site.",
  },
  {
    slug: "damaged-rigging",
    title: "REPORT DAMAGED RIGGING",
    number: "KERN-RPT-004",
    summary: "Cuts, birdcaging, missing tags, opened hooks, mystery pins. Tag it. Isolate it. Tell KERN.",
  },
  {
    slug: "equipment-defect",
    title: "REPORT AN EQUIPMENT DEFECT",
    number: "KERN-RPT-005",
    summary: "Crane, LMI, outriggers, brakes, rope, controls. If it affects lifting, the crane stays down.",
  },
  {
    slug: "bullying-harassment",
    title: "REPORT BULLYING OR HARASSMENT",
    number: "KERN-RPT-006",
    summary:
      "Conduct or comment that humiliates or intimidates a KERN worker. Including when the person is a supervisor or on a client site.",
  },
];

export function getReport(slug: string) {
  return REPORTS.find((item) => item.slug === slug);
}
