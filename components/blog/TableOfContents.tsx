"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { TocEntry } from "@/lib/toc";
import { cn } from "@/lib/cn";

type TableOfContentsProps = {
  entries: TocEntry[];
};

export default function TableOfContents({ entries }: TableOfContentsProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(entries[0]?.slug ?? null);

  useEffect(() => {
    if (entries.length === 0) return;

    const headingElements = entries
      .map((entry) => document.getElementById(entry.slug))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (visibleEntries) => {
        const visible = visibleEntries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSlug(visible.target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    headingElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [entries]);

  if (entries.length === 0) return null;

  const list = (
    <ul className="space-y-2.5 border-l border-forest/10 pl-4">
      {entries.map((entry) => (
        <li key={entry.slug} className={entry.depth === 3 ? "ml-3" : undefined}>
          <a
            href={`#${entry.slug}`}
            aria-current={activeSlug === entry.slug ? "location" : undefined}
            className={cn(
              "block text-[13.5px] leading-snug transition-colors",
              activeSlug === entry.slug ? "font-medium text-forest" : "text-muted hover:text-forest"
            )}
          >
            {entry.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <nav aria-label="Table of contents" className="hidden lg:block">
        <p className="eyebrow mb-4 text-[10px]">On this page</p>
        {list}
      </nav>

      {/* Mobile/tablet: collapsible */}
      <details className="group mb-8 rounded-2xl border border-forest/10 bg-surface-alt p-5 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-forest">
          Table of contents
          <ChevronDown className="h-4 w-4 text-gold transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <div className="mt-4">{list}</div>
      </details>
    </>
  );
}
