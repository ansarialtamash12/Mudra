"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { APP_URL, stakeAmounts } from "@/lib/content";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const TIERS = [
  { label: "Flexible", rate: "UPTO 60% APY", apy: 60, lock: "No lock-in", term: "Flexible" },
  { label: "3 Months", rate: "10% Bonus", apy: 10, lock: "Locked", term: "3 months" },
  { label: "6 Months", rate: "25% Bonus", apy: 25, lock: "Locked", term: "6 months" },
  { label: "12 Months", rate: "60% Bonus", apy: 60, lock: "Locked", term: "12 months" },
];

export default function Staking() {
  const [tier, setTier] = useState(0);
  const [amount, setAmount] = useState(1000);

  const t = TIERS[tier];
  const total = (amount * t.apy) / 100;
  const monthly = total / 12;

  return (
    <section
      id="staking"
      className="bg-gradient-to-b from-ink via-ink-2 to-ink py-20 md:py-28 transition-colors duration-300"
    >
      <div className="wrap flex flex-col gap-14">
        <Reveal className="flex max-w-[760px] flex-col gap-4">
          <span className="eyebrow">Staking Program</span>
          <h2 className="h2">Investor Staking Program</h2>
          <p className="lead">
            The proposed investor staking program accepts deposits from $100 to $2,000 and uses fixed lock periods.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-stretch gap-10 rounded-[20px] border border-line/10 bg-gradient-to-br from-surface to-ink-2 shadow-[0_20px_60px_rgba(10,24,58,0.08)] dark:shadow-none p-5 sm:p-8 lg:p-10 transition-colors duration-300">
            <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-7">
              <div className="flex flex-col gap-3.5">
                <span className="label">1. Choose a term</span>
                <div className="flex flex-wrap gap-3">
                  {TIERS.map((x, i) => (
                    <button
                      key={x.label}
                      type="button"
                      onClick={() => setTier(i)}
                      aria-pressed={tier === i}
                      className={`min-w-0 flex-[1_1_150px] rounded-2xl border p-[18px] text-left transition ${
                        tier === i
                          ? "border-gold bg-gold/10"
                          : "border-line/10 bg-ink-2 hover:border-gold/50"
                      }`}
                    >
                      <div className="font-display text-[17px] font-bold text-fg">
                        {x.label}
                      </div>
                      <div className="num mt-1 text-sm font-semibold text-gold-ink">
                        {x.rate}
                      </div>
                      <div className="mt-0.5 text-[13px] text-mute">{x.lock}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3.5">
                <span className="label">2. Choose an amount (USD)</span>
                <div className="flex flex-wrap gap-3">
                  {stakeAmounts.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => setAmount(a)}
                      aria-pressed={amount === a}
                      className={`num rounded-full border px-5 py-2.5 font-semibold transition ${
                        amount === a
                          ? "border-gold bg-gold/10 text-fg"
                          : "border-line/10 bg-ink-2 text-fg hover:border-gold/50"
                      }`}
                    >
                      {a.toLocaleString("en-US")}
                    </button>
                  ))}
                </div>
              </div>

              <p className="max-w-[520px] text-sm leading-relaxed text-mute">
                Illustrative rates for this program. Final rates and terms are confirmed at launch.
                Staking rewards are not guaranteed, and the value of crypto assets can go down as well as up.
              </p>
            </div>

            {/* Right panel */}
            <div className="relative flex min-w-0 flex-[1_1_340px] flex-col justify-between gap-7 overflow-hidden rounded-[18px] border border-gold/30 bg-white p-8 text-gray-900 dark:bg-[#08153A] dark:text-white transition-colors duration-300">
              
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(245,176,46,.20),transparent_55%),radial-gradient(circle_at_0%_100%,rgba(47,123,255,.12),transparent_60%)] dark:bg-[radial-gradient(circle_at_80%_0%,rgba(245,176,46,.25),transparent_55%),radial-gradient(circle_at_0%_100%,rgba(47,123,255,.35),transparent_60%)]" />

              <div className="relative flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-[#9FB0DA]">
                  Estimated total bonus
                </span>
                <span className="num break-words font-display text-[clamp(2.1rem,5vw,3.25rem)] font-bold leading-[1.1] text-gold-ink dark:text-gold-light">
                  {fmt(total)}
                </span>
                <span className="text-sm font-semibold text-gray-500 dark:text-[#9FB0DA]">
                  USD
                </span>
              </div>

              <dl className="relative flex flex-col">
                {[
                  ["Per month", `${fmt(monthly)} USD`],
                  ["Staked", `${amount.toLocaleString("en-US")} USD`],
                  ["Term", t.term],
                  ["Example rate", t.rate],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    className="flex justify-between gap-4 border-t border-gray-200 py-3.5 dark:border-white/10"
                  >
                    <dt className="text-gray-500 dark:text-[#9FB0DA]">{k}</dt>
                    <dd
                      className={`num text-right font-semibold ${
                        i === 3
                          ? "text-teal"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>

              <a className="btn btn-gold relative" href={APP_URL}>
                Start staking
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}