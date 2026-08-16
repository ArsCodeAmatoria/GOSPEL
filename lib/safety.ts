export type Step = { n: string; title: string; body: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: Step[] }
  | { type: "rules"; items: { title: string; body: string }[] }
  | { type: "cta"; href: string; label: string }
  | { type: "table"; caption?: string; columns: string[]; rows: string[][] };

export type SafetyLibraryKind =
  | "swp"
  | "jha"
  | "policy"
  | "form"
  | "sds"
  | "report";

export type SafetySection = {
  num: string;
  slug: string;
  title: string;
  kicker: string;
  intro: string;
  library?: SafetyLibraryKind;
  blocks: Block[];
};

export const RIGGING_A_LOAD: Step[] = [
  {
    n: "01",
    title: "PLAN THE LIFT",
    body: "Confirm load weight, centre of gravity, lifting points and required capacity. If any of those are unknown, do not rig.",
  },
  {
    n: "02",
    title: "INSPECT THE RIGGING",
    body: "Inspect slings, shackles, hooks and hardware before use. Damaged gear is out of service. No exceptions, no “one more lift.”",
  },
  {
    n: "03",
    title: "CONNECT THE LOAD",
    body: "Install rigging correctly and protect it from sharp edges. Hardware sits straight. Slings are not twisted, knotted or choked off a guess.",
  },
  {
    n: "04",
    title: "CLEAR THE AREA",
    body: "Establish the exclusion zone and confirm communication. Nobody walks under a load. Nobody stands in the fall line.",
  },
  {
    n: "05",
    title: "TEST THE LIFT",
    body: "Take the load just clear of the ground and verify balance. If it tilts, lands or shocks — lower it and re-rig.",
  },
  {
    n: "06",
    title: "MAKE THE LIFT",
    body: "Lift smoothly while maintaining communication and control. Stop on any lost signal, unexpected movement or change in conditions.",
  },
];

export const SAFETY: SafetySection[] = [
  {
    num: "01",
    slug: "company-safety-policy",
    title: "COMPANY SAFETY POLICY",
    kicker: "The standard is not a poster.",
    intro:
      "WHOOP is a safety company that supplies a workforce. We supply crane operators, riggers, signalpersons and lifting crews. We do not rent cranes. We do not train the public. We place competent people on lifting work — and we expect that work to be done to a published standard.",
    blocks: [
      {
        type: "quote",
        text: "If we cannot say how the work should be done, we have no business sending people to do it.",
      },
      {
        type: "p",
        text: "This Safety Program is the company’s rulebook for lifting work. It applies to every worker WHOOP deploys, every supervisor WHOOP assigns, and every job we accept. Clients can read it before they hire us. Workers can read it before they accept a dispatch. That is deliberate.",
      },
      {
        type: "h",
        text: "WHAT THIS PROGRAM IS",
      },
      {
        type: "list",
        items: [
          "The minimum standard for how WHOOP personnel plan, rig, signal and lift.",
          "A public document. It is not proprietary. It does not expire. It is not behind a form.",
          "Subordinate to law. Where applicable occupational health and safety law is stricter, the law wins. Where this program is stricter, this program wins.",
          "Written to be used. Procedures are sequenced the way the work actually happens.",
        ],
      },
      {
        type: "h",
        text: "WHAT THIS PROGRAM IS NOT",
      },
      {
        type: "list",
        items: [
          "A substitute for the site-specific hazard assessment.",
          "A substitute for the client’s site rules where those rules are stricter or required.",
          "A training course. Competency is verified before placement; this document does not make someone competent.",
          "A COR consultancy, a formwork manual, or a crane rental policy.",
        ],
      },
      {
        type: "cta",
        href: "/safety/ohs-policies",
        label: "13 — OH&S POLICIES →",
      },
      {
        type: "h",
        text: "POLICY STATEMENTS",
      },
      {
        type: "rules",
        items: [
          {
            title: "No lift without a plan.",
            body: "Weight, centre of gravity, lifting points, capacity, path, exclusion zone and communication are confirmed before the hook is loaded.",
          },
          {
            title: "No damaged gear.",
            body: "Rigging and personal protective equipment that fails inspection is removed from service immediately.",
          },
          {
            title: "No work under a load.",
            body: "People are not in the fall zone. If the path cannot be cleared, the lift does not proceed.",
          },
          {
            title: "No silent problems.",
            body: "Stop-work authority is real. Workers who refuse unsafe work are backed. Incidents are reported.",
          },
          {
            title: "No surprise no-shows.",
            body: "Reliability is a safety control. A missing operator mid-lift is a hazard. If WHOOP cannot fill a role, the client is told immediately.",
          },
        ],
      },
      {
        type: "h",
        text: "WHAT THE WORK IS DONE TO",
      },
      {
        type: "p",
        text: "WHOOP is a safety company that supplies a workforce. Lifting work is performed in accordance with the following. Where they conflict, the stricter applicable requirement wins. Law always wins. This program is written to sit on top of that stack, not beside it.",
      },
      {
        type: "list",
        items: [
          "CSA Z150 — Safety Code on Mobile Cranes.",
          "CSA Z248 — Code for Tower Cranes.",
          "WorkSafeBC Occupational Health and Safety Regulation, including Part 14 — Cranes and Hoists.",
          "BC Crane Safety — crane operator certification and competency requirements in British Columbia.",
          "Technical Safety BC — applicable technical safety requirements for regulated equipment.",
          "ASME B30 — cranes, derricks, hoists, slings and related lifting equipment.",
          "Manufacturer requirements — load charts, manuals and configuration limits for the machine on site.",
          "Site policies — the client’s site rules, orientations and lift plans. Where they are stricter, they win.",
        ],
      },
      {
        type: "p",
        text: "WHOOP operates in Canada. Provincial occupational health and safety statutes, regulations and codes of practice apply on the site where the work is performed.",
      },
    ],
  },
  {
    num: "02",
    slug: "responsibilities",
    title: "RESPONSIBILITIES",
    kicker: "Who owns what.",
    intro:
      "Lifting work fails when everybody assumes somebody else has it. WHOOP supplies people into workplaces we do not always control. The split in responsibility has to be explicit.",
    blocks: [
      {
        type: "h",
        text: "WHOOP",
      },
      {
        type: "list",
        items: [
          "Verify qualifications, experience and practical competency before dispatch.",
          "Brief workers on this Safety Program and the known scope of the job.",
          "Supply personnel who are fit for work and ticketed for the role requested.",
          "Refuse or stop a dispatch when the work as described cannot be done safely.",
          "Keep this program current and publicly available.",
          "Investigate incidents involving WHOOP personnel and share findings with the client as required.",
        ],
      },
      {
        type: "h",
        text: "THE WORKER",
      },
      {
        type: "list",
        items: [
          "Show up fit for work, on time, with required tickets and PPE.",
          "Work to this program and to site rules — whichever is stricter.",
          "Inspect rigging, machines (as assigned) and PPE before use.",
          "Use stop-work authority. Do not rig, signal or operate when the lift is not understood.",
          "Report hazards, near misses and incidents before leaving the shift.",
          "Do not accept a role they are not competent to perform.",
        ],
      },
      {
        type: "h",
        text: "THE CLIENT / SITE EMPLOYER",
      },
      {
        type: "list",
        items: [
          "Control the workplace: access, other trades, ground conditions, overhead hazards and site rules.",
          "Provide accurate information: load data, drawings, machine type, site constraints, known hazards.",
          "Provide or confirm engineered lift plans where the lift requires them.",
          "Ensure a prime contractor / site safety system is in place as required by law.",
          "Do not direct WHOOP personnel to skip this program or applicable law.",
        ],
      },
      {
        type: "h",
        text: "LIFT SUPERVISION",
      },
      {
        type: "p",
        text: "When WHOOP supplies lift supervision, that person owns the lift sequence: briefing, exclusion zone, communication, stop/start, and the decision to abort. They do not own the entire site. They do own whether the hook moves.",
      },
      {
        type: "quote",
        text: "If it is unclear who can stop the lift, nobody can stop the lift.",
      },
      {
        type: "h",
        text: "DUAL CONTROL",
      },
      {
        type: "p",
        text: "WHOOP personnel may have more than one party directing their work. That does not dilute this program. A client instruction that conflicts with this program or with law is not followed. The worker stops, states the conflict, and the lift waits until it is resolved.",
      },
    ],
  },
  {
    num: "03",
    slug: "hazard-assessment",
    title: "HAZARD ASSESSMENT",
    kicker: "Before the hook, the paper. Before the paper, the walk.",
    intro:
      "Every WHOOP dispatch requires a hazard assessment. A generic form filled in the parking lot is not an assessment. Look at the work. Name the hazards. Control them. Then lift.",
    blocks: [
      {
        type: "steps",
        items: [
          {
            n: "01",
            title: "SCOPE THE WORK",
            body: "What is being lifted, from where to where, with what gear, by whom, and under what site rules. If the scope is incomplete, stop.",
          },
          {
            n: "02",
            title: "WALK THE PATH",
            body: "Travel path, pick and set points, swing radius, blind spots, overhead lines, excavations, public interface, other trades.",
          },
          {
            n: "03",
            title: "NAME THE HAZARDS",
            body: "Load unknowns, ground conditions, weather, energy sources, working at height, traffic, fatigue, communication breakdown, proximity to people.",
          },
          {
            n: "04",
            title: "SET THE CONTROLS",
            body: "Exclusion zone, tag lines, mats, spotters, PPE, engineered plan if required, stop criteria (wind, visibility, radio loss).",
          },
          {
            n: "05",
            title: "BRIEF THE CREW",
            body: "Everyone on the lift can repeat: the plan, the signals, who can stop it, and where they stand. If they cannot, the brief failed.",
          },
          {
            n: "06",
            title: "REASSESS WHEN IT CHANGES",
            body: "New load, new weather, new trades in the zone, a damaged sling, a lost signal — the assessment starts again.",
          },
        ],
      },
      {
        type: "h",
        text: "STOP CRITERIA — WRITE THEM DOWN",
      },
      {
        type: "list",
        items: [
          "Load weight or centre of gravity not confirmed.",
          "Ground cannot support the crane or outriggers as configured.",
          "Wind, lightning or visibility outside the plan.",
          "Power lines inside the minimum approach distance.",
          "Exclusion zone cannot be held.",
          "Communication lost or ambiguous.",
          "Anyone on the crew is not competent for the role they are about to perform.",
        ],
      },
      {
        type: "p",
        text: "Field level hazard assessments (FLHA / FLRA) are completed at the start of the shift and when the work changes. They are not a signature collection. They are the last chance to catch what the paperwork missed.",
      },
    ],
  },
  {
    num: "04",
    slug: "safe-work-procedures",
    title: "SAFE WORK PROCEDURES",
    kicker: "A procedure you cannot use is not a procedure.",
    intro:
      "Safe Work Procedures (SWPs) cover types of work WHOOP personnel perform repeatedly. They are written as sequences because lifting is a sequence. Read them in order. Do them in order. Hazards for that work are in the JHA — not buried in the procedure.",
    blocks: [
      {
        type: "p",
        text: "SWPs live in this program so they can be read on a phone at the gate. They are the default method. A site may impose a stricter method. A site may not impose a looser one on WHOOP personnel.",
      },
      {
        type: "cta",
        href: "/safety/swp-library",
        label: "14 — SWP LIBRARY — 25 PROCEDURES →",
      },
      {
        type: "h",
        text: "SWP — RIGGING A LOAD",
      },
      { type: "steps", items: RIGGING_A_LOAD },
      {
        type: "h",
        text: "SWP — SIGNALLING A LIFT",
      },
      {
        type: "steps",
        items: [
          {
            n: "01",
            title: "ONE SIGNALPERSON",
            body: "One person signals the operator unless a documented transfer is made. Two people signalling is not communication. It is an argument.",
          },
          {
            n: "02",
            title: "AGREE THE SYSTEM",
            body: "Hand signals, radio protocol or both. Standard signals. Channel, call signs and the word for STOP confirmed in the brief.",
          },
          {
            n: "03",
            title: "SEE THE LOAD AND THE PATH",
            body: "If the signalperson cannot see the load, the path or the operator, they are not signalling. Get a dedicated spotter or stop.",
          },
          {
            n: "04",
            title: "HOLD THE ZONE",
            body: "The signalperson does not become a rigger, a traffic controller and a messenger at the same time. The hands are for the crane.",
          },
          {
            n: "05",
            title: "STOP MEANS STOP",
            body: "Any lost visual, any garbled radio, any person entering the zone: emergency stop. Resume only after the crew is reset.",
          },
        ],
      },
      {
        type: "h",
        text: "SWP — INSPECTING RIGGING",
      },
      {
        type: "steps",
        items: [
          {
            n: "01",
            title: "IDENTIFY THE GEAR",
            body: "Know the type, rated capacity, and whether it is appropriate for the hitch and the environment (heat, chemicals, sharp edges).",
          },
          {
            n: "02",
            title: "CHECK IDENTIFICATION",
            body: "Missing tags, illegible ratings or homemade modifications — out of service.",
          },
          {
            n: "03",
            title: "INSPECT THE BODY",
            body: "Wire rope: broken wires, kinks, birdcaging, crushed strands, heat. Synthetic: cuts, UV, chemical burn, stretched stitches. Chain: nicks, stretch, gouge, seized links.",
          },
          {
            n: "04",
            title: "INSPECT THE HARDWARE",
            body: "Hooks, shackles, rings, spreader points. Latch function, pin engagement, wear at the saddle, opened throat.",
          },
          {
            n: "05",
            title: "REMOVE OR USE",
            body: "If it fails, tag it, isolate it, report it. Do not leave failed gear where someone else can pick it up.",
          },
        ],
      },
    ],
  },
  {
    num: "05",
    slug: "safe-job-procedures",
    title: "SAFE JOB PROCEDURES",
    kicker: "This lift. This site. This day.",
    intro:
      "Safe Job Procedures (SJPs) are built for a specific task when the SWP is not enough. Unusual loads, tight sites, tandem lifts, critical lifts, and anything the hazard assessment flags as non-routine.",
    blocks: [
      {
        type: "p",
        text: "An SJP is not a longer SWP. It is the SWP plus the facts of this job: weights, radii, drawings, engineered requirements, weather limits, names, radios, and the abort criteria. The JHA library is the hazard analysis for the same work — not another set of steps.",
      },
      {
        type: "cta",
        href: "/safety/jha-library",
        label: "15 — JHA LIBRARY →",
      },
      {
        type: "h",
        text: "WHEN AN SJP IS REQUIRED",
      },
      {
        type: "list",
        items: [
          "Critical lifts as defined by the site or by this program (see Crane Operations).",
          "Tandem or multiple-crane lifts.",
          "Loads of unknown or shifting centre of gravity.",
          "Lifts over occupied buildings, public space, or process equipment.",
          "Personnel holding / man-baskets (only where legally permitted and engineered).",
          "Any lift the supervisor or operator says is non-routine.",
        ],
      },
      {
        type: "h",
        text: "HOW WHOOP BUILDS AN SJP",
      },
      {
        type: "steps",
        items: [
          {
            n: "01",
            title: "COLLECT THE FACTS",
            body: "Load data, drawings, crane configuration, ground report, nearby energy, other work in the area.",
          },
          {
            n: "02",
            title: "START FROM THE SWP",
            body: "Do not rewrite physics. Add only what this job changes.",
          },
          {
            n: "03",
            title: "NAME THE PEOPLE",
            body: "Operator, rigger, signalperson, supervisor, engineer if required. Roles are named, not implied.",
          },
          {
            n: "04",
            title: "SET HARD LIMITS",
            body: "Wind, radius, boom length, personnel in the zone, radio loss. Limits are numbers, not vibes.",
          },
          {
            n: "05",
            title: "BRIEF AND KEEP IT",
            body: "The SJP is at the lift. If the work drifts from the SJP, stop and rewrite it. Do not “adapt on the fly.”",
          },
        ],
      },
      {
        type: "quote",
        text: "If the lift is special, the paperwork should be as specific as the load.",
      },
    ],
  },
  {
    num: "06",
    slug: "rigging",
    title: "RIGGING",
    kicker: "The gear is the truth. The guess is the hazard.",
    intro:
      "WHOOP riggers rig to rated capacity, known weights and inspected hardware. We do not “make it work” with a choker and optimism. Rigging is done to ASME B30, manufacturer instructions for the hardware, and the site.",
    blocks: [
      {
        type: "h",
        text: "NON-NEGOTIABLES",
      },
      {
        type: "rules",
        items: [
          {
            title: "Know the load.",
            body: "Weight and centre of gravity are confirmed from drawings, shipping data, scales or engineering — not from memory of a similar piece.",
          },
          {
            title: "Know the hitch.",
            body: "Vertical, choker and basket hitches have different capacities. Sling angle is calculated, not eyeballed when it matters.",
          },
          {
            title: "Hardware is rated and matched.",
            body: "Shackles, hooks and master links are the correct type and WLL. Pins are fully engaged. Screw pins are moused where required. No mixing mystery steel.",
          },
          {
            title: "Protect the sling.",
            body: "Sharp edges get softeners, pads or a different hitch. A cut sling is a dropped load that has not happened yet.",
          },
          {
            title: "No people under the load.",
            body: "Tag lines control rotation. Hands do not. Pushing a live load with your body is not rigging.",
          },
        ],
      },
      {
        type: "h",
        text: "SLING ANGLES",
      },
      {
        type: "p",
        text: "As the included angle flattens, tension climbs. At 60° the tension is the load share. At 30° it has doubled. Below 30° we do not rig that way unless an engineer owns the numbers. If you cannot explain the angle, you cannot use the angle.",
      },
      {
        type: "h",
        text: "HOOKS AND SHACKLES",
      },
      {
        type: "list",
        items: [
          "Do not point-load a shackle bow unless it is designed for it.",
          "Do not replace a pin with a bolt from the truck.",
          "Hook latches work. If the latch is gone, the hook is out of service unless the hitch does not require it and the manufacturer allows it — default is out of service.",
          "Never wrap a sling around a hook as a makeshift eye.",
        ],
      },
      {
        type: "h",
        text: "TEST LIFT",
      },
      {
        type: "p",
        text: "Every load comes an inch off the ground and waits. Check balance, hitch security, crane reaction, and the zone. A test lift is not optional because the load “looks fine.”",
      },
      { type: "steps", items: RIGGING_A_LOAD },
    ],
  },
  {
    num: "07",
    slug: "crane-operations",
    title: "CRANE OPERATIONS",
    kicker: "The chart is the law of the machine.",
    intro:
      "WHOOP operators run cranes they are competent on, to the load chart, on ground that can hold them, with a crew they can hear. The operator works to CSA Z150 or Z248 as the machine requires, ASME B30, the manufacturer, WorkSafeBC, and the site. If those conditions are not present, the crane does not come on load.",
    blocks: [
      {
        type: "h",
        text: "BEFORE THE SHIFT",
      },
      {
        type: "steps",
        items: [
          {
            n: "01",
            title: "MACHINE AND CONFIGURATION",
            body: "Confirm the crane on site is the crane you were dispatched for. Counterweight, boom, jib, tyres, tracks, software — as the chart requires.",
          },
          {
            n: "02",
            title: "INSPECTION",
            body: "Complete the operator inspection. Defects that affect lifting are reported and the crane stays down until they are resolved.",
          },
          {
            n: "03",
            title: "GROUND AND SETUP",
            body: "Outriggers fully extended unless the chart allows otherwise. Mats as required. Cribbing is engineered thinking, not scrap lumber theatre. Level within the manufacturer’s limit.",
          },
          {
            n: "04",
            title: "SITE HAZARDS",
            body: "Overhead lines, underground services, excavations, other cranes, public, aircraft if applicable. Approach distances to power lines are treated as hard walls.",
          },
          {
            n: "05",
            title: "BRIEF",
            body: "Signals, radius, known loads, critical lift status, wind limits, who stops the job.",
          },
        ],
      },
      {
        type: "h",
        text: "ON THE HOOK",
      },
      {
        type: "list",
        items: [
          "The operator does not lift a load they cannot account for on the chart, including deductions and rigging weight.",
          "No lifting over people. No riding the load. No using the crane as an elevator unless the operation is a permitted, engineered personnel lift.",
          "Shock loading, side loading and dragging are not operating. They are abuse.",
          "If the signal is unclear, the answer is stop — not interpret.",
          "Leave the seat only when the crane is in a stable, manufacturer-accepted condition.",
        ],
      },
      {
        type: "h",
        text: "CRITICAL LIFTS",
      },
      {
        type: "p",
        text: "Treat as critical unless the site defines a stricter threshold: loads approaching chart capacity, tandem lifts, lifts over operating plant or public space, non-routine paths, or loads with shifting COG. Critical lifts get an SJP, named supervision, and a slower brief. Ego is not a control.",
      },
      {
        type: "h",
        text: "WEATHER AND POWER LINES",
      },
      {
        type: "p",
        text: "Wind limits come from the manufacturer and the lift plan — the lower number wins. Lightning: boom down, people off. Power lines: assume they are live. If the lift cannot maintain the required clearance, it is not a crane job until the utility says it is.",
      },
    ],
  },
  {
    num: "08",
    slug: "fall-protection",
    title: "FALL PROTECTION",
    kicker: "Height does not care what you were lifting.",
    intro:
      "Crane and rigging work puts people on decks, loads, machine upperworks and unfinished steel. Fall protection is part of lifting, not a different trade’s problem.",
    blocks: [
      {
        type: "p",
        text: "WHOOP personnel follow the fall protection law that applies on the site. Where provincial thresholds differ, we use the site law. Where this program is stricter, we use this program. Default posture: if you can fall more than the legal threshold — or onto a hazard below that threshold — you are protected before you go there.",
      },
      {
        type: "h",
        text: "ORDER OF CONTROLS",
      },
      {
        type: "list",
        items: [
          "Eliminate the exposure. Do the work from the ground if the lift can be rigged there.",
          "Guardrails, platforms and travel restraint that physically prevent the fall.",
          "Fall arrest as the last control — with a rescue plan that is real, not theoretical.",
        ],
      },
      {
        type: "h",
        text: "SWP — WORKING AT HEIGHT ON A LIFT",
      },
      {
        type: "steps",
        items: [
          {
            n: "01",
            title: "DECIDE IF YOU NEED TO GO UP",
            body: "If the hitch can be made at ground level, make it at ground level.",
          },
          {
            n: "02",
            title: "INSPECT THE SYSTEM",
            body: "Harness, lanyard, SRL, connectors, anchor. No unlabelled, damaged or homemade anchors.",
          },
          {
            n: "03",
            title: "CONFIRM THE ANCHOR AND CLEARANCE",
            body: "Rated anchor. Fall clearance calculated. Swing-fall considered. A harness with no clearance is a decoration.",
          },
          {
            n: "04",
            title: "CONNECT BEFORE YOU ARE EXPOSED",
            body: "100% tie-off when required. You are connected before the unguarded edge, not after you notice it.",
          },
          {
            n: "05",
            title: "RESCUE IS PART OF THE PLAN",
            body: "Who gets you down, with what, in how long. Suspension trauma is on the clock. “We’ll figure it out” is not a rescue plan.",
          },
        ],
      },
      {
        type: "p",
        text: "Operators accessing upperworks follow the manufacturer’s access method and site fall rules. Jumping down from a carrier or riding a headache ball is not access.",
      },
    ],
  },
  {
    num: "09",
    slug: "incident-reporting",
    title: "INCIDENT REPORTING",
    kicker: "We do not hide the dent.",
    intro:
      "Incidents, injuries, near misses and damaged gear are reported. Quiet jobsites are not always safe jobsites. Sometimes they are just unreported.",
    blocks: [
      {
        type: "h",
        text: "WHAT GETS REPORTED",
      },
      {
        type: "list",
        items: [
          "Any injury, including what someone calls “nothing.”",
          "Dropped loads, failed rigging, crane contact, shock loading, struck plant or structure.",
          "Near misses: someone in the zone, a lost signal that almost mattered, a sling that started to cut.",
          "Property and equipment damage.",
          "A stop-work event that revealed a broken plan.",
          "Bullying or harassment toward a WHOOP worker — including on a client site.",
        ],
      },
      {
        type: "h",
        text: "SWP — AFTER AN INCIDENT",
      },
      {
        type: "steps",
        items: [
          {
            n: "01",
            title: "MAKE IT SAFE",
            body: "People first. Energy isolated. Load landed or secured if it can be done without creating a second incident.",
          },
          {
            n: "02",
            title: "GET CARE",
            body: "First aid. Emergency services when needed. Do not move a seriously injured person unless they are in immediate danger.",
          },
          {
            n: "03",
            title: "HOLD THE SCENE",
            body: "As far as it is safe, leave evidence in place. Photographs. Names. Do not start the cleanup story before the facts.",
          },
          {
            n: "04",
            title: "NOTIFY",
            body: "Site supervision, WHOOP, and the regulator when the law requires it. Immediate for serious events — not after the shift beer.",
          },
          {
            n: "05",
            title: "WRITE IT DOWN",
            body: "What happened, where, when, who, what gear, what was supposed to happen. Facts. Not a defence brief.",
          },
          {
            n: "06",
            title: "LEARN AND CHANGE",
            body: "WHOOP investigates events involving our people. Controls change. The program is updated when the lesson is real.",
          },
        ],
      },
      {
        type: "quote",
        text: "Reporting a near miss is competence. Hiding one is how the next crew inherits it.",
      },
      {
        type: "p",
        text: "Workers will not be punished for reporting in good faith or for refusing unsafe work. They will be held accountable for lying, tampering with a scene, or continuing a lift after a stop criterion was met.",
      },
      {
        type: "h",
        text: "REPORT NOW",
      },
      {
        type: "cta",
        href: "/safety/report/incident",
        label: "REPORT AN INCIDENT →",
      },
      {
        type: "cta",
        href: "/safety/report/near-miss",
        label: "REPORT A NEAR MISS →",
      },
      {
        type: "cta",
        href: "/safety/report/hazard",
        label: "REPORT A HAZARD →",
      },
      {
        type: "cta",
        href: "/safety/report/damaged-rigging",
        label: "REPORT DAMAGED RIGGING →",
      },
      {
        type: "cta",
        href: "/safety/report/equipment-defect",
        label: "REPORT AN EQUIPMENT DEFECT →",
      },
      {
        type: "cta",
        href: "/safety/report/bullying-harassment",
        label: "REPORT BULLYING OR HARASSMENT →",
      },
    ],
  },
  {
    num: "10",
    slug: "emergency-response",
    title: "EMERGENCY RESPONSE",
    kicker: "The plan has a number, a meeting point and a name.",
    intro:
      "Every dispatch needs to know how the site calls for help. WHOOP does not assume the client’s emergency plan is obvious. We ask. Then we brief it.",
    blocks: [
      {
        type: "h",
        text: "BEFORE WORK STARTS",
      },
      {
        type: "list",
        items: [
          "Site emergency number and how to get an outside line.",
          "Muster point and wind / spill alternatives if applicable.",
          "First aid location and attendant.",
          "How to shut down or land the crane in an emergency.",
          "Rescue for fall arrest if anyone is tied off.",
          "Contact for WHOOP after hours.",
        ],
      },
      {
        type: "h",
        text: "SWP — SITE EMERGENCY",
      },
      {
        type: "steps",
        items: [
          {
            n: "01",
            title: "STOP THE LIFT",
            body: "If a crane is in operation, bring the load to a safe condition if it can be done immediately. If not, stop and protect people first.",
          },
          {
            n: "02",
            title: "CALL IT",
            body: "Use the site method. Say what, where, how many, what hazards. Do not assume someone else called.",
          },
          {
            n: "03",
            title: "ACCOUNT FOR THE CREW",
            body: "Muster. Names. Who is missing. Tell incident command.",
          },
          {
            n: "04",
            title: "DO NOT BECOME THE SECOND EVENT",
            body: "Stay out of rescue you are not equipped for. Power lines, structural collapse and confined space are specialist work.",
          },
          {
            n: "05",
            title: "NOTIFY WHOOP",
            body: "As soon as people are accounted for. We handle the client, the families we must, and the regulator interface that is ours.",
          },
        ],
      },
      {
        type: "h",
        text: "POWER LINE CONTACT",
      },
      {
        type: "p",
        text: "Stay on the crane unless it is on fire or you are being shocked. Do not let anyone approach. Call the utility. If you must get off, jump clear with feet together and shuffle away. This is briefed on any site with overhead lines — not discovered during the contact.",
      },
      {
        type: "h",
        text: "CRANE AND RIGGING EMERGENCIES",
      },
      {
        type: "rules",
        items: [
          {
            title: "Crane incident",
            body: "Stop. People first. Land or hold only if it does not create a second event. Notify the site and WHOOP. Hold the scene. WHOOP-SWP-024.",
          },
          {
            title: "Crane overturn",
            body: "Do not jump toward the fall. Get people back. First aid. Utility and emergency services if lines or fuel are involved. Do not right the crane as a hero move.",
          },
          {
            title: "Dropped load",
            body: "Stop. Clear the zone. First aid. Do not rush in to look. Secure if it can be done without entering an unstable pile. Report as an incident.",
          },
          {
            title: "Rigging failure",
            body: "Stop. Isolate the failed gear — tag it, get it off the pile. Check people. Re-rig only with serviceable gear and a reset brief.",
          },
          {
            title: "Serious injury",
            body: "Make it safe. First aid. Emergency services. Do not move the person unless they are in immediate danger. Notify WHOOP immediately.",
          },
          {
            title: "Electrical / powerline contact",
            body: "Stay on the crane unless fire or shock. Nobody approaches. Call the utility. Jump clear, feet together, shuffle away only if you must get off. Brief this before the lift.",
          },
          {
            title: "Fire",
            body: "Small and trained: extinguisher in the cab. Otherwise get off, keep people back, call the site emergency number. Fuel and hydraulics are not a trash-fire.",
          },
          {
            title: "Severe weather",
            body: "Land the load. Manufacturer shutdown. People off the machine. Lightning: boom down. Resume only when the plan says so.",
          },
          {
            title: "Equipment failure",
            body: "Stop. Crane down if it affects lifting. Report the defect. Do not restart to see if it does it again.",
          },
          {
            title: "Emergency shutdown",
            body: "Load landed if possible. Controls isolated. Access secured. Follow the manufacturer for this machine.",
          },
          {
            title: "Worker rescue",
            body: "Fall arrest rescue is part of the plan before anyone ties off. Suspension trauma is on the clock. Do not improvise a crane-as-rescue unless that operation is permitted and planned.",
          },
        ],
      },
    ],
  },
  {
    num: "11",
    slug: "training-competency",
    title: "TRAINING + COMPETENCY",
    kicker: "A ticket is not competency.",
    intro:
      "WHOOP does not supply random labour. We supply crane and rigging personnel whose qualifications, experience and practical competency have been checked against the work.",
    blocks: [
      {
        type: "quote",
        text: "We do not hire the card. We hire the person who can do the work the card implies.",
      },
      {
        type: "h",
        text: "WHAT WE VERIFY BEFORE PLACEMENT",
      },
      {
        type: "rules",
        items: [
          {
            title: "Qualifications",
            body: "Trade tickets, operator certifications through the BC Crane Safety system where the work requires it, signalperson and rigger credentials, and any site-required training. Originals or verifiable records. Expired means not dispatched.",
          },
          {
            title: "Experience",
            body: "Machine class, boom type, tonnage, sector (industrial, civil, tower, shutdown). Years on a résumé are not the same as years on that crane.",
          },
          {
            title: "Practical competency",
            body: "How they inspect, how they brief, how they rig, how they refuse a bad lift. We check this. A certificate cannot speak.",
          },
          {
            title: "Site requirements",
            body: "Orientations, owner standards, union rules, security, drug and alcohol programs where lawfully required. The worker is not sent to fail the gate.",
          },
        ],
      },
      {
        type: "h",
        text: "FIT TO THE JOB",
      },
      {
        type: "p",
        text: "A competent mobile operator is not automatically a competent tower operator. A structural rigger is not automatically a plant rigger. We match people to the work. If we do not have the right person, we say so instead of sending the closest body.",
      },
      {
        type: "h",
        text: "WHOOP IS NOT A SCHOOL",
      },
      {
        type: "p",
        text: "We are not a training provider. We do not sell tickets. Workers are expected to arrive already qualified for the role. Where a site requires a specific orientation, we arrange it. Where a worker needs a new qualification, that is not a WHOOP course — it is a gap, and we do not cover gaps with hope.",
      },
      {
        type: "h",
        text: "SUPERVISION AND MENTORING",
      },
      {
        type: "p",
        text: "Junior personnel, when placed, are placed under named supervision with a defined scope. They are not “figured out on site.” Competency is not contagious.",
      },
      {
        type: "h",
        text: "CRANE OPERATORS",
      },
      {
        type: "list",
        items: [
          "Qualification — BC Crane Safety certificate for the class, current.",
          "Equipment-specific competency — this boom type, this tonnage, this configuration.",
          "Load charts — deductions, radius, outrigger position, jib. If they cannot read this chart, they do not run this crane.",
          "Inspections — pre-use as the manufacturer and Part 14 require.",
          "Operating procedures — this program, the site, the plan.",
        ],
      },
      {
        type: "h",
        text: "RIGGERS",
      },
      {
        type: "list",
        items: [
          "Sling selection, hardware, hitch configurations.",
          "Sling angles — sin from the horizontal, WLL after the hitch.",
          "Load weight and centre of gravity — confirmed, not remembered.",
          "Load control and tag lines.",
          "Rigging inspection and rejection.",
          "Communication and lift planning as assigned.",
        ],
      },
      {
        type: "h",
        text: "SIGNALPERSONS",
      },
      {
        type: "list",
        items: [
          "Standard hand signals.",
          "Radio communication and the stop word.",
          "Blind lifts — one voice, tested comms.",
          "Stop signals that the operator will not interpret.",
          "Crane coordination — zone, other cranes, people.",
        ],
      },
      {
        type: "h",
        text: "COMPETENCY MATRIX",
      },
      {
        type: "p",
        text: "This matrix is the check before dispatch. It is how WHOOP matches people to the work.",
      },
      {
        type: "table",
        caption: "WHOOP crane and rigging competency — dispatch check. Not a training course.",
        columns: ["ROLE", "QUALIFICATION", "MACHINE / TASK", "VERIFY"],
        rows: [
          ["Crane operator", "BC Crane Safety class, current", "This configuration and chart", "Ticket + experience + practical"],
          ["Tower operator", "Tower class, current", "This tower / self-erecting machine", "Ticket + experience on tower work"],
          ["Rigger", "Rigger credential as required", "Hitch, angle, hardware, inspection", "Practical: inspect, hitch, refuse"],
          ["Signalperson", "Signalperson competency", "Hands and radio, including blind", "Demonstrate signals and STOP"],
          ["Lift supervisor", "Experience on this class of lift", "Brief, zone, abort, critical plan", "Named on the plan"],
        ],
      },
    ],
  },
  {
    num: "12",
    slug: "worker-rights",
    title: "WORKER RIGHTS",
    kicker: "The three rights are not a slogan.",
    intro:
      "Canadian workers have the right to know, the right to participate, and the right to refuse dangerous work. WHOOP treats those rights as operating procedure, not HR wallpaper.",
    blocks: [
      {
        type: "h",
        text: "RIGHT TO KNOW",
      },
      {
        type: "p",
        text: "Workers are told the hazards of the job as we know them, how we expect the work to be done, and where this program lives. This website is part of that. So is the dispatch brief. A worker who has not been told the load, the site rules or the stop criteria has not been briefed.",
      },
      {
        type: "h",
        text: "RIGHT TO PARTICIPATE",
      },
      {
        type: "p",
        text: "Crews speak in the brief. Hazard assessments are not signed in silence. If a rigger sees a bad hitch, they say it. If an operator does not like the ground, they say it. Participation is expected. It is not “attitude.”",
      },
      {
        type: "h",
        text: "RIGHT TO REFUSE",
      },
      {
        type: "steps",
        items: [
          {
            n: "01",
            title: "STOP THE WORK",
            body: "If you have reasonable cause to believe the work is dangerous to you or another person, you stop. You do not need permission to stop.",
          },
          {
            n: "02",
            title: "SAY WHY",
            body: "State the danger to the supervisor / site contact and to WHOOP. Be specific: the line, the ground, the load, the missing gear, the missing plan.",
          },
          {
            n: "03",
            title: "IT GETS INVESTIGATED",
            body: "The site and WHOOP deal with the condition. You are not sent home as punishment for a good-faith refusal.",
          },
          {
            n: "04",
            title: "IT STAYS STOPPED UNTIL IT IS FIXED",
            body: "Work resumes when the danger is controlled. Not when someone is impatient.",
          },
        ],
      },
      {
        type: "quote",
        text: "WHOOP will not punish a worker for refusing unsafe work. We will not send a replacement to do the same unsafe work. That would not be a dispatch. That would be a decision to hurt someone.",
      },
      {
        type: "h",
        text: "RESPECT",
      },
      {
        type: "p",
        text: "Workers are not units. Harassment, violence, racism, and “that’s just the trade” behaviour are not tolerated on a WHOOP dispatch. Report it. We act.",
      },
      {
        type: "cta",
        href: "/safety/policy/bullying-and-harassment",
        label: "BULLYING AND HARASSMENT POLICY →",
      },
      {
        type: "p",
        text: "This section is a company commitment. It does not replace the occupational health and safety law of the province you are standing in. If you need the regulator, you can call them. We would rather you called us first — but you do not owe us that if you are in danger.",
      },
    ],
  },
  {
    num: "13",
    slug: "ohs-policies",
    title: "OH&S POLICIES",
    kicker: "The rules for crane and rigging work. Short enough to use.",
    intro:
      "These policies apply to crane operators, riggers, signalpersons and lifting supervisors WHOOP deploys. They are not a general construction manual.",
    library: "policy",
    blocks: [
      {
        type: "p",
        text: "Each policy is a controlled document: number, revision 01, effective 2026-09-01, owner WHOOP Safety. The current version is the one on this site.",
      },
      {
        type: "cta",
        href: "/safety/policy/bullying-and-harassment",
        label: "WHOOP-POL-017 — BULLYING AND HARASSMENT →",
      },
    ],
  },
  {
    num: "14",
    slug: "swp-library",
    title: "SWP LIBRARY",
    kicker: "Search the procedure. Do it in order.",
    intro:
      "Safe Work Procedures for mobile crane setup, operation, communication, rigging, powerlines, critical lifts and taking damaged gear out of service. They are the method — numbered steps. Hazards and residual risk live in the JHA library.",
    library: "swp",
    blocks: [
      {
        type: "p",
        text: "WorkSafeBC requires written procedures for specified high-risk work (OHS Regulation B.C. Reg. 296/97). CCOHS describes an SWP as the step-by-step method. WHOOP SWPs are purpose, scope, procedure, competency, equipment, PPE, prohibited practices, emergency, documentation and the editions the Regulation names — CSA Z150-1998, CSA Z248-2004, ASME B30.5-2004, B30.22-2005. The matching JHA is the hazard analysis, not a second procedure.",
      },
      {
        type: "cta",
        href: "/safety/jha-library",
        label: "15 — JHA LIBRARY →",
      },
    ],
  },
  {
    num: "15",
    slug: "jha-library",
    title: "JHA LIBRARY",
    kicker: "What can hurt you. What holds the risk.",
    intro:
      "Job Hazard Analyses name the hazards, the consequence, and the control. They are not procedures. Do the work to the SWP. WorkSafeBC does not mandate a JHA form — the Act requires workers to know the hazards. This is that document for crane and rigging work.",
    library: "jha",
    blocks: [
      {
        type: "p",
        text: "CCOHS treats JHA and JSA as the same method: break the job into tasks, identify hazards at each task, select controls in hierarchy order — eliminate, substitute, engineer, administer, PPE last. Residual risk is named. If a stop condition exists, the job does not proceed. Workers Compensation Act s. 21(2)(b) and (e). OHS Regulation Parts 3, 4, 8, 11, 14 and 15.",
      },
      {
        type: "cta",
        href: "/safety/swp-library",
        label: "14 — SWP LIBRARY →",
      },
    ],
  },
  {
    num: "16",
    slug: "safety-forms",
    title: "SAFETY FORMS",
    kicker: "The record of the lift.",
    intro:
      "Daily, lifting, incident, worker and inspection forms for crane and rigging work. Complete them in the field. They are the required record.",
    library: "form",
    blocks: [
      {
        type: "p",
        text: "WHOOP does not ask you to invent a form on the tailgate. Use these. Site forms that are stricter or required by the client are used as well — not instead of the facts these forms capture.",
      },
      {
        type: "cta",
        href: "/safety/builder",
        label: "FORM BUILDER — ASSEMBLE, FILL, PDF →",
      },
    ],
  },
  {
    num: "17",
    slug: "whmis-sds",
    title: "WHMIS + SDS",
    kicker: "Only what WHOOP crews actually meet.",
    intro:
      "WHOOP supplies people, not a warehouse. The SDS library is diesel, hydraulic oil, grease, penetrating oil, wire rope dressing, battery electrolyte and hand cleaner — products operators and riggers actually touch on a dispatch.",
    library: "sds",
    blocks: [
      {
        type: "h",
        text: "WHMIS PROGRAM",
      },
      {
        type: "list",
        items: [
          "Workers have the right to know about products they use on the lift and on the carrier.",
          "Labels stay on. If a product is decanted, it is identified.",
          "SDS for the products below are in this library — no login, no expiring link.",
          "A product the site introduces is the site’s SDS. Ask before you use it.",
          "Spill, fire and first aid follow the SDS and the site emergency plan.",
        ],
      },
      {
        type: "p",
        text: "This is not a catalogue of construction chemicals. If WHOOP does not send you to use it, it is not in this library.",
      },
    ],
  },
  {
    num: "18",
    slug: "inspections",
    title: "INSPECTIONS + CORRECTIVE ACTIONS",
    kicker: "Finding → action → person → date → done → verified.",
    intro:
      "Inspections and actions for cranes, rigging, ground, zone and lifting PPE. Not a civil-site audit dressed up as a lift program.",
    blocks: [
      {
        type: "h",
        text: "WHAT WE INSPECT",
      },
      {
        type: "list",
        items: [
          "Crane pre-use and defects that affect lifting",
          "Rigging and below-the-hook gear",
          "Outriggers, mats and supporting surface",
          "Exclusion zone and access",
          "Communication equipment",
          "PPE used on the lift",
          "Corrective actions from incidents and near misses on lifting work",
        ],
      },
      {
        type: "h",
        text: "THE LOOP",
      },
      {
        type: "steps",
        items: [
          { n: "01", title: "FINDING", body: "Name the defect, the missing control, or the broken plan." },
          { n: "02", title: "ACTION", body: "Repair, replace, isolate, rewrite the plan, add a spotter, stop the lift." },
          { n: "03", title: "RESPONSIBLE PERSON", body: "A named person. Not “the site.”" },
          { n: "04", title: "DUE DATE", body: "Out-of-service gear is immediate, not next Tuesday." },
          { n: "05", title: "COMPLETION", body: "Done, with evidence. Not a promise." },
          { n: "06", title: "VERIFICATION", body: "A second set of eyes. Closed only when it is proven." },
        ],
      },
      {
        type: "cta",
        href: "/safety/safety-forms",
        label: "INSPECTION FORMS →",
      },
      {
        type: "p",
        text: "An orphan recommendation is not a control. Close the loop.",
      },
    ],
  },
  {
    num: "19",
    slug: "document-control",
    title: "DOCUMENT CONTROL",
    kicker: "The current version is the one on this site.",
    intro:
      "Controlled safety documents show number, revision, effective date, owner, approver and review date. This program is not behind an expiring link.",
    blocks: [
      {
        type: "h",
        text: "NUMBERING",
      },
      {
        type: "list",
        items: [
          "WHOOP-POL — policies",
          "WHOOP-SWP — safe work procedures",
          "WHOOP-JHA — job hazard analyses",
          "WHOOP-FRM — forms",
          "WHOOP-SDS — safety data sheets in this library",
          "WHOOP-RPT — field reports",
        ],
      },
      {
        type: "h",
        text: "CURRENT VERSION",
      },
      {
        type: "p",
        text: "Revision 01. Effective 2026-09-01. Owner: WHOOP Safety. Approved by: WHOOP. Review by: 2027-09-01. Documents on this website are the current version. Printed copies are uncontrolled the moment they leave the screen — check the number and revision before you use a photocopy.",
      },
      {
        type: "quote",
        text: "If you cannot name the revision, you are not following the revision. You are following a printout.",
      },
    ],
  },
];

export function getSafety(slug: string) {
  return SAFETY.find((s) => s.slug === slug);
}

export function getSafetyIndex() {
  return SAFETY.map(({ num, slug, title, kicker }) => ({
    num,
    slug,
    title,
    kicker,
  }));
}
