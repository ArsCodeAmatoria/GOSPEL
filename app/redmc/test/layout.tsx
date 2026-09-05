import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Practice papers for BC Mobile Crane Operator — provisional, Level 1, Level 3, Red Seal IP, and load charts.",
};

export default function RedmcTestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
