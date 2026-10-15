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
  { id: "intro", label: "1. Introduction" },
  { id: "about", label: "2. About Mudra" },
  { id: "scope", label: "3. Scope of this Policy" },
  { id: "collect", label: "4. Information We Collect" },
  { id: "auto", label: "5. Automatically Collected" },
  { id: "cookies", label: "6. Cookies" },
  { id: "usage", label: "7. How We Use Your Information" },
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

// ==================== SUB HEADING ====================
function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 mb-1 text-base font-bold text-gray-900 dark:text-white">
      {children}
    </h3>
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

// ==================== INFO CARD ====================
function InfoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 flex items-start gap-3 rounded-xl border border-gold/20 bg-gold/5 p-4">
      <svg
        className="mt-0.5 h-5 w-5 shrink-0 text-gold-ink dark:text-gold-light"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
      <p className="text-sm font-semibold text-gold-ink dark:text-gold-light">
        {children}
      </p>
    </div>
  );
}

// ==================== PAGE ====================
export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-7 text-gray-600 dark:text-gray-400">
                Learn how Mudra (DMDR) collects, uses, stores, shares and safeguards your personal information.
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
                  7 Sections
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

            {/* 1. INTRODUCTION */}
            <Section id="intro" number="01" title="1. Introduction">
              <p>Welcome to Mudra ("Mudra", "we", "our", or "us").</p>
              <p>
                Mudra is a company incorporated in Hong Kong under Company Registration Number 80886880-000.
              </p>
              <p>
                We are committed to protecting your privacy and handling your personal information responsibly, transparently and securely. This Privacy Policy explains how we collect, use, store, share and safeguard information when you access or use:
              </p>
              <BulletList
                items={[
                  "the Mudra mobile application;",
                  "the Mudra website;",
                  "the Mudra Wallet;",
                  "Mudra virtual and physical payment card services;",
                  "blockchain-related services;",
                  "customer support channels;",
                  "and any other products or services offered by Mudra.",
                ]}
              />
              <p>
                By creating an account or using any Mudra service, you acknowledge that you have read and understood this Privacy Policy.
              </p>
              <p>
                If you do not agree with this Privacy Policy, you should discontinue the use of our services.
              </p>
            </Section>

            {/* 2. ABOUT MUDRA */}
            <Section id="about" number="02" title="2. About Mudra">
              <p>
                Mudra develops financial technology solutions that enable users to securely manage digital assets, access payment services and utilise crypto-linked payment cards.
              </p>
              <p>
                Depending on your location and the service being used, certain financial services may be delivered directly by Mudra or through licensed banking institutions, regulated payment providers, digital asset service providers, identity verification providers or authorised card issuing partners.
              </p>
              <p>
                Where third-party regulated institutions provide financial services, additional terms and privacy policies may also apply.
              </p>
            </Section>

            {/* 3. SCOPE */}
            <Section id="scope" number="03" title="3. Scope of this Privacy Policy">
              <p>This Privacy Policy applies whenever you interact with:</p>
              <BulletList
                cols
                items={[
                  "Mudra mobile applications",
                  "Mudra website",
                  "Customer dashboard",
                  "Wallet services",
                  "Crypto transfers",
                  "Card issuance",
                  "Card management",
                  "Identity verification",
                  "Customer support",
                  "Promotional campaigns",
                  "Referral programmes",
                  "Security verification",
                  "Account administration",
                ]}
              />
              <p>
                It also applies before you register an account if you communicate with us or visit our website.
              </p>
            </Section>

            {/* 4. INFORMATION WE COLLECT */}
            <Section id="collect" number="04" title="4. Information We Collect">
              <p>
                To provide secure financial services, we collect different categories of information. The type of information collected depends upon the services you choose to use.
              </p>

              <SubHeading>4.1 Personal Information</SubHeading>
              <p>When registering an account, we may collect information including:</p>
              <BulletList
                cols
                items={[
                  "Full legal name",
                  "Date of birth",
                  "Nationality",
                  "Residential address",
                  "Country of residence",
                  "Email address",
                  "Mobile telephone number",
                  "Username",
                  "Account credentials",
                  "Government-issued identification details",
                  "Selfie verification",
                  "Signature verification",
                  "Tax residency information where required",
                  "Occupation",
                  "Source of funds information where legally required",
                ]}
              />
              <p>
                You are responsible for ensuring that the information you provide remains accurate and up to date.
              </p>

              <SubHeading>4.2 Identity Verification (KYC)</SubHeading>
              <p>
                As part of applicable regulatory obligations, we may require identity verification before providing certain services. This may include:
              </p>
              <BulletList
                cols
                items={[
                  "Passport",
                  "National identity card",
                  "Driving licence",
                  "Residence permit",
                  "Utility bills",
                  "Bank statements",
                  "Live facial recognition",
                  "Liveness detection",
                  "Video verification",
                  "Enhanced Due Diligence documentation",
                  "Politically Exposed Person (PEP) screening",
                  "Sanctions screening",
                ]}
              />
              <p>
                Verification may be performed internally or through authorised identity verification providers.
              </p>
              <p>
                Failure to complete identity verification may prevent access to some or all Mudra services.
              </p>

              <SubHeading>4.3 Wallet Information</SubHeading>
              <p>When using the Mudra Wallet, we may collect:</p>
              <BulletList
                cols
                items={[
                  "Wallet addresses",
                  "Deposit addresses",
                  "Blockchain transaction identifiers",
                  "Transaction timestamps",
                  "Transaction values",
                  "Supported digital assets",
                  "Internal wallet balances",
                  "Wallet activity logs",
                ]}
              />
              <p>
                Blockchain transactions are inherently public on their respective distributed ledger networks. While Mudra may associate blockchain addresses with your account internally for operational purposes, we cannot alter or remove publicly recorded blockchain data.
              </p>

              <SubHeading>4.4 Payment Card Information</SubHeading>
              <p>
                If you apply for a Mudra payment card, additional information may be processed, including:
              </p>
              <BulletList
                cols
                items={[
                  "Card application details",
                  "Card activation records",
                  "Card delivery preferences",
                  "Card status",
                  "Spending limits",
                  "Card usage history",
                  "Merchant categories",
                  "Card authorisations",
                  "ATM transactions",
                  "Card funding history",
                  "Card security settings",
                  "Card freeze or unfreeze actions",
                ]}
              />
              <p>
                Sensitive payment card information is processed using secure industry-standard controls and, where applicable, by regulated card issuing partners.
              </p>

              <SubHeading>4.5 Financial Information</SubHeading>
              <p>To facilitate payments and account operations, we may collect:</p>
              <BulletList
                cols
                items={[
                  "Deposit records",
                  "Withdrawal records",
                  "Payment references",
                  "Transaction amounts",
                  "Currency preferences",
                  "Funding methods",
                  "Network fees",
                  "Service charges",
                  "Exchange information",
                  "Settlement details",
                ]}
              />
              <p>We do not request your online banking passwords.</p>

              <SubHeading>4.6 Device Information</SubHeading>
              <p>
                When you use our website or mobile application, certain technical information is collected automatically. This may include:
              </p>
              <BulletList
                cols
                items={[
                  "Device model",
                  "Device manufacturer",
                  "Operating system",
                  "Browser type",
                  "App version",
                  "Device language",
                  "Device identifiers",
                  "Time zone",
                  "IP address",
                  "Session identifiers",
                  "Crash reports",
                  "Performance diagnostics",
                  "Security logs",
                ]}
              />
              <p>
                This information assists us in maintaining platform security and improving performance.
              </p>

              <SubHeading>4.7 Usage Information</SubHeading>
              <p>We automatically record certain interactions with our platform, including:</p>
              <BulletList
                cols
                items={[
                  "Login history",
                  "Logout history",
                  "Failed login attempts",
                  "Device changes",
                  "Password resets",
                  "Security verification events",
                  "Pages visited",
                  "Features accessed",
                  "Search activity",
                  "Navigation paths",
                  "Referral sources",
                  "Session duration",
                ]}
              />
              <p>
                These records help us detect fraud, improve usability and maintain service reliability.
              </p>

              <SubHeading>4.8 Communications</SubHeading>
              <p>If you contact our support team, we may retain:</p>
              <BulletList
                cols
                items={[
                  "Emails",
                  "Live chat conversations",
                  "Support tickets",
                  "Voice recordings (where permitted)",
                  "Complaint records",
                  "Survey responses",
                  "Feedback",
                  "Attachments",
                  "Verification documents submitted during support interactions",
                ]}
              />
              <p>
                Support communications may be monitored for quality assurance, fraud prevention and regulatory compliance.
              </p>
            </Section>

            {/* 5. AUTOMATICALLY COLLECTED */}
            <Section id="auto" number="05" title="5. Information Collected Automatically">
              <p>
                Certain information is collected automatically whenever you use Mudra services. This may include:
              </p>
              <BulletList
                cols
                items={[
                  "Cookies",
                  "Web beacons",
                  "Device identifiers",
                  "Application logs",
                  "API requests",
                  "Security events",
                  "Session analytics",
                  "Network diagnostics",
                  "Error reporting",
                ]}
              />
              <p>
                These technologies help us maintain the stability, performance and security of our services.
              </p>
            </Section>

            {/* 6. COOKIES */}
            <Section id="cookies" number="06" title="6. Cookies and Similar Technologies">
              <p>Our website may use cookies and similar technologies to:</p>
              <BulletList
                items={[
                  "remember your preferences;",
                  "maintain secure login sessions;",
                  "improve website performance;",
                  "understand website usage;",
                  "prevent fraud;",
                  "enhance user experience; and",
                  "support security monitoring.",
                ]}
              />
              <p>
                Most web browsers allow you to manage or disable cookies. Please note that disabling certain cookies may affect the functionality of our services.
              </p>
            </Section>

            {/* 7. HOW WE USE */}
            <Section id="usage" number="07" title="7. How We Use Your Information">
              <p>
                We process personal information only where there is a legitimate business or legal reason to do so. We may use your information to:
              </p>
              <BulletList
                cols
                items={[
                  "create and manage your account;",
                  "verify your identity;",
                  "issue and manage payment cards;",
                  "process crypto transactions;",
                  "enable wallet functionality;",
                  "comply with legal and regulatory obligations;",
                  "prevent fraud and financial crime;",
                  "investigate suspicious activity;",
                  "respond to customer enquiries;",
                  "provide technical support;",
                  "improve platform security;",
                  "enhance user experience;",
                  "analyse platform performance;",
                  "communicate important service updates;",
                  "send security notifications;",
                  "recover lost accounts;",
                  "administer promotions where applicable;",
                  "conduct internal audits; and",
                  "enforce our Terms & Conditions.",
                ]}
              />
              <InfoCard>We do not sell your personal information to third parties.</InfoCard>
            </Section>

            {/* FOOTER NOTE */}
            <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6 text-center">
              <p className="text-sm text-gold-ink dark:text-gold-light">
                By continuing to use Mudra, you acknowledge that you have read and agree to this Privacy Policy.
              </p>
            </div>

          </article>
        </div>
      </div>
    </div>
  );
}