import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "WHOOP — Crane + Rigging",
    template: "%s — WHOOP",
  },
  description:
    "Reliable crane operators, riggers and lifting crews for construction and industrial work. We move heavy things. And we show you how we do it.",
  metadataBase: new URL("https://whoop.ca"),
  openGraph: {
    title: "WHOOP — Crane + Rigging",
    description:
      "Reliable crane operators, riggers and lifting crews for construction and industrial work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("whoop-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","light")}})();`,
          }}
        />
      </head>
      <body className={`${display.variable} ${sans.variable} ${mono.variable}`}>
        <div className="grain" aria-hidden />
        <Header />
        <main id="content" className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
