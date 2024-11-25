import Link from 'next/link';
import Image from 'next/image';
import Logo from '../app/content/images/Logo.jpg';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <Image 
              src={Logo}
              alt="Danicel Logo" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Danicel
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              About Me
            </Link>
            <Link href="/mindmap" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Mindmap
            </Link>
            <Link href="/portfolio" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 