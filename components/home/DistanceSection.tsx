import Image from "next/image";
import {
  ClockAlert,
  MessageCircleWarning,
  PhoneMissed,
  ShieldCheck,
} from "lucide-react";
import { trustStats } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

const painPoints = [
  { icon: PhoneMissed, text: "A missed call at an odd hour" },
  {
    icon: MessageCircleWarning,
    text: "A parent who says “I’m fine” when they’re not",
  },
  { icon: ClockAlert, text: "A fall you hear about a day too late" },
];

const emergencyStat =
  trustStats.find((stat) => stat.label.includes("Emergency")) ?? trustStats[0];

export default function DistanceSection() {
  return (
    <Section tone="forest" className="relative overflow-hidden">
      <div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <FadeIn className="relative mx-auto w-full max-w-[560px]">
          {/* Ambient glow behind the photo card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full bg-sage-light/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-6 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
          />

          <div className="group relative aspect-[1.05/1] transition-transform duration-500 ease-out hover:-translate-y-1.5">
            {/* Orange Accent Border */}

            {/* Image */}
            <div className="relative z-20 h-full overflow-hidden rounded-[40px] bg-white shadow-2xl ring-1 ring-inset ring-cream/10">
              <Image
                src="/assests/PhotoRealProblem.png"
                alt="A Suraksha24 care manager visiting an elderly couple at home and showing them a care update"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* Scrim for caption legibility */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-forest/70 via-forest/10 to-transparent"
              />
              <p className="absolute bottom-5 left-6 right-6 font-display text-base leading-snug text-cream sm:text-lg">
                Real visits. Real updates.
              </p>
            </div>

            {/* Floating badge: verified staff */}
            <div className="absolute -left-3 top-7 z-30 flex items-center gap-2 rounded-2xl border border-forest/8 bg-cream px-4 py-3 shadow-soft-lg sm:-left-7">
              <ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />
              <span className="text-xs font-medium text-forest">
                Verified care manager
              </span>
            </div>

            {/* Floating stat: emergency line */}
            <div className="absolute -right-3 bottom-9 z-30 rounded-2xl border border-forest/8 bg-cream px-4 py-3 text-center shadow-soft-lg sm:-right-7">
              <p className="font-display text-lg leading-none text-forest">
                {emergencyStat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-muted">
                {emergencyStat.label}
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="eyebrow mb-4 text-sage-light">The real problem</p>
          <h2 className="font-display text-3xl leading-[1.15] tracking-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            It&rsquo;s rarely the distance. It&rsquo;s the{" "}
            <span className="text-sage-light">not-knowing</span>.
          </h2>

          <ul className="mt-8 space-y-3">
            {painPoints.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/10 text-sage-light">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-[15px] text-cream/85">{text}</span>
              </li>
            ))}
          </ul>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/80">
            Whether you&rsquo;re a flight away or just a busy work week away,
            Suraksha24 was built to close that gap — so being away no longer
            means being in the dark.
          </p>

          <div className="mt-6 max-w-xl rounded-r-xl border-l-2 border-sage-light/70 bg-cream/5 py-3 pl-5 pr-4">
            <p className="font-display text-lg leading-snug text-cream">
              One care manager knows your parents, visits on a schedule you
              choose, and sends you a clear update every single time.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
