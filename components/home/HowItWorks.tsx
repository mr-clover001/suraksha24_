"use client";

import { useEffect, useState } from "react";
import {
  Phone,
  UserCheck,
  ClipboardCheck,
  Siren,
  type LucideIcon,
} from "lucide-react";
import { howItWorks } from "@/config/site";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const icons: LucideIcon[] = [Phone, UserCheck, ClipboardCheck, Siren];
const AUTO_ADVANCE_MS = 5000;
const stepDetails = [
  {
    label: "Initial assessment",
    description:
      "We begin with a calm conversation and a practical home assessment. Our team understands your parent's medical condition, daily routine, mobility, medicines, food habits and family expectations before recommending any care plan.",
    points: [
      "Health and home review",
      "Care needs mapped clearly",
      "Plan shared with family",
    ],
  },
  {
    label: "Single point of coordination",
    description:
      "A dedicated care manager becomes your family's reliable point of contact. They coordinate nurses, caregivers, doctors, medicines, equipment and follow-ups so you are not managing multiple people from another city or country.",
    points: [
      "One accountable care manager",
      "Staff and schedules coordinated",
      "Family kept informed",
    ],
  },
  {
    label: "Transparent family updates",
    description:
      "After every visit, you receive a clear update with what was done, how your parent is feeling, key vitals, concerns noticed and the next recommended action. The goal is simple: you should feel present even when you are far away.",
    points: [
      "Visit summary after care",
      "Vitals and observations",
      "Next steps documented",
    ],
  },
  {
    label: "Urgent support when needed",
    description:
      "If an emergency happens, we help coordinate the response end to end: ambulance, hospital admission, paperwork, doctor communication and family updates. We stay involved until the situation is stable and the family has clarity.",
    points: [
      "Ambulance and admission help",
      "Hospital coordination",
      "Updates until stable",
    ],
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);

  useEffect(() => {
    if (!autoAdvance) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % howItWorks.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [autoAdvance, active]);

  function selectStep(index: number) {
    setActive(index);
    setAutoAdvance(false);
  }

  const ActiveIcon = icons[active];
  const activeStep = howItWorks[active];
  const activeDetail = stepDetails[active];

  return (
    <Section
      id="how-it-works"
      tone="cream"
      eyebrow="How it works"
      heading="Care, coordinated from the very first call"
      subheading="Four steps between a phone call today and reassurance that lasts."
    >
      <div className="grid items-stretch gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-6">
        <div className="relative flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-3 lg:overflow-visible lg:pb-0">
          {howItWorks.map((item, index) => {
            const isActive = index === active;
            const StepIcon = icons[index];
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => selectStep(index)}
                aria-pressed={isActive}
                className={cn(
                  "group relative flex w-[17rem] flex-shrink-0 items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all duration-300 lg:w-auto lg:flex-shrink lg:py-4",
                  isActive
                    ? "border-forest bg-forest shadow-soft-lg"
                    : "border-forest/8 bg-surface hover:border-gold/25 hover:bg-sage-light/20 hover:shadow-soft",
                )}
              >
                <span
                  className={cn(
                    "relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    isActive
                      ? "border-gold/40 bg-gold text-forest shadow-[0_12px_28px_rgba(184,147,74,0.24)]"
                      : "border-forest/10 bg-sage-light/35 text-forest group-hover:border-gold/30 group-hover:bg-gold/15",
                  )}
                  aria-hidden="true"
                >
                  <StepIcon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block text-[11px] font-semibold uppercase leading-none tracking-wide transition-colors duration-300",
                      isActive ? "text-gold" : "text-gold/70",
                    )}
                  >
                    Step {index + 1}
                  </span>
                  <span
                    className={cn(
                      "mt-2 block text-sm font-semibold leading-snug transition-colors duration-300",
                      isActive ? "text-cream" : "text-forest/80",
                    )}
                  >
                    {item.title}
                  </span>
                  <span
                    className={cn(
                      "mt-1 hidden text-xs leading-relaxed transition-colors duration-300 sm:block",
                      isActive ? "text-cream/65" : "text-muted",
                    )}
                  >
                    {item.body}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-forest text-cream shadow-soft-lg">
          <div className="relative z-10 flex min-h-[27rem] flex-col justify-between p-7 sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-16 -z-10 h-64 w-64 rounded-full bg-sage-light/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 right-8 -z-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
            />

            <div key={active} className="animate-step-fade">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream/10">
                    <ActiveIcon
                      className="h-5 w-5 text-sage-light"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-gold">
                    {activeDetail.label}
                  </p>
                  <h3 className="font-display mt-3 max-w-xl text-3xl leading-tight text-cream sm:text-4xl">
                    {activeStep.title}
                  </h3>
                </div>
                <p className="font-display text-5xl leading-none text-gold/50 sm:text-6xl">
                  {activeStep.step}
                </p>
              </div>

              <p className="mt-7 max-w-2xl text-[16px] leading-[1.85] text-cream/78">
                {activeDetail.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {activeDetail.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-cream/12 bg-cream/7 px-4 py-3"
                  >
                    <span className="block h-1.5 w-8 rounded-full bg-gold/80" />
                    <p className="mt-3 text-sm font-medium leading-snug text-cream/85">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-9 flex gap-2">
              {howItWorks.map((item, index) => (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => selectStep(index)}
                  aria-label={`Show step ${item.step}: ${item.title}`}
                  aria-pressed={index === active}
                  className="h-1.5 flex-1 overflow-hidden rounded-full bg-cream/15"
                >
                  {index === active && autoAdvance && (
                    <span
                      key={active}
                      className="animate-step-progress block h-full rounded-full bg-gold"
                      style={{ animationDuration: `${AUTO_ADVANCE_MS}ms` }}
                    />
                  )}
                  {index === active && !autoAdvance && (
                    <span className="block h-full rounded-full bg-gold" />
                  )}
                  {index < active && (
                    <span className="block h-full rounded-full bg-gold/40" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
