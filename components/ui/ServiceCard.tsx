import Link from "next/link";
import {
  ArrowUpRight,
  Stethoscope,
  HeartHandshake,
  Activity,
  Siren,
  HeartPulse,
  Wrench,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/config/site";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  service: Service;
  href?: string;
  className?: string;
};

const icons: Record<string, LucideIcon> = {
  "skilled-nursing-care": Stethoscope,
  "companion-care": HeartHandshake,
  physiotherapy: Activity,
  "emergency-response": Siren,
  "home-icu": HeartPulse,
  "medical-equipment": Wrench,
  diagnostics: FlaskConical,
};

/** Premium numbered service card used on the home page grid and /services index. */
export default function ServiceCard({
  service,
  href,
  className,
}: ServiceCardProps) {
  const Icon = icons[service.slug] ?? Stethoscope;

  const content = (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/10"
      />

      <div className="relative flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-sage-light shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-gold group-hover:text-forest">
          <Icon className="h-4.5 w-4.5" strokeWidth={1.75} aria-hidden="true" />
        </div>
        <span className="font-display mt-1 text-4xl text-sage-light/60 transition-colors duration-300 group-hover:text-gold/60">
          {service.number}
        </span>
      </div>

      <h3 className="font-display relative mt-5 text-lg leading-snug text-forest">
        {service.title}
      </h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-muted">
        {service.summary}
      </p>

      {href && (
        <div className="relative mt-5 flex items-center justify-between border-t border-forest/8 pt-4">
          <span className="relative text-xs font-semibold uppercase tracking-[0.12em] text-gold">
            Read more
            <span
              aria-hidden="true"
              className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 ease-out group-hover:w-full"
            />
          </span>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-300 ease-out group-hover:scale-[1.15] group-hover:border-gold group-hover:bg-gold group-hover:text-white group-hover:shadow-[0_6px_18px_-4px_rgba(184,147,74,0.55)]">
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      )}
    </>
  );

  const classes = cn(
    "group relative flex flex-col overflow-hidden rounded-2xl border border-forest/8 bg-surface px-6 py-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/25 hover:shadow-soft-lg",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
