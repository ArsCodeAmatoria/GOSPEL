import type { Step } from "@/lib/safety";

export type DocControl = {
  number: string;
  title: string;
  revision: string;
  effective: string;
  owner: string;
  approvedBy: string;
  review: string;
};

export type RoleLine = { title: string; body: string };

export type DocLink = {
  href: string;
  label: string;
  note?: string;
  /** Off-site. Open in a new tab. Do not force a file download. */
  external?: boolean;
};

export type Policy = {
  slug: string;
  title: string;
  number: string;
  summary: string;
  statements: RoleLine[];
  download?: DocLink;
};

export type Swp = {
  slug: string;
  title: string;
  number: string;
  summary: string;
  purpose: string;
  scope: string;
  responsibilities: RoleLine[];
  competency: string[];
  hazards: string[];
  controls: string[];
  ppe: string[];
  equipment: string[];
  procedure: Step[];
  prohibited: string[];
  emergency: string;
  documentation: string[];
  references: string[];
  links?: DocLink[];
  tables?: DocTable[];
};

export type DocTable = {
  caption?: string;
  columns: string[];
  rows: string[][];
};

/** Severity of the named risk — before the control holds it. */
export type RiskLevel = "low" | "moderate" | "high" | "extreme";

export type JhaRow = {
  task: string;
  hazard: string;
  risk: string;
  control: string;
  level: RiskLevel;
};

export type Jha = {
  slug: string;
  title: string;
  number: string;
  summary: string;
  job: string;
  people: string[];
  rows: JhaRow[];
  residual: string;
  stop: string[];
  ppe: string[];
  swpHref?: string;
  swpLabel?: string;
  references: string[];
};

/** This lift, this site, this day. Built on an SWP. Not a second procedure library of how-tos. */
export type Sjp = {
  slug: string;
  title: string;
  number: string;
  summary: string;
  when: string;
  purpose: string;
  basedOn: { href: string; label: string }[];
  facts: string[];
  holds: Step[];
  abort: string[];
  named: string[];
  documentation: string[];
  references: string[];
  download?: DocLink;
  links?: DocLink[];
};

export type SafetyForm = {
  slug: string;
  title: string;
  number: string;
  group: "Daily" | "Lifting" | "Incident" | "Worker" | "Inspection" | "Binder";
  summary: string;
  when: string;
  fields: string[];
  routing: string;
  download?: DocLink;
  /** Extra official or companion downloads shown on the form page. */
  links?: DocLink[];
};

export type Sds = {
  slug: string;
  title: string;
  number: string;
  use: string;
  hazards: string[];
  ppe: string[];
  spill: string;
  firstAid: string;
  storage: string;
};

export type ReportKind = {
  slug: string;
  title: string;
  number: string;
  summary: string;
};

export type CraneLink = {
  href: string;
  label: string;
  note?: string;
};

export type Crane = {
  slug: string;
  title: string;
  number: string;
  family: "TOPLESS" | "HAMMERHEAD" | "LUFFING JIB" | "SELF-ERECTING";
  maker: "Potain" | "WOLFFKRAN" | "Liebherr" | "Zoomlion" | "Raimondi" | "Terex" | "Jaso" | "Pecco";
  summary: string;
  productUrl: string;
  specs: RoleLine[];
  charts: CraneLink[];
  manuals: CraneLink[];
  inspect: string[];
  maint: string[];
  forms: CraneLink[];
};

export type LibraryCard = {
  href: string;
  number: string;
  title: string;
  summary: string;
  meta?: string;
  risk?: RiskLevel;
};
