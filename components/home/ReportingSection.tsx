import { CheckCircle2 } from "lucide-react";
import { trustStats } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import ReportCardMockup from "@/components/home/ReportCardMockup";

const reportHighlights = [
  "Sent after every single visit — never optional, never delayed",
  "Flags anything unusual immediately, not at the next scheduled call",
  "Structured and consistent — not a text message left to interpret",
];

const reportStat =
  trustStats.find((stat) => stat.label.includes("Report")) ?? trustStats[0];

export default function ReportingSection() {
  return (
    <Section
      tone="cream"
      containerClassName="max-w-7xl"
      className="relative overflow-hidden"
    >
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-sage-light/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      /> */}

      <div className="relative grid items-center gap-16 lg:grid-cols-2">
        <FadeIn>
          <p className="eyebrow mb-4">Reassurance, documented</p>
          <h2 className="font-display text-3xl leading-[1.15] tracking-tight text-forest sm:text-4xl lg:text-[2.75rem]">
            Every visit, documented. Every update, to you.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            After each visit you receive a structured report — vitals,
            medication, physiotherapy progress, general wellbeing, and any
            concerns flagged early. No chasing, no guessing. Just the
            reassurance of knowing.
          </p>

          <ul className="mt-8 space-y-4">
            {reportHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-sage-light">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-[15px] leading-relaxed text-forest/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="relative mx-auto flex max-w-sm items-center justify-center py-8 lg:max-w-none lg:py-0">
            <div
              aria-hidden="true"
              className="absolute h-72 w-72 rounded-full bg-sage-light/25 blur-3xl sm:h-80 sm:w-80"
            />
            <div
              aria-hidden="true"
              className="absolute h-88 w-88 rounded-full border border-dashed border-forest/10 sm:h-104 sm:w-104"
            />

            <div className="relative -rotate-8 transition-transform duration-500 ease-out hover:rotate-0">
              <ReportCardMockup />
            </div>

            <div className="absolute -left-3 top-8 flex items-center gap-2 rounded-2xl border border-forest/8 bg-surface px-4 py-3 shadow-soft-lg sm:-left-3">
              <CheckCircle2 className="h-4 w-4 text-gold" aria-hidden="true" />
              <span className="text-xs font-medium text-forest">
                Sent within hours
              </span>
            </div>

            <div className="absolute -right-2 bottom-10 rounded-2xl border border-forest/8 bg-surface px-4 py-3 text-center shadow-soft-lg sm:-right-6">
              <p className="font-display text-lg leading-none text-forest">
                {reportStat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-muted">
                {reportStat.label}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
