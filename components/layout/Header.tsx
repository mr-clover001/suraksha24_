"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Home as HomeIcon,
  Info,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Stethoscope,
  X,
  type LucideIcon,
} from "lucide-react";
import { contact, nav, services, siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

// Pages whose hero has a full-bleed background image the header can float
// over (transparent) until the visitor scrolls past it.
const OVERLAY_HERO_ROUTES = new Set([
  "/",
  "/about",
  "/blog",
  "/contact",
  "/services",
]);

const navIcons: Record<string, LucideIcon> = {
  "/": HomeIcon,
  "/services": Stethoscope,
  "/blog": BookOpen,
  "/about": Info,
  "/contact": Mail,
};

function isActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const servicesGroupRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasImageHero = OVERLAY_HERO_ROUTES.has(pathname);
  const isOverlay = hasImageHero && !scrolled && !open;

  // Close the mobile menu on navigation. Adjusted during render (the
  // pattern React recommends for "reset state when a prop changes")
  // rather than in an effect, so it doesn't cost an extra render pass.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleServicesBlur(event: React.FocusEvent<HTMLDivElement>) {
    if (
      !servicesGroupRef.current?.contains(event.relatedTarget as Node | null)
    ) {
      setServicesOpen(false);
    }
  }

  function openServicesMenu() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesOpen(true);
  }

  function scheduleCloseServicesMenu() {
    closeTimeoutRef.current = setTimeout(() => setServicesOpen(false), 250);
  }

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <header
      className={cn(
        "top-0 z-50 border-b transition-all duration-300",
        hasImageHero ? "fixed inset-x-0" : "sticky",
        hasImageHero
          ? isOverlay
            ? "border-transparent bg-transparent shadow-none backdrop-blur-none"
            : "border-forest/10 bg-cream/95 shadow-soft backdrop-blur"
          : "bg-cream/90 backdrop-blur",
        !hasImageHero &&
          (scrolled ? "border-forest/10 shadow-soft" : "border-forest/8"),
      )}
    >
      {/* Utility bar: contact details + availability. Transparent while
          floating over a hero image, solid forest once scrolled (or on
          pages with no hero to float over). Hidden on mobile to save space. */}
      <div
        className={cn(
          "hidden items-center justify-between px-6 py-2 text-xs text-cream/85 transition-colors duration-300 md:flex lg:px-8",
          isOverlay ? "bg-transparent" : "bg-forest",
        )}
      >
        <div className="flex items-center gap-5">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-1.5 transition-colors hover:text-gold"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-gold"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {contact.email}
          </a>
          <span className="hidden items-center gap-1.5 lg:flex">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {contact.address}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full bg-sage-light"
              aria-hidden="true"
            />
            {contact.availability}
          </span>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Suraksha24 on WhatsApp"
            className="transition-colors hover:text-gold"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className={cn(
          "mx-auto h-[3px] w-40 rounded-full bg-gradient-to-r from-sage via-gold to-sage transition-opacity duration-300",
          isOverlay ? "opacity-80" : "opacity-100",
        )}
      />
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-300 sm:px-8",
          scrolled ? "py-3" : "py-4",
        )}
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-10 w-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
            <Image
              src="/assests/LogoIcon.png"
              alt=""
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </span>
          <span
            className={cn(
              "font-display text-xl leading-none tracking-tight transition-colors duration-300 sm:text-2xl",
              isOverlay ? "text-cream" : "text-forest",
            )}
          >
            {siteConfig.name}
            <span className="text-gold">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);

            if (item.href === "/services") {
              return (
                <div
                  key={item.href}
                  ref={servicesGroupRef}
                  className="relative"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={scheduleCloseServicesMenu}
                  onBlur={handleServicesBlur}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onFocus={openServicesMenu}
                    className={cn(
                      "group relative flex items-center gap-1 py-1 text-[13px] font-medium uppercase tracking-wide transition-colors duration-300",
                      isOverlay
                        ? active
                          ? "text-cream"
                          : "text-cream/75 hover:text-cream"
                        : active
                          ? "text-forest"
                          : "text-forest/70 hover:text-forest",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        servicesOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px w-[calc(100%-1.1rem)] origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100",
                        active && "scale-x-100",
                      )}
                    />
                  </Link>

                  <div
                    role="menu"
                    aria-label="Services"
                    onMouseEnter={openServicesMenu}
                    onMouseLeave={scheduleCloseServicesMenu}
                    className={cn(
                      "absolute left-0 top-full z-10 mt-3 w-[440px] max-w-[90vw] rounded-2xl border border-forest/10 bg-surface p-5 shadow-soft-lg transition-all duration-200",
                      servicesOpen
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0",
                    )}
                  >
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          role="menuitem"
                          className="flex items-start gap-2.5 rounded-lg p-2.5 text-left transition-colors hover:bg-forest/5"
                        >
                          <span className="font-display mt-0.5 text-sm text-gold">
                            {service.number}
                          </span>
                          <span className="text-[13px] font-medium leading-snug text-forest/90">
                            {service.title.split(" — ")[0]}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/services"
                      role="menuitem"
                      className="mt-4 flex items-center gap-1.5 border-t border-forest/8 pt-4 text-sm font-medium text-gold hover:text-gold/80"
                    >
                      View all services
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative py-1 text-[13px] font-medium uppercase tracking-wide transition-colors duration-300",
                  isOverlay
                    ? active
                      ? "text-cream"
                      : "text-cream/75 hover:text-cream"
                    : active
                      ? "text-forest"
                      : "text-forest/70 hover:text-forest",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100",
                    active && "scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <span
            className={cn(
              "hidden items-center gap-1.5 text-xs transition-colors duration-300 lg:inline-flex",
              isOverlay ? "text-cream/75" : "text-muted",
            )}
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-sage"
              aria-hidden="true"
            />
            {contact.availability}
          </span>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Suraksha24 on WhatsApp"
            className={cn(
              "hidden h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 lg:inline-flex",
              isOverlay
                ? "border-cream/25 text-cream/85 hover:border-cream/45 hover:bg-cream/10 hover:text-cream"
                : "border-forest/15 text-forest/80 hover:border-forest/40 hover:text-forest",
            )}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
          <Button href={contact.phoneHref} variant="primary" size="md">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300 md:hidden",
            isOverlay ? "text-cream" : "text-forest",
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "grid border-forest/8 bg-cream transition-all duration-300 ease-in-out md:hidden",
          open
            ? "grid-rows-[1fr] border-t opacity-100"
            : "grid-rows-[0fr] border-t-0 opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {nav.map((item) => {
              const Icon = navIcons[item.href] ?? HomeIcon;
              const active = isActive(pathname, item.href);

              if (item.href === "/services") {
                return (
                  <div key={item.href}>
                    <div
                      className={cn(
                        "flex items-center rounded-lg transition-colors",
                        active ? "bg-forest/5" : "hover:bg-forest/5",
                      )}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex flex-1 items-center gap-3 px-2 py-3 text-base font-medium",
                          active ? "text-forest" : "text-forest/85",
                        )}
                      >
                        <Icon
                          className="h-4 w-4 text-gold"
                          aria-hidden="true"
                        />
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-submenu"
                        aria-label="Toggle services list"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="px-3 py-3 text-forest/60"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            mobileServicesOpen && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div
                      id="mobile-services-submenu"
                      className={cn(
                        "grid transition-all duration-300 ease-in-out",
                        mobileServicesOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-4 flex flex-col gap-0.5 border-l border-forest/10 pb-2 pl-4">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => setOpen(false)}
                              className="flex items-start gap-2.5 rounded-lg px-2 py-2.5 text-sm text-forest/80 hover:bg-forest/5"
                            >
                              <span className="font-display text-gold">
                                {service.number}
                              </span>
                              {service.title.split(" — ")[0]}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-2 py-3 text-base font-medium transition-colors",
                    active
                      ? "bg-forest/5 text-forest"
                      : "text-forest/85 hover:bg-forest/5",
                  )}
                >
                  <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-3 flex gap-2.5">
              <Button
                href={contact.phoneHref}
                variant="primary"
                size="md"
                className="flex-1"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call
              </Button>
              <Button
                href={contact.whatsappHref}
                variant="secondary"
                size="md"
                external
                className="flex-1"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </Button>
            </div>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-sage"
                aria-hidden="true"
              />
              {contact.availability}
            </p>
          </nav>
        </div>
      </div>
    </header>
  );
}
