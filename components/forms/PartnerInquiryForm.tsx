"use client";

import { useState } from "react";
import { Building2, Mail, MessageSquareText, Phone, Send, User } from "lucide-react";
import { partnerTypeOptions } from "@/config/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

type PartnerInquiryFormProps = {
  /** "light" for cream/white sections, "dark" for the forest-green block. */
  tone?: "light" | "dark";
};

const fieldBaseClasses =
  "w-full rounded-2xl border px-4 py-3 text-sm outline-none transition-all focus-visible:outline-2 focus-visible:outline-offset-2";

export default function PartnerInquiryForm({ tone = "dark" }: PartnerInquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isDark = tone === "dark";
  const labelClasses = cn("mb-1.5 block text-sm font-medium", isDark ? "text-cream/90" : "text-forest/85");
  const iconClasses = cn(
    "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2",
    isDark ? "text-cream/40" : "text-forest/35",
  );
  const fieldClasses = cn(
    fieldBaseClasses,
    "pl-11",
    isDark
      ? "border-cream/25 bg-cream/10 text-cream placeholder:text-cream/40 focus-visible:outline-sage-light hover:border-cream/40"
      : "border-forest/15 bg-surface text-forest shadow-sm placeholder:text-muted/60 focus-visible:outline-gold hover:border-forest/25",
  );
  const selectClasses = cn(
    fieldBaseClasses,
    isDark
      ? "border-cream/25 bg-cream/10 text-cream focus-visible:outline-sage-light hover:border-cream/40"
      : "border-forest/15 bg-surface text-forest shadow-sm focus-visible:outline-gold hover:border-forest/25",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/partner", {
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
        )}
        role="status"
      >
        <p className={cn("font-display text-xl", isDark ? "text-cream" : "text-forest")}>
          Thank you — we&rsquo;ve received your enquiry.
        </p>
        <p className={cn("mt-2 text-sm", isDark ? "text-cream/75" : "text-muted")}>
          Our partnerships team will reach out within one working day to set up an introductory call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="organization" className={labelClasses}>
            Organization name
          </label>
          <div className="relative">
            <Building2 className={iconClasses} aria-hidden="true" />
            <input
              id="organization"
              name="organization"
              type="text"
              required
              className={fieldClasses}
              placeholder="Hospital, lab, practice or organization"
            />
          </div>
        </div>
        <div>
          <label htmlFor="partnerType" className={labelClasses}>
            Partnership type
          </label>
          <select id="partnerType" name="partnerType" required defaultValue="" className={selectClasses}>
            <option value="" disabled className="text-forest">
              Select a category
            </option>
            {partnerTypeOptions.map((option) => (
              <option key={option} value={option} className="text-forest">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contactName" className={labelClasses}>
            Contact person
          </label>
          <div className="relative">
            <User className={iconClasses} aria-hidden="true" />
            <input id="contactName" name="contactName" type="text" autoComplete="name" required className={fieldClasses} placeholder="Your name" />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <div className="relative">
            <Phone className={iconClasses} aria-hidden="true" />
            <input id="phone" name="phone" type="tel" autoComplete="tel" required className={fieldClasses} placeholder="e.g. +91 98765 43210" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Work email
        </label>
        <div className="relative">
          <Mail className={iconClasses} aria-hidden="true" />
          <input id="email" name="email" type="email" autoComplete="email" required className={fieldClasses} placeholder="you@organization.com" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Tell us about the partnership you have in mind{" "}
          <span className={isDark ? "text-cream/50" : "text-muted/60"}>(optional)</span>
        </label>
        <div className="relative">
          <MessageSquareText
            className={cn("pointer-events-none absolute left-4 top-4 h-4 w-4", isDark ? "text-cream/40" : "text-forest/35")}
            aria-hidden="true"
          />
          <textarea
            id="message"
            name="message"
            rows={4}
            className={cn(fieldClasses, "resize-none")}
            placeholder="Referral volume, geography, or anything else that helps us respond well"
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
              : "bg-forest text-cream hover:bg-forest-light hover:shadow-soft-lg",
          )}
        >
          {status === "submitting" ? "Sending…" : "Start the conversation"}
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </button>
        <p className={cn("text-xs", isDark ? "text-cream/50" : "text-muted/60")}>
          No spam. A real person will respond.
        </p>
      </div>
    </form>
  );
}
