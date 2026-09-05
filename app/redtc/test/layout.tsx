import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Practice papers for Fulford Level B, SkilledTradesBC Level 1 and 2, Red Seal IP, and load-chart rigging.",
};

export default function RedtcTestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
