import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Body: Inter. Headings: Plus Jakarta Sans. Devanagari only for the coin's back face.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});
const deva = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-deva",
  display: "swap",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Mudra (DMDR) | Where crypto meets real life",
  description:
    "Mudra (DMDR) turns stablecoins into everyday money. Send across borders, spend with a debit card, trade peer to peer and earn daily rewards by staking DMDR.",
};

// Runs before first paint so the saved theme applies without a flash. Dark is the default.
const themeScript = `try{var t=localStorage.getItem('mudra-theme');document.documentElement.classList.toggle('dark',t?t==='dark':true)}catch(e){document.documentElement.classList.add('dark')}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} ${deva.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-ink font-sans text-fg antialiased">{children}</body>
    </html>
  );
}
