import type { IconName } from "@/lib/content";

const paths: Record<IconName | "check" | "contactless", React.ReactNode> = {
  transfer: <path d="M4 8h14M14 4l4 4-4 4M20 16H6M10 12l-4 4 4 4" />,
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="3" />
      <path d="M3 10h18M16 14.5h2" />
    </>
  ),
  people: (
    <>
      <circle cx="8" cy="9" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M2.5 19c.6-3 3-4.5 5.5-4.5s4.9 1.5 5.5 4.5M15 15c2.6-.3 4.9.8 6 3.5" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="3" />
      <path d="M2.5 10h19M6 15h4" />
    </>
  ),
  star: <path d="M12 3l2.4 5.2 5.6.7-4.1 3.9 1.1 5.6L12 15.6 7 18.4l1.1-5.6L4 8.9l5.6-.7z" />,
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  check: <path d="M5 12l5 5 9-10" />,
  contactless: <path d="M8 8c2 2.5 2 5.5 0 8M12 5.5c3.4 3.9 3.4 9.1 0 13M16 3c4.7 5.3 4.7 12.7 0 18" />,
};

export default function Icon({
  name,
  size = 24,
  strokeWidth = 1.8,
  className,
}: {
  name: IconName | "check" | "contactless";
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
