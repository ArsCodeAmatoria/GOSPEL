import type { Metadata } from "next";
import { REDMC } from "@/lib/redmc/bank";

export const metadata: Metadata = {
  title: "REDMC",
  description: REDMC.description,
};

export default function RedmcLayout({ children }: { children: React.ReactNode }) {
  return <div className="redtc">{children}</div>;
}
