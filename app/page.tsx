import About from "@/components/About";
import CardSection from "@/components/CardSection";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Roadmap from "@/components/Roadmap";
import Staking from "@/components/Staking";
import Ticker from "@/components/Ticker";
import Tokenomics from "@/components/Tokenomics";
import VideBannerSection from "@/components/VideoBannerSection";
import FeatureTabsSection from "@/components/FutureStick";
import Testimonials from "@/components/Testimonials";
import ContractAddress from "@/components/ContractAddress";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Ticker />
        <About />
        <FeatureTabsSection />
        <CardSection />
        <VideBannerSection />
        <Tokenomics />
        <ContractAddress />
        <Staking />
        <Roadmap />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
    </>
  );
}
