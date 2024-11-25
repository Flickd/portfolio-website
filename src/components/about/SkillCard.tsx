interface SkillCardProps {
  category: string;
  skills: Array<{
    name: string;
    level: number;
  }>;
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        {category}
      </h3>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 