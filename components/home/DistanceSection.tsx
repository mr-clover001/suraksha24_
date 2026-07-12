import Image from "next/image";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

export default function DistanceSection() {
  return (
    <Section tone="forest" className="relative overflow-hidden">
      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-40">
        <FadeIn className="relative mx-auto w-full max-w-[560px]">
          <div className="relative aspect-[1.05/1]">
            {/* Orange Accent Border */}

            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[40px]  border-[#0D9488] border-b-[10px] border-r-[10px]" />

            {/* Image */}

            <div className="relative z-20 h-full overflow-hidden rounded-[40px] bg-white shadow-2xl">
              <Image
                src="/assests/PhotoRealProblem.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
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
