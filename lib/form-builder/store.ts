import type { WhoopFormDef } from "./types";

const KEY = "whoop-form-defs-v1";

function read(): WhoopFormDef[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as WhoopFormDef[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(forms: WhoopFormDef[]) {
  localStorage.setItem(KEY, JSON.stringify(forms));
}

export function listLocalForms(): WhoopFormDef[] {
  return read();
}

export function getLocalForm(id: string) {
  return read().find((f) => f.id === id);
}

export function saveLocalForm(form: WhoopFormDef) {
  const next = read().filter((f) => f.id !== form.id);
  const stored: WhoopFormDef = { ...form, source: "local", current: false };
  next.unshift(stored);
  write(next);
  return stored;
}

export function deleteLocalForm(id: string) {
  write(read().filter((f) => f.id !== id));
}
