/**
 * Splits raw MDX roughly in half at the nearest "## " heading, so the page
 * can drop an inline CTA card between the two halves. Falls back to the
 * nearest blank line if the article has fewer than two H2 headings.
 */
export function splitContentAtMidpoint(content: string): [string, string] {
  const headingIndices = [...content.matchAll(/^##\s+.+$/gm)].map((match) => match.index ?? 0);

  if (headingIndices.length >= 2) {
    const middleHeading = headingIndices[Math.floor(headingIndices.length / 2)];
    return [content.slice(0, middleHeading).trimEnd(), content.slice(middleHeading)];
  }

  const midpoint = Math.floor(content.length / 2);
  const breakPoint = content.indexOf("\n\n", midpoint);
  const splitAt = breakPoint === -1 ? midpoint : breakPoint;
  return [content.slice(0, splitAt).trimEnd(), content.slice(splitAt)];
}
