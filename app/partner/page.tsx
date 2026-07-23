import type { Metadata } from "next";
import Image from "next/image";
import {
  Clock3,
  Handshake,
  Send,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { contact, partnerHero, siteConfig } from "@/config/site";
import { publicFileExists } from "@/lib/publicFileExists";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import HeroFallback from "@/components/ui/HeroFallback";
import CtaBanner from "@/components/ui/CtaBanner";
import PartnerBenefits from "@/components/partner/PartnerBenefits";
import PartnershipTypes from "@/components/partner/PartnershipTypes";
import PartnerProcess from "@/components/partner/PartnerProcess";
import PartnerInquiryForm from "@/components/forms/PartnerInquiryForm";
import PartnerLogoMarquee from "@/components/ui/PartnerLogoMarquee";

const inquiryReassurances = [
  {
    icon: Clock3,
    title: "Answered within 1 working day",
    body: "A real member of our partnerships team responds personally — every enquiry, every time.",
  },
  {
    icon: UserRoundCheck,
    title: "One dedicated contact",
    body: "You get a named partnerships lead who knows your organization, not a rotating inbox.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential, no obligation",
    body: "Sharing your details starts a conversation. Terms are only agreed once you're ready.",
  },
];

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Suraksha24 — hospitals, diagnostic labs, doctors, corporates, community organizations and medical tourism facilitators referring patients to verified home healthcare in Kolkata.",
  alternates: { canonical: `${siteConfig.url}/partner` },
};

const HERO_IMAGE = "/assests/PartnerWallpaper.jpg";

export default function PartnerPage() {
  const hasHeroImage = publicFileExists(HERO_IMAGE);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 -z-20">
          {hasHeroImage ? (
            <Image
              src={HERO_IMAGE}
              alt="Close-up of two people shaking hands across a table, sealing a partnership agreement"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[52%_58%]"
            />
          ) : (
            <HeroFallback icon={Handshake} className="h-full w-full" />
          )}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/30 to-black/20"
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeIn>
            <div className="max-w-xl">
              <p className="eyebrow mb-6 text-sage-light">
                {partnerHero.eyebrow}
              </p>
              <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-cream sm:text-5xl">
                One trusted home-care{" "}
                <span className="bg-linear-to-r from-teal via-sage to-sage-light bg-clip-text text-transparent font-bold [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]">
                  partner
                </span>
                , for everyone you refer
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-cream/90">
                {partnerHero.body}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  href="#partner-inquiry"
                  size="lg"
                  className="bg-linear-to-r from-forest via-forest-light via-60% to-teal text-cream hover:brightness-110 hover:shadow-soft-lg"
                >
                  <Handshake className="h-4 w-4" aria-hidden="true" />
                  Start a partnership
                </Button>
                <Button
                  href="#partnership-types"
                  variant="outline-light"
                  size="lg"
                >
                  See partnership types
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section
        tone="cream"
        eyebrow="Our network"
        heading="Hospitals and clinics we already work with"
        subheading="A glimpse of the referral network Suraksha24 is trusted to carry care through — your organization could be next."
        className="py-14 sm:py-16"
      >
        <FadeIn>
          <PartnerLogoMarquee />
        </FadeIn>
      </Section>

      <PartnerBenefits />

      <PartnershipTypes />

      <PartnerProcess />

      <Section
        id="partner-inquiry"
        tone="cream"
        className="relative overflow-hidden"
      >
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
              <p className="eyebrow mb-4 text-sage-light">Why reach out</p>
              <p className="font-display text-2xl leading-snug">
                Every partnership starts with a real conversation — not a ticket
                number.
              </p>

              <ul className="mt-9 space-y-5">
                {inquiryReassurances.map((item) => (
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
                <p className="eyebrow">Start a partnership</p>
              </div>
              <h2 className="font-display mt-4 text-2xl leading-snug text-forest sm:text-[1.75rem]">
                Tell us about your organization
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Our partnerships team will respond within one working day to set
                up an introductory call.
              </p>
              <div className="mt-8 rounded-3xl border border-forest/8 bg-surface p-6 shadow-soft sm:p-8">
                <PartnerInquiryForm tone="light" />
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <CtaBanner
        eyebrow="Prefer to talk first?"
        heading="Speak directly with our partnerships team"
        body="Call or WhatsApp us — no forms required to start the conversation."
        primaryLabel="Call us"
        primaryHref={contact.phoneHref}
        secondaryLabel="WhatsApp us"
        secondaryHref={contact.whatsappHref}
        secondaryExternal
      />
    </>
  );
}
