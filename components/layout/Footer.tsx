import Image from "next/image";
import Link from "next/link";
import { Merriweather } from "next/font/google";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, legalLinks, navFooter, services, siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import BackToTopButton from "@/components/layout/BackToTopButton";
import SocialLinks from "@/components/layout/SocialLinks";
import { cn } from "@/lib/cn";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export default function Footer() {
  const year = new Date().getFullYear();
  const featuredServices = services.slice(0, 5);

  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-linear-to-r from-forest via-forest-light via-60% to-teal text-cream/80">
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-sage-light/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      /> */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-center gap-6 border-b border-cream/10 py-14 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-2xl leading-snug text-cream sm:text-3xl">
              Still have questions?
            </p>
            <p className="mt-2 text-sm text-cream/65">
              Talk to a care advisor — no obligation, just a clear next step.
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-3">
            <Button href={contact.phoneHref} variant="white" size="md">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call us
            </Button>
            <Button
              href={contact.whatsappHref}
              variant="outline-light"
              size="md"
              external
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </Button>
          </div>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="group flex items-center">
              <Image
                src="/assests/LOGOS.png"
                alt={siteConfig.name}
                width={1023}
                height={280}
                priority
                className="h-9 w-auto flex-shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-12"
              />
              <div
                className={cn(
                  merriweather.className,
                  "ml-1 flex items-baseline whitespace-nowrap",
                )}
              >
                <span
                  className={cn(
                    "text-xl font-bold tracking-wide transition-colors duration-300 sm:text-2xl text-[#2777f5]",
                  )}
                >
                  sura
                </span>

                <span
                  className={cn(
                    "text-xl font-bold tracking-wide transition-colors duration-300 sm:text-2xl text-sage-light",
                  )}
                >
                  ksha
                </span>

                <span
                  className={cn(
                    "text-xl font-black uppercase tracking-wide transition-colors duration-300 sm:text-3xl text-sage-light",
                  )}
                >
                  24
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
              {siteConfig.tagline}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs text-cream/85">
              <span
                className="h-1.5 w-1.5 rounded-full bg-sage-light"
                aria-hidden="true"
              />
              {contact.availability}
            </p>
            <div className="mt-6">
              <p className="eyebrow mb-3 text-sage-light">Follow us</p>
              <SocialLinks tone="dark" />
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5 text-sage-light">Navigate</p>
            <ul className="space-y-3">
              {navFooter.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    <span className="mr-0 h-px w-0 bg-gold transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-sage-light">Way We Care</p>
            <ul className="space-y-3">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    <span className="mr-0 h-px w-0 bg-gold transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                    {service.title.split(" — ")[0]}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium text-gold hover:text-gold/80"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-sage-light">Contact</p>
            <ul className="space-y-3.5 text-sm text-cream/80">
              <li className="flex items-start gap-2.5">
                <Phone
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-light"
                  aria-hidden="true"
                />
                <a href={contact.phoneHref} className="hover:text-cream">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-light"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-cream"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-light"
                  aria-hidden="true"
                />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-cream/10 py-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-cream/80">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <p>Kolkata, India</p>
            <BackToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
