"use client";

import { useState } from "react";
import { Briefcase, LineChart, Link2, Mail, Phone, Send, User } from "lucide-react";
import { experienceOptions, jobOpenings } from "@/config/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

const fieldBaseClasses =
  "w-full rounded-2xl border px-4 py-3 text-sm outline-none transition-all focus-visible:outline-2 focus-visible:outline-offset-2";

export default function CareerApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const labelClasses = "mb-1.5 block text-sm font-medium text-forest/85";
  const iconClasses = "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-forest/35";
  const fieldClasses = cn(
    fieldBaseClasses,
    "pl-11 border-forest/15 bg-surface text-forest shadow-sm placeholder:text-muted/60 focus-visible:outline-gold hover:border-forest/25",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/careers/apply", {
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
      <div className="rounded-2xl border border-forest/10 bg-surface-alt p-8 text-center" role="status">
        <p className="font-display text-xl text-forest">Application received — thank you.</p>
        <p className="mt-2 text-sm text-muted">
          Our HR team reviews every application personally. If your profile fits an open role, we&rsquo;ll call
          you for a screening conversation within a few working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full name
          </label>
          <div className="relative">
            <User className={iconClasses} aria-hidden="true" />
            <input id="name" name="name" type="text" autoComplete="name" required className={fieldClasses} placeholder="Your full name" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <div className="relative">
            <Mail className={iconClasses} aria-hidden="true" />
            <input id="email" name="email" type="email" autoComplete="email" required className={fieldClasses} placeholder="you@example.com" />
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
            <input id="phone" name="phone" type="tel" autoComplete="tel" required className={fieldClasses} placeholder="e.g. +91 98765 43210" />
          </div>
        </div>
        <div>
          <label htmlFor="experience" className={labelClasses}>
            Experience
          </label>
          <div className="relative">
            <LineChart className={iconClasses} aria-hidden="true" />
            <select id="experience" name="experience" required defaultValue="" className={fieldClasses}>
              <option value="" disabled>
                Select your experience
              </option>
              {experienceOptions.map((option) => (
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
          <label htmlFor="position" className={labelClasses}>
            Position you&rsquo;re applying for
          </label>
          <div className="relative">
            <Briefcase className={iconClasses} aria-hidden="true" />
            <select id="position" name="position" required defaultValue="" className={fieldClasses}>
              <option value="" disabled>
                Select a role
              </option>
              {jobOpenings.map((job) => (
                <option key={job.slug} value={job.title}>
                  {job.title}
                </option>
              ))}
              <option value="General application">General application</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="resumeLink" className={labelClasses}>
            Resume link <span className="text-muted/60">(Drive, Dropbox, etc.)</span>
          </label>
          <div className="relative">
            <Link2 className={iconClasses} aria-hidden="true" />
            <input id="resumeLink" name="resumeLink" type="url" className={fieldClasses} placeholder="https://" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Anything you&rsquo;d like us to know <span className="text-muted/60">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={cn(fieldBaseClasses, "resize-none border-forest/15 bg-surface text-forest shadow-sm placeholder:text-muted/60 focus-visible:outline-gold hover:border-forest/25")}
          placeholder="Relevant experience, certifications, availability, or anything else worth knowing"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-gold">
          {errorMessage}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 text-base font-medium tracking-wide text-cream shadow-soft transition-all duration-300 hover:bg-forest-light hover:shadow-soft-lg disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? "Submitting…" : "Submit application"}
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </button>
        <p className="text-xs text-muted/60">We review every application personally.</p>
      </div>
    </form>
  );
}
