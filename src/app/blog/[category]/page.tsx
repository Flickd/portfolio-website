import { notFound } from 'next/navigation';
import BlogCard from '@/components/blog/BlogCard';
import { getPostsByCategory } from '@/lib/blog';

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const posts = await getPostsByCategory(params.category);
  
  if (!posts.length) {
    notFound();
  }

  const categoryTitle = posts[0].category;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {categoryTitle}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
} 