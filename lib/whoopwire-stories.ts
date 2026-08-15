import type { WireArticle } from "@/lib/whoopwire";

/**
 * WHOOPWIRE stories.
 *
 * To publish a story: copy an object in this array, give it a unique slug,
 * and set featured: true on at most one story. Optional fields: updated,
 * image, imageAlt. Related slugs must exist. Safety slugs map to /safety/[slug].
 */
export const ARTICLES: WireArticle[] = [
  {
    slug: "sling-tension-is-sin",
    title: "IF YOU CAN'T USE SIN(), DON'T RIG THE ANGLE.",
    titleLines: ["IF YOU CAN'T", "USE SIN(),", "DON'T RIG", "THE ANGLE."],
    category: "RIGGING",
    excerpt:
      "Sling tension is not a feeling. For a two-leg bridle, T = W / (2 × sin θ). If you cannot do that, you cannot claim the angle is safe.",
    author: "WHOOP",
    published: "2026-08-15",
    seoTitle: "Sling Tension Is Sin() — Rigging Math",
    seoDescription:
      "How to use sine for two-leg sling tension. T = W / (2 × sin θ), worked numbers, and why 30° from horizontal doubles the load in each leg.",
    related: [
      "six-things-to-check-before-you-take-the-load",
      "what-a-good-rigger-actually-looks-like",
      "a-ticket-isnt-competency",
    ],
    safety: ["rigging", "safe-work-procedures"],
    blocks: [
      {
        type: "p",
        text: "A rigger who cannot use sin() will still set an angle. The sling will still do the math. The hardware will still see the tension. The only person not in the equation is the one who was supposed to check it.",
      },
      {
        type: "p",
        text: "This is the two-leg bridle. Equal legs. Centre of gravity in the middle. Load hanging plumb. If those are not true, stop and get a different method — or an engineer.",
      },
      {
        type: "diagram",
        name: "sling-sin",
      },
      {
        type: "h",
        text: "WHAT θ IS",
      },
      {
        type: "p",
        text: "θ is the sling angle: the angle between the sling and the horizontal. ASME talks about it that way. WHOOP talks about it that way. It is not the angle between the two legs at the hook. Mix those up and your number is for a different lift than the one in front of you.",
      },
      {
        type: "p",
        text: "When the bridle flattens, θ gets smaller. sin(θ) gets smaller. Tension goes up. The load did not get heavier. The angle did.",
      },
      {
        type: "quote",
        text: "The sling is doing sin() whether you are or not.",
      },
      {
        type: "h",
        text: "THE FORMULA",
      },
      {
        type: "p",
        text: "Each leg holds half the weight vertically. That vertical share is T × sin(θ). Solve for tension along the sling:",
      },
      {
        type: "formula",
        expr: "T = W / (2 × SIN θ)",
        note: "Two equal legs. θ from the horizontal. T and W in the same units.",
      },
      {
        type: "p",
        text: "Same thing written as a factor on the load share: T = (W / 2) × (1 / sin θ). The factor is 1 / sin(θ). At 90° it is 1. At 30° it is 2.",
      },
      {
        type: "p",
        text: "If someone gave you the angle from vertical instead, use cosine of that angle. It is the same triangle: cos(from vertical) = sin(from horizontal). Do not use both and average them.",
      },
      {
        type: "h",
        text: "WORKED LIFT — 4000 kg",
      },
      {
        type: "p",
        text: "On site we compare kilograms of tension to a WLL in kilograms. The sine does not care. Keep W and T in the same unit.",
      },
      {
        type: "steps",
        items: [
          {
            n: "01",
            title: "60°    SIN 60° = 0.866",
            body: "T = 4000 / (2 × 0.866) = 2309 kg per leg. About 15% more than a straight vertical share. This is a working bridle.",
          },
          {
            n: "02",
            title: "45°    SIN 45° = 0.707",
            body: "T = 4000 / (2 × 0.707) = 2829 kg per leg. The load is still 4000. Each sling is already carrying 2829.",
          },
          {
            n: "03",
            title: "30°    SIN 30° = 0.500",
            body: "T = 4000 / (2 × 0.500) = 4000 kg per leg. Each sling sees the whole load. That is what 'it doubled' means in the Safety Program.",
          },
        ],
      },
      {
        type: "p",
        text: "If those 4000 kg slings were picked because 'half the load is 2000,' they were already over at 30°. The ticket on the sling did not change. The angle did.",
      },
      {
        type: "h",
        text: "THE TABLE YOU SHOULD KNOW COLD",
      },
      {
        type: "table",
        caption: "Two-leg bridle. Tension factor = 1 / sin(θ). Multiply by W/2.",
        columns: ["θ FROM HORIZONTAL", "SIN θ", "FACTOR", "T IF W = 4000"],
        rows: [
          ["90°", "1.000", "1.00", "2000"],
          ["60°", "0.866", "1.15", "2309"],
          ["45°", "0.707", "1.41", "2829"],
          ["30°", "0.500", "2.00", "4000"],
        ],
      },
      {
        type: "p",
        text: "Below 30° we do not rig that way unless an engineer owns the numbers. sin(20°) is 0.342. The factor is 2.92. You are no longer 'spreading the slings a bit.' You are multiplying the load.",
      },
      {
        type: "h",
        text: "USE IT",
      },
      {
        type: "p",
        text: "Phone calculator. Degree mode. sin(). Then divide. If your calculator is in radians you will get a number that looks official and is wrong. Check: sin(30) must be 0.5. If it is not, you are in the wrong mode.",
      },
      {
        type: "calc",
        name: "sling-sin",
      },
      {
        type: "h",
        text: "WHAT THIS FORMULA DOES NOT DO",
      },
      {
        type: "list",
        items: [
          "It does not split a 3-leg or 4-leg bridle into three or four equal shares. If the load can tilt, design as if two legs are carrying.",
          "It does not fix an unknown weight. Garbage W in, garbage T out.",
          "It does not replace a load chart, a sling WLL, or a hitch factor (choker, basket).",
          "It does not make a flattened bridle acceptable because the crane still has capacity.",
        ],
      },
      {
        type: "quote",
        text: "If you cannot explain the angle, you cannot use the angle.",
      },
      {
        type: "p",
        text: "That line is already in the WHOOP Safety Program. This is what it means in numbers. Measure θ from the horizontal. Run sin(). Compare T to the WLL of the sling and the hardware. If it does not fit, change the hitch — do not hope the steel is in a generous mood.",
      },
      {
        type: "cta",
        href: "/safety/rigging",
        label: "06 — RIGGING →",
      },
      {
        type: "cta",
        href: "/safety",
        label: "READ THE WHOOP SAFETY PROGRAM →",
      },
    ],
  },
  {
    slug: "a-ticket-isnt-competency",
    title: "A TICKET ISN'T COMPETENCY.",
    titleLines: ["A TICKET", "ISN'T", "COMPETENCY."],
    category: "RIGGING",
    excerpt:
      "A qualification tells you what someone has been trained to do. Competency tells you whether they can actually do it.",
    author: "WHOOP",
    published: "2026-08-06",
    featured: true,
    seoTitle: "A Ticket Isn't Competency",
    seoDescription:
      "A crane or rigging ticket is a starting point. Competency is whether the person can do this lift, on this site, today.",
    related: [
      "sling-tension-is-sin",
      "what-a-good-rigger-actually-looks-like",
      "the-difference-between-a-crew-and-a-bunch-of-people",
    ],
    safety: ["training-competency", "rigging"],
    blocks: [
      {
        type: "p",
        text: "A ticket is not a personality. It is not a guarantee. It is a record that someone sat a course, passed an exam, or holds a trade credential. That matters. It is also the beginning of the conversation, not the end of it.",
      },
      {
        type: "p",
        text: "On a lift, nobody is asking whether the rigger once passed a written test. They are asking whether this person can look at this load, this hardware, this crane and this exclusion zone — and make a decision that holds.",
      },
      {
        type: "quote",
        text: "A ticket tells you what someone has been trained to do. Competency tells you whether they can actually do it.",
      },
      {
        type: "h",
        text: "WHAT A TICKET IS FOR",
      },
      {
        type: "p",
        text: "Tickets keep people who have never been trained off the hook. They give a client, a prime contractor and a supervisor a first filter. WHOOP will not dispatch a rigger without the paper that the work requires. That is the floor.",
      },
      {
        type: "p",
        text: "The mistake is treating the floor as the building. Two people can hold the same ticket and not be interchangeable. One has spent years on steel and knows when a sling is lying to you. The other passed the course last spring and has not yet been in a bad setup.",
      },
      {
        type: "h",
        text: "WHAT COMPETENCY LOOKS LIKE",
      },
      {
        type: "p",
        text: "Competency is specific. It is this machine class, this kind of load, this site condition. A person can be competent on a mobile crane and not ready for a tower. They can be a good rigger on precast and lost on a pick that needs engineered lifting points.",
      },
      {
        type: "list",
        items: [
          "They ask for the weight before they touch the gear.",
          "They inspect hardware as if they own the consequence.",
          "They will say no when the information is missing.",
          "They can explain the rigging in a sentence a supervisor can check.",
          "They do not fill silence with guessing.",
        ],
      },
      {
        type: "p",
        text: "None of that is printed on a ticket. You find it by asking what they have actually done, by watching how they set up, and by putting them with people who will not cover for a bad lift.",
      },
      {
        type: "h",
        text: "HOW WHOOP TREATS THIS",
      },
      {
        type: "p",
        text: "We verify qualifications first. Then we verify experience against the work. Then we brief. If we cannot stand behind the person for this dispatch, we do not send them. A client who wants a name and a photocopy of a ticket is asking for the cheapest version of the job. We will not pretend that is the same product.",
      },
      {
        type: "p",
        text: "If you are hiring a crew, ask what was checked besides the ticket. If the answer is nothing, you are not hiring competency. You are hiring paper.",
      },
      {
        type: "cta",
        href: "/safety/training-competency",
        label: "11 — TRAINING + COMPETENCY →",
      },
      {
        type: "cta",
        href: "/safety",
        label: "READ THE WHOOP SAFETY PROGRAM →",
      },
    ],
  },
  {
    slug: "why-we-made-our-safety-program-public",
    title: "WHY WE MADE OUR SAFETY PROGRAM PUBLIC.",
    titleLines: ["WHY WE MADE", "OUR SAFETY", "PROGRAM PUBLIC."],
    category: "SAFETY",
    excerpt:
      "If people have to ask permission to see how you expect the work to be done, you do not have a safety program. You have a filing cabinet.",
    author: "WHOOP",
    published: "2026-08-13",
    seoTitle: "Why We Made Our Safety Program Public",
    seoDescription:
      "WHOOP's safety program is public. No portal, no request form, no expiring link. Here is why.",
    related: [
      "when-a-swp-isnt-really-a-swp",
      "why-documentation-should-be-easy-to-find",
    ],
    safety: ["company-safety-policy", "safe-work-procedures"],
    blocks: [
      {
        type: "p",
        text: "Most company safety programs live in a PDF on a shared drive, a binder in a trailer, or a portal that expires in seven days. The people who need them most — the operator on nights, the rigger who just got dispatched, the client deciding whether to hire you — cannot read them when it counts.",
      },
      {
        type: "p",
        text: "WHOOP put the program on the website. Not a summary. The program. If you cannot work that way, do not hire us.",
      },
      {
        type: "quote",
        text: "We don't believe safety should be hidden behind a login or an expiring link.",
      },
      {
        type: "h",
        text: "THE USUAL EXCUSES",
      },
      {
        type: "p",
        text: "People say the program is proprietary. It is not. The physics of a lift is not a trade secret. People say workers will steal procedures. Good. If another crew uses a better method because they read ours, the site is safer. People say lawyers want it locked down. Lawyers do not rig the load.",
      },
      {
        type: "p",
        text: "A public program also has a cost: you have to mean it. You cannot publish a procedure and then dispatch people who have never seen it. You cannot write a right to refuse and then punish the person who uses it. Publication is a commitment, not a marketing page.",
      },
      {
        type: "h",
        text: "WHO IT IS FOR",
      },
      {
        type: "list",
        items: [
          "Workers, before they accept a dispatch.",
          "Clients, before they hire us.",
          "Supervisors, on the day, on a phone, at the gate.",
          "Contractors who want to know what WHOOP will and will not do.",
        ],
      },
      {
        type: "p",
        text: "COR certification is a separate layer. It is an independent look at whether we maintain an occupational health and safety management system. It is not a substitute for letting people read the actual rules of the work.",
      },
      {
        type: "p",
        text: "If your safety program cannot survive being read by a stranger, it was not written for the people doing the lift.",
      },
      {
        type: "cta",
        href: "/safety",
        label: "READ THE WHOOP SAFETY PROGRAM →",
      },
      {
        type: "cta",
        href: "/#cor",
        label: "COR CERTIFIED →",
      },
    ],
  },
  {
    slug: "what-a-good-rigger-actually-looks-like",
    title: "WHAT A GOOD RIGGER ACTUALLY LOOKS LIKE.",
    titleLines: ["WHAT A GOOD", "RIGGER ACTUALLY", "LOOKS LIKE."],
    category: "RIGGING",
    excerpt:
      "It is not the loudest person on the steel. It is the one who finds the centre of gravity before anyone finds the radio.",
    author: "WHOOP",
    published: "2026-05-20",
    seoTitle: "What a Good Rigger Actually Looks Like",
    seoDescription:
      "How to tell a competent rigger from someone who only holds the ticket. What to watch before the hook is loaded.",
    related: [
      "sling-tension-is-sin",
      "a-ticket-isnt-competency",
      "six-things-to-check-before-you-take-the-load",
    ],
    safety: ["rigging", "training-competency"],
    blocks: [
      {
        type: "p",
        text: "A good rigger is often quiet at the wrong time for people who confuse confidence with competence. They are looking at the load. They are looking at the hardware. They are not performing for the pickup truck.",
      },
      {
        type: "p",
        text: "You can see it in the first five minutes. They want the weight, the drawings if they exist, and a walk around the piece. They do not grab the first sling that looks long enough.",
      },
      {
        type: "quote",
        text: "The gear is the truth. The guess is the hazard.",
      },
      {
        type: "h",
        text: "THINGS THEY DO WITHOUT BEING ASKED",
      },
      {
        type: "list",
        items: [
          "Inspect slings, shackles and hooks as if the last person might have missed a cut.",
          "Protect gear from sharp edges instead of hoping the wrap holds.",
          "Set hardware so it sits straight under load.",
          "Keep people out of the fall line before the test lift, not after someone gets nervous.",
          "Stop the job when the information is incomplete.",
        ],
      },
      {
        type: "h",
        text: "THINGS THEY DO NOT DO",
      },
      {
        type: "p",
        text: "They do not choke a sling off a guess. They do not stand under the load to 'keep an eye on it.' They do not tell the operator to take it because the superintendent is watching. They do not treat a signalperson as optional because the lift is small.",
      },
      {
        type: "p",
        text: "If you are hiring, watch the setup. If you are dispatching, ask what they would refuse. A rigger who cannot name a refusal has not been in enough real work — or has been in the wrong rooms.",
      },
      {
        type: "cta",
        href: "/safety/rigging",
        label: "06 — RIGGING →",
      },
    ],
  },
  {
    slug: "the-lift-looked-simple-it-wasnt",
    title: "THE LIFT LOOKED SIMPLE. IT WASN'T.",
    titleLines: ["THE LIFT LOOKED", "SIMPLE.", "IT WASN'T."],
    category: "CRANES",
    excerpt:
      "The lifts that go badly are often the ones nobody bothered to treat as a lift. Small, familiar, 'we've done this.'",
    author: "WHOOP",
    published: "2026-06-25",
    seoTitle: "The Lift Looked Simple. It Wasn't.",
    seoDescription:
      "Simple-looking crane lifts fail when people skip the plan. Weight, radius, wind and the path still count on a familiar pick.",
    related: [
      "six-things-to-check-before-you-take-the-load",
      "what-your-crane-crew-should-know-before-they-arrive",
    ],
    safety: ["crane-operations", "hazard-assessment"],
    blocks: [
      {
        type: "p",
        text: "A lot of bad lifts start with the same sentence: it should only take a minute. A pump. A panel. A piece that has been sitting there all week. Nobody writes a plan because the plan is assumed to be obvious.",
      },
      {
        type: "p",
        text: "Then the radius is longer than memory. The load is heavier than the last one that looked like it. The wind picked up. The tag line is in the wrong hands. The path over the work deck was never walked.",
      },
      {
        type: "quote",
        text: "Familiar is not the same as known.",
      },
      {
        type: "h",
        text: "WHAT 'SIMPLE' HIDES",
      },
      {
        type: "p",
        text: "Simple is a feeling. A lift is numbers and a path. If you cannot say the weight, the radius, the capacity at that radius, and where people will not stand, you do not have a simple lift. You have an unexamined one.",
      },
      {
        type: "p",
        text: "Operators get put in this position constantly. The site wants movement. The last pick went fine. The chart is in the cab and nobody wants to hear about it. A competent operator will still open the chart. That is not fussiness. That is the job.",
      },
      {
        type: "h",
        text: "THE RULE WE USE",
      },
      {
        type: "p",
        text: "If it hangs from a crane, it is a lift. It gets a weight, a plan, a path and an exclusion zone. The paperwork can be short. The thinking cannot be skipped. A two-minute brief is cheaper than a two-week investigation.",
      },
      {
        type: "p",
        text: "When a client tells us a lift is simple, we treat that as a request for speed, not a fact about the load. We will still ask the questions. If that bothers you, you want a different kind of crew.",
      },
      {
        type: "cta",
        href: "/safety/crane-operations",
        label: "07 — CRANE OPERATIONS →",
      },
    ],
  },
  {
    slug: "six-things-to-check-before-you-take-the-load",
    title: "SIX THINGS TO CHECK BEFORE YOU TAKE THE LOAD.",
    titleLines: ["SIX THINGS TO CHECK", "BEFORE YOU", "TAKE THE LOAD."],
    category: "SAFETY",
    excerpt:
      "Not a poster. Six things that, if they are wrong, the hook should not leave the ground.",
    author: "WHOOP",
    published: "2026-07-08",
    seoTitle: "Six Things to Check Before You Take the Load",
    seoDescription:
      "A usable checklist before a crane takes the load: weight, gear, connection, people, test lift, communication.",
    related: [
      "sling-tension-is-sin",
      "the-lift-looked-simple-it-wasnt",
      "when-a-swp-isnt-really-a-swp",
    ],
    safety: ["safe-work-procedures", "rigging"],
    blocks: [
      {
        type: "p",
        text: "Checklists die when they are written for an audit instead of a hook. This one is short on purpose. If you cannot do these six things, do not take the load.",
      },
      {
        type: "steps",
        items: [
          {
            n: "01",
            title: "KNOW THE WEIGHT",
            body: "Confirm load weight, centre of gravity and lifting points. If any of those are unknown, do not rig. Guessing the weight is not planning.",
          },
          {
            n: "02",
            title: "INSPECT THE GEAR",
            body: "Slings, shackles, hooks and hardware. Cuts, birdcaging, bent pins, missing latches — out of service. No 'one more lift.'",
          },
          {
            n: "03",
            title: "CONNECT IT PROPERLY",
            body: "Hardware sits straight. Slings are protected from sharp edges. Nothing is twisted, knotted or choked off a guess.",
          },
          {
            n: "04",
            title: "CLEAR THE AREA",
            body: "Exclusion zone set. Fall line empty. Tag lines where they can actually control the piece. Nobody walking through for a better view.",
          },
          {
            n: "05",
            title: "TEST THE LIFT",
            body: "Take it just clear of the ground. Check balance, brakes, and whether the rigging is doing what you thought. If it tilts, lands or shocks — lower it and re-rig.",
          },
          {
            n: "06",
            title: "KEEP THE SIGNAL",
            body: "One signalperson. One operator. Radios or hand signals agreed. If the signal is lost, the lift stops. No interpreting silence.",
          },
        ],
      },
      {
        type: "quote",
        text: "If a procedure cannot be followed on a jobsite, it is not a procedure.",
      },
      {
        type: "p",
        text: "Print this if you want it in a pocket. Better: read the full sequence in the Safety Program and use it the way the work actually happens.",
      },
      {
        type: "cta",
        href: "/safety/safe-work-procedures",
        label: "04 — SAFE WORK PROCEDURES →",
      },
      {
        type: "cta",
        href: "/safety",
        label: "READ THE WHOOP SAFETY PROGRAM →",
      },
    ],
  },
  {
    slug: "when-a-swp-isnt-really-a-swp",
    title: "WHEN A SWP ISN'T REALLY A SWP.",
    titleLines: ["WHEN A SWP", "ISN'T REALLY", "A SWP."],
    category: "SAFETY",
    excerpt:
      "A safe work procedure that cannot be used on the day is theatre. It exists to be shown, not followed.",
    author: "WHOOP",
    published: "2026-06-10",
    seoTitle: "When a SWP Isn't Really a SWP",
    seoDescription:
      "If a safe work procedure cannot be followed on a jobsite, it is not a procedure. How to tell a usable SWP from paperwork.",
    related: [
      "why-we-made-our-safety-program-public",
      "six-things-to-check-before-you-take-the-load",
    ],
    safety: ["safe-work-procedures", "safe-job-procedures"],
    blocks: [
      {
        type: "p",
        text: "You can tell a fake SWP by how it reads. It is long. It is written in the voice of a binder. It tells you to 'ensure all applicable regulations are followed' and then never says who does what when the load is on the hook.",
      },
      {
        type: "p",
        text: "A real SWP is a sequence. Plan. Inspect. Connect. Clear. Test. Lift. Someone can follow it with gloves on. Someone can argue with a step because the step is specific enough to be wrong.",
      },
      {
        type: "quote",
        text: "If a procedure cannot be followed on a jobsite, it is not a procedure. It is theatre.",
      },
      {
        type: "h",
        text: "SIGNS YOU ARE LOOKING AT THEATRE",
      },
      {
        type: "list",
        items: [
          "It could apply to any trade in any province with the names swapped.",
          "The only verb is 'ensure.'",
          "There is no order of operations.",
          "Nobody on the crew has ever opened it except at orientation.",
          "It lives in a portal. The lift lives in the dirt.",
        ],
      },
      {
        type: "h",
        text: "WHAT WE WRITE INSTEAD",
      },
      {
        type: "p",
        text: "WHOOP procedures are public and short enough to use. A site-specific job procedure still has to be written for this lift, this day. The SWP is the method. The SJP is the instance. If the instance contradicts the method, stop and fix one of them before the hook moves.",
      },
      {
        type: "p",
        text: "If your SWP cannot survive a rigger reading it out loud, rewrite it. Do not add a cover page.",
      },
      {
        type: "cta",
        href: "/safety/safe-work-procedures",
        label: "04 — SAFE WORK PROCEDURES →",
      },
    ],
  },
  {
    slug: "why-documentation-should-be-easy-to-find",
    title: "WHY DOCUMENTATION SHOULD BE EASY TO FIND.",
    titleLines: ["WHY DOCUMENTATION", "SHOULD BE", "EASY TO FIND."],
    category: "INDUSTRY",
    excerpt:
      "A procedure nobody can find at 6:40 a.m. does not exist. Access is part of the control.",
    author: "WHOOP",
    published: "2026-04-08",
    seoTitle: "Why Documentation Should Be Easy to Find",
    seoDescription:
      "Safety documentation that hides behind logins and shared drives does not get used. Access is part of doing the work.",
    related: [
      "why-we-made-our-safety-program-public",
      "when-a-swp-isnt-really-a-swp",
    ],
    safety: ["company-safety-policy"],
    blocks: [
      {
        type: "p",
        text: "The industry is good at writing documents and bad at putting them where work happens. The lift is on a slab. The procedure is behind a password, a request form, or a person who is not on shift.",
      },
      {
        type: "p",
        text: "Then we act surprised when people improvise. They did not ignore the system. They could not reach it.",
      },
      {
        type: "quote",
        text: "If you cannot find it on a phone at the gate, you do not have a program. You have an archive.",
      },
      {
        type: "h",
        text: "WHAT EASY MEANS",
      },
      {
        type: "p",
        text: "Easy is not 'available on request.' Easy is a URL that does not expire. Easy is a section you can open without an account. Easy is type large enough to read in sun. Easy is a procedure that starts at the first real action, not a page of definitions.",
      },
      {
        type: "p",
        text: "This is not a technology problem. It is a willingness problem. Companies hide documents because they are embarrassed by them, because they change every month and nobody wants the old one circulating, or because they were written for a certificate wall. None of those reasons help the person on the hook.",
      },
      {
        type: "p",
        text: "WHOOP's answer is blunt. The Safety Program is public. COR is stated in public. If a document matters to the work, it should survive daylight.",
      },
      {
        type: "cta",
        href: "/safety",
        label: "READ THE WHOOP SAFETY PROGRAM →",
      },
    ],
  },
  {
    slug: "the-difference-between-a-crew-and-a-bunch-of-people",
    title: "THE DIFFERENCE BETWEEN A CREW AND A BUNCH OF PEOPLE.",
    titleLines: ["THE DIFFERENCE", "BETWEEN A CREW", "AND A BUNCH OF PEOPLE."],
    category: "PEOPLE",
    excerpt:
      "A crew shares a brief, a standard and a way of stopping the work. A bunch of people share a start time.",
    author: "WHOOP",
    published: "2026-04-29",
    seoTitle: "The Difference Between a Crew and a Bunch of People",
    seoDescription:
      "A lifting crew is not four tickets on a site. It is a brief, a standard, and people who already know how the others work.",
    related: [
      "what-your-crane-crew-should-know-before-they-arrive",
      "a-ticket-isnt-competency",
    ],
    safety: ["responsibilities", "training-competency"],
    blocks: [
      {
        type: "p",
        text: "You can put an operator, a rigger, a signalperson and a supervisor on the same dirt and still not have a crew. You have a collection of tickets. The lift will expose the difference.",
      },
      {
        type: "p",
        text: "A crew has already agreed how they talk. Who signals. When they stop. What 'ready' means. A bunch of people will negotiate that while the load is in the air, or worse, they will each assume the other already did.",
      },
      {
        type: "quote",
        text: "One brief. One standard. One crew that already knows how the other works.",
      },
      {
        type: "h",
        text: "WHAT A CREW SHARES",
      },
      {
        type: "list",
        items: [
          "The plan for this lift, not a vibe about being careful.",
          "The same exclusion zone. Not four personal versions of it.",
          "Permission to stop the work without a speech.",
          "Names. Not 'the operator' and 'the new guy.'",
        ],
      },
      {
        type: "p",
        text: "WHOOP supplies people as a coordinated team when the work needs it. That costs more than sending whoever is free. It also means the operator is not meeting the rigger for the first time under a load that 'should only take a minute.'",
      },
      {
        type: "p",
        text: "If you are buying labour by the headcount, say that. If you are buying a lift that has to go right, buy a crew.",
      },
      {
        type: "cta",
        href: "/crew",
        label: "THE CREW →",
      },
    ],
  },
  {
    slug: "what-your-crane-crew-should-know-before-they-arrive",
    title: "WHAT YOUR CRANE CREW SHOULD KNOW BEFORE THEY ARRIVE.",
    titleLines: ["WHAT YOUR CRANE CREW", "SHOULD KNOW", "BEFORE THEY ARRIVE."],
    category: "CRANES",
    excerpt:
      "If the first time they see the machine, the load and the site is when they park, you have already spent the briefing.",
    author: "WHOOP",
    published: "2026-08-04",
    seoTitle: "What Your Crane Crew Should Know Before They Arrive",
    seoDescription:
      "Brief a crane crew before they arrive: machine, load, site, signals, exclusions, and what will stop the lift.",
    related: [
      "the-difference-between-a-crew-and-a-bunch-of-people",
      "the-lift-looked-simple-it-wasnt",
    ],
    safety: ["hazard-assessment", "crane-operations"],
    blocks: [
      {
        type: "p",
        text: "A dispatch that says 'crane and rigger, Tuesday, downtown' is not a brief. It is a calendar entry. The crew will invent the rest on site, and you will not like some of the inventions.",
      },
      {
        type: "p",
        text: "WHOOP will not guess what you need. Before anyone is named, we want the work, the site, the machines and the dates. Before they arrive, the worker gets the hazards and the procedure. You get the name, the tickets and the plan.",
      },
      {
        type: "h",
        text: "SEND THIS BEFORE THE GATE",
      },
      {
        type: "list",
        items: [
          "Machine: make, model, configuration, and who owns it.",
          "Load: weight, dimensions, lifting points, and whether any of that is still a guess.",
          "Site: access, ground, overhead, public interface, other trades.",
          "Signals: radio or hand, who has the right to stop.",
          "Hours, PPE, site rules, and the person who actually owns the lift.",
        ],
      },
      {
        type: "quote",
        text: "If we cannot tell you who is coming and what they are walking into, we are not ready to send them.",
      },
      {
        type: "p",
        text: "A good crew will still walk the lift when they arrive. The brief does not replace eyes. It means they are not using the walk to discover that the crane is a different class, the load is double, or the pick is over a live sidewalk.",
      },
      {
        type: "p",
        text: "If you want people at 7:00, send the facts the day before. If the facts change at 6:15, say so. Silence is not a plan.",
      },
      {
        type: "cta",
        href: "/hire",
        label: "HIRE A CREW →",
      },
      {
        type: "cta",
        href: "/safety/hazard-assessment",
        label: "03 — HAZARD ASSESSMENT →",
      },
    ],
  },
];
