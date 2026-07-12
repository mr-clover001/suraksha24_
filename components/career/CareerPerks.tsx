import {
  Clock3,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { careerPerks } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";

const icons: Record<string, LucideIcon> = {
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  Clock3,
  HeartHandshake,
  Users,
};

export default function CareerPerks() {
  return (
    <Section
      tone="cream"
      eyebrow="Why work with us"
      heading="A team that trains you, backs you, and grows with you"
      subheading="We hire for the long term — which means investing in training, supervision and real career paths from day one."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {careerPerks.map((perk, index) => {
          const Icon = icons[perk.icon] ?? HeartHandshake;
          return (
            <FadeIn key={perk.title} delay={(index % 3) * 80}>
              <Card className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-sage-light">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="font-display mt-5 text-lg text-forest">{perk.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{perk.body}</p>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
