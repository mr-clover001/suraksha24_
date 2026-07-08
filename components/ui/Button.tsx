import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline-light" | "ghost" | "gold";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-forest-light shadow-soft",
  secondary:
    "bg-transparent text-forest border border-forest/25 hover:border-forest/60 hover:bg-forest/5",
  "outline-light":
    "bg-transparent text-cream border border-cream/40 hover:bg-cream/10",
  ghost: "bg-transparent text-forest hover:bg-forest/5",
  gold: "bg-gold text-forest hover:bg-gold/90 shadow-soft",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href">;

type ButtonAsButton = BaseProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

/**
 * Single Button component for the whole site. Renders a Next.js <Link> for
 * internal paths (`/`, `#anchor`), a plain <a> for external/tel/mailto/wa.me
 * links, or a native <button> when no href is given (e.g. form submit).
 */
export default function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, external, ...anchorProps } = props;
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  const { ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
