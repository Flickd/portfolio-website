'use client';
import { Handle, Position, NodeProps } from 'reactflow';
import Link from 'next/link';

interface CustomNodeData {
  label: string;
  link?: string;
  proficiency?: number;
}

export default function CustomNode({ data }: NodeProps<CustomNodeData>) {
  const proficiencyColor = data.proficiency 
    ? `hsl(${data.proficiency * 1.2}, 70%, 50%)`
    : '#1E90FF';

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white dark:bg-gray-800 border-2 min-w-[150px]"
         style={{ borderColor: proficiencyColor }}>
      <Handle type="target" position={Position.Top} className="w-2 h-2" />
      {data.link ? (
        <Link 
          href={data.link}
          className="text-gray-900 dark:text-white font-medium hover:text-blue-600"
        >
          {data.label}
        </Link>
      ) : (
        <div className="text-gray-900 dark:text-white font-medium">
          {data.label}
        </div>
      )}
      <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
    </div>
  );
} 