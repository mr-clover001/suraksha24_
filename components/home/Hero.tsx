import Image from "next/image";
import { contact } from "@/config/site";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden pt-28 pb-16 sm:min-h-[85vh] sm:pt-32 lg:min-h-[80vh] lg:pt-28">
      <div className="absolute inset-0 -z-20">
        {/* Desktop & Tablet */}

        <Image
          src="/assests/HeroBackground.webp"
          alt="Two hands clasped together — a young hand gently holding an elderly hand"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[30%_center] md:block"
        />

        {/* Mobile */}

        <Image
          src="/assests/MobileHeroWallpaper.jpg"
          alt="Two hands clasped together — a young hand gently holding an elderly hand"
          fill
          priority
          sizes="100vw"
          className="block object-cover object-center md:hidden"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-black/20 sm:via-black/50 to-black/30"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="max-w-xl lg:mx-auto lg:max-w-2xl text-center">
          <FadeIn>
            <p className="eyebrow mb-6 text-sage-light">
              Home health care, coordinated
            </p>
            <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              <span className="bg-linear-to-r from-teal via-sage to-sage-light bg-clip-text text-transparent font-bold [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]">
                Protection
              </span>{" "}
              that never sleeps, care that never stops
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-white/90">
              Nurses, physiotherapists, caregivers and 24×7 emergency response —
              coordinated by one dedicated care manager, wherever you are in the
              world.
              {/* Nurses, physiotherapists, caregivers, ICU-grade equipment and 24×7
              emergency support all under one roof. Suraksha24 brings
              background-verified, trained care to your loved ones wherever you
              are in the world. One call, and it’s handled. */}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-center">
              <Button
                href="#contact"
                size="lg"
                className={cn(
                  "group inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium tracking-wide shadow-soft transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto",
                  "bg-linear-to-r from-forest via-forest-light via-60% to-teal text-cream hover:brightness-110 hover:shadow-soft-lg",
                )}
              >
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
