import Reveal from "./Reveal";
import { allocation, tokenFacts } from "@/lib/content";

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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tokenFacts.map((f, i) => (
            <Reveal key={f.label} delay={i * 80}>
              <div className="card flex h-full flex-col gap-1.5 p-6">
                <span className="label">{f.label}</span>
                <span className={`font-display text-xl font-bold ${f.placeholder ? "text-gold-ink" : ""}`}>{f.value}</span>
              </div>
            </Reveal>
          ))}
        </div>

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
