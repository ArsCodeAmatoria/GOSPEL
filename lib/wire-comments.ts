export const WIRE_POST_MAX = 280;

export type WirePost = {
  id: string;
  slug: string;
  parentId: string | null;
  name: string;
  handle: string;
  body: string;
  created: string;
  likes: number;
};

export function handleFromName(name: string) {
  return normalizeHandle(name.replace(/\s+/g, ""), "crew");
}

export function normalizeHandle(raw: string, fallback = "crew") {
  const cleaned = raw
    .toLowerCase()
    .replace(/^@/, "")
    .replace(/[^a-z0-9_]/g, "")
    .slice(0, 20);
  return cleaned || fallback;
}

export function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "W";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function avatarTone(handle: string) {
  let n = 0;
  for (const char of handle) n += char.charCodeAt(0);
  return n % 4;
}

export function formatPostTime(iso: string) {
  const then = new Date(iso).getTime();
  if (!Number.isFinite(then)) return "";
  const delta = Date.now() - then;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  if (delta < minute) return "NOW";
  if (delta < hour) return `${Math.floor(delta / minute)}M`;
  if (delta < day) return `${Math.floor(delta / hour)}H`;
  if (delta < 7 * day) return `${Math.floor(delta / day)}D`;
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
  })
    .format(new Date(iso))
    .toUpperCase();
}

export function parsePostInput(input: unknown) {
  if (!input || typeof input !== "object") {
    return { ok: false as const, error: "Say something." };
  }
  const data = input as Record<string, unknown>;
  const slug = String(data.slug ?? "").trim();
  const name = String(data.name ?? "").trim().slice(0, 40);
  const handle = normalizeHandle(String(data.handle ?? ""), handleFromName(name));
  const body = String(data.body ?? "").trim().slice(0, WIRE_POST_MAX);
  const parentId =
    data.parentId == null || data.parentId === ""
      ? null
      : String(data.parentId);

  if (!slug) return { ok: false as const, error: "Missing story." };
  if (name.length < 2) return { ok: false as const, error: "Name the post." };
  if (handle.length < 2) return { ok: false as const, error: "Need a handle." };
  if (!body) return { ok: false as const, error: "Say it." };

  return {
    ok: true as const,
    value: { slug, name, handle, body, parentId },
  };
}

export function threadPosts(posts: WirePost[]) {
  const byParent = new Map<string | null, WirePost[]>();
  for (const post of posts) {
    const key = post.parentId;
    const list = byParent.get(key) ?? [];
    list.push(post);
    byParent.set(key, list);
  }
  for (const list of byParent.values()) {
    list.sort((a, b) => a.created.localeCompare(b.created));
  }
  const roots = [...(byParent.get(null) ?? [])].sort((a, b) =>
    b.created.localeCompare(a.created)
  );
  return { roots, byParent };
}
