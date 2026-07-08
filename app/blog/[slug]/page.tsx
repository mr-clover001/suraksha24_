import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { extractToc } from "@/lib/toc";
import { splitContentAtMidpoint } from "@/lib/splitContent";
import { formatDate } from "@/lib/formatDate";
import { siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import CoverPlaceholder from "@/components/blog/CoverPlaceholder";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareButtons from "@/components/blog/ShareButtons";
import RelatedArticles from "@/components/blog/RelatedArticles";
import InlineCta from "@/components/blog/InlineCta";
import { mdxComponents } from "@/components/blog/mdxComponents";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const mdxOptions = { mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const toc = extractToc(post.content);
  const [firstHalf, secondHalf] = splitContentAtMidpoint(post.content);
  const related = getRelatedPosts(post);
  const url = `${siteConfig.url}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: url,
  };

  return (
    <>
      <ReadingProgressBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Section tone="cream" className="pt-10 pb-0 sm:pt-12">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-forest"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All articles
          </Link>

          <div className="mx-auto mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow rounded-full bg-gold/10 px-3 py-1 text-[10px]">
                {post.category}
              </span>
              {post.sample && (
                <span className="rounded-full bg-forest/8 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-muted">
                  Sample content — replace before launch
                </span>
              )}
            </div>

            <h1 className="font-display mt-5 text-3xl leading-[1.15] tracking-tight text-forest sm:text-4xl lg:text-[2.75rem]">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-forest/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light/50 font-display text-sm text-forest">
                  {post.author.charAt(0)}
                </span>
                <div className="text-sm">
                  <p className="font-medium text-forest">{post.author}</p>
                  <p className="text-muted">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <span>{formatDate(post.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <FadeIn>
          <div className="relative mt-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sage-light/35 via-transparent to-gold/20 blur-2xl"
            />
            <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-soft-lg sm:h-80 lg:h-104">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="animate-ken-burns object-cover"
                />
              ) : (
                <CoverPlaceholder className="animate-ken-burns h-full w-full" />
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
              />
              <div className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1.5 text-xs font-medium text-forest shadow-sm backdrop-blur-sm">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {post.readingTime}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <Section tone="cream" className="pt-10 pb-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,2.28fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <TableOfContents entries={toc} />
          </aside>

          <div className="min-w-0 max-w-[70ch]">
            <MDXRemote source={firstHalf} components={mdxComponents} options={mdxOptions} />
            <InlineCta />
            <MDXRemote source={secondHalf} components={mdxComponents} options={mdxOptions} />

            <div className="mt-10 flex items-center justify-between border-t border-forest/10 pt-8">
              <p className="text-sm font-medium text-forest">Share this article</p>
              <ShareButtons url={url} title={post.title} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mx-auto mt-20 max-w-5xl">
            <h2 className="font-display text-2xl text-forest">Related articles</h2>
            <div className="mt-8">
              <RelatedArticles posts={related} />
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
