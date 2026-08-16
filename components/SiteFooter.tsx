"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";

export function SiteFooter() {
  const path = usePathname();
  if (path === "/safety" || path.startsWith("/safety/")) return null;
  return <Footer />;
}
