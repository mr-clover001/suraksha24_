import fs from "node:fs";
import path from "node:path";

/**
 * Checks whether a file referenced by a `/public`-relative path (e.g. the
 * `src` you'd pass to next/image) actually exists on disk. Server-only —
 * used by hero sections to fall back to a styled placeholder instead of a
 * broken image while a real photo is still being sourced.
 */
export function publicFileExists(publicPath: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}
