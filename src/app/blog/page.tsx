import BlogCard from '@/components/blog/BlogCard';
import { getAllPosts } from '@/lib/blog';

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Latest Articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
} 