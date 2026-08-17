import type { BinderKind, BinderRole } from "./binders";

export type ItemStatus = "" | "have" | "need" | "na";

export type BinderItemState = {
  status: ItemStatus;
  who: BinderRole | "";
  note: string;
};

export type BinderDraft = {
  kind: BinderKind;
  site: string;
  address: string;
  contractor: string;
  supervisor: string;
  make: string;
  model: string;
  serial: string;
  meeting: string;
  items: Record<string, BinderItemState>;
};

const KEY = "whoop-binder-v1";

function readAll(): Record<string, BinderDraft> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, BinderDraft>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeAll(all: Record<string, BinderDraft>) {
  localStorage.setItem(KEY, JSON.stringify(all));
}

export function emptyDraft(kind: BinderKind): BinderDraft {
  return {
    kind,
    site: "",
    address: "",
    contractor: "",
    supervisor: "",
    make: "",
    model: "",
    serial: "",
    meeting: "",
    items: {},
  };
}

export function loadBinderDraft(kind: BinderKind): BinderDraft {
  const all = readAll();
  const existing = all[kind];
  if (!existing || existing.kind !== kind) return emptyDraft(kind);
  return { ...emptyDraft(kind), ...existing, kind };
}

export function saveBinderDraft(draft: BinderDraft) {
  const all = readAll();
  all[draft.kind] = draft;
  writeAll(all);
  return draft;
}

export function itemState(
  draft: BinderDraft,
  id: string,
): BinderItemState {
  return draft.items[id] ?? { status: "", who: "", note: "" };
}
