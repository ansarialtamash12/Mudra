import { tickerItems } from "@/lib/content";

export default function Ticker() {
  const row = [...tickerItems, ...tickerItems];
  return (
    <section
      aria-label="Highlights"
      className="overflow-hidden border-y border-line/10 bg-ink-3 py-5"
    >
      <div className="flex w-max animate-marquee">
        {row.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-10 whitespace-nowrap pr-10 text-[13px] font-semibold uppercase tracking-[0.14em] text-mute after:h-1.5 after:w-1.5 after:rounded-full after:bg-gold after:content-['']"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
