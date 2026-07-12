import Image from "next/image";
import { ArrowRight, Building2 } from "lucide-react";
import { partnerLogos, type PartnerLogoEntry } from "@/config/site";
import { publicFileExists } from "@/lib/publicFileExists";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

function LogoChip({ entry }: { entry: PartnerLogoEntry }) {
  const hasLogo = publicFileExists(entry.logo);

  return (
    <li className="mx-3 flex h-20 w-52 flex-shrink-0 items-center justify-center rounded-2xl border border-forest/8 bg-surface px-6 shadow-soft">
      {hasLogo ? (
        <div className="relative h-10 w-full">
          <Image
            src={entry.logo}
            alt={entry.name}
            fill
            sizes="200px"
            className="object-contain"
          />
        </div>
      ) : (
        <span className="flex items-center gap-2 text-center text-sm font-medium text-forest/70">
          <Building2
            className="h-4 w-4 flex-shrink-0 text-gold"
            aria-hidden="true"
          />
          {entry.name}
        </span>
      )}
    </li>
  );
}

/**
 * Auto-scrolling "trusted by" logo marquee for the homepage. The track list
 * is duplicated once and the CSS animation translates by exactly -50%, so
 * the loop is seamless — pauses entirely under prefers-reduced-motion.
 */
export default function PartnerLogos() {
  const hasAnyRealLogo = partnerLogos.some((entry) =>
    publicFileExists(entry.logo),
  );
  const track = [...partnerLogos, ...partnerLogos];

  return (
    <Section
      tone="cream"
      eyebrow="Our partners"
      heading="Hospitals and organizations we work alongside"
      subheading="Referral partners across Kolkata trust Suraksha24 to carry care through — from discharge to full recovery."
    >
      <FadeIn>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="animate-marquee flex w-max items-center py-2">
            {track.map((entry, index) => (
              <LogoChip key={`${entry.slug}-${index}`} entry={entry} />
            ))}
          </ul>
        </div>
      </FadeIn>

      {!hasAnyRealLogo && (
        <p className="mt-2 text-center text-xs text-muted/70">
          *Illustrative partner network, shown as a placeholder — to be updated
          with real logos.
        </p>
      )}

      <div className="mt-10 text-center">
        <Button href="/partner" variant="gold" size="lg">
          Become a partner
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}
