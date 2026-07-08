import GithubSlugger from "github-slugger";

export type TocEntry = {
  depth: 2 | 3;
  text: string;
  slug: string;
};

/**
 * Extracts H2/H3 headings from raw markdown/MDX for the table of contents.
 * Uses github-slugger — the same slugging algorithm rehype-slug applies to
 * the rendered headings — so these anchors match the real heading ids.
 */
export function extractToc(source: string): TocEntry[] {
  const slugger = new GithubSlugger();
  const headingPattern = /^(#{2,3})\s+(.+)$/gm;
  const entries: TocEntry[] = [];

  for (const match of source.matchAll(headingPattern)) {
    const depth = match[1].length as 2 | 3;
    const text = match[2].trim().replace(/[*_`]/g, "");
    entries.push({ depth, text, slug: slugger.slug(text) });
  }

  return entries;
}
