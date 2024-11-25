import ProjectCard from '@/components/portfolio/ProjectCard';
import { getAllProjects, getFeaturedProjects, getRecentProjects } from '@/lib/projects';
import { Project } from '@/lib/projects';

export default function Projects() {
  const featuredProjects = getFeaturedProjects();
  const recentProjects = getRecentProjects();
  const allProjects = getAllProjects();

  return (
    <div>
      {/* Featured Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project: Project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project: Project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* All Projects Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          All Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project: Project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
} 