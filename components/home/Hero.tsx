import Image from "next/image";
import { ShieldCheck, Star } from "lucide-react";
import { contact } from "@/config/site";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* ===== Mobile (below md): text-led, framed photo, trust row ===== */}
      <div className="bg-surface px-6 pt-24 pb-12 md:hidden">
        <FadeIn>
          <p className="eyebrow text-[11px] mb-4">
            Home health care, coordinated
          </p>
          <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-forest">
            <span className="bg-linear-to-r from-forest via-forest-light to-teal bg-clip-text text-transparent font-bold">
              Protection
            </span>{" "}
            that never sleeps, care that never stops
          </h1>

          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Nurses, physiotherapists, caregivers and 24×7 emergency response —
            coordinated by one dedicated care manager, wherever you are in the
            world.
          </p>

          <div className="relative mt-6 mb-4 aspect-square w-full">
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/assests/NurseWallper.jpg"
                alt="A caregiver checking blood pressure for an elderly woman at home"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[50%_38%] transition-all duration-300 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-forest/10" />
            </div>

            {/* Floating trust chips, matching the badge style used in DistanceSection */}
            <div className="absolute -top-3 -right-3 z-10 flex items-center gap-2 rounded-2xl border border-forest/8 bg-cream px-3.5 py-2.5 shadow-soft-lg">
              <ShieldCheck className="h-4 w-4 text-teal" aria-hidden="true" />
              <span className="text-xs font-medium text-forest">
                Licensed &amp; Insured
              </span>
            </div>

            <div className="absolute -bottom-3 -left-3 z-10 flex items-center gap-2 rounded-2xl border border-forest/8 bg-cream px-3.5 py-2.5 shadow-soft-lg">
              <Star
                className="h-4 w-4 fill-gold text-gold"
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-forest">
                4.7 rated · 500+ families
              </span>
            </div>
          </div>

          <Button
            href="#contact"
            size="lg"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6! py-3! text-sm! font-medium tracking-wide shadow-soft transition-all duration-300 bg-linear-to-r from-forest via-forest-light via-60% to-teal text-cream hover:brightness-110 hover:shadow-soft-lg"
          >
            Talk to a care advisor
          </Button>
        </FadeIn>
      </div>

      {/* ===== Desktop & tablet (md and up): original full-bleed hero, unchanged ===== */}
      <div className="relative hidden min-h-[92svh] items-center pt-28 pb-16 sm:min-h-[85vh] sm:pt-32 md:flex lg:min-h-[80vh] lg:pt-28">
        <div className="absolute inset-0 -z-20 bg-surface">
          <Image
            src="/assests/HeroNewBackground.png"
            alt="A caregiver checking blood pressure for an elderly woman at home"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_38%]"
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
          <div className="max-w-xl text-left lg:max-w-2xl">
            <FadeIn>
              <p className="eyebrow mb-6 ">Home health care, coordinated</p>
              <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-forest  sm:text-5xl  lg:text-[3.4rem]">
                <span className="bg-linear-to-r from-forest via-forest-light to-teal bg-clip-text text-transparent font-bold">
                  Protection
                </span>{" "}
                that never sleeps, care that never stops
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-muted  sm:mt-7 ">
                {/* Mobile View Context -----  Nurses, physiotherapists, caregivers and 24×7 emergency response —
              coordinated by one dedicated care manager, wherever you are in the
              world. */}
                Nurses, physiotherapists, caregivers, ICU-grade equipment and
                24×7 emergency support all under one roof. Suraksha24 brings
                background-verified, trained care to your loved ones wherever
                you are in the world. One call, and it’s handled.
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
                  className="border border-forest/20 text-forest! shadow-lg  transition-all duration-300 "
                >
                  See how it works
                </Button>
              </div>
              <div className="mt-5 space-y-1.5 text-sm text-forest  sm:mt-7 ">
                <p>
                  <a href={contact.phoneHref} className="hover:text-teal">
                    24/7 Care Line: {contact.phoneDisplay}
                  </a>
                </p>
                <p className="text-muted">
                  Licensed &amp; Insured · Trusted by 500+ Families
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
