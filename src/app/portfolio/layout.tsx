import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Portfolio - Danicel',
  description: 'Explore my projects and skills in software development and AI.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8">
            <ul className="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
              <li>
                <a href="/portfolio/projects" className="inline-block px-4 py-2 border-b-2 border-transparent hover:border-blue-600">
                  Projects
                </a>
              </li>
              <li>
                <a href="/portfolio/skills" className="inline-block px-4 py-2 border-b-2 border-transparent hover:border-blue-600">
                  Skills
                </a>
              </li>
            </ul>
          </nav>
          {children}
        </div>
      </div>
    </>
  );
} 