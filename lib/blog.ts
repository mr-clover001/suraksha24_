import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { calculateReadingTime } from "@/lib/readingTime";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  category: string;
  coverImage?: string;
  readingTime?: string;
  draft?: boolean;
  /** Shown with a visible "Sample content" badge — seed copy awaiting a real byline/review. */
  sample?: boolean;
};

export type Post = PostFrontmatter & {
  content: string;
  readingTime: string;
};

function readPostFile(filename: string): Post {
  const filePath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  return {
    ...frontmatter,
    slug: frontmatter.slug ?? filename.replace(/\.mdx?$/, ""),
    content,
    readingTime: frontmatter.readingTime ?? calculateReadingTime(content),
  };
}

/** All published posts, newest first. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map(readPostFile)
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getAllCategories(): string[] {
  const categories = new Set(getAllPosts().map((post) => post.category));
  return Array.from(categories);
}

export function getRelatedPosts(current: Post, limit = 3): Post[] {
  const others = getAllPosts().filter((post) => post.slug !== current.slug);
  const sameCategory = others.filter((post) => post.category === current.category);
  const rest = others.filter((post) => post.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
