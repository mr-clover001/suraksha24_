"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, MessageCircleQuestion, Phone, X } from "lucide-react";
import { botQuickAnswers, contact } from "@/config/site";
import { cn } from "@/lib/cn";

type Message =
  | { role: "user"; text: string }
  | { role: "bot"; text: string; href?: string; hrefLabel?: string };

const GREETING: Message = {
  role: "bot",
  text: "Hi, I'm the Suraksha24 quick-answers helper. Tap a question below — for anything else, call or WhatsApp us directly.",
};

/**
 * Floating rule-based FAQ widget. Deliberately not presented as a live agent
 * or AI — it only ever answers from the fixed botQuickAnswers list, with a
 * persistent call/WhatsApp handoff for everything else.
 */
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [askedIndexes, setAskedIndexes] = useState<number[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function ask(index: number) {
    const item = botQuickAnswers[index];
    setAskedIndexes((prev) => [...prev, index]);
    setMessages((prev) => [...prev, { role: "user", text: item.question }]);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: item.answer, href: item.href, hrefLabel: item.hrefLabel },
      ]);
    }, 450);
  }

  function reset() {
    setMessages([GREETING]);
    setAskedIndexes([]);
  }

  const remaining = botQuickAnswers
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => !askedIndexes.includes(index));

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="suraksha-chatbot-panel"
        aria-label={open ? "Close quick answers" : "Open quick answers"}
        className={cn(
          "fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream shadow-soft-lg transition-transform hover:scale-105 sm:bottom-6",
          !open && "animate-gentle-pulse"
        )}
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageCircleQuestion className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      <div
        id="suraksha-chatbot-panel"
        role="dialog"
        aria-label="Suraksha24 quick answers"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "fixed bottom-[9.5rem] right-6 z-50 flex max-h-[32rem] w-[calc(100vw-3rem)] max-w-sm origin-bottom-right flex-col overflow-hidden rounded-2xl border border-forest/10 bg-surface shadow-soft-lg transition-all duration-300 sm:bottom-24",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        )}
      >
        <div className="flex items-start justify-between gap-3 bg-forest px-5 py-4 text-cream">
          <div>
            <p className="font-display text-base leading-tight">Quick answers</p>
            <p className="mt-1 text-xs text-cream/65">
              Instant answers to common questions — not a live agent.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close quick answers"
            className="flex-shrink-0 rounded-full p-1.5 text-cream/80 hover:bg-cream/10 hover:text-cream"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
            >
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed",
                  message.role === "user"
                    ? "rounded-br-sm bg-forest text-cream"
                    : "rounded-bl-sm bg-surface-alt text-forest"
                )}
              >
                {message.text}
                {message.role === "bot" && message.href && (
                  <Link
                    href={message.href}
                    className="mt-2 flex items-center gap-1 text-xs font-medium text-gold hover:text-gold/80"
                  >
                    {message.hrefLabel}
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-forest/8 p-4">
          {remaining.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {remaining.map(({ item, index }) => (
                <button
                  key={item.question}
                  type="button"
                  onClick={() => ask(index)}
                  className="rounded-full border border-forest/15 px-3 py-1.5 text-xs text-forest/85 transition-colors hover:border-gold/50 hover:bg-gold/5"
                >
                  {item.question}
                </button>
              ))}
            </div>
          ) : (
            <button
              type="button"
              onClick={reset}
              className="text-xs font-medium text-gold hover:text-gold/80"
            >
              Ask something else
            </button>
          )}

          <div className="mt-4 flex gap-2 border-t border-forest/8 pt-4">
            <a
              href={contact.phoneHref}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-forest px-3 py-2 text-xs font-medium text-cream hover:bg-forest-light"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Call
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-forest/15 px-3 py-2 text-xs font-medium text-forest hover:border-forest/40"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
