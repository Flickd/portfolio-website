import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import BlogCategories from '@/components/blog/BlogCategories';

export const metadata: Metadata = {
  title: 'Blog - Danicel',
  description: 'Articles about AI, Web Development, and Computer Science',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BlogCategories />
          {children}
        </div>
      </div>
    </>
  );
} 