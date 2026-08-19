export const SITE = {
  name: "KERN",
  legalName: "Kern Crane",
  descriptor: "CRANE + RIGGING",
  phone: "1 604 431 2000",
  phoneHref: "tel:+16044312000",
  email: "hire@kern.onl",
  emailHref: "mailto:hire@kern.onl",
  location: "British Columbia, Canada",
  tagline: "WE MOVE HEAVY THINGS.",
  sub: "AND WE SHOW YOU HOW WE DO IT.",
  dek: "A complete crane operations and rigging company.",
  position: "The people and the systems.",
  roles:
    "Qualified crane operators, riggers, signalpersons, crane supervisors and safety support for construction.",
  method:
    "Experienced people. Structured supervision. Competency verification. Rigging and crane safety systems. Proven keeps the people, the process and the documentation behind every crane operation organized, verified and accountable.",
  close:
    "We go beyond supplying labour. We provide the people and systems that support the safe and professional operation of cranes.",
  description:
    "KERN is a complete crane operations and rigging company providing qualified crane operators, riggers, signalpersons, crane supervisors, and safety support to construction projects. KERN combines experienced people with structured supervision, competency verification, rigging and crane safety systems, and its proprietary PROVEN technology platform to ensure the people, processes, and documentation behind every crane operation are organized, verified, and accountable. KERN goes beyond supplying labour. We provide the people and systems that support the safe and professional operation of cranes.",
  system: "PROVEN",
} as const;

export const ABOUT = [
  {
    name: "The work",
    body: "A complete crane operations and rigging company. Operators, riggers, signalpersons, crane supervisors and safety support for construction.",
  },
  {
    name: "The people",
    body: "Named, qualified, supervised. Tickets, experience and practical competency checked before anyone is sent.",
  },
  {
    name: "The system",
    body: "Structured supervision, competency verification, rigging and crane safety systems, and Proven — so the people, the process and the documentation stay organized, verified and accountable.",
  },
  {
    name: "British Columbia",
    body: "Based here. Deployed where the lift is.",
  },
  {
    name: "Open book",
    body: "Proven is public. Clients and workers can read how we expect the work to be done before the gate.",
  },
  {
    name: "COR® Certified",
    body: "Occupational health and safety management system certified through the BC Construction Safety Alliance.",
  },
] as const;

export const STANDARDS = [
  {
    name: "CSA Z150 / Z248",
    body: "Safety code on mobile cranes. Code for tower cranes.",
    logo: "/marks/csa-group.png",
    href: "https://www.csagroup.org/",
  },
  {
    name: "WorkSafeBC",
    body: "Occupational Health and Safety Regulation, including Part 14 — Cranes and Hoists.",
    logo: "/marks/worksafebc.png",
    logoOnInk: "/marks/worksafebc-on-ink.png",
    href: "https://www.worksafebc.com/",
  },
  {
    name: "BC Crane Safety",
    body: "Crane operator certification and competency requirements in British Columbia.",
    logo: "/marks/bc-crane-safety.png",
    logoOnInk: "/marks/bc-crane-safety-on-ink.png",
    href: "https://bccranesafety.ca/",
  },
  {
    name: "Technical Safety BC",
    body: "Applicable technical safety requirements for regulated equipment.",
    logo: "/marks/technical-safety-bc.png",
    logoOnInk: "/marks/technical-safety-bc-on-ink.png",
    href: "https://www.technicalsafetybc.ca/",
  },
  {
    name: "ASME B30",
    body: "Cranes, derricks, hoists, slings and related lifting equipment.",
    logo: "/marks/asme.png",
    logoOnInk: "/marks/asme-on-ink.png",
    href: "https://www.asme.org/",
  },
  {
    name: "Manufacturer requirements",
    body: "Load charts, manuals and configuration limits for the machine on site.",
  },
  {
    name: "Site policies",
    body: "The client's site rules, orientations and lift plans. Where they are stricter, they win.",
  },
] as const;

export const COR = {
  mark: "COR® Certified",
  title: "Certificate of Recognition",
  partner: "BC Construction Safety Alliance",
  partnerUrl: "https://www.bccsa.ca/cor_program.php",
  program: "WorkSafeBC Certificate of Recognition",
  /** Licensed BCCSA COR® mark. Drop the official file at this path. */
  asset: "/cor/bccsa-cor-certified.png",
  packHref: "/downloads/cor.zip",
  certificateNumber: "",
  certifiedDate: "",
  classification: "",
} as const;

export const NAV = [
  { href: "/", label: "WORK", num: "01" },
  { href: "/crew", label: "THE CREW", num: "02" },
  { href: "/safety", label: "PROVEN", num: "03" },
  { href: "/whoopwire", label: "KERNWIRE", num: "04" },
  { href: "/philosophy", label: "PHILOSOPHY", num: "05" },
  { href: "/hire", label: "HIRE A CREW", num: "06" },
] as const;

export const SERVICES = [
  {
    num: "01",
    title: "CRANE OPERATORS",
    body: "Qualified operators matched to the machine, the lift and the site — not just the ticket.",
  },
  {
    num: "02",
    title: "RIGGERS",
    body: "Qualified riggers verified before deployment. We check how they rig, not only what they hold on paper.",
  },
  {
    num: "03",
    title: "SIGNALPERSONS",
    body: "Competent signalpersons for crane and lifting operations. Clear signals. No guessing. No split attention.",
  },
  {
    num: "04",
    title: "CRANE SUPERVISORS",
    body: "Structured supervision on the lift. The plan, the crew, the stop. Accountable before the hook moves.",
  },
  {
    num: "05",
    title: "SAFETY SUPPORT",
    body: "Safety people and Proven on the job. Process and documentation organized, verified and accountable.",
  },
] as const;

export const PRINCIPLES = [
  "SHOW UP.",
  "BE COMPETENT.",
  "WORK SAFE.",
  "DO WHAT YOU SAID YOU'D DO.",
] as const;

export const BELIEFS = [
  {
    title: "Competent people matter.",
    body: "A ticket is a starting point. We verify qualifications, experience and practical competency before anyone is placed.",
  },
  {
    title: "Safety information should be accessible.",
    body: "Proven is public. Clients, workers and contractors should be able to see how we expect work to be performed before they hire us. No portal. No request form. No expiry date.",
  },
  {
    title: "Documentation should be useful.",
    body: "If a procedure cannot be followed on a jobsite, it is not a procedure. It is theatre.",
  },
  {
    title: "Management should keep its promises.",
    body: "If we say a crew will be there, they will be there. If something changes, you hear it from us first.",
  },
  {
    title: "Workers should be treated with respect.",
    body: "We supply people, not units. Competent tradespeople get briefed, paid correctly and backed when they refuse unsafe work.",
  },
  {
    title: "Customers should know exactly what they are getting.",
    body: "Role, competency, tickets, experience and our expectations — in writing. No fog.",
  },
] as const;

export const PLACEMENT = [
  {
    num: "01",
    title: "REQUEST",
    body: "Tell us the work, the site, the machines and the dates. We do not guess what you need.",
  },
  {
    num: "02",
    title: "VERIFY",
    body: "Tickets, experience, practical competency and site requirements are checked before anyone is named.",
  },
  {
    num: "03",
    title: "BRIEF",
    body: "The worker gets the job, the hazards and our procedures. You get the name, the tickets and the plan.",
  },
  {
    num: "04",
    title: "SHOW UP",
    body: "On time. Fit for work. Ready to lift. If we cannot do that, we tell you before it becomes your problem.",
  },
] as const;
