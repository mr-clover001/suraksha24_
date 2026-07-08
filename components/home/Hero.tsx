import Image from "next/image";
import { contact } from "@/config/site";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import HeroVisual from "@/components/home/HeroVisual";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assests/HeroBackground.webp"
          alt="Two hands clasped together — a young hand gently holding an elderly hand"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_center]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/45 to-black/25"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sage-light/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
              <p className="eyebrow mb-6">
                Home health care, coordinated
              </p>
              <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-cream sm:text-5xl lg:text-[3.4rem]">
                Protection that never sleeps, care that never stops
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cream lg:mx-0">
                Nurses, physiotherapists, caregivers, ICU-grade equipment and
                24×7 emergency support all under one roof. Suraksha24 brings
                background-verified, trained care to your loved ones wherever
                you are in the world. One call, and it&rsquo;s handled.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button href="#contact" variant="gold" size="lg">
                  Talk to a care advisor
                </Button>
                <Button href="#how-it-works" variant="outline-light" size="lg">
                  See how it works
                </Button>
              </div>
              <div className="mt-7 space-y-1.5 text-sm text-cream">
                <p>
                  <a href={contact.phoneHref} className="hover:text-cream/80">
                    24/7 Care Line: {contact.phoneDisplay}
                  </a>
                </p>
                <p className="text-cream/80">
                  Licensed &amp; Insured · Trusted by 500+ Families
                </p>
              </div>
            </div>
          </FadeIn>

          {/* <FadeIn delay={150}>
            <HeroVisual />
          </FadeIn> */}
        </div>
      </div>
    </section>
  );
}
