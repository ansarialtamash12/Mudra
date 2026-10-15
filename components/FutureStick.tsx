"use client"; 

import { useState } from "react";

interface TabData {
  id: string;
  label: string;
  title: string;
  description: string;
  imageSrc: string;
}

// 2. Tabs ka Data 
const TABS_DATA: TabData[] = [
  {
    id: "transfers",
    label: "Transfers",
    title: "Fast & Secure Stablecoin Transfers",
    description: "Send and receive funds instantly using secure stablecoin rails with low-cost global payments. Our global transfer system allows you to send crypto and have the recipient receive local currency, with hassle-free protected transactions to any recipient worldwide. Fast, secure, and built for everyday people and businesses.",
    imageSrc: "Tower.webp",
  },
  {
    id: "multi-currency",
    label: "Multi-Currency",
    title: "Multi-Currencies, One App",
    description: "Manage stablecoins and local currency seamlessly in one unified app. Our multi-currency wallet bridges the gap between crypto and everyday life, giving you full control over all your digital assets and fiat currencies. All currencies, one simple app — bridging crypto and everyday life.",
    imageSrc: "Crypto.webp",
  },
  {
    id: "spending",
    label: "Spending",
    title: "Spend Stablecoins Instantly",
    description: "Turn your crypto into everyday spending power. Buy coffee, shop online or pay bills with stablecoins using our digital-first spending card. Enjoy effortless, secure global payments wherever you are, with instant conversion at point of sale. No more waiting for funds to settle.",
    imageSrc: "laptop.webp",
  },
  {
    id: "international",
    label: "International",
    title: "International Transfer",
    description: "Send crypto, receive local currency. Our international transfer system enables hassle-free protected transactions to any recipient worldwide. Experience low-cost global transfers that settle in minutes, not days, with complete transparency and security.",
    imageSrc: "global.webp",
  },
  {
    id: "credit",
    label: "Credit",
    title: "Crypto-Backed Credit",
    description: "Access instant funds without selling your crypto. Use your digital assets as collateral to secure flexible credit lines, with no credit checks and repayment terms that work for you. Unlock liquidity while maintaining your crypto position and enjoying potential future appreciation.",
    imageSrc: "currency.webp",
  },
  {
    id: "earn",
    label: "Earn",
    title: "Earn, Swap & P2P",
    description: "Earn daily rewards on your crypto holdings, swap assets easily with competitive rates, or use our P2P marketplace for low-cost stablecoin access. Complete ecosystem for maximizing the value of your digital assets. Start earning passive income today with our innovative reward system.",
    imageSrc: "Earn.webp",
  },
];

export default function FeatureTabsSection() {
  const [activeTab, setActiveTab] = useState<string>("transfers");
  const [displayedTab, setDisplayedTab] = useState<string>("transfers");
  const [isFading, setIsFading] = useState<boolean>(false);

  const handleTabClick = (id: string) => {
    if (id === activeTab) return;

    setActiveTab(id);
    setIsFading(true);

    setTimeout(() => {
      setDisplayedTab(id);
      setIsFading(false);
    }, 300);
  };

  const currentTab = TABS_DATA.find((tab) => tab.id === displayedTab) || TABS_DATA[0];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto transition-colors duration-300">
      
      {/* TOP HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
          MDR Futuristics — Where Crypto Meets Real Life
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Empowering global payments with stablecoins. Seamless, fast, and secure — built for everyday people and businesses.
        </p>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex flex-wrap justify-center items-center gap-1 mb-10 mx-auto p-1.5 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 max-w-fit">
        {TABS_DATA.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-white dark:bg-[#1E4FD6] text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ================= MAIN CONTENT BOX (FIXED HEIGHT & WIDTH) ================= */}
      {/* Yahan lg:h-[600px] add kiya gaya hai taaki desktop pe height fix rahe */}
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[2rem] overflow-hidden bg-white dark:bg-[#0A1636] border border-gray-200 dark:border-white/10 shadow-xl lg:h-[600px]">
        
        {/* LEFT SIDE: Image (Height fixed parent ke hisaab se h-full) */}
        <div className={`relative w-full h-[300px] sm:h-[400px] lg:h-full transition-opacity duration-300 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          <img
            src={currentTab.imageSrc}
            alt={currentTab.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE: Text Content (Agar text bada ho toh scroll aayega, design nahi tootega) */}
        <div className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 lg:overflow-y-auto transition-all duration-300 ease-in-out transform ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            {currentTab.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
            {currentTab.description}
          </p>
          
          <button className="flex items-center gap-2 w-fit px-7 py-3.5 rounded-xl font-semibold transition-colors duration-300 bg-[#0A1636] text-white hover:bg-[#1E4FD6] dark:bg-white dark:text-[#0A1636] dark:hover:bg-gold dark:hover:text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}