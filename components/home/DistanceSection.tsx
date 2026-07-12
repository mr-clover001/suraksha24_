import Image from "next/image";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

export default function DistanceSection() {
  return (
    <Section tone="forest" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sage-light/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-sage-light/10 blur-3xl"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-10 rounded-full bg-cream/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto h-[90%] w-[90%] rounded-full border border-dashed border-cream/20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto h-[75%] w-[75%] rounded-full border border-dashed border-sage-light/30"
          />
          <div className="relative aspect-square">
            <Image
              src="/assests/nursing-home-abstract-concept-illustration/Nursing.webp"
              alt="A caregiver gently assisting an elderly woman seated in a wheelchair outside a care facility"
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-contain"
              priority={false}
            />
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="eyebrow mb-4 text-sage-light">The real problem</p>
          <h2 className="font-display text-3xl leading-[1.15] tracking-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            It&rsquo;s rarely the distance. It&rsquo;s the not-knowing.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            A missed call at an odd hour. A parent who says &ldquo;I&rsquo;m
            fine&rdquo; when they&rsquo;re not. A fall you hear about a day too
            late. Whether you&rsquo;re a flight away or just a busy work week
            away, Suraksha24 was built to close that gap — so being away no
            longer means being in the dark. One care manager knows your parents,
            visits on a schedule you choose, and sends you a clear update every
            single time.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
