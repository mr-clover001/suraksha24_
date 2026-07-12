import type { Metadata } from "next";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  HeartHandshake,
  ShieldCheck,
  Navigation,
  Send,
} from "lucide-react";
import { contact, siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import CallbackForm from "@/components/forms/CallbackForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, WhatsApp or email Suraksha24, or request a callback at a time that works for you. Based in Salt Lake, Kolkata — available 24×7.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const contactItems = [
  {
    icon: Phone,
    label: "Call",
    value: contact.phoneDisplay,
    href: contact.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.phoneDisplay,
    href: contact.whatsappHref,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
];

const reassurances = [
  {
    icon: Clock,
    title: "Always answered",
    body: "Our emergency line is staffed 24×7, including nights, weekends and Indian holidays.",
  },
  {
    icon: HeartHandshake,
    title: "A person, not a queue",
    body: "You speak with your dedicated care manager directly — never a rotating call centre.",
  },
  {
    icon: ShieldCheck,
    title: "No pressure, no obligation",
    body: "A first call is just a conversation. There's no commitment until you're ready.",
  },
];

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/assests/ContactUs.webp"
            alt="Close-up of a public telephone keypad and handset, lit warmly against a soft blurred background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_62%]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20"
        />

        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sage-light/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
        /> */}

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeIn>
            <div className="max-w-xl">
              <p className="eyebrow mb-6 text-sage-light">Contact</p>
              <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-cream sm:text-5xl">
                We&rsquo;re easiest to{" "}
                <span className="bg-linear-to-r from-teal via-sage to-sage-light bg-clip-text text-transparent font-bold [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]">
                  reach
                </span>{" "}
                the way that suits you
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-cream/90">
                Call, WhatsApp or email us directly, or leave your details and
                your dedicated care manager will call back at a time that works
                for you.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  href={contact.phoneHref}
                  size="lg"
                  className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium tracking-wide shadow-soft transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call now
                </Button>
                <Button
                  href={contact.whatsappHref}
                  variant="outline-light"
                  size="lg"
                  external
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp us
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section
        tone="cream"
        className="relative overflow-hidden pt-16 pb-16 sm:pt-20 sm:pb-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-sage-light/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <FadeIn>
            <div className="rounded-3xl bg-linear-to-r from-forest via-forest-light via-60% to-teal p-8 text-cream shadow-soft-lg sm:p-10 lg:p-11">
              <p className="eyebrow mb-4 text-sage-light">Reach us directly</p>
              <p className="font-display text-2xl leading-snug">
                Every call is answered by a real member of our care team — no
                call centres, no menus.
              </p>

              <ul className="mt-9 space-y-5">
                {contactItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3.5 text-cream/90 hover:text-cream"
                    >
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cream/10">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-wide text-cream/50">
                          {item.label}
                        </span>
                        <span className="font-medium">{item.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
                <li className="flex items-start gap-3.5">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cream/10">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-cream/50">
                      Office
                    </span>
                    <span className="font-medium">{contact.address}</span>
                  </span>
                </li>
              </ul>

              <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-sm text-cream/90">
                <span
                  className="h-2 w-2 rounded-full bg-sage-light"
                  aria-hidden="true"
                />
                {contact.availability}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Send className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="eyebrow">Request a callback</p>
              </div>
              <h2 className="font-display mt-4 text-2xl leading-snug text-forest sm:text-[1.75rem]">
                Tell us the best time to reach you
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Takes less than a minute — your dedicated care manager will call
                back at a time that works for you.
              </p>
              <div className="mt-8">
                <CallbackForm tone="light" />
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section tone="surface" className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {reassurances.map((item, index) => (
            <FadeIn key={item.title} delay={index * 80}>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-light/40">
                  <item.icon
                    className="h-5 w-5 text-forest"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display mt-4 text-base text-forest">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <FadeIn>
        <div className="overflow-hidden rounded-2xl">
          <iframe
            src={mapEmbedUrl}
            title={`Map showing Suraksha24's office at ${contact.address}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-80 w-full border-0 sm:h-96"
          />
          <div className="flex flex-col items-center justify-between gap-4 bg-surface px-6 py-5 sm:flex-row sm:px-8">
            <p className="text-sm font-medium text-forest">{contact.address}</p>
            <Button href={directionsUrl} variant="secondary" size="md" external>
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get directions
            </Button>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
