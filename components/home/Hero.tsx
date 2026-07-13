import Image from "next/image";
import { contact } from "@/config/site";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden pt-28 pb-16 sm:min-h-[85vh] sm:pt-32 lg:min-h-[80vh] lg:pt-28">
      <div className="absolute inset-0 -z-20 bg-surface">
        {/* Desktop & Tablet */}
        <Image
          src="/assests/HeroNewBackground.png"
          alt="A caregiver checking blood pressure for an elderly woman at home"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[50%_38%] md:block"
        />

        {/* Mobile */}
        <Image
          src="/assests/Mobile.png"
          alt="A caregiver checking blood pressure for an elderly woman at home"
          fill
          priority
          sizes="100vw"
          className="block object-cover object-[72%_center] md:hidden"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="max-w-xl text-left lg:max-w-2xl">
          <FadeIn>
            <p className="eyebrow mb-6 ">Home health care, coordinated</p>
            <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-white md:text-forest  sm:text-5xl  lg:text-[3.4rem]">
              <span className="bg-linear-to-r from-forest via-forest-light to-teal bg-clip-text text-transparent font-bold">
                Protection
              </span>{" "}
              that never sleeps, care that never stops
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-white md:text-muted  sm:mt-7 ">
              Nurses, physiotherapists, caregivers and 24×7 emergency response —
              coordinated by one dedicated care manager, wherever you are in the
              world.
              {/* Nurses, physiotherapists, caregivers, ICU-grade equipment and 24×7
              emergency support all under one roof. Suraksha24 brings
              background-verified, trained care to your loved ones wherever you
              are in the world. One call, and it’s handled. */}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
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
              <Button
                href="#how-it-works"
                variant="ghost"
                size="lg"
                className="border border-white text-white! shadow-lg  transition-all duration-300  md:border-forest/20 md:text-forest!"
              >
                See how it works
              </Button>
            </div>
            <div className="mt-5 space-y-1.5 text-sm text-white md:text-forest  sm:mt-7 ">
              <p>
                <a href={contact.phoneHref} className="hover:text-teal">
                  24/7 Care Line: {contact.phoneDisplay}
                </a>
              </p>
              <p className="text-muted text-white md:text-forest">
                Licensed &amp; Insured · Trusted by 500+ Families
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
