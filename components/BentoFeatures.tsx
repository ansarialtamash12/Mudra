"use client";

import Reveal from "./Reveal";
import { APP_URL } from "@/lib/content";

// Icon Box Component (Navy blue square with white icon)
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A1636] text-white transition-colors duration-300 dark:bg-[#1E4FD6]">
      {children}
    </div>
  );
}

// Reusable Card Wrapper
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-between gap-16 rounded-3xl border border-gray-200 bg-white p-6 md:p-7 min-h-[180px] dark:border-white/10 dark:bg-[#0A1636] transition-colors duration-300 hover:border-gold/50 ${className}`}
    >
      {children}
    </div>
  );
}

export default function BentoFeatures() {
  return (
    <section className="py-20 md:py-28 transition-colors duration-300">
      <div className="wrap flex flex-col gap-12">
        
        {/* ================= HEADER ================= */}
        <Reveal className="flex max-w-[900px] flex-col gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Spend Crypto, Live Easy — Simplify Your Finance
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-[820px]">
            MDR Futuristics empowers global payments with stablecoins — seamless, fast, and built for everyday use. 
            Whether you're spending crypto or managing digital assets, our platform helps you make smarter financial decisions with ease.
          </p>
        </Reveal>

        {/* ================= BENTO GRID ================= */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            
            {/* ---- CARD 1: Fast & Secure Stablecoin Transfers ---- */}
            <Card>
              <IconBox>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </IconBox>
              <h3 className="text-[17px] font-semibold text-gray-900 dark:text-white leading-snug">
                Fast &amp; Secure Stablecoin Transfers
              </h3>
            </Card>

            {/* ---- CARD 2: Multi-Currencies ---- */}
            <Card>
              <IconBox>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </IconBox>
              <h3 className="text-[17px] font-semibold text-gray-900 dark:text-white leading-snug">
                Multi-Currencies, One App
              </h3>
            </Card>

            {/* ---- CARD 3: Convenient P2P Access ---- */}
            <Card>
              <IconBox>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </IconBox>
              <h3 className="text-[17px] font-semibold text-gray-900 dark:text-white leading-snug">
                Convenient P2P Access
              </h3>
            </Card>

            {/* ---- CARD 4: Tall Image (Right column, spans 2 rows on desktop) ---- */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 transition-colors duration-300 min-h-[280px] md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-2">
              <img
                src="bento.webp"
                alt="Mudra mobile experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* ---- CARD 5: Spend Stablecoins Instantly ---- */}
            <Card>
              <IconBox>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </IconBox>
              <h3 className="text-[17px] font-semibold text-gray-900 dark:text-white leading-snug">
                Spend Stablecoins Instantly
              </h3>
            </Card>

            {/* ---- CARD 6: Credit Card Image ---- */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 transition-colors duration-300 min-h-[180px]">
              <img
                src="ns-img-564.webp"
                alt="Mudra card"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* ---- CARD 7: Handle all your crypto + Get Started CTA ---- */}
            <Card className="!gap-8 justify-between">
              <h3 className="text-[17px] font-semibold text-gray-900 dark:text-white leading-snug">
                Handle all your crypto in one place
              </h3>
              <a
                href={APP_URL}
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#0A1636] dark:text-gold-light transition-colors hover:text-gold dark:hover:text-gold"
              >
                Get Started
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </Card>

          </div>
        </Reveal>
      </div>
    </section>
  );
}