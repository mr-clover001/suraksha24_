import type { HTMLAttributes, OlHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/**
 * Shared typography for legal pages (Terms, Privacy, Refund & Cancellation).
 * Mirrors components/blog/mdxComponents.tsx so policy pages read consistently
 * with blog articles, without pulling in a typography plugin.
 */

export function H2({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "font-display mt-12 mb-4 scroll-mt-28 text-2xl leading-snug text-forest sm:text-[1.75rem]",
        className
      )}
      {...props}
    />
  );
}

export function H3({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-display mt-9 mb-3 scroll-mt-28 text-xl leading-snug text-forest", className)}
      {...props}
    />
  );
}

export function P({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("my-5 text-[17px] leading-[1.8] text-forest/90", className)} {...props} />;
}

export function UL({ className, ...props }: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn("my-5 ml-5 list-disc space-y-2 text-[17px] leading-[1.8] text-forest/90", className)}
      {...props}
    />
  );
}

export function OL({ className, ...props }: OlHTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className={cn("my-5 ml-5 list-decimal space-y-2 text-[17px] leading-[1.8] text-forest/90", className)}
      {...props}
    />
  );
}

export function LI({ className, ...props }: HTMLAttributes<HTMLLIElement>) {
  return <li className={cn("pl-1", className)} {...props} />;
}

export function Note({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "my-8 rounded-xl border border-forest/10 bg-forest/[0.03] p-5 text-sm leading-relaxed text-forest/70",
        className
      )}
      {...props}
    />
  );
}
