"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-gradient-to-b from-ink via-ink-2 to-ink py-20 md:py-28">
      <div className="wrap flex flex-wrap gap-16">
        <Reveal className="flex min-w-0 flex-[1_1_320px] flex-col gap-4 self-start">
          <span className="eyebrow">FAQ</span>
          <h2 className="h2">Questions, answered.</h2>
          <p className="lead">Quick answers about Mudra and how DMDR works.</p>
        </Reveal>

        <Reveal className="flex min-w-0 flex-[2_1_520px] flex-col">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-line/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left text-lg font-semibold transition hover:text-gold-ink"
                >
                  <span>{f.q}</span>
                  <span
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border border-line/15 text-gold-ink transition duration-300 ${
                      isOpen ? "rotate-45 bg-gold/10" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[640px] pb-6 leading-relaxed text-mute">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
