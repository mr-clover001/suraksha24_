import { MapPin, Navigation } from "lucide-react";
import { contact, serviceAreas } from "@/config/site";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;

export default function WhereWeCare() {
  return (
    <Section
      tone="cream"
      eyebrow="Where we care"
      heading="Rooted in Kolkata, wherever you need us"
      subheading="Based in Salt Lake, our nurses and caregivers reach families across Kolkata and its neighbouring areas."
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sage-light/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <FadeIn>
          <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-forest-light to-forest p-8 text-cream shadow-soft-lg ring-1 ring-inset ring-cream/10 transition-shadow duration-500 hover:shadow-[0_28px_60px_-16px_rgba(0,0,0,0.45)] sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-sage-light/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
            />
            {/* Glass sheen sweep */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[250%] -skew-x-12 bg-linear-to-r from-transparent via-cream/15 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[450%]"
            />

            <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-cream/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-linear-to-b from-cream/25 to-transparent"
              />
              <MapPin className="relative h-6 w-6 text-gold" aria-hidden="true" />
            </span>
            <p className="relative mt-6 text-xs font-semibold uppercase tracking-wide text-gold">
              Our office
            </p>
            <p className="relative mt-2 font-display text-xl leading-snug text-cream">
              {contact.address}
            </p>
            <p className="relative mt-4 inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-2 text-sm text-cream/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <span className="h-2 w-2 rounded-full bg-sage-light" aria-hidden="true" />
              {contact.availability}
            </p>
            <div className="relative mt-7">
              <Button href={directionsUrl} variant="outline-light" size="md" external>
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get directions
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">{serviceAreas.length} areas covered &amp; growing</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-forest/10 bg-linear-to-b from-white to-surface-alt px-4 py-2.5 text-sm font-medium text-forest shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(11,59,74,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-gold/40 hover:from-gold/15 hover:to-gold/5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_14px_28px_-8px_rgba(15,118,110,0.45)]"
              >
                {/* Glossy sheen sweep on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -translate-x-[250%] -skew-x-12 bg-linear-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[550%]"
                />
                <MapPin
                  className="relative h-3.5 w-3.5 text-gold/70 transition-colors duration-300 group-hover:text-gold"
                  aria-hidden="true"
                />
                <span className="relative">{area}</span>
              </span>
            ))}
          </div>
          <p className="mt-7 text-sm leading-relaxed text-muted">
            Don&rsquo;t see your parents&rsquo; neighbourhood listed? Tell us on the first call
            — we&rsquo;ll confirm coverage and response times right away.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
