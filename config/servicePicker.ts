/**
 * "Which service do you need?" mini-guide — a small decision tree.
 * Each option's `next` is either another node id, or "result:<service-slug>"
 * where <service-slug> matches a `slug` in config/site.ts `services`.
 * Edit freely — the component just walks this structure.
 */

export type PickerOption = { label: string; next: string };
export type PickerNode = { id: string; question: string; options: PickerOption[] };

export const servicePickerStartId = "start";

export const servicePickerTree: Record<string, PickerNode> = {
  start: {
    id: "start",
    question: "What's this mainly for?",
    options: [
      { label: "Everyday support & companionship", next: "everyday" },
      { label: "Recovering after a hospital stay, surgery or fall", next: "recovery" },
      { label: "A medical emergency happening right now", next: "result:emergency-response" },
      { label: "Ongoing medical or nursing needs", next: "result:skilled-nursing-care" },
      { label: "Equipment or a diagnostic test", next: "equipment" },
    ],
  },
  everyday: {
    id: "everyday",
    question: "Do they also need help with mobility or physiotherapy?",
    options: [
      { label: "Yes, mobility is a concern", next: "result:physiotherapy" },
      { label: "No — just companionship & daily support", next: "result:companion-care" },
    ],
  },
  recovery: {
    id: "recovery",
    question: "Do they need round-the-clock critical monitoring (ventilator, ICU-level care)?",
    options: [
      { label: "Yes, critical care monitoring", next: "result:home-icu" },
      { label: "No — just rehabilitation support", next: "result:physiotherapy" },
    ],
  },
  equipment: {
    id: "equipment",
    question: "Which do you need?",
    options: [
      { label: "Medical equipment (bed, oxygen, wheelchair…)", next: "result:medical-equipment" },
      { label: "A diagnostic test or lab work", next: "result:diagnostics" },
    ],
  },
};
