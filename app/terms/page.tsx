"use client";

import { useState, useEffect } from "react";
import Reveal from "@/components/Reveal";

// ==================== TYPES ====================
interface NavItem {
  id: string;
  label: string;
}

// ==================== NAV ITEMS ====================
const NAV_ITEMS: NavItem[] = [
  { id: "intro", label: "Introduction" },
  { id: "definitions", label: "1. Definitions" },
  { id: "acceptance", label: "2. Acceptance of these Terms" },
  { id: "services", label: "3. About Mudra Services" },
  { id: "eligibility", label: "4. Eligibility" },
  { id: "registration", label: "5. Account Registration" },
  { id: "kyc", label: "6. Identity Verification (KYC)" },
  { id: "security", label: "7. Security of Your Account" },
  { id: "wallet", label: "8. Digital Wallet Services" },
  { id: "crypto", label: "9. Cryptocurrency Transactions" },
  { id: "cards", label: "10. Virtual and Physical Payment Cards" },
  { id: "card-usage", label: "11. Card Usage" },
  { id: "funding", label: "12. Card Funding" },
  { id: "fees", label: "13. Fees" },
  { id: "recurring-payments", label: "14. Recurring Payments and Subscriptions" },
];

// ==================== SECTION WRAPPER ====================
function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0A1636] p-6 sm:p-8 transition-colors duration-300 hover:border-gold/30"
    >
      {title && (
        <div className="mb-5 flex items-start gap-4">
          {number && (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A1636] dark:bg-[#1E4FD6] text-[13px] font-bold text-white">
              {number}
            </span>
          )}
          <h2 className="mt-2 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
      )}
      <div className="space-y-3 text-[15px] leading-7 text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </section>
  );
}

// ==================== BULLET LIST ====================
function BulletList({ items, cols = false }: { items: string[]; cols?: boolean }) {
  return (
    <ul className={`mt-3 ${cols ? "sm:columns-2 sm:gap-8 space-y-2 sm:space-y-0" : "space-y-2"}`}>
      {items.map((item, i) => (
        <li
          key={i}
          className={`flex items-start gap-3 ${cols ? "sm:mb-2 sm:break-inside-avoid" : ""}`}
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ==================== DEFINITION CARD ====================
function DefCard({ term, definition }: { term: string; definition: string }) {
  return (
    <div className="rounded-xl border border-gray-100 dark:border-white/10 bg-gray-50/50 dark:bg-[#08122E] p-4">
      <dt className="text-[13px] font-semibold text-gold-ink dark:text-gold-light">
        {term}
      </dt>
      <dd className="mt-1 text-[13px] leading-6 text-gray-600 dark:text-gray-400">
        {definition}
      </dd>
    </div>
  );
}

// ==================== PAGE ====================
export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("intro");

  // Scroll spy: track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#050B1F] dark:to-[#0A1636] px-5 pt-6 sm:pt-10 pb-16 transition-colors duration-300">
      <div className="mx-auto max-w-[1180px]">

        {/* ================= HERO HEADER ================= */}
        <Reveal>
          <header className="relative mb-8 overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0A1636] px-6 py-8 text-center sm:px-12 sm:py-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/20 blur-[100px] dark:bg-gold/10"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-gold-ink dark:text-gold-light">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Legal Document
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-gray-900 dark:text-white">
                Terms &amp; Conditions
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-7 text-gray-600 dark:text-gray-400">
                Please read these Terms carefully before using Mudra. By accessing our platform, you agree to be bound by them.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500 dark:text-gray-400">
                <span className="inline-flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  Last updated: January 2025
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  14 Sections
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Hong Kong Reg. 80886880-000
                </span>
              </div>
            </div>
          </header>
        </Reveal>

        {/* ================= MAIN LAYOUT ================= */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:items-start">

 {/* ---------- SIDEBAR ---------- */}
<aside className="hidden lg:block sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 pb-6 z-10">
  <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
    On this page
  </p>
  <nav className="space-y-0.5 border-l border-gray-200 dark:border-white/10">
    {NAV_ITEMS.map((item) => {
      const isActive = activeSection === item.id;
      return (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`block border-l-2 -ml-px py-2 pl-4 text-[13px] transition ${
            isActive
              ? "border-gold text-gold-ink dark:text-gold-light font-medium"
              : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gold/40"
          }`}
        >
          {item.label}
        </a>
      );
    })}
  </nav>
</aside>

          {/* ---------- CONTENT ---------- */}
          <article className="min-w-0 space-y-6">

            {/* INTRO */}
            <Section id="intro">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Mudra (DMDR) – Terms &amp; Conditions
              </h2>
              <p className="mt-4">Welcome to Mudra.</p>
              <p>
                These Terms &amp; Conditions ("Terms") constitute a legally binding agreement between Mudra (DMDR), a company incorporated in Hong Kong under Registration Number 80886880-000 ("Mudra", "we", "our", or "us"), and any individual or entity ("you", "your", or "User") that accesses or uses our website, mobile application, digital wallet, payment card services, or any other products and services made available by Mudra.
              </p>
              <p>
                Please read these Terms carefully before creating an account or using any Mudra service. By accessing or using our platform, you confirm that you have read, understood and agree to be bound by these Terms. If you do not agree with any provision of these Terms, you must not use our services.
              </p>
            </Section>

            {/* 1. DEFINITIONS */}
            <Section id="definitions" number="01" title="1. Definitions">
              <p>For the purposes of these Terms, the following expressions have the meanings set out below:</p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                <DefCard term="Account" definition="means your registered Mudra user account." />
                <DefCard term="App" definition="means the official Mudra mobile application." />
                <DefCard term="Card" definition="means any virtual or physical payment card made available through the Mudra platform." />
                <DefCard term="Digital Assets" definition="means cryptocurrencies, stablecoins, tokenised assets or any other supported blockchain-based digital assets." />
                <DefCard term="Wallet" definition="means your Mudra digital wallet used to store, receive and transfer supported digital assets." />
                <DefCard term="Website" definition="means the official Mudra website and any authorised web portal operated by Mudra." />
                <DefCard term="Business Day" definition="means any day on which banks are generally open for business in Hong Kong, excluding weekends and public holidays." />
                <DefCard term="Applicable Laws" definition="means all laws, regulations, regulatory guidance and compliance requirements applicable to Mudra or to your use of the services." />
                <DefCard term="Card Issuing Partner" definition="means any licensed financial institution or authorised payment service provider engaged by Mudra to facilitate payment card services." />
                <DefCard term="KYC" definition="means Know Your Customer identity verification procedures." />
                <DefCard term="AML" definition="means Anti-Money Laundering requirements." />
                <DefCard term="Sanctions Laws" definition="means economic sanctions, trade restrictions and prohibited persons regulations issued by applicable governmental authorities." />
              </dl>
            </Section>

            {/* 2. ACCEPTANCE */}
            <Section id="acceptance" number="02" title="2. Acceptance of these Terms">
              <p>By registering an account or using any Mudra service, you confirm that:</p>
              <BulletList
                items={[
                  "you are legally capable of entering into a binding agreement;",
                  "you are at least 18 years of age, or the minimum legal age required in your jurisdiction;",
                  "all information provided by you is accurate and complete;",
                  "you will keep your information up to date;",
                  "you will comply with these Terms and all applicable laws.",
                ]}
              />
              <p>
                These Terms apply to all services offered by Mudra unless separate service-specific terms are expressly provided.
              </p>
            </Section>

            {/* 3. SERVICES */}
            <Section id="services" number="03" title="3. About Mudra Services">
              <p>
                Mudra provides technology solutions designed to facilitate digital asset management and payment functionality.
              </p>
              <p>Depending on your jurisdiction and the services you use, our platform may include:</p>
              <BulletList
                cols
                items={[
                  "Digital asset wallet services",
                  "Cryptocurrency transfers",
                  "Supported blockchain transactions",
                  "Virtual payment cards",
                  "Physical payment cards",
                  "Card management tools",
                  "Transaction history",
                  "Security controls",
                  "Account management",
                  "Merchant payment functionality",
                  "Customer support",
                  "Referral or promotional programmes where applicable",
                ]}
              />
              <p>
                Certain financial services may be provided directly by licensed third-party institutions or regulated partners. Such services may also be subject to additional agreements, policies or regulatory requirements.
              </p>
            </Section>

            {/* 4. ELIGIBILITY */}
            <Section id="eligibility" number="04" title="4. Eligibility">
              <p>To use Mudra services, you must:</p>
              <BulletList
                items={[
                  "be at least 18 years old;",
                  "have legal capacity to enter into contracts;",
                  "not be prohibited by law from using our services;",
                  "successfully complete identity verification where required;",
                  "not appear on sanctions or prohibited persons lists;",
                  "not use the platform on behalf of another person without proper authority.",
                ]}
              />
              <p>We reserve the right to refuse or terminate access if these requirements are no longer met.</p>
            </Section>

            {/* 5. REGISTRATION */}
            <Section id="registration" number="05" title="5. Account Registration">
              <p>To access certain services, you must create a Mudra account. You agree to:</p>
              <BulletList
                items={[
                  "provide truthful information;",
                  "keep your login credentials confidential;",
                  "maintain the security of your devices;",
                  "immediately notify Mudra if you suspect unauthorised access;",
                  "update your information whenever it changes.",
                ]}
              />
              <p>
                You are responsible for all activity conducted through your account unless otherwise required by applicable law.
              </p>
              <p>
                Mudra may require additional verification at any time to protect your account or comply with regulatory obligations.
              </p>
            </Section>

            {/* 6. KYC */}
            <Section id="kyc" number="06" title="6. Identity Verification (KYC)">
              <p>
                To comply with applicable legal and regulatory obligations, Mudra may require identity verification before granting access to some or all services. Verification may include:
              </p>
              <BulletList
                cols
                items={[
                  "government-issued identification;",
                  "proof of address;",
                  "facial verification;",
                  "liveness checks;",
                  "sanctions screening;",
                  "politically exposed person (PEP) screening;",
                  "enhanced due diligence where appropriate.",
                ]}
              />
              <p>Failure to complete requested verification may result in:</p>
              <BulletList
                items={[
                  "delayed account activation;",
                  "restricted functionality;",
                  "suspension of transactions;",
                  "cancellation of card applications;",
                  "account closure where legally required.",
                ]}
              />
              <p>
                Providing false or misleading information during verification constitutes a material breach of these Terms.
              </p>
            </Section>

            {/* 7. SECURITY */}
            <Section id="security" number="07" title="7. Security of Your Account">
              <p>You are responsible for maintaining the confidentiality of:</p>
              <BulletList
                cols
                items={[
                  "your password;",
                  "authentication codes;",
                  "recovery phrases (where applicable);",
                  "one-time passwords;",
                  "security questions;",
                  "biometric authentication used on your device.",
                ]}
              />
              <p>You must never share your credentials with another person.</p>
              <p>
                If you believe your account has been compromised, you must notify Mudra immediately.
              </p>
              <p>
                Mudra may temporarily suspend access while investigating suspected unauthorised activity.
              </p>
            </Section>

            {/* 8. WALLET */}
            <Section id="wallet" number="08" title="8. Digital Wallet Services">
              <p>
                The Mudra Wallet enables eligible users to hold, receive and transfer supported digital assets. Availability of supported assets may change without prior notice.
              </p>
              <p>You acknowledge that:</p>
              <BulletList
                items={[
                  "blockchain transactions are irreversible once confirmed;",
                  "incorrect wallet addresses may result in permanent loss of funds;",
                  "network congestion may delay confirmations;",
                  "blockchain transaction fees are determined by the relevant network;",
                  "Mudra does not control public blockchain networks.",
                ]}
              />
              <p>
                Users are solely responsible for verifying recipient addresses before initiating any transfer.
              </p>
            </Section>

            {/* 9. CRYPTO */}
            <Section id="crypto" number="09" title="9. Cryptocurrency Transactions">
              <p>When using cryptocurrency services, you acknowledge that:</p>
              <BulletList
                items={[
                  "blockchain confirmations may take varying amounts of time;",
                  "transaction completion depends on the relevant blockchain network;",
                  "network fees may fluctuate;",
                  "digital asset prices are volatile;",
                  "transactions cannot normally be reversed after broadcast.",
                ]}
              />
              <p>Mudra is not responsible for losses arising from:</p>
              <BulletList
                cols
                items={[
                  "incorrect wallet addresses;",
                  "unsupported tokens;",
                  "blockchain forks;",
                  "network failures;",
                  "user error;",
                  "private key compromise outside Mudra's systems;",
                  "delays caused by third-party blockchain networks.",
                ]}
              />
            </Section>

            {/* 10. CARDS */}
            <Section id="cards" number="10" title="10. Virtual and Physical Payment Cards">
              <p>
                Eligible users may apply for a virtual or physical payment card through the Mudra platform. Card issuance is subject to:
              </p>
              <BulletList
                items={[
                  "successful identity verification;",
                  "compliance screening;",
                  "internal approval;",
                  "availability in your country or region;",
                  "acceptance by the issuing financial institution.",
                ]}
              />
              <p>Approval of a card application is not guaranteed.</p>
              <p>
                Cards remain the property of the issuing financial institution where required by applicable regulations.
              </p>
              <p>
                Mudra or its issuing partner may refuse, suspend, restrict or cancel any card where required for security, compliance or operational reasons.
              </p>
            </Section>

            {/* 11. CARD USAGE */}
            <Section id="card-usage" number="11" title="11. Card Usage">
              <p>Your Mudra Card must only be used for lawful purposes. You agree not to:</p>
              <BulletList
                items={[
                  "permit another person to use your card;",
                  "use your card for illegal transactions;",
                  "attempt fraudulent transactions;",
                  "circumvent spending controls;",
                  "manipulate transaction processing;",
                  "engage in prohibited merchant activity;",
                  "use the card for money laundering or terrorist financing.",
                ]}
              />
              <p>Transactions may be declined where:</p>
              <BulletList
                cols
                items={[
                  "insufficient balance exists;",
                  "risk controls are triggered;",
                  "fraud is suspected;",
                  "regulatory obligations require intervention;",
                  "merchant restrictions apply;",
                  "technical failures occur.",
                ]}
              />
              <p>
                Mudra is not responsible for any interruption of service, late charges or penalties imposed by merchants as a result of a declined payment or Card cancellation.
              </p>
            </Section>

            {/* 12. FUNDING */}
            <Section id="funding" number="12" title="12. Card Funding">
              <p>
                Where supported, your payment card may be funded using eligible assets or available balances.
              </p>
              <p>Conversion between cryptocurrencies and fiat currencies may involve:</p>
              <BulletList
                items={[
                  "exchange rates;",
                  "conversion spreads;",
                  "network fees;",
                  "processing fees;",
                  "third-party charges.",
                ]}
              />
              <p>
                Applicable fees will generally be disclosed before confirmation where practicable.
              </p>
            </Section>

            {/* 13. FEES */}
            <Section id="fees" number="13" title="13. Fees">
              <p>
                Mudra may charge fees for certain services, including but not limited to:
              </p>
              <BulletList
                cols
                items={[
                  "account services;",
                  "payment card issuance;",
                  "replacement cards;",
                  "card cancellation;",
                  "international delivery;",
                  "blockchain withdrawals;",
                  "card funding;",
                  "currency conversion;",
                  "inactivity where permitted by law;",
                  "premium services.",
                ]}
              />
              <p>
                Current fees will be published within the application, website or applicable fee schedule and may be updated from time to time.
              </p>
            </Section>

            {/* 14. RECURRING PAYMENTS */}
            <Section id="recurring-payments" number="14" title="14. Recurring Payments and Subscriptions">
              <p>
                If you authorise recurring payments or subscriptions using your Mudra Card, you are responsible for ensuring sufficient funds are available before each scheduled payment. You may cancel recurring payments at any time through the Mudra app or by contacting support, subject to the terms of the relevant merchant.
              </p>
              <p>
                Mudra is not responsible for charges incurred due to failed recurring payments or subscription renewals.
              </p>
            </Section>

            {/* FOOTER NOTE */}
            <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6 text-center">
              <p className="text-sm text-gold-ink dark:text-gold-light">
                By continuing to use Mudra, you acknowledge that you have read and agree to these Terms &amp; Conditions.
              </p>
            </div>

          </article>
        </div>
      </div>
    </div>
  );
}