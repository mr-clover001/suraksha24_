export type ParsedStat = {
  prefix: string;
  target: number;
  decimals: number;
  suffix: string;
} | null;

/** Splits a display value like "10,000+" or "4.8★" into an animatable number + surrounding text. */
export function parseStatValue(value: string): ParsedStat {
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;

  const [, prefix, numberPart, suffix] = match;
  const decimals = numberPart.includes(".") ? numberPart.split(".")[1].length : 0;
  const target = Number(numberPart.replace(/,/g, ""));
  if (Number.isNaN(target)) return null;

  return { prefix, target, decimals, suffix };
}
