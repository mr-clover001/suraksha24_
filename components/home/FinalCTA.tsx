import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { contact, finalCta } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import CallbackForm from "@/components/forms/CallbackForm";

export default function FinalCTA() {
  return (
    <Section id="contact" tone="forest" align="left" containerClassName="max-w-6xl">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <FadeIn>
          <p className="eyebrow mb-4">Reach us, however suits you</p>
          <h2 className="font-display text-3xl leading-[1.15] tracking-tight text-cream sm:text-4xl">
            {finalCta.heading}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream/75">{finalCta.body}</p>

          <ul className="mt-9 space-y-4">
            <li>
              <a
                href={contact.phoneHref}
                className="flex items-center gap-3 text-cream/90 hover:text-cream"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cream/10">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-cream/50">Call</span>
                  {contact.phoneDisplay}
                </span>
              </a>
            </li>
            <li>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/90 hover:text-cream"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cream/10">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-cream/50">WhatsApp</span>
                  {contact.phoneDisplay}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-cream/90 hover:text-cream"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cream/10">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-cream/50">Email</span>
                  {contact.email}
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-cream/90">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cream/10">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-cream/50">Kolkata office</span>
                {contact.address}
              </span>
            </li>
          </ul>

          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-sm text-cream/85">
            <span className="h-2 w-2 rounded-full bg-sage-light" aria-hidden="true" />
            {contact.availability}
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6 sm:p-8">
            <CallbackForm tone="dark" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
