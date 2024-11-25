import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPostBySlug } from '@/lib/blog';

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
      <div className="relative h-64 md:h-96 mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.readTime} read</span>
          <span>•</span>
          <time>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        <div className="mt-8">
          {post.content || post.excerpt}
        </div>
      </div>
    </article>
  );
} 