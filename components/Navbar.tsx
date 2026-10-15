"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { APP_URL, navLinks } from "@/lib/content";

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <span className="flex items-center gap-2 sm:gap-3">
      <Image
        src="/Mudralogo2.png"
        alt="Mudra logo"
        width={120}
        height={120}
        priority
        className={`w-auto object-contain ${
          small ? "h-[36px] sm:h-[42px]" : "h-[42px] sm:h-[52px]"
        }`}
      />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-line/10 bg-ink/75 backdrop-blur-lg">
      <div className="wrap flex h-[64px] items-center justify-between gap-3 px-4 sm:h-[72px] sm:gap-6 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" aria-label="Mudra home" className="shrink-0">
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-fg/75 transition hover:text-gold-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <a
            className="btn btn-gold !min-h-[40px] !px-4 !text-[14px] hidden sm:inline-flex sm:!min-h-[44px] sm:!px-6 sm:!text-[15px]"
            href={APP_URL}
          >
            Get started
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line/15 lg:hidden sm:h-11 sm:w-11"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="wrap flex flex-col gap-1 pb-4 lg:hidden bg-ink/95 backdrop-blur-lg"
          aria-label="Mobile"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-fg/75 hover:bg-line/5"
            >
              {l.label}
            </a>
          ))}

          <a
            href={APP_URL}
            onClick={() => setOpen(false)}
            className="btn btn-gold mt-2 !min-h-[44px] !text-[15px] sm:hidden"
          >
            Get started
          </a>
        </nav>
      )}
    </header>
  );
}