import { CheckCircle2 } from "lucide-react";
import { reportingSample } from "@/config/site";

/**
 * Stylized phone frame showing a sample post-visit report. Built entirely
 * with CSS/markup (no image asset) to stay crisp at any size.
 */
export default function ReportCardMockup() {
  return (
    <div className="mx-auto w-full max-w-[300px]">
      <div className="rounded-[2.75rem] border-[10px] border-forest bg-forest p-1.5 shadow-soft-lg">
        <div className="overflow-hidden rounded-[2rem] bg-surface">
          <div className="flex justify-center bg-surface pt-3 pb-1">
            <div className="h-1.5 w-16 rounded-full bg-forest/15" />
          </div>

          <div className="px-5 pt-3 pb-7">
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-sage-light">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                Visit complete
              </span>
              <span className="text-[11px] text-muted/70">{reportingSample.date}</span>
            </div>

            <p className="font-display text-lg text-forest">{reportingSample.patientLabel}</p>

            <div className="mt-4 space-y-2.5">
              {reportingSample.vitals.map((vital) => (
                <div
                  key={vital.label}
                  className="flex items-center justify-between border-b border-forest/8 pb-2.5 text-sm"
                >
                  <span className="text-muted">{vital.label}</span>
                  <span className="font-medium text-forest">{vital.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2 rounded-xl bg-sage-light/30 p-3.5 text-xs leading-relaxed text-forest">
              <p>
                <span className="font-medium">Mood: </span>
                {reportingSample.mood}
              </p>
              <p>
                <span className="font-medium">Medication: </span>
                {reportingSample.medication}
              </p>
            </div>

            <p className="mt-4 text-xs font-medium text-gold">
              Next visit: {reportingSample.nextVisit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
