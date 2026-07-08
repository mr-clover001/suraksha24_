import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, MessageCircle, Phone, Sparkles } from "lucide-react";
import { contact, howItWorks, services, siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import ServiceCard from "@/components/ui/ServiceCard";
import FinalCTA from "@/components/home/FinalCTA";
import { cn } from "@/lib/cn";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const url = `${siteConfig.url}/services/${service.slug}`;

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: service.title,
      description: service.summary,
      url,
    },
  };
}

function getRelatedServices(currentSlug: string, limit = 3) {
  const currentIndex = services.findIndex((s) => s.slug === currentSlug);
  const related = [];
  for (let i = 1; related.length < limit && i <= services.length; i += 1) {
    const candidate = services[(currentIndex + i) % services.length];
    if (candidate.slug !== currentSlug) related.push(candidate);
  }
  return related;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug);
  const url = `${siteConfig.url}/services/${service.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed: "Kolkata, India",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Section tone="cream" className="relative overflow-hidden pt-10 pb-0 sm:pt-12">
        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute -right-6 -top-10 select-none text-[13rem] leading-none text-gold/10 sm:text-[16rem]"
        >
          {service.number}
        </span>

        <FadeIn>
          <Link
            href="/services"
            className="relative inline-flex items-center gap-1.5 text-sm text-muted hover:text-forest"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All services
          </Link>

          <div className="relative mt-6 max-w-3xl">
            <p className="eyebrow mb-4">Suraksha24 Service {service.number}</p>
            <h1 className="font-display text-3xl leading-[1.15] tracking-tight text-forest sm:text-4xl lg:text-[2.75rem]">
              {service.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{service.summary}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={contact.phoneHref} size="md">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {contact.phoneDisplay}
              </Button>
              <Button href={contact.whatsappHref} variant="secondary" size="md" external>
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp us
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section tone="cream" className="pt-10 pb-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.15fr)]">
          <FadeIn className="min-w-0 max-w-[70ch]">
            <p className="text-[17px] leading-[1.8] text-forest/90">{service.description}</p>

            <h2 className="font-display mt-11 text-2xl text-forest">What&rsquo;s included</h2>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-forest/90">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-display mt-11 text-2xl text-forest">Is this right for your family?</h2>
            <p className="mt-3 text-[15px] text-muted">This service is often the right starting point when:</p>
            <ul className="mt-5 space-y-3">
              {service.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-forest/90">
                  <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-display mt-11 text-2xl text-forest">How it works</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {howItWorks.map((step) => (
                <div key={step.step} className="rounded-xl border border-forest/8 bg-surface p-5">
                  <span className="font-display text-lg text-gold">{step.step}</span>
                  <p className="mt-1.5 font-medium text-forest">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={100} className="mx-auto w-full max-w-md lg:sticky lg:top-28 lg:max-w-none lg:self-start">
            <Card className="bg-surface">
              <p className="eyebrow mb-1">Coordinated for you</p>
              <p className="font-display text-lg text-forest">
                One care manager owns this from start to finish
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Scheduling, updates and follow-up all run through the same dedicated person —
                you&rsquo;re never passed between departments.
              </p>

              <div className="mt-6 space-y-3 border-t border-forest/8 pt-6">
                <Button href={contact.phoneHref} className="w-full justify-center">
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
                <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
                {contact.availability}
              </p>
            </Card>
          </FadeIn>
        </div>

        {related.length > 0 && (
          <div className="mx-auto mt-8 max-w-5xl">
            <h2 className="font-display text-2xl text-forest">Related services</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <div
                  key={item.slug}
                  className={cn(
                    index === related.length - 1 &&
                      related.length % 2 === 1 &&
                      "sm:col-span-2 lg:col-span-1"
                  )}
                >
                  <ServiceCard service={item} href={`/services/${item.slug}`} className="h-full" />
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>

      <FinalCTA />
    </>
  );
}
