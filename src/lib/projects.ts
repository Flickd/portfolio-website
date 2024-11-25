import { StaticImageData } from 'next/image';
import AIChatImage from '@/app/content/images/AI_Chat_Application.png';
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
    title: 'AI Chat Application',
    description: 'A real-time chat application powered by artificial intelligence, built with Next.js and OpenAI API.',
    image: AIChatImage,
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/ai-chat',
    liveUrl: 'https://ai-chat-demo.com',
    featured: true,
    date: '2024-03-15',
  },
  {
    title: 'Project 2',
    description: 'A real-time chat application powered by artificial intelligence, built with Next.js and OpenAI API.',
    image: AIChatImage,
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/ai-chat',
    liveUrl: 'https://ai-chat-demo.com',
    featured: false,
    date: '2024-04-15',
  },
  {
    title: 'Project 3',
    description: 'A real-time chat application powered by artificial intelligence, built with Next.js and OpenAI API.',
    image: AIChatImage,
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/ai-chat',
    liveUrl: 'https://ai-chat-demo.com',
    featured: true,
    date: '2024-05-15',
  },
  {
    title: 'Project 4',
    description: 'A real-time chat application powered by artificial intelligence, built with Next.js and OpenAI API.',
    image: AIChatImage,
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/ai-chat',
    liveUrl: 'https://ai-chat-demo.com',
    featured: false,
    date: '2024-06-15',
  },
  {
    title: 'Project 5',
    description: 'A real-time chat application powered by artificial intelligence, built with Next.js and OpenAI API.',
    image: AIChatImage,
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/ai-chat',
    liveUrl: 'https://ai-chat-demo.com',
    featured: true,
    date: '2024-06-15',
  },
  {
    title: 'Project 6',
    description: 'A real-time chat application powered by artificial intelligence, built with Next.js and OpenAI API.',
    image: AIChatImage,
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/ai-chat',
    liveUrl: 'https://ai-chat-demo.com',
    featured: false,
    date: '2024-06-15',
  },
  {
    title: 'Project 7',
    description: 'A real-time chat application powered by artificial intelligence, built with Next.js and OpenAI API.',
    image: AIChatImage,
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/ai-chat',
    liveUrl: 'https://ai-chat-demo.com',
    featured: false,
    date: '2024-06-15',
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