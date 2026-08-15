import { NextResponse } from "next/server";
import { addPost, bumpLike, listPosts } from "@/lib/wire-comments-store";
import { parsePostInput } from "@/lib/wire-comments";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const hits = new Map<string, number[]>();

function limited(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= 12) return true;
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("slug")?.trim() ?? "";
  if (!slug) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const posts = await listPosts(slug);
  return NextResponse.json({ ok: true, posts });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const action =
    body && typeof body === "object"
      ? String((body as { action?: unknown }).action ?? "post")
      : "post";

  if (action === "like" || action === "unlike") {
    const id =
      body && typeof body === "object"
        ? String((body as { id?: unknown }).id ?? "")
        : "";
    if (!id) return NextResponse.json({ ok: false }, { status: 400 });
    try {
      const post = await bumpLike(id, action === "like" ? 1 : -1);
      return NextResponse.json({ ok: true, post });
    } catch {
      return NextResponse.json({ ok: false }, { status: 404 });
    }
  }

  if (limited(request)) {
    return NextResponse.json(
      { ok: false, error: "Slow down." },
      { status: 429 }
    );
  }

  const parsed = parsePostInput(body);
  if (!parsed.ok) {
    return NextResponse.json(
      { ok: false, error: parsed.error },
      { status: 400 }
    );
  }

  try {
    const post = await addPost(parsed.value);
    return NextResponse.json({ ok: true, post });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not post.";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
