import type { Policy } from "./types";

export const POLICIES: Policy[] = [
  {
    slug: "health-and-safety",
    title: "OH&S POLICY",
    number: "WHOOP-POL-001",
    summary:
      "This is WHOOP’s occupational health and safety policy. The work is done to this program, to the law, and to the machine.",
    statements: [
      {
        title: "Scope",
        body: "Applies to every crane operator, rigger, signalperson and lifting supervisor WHOOP deploys, and to every lift we accept.",
      },
      {
        title: "Standard",
        body: "Work is performed to this Safety Program, applicable OHS law, CSA Z150 / Z248 as named, ASME B30 as named, the manufacturer, and the site. The stricter applicable requirement wins. Law always wins.",
      },
      {
        title: "Open book",
        body: "This program is public. It does not expire behind a form. Workers and clients can read it before the dispatch.",
      },
    ],
  },
  {
    slug: "competency",
    title: "COMPETENCY",
    number: "WHOOP-POL-002",
    summary:
      "A ticket is not competency. WHOOP matches people to the machine, the lift and the site.",
    statements: [
      {
        title: "Verify before dispatch",
        body: "Qualifications, experience and practical competency are checked against the work. Expired means not sent.",
      },
      {
        title: "Fit to the job",
        body: "A mobile operator is not a tower operator by default. A structural rigger is not a plant rigger by default. The closest body is not a match.",
      },
      {
        title: "Not a school",
        body: "WHOOP does not sell tickets or cover gaps with hope. Workers arrive already qualified for the role.",
      },
    ],
  },
  {
    slug: "training",
    title: "TRAINING",
    number: "WHOOP-POL-003",
    summary:
      "Site orientations and briefings are arranged. Missing qualifications are a gap, not a WHOOP course.",
    statements: [
      {
        title: "Before the gate",
        body: "Workers are briefed on this program and the known scope. Site orientations required by the client are completed before the hook is loaded.",
      },
      {
        title: "Records",
        body: "Training, orientations and competency assessments are recorded. Keep them with the worker file.",
      },
      {
        title: "Gap",
        body: "A worker who needs a new qualification is not dispatched into that role until they hold it.",
      },
    ],
  },
  {
    slug: "hazard-identification",
    title: "HAZARD IDENTIFICATION",
    number: "WHOOP-POL-004",
    summary:
      "Name the hazards of this lift, this site, this day. A parking-lot form is not identification.",
    statements: [
      {
        title: "Walk the path",
        body: "Pick, set, swing, travel, overhead lines, ground, other cranes, public, other trades.",
      },
      {
        title: "Name it",
        body: "Load unknowns, wind, energy, height, communication, fatigue, proximity to people. Unnamed hazards are uncontrolled hazards.",
      },
      {
        title: "When it changes",
        body: "New load, new weather, new trades in the zone — identification starts again.",
      },
    ],
  },
  {
    slug: "risk-assessment",
    title: "RISK ASSESSMENT",
    number: "WHOOP-POL-005",
    summary:
      "Every WHOOP dispatch requires a hazard assessment. FLHA at the shift. Reassess when the work changes.",
    statements: [
      {
        title: "Controls before the hook",
        body: "Exclusion zone, mats, tag lines, spotters, PPE, engineered plan if required, written stop criteria.",
      },
      {
        title: "FLHA",
        body: "Field level hazard assessment at the start of the shift and when the work changes. Not a signature collection.",
      },
      {
        title: "Stop criteria",
        body: "Unknown weight, bad ground, wind out of plan, lines inside MAD, lost signal, incompetent role — the lift does not proceed.",
      },
    ],
  },
  {
    slug: "incident-reporting",
    title: "INCIDENT REPORTING",
    number: "WHOOP-POL-006",
    summary:
      "Injuries, dropped loads, crane contact, failed rigging and stop-work events are reported. Quiet is not always safe.",
    statements: [
      {
        title: "Report it",
        body: "Any injury, any equipment or property damage, any event that required the lift to stop for safety. Immediate for serious events.",
      },
      {
        title: "No punishment for good faith",
        body: "Workers are not punished for reporting in good faith. They are held accountable for lying or continuing after a stop criterion.",
      },
      {
        title: "Learn",
        body: "WHOOP investigates events involving our people. Controls change. This program is updated when the lesson is real. Injuries also follow Injury Management and Return to Work.",
      },
    ],
  },
  {
    slug: "near-miss-reporting",
    title: "NEAR-MISS REPORTING",
    number: "WHOOP-POL-007",
    summary:
      "Someone in the zone, a lost signal that almost mattered, a sling that started to cut — that is a report, not a story for later.",
    statements: [
      {
        title: "What counts",
        body: "Anything that could have injured a person, dropped a load, or contacted plant, lines or the public — and did not, this time.",
      },
      {
        title: "Same day",
        body: "Report before leaving the shift. A near miss that waits until Monday is a rumour.",
      },
      {
        title: "Competence",
        body: "Reporting a near miss is competence. Hiding one is how the next crew inherits it.",
      },
    ],
  },
  {
    slug: "right-to-refuse",
    title: "RIGHT TO REFUSE UNSAFE WORK",
    number: "WHOOP-POL-008",
    summary:
      "The three rights are operating procedure. WHOOP will not send a replacement to do the same unsafe work.",
    statements: [
      {
        title: "Stop",
        body: "If you have reasonable cause to believe the work is dangerous to you or another person, you stop. You do not need permission.",
      },
      {
        title: "Say why",
        body: "State the danger to site supervision and to WHOOP. Be specific: the line, the ground, the load, the missing plan.",
      },
      {
        title: "It stays stopped",
        body: "Work resumes when the danger is controlled. WHOOP will not punish a good-faith refusal. WHOOP will not dispatch a replacement into the same uncontrolled condition.",
      },
    ],
  },
  {
    slug: "violence-and-harassment",
    title: "VIOLENCE / HARASSMENT",
    number: "WHOOP-POL-009",
    summary:
      "Threats and physical violence are not part of a lift. Harassment is WHOOP-POL-017. Report them. We act. OHS Regulation Part 4.",
    statements: [
      {
        title: "Zero for violence",
        body: "Physical violence, threats and intimidation toward a WHOOP worker — or by a WHOOP worker — are reported and acted on. Immediate danger: get out and call for help.",
      },
      {
        title: "The lift is not an excuse",
        body: "Yelling a stop is communication. A threat is not. The brief can be blunt. It cannot be violent.",
      },
      {
        title: "Bullying and harassment",
        body: "Humiliation, racism, sexual harassment and “that’s just the trade” are covered by WHOOP-POL-017 Bullying and Harassment — Workers Compensation Act s. 21, WorkSafeBC P2-21-2.",
      },
    ],
  },
  {
    slug: "ppe",
    title: "PPE",
    number: "WHOOP-POL-010",
    summary:
      "Minimum PPE for lifting work. Site rules that are stricter win. Damaged PPE is out of service.",
    statements: [
      {
        title: "Minimum",
        body: "Hard hat, CSA footwear, high-visibility clothing, eye protection. Gloves, hearing protection and fall protection as the task requires.",
      },
      {
        title: "Inspect",
        body: "PPE is inspected before use. Cracked hats, dead lanyards and homemade alterations are out of service.",
      },
      {
        title: "Issue",
        body: "WHOOP issues or confirms required PPE for the dispatch. Workers do not start the lift waiting on a hat.",
      },
    ],
  },
  {
    slug: "crane-operations",
    title: "CRANE OPERATIONS",
    number: "WHOOP-POL-011",
    summary:
      "The chart is the law of the machine. No lift without a plan. No unclear signal.",
    statements: [
      {
        title: "Chart and configuration",
        body: "Operators run the crane they were dispatched for, in the configuration the chart requires. Counterweight, boom, jib, software — as written.",
      },
      {
        title: "Ground and setup",
        body: "Outriggers, mats, level, and supporting surface as the manufacturer and the plan require. Scrap lumber is not engineering.",
      },
      {
        title: "Stop",
        body: "Unclear signal, unknown load, wind out of plan, lines inside MAD — the crane does not come on load.",
      },
    ],
  },
  {
    slug: "rigging",
    title: "RIGGING",
    number: "WHOOP-POL-012",
    summary:
      "Know the load. Know the hitch. Protect the sling. No people under the load.",
    statements: [
      {
        title: "Rated gear",
        body: "Slings and hardware are identified, inspected and used within WLL, including angle and hitch derates. ASME B30.9 as named in Part 15.",
      },
      {
        title: "No guess",
        body: "Weight and centre of gravity are confirmed. Sling angle is calculated when it matters. Below 30° from horizontal is not a WHOOP hitch unless an engineer owns the numbers.",
      },
      {
        title: "Out of service",
        body: "Damaged rigging is tagged, isolated and reported. No “one more lift.”",
      },
    ],
  },
  {
    slug: "equipment-inspection",
    title: "EQUIPMENT INSPECTION",
    number: "WHOOP-POL-013",
    summary:
      "Pre-use inspection of the crane as assigned, and of every sling and piece of hardware before it takes load.",
    statements: [
      {
        title: "Crane",
        body: "Operator inspection each shift as the manufacturer, the named 14.2 standard, and Part 14 require. Defects that affect lifting keep the crane down.",
      },
      {
        title: "Rigging",
        body: "Inspect before use. Missing tags, cuts, birdcaging, opened hooks, wrong pins — out of service.",
      },
      {
        title: "Records",
        body: "Inspections are recorded. Findings get an action, an owner and a due date. See Inspections and Corrective Actions.",
      },
    ],
  },
  {
    slug: "environmental-conditions",
    title: "ENVIRONMENTAL CONDITIONS",
    number: "WHOOP-POL-014",
    summary:
      "Wind, lightning, ice, heat and visibility are stop criteria, not atmosphere.",
    download: {
      href: "https://www.bccsa.ca/resources.php?id_catalogue=84",
      label: "BCCSA HEAT STRESS AND SUN SAFETY →",
      note: "BCCSA heat ECP, managing heat at work, and sun-safety ECP. Sign in on bccsa.ca to download the PDFs. Use them. They do not replace this policy. Wildfire smoke sits in the same outdoor-exposure problem — BCCSA catalogue Fire Safety and Wildfire Smoke.",
      external: true,
    },
    statements: [
      {
        title: "Wind",
        body: "Limits come from the manufacturer and the lift plan. The lower number wins. A “light breeze” is not a number.",
      },
      {
        title: "Lightning and storms",
        body: "Boom down. People off the machine and off the load. Resume only when the plan says so.",
      },
      {
        title: "Ground and ice",
        body: "Supporting surface, frost, thaw and drainage are part of setup. If the ground cannot hold the crane as configured, it is not a crane job yet.",
      },
      {
        title: "Heat and sun",
        body: "Cabs cook. Steel radiates. Signalpersons and riggers work in the open. Heat and UV are named on the FLHA. Water, shade, rest and stop criteria are set before the hook is loaded. If a worker is going down from heat, the lift is already over. BCCSA wrote the exposure-control guides — do not rewrite them.",
      },
      {
        title: "Wildfire smoke",
        body: "Smoke is an exposure, not weather small-talk. If air quality makes the work unsafe — cab or open — stop. The site and WHOOP are told. Resume only when the plan says so.",
      },
    ],
  },
  {
    slug: "emergency-response",
    title: "EMERGENCY RESPONSE",
    number: "WHOOP-POL-015",
    summary:
      "Every dispatch knows how the site calls for help, where to muster, and how to put the crane in a safe condition.",
    download: {
      href: "https://www.bccsa.ca/resources.php?id_catalogue=98",
      label: "BCCSA LONE HOIST OPERATOR RESCUE →",
      note: "BCCSA templates for a construction hoist operator down in the car — ERP, lockout, access options, drill. Sign in on bccsa.ca to download. Fall-arrest rescue is a different pack: BCCSA Working at Heights. Neither replaces this policy or the site plan.",
      external: true,
    },
    statements: [
      {
        title: "Before work",
        body: "Emergency number, muster, first aid, crane shutdown, fall-rescue if anyone is tied off, WHOOP after-hours contact.",
      },
      {
        title: "People first",
        body: "Make it safe. Get care. Hold the scene. Do not become the second event.",
      },
      {
        title: "Power line contact",
        body: "Stay on the crane unless fire or shock forces you off. Nobody approaches. Call the utility. Brief this on any site with overhead lines.",
      },
      {
        title: "Construction hoist operator",
        body: "A hoist car is working alone. If WHOOP supplies that operator, the site uses a written rescue procedure before the car runs. BCCSA already wrote the templates. Use them. Do not invent a hoist rescue on the day.",
      },
      {
        title: "Fall arrest",
        body: "Nobody ties off without a rescue plan that can get them down. BCCSA’s fall-protection rescue guide is the construction template. The crane is not the rescue plan unless that operation is permitted and planned.",
      },
    ],
  },
  {
    slug: "continuous-improvement",
    title: "CONTINUOUS IMPROVEMENT",
    number: "WHOOP-POL-016",
    summary:
      "Findings become actions. Actions get owners and dates. This program is revised when the lesson is real.",
    statements: [
      {
        title: "Close the loop",
        body: "Finding → action → responsible person → due date → completion → verification. No orphan recommendations.",
      },
      {
        title: "This program",
        body: "Controlled documents show number, revision, effective date, owner, approver and review date. The current version is the one on this site.",
      },
    ],
  },
  {
    slug: "bullying-and-harassment",
    title: "BULLYING AND HARASSMENT",
    number: "WHOOP-POL-017",
    summary:
      "Not acceptable. Not “the trade.” Report it. WHOOP deals with it. WorkSafeBC P2-21-2, P2-22-1, P2-23-2.",
    statements: [
      {
        title: "Policy statement",
        body: "Workplace bullying and harassment is not acceptable or tolerated at WHOOP, on a WHOOP dispatch, or toward a WHOOP worker. This is the policy statement required of an employer under WorkSafeBC P2-21-2(a). WHOOP does not engage in bullying and harassment of workers or supervisors.",
      },
      {
        title: "What it is",
        body: "Any inappropriate conduct or comment toward a worker that the person knew, or reasonably ought to have known, would humiliate or intimidate that worker. It includes sexual harassment, racism, isolation, sabotage of someone’s work, and “that’s just the trade.” The person can be anyone on the job — WHOOP, a client, another contractor’s crew.",
      },
      {
        title: "What it is not",
        body: "Reasonable action taken to manage the work: correcting an unsafe hitch, stopping a lift, checking competency, holding a person to the chart, or speaking plainly in a brief. Yelling STOP is communication. Humiliating a rigger in front of the crew is not.",
      },
      {
        title: "Scope",
        body: "Applies to every crane operator, rigger, signalperson and lifting supervisor WHOOP deploys, and to WHOOP supervisors. It applies on client sites. A multiple-employer workplace does not cancel WHOOP’s duty to its workers.",
      },
      {
        title: "WHOOP",
        body: "Takes all reasonable steps to prevent where possible, or otherwise minimize, workplace bullying and harassment. Workers Compensation Act s. 21. Informs workers of this policy. Trains workers and supervisors to recognize it, report it, and apply these procedures. Reviews this policy and these procedures at least annually — next review 2027-09-01.",
      },
      {
        title: "Supervisors",
        body: "Do not engage in bullying and harassment. Apply this policy. P2-23-2. A supervisor who uses the brief to humiliate is not supervising.",
      },
      {
        title: "Workers",
        body: "Do not engage in bullying and harassment of other workers, supervisors, the employer, or persons acting on behalf of the employer. Report it if you experience it or see it. Apply this policy. P2-22-1.",
      },
      {
        title: "How to report",
        body: "Report as soon as you can. Call WHOOP at 1 604 431 2000 and ask for Safety, email hire@whoopp.ca with the subject BULLYING AND HARASSMENT, or use Report Bullying or Harassment under Incident Reporting. Say who, when, where, what was said or done, and who saw it. You do not need a form if a call is faster.",
      },
      {
        title: "If the alleged person is WHOOP",
        body: "If the alleged bully is your WHOOP supervisor or a person acting for WHOOP, do not report only to that person. Call WHOOP and ask for Safety, or email hire@whoopp.ca. If the alleged person is the employer itself and you cannot use the internal route, call the WorkSafeBC Prevention Information Line: 1 888 621 7233.",
      },
      {
        title: "How WHOOP deals with it",
        body: "WHOOP Safety, or a person who is not the alleged bully, investigates promptly and fairly. The investigation covers what happened, who was involved, when and where, witnesses, and any record. The people involved are heard. Confidentiality is kept as far as the investigation allows. Follow-up includes corrective action and a timeline. Records are kept by WHOOP. They are not sent to WorkSafeBC unless asked for.",
      },
      {
        title: "No punishment for good faith",
        body: "Workers are not punished for reporting in good faith, for being a witness, or for refusing to join in. A false report made to injure someone is a separate matter.",
      },
      {
        title: "Immediate danger",
        body: "If you are in immediate danger, get out and call for help. This policy does not ask you to stay in a cab, a zone, or a parking lot to be abused.",
      },
    ],
  },
  {
    slug: "workplace-conduct",
    title: "WORKPLACE CONDUCT",
    number: "WHOOP-POL-018",
    summary:
      "You represent WHOOP on someone else’s site. Show up. Be competent. Do not make the lift about you.",
    statements: [
      {
        title: "On the dispatch",
        body: "WHOOP workers arrive on time, briefed, and fit for the work. If you cannot make the call, WHOOP hears it first — not the gate.",
      },
      {
        title: "On the client’s site",
        body: "Follow this program and the site’s rules — whichever is stricter. You are a guest with a job. You are not the prime contractor.",
      },
      {
        title: "The brief",
        body: "The brief can be blunt. It cannot be abusive, violent, or a joke at someone’s expense. See Violence, Bullying and Harassment, and Discrimination.",
      },
      {
        title: "The work",
        body: "No fighting. No theft. No vandalism. A phone does not run a crane. Photographs of a client’s plant or people are not posted unless the site has said so.",
      },
      {
        title: "Who you answer to",
        body: "WHOOP remains your employer. Site direction that is unsafe is refused under the three rights. Site direction that is lawful and stricter than ours is followed.",
      },
    ],
  },
  {
    slug: "fitness-for-work",
    title: "FITNESS FOR WORK",
    number: "WHOOP-POL-019",
    summary:
      "Fit for this dispatch, today. Fatigue, illness and injury are named before the gate — not after the hook.",
    statements: [
      {
        title: "This shift",
        body: "A crane operator, rigger or signalperson must be able to do this work safely today. Rest, illness, injury, vision and hearing as the role requires. If you are not fit, you say so before you travel or before you start.",
      },
      {
        title: "Tell WHOOP",
        body: "OHS Regulation 4.19. A worker with an impairment that may affect safe work informs the supervisor or employer and does not knowingly do work where that impairment creates an undue risk to anyone.",
      },
      {
        title: "WHOOP does not assign it",
        body: "WHOOP does not put a person who is not fit onto a crane, a hitch, or a set of signals. A replacement is found, or the dispatch waits. Covering with hope is not a dispatch.",
      },
      {
        title: "Medical information",
        body: "WHOOP asks only what is needed to match the person to the work and to accommodate where the law requires it. It is not a fishing trip. See Impairment and Return to Work.",
      },
    ],
  },
  {
    slug: "impairment",
    title: "IMPAIRMENT",
    number: "WHOOP-POL-020",
    summary:
      "Unfit to lift is unfit to lift. Alcohol, cannabis, other drugs, medication and fatigue. OHS Regulation 4.19 and 4.20.",
    statements: [
      {
        title: "The rule",
        body: "A person must not enter or remain at a workplace while their ability to work is affected by alcohol, a drug or another substance so as to endanger anyone. WHOOP must not knowingly permit it. 4.20. Crane operation, rigging and signalling are safety-sensitive. There is no ‘a little bit’ on a hook.",
      },
      {
        title: "What counts",
        body: "Alcohol. Cannabis — legal possession is not permission to operate impaired. Illegal drugs. Prescription and over-the-counter medication that affects the work. Fatigue and illness. If it makes you unfit to run the machine, make the hitch, or hold the zone, it is impairment.",
      },
      {
        title: "Report it",
        body: "Workers report impairment to WHOOP before they attend, start, or continue. Observed impairment is treated the same as reported impairment. The person comes off the lift. They are not left in the cab to ‘sleep it off.’",
      },
      {
        title: "Testing",
        body: "WHOOP does not run random drug or alcohol testing as a default. Testing happens only where the law allows and the situation requires it. Client or prime-contractor programs that are lawful are followed for that site. A test is not a substitute for taking an impaired person off the work.",
      },
      {
        title: "Disability",
        body: "Addiction and other disabilities are protected under the Human Rights Code. WHOOP will accommodate to the point of undue hardship when it is told. Accommodation is not a licence to lift impaired. See Discrimination and Fitness for Work.",
      },
    ],
  },
  {
    slug: "working-alone",
    title: "WORKING ALONE",
    number: "WHOOP-POL-021",
    summary:
      "A lift is not a one-person job. If assistance would not be readily available, there is a written check-in. 4.21–4.23.",
    statements: [
      {
        title: "No solo lift",
        body: "WHOOP does not dispatch a worker to make a lift alone. Operator, rigger and signals are a crew. If the site will leave one WHOOP person to lift, we do not take that dispatch.",
      },
      {
        title: "When this policy applies",
        body: "Working alone or in isolation means assistance would not be readily available in an emergency, injury or illness. Visual or verbal contact with other people is readily available. A phone or radio is not. Travel, waiting on a machine, a remote plant, night work, or a crew that left can put a WHOOP worker in isolation even when the lift itself was crewed.",
      },
      {
        title: "Before that dispatch",
        body: "Hazards are identified. A written procedure is set: who checks in, how, and how often — matching the risk. The worker is trained on it. If the site cannot support that, WHOOP does not send the person.",
      },
      {
        title: "Check-in",
        body: "A named person at WHOOP or on site receives the check-in at the set times. Missed check-in is not a voicemail. The designated person calls, then escalates, then sends help or emergency services. A spouse is not the check-in system.",
      },
      {
        title: "Say it",
        body: "If you will be out of visual and verbal contact, you tell WHOOP before the hook. We set the check-in or we pull the dispatch.",
      },
    ],
  },
  {
    slug: "injury-management",
    title: "INJURY MANAGEMENT",
    number: "WHOOP-POL-022",
    summary:
      "First aid first. Report it. Care, not a cover-up. The claim is not a rumour.",
    download: {
      href: "/downloads/injury-management.zip",
      label: "DOWNLOAD INJURY MANAGEMENT PACK →",
      note: "BCCSA employer guide, employee bulletin, sample forms and supplementary materials. Use them. Do not replace WHOOP-POL-022.",
    },
    statements: [
      {
        title: "Care",
        body: "Injured people get first aid and further care as required. Make the lift safe. Do not become the second event. Site first aid and WHOOP are both told.",
      },
      {
        title: "Report",
        body: "Injuries are reported the same shift — including what someone calls nothing. First aid report WHOOP-FRM-012. Incident report as required. WorkSafeBC is notified as the law requires. Hiding an injury to finish a pick is how it becomes a worse injury.",
      },
      {
        title: "Stay at work",
        body: "A worker stays on shift only if the remaining work is safe given the injury. Sitting in a cab in pain is not modified work. See Return to Work.",
      },
      {
        title: "Cooperate",
        body: "WHOOP, the worker and the site cooperate on treatment, reporting and suitable duties. The file is not a defence brief. It is how the person gets care and the work gets safer. The downloadable pack on this page is BCCSA injury-management material — guides, sample forms, supplementary notes. Use it. It does not replace this policy.",
      },
    ],
  },
  {
    slug: "return-to-work",
    title: "RETURN TO WORK",
    number: "WHOOP-POL-023",
    summary:
      "Restrictions named. Work matched. Not a paper promise. Workers Compensation Act duty to maintain employment where it applies.",
    statements: [
      {
        title: "Suitable work",
        body: "Return-to-work is work the person can do within named restrictions. WHOOP does not dispatch an operator, rigger or signalperson into a role that violates those restrictions. The form is WHOOP-FRM-RTW.",
      },
      {
        title: "Plan",
        body: "Restrictions, duties, hours, review date, and who owns the plan. Gradual return if that is what the restriction requires. A signature without duties is not a plan.",
      },
      {
        title: "Duty",
        body: "Where the Workers Compensation Act duty to maintain employment applies, WHOOP maintains employment and offers suitable or pre-injury work to the point of undue hardship. Inconvenience is not undue hardship.",
      },
      {
        title: "Cooperate",
        body: "The worker, WHOOP, the clinician and WorkSafeBC share what is needed to match the work. Medical detail beyond the restriction is not a gossip file. See Fitness for Work and Injury Management.",
      },
    ],
  },
  {
    slug: "discrimination",
    title: "DISCRIMINATION",
    number: "WHOOP-POL-024",
    summary:
      "Hiring and dispatch are about the work. Human Rights Code s. 13. Not a vibe, and not a pretext.",
    statements: [
      {
        title: "The Code",
        body: "WHOOP does not refuse to employ, refuse to continue to employ, or discriminate in any term of employment — including who gets the call — because of Indigenous identity, race, colour, ancestry, place of origin, political belief, religion, marital status, family status, physical or mental disability, sex, sexual orientation, gender identity or expression, age, or a conviction unrelated to the work. Human Rights Code s. 13. WHOOP does not refuse to refer a person for those reasons.",
      },
      {
        title: "This work",
        body: "Matching a person to a class of crane, a hitch, or a set of signals is a bona fide occupational requirement when it is real. A ticket, this machine, this site. It is not a pretext for a protected ground. ‘Not the right fit’ without the work named is not a reason.",
      },
      {
        title: "Accommodate",
        body: "WHOOP accommodates protected characteristics to the point of undue hardship. Accommodation does not put an impaired or restricted person onto a hook that the restriction forbids. See Fitness for Work, Impairment and Return to Work.",
      },
      {
        title: "Report",
        body: "Report to WHOOP at 1 604 431 2000 and ask for Safety, or email hire@whoopp.ca. If the alleged person is WHOOP, use that route anyway and name it. A complaint may also be filed with the BC Human Rights Tribunal. Bullying and harassment under WorkSafeBC is a separate file — WHOOP-POL-017 — and both can apply.",
      },
    ],
  },
];

export function getPolicy(slug: string) {
  return POLICIES.find((item) => item.slug === slug);
}
