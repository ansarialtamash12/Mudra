"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  from?: "up" | "left" | "right";
  delay?: number;
};

// Fades and slides content in once it scrolls into view.
export default function Reveal({ children, className = "", from = "up", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden =
    from === "left" ? "-translate-x-8" : from === "right" ? "translate-x-8" : "translate-y-8";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out ${
        shown ? "translate-x-0 translate-y-0 opacity-100" : `${hidden} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
}
