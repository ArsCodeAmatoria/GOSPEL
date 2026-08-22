/**
 * Future AI hook. Version 1 does not call an external model.
 *
 * Contract:
 *   USER REQUEST → (later) AI → APPROVED SAFETY BLOCKS → FORM SCHEMA → builder
 *
 * The AI must only return BlockType values from BLOCK_CATALOG.
 * It must not invent 1415 policy, SWP steps, or regulatory text.
 */
import { BLOCK_CATALOG } from "./blocks";
import { assembleForm } from "./assemble";
import { nid, type BlockType, type WhoopFormDef } from "./types";

const ALLOWED = new Set(BLOCK_CATALOG.map((b) => b.type));

export function approvedBlocksOnly(types: string[]): BlockType[] {
  return types.filter((t): t is BlockType => ALLOWED.has(t as BlockType));
}

export function draftFormFromApprovedBlocks(
  title: string,
  types: BlockType[]
): WhoopFormDef {
  const safe = approvedBlocksOnly(types);
  const blocks = safe.length
    ? safe.map((type) => ({ type }))
    : ([{ type: "worker" }, { type: "project" }, { type: "signature" }] as {
        type: BlockType;
      }[]);
  return assembleForm({
    id: nid("form"),
    title,
    number: "1415-FRM-DRAFT",
    description: "Draft assembled from approved 1415 Safety Blocks only.",
    blocks,
  });
}
