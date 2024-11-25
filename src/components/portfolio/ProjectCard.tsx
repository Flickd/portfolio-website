import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaCalendar } from 'react-icons/fa';
import { StaticImageData } from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  date,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <FaCalendar className="mr-2" />
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
          })}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600"
            >
              <FaGithub className="mr-2" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 