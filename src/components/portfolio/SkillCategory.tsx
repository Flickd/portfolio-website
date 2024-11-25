interface Skill {
  name: string;
  description: string;
  proficiency: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {title}
      </h2>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {skill.proficiency}%
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              {skill.description}
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 