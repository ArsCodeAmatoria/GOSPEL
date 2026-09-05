import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master Exam",
  description:
    "Closed-book 100-question simulation of the Tower Crane Operator Interprovincial exam (2023 RSOS).",
};

export default function RedtcMasterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
