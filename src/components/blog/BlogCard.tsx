import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: StaticImageData;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  category,
  readTime,
  image,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-sm text-blue-600 dark:text-blue-400">
              {category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {readTime} read
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {excerpt}
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </article>
    </Link>
  );
} 