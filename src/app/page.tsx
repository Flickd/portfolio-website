import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Computer Science Student & AI Enthusiast
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Featured Projects
            </h2>
            {/* Add project cards here */}
          </div>
        </section>
      </div>
    </>
  );
}
