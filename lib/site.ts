export const SITE = {
  name: "WHOOP",
  descriptor: "CRANE + RIGGING",
  phone: "1 604 431 2000",
  phoneHref: "tel:+16044312000",
  email: "hire@whoopp.ca",
  emailHref: "mailto:hire@whoopp.ca",
  location: "Vancouver, Canada",
  tagline: "WE MOVE HEAVY THINGS.",
  sub: "AND WE SHOW YOU HOW WE DO IT.",
  union: "UNION FRIENDLY SHOP",
} as const;

export const COR = {
  mark: "COR® Certified",
  title: "Certificate of Recognition",
  partner: "BC Construction Safety Alliance",
  partnerUrl: "https://www.bccsa.ca/cor_program.php",
  program: "WorkSafeBC Certificate of Recognition",
  /** Licensed BCCSA COR® mark. Drop the official file at this path. */
  asset: "/cor/bccsa-cor-certified.png",
  certificateNumber: "",
  certifiedDate: "",
  classification: "",
} as const;

export const NAV = [
  { href: "/", label: "WORK", num: "01" },
  { href: "/crew", label: "THE CREW", num: "02" },
  { href: "/safety", label: "SAFETY PROGRAM", num: "03" },
  { href: "/whoopwire", label: "WHOOPWIRE", num: "04" },
  { href: "/philosophy", label: "PHILOSOPHY", num: "05" },
  { href: "/hire", label: "HIRE A CREW", num: "06" },
] as const;

export const SERVICES = [
  {
    num: "01",
    title: "CRANE OPERATORS",
    body: "Experienced operators supplied to contractors and crane companies. Matched to the machine, the lift and the site — not just the ticket.",
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
    title: "LIFTING CREWS",
    body: "Operator and rigging crews supplied as a coordinated team. One brief. One standard. One crew that already knows how the other works.",
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
    body: "Clients, workers and contractors should be able to see how we expect work to be performed before they hire us. No portal. No request form. No expiry date.",
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
    title: "We are a union-friendly shop.",
    body: "We work with union members and respect the agreements on the site. That is how this work gets done. It is not a problem we manage around.",
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
