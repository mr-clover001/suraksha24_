import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({ eyebrow, title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <>
      <section className="bg-linear-to-r from-forest via-forest-light via-60% to-teal pt-32 pb-14 sm:pt-40 sm:pb-16">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <FadeIn>
            <p className="eyebrow mb-4 text-sage-light">{eyebrow}</p>
            <h1 className="font-display text-3xl leading-tight text-cream sm:text-4xl">{title}</h1>
            <p className="mt-4 text-sm text-cream/60">Last updated: {lastUpdated}</p>
          </FadeIn>
        </div>
      </section>

      <Section tone="cream" className="pt-14 pb-20 sm:pt-16">
        <div className="mx-auto max-w-3xl">{children}</div>
      </Section>
    </>
  );
}
