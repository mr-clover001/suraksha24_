import { ArrowRight } from "lucide-react";
import { partnerLogos } from "@/config/site";
import { publicFileExists } from "@/lib/publicFileExists";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import PartnerLogoMarquee from "@/components/ui/PartnerLogoMarquee";

export default function PartnerLogos() {
  const hasAnyRealLogo = partnerLogos.some((entry) =>
    publicFileExists(entry.logo),
  );

  return (
    <Section
      tone="cream"
      eyebrow="Our partners"
      heading="Hospitals and organizations we work alongside"
      subheading="Referral partners across Kolkata trust Suraksha24 to carry care through — from discharge to full recovery."
    >
      <FadeIn>
        <PartnerLogoMarquee />
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
