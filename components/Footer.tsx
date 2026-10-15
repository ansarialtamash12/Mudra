import { Logo } from "./Navbar";
import { EMAIL } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-line/10 bg-ink-3 pt-16 pb-8 transition-colors duration-300">
      {/* Subtle top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />

      <div className="wrap flex flex-col gap-12">
        
        {/* ================= TOP ROW ================= */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          
          {/* Column 1: Logo + Description + Social (spans 5 cols) */}
          <div className="flex flex-col gap-5 md:col-span-5">
            <Logo small />
            <p className="max-w-[340px] text-[15px] leading-relaxed text-mute">
              Where crypto meets real life. Global payments with stablecoins — seamless, fast and secure.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line/15 text-fg/70 transition-all hover:border-gold/60 hover:text-gold-ink hover:-translate-y-0.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line/15 text-fg/70 transition-all hover:border-gold/60 hover:text-gold-ink hover:-translate-y-0.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Discord"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line/15 text-fg/70 transition-all hover:border-gold/60 hover:text-gold-ink hover:-translate-y-0.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Explore (spans 3 cols) */}
          <div className="flex flex-col gap-4 md:col-span-3">
            <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-fg/50">
              Explore
            </span>
            <div className="flex flex-col gap-3">
              <a href="/terms" className="text-[15px] font-medium text-fg/75 transition hover:text-gold-ink">
                Terms &amp; Conditions
              </a>
              <a href="/privacy" className="text-[15px] font-medium text-fg/75 transition hover:text-gold-ink">
                Privacy Policy
              </a>
              <a href="/#faq" className="text-[15px] font-medium text-fg/75 transition hover:text-gold-ink">
                FAQ
              </a>
            </div>
          </div>

          {/* Column 3: Contact (spans 4 cols) */}
          <div className="flex flex-col gap-4 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-fg/50">
              Contact
            </span>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="text-[15px] font-medium text-fg/90 transition hover:text-gold-ink"
              >
                {EMAIL}
              </a>
              <p className="text-[15px] leading-relaxed text-mute">
                Headquarters:
                <br />
                Florida, United States
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ROW ================= */}
        <div className="flex flex-col gap-3 border-t border-line/10 pt-6 text-[13px] leading-relaxed text-mute sm:flex-row sm:items-center sm:justify-between">
          <span className="max-w-[760px]">
            Crypto assets are volatile and you may lose some or all of the value you hold. Staking rewards
            are not guaranteed. Nothing on this page is financial advice.
          </span>
          <span className="shrink-0 sm:text-right">
            Mudra (DMDR) 2026 © All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}