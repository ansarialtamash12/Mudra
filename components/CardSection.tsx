import Icon from "./Icon";
import Reveal from "./Reveal";
import { APP_URL, cardPoints } from "@/lib/content";

export default function CardSection() {
  return (
    <section id="card" className="bg-gradient-to-b from-ink via-ink-2 to-ink py-20 md:py-28">
      <div className="wrap flex flex-wrap items-center gap-16">
        <Reveal from="left" className="flex min-w-0 flex-[1_1_440px] flex-col gap-6">
          <span className="eyebrow">The Mudra card</span>
          <h2 className="h2">One card for everyday spending.</h2>
          <p className="lead">
            Spend stablecoins like cash. The digital-first Mudra card turns your crypto into money you can
            use at checkout, with instant conversion at the point of sale.
          </p>
          <ul className="flex flex-col gap-3.5 text-[17px]">
            {cardPoints.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-blue/15 text-blue-ink">
                  <Icon name="check" size={14} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div>
            <a className="btn btn-gold" href={APP_URL}>
              Get your card
            </a>
          </div>
        </Reveal>

        <Reveal from="right" className="min-w-0 flex-[1_1_400px]">
          <div className="relative mx-auto h-[380px] w-full max-w-[460px]">
            <div className="absolute left-1/2 top-1/2 -ml-[170px] -mt-[120px] aspect-[1.586] w-[min(380px,86%)] translate-x-[34px] translate-y-[26px] rotate-[9deg] rounded-3xl border border-white/10 bg-gradient-to-br from-[#1E4FD6] to-[#0A1636] opacity-70" />
            <div className="absolute left-1/2 top-1/2 -ml-[170px] -mt-[120px] aspect-[1.586] w-[min(380px,86%)] animate-floaty">
              {/* the physical card stays blue and gold in both themes */}
              <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-[radial-gradient(circle_at_85%_0%,rgba(245,176,46,.45),transparent_50%),linear-gradient(145deg,#2563EB,#0B2A8A_55%,#06143F)] p-6 text-white shadow-[0_40px_80px_rgba(6,20,63,.45),0_0_60px_rgba(47,123,255,.25)] after:absolute after:inset-0 after:animate-sheen after:bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,.18)_50%,transparent_65%)] after:content-['']">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-extrabold">Mudra</span>
                  <Icon name="contactless" size={26} className="text-gold-light" />
                </div>
                <div className="h-[38px] w-[50px] rounded-lg bg-gradient-to-br from-[#FFEDB5] via-gold to-gold-dark" />
                <div className="flex items-end justify-between">
                  <span className="num text-[15px] tracking-[0.18em] text-white/80">•••• •••• ••••</span>
                  <span className="text-xs font-bold tracking-[0.2em] text-gold-light">DMDR</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
