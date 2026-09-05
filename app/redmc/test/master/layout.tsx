import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master exam",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
