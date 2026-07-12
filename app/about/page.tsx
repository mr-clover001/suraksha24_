import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, MapPin, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Suraksha24 is a Kolkata-based home healthcare team built for one specific gap: families whose elderly parents live in India while they live abroad.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const values = [
  {
    icon: HeartHandshake,
    title: "Care, not just coverage",
    body: "We measure success by whether your parents feel looked after — not just whether a visit was logged.",
  },
  {
    icon: PhoneCall,
    title: "One point of contact",
    body: "A single dedicated care manager, reachable directly, so nothing gets lost between departments.",
  },
  {
    icon: MapPin,
    title: "Rooted in Kolkata",
    body: "We're based where your parents are — not a call centre routing requests to a city we don't know.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/assests/AboutUsBackGround.webp"
            alt="An adult son stands with a hand on his elderly father's shoulder as they look out through a sunlit window at home"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[64%_35%]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/100 via-black/60 to-black/30"
        />

        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sage-light/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
        /> */}

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeIn>
            <div className="max-w-xl">
              <p className="eyebrow mb-6">Our story</p>
              <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-cream sm:text-5xl">
                Why Suraksha24 Exists
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-cream/90">
                We&rsquo;ve all had that moment — a parent who needs care, and
                not knowing where to begin. The hospital feels too clinical.
                Hiring help on your own feels uncertain. That gap, between worry
                and trust, is exactly where Suraksha24 steps in.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" variant="gold" size="lg">
                  Talk to a care advisor
                </Button>
                <Button href="/services" variant="outline-light" size="lg">
                  See our services
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section tone="cream" className="pt-20 pb-16 sm:pt-24">
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
            <p>
              We bring together trained nurses, physiotherapists, caregivers,
              and complete medical equipment — all coordinated, all verified,
              all under one roof. So instead of managing ten different things
              during an already stressful time, you make one call.
            </p>
            <p className="font-display border-l-2 border-gold/50 pl-6 text-xl italic leading-snug text-forest">
              Because when it comes to family, &ldquo;good enough&rdquo; was
              never going to be good enough for us either.
            </p>
            <p>
              <span className="font-display font-medium text-forest">
                One call. It&rsquo;s handled.
              </span>{" "}
              Whether it&rsquo;s routine nursing or an urgent need at 3am, our
              team is ready around the clock.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section
        tone="surface"
        eyebrow="What we believe"
        heading="A few things we don't compromise on"
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 80}>
              <Card className="h-full text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-light/40">
                  <value.icon
                    className="h-5 w-5 text-forest"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display mt-4 text-lg text-forest">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.body}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" size="lg">
            Talk to a care advisor
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            See our services
          </Button>
        </div>
      </Section>
    </>
  );
}
