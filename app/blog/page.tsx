import type { Metadata } from "next";
import Image from "next/image";
import { getAllCategories, getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import BlogIndexClient from "@/components/blog/BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical, calm guidance for anyone caring for elderly parents in India — elder care, logistics, recovery and more.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const [featuredPost, ...rest] = posts;

  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 -z-30">
          <Image
            src="/assests/BlogBackground.webp"
            alt="An elderly couple stand together outside, smiling and waving warmly"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[35%_30%]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-gold/35 mix-blend-color"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-l from-black/65 via-black/60 to-transparent"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sage-light/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
        />

        <div className="relative mx-auto flex max-w-7xl justify-end px-6 sm:px-8">
          <FadeIn>
            <div className="max-w-xl">
              <p className="eyebrow mb-6">From Suraksha24</p>
              <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-cream sm:text-5xl">
                Guidance for families caring from near or far
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-cream/90">
                Practical, calm reading on caring for elderly parents in India —
                written for every family juggling care alongside everything else.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section tone="cream" className="pt-16 pb-24 sm:pt-20">
        {featuredPost ? (
          <BlogIndexClient
            featuredPost={featuredPost}
            posts={rest}
            categories={categories}
          />
        ) : (
          <p className="text-center text-muted">
            More articles are on the way.
          </p>
        )}
      </Section>
    </>
  );
}
