"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  servicePickerStartId,
  servicePickerTree,
} from "@/config/servicePicker";
import { services } from "@/config/site";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import { cn } from "@/lib/cn";

type ServicePickerProps = {
  /** Hide the built-in eyebrow/heading when the surrounding section already provides one. */
  hideIntro?: boolean;
};

export default function ServicePicker({
  hideIntro = false,
}: ServicePickerProps) {
  const [history, setHistory] = useState<string[]>([servicePickerStartId]);
  const [resultSlug, setResultSlug] = useState<string | null>(null);

  const currentNodeId = history[history.length - 1];
  const currentNode = servicePickerTree[currentNodeId];
  const result = resultSlug
    ? services.find((service) => service.slug === resultSlug)
    : null;

  function choose(next: string) {
    if (next.startsWith("result:")) {
      setResultSlug(next.replace("result:", ""));
    } else {
      setHistory((prev) => [...prev, next]);
    }
  }

  function goBack() {
    if (resultSlug) {
      setResultSlug(null);
      return;
    }
    setHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  }

  function restart() {
    setHistory([servicePickerStartId]);
    setResultSlug(null);
  }

  const canGoBack = resultSlug !== null || history.length > 1;

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-forest/8 bg-surface p-7 shadow-soft sm:p-9">
      {!hideIntro && (
        <>
          <p className="eyebrow mb-1">Not sure where to start?</p>
          <h3 className="font-display text-xl text-forest">
            Which service do you need?
          </h3>
        </>
      )}

      <div className={cn("min-h-[220px]", !hideIntro && "mt-6")}>
        {result ? (
          <div>
            <p className="text-sm text-muted">
              Based on what you told us, we&rsquo;d suggest:
            </p>
            <div className="mt-4">
              <ServiceCard service={result} href={`/services/${result.slug}`} />
            </div>
          </div>
        ) : (
          <fieldset>
            <legend className={cn("text-lg leading-snug text-forest")}>
              {currentNode.question}
            </legend>
            <div className="mt-5 flex flex-col gap-2.5">
              {currentNode.options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => choose(option.next)}
                  className="flex items-center justify-between gap-3 rounded-xl border border-forest/12 px-4 py-3 text-left text-sm text-forest/90 transition-colors hover:border-gold/50 hover:bg-gold/5"
                >
                  {option.label}
                  <ArrowRight
                    className="h-4 w-4 flex-shrink-0 text-gold"
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </fieldset>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-forest/8 pt-5">
        <button
          type="button"
          onClick={goBack}
          disabled={!canGoBack}
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-forest disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back
        </button>
        {result && (
          <Button href="/contact" size="md">
            Talk to a care advisor
          </Button>
        )}
        {!result && history.length > 1 && (
          <button
            type="button"
            onClick={restart}
            className="text-sm text-muted hover:text-forest"
          >
            Start over
          </button>
        )}
      </div>
    </div>
  );
}
