import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const required = [
    "company",
    "contact",
    "phone",
    "email",
    "project",
    "location",
    "personnel",
    "workers",
    "start",
    "duration",
  ];

  for (const key of required) {
    if (!String((body as Record<string, unknown>)[key] ?? "").trim()) {
      return NextResponse.json({ ok: false, missing: key }, { status: 400 });
    }
  }

  return NextResponse.json({ ok: true });
}
