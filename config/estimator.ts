/**
 * Care plan cost estimator — PLACEHOLDER rates for an indicative monthly
 * range only. Edit ratePerHour/ratePerDay (INR) once real pricing is
 * confirmed. The estimator always presents a range (±15%) and a disclaimer
 * that final pricing follows a free home assessment — never a fixed quote.
 */

export type EstimatorServiceType = {
  id: string;
  label: string;
  /** INR per hour of care, used with the hours/day + 30-day month selected. */
  ratePerHour: number;
  helpText: string;
};

export const estimatorServiceTypes: EstimatorServiceType[] = [
  {
    id: "companion",
    label: "Companion care",
    ratePerHour: 250,
    helpText: "Daily support, conversation and supervision.",
  },
  {
    id: "nursing",
    label: "Skilled nursing care",
    ratePerHour: 400,
    helpText: "Medication, wound care, vitals monitoring.",
  },
  {
    id: "physio",
    label: "Physiotherapy",
    ratePerHour: 450,
    helpText: "In-home rehabilitation sessions.",
  },
  {
    id: "home-icu",
    label: "Home ICU / critical care",
    ratePerHour: 700,
    helpText: "Round-the-clock critical care nursing.",
  },
];

export const estimatorHoursPerDayOptions = [4, 8, 12, 24];

export const estimatorDaysPerMonth = 30;

/** Range applied around the point estimate, e.g. 0.15 = show ±15%. */
export const estimatorRangeFactor = 0.15;

export const estimatorDisclaimer =
  "Indicative only, based on the hours and service you selected. Your exact cost is confirmed after a free home assessment and depends on your parents' specific care needs.";
