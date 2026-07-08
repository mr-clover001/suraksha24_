import type { Post } from "@/lib/blog";
import PostCard from "@/components/blog/PostCard";

export default function RelatedArticles({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
