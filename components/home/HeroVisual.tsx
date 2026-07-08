import { nurseNote, trustStats } from "@/config/site";
import ReportCardMockup from "@/components/home/ReportCardMockup";

const ratingStat = trustStats.find((stat) => stat.label.includes("Google")) ?? trustStats[0];

/**
 * Original, on-brand hero visual — no stock photography is licensed for
 * this build, so instead of a placeholder photo this reuses the report-card
 * mockup (the site's real differentiator) inside a decorative composition.
 * Swap for real photography of caregivers/family once available.
 */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto flex max-w-sm items-center justify-center py-10 lg:max-w-none lg:py-0">
      <div
        aria-hidden="true"
        className="absolute h-72 w-72 rounded-full bg-cream/20 blur-3xl sm:h-80 sm:w-80"
      />
      <div
        aria-hidden="true"
        className="absolute h-[22rem] w-[22rem] rounded-full border border-dashed border-cream/25 sm:h-[26rem] sm:w-[26rem]"
      />
      <div
        aria-hidden="true"
        className="absolute h-64 w-64 rounded-full border border-dashed border-gold/35 sm:h-72 sm:w-72"
      />

      <div className="relative rotate-2 transition-transform duration-500 ease-out hover:rotate-0">
        <ReportCardMockup />
      </div>

      <div className="absolute -left-2 top-2 flex items-center gap-3 rounded-2xl border border-forest/8 bg-surface px-4 py-3 shadow-soft-lg sm:-left-6 sm:top-6">
        <span className="font-display flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sage-light/50 text-forest">
          {nurseNote.name.charAt(0)}
        </span>
        <div className="text-left">
          <p className="text-sm font-medium leading-none text-forest">{nurseNote.name}</p>
          <p className="mt-1 text-xs text-muted">{nurseNote.role}</p>
        </div>
      </div>

      <div className="absolute -right-1 bottom-4 rounded-2xl border border-forest/8 bg-surface px-4 py-3 text-center shadow-soft-lg sm:-right-4 sm:bottom-10">
        <p className="font-display text-lg leading-none text-forest">{ratingStat.value}</p>
        <p className="mt-1 text-[10px] uppercase tracking-wide text-muted">{ratingStat.label}</p>
      </div>
    </div>
  );
}
