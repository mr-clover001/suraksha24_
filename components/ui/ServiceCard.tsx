import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
  HeartHandshake,
  Activity,
  Siren,
  HeartPulse,
  Wrench,
  FlaskConical,
  Plane,
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
  "international-patient-services": Plane,
};

/** Service card: icon, title, summary and a "Read more" link — used on the home page carousel and /services index. */
export default function ServiceCard({
  service,
  href,
  className,
}: ServiceCardProps) {
  const Icon = icons[service.slug] ?? Stethoscope;

  const content = (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-forest via-forest-light via-60% to-teal text-cream hover:brightness-110 hover:shadow-soft-lg transition-transform duration-300 group-hover:-translate-y-0.5">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </div>

      <h3 className="font-display mt-5 text-lg leading-snug text-forest">
        {service.title}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        {service.summary}
      </p>

      {href && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
          Read more
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      )}
    </>
  );

  const classes = cn(
    "group flex h-full flex-col rounded-2xl border border-forest/12 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-soft-lg",
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
