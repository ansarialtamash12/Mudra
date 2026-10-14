import Icon from "./Icon";
import Reveal from "./Reveal";
import { features } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      {/*
        Background image. Swap the files in /public/images to change it:
        about-bg-light.svg (light mode) and about-bg-dark.svg (dark mode).
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[4%] animate-bg-pan bg-[url('/images/about-bg-light.svg')] bg-cover bg-center dark:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[4%] hidden animate-bg-pan bg-[url('/images/about-bg-dark.svg')] bg-cover bg-center dark:block"
      />
      {/* fades the image into the neighbouring sections so text stays readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/20 to-ink"
      />

      <div className="wrap relative flex flex-col gap-14">
        <Reveal className="flex max-w-[760px] flex-col gap-4">
          <span className="eyebrow">About Mudra</span>
          <h2 className="h2">Spend crypto, live easy.</h2>
          <p className="lead">
            Mudra empowers global payments with stablecoins. It is built for everyday use, so you can spend,
            send and manage digital assets and make smarter financial decisions with ease.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <div className="card flex h-full flex-col gap-5 bg-surface/85 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-gold/60">
                <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-gradient-to-br from-blue/20 to-gold/25 text-gold-ink ring-1 ring-inset ring-line/10">
                  <Icon name={f.icon} />
                </span>
                <h3 className="font-display text-xl font-bold leading-snug">{f.title}</h3>
                <p className="leading-relaxed text-mute">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
