"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import FadeIn from "@/components/ui/FadeIn";

type AccordionItem = {
  question: string;
  answer: string;
};

type PlusAccordionProps = {
  items: AccordionItem[];
};

/** Premium FAQ accordion: individual elevated cards with a gold icon badge that fills solid on open. */
export default function PlusAccordion({ items }: PlusAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <FadeIn key={item.question} delay={index * 60}>
            <div
              className={cn(
                "rounded-2xl border bg-surface shadow-soft transition-all duration-300",
                isOpen
                  ? "border-gold/25 shadow-soft-lg"
                  : "border-forest/8 hover:border-gold/20 hover:shadow-soft-lg",
              )}
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left sm:px-7"
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300",
                      isOpen
                        ? "bg-linear-to-r from-forest via-forest-light via-60% to-teal text-cream hover:brightness-110 hover:shadow-soft-lg"
                        : "bg-gold/10 text-gold",
                    )}
                  >
                    <Plus
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="font-display flex-1 text-base leading-snug text-forest sm:text-lg">
                    {item.question}
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 pl-[4.25rem] text-sm leading-relaxed text-muted sm:px-7 sm:pl-[4.75rem]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
