import ProjectCard from '@/components/portfolio/ProjectCard';
import Image from "@/app/content/images/AI_Chat_Application.png"

const projects = [
  {
    title: 'AI Chat Application',
    description: 'A real-time chat application powered by artificial intelligence, built with Next.js and OpenAI API.',
    image: Image,
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/ai-chat',
    liveUrl: 'https://ai-chat-demo.com',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
} 