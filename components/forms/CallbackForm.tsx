"use client";

import { useState } from "react";
import { Clock3, Globe2, MessageSquareText, Phone, Send, User } from "lucide-react";
import { bestTimeOptions, countryOptions } from "@/config/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

type CallbackFormProps = {
  /** "light" for cream/white sections, "dark" for the forest-green CTA block. */
  tone?: "light" | "dark";
  className?: string;
};

const fieldBaseClasses =
  "w-full rounded-2xl border px-4 py-3 text-sm outline-none transition-all focus-visible:outline-2 focus-visible:outline-offset-2";

export default function CallbackForm({ tone = "light", className }: CallbackFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isDark = tone === "dark";
  const labelClasses = cn("mb-1.5 block text-sm font-medium", isDark ? "text-cream/90" : "text-forest/85");
  const iconClasses = cn(
    "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2",
    isDark ? "text-cream/40" : "text-forest/35"
  );
  const fieldClasses = cn(
    fieldBaseClasses,
    "pl-11",
    isDark
      ? "border-cream/25 bg-cream/10 text-cream placeholder:text-cream/40 focus-visible:outline-sage-light hover:border-cream/40"
      : "border-forest/15 bg-surface text-forest shadow-sm placeholder:text-muted/60 focus-visible:outline-gold hover:border-forest/25"
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl border p-8 text-center",
          isDark ? "border-cream/20 bg-cream/10" : "border-forest/10 bg-surface-alt",
          className
        )}
        role="status"
      >
        <p className={cn("font-display text-xl", isDark ? "text-cream" : "text-forest")}>
          Thank you — we&rsquo;ve got your details.
        </p>
        <p className={cn("mt-2 text-sm", isDark ? "text-cream/75" : "text-muted")}>
          Your dedicated care manager will call you back at a time that works for you.
          For anything urgent, please call or WhatsApp us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <div className="relative">
            <User className={iconClasses} aria-hidden="true" />
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={fieldClasses}
              placeholder="Your full name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="country" className={labelClasses}>
            Country you&rsquo;re calling from
          </label>
          <div className="relative">
            <Globe2 className={iconClasses} aria-hidden="true" />
            <select id="country" name="country" required defaultValue="" className={fieldClasses}>
              <option value="" disabled>
                Select your country
              </option>
              {countryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone / WhatsApp number
          </label>
          <div className="relative">
            <Phone className={iconClasses} aria-hidden="true" />
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className={fieldClasses}
              placeholder="e.g. +1 555 123 4567"
            />
          </div>
        </div>
        <div>
          <label htmlFor="bestTime" className={labelClasses}>
            Best time to call
          </label>
          <div className="relative">
            <Clock3 className={iconClasses} aria-hidden="true" />
            <select id="bestTime" name="bestTime" required defaultValue="" className={fieldClasses}>
              <option value="" disabled>
                Select a time
              </option>
              {bestTimeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span className={isDark ? "text-cream/50" : "text-muted/60"}>(optional)</span>
        </label>
        <div className="relative">
          <MessageSquareText
            className={cn(
              "pointer-events-none absolute left-4 top-4 h-4 w-4",
              isDark ? "text-cream/40" : "text-forest/35"
            )}
            aria-hidden="true"
          />
          <textarea
            id="message"
            name="message"
            rows={4}
            className={cn(fieldClasses, "resize-none")}
            placeholder="Tell us a little about your parents' needs"
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className={cn("text-sm", isDark ? "text-sage-light" : "text-gold")}>
          {errorMessage}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "group inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium tracking-wide shadow-soft transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto",
            isDark
              ? "bg-gold text-cream hover:bg-gold/90 hover:shadow-soft-lg"
              : "bg-forest text-cream hover:bg-forest-light hover:shadow-soft-lg"
          )}
        >
          {status === "submitting" ? "Sending…" : "Request a callback"}
          <Send
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>
        <p className={cn("text-xs", isDark ? "text-cream/50" : "text-muted/60")}>
          No spam. No obligation. Just a callback.
        </p>
      </div>
    </form>
  );
}
