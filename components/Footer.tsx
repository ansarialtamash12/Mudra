import { Logo } from "./Navbar";
import { EMAIL, navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line/10 bg-ink-3 pb-10 pt-14">
      <div className="wrap flex flex-col gap-10">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="flex max-w-[360px] min-w-0 flex-[1_1_280px] flex-col gap-3.5">
            <Logo small />
            <p className="text-[15px] leading-relaxed text-mute">
              Where crypto meets real life. Global payments with stablecoins, seamless, fast and secure.
            </p>
          </div>
          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-3">
              <span className="label">Explore</span>
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-[15px] font-medium text-fg/75 transition hover:text-gold-ink">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="label">Contact</span>
              <span className="text-[15px] font-medium">{EMAIL}</span>
              <span className="text-[15px] leading-relaxed text-mute">
                Headquarters:
                <br />
                Florida, United States
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 border-t border-line/10 pt-6 text-[13px] leading-relaxed text-mute">
          <span>
            Crypto assets are volatile and you may lose some or all of the value you hold. Staking rewards
            are not guaranteed. Nothing on this page is financial advice.
          </span>
          <span>Mudra (DMDR) 2026 © All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
