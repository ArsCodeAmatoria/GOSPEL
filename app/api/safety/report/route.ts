import { NextResponse } from "next/server";

const KINDS = [
  "incident",
  "near-miss",
  "hazard",
  "damaged-rigging",
  "equipment-defect",
  "bullying-harassment",
];

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const data = body as Record<string, unknown>;
  if (!KINDS.includes(String(data.kind ?? ""))) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  for (const key of ["name", "role", "site", "when", "body"]) {
    if (!String(data[key] ?? "").trim()) {
      return NextResponse.json({ ok: false, missing: key }, { status: 400 });
    }
  }
  return NextResponse.json({ ok: true });
}
