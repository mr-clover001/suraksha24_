import { Info, Lightbulb } from "lucide-react";
import { cn } from "@/lib/cn";

type CalloutProps = {
  type?: "info" | "tip";
  title?: string;
  children: React.ReactNode;
};

const styles = {
  info: {
    wrapper: "border-sage/30 bg-sage-light/25",
    icon: Info,
    iconClass: "text-forest",
    defaultTitle: "Good to know",
  },
  tip: {
    wrapper: "border-gold/30 bg-gold/10",
    icon: Lightbulb,
    iconClass: "text-gold",
    defaultTitle: "Tip",
  },
};

/** Usable directly inside .mdx content as <Callout type="tip">…</Callout>. */
export default function Callout({ type = "info", title, children }: CalloutProps) {
  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={cn("not-prose my-6 rounded-2xl border p-5", style.wrapper)}>
      <div className="flex gap-3">
        <Icon className={cn("mt-0.5 h-5 w-5 flex-shrink-0", style.iconClass)} aria-hidden="true" />
        <div>
          <p className="font-medium text-forest">{title ?? style.defaultTitle}</p>
          <div className="mt-1.5 text-[15px] leading-relaxed text-muted [&_p]:my-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
