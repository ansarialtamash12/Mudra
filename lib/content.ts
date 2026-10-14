// All editable copy and numbers live here.
// Items marked DRAFT are placeholders: confirm them before launch.

export const APP_URL = "https://mudra-n-qnic.vercel.app/Login";
export const DEMO_URL = "https://mudra-n-qnic.vercel.app/contact";
export const EMAIL = "hello@mudrapro.io";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Card", href: "#card" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Staking", href: "#staking" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

export const tickerItems = [
  "Stablecoin transfers",
  "Multi-currency wallet",
  "P2P marketplace",
  "Debit card",
  "Daily rewards",
  "DMDR staking",
  "Crypto-backed credit",
];

export type IconName = "transfer" | "wallet" | "people" | "card" | "star" | "shield";

export const features: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "transfer",
    title: "Fast & secure stablecoin transfers",
    body: "Send and receive funds instantly with low-cost global payments. Your recipient can receive local currency, anywhere in the world.",
  },
  {
    icon: "wallet",
    title: "Multi-currencies, one app",
    body: "Hold stablecoins and local currencies in one wallet and handle all your crypto in one place.",
  },
  {
    icon: "people",
    title: "Convenient P2P access",
    body: "Swap assets with competitive rates through a low-cost peer-to-peer marketplace.",
  },
  {
    icon: "card",
    title: "Spend stablecoins instantly",
    body: "Buy coffee, shop online or pay bills. Your crypto converts to fiat at the point of sale.",
  },
  {
    icon: "star",
    title: "Earn daily rewards",
    body: "Earn rewards on your crypto with flexible options, including the DMDR staking program.",
  },
  {
    icon: "shield",
    title: "Crypto-backed credit",
    body: "Access instant funds using your crypto as collateral, with no credit checks.",
  },
];

export const cardPoints = [
  "Digital spending card included",
  "Instant crypto-to-fiat conversion",
  "Coffee, online shopping, bills and more",
  "No hidden fees",
];

// DRAFT allocation: replace with final figures. Percentages must add up to 100.
export const allocation = [
  { name: "Staking & rewards", note: "Paid out to stakers over time", pct: 35, color: "#F5B02E" },
  { name: "Community & ecosystem", note: "Growth, campaigns and incentives", pct: 20, color: "#2F7BFF" },
  { name: "Liquidity", note: "Trading depth and P2P support", pct: 15, color: "#1E4FD6" },
  { name: "Team", note: "Vested over a multi-year schedule", pct: 12, color: "#F28C0F" },
  { name: "Treasury", note: "Operations and future development", pct: 10, color: "#7FB0FF" },
  { name: "Partners & marketing", note: "Integrations and brand growth", pct: 8, color: "#9FB3D9" },
];

export const tokenFacts = [
  { label: "Token", value: "Mudra (DMDR)", placeholder: false },
  { label: "Network", value: "[Add network]", placeholder: true }, // DRAFT
  { label: "Total supply", value: "[Add total supply]", placeholder: true }, // DRAFT
  { label: "Utility", value: "Staking, governance, rewards", placeholder: false },
];

// DRAFT rates and terms: illustrative only.
export const tiers = [
  { label: "Flexible", lock: "No lock-in", term: "Flexible, no lock-in", apy: 6 },
  { label: "30 days", lock: "Locked", term: "30 days", apy: 9 },
  { label: "90 days", lock: "Locked", term: "90 days", apy: 12 },
  { label: "180 days", lock: "Locked", term: "180 days", apy: 16 },
];
export const stakeAmounts = [500, 1000, 5000, 10000];

// DRAFT target windows.
export const phases = [
  {
    tag: "Q4 2026",
    title: "Foundation",
    summary: "The everyday money layer goes live.",
    items: ["Stablecoin transfers worldwide", "Multi-currency wallet", "P2P marketplace"],
  },
  {
    tag: "Q1 2027",
    title: "DMDR & staking",
    summary: "The token starts earning for holders.",
    items: ["DMDR token launch", "Flexible and locked staking", "Daily rewards"],
  },
  {
    tag: "Q2 2027",
    title: "Mudra card",
    summary: "Spend your crypto anywhere.",
    items: ["Digital spending card", "Instant crypto-to-fiat conversion", "Wider currency support"],
  },
  {
    tag: "Q3 2027",
    title: "Credit & governance",
    summary: "Holders help steer the ecosystem.",
    items: ["Crypto-backed credit", "Governance for DMDR holders", "Ecosystem integrations"],
  },
];

export const faqs = [
  {
    q: "How do stablecoin transfers work?",
    a: "Mudra sends stablecoins over secure blockchain rails. You can send and receive funds globally with low transaction costs and real-time settlement.",
  },
  {
    q: "Can I spend stablecoins on everyday purchases?",
    a: "Yes. The digital spending card lets you pay for coffee, online shopping, bills and more, with instant crypto-to-fiat conversion at checkout.",
  },
  {
    q: "Is my crypto safe on Mudra?",
    a: "Mudra protects your assets with encryption, multi-factor authentication, continuous monitoring and cold storage. As with any crypto product, keep your own login details safe.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. Mudra is built for everyone, from first-time crypto users to experienced traders, with a simple interface, step-by-step guides and support.",
  },
  {
    q: "How do I earn rewards with DMDR?",
    a: "Stake DMDR in a flexible or locked term and collect daily rewards. You can also swap assets at competitive rates and trade through the P2P marketplace.",
  },
];
