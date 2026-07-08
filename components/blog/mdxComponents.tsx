import type { MDXComponents } from "mdx/types";
import Callout from "@/components/blog/Callout";

/**
 * Styling for MDX output inside a blog article. Kept as plain Tailwind
 * classes (no typography plugin) so headings/quotes/lists match the site's
 * serif/sans pairing and muted palette exactly.
 */
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="font-display mt-12 mb-4 scroll-mt-28 text-2xl leading-snug text-forest sm:text-[1.75rem]"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-display mt-9 mb-3 scroll-mt-28 text-xl leading-snug text-forest"
      {...props}
    />
  ),
  p: (props) => <p className="my-5 text-[17px] leading-[1.8] text-forest/90" {...props} />,
  ul: (props) => <ul className="my-5 ml-5 list-disc space-y-2 text-[17px] leading-[1.8] text-forest/90" {...props} />,
  ol: (props) => <ol className="my-5 ml-5 list-decimal space-y-2 text-[17px] leading-[1.8] text-forest/90" {...props} />,
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="font-display my-8 border-l-2 border-gold/50 pl-6 text-xl italic leading-relaxed text-forest/85"
      {...props}
    />
  ),
  a: (props) => <a className="text-forest underline decoration-sage decoration-2 underline-offset-2 hover:text-forest-light" {...props} />,
  strong: (props) => <strong className="font-semibold text-forest" {...props} />,
  hr: () => <hr className="my-10 border-forest/10" />,
  code: (props) => (
    <code className="rounded bg-forest/8 px-1.5 py-0.5 text-[0.9em] text-forest" {...props} />
  ),
  Callout,
};
