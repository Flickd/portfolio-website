import Image from 'next/image';
import Navigation from '@/components/Navigation';
import SkillCard from '@/components/about/SkillCard';
import Profile from '@/app/content/images/Profile.png';

const skills = {
  programming: [
    { name: 'TypeScript', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'Java', level: 80 },
  ],
  frameworks: [
    { name: 'React/Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'TailwindCSS', level: 90 },
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
  ],
};

export default function About() {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Profile Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative w-48 h-48">
                <Image
                  src={Profile}
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  About Me
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I&apos;m a Computer Science student passionate about AI and software development.
                  Currently focusing on web development and machine learning, I love building
                  projects that combine both fields.
                </p>
                <div className="flex gap-4">
                  <a
                    href="/resume.pdf"
                    className="btn-primary inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    className="btn-secondary inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard category="Programming Languages" skills={skills.programming} />
            <SkillCard category="Frameworks & Libraries" skills={skills.frameworks} />
            <SkillCard category="Tools & Technologies" skills={skills.tools} />
          </div>
        </div>
      </div>
    </>
  );
} 