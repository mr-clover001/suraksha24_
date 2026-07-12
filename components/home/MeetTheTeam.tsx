import Image from "next/image";
import { team } from "@/config/site";
import FadeIn from "@/components/ui/FadeIn";

export default function MeetTheTeam() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-forest via-forest-light via-60% to-teal py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* Compact intro heading — the full stacked/watermark treatment below
            needs a wide canvas, so it only appears at the lg breakpoint. */}
        <FadeIn className="mb-12 lg:hidden">
          <p className="eyebrow mb-3 text-sage-light">Meet the team</p>
          <h2 className="font-display text-3xl leading-tight text-cream">
            The people behind every visit
          </h2>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr_1fr_0.85fr] lg:items-start lg:gap-8">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 90}>
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  {member.placeholder && (
                    <span className="absolute right-3 top-3 z-10 text-[10px] font-semibold uppercase tracking-wide text-gold/90">
                      Suraksha24 Team
                    </span>
                  )}
                  <Image
                    src={member.photo}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 22vw, 80vw"
                    style={{ objectPosition: member.photoPosition }}
                    className="object-cover grayscale-[20%] contrast-105 brightness-[0.82] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-forest via-forest/15 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gold/10 mix-blend-overlay"
                  />
                </div>
                <h3 className="font-display mt-6 text-4xl leading-none tracking-tight text-sage-light sm:text-[2.5rem]">
                  {member.name.toUpperCase()}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-sage-light/75">
                  {member.role}
                </p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
                  {member.bio}
                </p>
              </div>
            </FadeIn>
          ))}

          {/* Layered display type, matching the reference — hidden below lg
              since it needs a wide canvas to read properly. Sizes use
              clamp() and the watermark is anchored with a single relative
              offset, so the whole layered effect scales cleanly at any
              width instead of relying on fixed pixel offsets per element. */}
          <FadeIn delay={team.length * 90} className="relative hidden lg:block">
            <p
              aria-hidden="true"
              className="font-display pointer-events-none absolute -top-6 right-0 select-none text-right text-[clamp(4.5rem,9vw,10rem)] leading-[0.92] tracking-tight text-cream/[0.05]"
            >
              Your
              <br />
              Team
              <br />
              Today
            </p>
            <h2 className="font-display relative text-right text-[clamp(2rem,3.2vw,3.75rem)] leading-[1.15] text-sage-light">
              Meet
              <br />
              the
              <br />
              team
            </h2>
            <p className="relative mt-10 text-right text-[clamp(11px,0.9vw,16px)] font-semibold uppercase tracking-[0.2em] text-sage-light/55">
              Suraksha24 Team#
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
