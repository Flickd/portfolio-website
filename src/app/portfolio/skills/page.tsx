import SkillCategory from '@/components/portfolio/SkillCategory';

const skillsData = {
  languages: [
    {
      name: 'TypeScript',
      description: 'Modern web development with type safety',
      proficiency: 90,
    },
    {
      name: 'Python',
      description: 'AI/ML development and automation',
      proficiency: 85,
    },
    // Add more skills
  ],
  frameworks: [
    {
      name: 'React/Next.js',
      description: 'Building modern web applications',
      proficiency: 85,
    },
    // Add more frameworks
  ],
  tools: [
    {
      name: 'Git',
      description: 'Version control and collaboration',
      proficiency: 85,
    },
    // Add more tools
  ],
};

export default function Skills() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Skills & Expertise
      </h1>
      <div className="space-y-8">
        <SkillCategory title="Programming Languages" skills={skillsData.languages} />
        <SkillCategory title="Frameworks & Libraries" skills={skillsData.frameworks} />
        <SkillCategory title="Tools & Technologies" skills={skillsData.tools} />
      </div>
    </div>
  );
} 