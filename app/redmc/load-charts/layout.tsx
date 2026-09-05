import type { Metadata } from "next";
import { REDMC } from "@/lib/redmc/bank";

export const metadata: Metadata = {
  title: "Load Charts",
  description: REDMC.description,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
