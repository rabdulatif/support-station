import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "white" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-[0_10px_24px_-8px_rgba(37,99,235,0.55)]",
  outline:
    "bg-white text-brand-600 ring-1 ring-inset ring-brand-200 hover:ring-brand-400 hover:bg-brand-50",
  white:
    "bg-white text-brand-600 hover:bg-brand-50 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.35)]",
  ghost:
    "bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 hover:bg-brand-100",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  as?: "button" | "a";
  href?: string;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  as = "button",
  href,
  className = "",
  children,
  ...props
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === "a") {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
