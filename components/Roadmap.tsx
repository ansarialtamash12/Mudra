"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { phases } from "@/lib/content";

const phaseIcons = ["transfer", "star", "card", "shield"] as const;

/**
 * Scroll-driven roadmap.
 * - A gold line fills down the timeline as you scroll.
 * - Each phase node lights up (with a ping) when the line reaches it.
 * - Cards slide in from alternating sides and their bullets stagger in.
 */
export default function Roadmap() {
  const listRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [progress, setProgress] = useState(0); // 0..1 along the line
  const [reached, setReached] = useState(-1); // index of last lit phase
  const [still, setStill] = useState(false); // reduced motion: show everything

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      setProgress(1);
      setReached(phases.length - 1);
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const list = listRef.current;
      if (!list) return;
      const vh = window.innerHeight;
      const rect = list.getBoundingClientRect();
      const trigger = vh * 0.6; // the line head follows this viewport height
      const p = Math.min(1, Math.max(0, (trigger - rect.top) / rect.height));
      setProgress(p);

      let last = -1;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top + 56 < trigger) last = i;
      });
      setReached(last);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const pct = Math.round(progress * 100);

  return (
    <section id="roadmap" className="py-20 md:py-28">
      <div className="wrap flex flex-col gap-16">
        <Reveal className="flex max-w-[760px] flex-col gap-4">
          <span className="eyebrow">Roadmap</span>
          <h2 className="h2">From wallet to full financial ecosystem.</h2>
          <p className="lead">
            Four phases take Mudra from everyday transfers to spending, staking and credit. Target windows
            may shift as we ship.
          </p>
          <div className="mt-2 inline-flex items-center gap-3 self-start rounded-full border border-line/10 bg-surface px-4 py-2 text-sm font-semibold">
            <span className="h-2 w-2 animate-pulse-ring rounded-full bg-gold" />
            <span className="num">
              Phase {Math.max(reached + 1, 0)} of {phases.length}
            </span>
            <span className="text-mute">·</span>
            <span className="num text-gold-ink">{pct}%</span>
          </div>
        </Reveal>

        <div className="relative">
          {/* track */}
          <div className="absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-line/10 md:left-1/2" aria-hidden="true" />
          {/* filling line */}
          <div
            className="absolute left-5 top-0 w-[3px] -translate-x-1/2 overflow-hidden rounded-full bg-gradient-to-b from-blue via-blue-light to-gold md:left-1/2"
            style={{ height: `${progress * 100}%` }}
            aria-hidden="true"
          >
            <span className="absolute inset-x-0 top-0 h-16 animate-flow-down bg-gradient-to-b from-transparent via-white/80 to-transparent" />
          </div>
          {/* glowing head */}
          <div
            className="absolute left-5 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-light shadow-[0_0_24px_6px_rgba(245,176,46,.6)] md:left-1/2"
            style={{ top: `${progress * 100}%`, opacity: progress > 0.005 && progress < 0.995 ? 1 : 0 }}
            aria-hidden="true"
          />

          <ol ref={listRef} className="relative flex flex-col gap-14 md:gap-20">
            {phases.map((p, i) => {
              const lit = i <= reached;
              const left = i % 2 === 0;
              return (
                <li
                  key={p.title}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="relative grid pl-14 md:grid-cols-2 md:gap-24 md:pl-0"
                >
                  {/* node */}
                  <span
                    className={`absolute left-5 top-7 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 transition duration-500 md:left-1/2 ${
                      lit
                        ? "scale-110 border-gold-light bg-gold shadow-[0_0_20px_rgba(245,176,46,.7)]"
                        : "border-line/25 bg-ink"
                    }`}
                  >
                    {lit && <span className="absolute inset-0 animate-ping rounded-full bg-gold/60" />}
                    <span className={`relative text-[11px] font-extrabold ${lit ? "text-[#2A1800]" : "text-mute"}`}>
                      {i + 1}
                    </span>
                  </span>

                  {/* card */}
                  <div
                    className={`transition duration-700 ease-out ${
                      left ? "md:col-start-1" : "md:col-start-2"
                    } ${
                      lit || still
                        ? "translate-x-0 opacity-100"
                        : `opacity-0 max-md:translate-x-8 ${left ? "md:-translate-x-12" : "md:translate-x-12"}`
                    }`}
                  >
                    <div
                      className={`card relative overflow-hidden p-7 transition duration-500 sm:p-8 ${
                        lit ? "border-gold/40 shadow-[0_20px_60px_rgba(245,176,46,.08)]" : ""
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-0 h-1 w-full origin-left bg-gradient-to-r from-blue to-gold transition-transform duration-[1200ms] ease-out ${
                          lit ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
                            Phase {i + 1} · {p.tag}
                          </span>
                          <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                          <p className="text-[15px] text-mute">{p.summary}</p>
                        </div>
                        <span
                          className={`flex h-12 w-12 flex-none items-center justify-center rounded-[14px] transition duration-500 ${
                            lit ? "bg-gold text-[#2A1800]" : "bg-gold/15 text-gold-ink"
                          }`}
                        >
                          <Icon name={phaseIcons[i % phaseIcons.length]} />
                        </span>
                      </div>
                      <ul className="mt-6 flex flex-col gap-3">
                        {p.items.map((it, j) => (
                          <li
                            key={it}
                            style={{ transitionDelay: lit ? `${250 + j * 130}ms` : "0ms" }}
                            className={`flex items-center gap-3 text-[15px] transition duration-500 ${
                              lit || still ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                            }`}
                          >
                            <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue/15 text-blue-ink">
                              <Icon name="check" size={12} strokeWidth={3} />
                            </span>
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
