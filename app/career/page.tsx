import type { Metadata } from "next";
import Image from "next/image";
import {
  Briefcase,
  Clock3,
  Send,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { careerHero, contact, siteConfig } from "@/config/site";
import { publicFileExists } from "@/lib/publicFileExists";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import HeroFallback from "@/components/ui/HeroFallback";
import CtaBanner from "@/components/ui/CtaBanner";
import CareerPerks from "@/components/career/CareerPerks";
import OpenPositions from "@/components/career/OpenPositions";
import HiringProcess from "@/components/career/HiringProcess";
import CareerApplyForm from "@/components/forms/CareerApplyForm";

const applyReassurances = [
  {
    icon: Clock3,
    title: "Reviewed within a few working days",
    body: "Every application is read personally by our HR team — no automated filtering, no black hole.",
  },
  {
    icon: UserRoundCheck,
    title: "A real screening conversation",
    body: "Shortlisted candidates get a phone call from a person, not a canned rejection email.",
  },
  {
    icon: ShieldCheck,
    title: "A fair, transparent process",
    body: "Clear steps and honest timelines from application to offer — no surprises along the way.",
  },
];

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Suraksha24's home healthcare team in Kolkata — nurses, physiotherapists, caregivers and care coordinators. Structured training, verified teams, real career growth.",
  alternates: { canonical: `${siteConfig.url}/career` },
};

const HERO_IMAGE = "/assests/CareerBgWallpaper.jpg";

export default function CareerPage() {
  const hasHeroImage = publicFileExists(HERO_IMAGE);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 -z-20">
          {hasHeroImage ? (
            <Image
              src={HERO_IMAGE}
              alt="Blurred view of a team seated together in a sunlit office lobby at sunset"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[60%_60%]"
            />
          ) : (
            <HeroFallback icon={Briefcase} className="h-full w-full" />
          )}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/20"
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeIn>
            <div className="max-w-xl">
              <p className="eyebrow mb-6 text-sage-light">
                {careerHero.eyebrow}
              </p>
              <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-cream sm:text-5xl">
                Build a{" "}
                <span className="bg-linear-to-r from-teal via-sage to-sage-light bg-clip-text text-transparent font-bold [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]">
                  career
                </span>{" "}
                that shows up for families
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-cream/90">
                {careerHero.body}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  href="#open-positions"
                  size="lg"
                  className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium tracking-wide shadow-soft transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                  View open positions
                </Button>
                <Button href="#apply" variant="outline-light" size="lg">
                  Apply now
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CareerPerks />

      <OpenPositions />

      <HiringProcess />

      <Section id="apply" tone="cream" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-sage-light/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <FadeIn>
            <div className="rounded-3xl bg-linear-to-r from-forest via-forest-light via-60% to-teal p-8 text-cream shadow-soft-lg sm:p-10 lg:p-11">
              <p className="eyebrow mb-4 text-sage-light">Why apply</p>
              <p className="font-display text-2xl leading-snug">
                Every application is read by a real person on our HR team —
                never a bot.
              </p>

              <ul className="mt-9 space-y-5">
                {applyReassurances.map((item) => (
                  <li key={item.title} className="flex items-start gap-3.5">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cream/10">
                      <item.icon
                        className="h-5 w-5 text-sage-light"
                        aria-hidden="true"
                      />
                    </span>
                    <span>
                      <span className="block font-medium text-cream">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-cream/70">
                        {item.body}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-sm text-cream/90">
                <span
                  className="h-2 w-2 rounded-full bg-sage-light"
                  aria-hidden="true"
                />
                {contact.availability}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Send className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="eyebrow">Apply now</p>
              </div>
              <h2 className="font-display mt-4 text-2xl leading-snug text-forest sm:text-[1.75rem]">
                Tell us about yourself
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Takes about five minutes. Our HR team reviews every application
                personally.
              </p>
              <div className="mt-8 rounded-3xl border border-forest/8 bg-surface p-6 shadow-soft sm:p-8">
                <CareerApplyForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <CtaBanner
        eyebrow="Have questions first?"
        heading="Talk to our HR team before you apply"
        body="Prefer a conversation to a form? Call us directly and we'll walk you through open roles and what to expect."
        primaryLabel="Call HR"
        primaryHref={contact.phoneHref}
        secondaryLabel="WhatsApp us"
        secondaryHref={contact.whatsappHref}
        secondaryExternal
      />
    </>
  );
}
