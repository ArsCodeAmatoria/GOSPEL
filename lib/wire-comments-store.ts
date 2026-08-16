import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { getArticle } from "@/lib/whoopwire";
import type { WirePost } from "@/lib/wire-comments";

const FILE = path.join(process.cwd(), "data", "wire-comments.json");

const SEED: WirePost[] = [
  {
    id: "seed-part14-1",
    slug: "what-part-14-actually-names",
    parentId: null,
    name: "N. Reid",
    handle: "loadchart",
    body: "If the section names 1998, the PDF from 2020 is not the section. Manufacturer can be stricter. The Regulation does not move because CSA reprinted.",
    created: "2026-08-15T21:05:00.000Z",
    likes: 11,
  },
  {
    id: "seed-boom-1",
    slug: "sin-the-height-cos-the-radius",
    parentId: null,
    name: "N. Reid",
    handle: "loadchart",
    body: "Booming down is not making it easier. Sin falls, cos rises, the chart gets skinny. Do the triangle before you argue with the LMI.",
    created: "2026-08-15T20:10:00.000Z",
    likes: 8,
  },
  {
    id: "seed-sin-1",
    slug: "sling-tension-is-sin",
    parentId: null,
    name: "R. Sandhu",
    handle: "rigshop",
    body: "If you cannot do the sin, you cannot claim the angle. That is the whole job.",
    created: "2026-08-15T16:12:00.000Z",
    likes: 14,
  },
  {
    id: "seed-sin-2",
    slug: "sling-tension-is-sin",
    parentId: "seed-sin-1",
    name: "T. Walsh",
    handle: "onesignal",
    body: "People still call 60 degrees from vertical 60 degrees from horizontal. Then they are surprised the sling is screaming.",
    created: "2026-08-15T16:40:00.000Z",
    likes: 9,
  },
  {
    id: "seed-sin-3",
    slug: "sling-tension-is-sin",
    parentId: null,
    name: "A. Kovacs",
    handle: "stopthelift",
    body: "Print the table. Put it in the truck. Do not make the rigger do theatre with a phone calculator in the rain.",
    created: "2026-08-15T17:05:00.000Z",
    likes: 6,
  },
  {
    id: "seed-ticket-1",
    slug: "a-ticket-isnt-competency",
    parentId: null,
    name: "N. Reid",
    handle: "loadchart",
    body: "A ticket says you sat the exam. Competency says you can read the chart on this machine, today, on this ground.",
    created: "2026-08-07T11:20:00.000Z",
    likes: 21,
  },
  {
    id: "seed-ticket-2",
    slug: "a-ticket-isnt-competency",
    parentId: "seed-ticket-1",
    name: "Sam O.",
    handle: "yardboss",
    body: "We have been sending the card and hoping. That is how you get a surprise at 06:30.",
    created: "2026-08-07T12:04:00.000Z",
    likes: 8,
  },
  {
    id: "seed-open-1",
    slug: "why-we-made-our-safety-program-public",
    parentId: null,
    name: "Priya M.",
    handle: "gatecopy",
    body: "If I have to email a coordinator to see how you expect the work done, it is not a program. It is a filing cabinet.",
    created: "2026-08-13T19:18:00.000Z",
    likes: 11,
  },
  {
    id: "seed-crew-1",
    slug: "the-difference-between-a-crew-and-a-bunch-of-people",
    parentId: null,
    name: "Chris T.",
    handle: "hooktime",
    body: "Four tickets sharing a start time is not a crew. One brief and one stop-work is a crew.",
    created: "2026-05-02T08:44:00.000Z",
    likes: 7,
  },
];

let memory: WirePost[] | null = null;
let queue: Promise<unknown> = Promise.resolve();

function enqueue<T>(work: () => Promise<T>) {
  const run = queue.then(work, work);
  queue = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

async function readAll() {
  if (memory) return memory;
  try {
    const raw = await readFile(FILE, "utf8");
    const parsed = JSON.parse(raw) as WirePost[];
    if (Array.isArray(parsed) && parsed.length) {
      memory = parsed;
      return memory;
    }
  } catch {
    /* first run */
  }
  memory = [...SEED];
  await persist(memory);
  return memory;
}

async function persist(posts: WirePost[]) {
  memory = posts;
  try {
    await mkdir(path.dirname(FILE), { recursive: true });
    await writeFile(FILE, `${JSON.stringify(posts, null, 2)}\n`);
  } catch {
    /* read-only host — keep memory */
  }
}

export function listPosts(slug: string) {
  return enqueue(async () => {
    const all = await readAll();
    return all.filter((post) => post.slug === slug);
  });
}

export function addPost(input: {
  slug: string;
  name: string;
  handle: string;
  body: string;
  parentId: string | null;
}) {
  return enqueue(async () => {
    if (!getArticle(input.slug)) {
      throw new Error("Unknown story.");
    }
    const all = await readAll();
    if (input.parentId) {
      const parent = all.find((post) => post.id === input.parentId);
      if (!parent || parent.slug !== input.slug) {
        throw new Error("Reply has no post.");
      }
    }
    const post: WirePost = {
      id: crypto.randomUUID(),
      slug: input.slug,
      parentId: input.parentId,
      name: input.name,
      handle: input.handle,
      body: input.body,
      created: new Date().toISOString(),
      likes: 0,
    };
    await persist([post, ...all]);
    return post;
  });
}

export function bumpLike(id: string, delta: 1 | -1) {
  return enqueue(async () => {
    const all = await readAll();
    const post = all.find((item) => item.id === id);
    if (!post) throw new Error("Missing post.");
    post.likes = Math.max(0, post.likes + delta);
    await persist(all);
    return post;
  });
}
