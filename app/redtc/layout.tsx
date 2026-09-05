import type { Metadata } from "next";
import { REDTC } from "@/lib/redtc/bank";

export const metadata: Metadata = {
  title: "REDTC",
  description: REDTC.description,
};

export default function RedtcLayout({ children }: { children: React.ReactNode }) {
  return <div className="redtc">{children}</div>;
}
