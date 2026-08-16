import type { ReactNode } from "react";
import { SafetyNav } from "@/components/SafetyNav";

export default function SafetyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="doc">
      <SafetyNav />
      {children}
    </div>
  );
}
