import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Review",
  description: "Browse the REDTC question bank with answers, sources and exam tags.",
};

export default function RedtcReviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
