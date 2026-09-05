import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Load Charts",
  description:
    "Practice reading manufacturer tower crane load charts — Liebherr, Potain, WOLFF, Terex, Krøll, Pecco.",
};

export default function RedtcChartsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
