import type { Policy } from "./types";

export const POLICIES: Policy[] = [
  {
    slug: "health-and-safety",
    title: "HEALTH AND SAFETY",
    number: "WHOOP-POL-001",
    summary:
      "WHOOP is a safety company that supplies a crane and rigging workforce. The work is done to this program, to the law, and to the machine.",
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
        body: "WHOOP investigates events involving our people. Controls change. This program is updated when the lesson is real.",
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
    title: "WORKPLACE VIOLENCE",
    number: "WHOOP-POL-009",
    summary:
      "Threats and physical violence are not part of a lift. Report them. We act. OHS Regulation Part 4.",
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
    ],
  },
  {
    slug: "emergency-response",
    title: "EMERGENCY RESPONSE",
    number: "WHOOP-POL-015",
    summary:
      "Every dispatch knows how the site calls for help, where to muster, and how to put the crane in a safe condition.",
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
];

export function getPolicy(slug: string) {
  return POLICIES.find((item) => item.slug === slug);
}
