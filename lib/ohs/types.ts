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

export type Policy = {
  slug: string;
  title: string;
  number: string;
  summary: string;
  statements: RoleLine[];
  download?: {
    href: string;
    label: string;
    note?: string;
    /** Off-site (BCCSA). Open in a new tab. Do not force a file download. */
    external?: boolean;
  };
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
};

export type JhaRow = {
  task: string;
  hazard: string;
  risk: string;
  control: string;
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

export type SafetyForm = {
  slug: string;
  title: string;
  number: string;
  group: "Daily" | "Lifting" | "Incident" | "Worker" | "Inspection";
  summary: string;
  when: string;
  fields: string[];
  routing: string;
  download?: {
    href: string;
    label: string;
    note?: string;
    external?: boolean;
  };
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
  family: "TOPLESS" | "LUFFING JIB" | "SELF-ERECTING";
  maker: "Potain";
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
};
