import { StaticImageData } from 'next/image';
import AIChatImage from '@/app/content/images/AI_Chat_Application.png';
import PWImage from '@/app/content/images/website project cover.webp';
import AutomationProjectImage from '@/app/content/images/Automation project.webp';
// Import other project images...

export interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  date: string; // ISO date string
}

const projects: Project[] = [
  {
    title: 'Danicel Portfolio Website',
    description: 'A platform to showcase my projects and skills.',
    image: PWImage,
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/flickd/portfolio-website',
    liveUrl: '',
    featured: true,
    date: '2024-11-25',
  },
  {
    title: 'Automation of Software Development Processes',
    description: 'A university project that automates software development processes using AI, particularly automated comments and the creation of unit tests.',
    image: AutomationProjectImage,
    technologies: ['VS Code Extension API', 'TypeScript', 'Hugging Face', 'Ollama'],
    githubUrl: 'https://github.com/Ataulhaye/smartautomation',
    liveUrl: '',
    featured: true,
    date: '2024-11-16',
  },
  // Add more projects here...
];

export function getFeaturedProjects(): Project[] {
  return projects
    .filter(project => project.featured)
    .slice(0, 3);
}

export function getRecentProjects(): Project[] {
  return projects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
}

export function getAllProjects(): Project[] {
  // Exclude featured and recent projects to avoid duplication
  const recentIds = new Set(getRecentProjects().map(p => p.title));
  
  return projects.filter(project => 
    !recentIds.has(project.title)
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
} 