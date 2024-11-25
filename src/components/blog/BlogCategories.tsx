'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const categories = [
  { name: 'All Posts', path: '/blog' },
  { name: 'AI News', path: '/blog/ai-news' },
  { name: 'Web Development', path: '/blog/web-dev' },
  { name: 'Computer Science', path: '/blog/cs' },
  { name: 'Programming Tips', path: '/blog/programming' },
];

export default function BlogCategories() {
  const pathname = usePathname();

  return (
    <nav className="mb-8">
      <ul className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <li key={category.path}>
            <Link
              href={category.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${pathname === category.path
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 