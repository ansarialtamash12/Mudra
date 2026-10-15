import Reveal from "./Reveal";
import { allocation, tokenFacts } from "@/lib/content";
import type { ReactNode } from "react";

// ==================== ICONS ====================
const ICONS: Record<string, ReactNode> = {
  coin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5h4a2 2 0 1 1 0 4h-4M9.5 13.5h4.5a2 2 0 1 1 0 4H9.5" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <circle cx="4" cy="6" r="2" />
      <circle cx="20" cy="6" r="2" />
      <circle cx="4" cy="18" r="2" />
      <circle cx="20" cy="18" r="2" />
      <path d="m6 7 4 3M18 7l-4 3M6 17l4-3M18 17l-4-3" />
    </svg>
  ),
  supply: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M12 5v14M8 12h8" />
    </svg>
  ),
  utility: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3 2.09 6.26L20 11l-5.91 1.74L12 19l-2.09-6.26L4 11l5.91-1.74z" />
    </svg>
  ),
};

function donutGradient() {
  let acc = 0;
  const stops = allocation.map((a) => {
    const from = acc;
    acc += a.pct;
    return `${a.color} ${from}% ${acc}%`;
  });
  return `conic-gradient(${stops.join(",")})`;
}

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 md:py-28">
      <div className="wrap flex flex-col gap-14">
        <Reveal className="flex max-w-[760px] flex-col gap-4">
          <span className="eyebrow">Tokenomics</span>
          <h2 className="h2">DMDR, the token behind Mudra.</h2>
          <p className="lead">
            DMDR powers staking rewards and governance across the Mudra ecosystem. Here is how the supply is
            planned to be shared.
          </p>
        </Reveal>

        {/* ==================== INFO BOXES ==================== */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tokenFacts.map((f, i) => {
            const isUtility = f.label === "Utility";
            return (
              <Reveal key={f.label} delay={i * 80}>
                <div className="card group relative flex h-full flex-col gap-5 p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold/50">
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold-ink ring-1 ring-inset ring-gold/20 transition-all duration-300 group-hover:from-gold/30 group-hover:to-gold/10">
                    <span className="h-5 w-5">{ICONS[f.icon]}</span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-mute">
                      {f.label}
                    </span>
                    <span
                      className={`font-display font-bold leading-snug ${
                        isUtility ? "text-[14px]" : "text-[17px]"
                      } ${f.placeholder ? "text-gold-ink" : ""}`}
                    >
                      {f.value}
                    </span>
                  </div>

                  {/* Hover gradient line at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ==================== UTILITY DESCRIPTION ==================== */}
        <Reveal>
          <p className="max-w-[820px] text-[15px] leading-relaxed text-mute">
            <span className="font-semibold text-fg">Utility: </span>
            Stake tokens to earn staking rewards and use your tokens through a digital payment card to make payments anywhere, enabling seamless crypto spending in everyday life.
          </p>
        </Reveal>

        {/* ==================== DONUT + ALLOCATION ==================== */}
        <div className="flex flex-wrap items-center gap-14">
          <Reveal className="flex min-w-0 flex-[1_1_340px] justify-center">
            <div className="relative aspect-square w-[min(340px,100%)]">
              <div className="absolute inset-0 animate-spin-80 rounded-full" style={{ background: donutGradient() }} />
              <div className="absolute inset-[17%] flex flex-col items-center justify-center gap-1 rounded-full bg-ink ring-1 ring-inset ring-line/10">
                <span className="font-display text-4xl font-extrabold">DMDR</span>
                <span className="label">100% supply</span>
              </div>
            </div>
          </Reveal>

          <Reveal from="right" className="flex min-w-0 flex-[1_1_440px] flex-col">
            {allocation.map((a) => (
              <div key={a.name} className="flex items-center gap-4 border-b border-line/10 py-4">
                <span className="h-3.5 w-3.5 flex-none rounded" style={{ background: a.color }} />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold">{a.name}</div>
                  <div className="text-sm text-mute">{a.note}</div>
                </div>
                <span className="num font-display text-xl font-bold">{a.pct}%</span>
              </div>
            ))}
            <p className="mt-4 text-xs font-medium tracking-wide text-mute">
              Draft allocation. Replace with final figures before launch.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}