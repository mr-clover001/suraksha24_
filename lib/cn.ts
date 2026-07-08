type ClassValue = string | number | null | undefined | false;

/** Joins truthy class fragments. A tiny stand-in for clsx to avoid an extra dependency. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
