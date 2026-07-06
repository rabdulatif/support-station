export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "dark" ? "text-ink" : "text-white";
  return (
    <a href="#home" className="inline-flex items-center gap-2.5">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width="34" height="34" rx="9" fill="#2563EB" />
        <path
          d="M22.5 12.2c-1.1-1-2.9-1.7-5.1-1.7-3.4 0-5.6 1.4-5.6 3.6 0 5.1 9.9 2.6 9.9 6.3 0 1-1.2 1.7-3.1 1.7-1.9 0-3.4-.7-4.4-1.7"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span className={`text-[17px] font-extrabold leading-none tracking-tight ${textColor}`}>
        Support
        <br />
        <span className="text-brand-500">Station</span>
      </span>
    </a>
  );
}
