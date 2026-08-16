import { SafetyLibrary } from "@/components/SafetyLibrary";
import {
  FORMS,
  POLICIES,
  REPORTS,
  SDS,
  JHAS,
  SWPS,
} from "@/lib/ohs";
import type { SafetyLibraryKind } from "@/lib/safety";

export function SafetyLibraryPanel({ kind }: { kind: SafetyLibraryKind }) {
  if (kind === "swp") {
    return (
      <SafetyLibrary
        placeholder="Setup, signals, slings, powerlines…"
        items={SWPS.map((item) => ({
          href: `/safety/swp/${item.slug}`,
          number: item.number,
          title: item.title,
          summary: item.summary,
        }))}
      />
    );
  }
  if (kind === "jha") {
    return (
      <SafetyLibrary
        placeholder="Overload, pinch, powerlines, suspended load…"
        items={JHAS.map((item) => ({
          href: `/safety/jha/${item.slug}`,
          number: item.number,
          title: item.title,
          summary: item.summary,
        }))}
      />
    );
  }
  if (kind === "policy") {
    return (
      <SafetyLibrary
        placeholder="Competency, PPE, refuse unsafe work…"
        items={POLICIES.map((item) => ({
          href: `/safety/policy/${item.slug}`,
          number: item.number,
          title: item.title,
          summary: item.summary,
        }))}
      />
    );
  }
  if (kind === "form") {
    return (
      <SafetyLibrary
        placeholder="FLHA, lift plan, inspection…"
        items={[
          {
            href: "/safety/builder",
            number: "WHOOP-FRM",
            title: "FORM BUILDER",
            summary:
              "Assemble approved Safety Blocks. Fill on this device. Download or email a PDF.",
            meta: "builder",
          },
          ...FORMS.map((item) => ({
            href: `/safety/form/${item.slug}`,
            number: item.number,
            title: item.title,
            summary: item.summary,
            meta: item.group,
          })),
        ]}
      />
    );
  }
  if (kind === "sds") {
    return (
      <SafetyLibrary
        placeholder="Diesel, hydraulic oil, grease…"
        items={SDS.map((item) => ({
          href: `/safety/sds/${item.slug}`,
          number: item.number,
          title: item.title,
          summary: item.use,
        }))}
      />
    );
  }
  return (
    <SafetyLibrary
      placeholder="Incident, near miss, damaged rigging…"
      items={REPORTS.map((item) => ({
        href: `/safety/report/${item.slug}`,
        number: item.number,
        title: item.title,
        summary: item.summary,
      }))}
    />
  );
}
