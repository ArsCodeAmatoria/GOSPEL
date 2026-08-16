# WHOOP

**CRANE + RIGGING**

We supply the people who lift.

WHOOP is a safety company that supplies a workforce. Crane operators. Riggers. Signalpersons. Lifting crews. Vancouver, Canada. Union-friendly shop.

We are not a school. Not a rental yard. Not a consultancy. If you need a machine, call a crane company. If you need the people who can run it, brief it, and stop it when it should stop — call us.

We move heavy things. And we show you how we do it.

---

## The work

- **Crane operators** — matched to the machine, the lift and the site. Not just the ticket.
- **Riggers** — verified before they arrive. We check how they rig, not only what they hold on paper.
- **Signalpersons** — one set of signals. No guessing. No split attention.
- **Lifting crews** — operator and rigging personnel as a coordinated team. One brief. One standard. One crew that already knows how the other works.

A ticket is not competency. We verify qualifications, experience and practical competency before anyone is named. If we do not have the right person, we say so. We do not send the closest body.

## How we operate

Show up. Be competent. Work safe. Do what you said you’d do.

Reliability is not a claim. It is a sequence. If WHOOP says a crew will be there, they will be there. If something changes, you hear it from us first.

Customers know exactly what they are getting: role, competency, tickets, experience and our expectations — in writing. Workers are treated as tradespeople, not units. They get briefed, paid correctly, and backed when they refuse unsafe work.

We are a union-friendly shop. We work with union members and respect the agreements on the site. That is how this work gets done.

## Safety is public

The [Safety Program](https://whoop.ca/safety) is open. Clients, workers and contractors can read how we expect the work to be performed before they hire us. No portal. No request form. No expiry date.

If a procedure cannot be followed on a jobsite, it is not a procedure. It is theatre.

The program is a working document system, not a poster:

- **OH&S policies** — including competency, refuse unsafe work, crane operations, rigging, and [bullying and harassment](https://whoop.ca/safety/policy/bullying-and-harassment) (WorkSafeBC P2-21-2).
- **SWP library** — numbered steps for the lift.
- **JHA library** — hazards, consequence, residual risk. The steps live in the SWP.
- **Safety forms** — FLHA, inspections, lift plans, incident reports, operator and rigger logs, weekly and monthly maintenance.
- **[Form Builder](https://whoop.ca/safety/builder)** — assemble WHOOP forms from reusable Safety Blocks. Fill them on the device. Download a PDF. Email it. Nothing is stored on a server unless you send it.

WHOOP is COR® Certified through the BC Construction Safety Alliance. That certification is of our occupational health and safety management system — not a claim that incidents will never occur.

The work is done to:

- CSA Z150-1998 / Z248-2004 as named in the Regulation
- WorkSafeBC Occupational Health and Safety Regulation, including Part 14 and Part 15
- BC Crane Safety
- Technical Safety BC
- ASME B30 as named (B30.5-2004, B30.22-2005)
- Manufacturer requirements — load charts, manuals, configuration limits
- Site policies — where they are stricter, they win

Where those conflict, the stricter applicable requirement wins. Law always wins.

## WHOOPWIRE

[WHOOPWIRE](https://whoop.ca/whoopwire) is the company paper. Standards, the lift, and how the work is actually done. Not marketing copy.

## Hire a crew

Tell us the work, the site, the machines and the dates. We will tell you who is coming — and whether we can do it. If we cannot, you will hear that first.

**Phone** [1 604 431 2000](tel:+16044312000)  
**Email** [hire@whoopp.ca](mailto:hire@whoopp.ca)  
**Vancouver, Canada**

No bullshit. Just good people doing heavy work.

---

## This site

Next.js (App Router) and TypeScript. No database in this version. Form definitions live as TypeScript. Completed forms stay on the device until someone downloads or emails a PDF.

```bash
npm install
npm run dev
```

Optional server env:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Send completed-form PDFs. Without it, the PDF downloads instead. |
| `WHOOP_FORM_FROM` | From address for those emails. |
| `MAPBOX_ACCESS_TOKEN` | Tighter Canadian address lookup. Without it, OpenStreetMap is used. |

Do not put those keys in client code.
