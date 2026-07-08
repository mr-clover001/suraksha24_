import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
};

/** Generic surface card: rounded-2xl, soft shadow, hairline border. */
export default function Card({ children, className, as = "div" }: CardProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-forest/8 bg-surface p-8 shadow-soft",
        className
      )}
    >
      {children}
    </Tag>
  );
}
