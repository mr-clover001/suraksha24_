import { ArrowRight, ClipboardCheck, FileSignature, PhoneCall, Users, type LucideIcon } from "lucide-react";
import { partnerProcess } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

const icons: LucideIcon[] = [PhoneCall, FileSignature, ClipboardCheck, Users];

export default function PartnerProcess() {
  return (
    <Section
      tone="cream"
      eyebrow="How it works"
      heading="From first call to a working referral relationship"
      subheading="A straightforward process, with a dedicated contact from day one."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {partnerProcess.map((item, index) => {
          const Icon = icons[index] ?? PhoneCall;
          const isLast = index === partnerProcess.length - 1;
          return (
            <FadeIn key={item.step} delay={index * 80}>
              <div className="group relative h-full rounded-2xl border border-forest/8 bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                <span
                  aria-hidden="true"
                  className="font-display pointer-events-none absolute right-5 top-4 text-5xl leading-none text-gold/10"
                >
                  {item.step}
                </span>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-sage-light shadow-soft">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  <span className="absolute -bottom-2 -right-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-gold px-1.5 text-[11px] font-semibold text-cream ring-4 ring-surface">
                    {index + 1}
                  </span>
                </div>

                <h3 className="font-display relative mt-6 text-lg text-forest">{item.title}</h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-muted">{item.body}</p>

                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-6 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-forest/10 bg-cream text-gold/70 shadow-soft lg:flex"
                  >
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
