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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <CardSection />
        <Tokenomics />
        <Staking />
        <Roadmap />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
