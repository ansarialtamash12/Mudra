import Reveal from "./Reveal";
import { APP_URL, DEMO_URL, EMAIL } from "@/lib/content";

export default function Cta() {
  return (
    <section id="contact" className="pb-24 pt-20 md:pt-28">
      <div className="wrap">
        <Reveal>
          {/* royal-blue banner in both themes, with gold accents */}
          <div className="relative flex flex-col items-start gap-7 overflow-hidden rounded-[28px] border border-gold/40 bg-[radial-gradient(ellipse_at_88%_0%,rgba(245,176,46,.32),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(47,123,255,.45),transparent_58%),#0A1A4A] p-8 text-white sm:p-14 lg:p-20">
            <span className="absolute left-[62%] top-[22%] h-1.5 w-1.5 animate-twinkle rounded-full bg-gold-light" />
            <span className="absolute left-[80%] top-[60%] h-1.5 w-1.5 animate-twinkle rounded-full bg-gold-light [animation-delay:-1.4s]" />
            <span className="absolute left-[48%] top-[78%] h-1.5 w-1.5 animate-twinkle rounded-full bg-gold-light [animation-delay:-2.2s]" />
            <h2 className="h2 relative max-w-[720px]">Ready to spend crypto in real life?</h2>
            <p className="lead relative !text-[#B9C8EC]">
              Join the people already using Mudra for effortless stablecoin payments.
            </p>
            <div className="relative flex flex-wrap gap-3.5">
              <a className="btn btn-gold" href={APP_URL}>
                Get started now
              </a>
              <a className="btn border-white/30 text-white hover:bg-white/10" href={DEMO_URL}>
                Book a demo
              </a>
            </div>
            <p className="relative text-[15px] text-[#B9C8EC]">
              Questions? Write to <span className="font-semibold text-white">{EMAIL}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
