import type { Jha, JhaRow } from "./types";
import { LIFT_PPE, LIFT_REFS } from "./meta";

const JHA_REFS = [
  "Workers Compensation Act s. 21(2)(b) — workers made aware of known or reasonably foreseeable hazards",
  "Workers Compensation Act s. 21(2)(e) — information, instruction, training and supervision",
  "OHS Regulation B.C. Reg. 296/97 (in force 15 Apr 1998) Part 3 — program, instruction, inspections (ss. 3.1–3.12)",
  "CCOHS Job Safety Analysis — JSA and JHA are the same method: break the job, name the hazards, select controls",
  ...LIFT_REFS,
];

function jha(
  number: string,
  slug: string,
  title: string,
  summary: string,
  fields: {
    job: string;
    people: string[];
    rows: JhaRow[];
    residual: string;
    stop: string[];
    swpHref?: string;
    swpLabel?: string;
  }
): Jha {
  return {
    slug,
    title,
    number,
    summary,
    ppe: LIFT_PPE,
    references: JHA_REFS,
    ...fields,
  };
}

export const JHAS: Jha[] = [
  jha(
    "WHOOP-JHA-001",
    "rigging-a-load",
    "RIGGING A LOAD",
    "Dropped load, crush, cut sling, people in the fall line.",
    {
      job: "Making a hitch and taking a load off the ground. The steps live in WHOOP-SWP-011. This page is what can go wrong while you do them.",
      people: ["Rigger at the piece", "Operator on the crane", "Signalperson", "Anyone who can walk into the fall zone"],
      swpHref: "/safety/swp/slinging-loads",
      swpLabel: "SWP — SLINGING LOADS →",
      residual:
        "After blocking, inspection, a known hitch and a test lift, residual risk is a load that still moves when it should not — wind, a missed COG, a person entering the zone. That residual is held by the exclusion zone and by stop-work. It is not held by hoping.",
      stop: [
        "Weight or centre of gravity unknown",
        "Gear fails inspection (Part 15)",
        "Angle or hitch not understood",
        "People in the fall line (14.44)",
      ],
      rows: [
        {
          task: "Plan the hitch",
          hazard: "Unknown weight or COG",
          risk: "Overload, tip, or the piece rolling onto the rigger. High severity.",
          control: "Eliminate the guess. Shipping data, scale, or engineer. 14.36 — load weight determined. No plan, no hook.",
        },
        {
          task: "Inspect the gear",
          hazard: "Cut, birdcaged, opened, or unidentified sling or hardware",
          risk: "Hitch fails under load. Dropped load. Fatal if anyone is under it.",
          control: "Inspect before use (Part 15). Failed gear tagged and isolated — WHOOP-SWP-025. No one-more-lift.",
        },
        {
          task: "Connect the hitch",
          hazard: "Sharp edge, twisted sling, hardware not seated, piece not blocked",
          risk: "Sling cut, load shifts onto the rigger, fingers in the pinch.",
          control: "Block the piece first. Softeners. Pins fully in. Hands off before weight. Engineer if there are no lifting points.",
        },
        {
          task: "Clear the zone",
          hazard: "People under or in the fall line",
          risk: "Struck-by or crush. 14.44 — loads over work areas.",
          control: "Exclusion zone held before the load leaves the ground. Signalperson owns the zone, not traffic.",
        },
        {
          task: "Test, then lift",
          hazard: "Unbalanced hitch, shock load, lost signal",
          risk: "Load dumps, crane shock, second hitch failure.",
          control: "Inch off the ground. Re-rig if it tilts. Smooth hoist. Stop on any lost signal (14.47).",
        },
      ],
    }
  ),
  jha(
    "WHOOP-JHA-002",
    "signalling-a-crane",
    "SIGNALLING A CRANE",
    "Two voices, a blind operator, a person in the path.",
    {
      job: "Directing the crane so the operator moves only on a signal they can trust. Method: WHOOP-SWP-005 / 007.",
      people: ["Signalperson", "Operator", "Riggers in the zone", "Other trades who can enter the path"],
      swpHref: "/safety/swp/crane-communication",
      swpLabel: "SWP — CRANE COMMUNICATION →",
      residual:
        "Radios fail and hands get lost in glare. Residual risk is a crane that moves on silence or on the wrong person. Held by a hard STOP and by not moving until the crew is reset. 14.47–14.49.",
      stop: [
        "Two people signalling",
        "Cannot see load, path or operator — and no dedicated radio protocol",
        "Radio untested or garbage",
        "Zone lost",
      ],
      rows: [
        {
          task: "Name one signalperson",
          hazard: "Two people signalling",
          risk: "Operator picks the convenient instruction. Load into a person or a structure.",
          control: "One voice. Transfer spoken and acknowledged. 14.47.",
        },
        {
          task: "Agree the system",
          hazard: "Non-standard hands, wrong channel, private dialect",
          risk: "Operator translates. Translation is a guess. Guess is a collision.",
          control: "Standard signals. Channel and STOP in the brief. Dedicated radio where 14.49 requires it.",
        },
        {
          task: "See the load, path and operator",
          hazard: "Blind corner, glare, signalperson also rigging",
          risk: "Boom or load into steel, lines or people the operator cannot see.",
          control: "If you cannot see, you are not signalling. Dedicated spotter or stop. Blind lifts: WHOOP-JHA-005.",
        },
        {
          task: "Hold the zone",
          hazard: "Trades walking the fall line while the signalperson is busy",
          risk: "Struck-by. 14.44.",
          control: "Hands are for the crane. Zone is a control, not a courtesy. Anyone may STOP.",
        },
      ],
    }
  ),
  jha(
    "WHOOP-JHA-003",
    "connecting-a-load",
    "CONNECTING A LOAD",
    "Pinch, roll, cut sling, hands on a live hitch.",
    {
      job: "Putting the hitch on the piece before the crane takes weight. Method: WHOOP-SWP-011 / 012.",
      people: ["Rigger on or beside the load", "Operator waiting on the hook", "Anyone reaching in to ‘help’"],
      swpHref: "/safety/swp/slinging-loads",
      swpLabel: "SWP — SLINGING LOADS →",
      residual:
        "A blocked, inspected hitch still pinches when the piece settles. Residual is fingers and feet. Held by hands and feet out before weight, and by a test lift before anyone believes the connection.",
      stop: [
        "Wrong shackle or missing pin",
        "Sling on a sharp edge with no protection",
        "Load not blocked",
        "No rated lifting point and no engineered method",
      ],
      rows: [
        {
          task: "Block the piece",
          hazard: "Unstable load, roll, stack shift",
          risk: "Crush of the rigger against the piece or the ground.",
          control: "Shore or block so the piece cannot roll onto a person. Do not crawl a live stack.",
        },
        {
          task: "Choose the points",
          hazard: "Choking a mystery flange, shop-welded eye",
          risk: "Point tears out. Dropped load.",
          control: "Designed lifting points. Homemade gear is out unless a professional engineer owns it (14.2, 14.15).",
        },
        {
          task: "Seat hardware",
          hazard: "Pin not engaged, side-loaded shackle, sling on the hook tip",
          risk: "Hardware opens under load. Dropped load.",
          control: "Match pin to body. Load bow and pin as designed. Sling in the saddle. Part 15.",
        },
        {
          task: "Protect the sling",
          hazard: "Sharp edge, heat, chemical",
          risk: "Sling cut or burned through. Dropped load delayed, not prevented.",
          control: "Softeners, pads, or a different hitch. Change the method — do not wrap tape as WLL.",
        },
        {
          task: "Clear hands",
          hazard: "Fingers, gloves, clothing in the hitch as the crane takes weight",
          risk: "Amputation, pull-in.",
          control: "Hands and feet out. Operator does not take weight until the rigger is clear and the signal is given.",
        },
      ],
    }
  ),
  jha(
    "WHOOP-JHA-004",
    "landing-a-load",
    "LANDING A LOAD",
    "Pinch against a wall, unprepared set, tag line wrapped on a wrist.",
    {
      job: "Putting the piece down so it stays put and nobody is trapped. Method: WHOOP-SWP-015.",
      people: ["Rigger at the set", "Tag-line hands", "Operator", "Anyone between the load and a structure"],
      swpHref: "/safety/swp/load-control",
      swpLabel: "SWP — LOAD CONTROL →",
      residual:
        "A prepared set still pinches when the piece rotates on the last inch. Residual is the gap between load and wall. Held by tag lines, a slow land, and nobody in that gap. 14.50 — unhook only when landed and stable.",
      stop: [
        "Landing not prepared",
        "People between load and structure",
        "Tag line wrapped on a wrist or belt",
        "Signal lost on the last foot",
      ],
      rows: [
        {
          task: "Prepare the set",
          hazard: "No blocking, bolts, dunnage or clearance",
          risk: "Load set on nothing. Collapse, roll, second lift in a panic.",
          control: "Set ready before the load arrives. If the set is not ready, the load does not come in.",
        },
        {
          task: "Control rotation",
          hazard: "Spin into people or plant; tag line on the body",
          risk: "Struck-by, pull-in, person used as an anchor.",
          control: "Tag lines, not shoulders. Hold so you can let go. WHOOP-JHA-008.",
        },
        {
          task: "Keep the pinch clear",
          hazard: "Person between load and wall, column, truck or another piece",
          risk: "Crush. Often fatal. Often ‘just guiding it’.",
          control: "Nobody in the pinch. Push with a tag line or a pike pole — not a hip.",
        },
        {
          task: "Land, then disconnect",
          hazard: "Unhooking a load that is still live",
          risk: "Load shifts onto the rigger. 14.50.",
          control: "Fully landed and stable. Slack confirmed. Then hardware off. Then inspect the gear.",
        },
      ],
    }
  ),
  jha(
    "WHOOP-JHA-005",
    "blind-lift",
    "BLIND LIFT",
    "Operator cannot see. Radio dies. Boom into what nobody called.",
    {
      job: "Moving a load when the operator cannot see the load, the set, or part of the path. Method: WHOOP-SWP-008. 14.47–14.49.",
      people: ["Operator", "Dedicated signalperson", "Anyone in a hole, on a floor, or around a corner the boom can reach"],
      swpHref: "/safety/swp/blind-lifts",
      swpLabel: "SWP — BLIND LIFTS →",
      residual:
        "Even with named eyes and a radio check, a radio can die mid-swing. Residual is a crane that still has momentum. Held by inching, by a written lost-comms rule, and by stopping — not completing the last guessed instruction.",
      stop: [
        "No dedicated signalperson",
        "Radio not tested",
        "Relay chain with no protocol",
        "Path not walked",
      ],
      rows: [
        {
          task: "Declare it blind",
          hazard: "Discovering the operator cannot see once the load is at radius",
          risk: "Improvised signalling. Collision.",
          control: "Say it in the brief. If it is blind, it is planned as blind. 14.47.",
        },
        {
          task: "Name the eyes",
          hazard: "Relay chain, two voices, operator guessing",
          risk: "Delayed or inverted instruction. Load into a person.",
          control: "One voice the operator listens to. Relays only with a protocol. Dedicated radio system where 14.49 applies.",
        },
        {
          task: "Walk the path",
          hazard: "Lines, steel, people, other cranes out of sight",
          risk: "Contact. 14.40 swing hazards. 14.52.1 high voltage.",
          control: "Walk it before the hook is loaded. Spotter on lines. MAD is a wall.",
        },
        {
          task: "Lost communications",
          hazard: "Dead radio, stepped-on channel, silence",
          risk: "Operator completes a swing into a floor.",
          control: "Stop. Hold or land as the brief said. Do not finish the last instruction you think you heard.",
        },
      ],
    }
  ),
  jha(
    "WHOOP-JHA-006",
    "mobile-crane-setup",
    "MOBILE CRANE SETUP",
    "Punch-through, short-rig, tail swing, overhead lines, wrong chart.",
    {
      job: "Putting a mobile crane or boom truck on the ground the chart requires. Method: WHOOP-SWP-001, 021, 022. 14.2(5) CSA Z150-1998 or ASME B30.5-2004 or B30.22-2005.",
      people: ["Operator", "Oiler / second", "People in the jack line or tail-swing arc", "Anyone under a boom being raised into lines"],
      swpHref: "/safety/swp/mobile-crane-setup",
      swpLabel: "SWP — MOBILE CRANE SETUP →",
      residual:
        "Ground that looked competent can still give on the first load. Residual is settlement and a crane that is no longer the crane on the chart. Held by mats sized for the reaction, a level check, and treating the first load as a test of the pad. 14.11 support structure. 14.35 pre-use.",
      stop: [
        "Wrong configuration for the chart in the cab",
        "Ground will not hold the reaction",
        "Outriggers not in the charted position",
        "Overhead lines inside MAD",
      ],
      rows: [
        {
          task: "Confirm the machine",
          hazard: "Counterweight, boom, software or tyres not as dispatched",
          risk: "Chart does not apply. Overload without an alarm that matches reality. 14.2, 14.12.",
          control: "Serial, configuration and chart are the same machine. Manufacturer instructions in the cab.",
        },
        {
          task: "Walk the pad",
          hazard: "Backfill, vaults, slope, buried services, other cranes",
          risk: "Punch-through, overturn, contact with a main. High severity.",
          control: "Look and ask. Locates. Engineer when the surface is a guess. Mats spread load — they do not invent bearing.",
        },
        {
          task: "Outriggers and mats",
          hazard: "Short-rig without that chart; undersized cribbing; people in the jack line",
          risk: "Overturn. Crush beside a jack. 14.2 to the manufacturer.",
          control: "Fully extended unless the short-rig chart is in the cab and in use. People clear while jacking. Level within manufacturer limit.",
        },
        {
          task: "Swing and lines",
          hazard: "Tail swing, boom into plant, overhead electrical",
          risk: "Struck-by, arc, step potential. 14.40, 14.52.1.",
          control: "Swing check before the hook. MAD as a wall. Spotter when the boom can encroach.",
        },
        {
          task: "Inspect, then lift",
          hazard: "Defect that affects lifting, skipped pre-use",
          risk: "Function failure on the first pick. 14.35.",
          control: "Pre-use this shift, this configuration. Lifting defects: crane down.",
        },
      ],
    }
  ),
  jha(
    "WHOOP-JHA-007",
    "suspended-load",
    "SUSPENDED LOAD",
    "Someone under it. Nobody on the crane. Wind on a hanging piece.",
    {
      job: "Any time a load is off the ground on a WHOOP lift. Method: WHOOP-SWP-017. 14.44, 14.45.",
      people: ["Everyone who can walk under the hook", "Operator", "Tag-line hands", "Trades using the shadow as a shortcut"],
      swpHref: "/safety/swp/suspended-loads",
      swpLabel: "SWP — SUSPENDED LOADS →",
      residual:
        "A held zone still fails when a labourer cuts through. Residual is a person where the load can fall. Held by a live exclusion and by not leaving a load hanging for convenience. 14.45 unattended loads.",
      stop: [
        "Person in the fall zone",
        "Unattended suspended load",
        "Riding the load (14.51)",
        "Wind above the plan or the manufacturer",
      ],
      rows: [
        {
          task: "Hoist",
          hazard: "People still in the fall zone",
          risk: "Struck-by. 14.44 loads over work areas.",
          control: "Zone cleared and held before the load leaves the ground. Not after.",
        },
        {
          task: "Hold in the air",
          hazard: "Drift, wind sail, pendulum",
          risk: "Contact with plant or people. Side load on the crane.",
          control: "Tag lines. Smooth motions. Manufacturer and plan wind limits — the lower number wins.",
        },
        {
          task: "Leave the seat",
          hazard: "Load left hanging, crane unattended",
          risk: "Drift into a walkway. Unauthorized operation. 14.45.",
          control: "Land it, or a named operator stays with the crane under a written hold. Convenience is not a reason.",
        },
        {
          task: "Ride or walk under",
          hazard: "Person on the hook or in the shadow",
          risk: "Fall from the load, or crush. 14.51 riding hook or load — prohibited.",
          control: "Eliminate. Nobody rides. Nobody uses the shadow as a path.",
        },
      ],
    }
  ),
  jha(
    "WHOOP-JHA-008",
    "tag-line",
    "TAG LINE",
    "Wrap on a wrist. Standing in the bight. Pulled under the load.",
    {
      job: "Using a line to control rotation of a live load. Method: WHOOP-SWP-016.",
      people: ["Tag-line hands", "Anyone in the bight", "Rigger who grabbed the load instead"],
      swpHref: "/safety/swp/tag-lines",
      swpLabel: "SWP — TAG LINES →",
      residual:
        "A correct hold still loses when the load takes a gust. Residual is a person who becomes an anchor. Held by being able to let go, by standing out of the fall zone, and by stopping the crane instead of winning a tug-of-war.",
      stop: [
        "Line wrapped on a wrist, belt or ankle",
        "Standing in the bight",
        "Pulling the load under the boom",
        "Line that can blow into a powerline",
      ],
      rows: [
        {
          task: "Select and attach",
          hazard: "Frayed line, snag, attach point that slips",
          risk: "Sudden release. Load spins. Person stumbles under it.",
          control: "Serviceable length for this load. Attach where it will not slip off or cut.",
        },
        {
          task: "Hold the line",
          hazard: "Turn around the body; gloves that will not release",
          risk: "Pull-in, amputation, person dragged under the load.",
          control: "Hold so you can let go. Never a wrap on flesh or belt. You are not an anchor.",
        },
        {
          task: "Stand",
          hazard: "Fall zone, pinch, bight, under the boom",
          risk: "Struck-by or crush when the load or the line takes you.",
          control: "Out of the fall zone, out of the pinch, out of the bight. Guide — do not fight.",
        },
        {
          task: "Near lines",
          hazard: "Tag line as a conductor into MAD",
          risk: "Arc, shock. 14.52.1.",
          control: "If the line can blow into a conductor, this is not a tag-line job until the utility or the plan says it is.",
        },
      ],
    }
  ),
  jha(
    "WHOOP-JHA-009",
    "rigging-inspection",
    "RIGGING INSPECTION",
    "Unidentified gear. A cut that the next rigger will use.",
    {
      job: "Deciding whether a sling or fitting may take load. Method: WHOOP-SWP-009. Part 15.",
      people: ["Rigger doing the inspection", "The next rigger if failed gear is left on the pile", "Anyone under a hitch made of that gear"],
      swpHref: "/safety/swp/rigging-inspection",
      swpLabel: "SWP — RIGGING INSPECTION →",
      residual:
        "Inspection catches what can be seen. Residual is internal damage, a tag that lied, or gear that fails between inspect and use. Held by inspecting again after the lift, and by destroying or quarantining anything that failed — not by leaving it ‘so nobody trips.’",
      stop: [
        "No identification or illegible rating",
        "Cut, birdcage, opened hook, wrong pin",
        "Heat or chemical damage the material is not rated for",
        "Homemade modification",
      ],
      rows: [
        {
          task: "Identify",
          hazard: "Unmarked sling, mystery fitting, homemade eye",
          risk: "WLL is a rumour. Overload. Dropped load. Part 15.",
          control: "No ID — out of service. Engineer for modifications (14.15). Shop specials are out.",
        },
        {
          task: "Inspect body and hardware",
          hazard: "Broken wires, cuts, stretch, opened throat, missing latch",
          risk: "Hitch fails at load. People in the zone take the consequence.",
          control: "Rejection criteria in the SWP. Fail = tag, isolate, report the same shift. WHOOP-SWP-025.",
        },
        {
          task: "Leave it for the next person",
          hazard: "Failed gear on the working pile",
          risk: "The next hitch is the incident. Delayed, not avoided.",
          control: "Physical isolation. Not beside the good slings. Not ‘we’ll deal with it later.’",
        },
      ],
    }
  ),
  jha(
    "WHOOP-JHA-010",
    "critical-lift",
    "CRITICAL LIFT",
    "Capacity, tandem, public, plant — and a brief that was theatre.",
    {
      job: "A lift the site or this program calls critical. Method: WHOOP-SWP-019. 14.42 tandem. 14.42.1 critical lift.",
      people: ["Named supervisor", "Operator", "Rigger and signalperson", "People under the path — plant operators, public, other trades"],
      swpHref: "/safety/swp/critical-lifts",
      swpLabel: "SWP — CRITICAL LIFTS →",
      residual:
        "A written plan still fails when a hold point is skipped because the crane is waiting. Residual is overconfidence. Held by named people who can repeat the abort, and by stopping when a condition is unmet — not by adapting on the fly. 14.42.1.",
      stop: [
        "No written critical lift plan at the lift",
        "No named supervisor",
        "Anyone on the crew cannot repeat the abort",
        "Tandem without a single lead and a plan (14.42)",
      ],
      rows: [
        {
          task: "Declare why it is critical",
          hazard: "Calling it routine when it is capacity, tandem, public or shifting COG",
          risk: "Controls that belong to a grocery pick. Multiple fatalities or plant loss.",
          control: "Say it out loud. Write it. 14.42.1. If it meets the definition, it is critical.",
        },
        {
          task: "Plan and people",
          hazard: "Implied roles, missing engineer, plan left in the office",
          risk: "Nobody owns the abort. Tandem mismatch. 14.42.",
          control: "Plan at the lift. Named operator, rigger, signal, supervisor. Engineer when required.",
        },
        {
          task: "Brief",
          hazard: "Signatures without understanding",
          risk: "Crew cannot stop what they cannot name.",
          control: "Everyone repeats the plan, the signals, who stops it. If they cannot, the brief failed. Act s. 21(2)(e).",
        },
        {
          task: "Hold points",
          hazard: "Skipping a hold to keep the crane moving",
          risk: "The condition you were going to check is the one that fails.",
          control: "Holds are the control. Abort is a success. Rewrite — do not improvise.",
        },
      ],
    }
  ),
];

export function getJha(slug: string) {
  return JHAS.find((item) => item.slug === slug);
}
