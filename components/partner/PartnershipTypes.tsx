import {
  Building2,
  FlaskConical,
  Globe2,
  Handshake,
  MapPinned,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { partnershipTypes } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";

const icons: Record<string, LucideIcon> = {
  Building2,
  FlaskConical,
  Stethoscope,
  Handshake,
  Globe2,
  MapPinned,
};

export default function PartnershipTypes() {
  return (
    <Section
      id="partnership-types"
      tone="surface"
      eyebrow="Who we partner with"
      heading="Built for every kind of referral relationship"
      subheading="Whichever type of organization you represent, we tailor the partnership to how your patients, employees or members actually need help."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partnershipTypes.map((type, index) => {
          const Icon = icons[type.icon] ?? Handshake;
          return (
            <FadeIn key={type.slug} delay={(index % 3) * 80}>
              <Card className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-sage-light">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="font-display mt-5 text-lg text-forest">{type.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{type.description}</p>
                <ul className="mt-5 space-y-2 border-t border-forest/8 pt-5">
                  {type.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-forest/85">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
