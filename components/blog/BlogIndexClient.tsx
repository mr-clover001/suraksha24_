"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Post } from "@/lib/blog";
import PostCard from "@/components/blog/PostCard";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";

type BlogIndexClientProps = {
  featuredPost: Post;
  posts: Post[];
  categories: string[];
};

export default function BlogIndexClient({
  featuredPost,
  posts,
  categories,
}: BlogIndexClientProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory =
        !activeCategory || post.category === activeCategory;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, activeCategory]);

  return (
    <div>
      <FadeIn>
        <PostCard post={featuredPost} featured />
      </FadeIn>

      <div className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Filter by category" className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            aria-pressed={activeCategory === null}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              activeCategory === null
                ? "bg-linear-to-r from-forest via-forest-light via-60% to-teal text-cream hover:brightness-110 hover:shadow-soft-lg"
                : "border-forest/15 bg-surface text-forest/80 hover:border-forest/40",
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                activeCategory === category
                  ? "bg-linear-to-r from-forest via-forest-light via-60% to-teal text-cream hover:brightness-110 hover:shadow-soft-lg"
                  : "border-forest/15 bg-surface text-forest/80 hover:border-forest/40",
              )}
            >
              {category}
            </button>
          ))}
        </nav>

        <label className="relative w-full sm:w-64">
          <span className="sr-only">Search articles</span>
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted/60"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles…"
            className="w-full rounded-full border border-forest/15 bg-surface py-2.5 pl-10 pr-4 text-sm text-forest outline-none placeholder:text-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          />
        </label>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <FadeIn key={post.slug} delay={(index % 3) * 80}>
              <PostCard post={post} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted">
          No articles match that search yet. Try a different term or category.
        </p>
      )}
    </div>
  );
}
