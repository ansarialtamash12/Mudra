import Reveal from "./Reveal";
import { APP_URL, DEMO_URL, EMAIL } from "@/lib/content";

export default function Cta() {
  return (
    <section id="contact" className="pb-24 pt-20 md:pt-28">
      <div className="wrap">
        <Reveal>
          {/* Light mode: Soft light blue/white background with dark text | Dark mode: Original royal-blue with white text */}
          <div className="relative flex flex-col items-start gap-7 overflow-hidden rounded-[28px] border border-gold/40 
            bg-[radial-gradient(ellipse_at_88%_0%,rgba(245,176,46,.15),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(47,123,255,.1),transparent_58%),#F8FAFC] 
            text-[#0A1A4A] 
            dark:bg-[radial-gradient(ellipse_at_88%_0%,rgba(245,176,46,.32),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(47,123,255,.45),transparent_58%),#0A1A4A] 
            dark:text-white 
            p-8 sm:p-14 lg:p-20 transition-colors duration-300">
            
            {/* Twinkling stars (Gold color dono themes mein acha lagta hai) */}
            <span className="absolute left-[62%] top-[22%] h-1.5 w-1.5 animate-twinkle rounded-full bg-gold dark:bg-gold-light" />
            <span className="absolute left-[80%] top-[60%] h-1.5 w-1.5 animate-twinkle rounded-full bg-gold dark:bg-gold-light [animation-delay:-1.4s]" />
            <span className="absolute left-[48%] top-[78%] h-1.5 w-1.5 animate-twinkle rounded-full bg-gold dark:bg-gold-light [animation-delay:-2.2s]" />
            
            {/* Heading: Light mode mein dark text, Dark mode mein white */}
            <h2 className="h2 relative max-w-[720px]">Ready to spend crypto in real life?</h2>
            
            {/* Subtext: Light mode mein grey, Dark mode mein light blue */}
            <p className="lead relative !text-slate-600 dark:!text-[#B9C8EC]">
              Join the people already using Mudra for effortless stablecoin payments.
            </p>
            
            <div className="relative flex flex-wrap gap-3.5">
              {/* Gold Button (Same for both) */}
              <a className="btn btn-gold" href={APP_URL}>
                Get started now
              </a>
              
              {/* Secondary Button: Light mode mein navy border/text, Dark mode mein white border/text */}
              <a className="btn border-[#0A1A4A]/30 text-[#0A1A4A] hover:bg-[#0A1A4A]/10 dark:border-white/30 dark:text-white dark:hover:bg-white/10" href={DEMO_URL}>
                Book a demo
              </a>
            </div>
            
            {/* Footer Text & Email */}
            <p className="relative text-[15px] text-slate-600 dark:text-[#B9C8EC]">
              Questions? Write to <span className="font-semibold text-[#0A1A4A] dark:text-white">{EMAIL}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}