"use client";

import { useMemo, useState } from "react";
import {
  estimatorDaysPerMonth,
  estimatorDisclaimer,
  estimatorHoursPerDayOptions,
  estimatorRangeFactor,
  estimatorServiceTypes,
} from "@/config/estimator";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

type CarePlanEstimatorProps = {
  /** Hide the built-in eyebrow/heading when the surrounding section already provides one. */
  hideIntro?: boolean;
};

export default function CarePlanEstimator({ hideIntro = false }: CarePlanEstimatorProps) {
  const [serviceId, setServiceId] = useState(estimatorServiceTypes[0].id);
  const [hoursPerDay, setHoursPerDay] = useState(estimatorHoursPerDayOptions[1]);

  const service = estimatorServiceTypes.find((s) => s.id === serviceId) ?? estimatorServiceTypes[0];

  const { low, high } = useMemo(() => {
    const monthly = service.ratePerHour * hoursPerDay * estimatorDaysPerMonth;
    return {
      low: Math.round((monthly * (1 - estimatorRangeFactor)) / 100) * 100,
      high: Math.round((monthly * (1 + estimatorRangeFactor)) / 100) * 100,
    };
  }, [service, hoursPerDay]);

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-forest/8 bg-surface p-7 shadow-soft sm:p-9">
      {!hideIntro && (
        <>
          <p className="eyebrow mb-1">Indicative only</p>
          <h3 className="font-display text-xl text-forest sm:text-2xl">Get a sense of monthly cost</h3>
        </>
      )}

      <div className="mt-6">
        <p className="text-sm font-medium text-forest/85">Type of care</p>
        <div className="mt-2.5 grid grid-cols-2 gap-2.5">
          {estimatorServiceTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => setServiceId(type.id)}
              aria-pressed={type.id === serviceId}
              className={cn(
                "rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                type.id === serviceId
                  ? "border-forest bg-forest text-cream"
                  : "border-forest/15 text-forest/85 hover:border-forest/40"
              )}
            >
              <span className="block font-medium">{type.label}</span>
              <span className={cn("mt-0.5 block text-xs", type.id === serviceId ? "text-cream/70" : "text-muted")}>
                {type.helpText}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-forest/85">Hours of care per day</p>
        <div className="mt-2.5 flex flex-wrap gap-2.5">
          {estimatorHoursPerDayOptions.map((hours) => (
            <button
              key={hours}
              type="button"
              onClick={() => setHoursPerDay(hours)}
              aria-pressed={hours === hoursPerDay}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition-colors",
                hours === hoursPerDay
                  ? "border-forest bg-forest text-cream"
                  : "border-forest/15 text-forest/85 hover:border-forest/40"
              )}
            >
              {hours === 24 ? "24 (live-in)" : hours}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 rounded-xl bg-sage-light/25 p-5 text-center">
        <p className="text-xs uppercase tracking-wide text-muted">Approximate monthly range</p>
        <p className="font-display mt-1 text-3xl text-forest sm:text-4xl">
          {currencyFormatter.format(low)} – {currencyFormatter.format(high)}
        </p>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">{estimatorDisclaimer}</p>

      <div className="mt-6 text-center">
        <Button href="/contact" size="md">
          Get an exact quote
        </Button>
      </div>
    </div>
  );
}
