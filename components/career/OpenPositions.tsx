import { Briefcase, GraduationCap, MapPin, Plus } from "lucide-react";
import { jobOpenings } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function OpenPositions() {
  return (
    <Section
      id="open-positions"
      tone="surface"
      eyebrow="Open positions"
      heading="Current openings across Kolkata"
      subheading="Don't see the exact role you're looking for? Apply anyway — we keep every application on file for the next opening that fits."
    >
      <div className="mx-auto max-w-4xl space-y-5">
        {jobOpenings.map((job, index) => (
          <FadeIn key={job.slug} delay={(index % 4) * 60}>
            <details className="group overflow-hidden rounded-2xl border border-forest/8 bg-surface shadow-soft open:shadow-soft-lg">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-6 sm:px-7">
                <div>
                  <p className="eyebrow mb-2">{job.department}</p>
                  <h3 className="font-display text-xl text-forest">{job.title}</h3>
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <GraduationCap className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                      {job.experience}
                    </span>
                  </div>
                </div>
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-transform duration-300 group-open:rotate-45">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>

              <div className="border-t border-forest/8 px-6 pb-7 pt-5 sm:px-7">
                <p className="text-[15px] leading-relaxed text-muted">{job.summary}</p>
                <ul className="mt-4 space-y-2">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-forest/85">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="#apply" size="md">
                    Apply for this role
                  </Button>
                </div>
              </div>
            </details>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
