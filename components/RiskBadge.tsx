import type { RiskLevel } from "@/lib/ohs";

export const RISK_LABEL: Record<RiskLevel, string> = {
  low: "LOW",
  moderate: "MODERATE",
  high: "HIGH",
  extreme: "EXTREME",
};

const ORDER: RiskLevel[] = ["low", "moderate", "high", "extreme"];

export function peakRisk(levels: RiskLevel[]): RiskLevel | undefined {
  if (!levels.length) return undefined;
  return levels.reduce((peak, level) =>
    ORDER.indexOf(level) > ORDER.indexOf(peak) ? level : peak
  );
}

export function RiskBadge({ level }: { level: RiskLevel }) {
  return (
    <span className="risk-badge" data-level={level}>
      {RISK_LABEL[level]}
    </span>
  );
}
