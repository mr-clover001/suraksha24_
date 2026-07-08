import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Post } from "@/lib/blog";
import { formatDate } from "@/lib/formatDate";
import CoverPlaceholder from "@/components/blog/CoverPlaceholder";
import { cn } from "@/lib/cn";

type PostCardProps = {
  post: Post;
  featured?: boolean;
};

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-forest/8 bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/25 hover:shadow-soft-lg",
        featured && "lg:flex-row"
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          "relative block h-48 w-full flex-shrink-0 overflow-hidden",
          featured && "lg:h-auto lg:w-2/5"
        )}
      >
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt=""
            fill
            priority={featured}
            sizes={
              featured
                ? "(min-width: 1024px) 40vw, 100vw"
                : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            }
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <CoverPlaceholder className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105" />
        )}

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span className="eyebrow rounded-full bg-cream/90 px-3 py-1 text-[10px] shadow-sm backdrop-blur-sm">
            {post.category}
          </span>
          {post.sample && (
            <span className="rounded-full bg-forest/85 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-cream shadow-sm backdrop-blur-sm">
              Sample content
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3
          className={cn(
            "font-display leading-snug text-forest",
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          )}
        >
          <Link href={`/blog/${post.slug}`} className="hover:text-forest-light">
            {post.title}
          </Link>
        </h3>

        <p
          className={cn(
            "mt-3 text-muted",
            featured ? "text-base leading-relaxed" : "text-[15px] leading-relaxed line-clamp-3"
          )}
        >
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-forest/8 pt-5">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted/80">
            {featured && (
              <>
                <span className="font-medium text-forest/80">{post.author}</span>
                <span aria-hidden="true">·</span>
              </>
            )}
            <span>{formatDate(post.date)}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>
          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
