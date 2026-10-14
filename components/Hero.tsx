import Icon from "./Icon";
import { APP_URL } from "@/lib/content";
import Image from "next/image";
const sparks = [
  { l: "8%", t: "30%", d: "0s" },
  { l: "22%", t: "72%", d: "-1s" },
  { l: "41%", t: "18%", d: "-2s" },
  { l: "57%", t: "84%", d: "-.6s" },
  { l: "73%", t: "26%", d: "-1.8s" },
  { l: "88%", t: "62%", d: "-2.6s" },
  { l: "94%", t: "14%", d: "-1.2s" },
  { l: "33%", t: "46%", d: "-2.2s" },
];

const heroChecks = ["Instant global transfers", "Low transaction fees", "Real-time settlement"];

const chip =
  "glass absolute flex animate-floaty items-center gap-2.5 px-3.5 py-2.5 text-[13px] font-semibold max-[520px]:px-2.5 max-[520px]:py-2 max-[520px]:text-xs";
const chipIcon =
  "flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-gradient-to-br from-blue/20 to-gold/25 text-gold-ink";

export default function Hero() {
  return (
    <section id="top" className="hero-bg relative overflow-hidden pb-24 pt-16 md:pt-20">
      {/* animated backdrop: logo blue on the left, logo gold on the right */}
      <div className="absolute -left-40 -top-36 h-[520px] w-[520px] animate-drift rounded-full bg-blue opacity-30 blur-[90px] dark:opacity-45" />
      <div className="absolute -right-32 top-40 h-[420px] w-[420px] animate-drift rounded-full bg-gold opacity-30 blur-[90px] [animation-delay:-6s] dark:opacity-20" />
      <div className="grid-floor absolute -bottom-10 -left-[20%] -right-[20%] h-[420px] origin-bottom animate-gridmove [mask-image:linear-gradient(to_top,#000_15%,transparent_85%)] [transform:perspective(500px)_rotateX(62deg)]" />
      {sparks.map((s, i) => (
        <span
          key={i}
          className="absolute h-1.5 w-1.5 animate-twinkle rounded-full bg-gold"
          style={{ left: s.l, top: s.t, animationDelay: s.d }}
        />
      ))}

      <div className="wrap relative z-10 flex flex-wrap items-center gap-10">
        {/* copy */}
        <div className="flex min-w-0 flex-[1_1_500px] flex-col items-start gap-7">
          <div className="inline-flex animate-rise items-center gap-3 rounded-full border border-line/15 bg-surface/70 py-2 pl-2.5 pr-4 [animation-delay:50ms]">
            <span className="flex">
              <span className="h-[22px] w-[22px] rounded-full border-2 border-surface bg-gradient-to-br from-blue-light to-blue-deep" />
              <span className="-ml-2 h-[22px] w-[22px] rounded-full border-2 border-surface bg-gradient-to-br from-gold-light to-gold" />
              <span className="-ml-2 h-[22px] w-[22px] rounded-full border-2 border-surface bg-gradient-to-br from-blue to-sky" />
            </span>
            <span className="text-sm font-semibold">10,000+ people joined</span>
          </div>

          <h1 className="animate-rise font-display text-[clamp(2.25rem,5.2vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight text-balance [animation-delay:200ms]">
            Where crypto meets <span className="shimmer animate-shine">real life.</span>
          </h1>

          <p className="max-w-[540px] animate-rise text-[19px] leading-relaxed text-mute [animation-delay:350ms]">
            Mudra (DMDR) turns stablecoins into everyday money. Send across borders, spend with a debit card,
            trade peer to peer, and earn daily rewards by staking DMDR.
          </p>

          <div className="flex animate-rise flex-wrap gap-3.5 [animation-delay:500ms]">
            <a className="btn btn-gold" href={APP_URL}>
              Get started
            </a>
            <a className="btn btn-blue" href="#staking">
              Explore staking
            </a>
          </div>

          <ul className="flex animate-rise flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-mute [animation-delay:500ms]">
            {heroChecks.map((c) => (
              <li key={c} className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* animated stage */}
        <div className="min-w-0 flex-[1_1_380px]">
          <div className="relative mx-auto h-[440px] w-full max-w-[440px]">
            <div className="absolute left-1/2 top-1/2 -ml-[220px] -mt-[220px] h-[440px] w-[440px] animate-glowpulse rounded-full bg-[radial-gradient(circle,rgba(47,123,255,.4),transparent_66%)]" />
            <div className="absolute left-1/2 top-1/2 -ml-[160px] -mt-[160px] h-[320px] w-[320px] animate-glowpulse rounded-full bg-[radial-gradient(circle,rgba(245,176,46,.42),transparent_65%)] [animation-delay:-2.5s]" />
            <div className="absolute left-1/2 top-1/2 -ml-[190px] -mt-[190px] h-[380px] w-[380px] animate-spin-24 rounded-full border border-gold/45 after:absolute after:left-1/2 after:top-[-5px] after:-ml-[5px] after:h-2.5 after:w-2.5 after:rounded-full after:bg-gold after:shadow-[0_0_14px_#F5B02E] after:content-['']" />
            <div className="absolute left-1/2 top-1/2 -ml-[150px] -mt-[150px] h-[300px] w-[300px] animate-spin-17-rev rounded-full border border-blue/50 after:absolute after:left-1/2 after:top-[-5px] after:-ml-[5px] after:h-2.5 after:w-2.5 after:rounded-full after:bg-blue after:shadow-[0_0_14px_#2F7BFF] after:content-['']" />

           {/* coin */}
<div className="absolute left-1/2 top-1/2 -ml-[115px] -mt-[115px] h-[230px] w-[230px] [perspective:900px]">
  <div className="relative h-full w-full animate-coinspin [transform-style:preserve-3d]">
    <Image
      src="/Futuristic DMDR Gold Crypto Coin.png"
      alt="Mudra DMDR coin"
      fill
      priority
      sizes="230px"
      className="rounded-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
    />
  </div>
</div>

            {/* floating chips */}
            <div className={`${chip} left-0 top-9`}>
              <span className={chipIcon}>
                <Icon name="transfer" size={18} />
              </span>
              Instant transfers
            </div>
            <div className={`${chip} right-0 top-[150px] [animation-delay:-2s]`}>
              <span className={chipIcon}>
                <Icon name="star" size={18} />
              </span>
              Daily rewards
            </div>
            <div className={`${chip} bottom-11 left-[18px] [animation-delay:-4s]`}>
              <span className={chipIcon}>
                <Icon name="card" size={18} />
              </span>
              Spend anywhere
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
