"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CONTRACT_ADDRESS = "0x043EF81A999AF3112F09401874EBD46Ef183AC8A";
const BSCSCAN_URL = `https://bscscan.com/token/${CONTRACT_ADDRESS}#transactions`;

export default function ContractAddress() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="pb-20 md:pb-28">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0A1636] p-6 sm:p-7 transition-colors duration-300">
            {/* Gold glow (top-left) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-gold/10 blur-3xl"
            />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              {/* Left side: Label + Address */}
              <div className="flex min-w-0 flex-col gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-ink dark:text-gold-light">
                  Official Contract
                </span>
                <code className="num break-all font-mono text-[14px] sm:text-[15px] font-semibold text-gray-900 dark:text-white">
                  {CONTRACT_ADDRESS}
                </code>
              </div>

              {/* Right side: Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {/* Copy Button */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0A1636] px-5 py-2.5 text-[13.5px] font-semibold text-white transition-all duration-300 hover:bg-[#1E4FD6] dark:bg-[#1E4FD6] dark:hover:bg-[#2563EB]"
                >
                  {copied ? (
                    <>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      Copy address
                    </>
                  )}
                </button>

                {/* BscScan Button */}
                <a
                  href={BSCSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-[13.5px] font-semibold text-gray-900 transition-all duration-300 hover:border-gold hover:text-gold-ink dark:border-white/20 dark:text-white dark:hover:border-gold dark:hover:text-gold-light"
                >
                  View on BscScan
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}