"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./Logo";
import { ThemeSwitch } from "./ThemeSwitch";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="header">
        <Link href="/" aria-label="WHOOP home">
          <Wordmark />
        </Link>
        <div className="header-actions">
          <ThemeSwitch />
          <button
            className="btn btn-ghost btn-menu"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            {open ? "CLOSE" : "MENU"}
          </button>
          <Link className="btn btn-solid" href="/hire">
            HIRE A CREW
          </Link>
        </div>
      </header>
      <div
        id="site-menu"
        className={`overlay${open ? " open" : ""}`}
        hidden={!open}
        aria-hidden={!open}
      >
        <nav className="overlay-list" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>{item.num}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="overlay-foot mono">
          <span>{SITE.union}</span>
          <span>{SITE.location}</span>
          <a href={SITE.phoneHref}>{SITE.phone}</a>
          <a href={SITE.emailHref}>{SITE.email}</a>
        </div>
      </div>
    </>
  );
}
