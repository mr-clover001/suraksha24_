import { trustStats } from "@/config/site";
import FadeIn from "@/components/ui/FadeIn";
import StatCounter from "@/components/home/StatCounter";
import { cn } from "@/lib/cn";

export default function TrustStrip() {
  const hasPlaceholder = trustStats.some((s) => s.placeholder);

  return (
    <section className="border-y border-forest/8 bg-surface-alt py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 gap-y-8 text-center sm:grid-cols-3 lg:grid-cols-5">
            {trustStats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  index === trustStats.length - 1 && "col-span-2 sm:col-span-1",
                )}
              >
                <StatCounter
                  value={stat.value}
                  mark={
                    stat.placeholder && <span className="text-gold">*</span>
                  }
                />
                <p className="mt-1.5 text-xs uppercase tracking-wide text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
