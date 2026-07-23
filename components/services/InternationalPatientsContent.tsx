import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  Car,
  CalendarCheck,
  ClipboardList,
  FlaskConical,
  HeartHandshake,
  Hotel,
  Languages,
  MessageCircle,
  Phone,
  Pill,
  Plane,
  Shield,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { contact, type Service } from "@/config/site";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

const internationalPatientIcons: LucideIcon[] = [
  Stethoscope,
  ClipboardList,
  Plane,
  Hotel,
  Building2,
  FlaskConical,
  Languages,
  Pill,
  Car,
  CalendarCheck,
];

// From the Bengali patient poster's trust strip ("আপনার সুস্থতাই আমাদের
// দায়িত্ব" — Safe / Reliable / Compassionate) and its closing tagline.
const internationalPatientTrustPoints = [
  { icon: Shield, label: "Safe" },
  { icon: BadgeCheck, label: "Reliable" },
  { icon: HeartHandshake, label: "Compassionate" },
];

/**
 * Bespoke hero + detail layout for the International Patient Services page
 * (photo poster, icon grid) — shared between the dedicated
 * /international-patients-services route and its entry under /services/[slug]
 * so the content stays in one place.
 */
export default function InternationalPatientsContent({
  service,
}: {
  service: Service;
}) {
  return (
    <>
      <Section
        tone="cream"
        className="relative overflow-hidden pt-10 pb-0 sm:pt-12"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center">
          <FadeIn>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-forest"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All services
            </Link>

            <div className="mt-6">
              <p className="eyebrow mb-4">
                Suraksha24 Service {service.number}
              </p>
              <h1 className="font-display text-3xl leading-[1.15] tracking-tight text-forest sm:text-4xl lg:text-[2.75rem]">
                {service.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {service.summary}
              </p>

              <div className="mt-8 rounded-2xl border border-forest/8 bg-surface p-5">
                <p className="text-sm font-medium text-forest">
                  Your wellness is our responsibility
                </p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {internationalPatientTrustPoints.map(
                    ({ icon: Icon, label }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 text-sm text-forest/90"
                      >
                        <Icon
                          className="h-4 w-4 text-teal"
                          aria-hidden="true"
                        />
                        {label}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href={contact.phoneHref} size="md">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {contact.phoneDisplay}
                </Button>
                <Button
                  href={contact.whatsappHref}
                  variant="secondary"
                  size="md"
                  external
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp us
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <Image
              src="/assests/International_Patient_Poster.png"
              alt="Suraksha24 patient information poster for Bangladeshi patients travelling to Kolkata for treatment — doctor & hospital appointments, treatment planning, airport pick-up, hotel arrangements, admission & discharge assistance, surgery & diagnostic coordination, language assistance, pharmacy & equipment support, local transportation, and follow-up care coordination"
              width={1024}
              height={1536}
              sizes="(min-width: 1024px) 520px, (min-width: 640px) 480px, 92vw"
              className="mx-auto h-auto w-full max-w-lg rounded-3xl shadow-soft-lg"
              priority
            />
          </FadeIn>
        </div>
      </Section>

      <Section tone="cream" className="pt-10 pb-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.15fr)]">
          <FadeIn className="min-w-0 max-w-[70ch]">
            <h2 className="font-display text-2xl text-forest">
              We Specialize in Assisting Patients From Bangladesh
            </h2>
            <p className="mt-4 text-[17px] leading-[1.8] text-forest/90">
              {service.description}
            </p>

            <h2 className="font-display mt-11 text-2xl text-forest">
              What&rsquo;s included
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {service.includes.map((item, index) => {
                const Icon = internationalPatientIcons[index] ?? Stethoscope;
                return (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-forest/8 bg-surface p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-soft-lg"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-r from-forest via-forest-light via-60% to-teal text-cream">
                      <Icon
                        className="h-4 w-4"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>
                    <p className="text-[15px] leading-relaxed text-forest/90">
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>

            <h2 className="font-display mt-11 text-2xl text-forest">
              Is this right for your family?
            </h2>
            <p className="mt-3 text-[15px] text-muted">
              This service is often the right starting point when:
            </p>
            <ul className="mt-5 space-y-3">
              {service.idealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] leading-relaxed text-forest/90"
                >
                  <BadgeCheck
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn
            delay={100}
            className="mx-auto w-full max-w-md lg:sticky lg:top-28 lg:max-w-none lg:self-start"
          >
            <Card className="bg-surface">
              <p className="eyebrow mb-1">Coordinated for you</p>
              <p className="font-display text-lg text-forest">
                One care manager owns this from start to finish
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Scheduling, updates and follow-up all run through the same
                dedicated person — you&rsquo;re never passed between
                departments.
              </p>

              <div className="mt-6 space-y-3 border-t border-forest/8 pt-6">
                <Button
                  href={contact.phoneHref}
                  className="w-full justify-center"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {contact.phoneDisplay}
                </Button>
                <Button
                  href={contact.whatsappHref}
                  variant="secondary"
                  external
                  className="w-full justify-center"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp us
                </Button>
              </div>

              <p className="mt-5 flex items-center gap-1.5 text-xs text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-sage"
                  aria-hidden="true"
                />
                {contact.availability}
              </p>
            </Card>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
