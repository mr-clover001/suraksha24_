const WORDS_PER_MINUTE = 200;

/** Rough word-count-based reading time, used when frontmatter omits one. */
export function calculateReadingTime(content: string): string {
  const plainText = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_[\]()!-]/g, " ");

  const words = plainText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
