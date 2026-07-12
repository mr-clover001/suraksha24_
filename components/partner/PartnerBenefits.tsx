import { BadgeCheck, Clock3, FileText, Handshake, type LucideIcon } from "lucide-react";
import { partnerBenefits } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

const icons: Record<string, LucideIcon> = {
  BadgeCheck,
  Clock3,
  FileText,
  Handshake,
};

export default function PartnerBenefits() {
  return (
    <Section
      tone="cream"
      eyebrow="Why partner with us"
      heading="A home-care partner your patients and members can actually trust"
      subheading="We treat every referral as an extension of your own reputation — clinically supervised, reported on, and followed through."
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {partnerBenefits.map((benefit, index) => {
          const Icon = icons[benefit.icon] ?? Handshake;
          return (
            <FadeIn key={benefit.title} delay={index * 80}>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-light/40">
                  <Icon className="h-5 w-5 text-forest" aria-hidden="true" />
                </div>
                <h3 className="font-display mt-4 text-base text-forest">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.body}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
