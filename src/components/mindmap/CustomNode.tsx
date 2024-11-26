"use client";
import { Handle, Position, NodeProps } from "reactflow";
import Link from "next/link";

interface CustomNodeData {
  label: string;
  link?: string;
  proficiency?: number;
  size: number;
}

export default function CustomNode({ data }: NodeProps<CustomNodeData>) {
  const proficiencyColor = data.proficiency
    ? `hsl(${data.proficiency * 1.2}, 70%, 50%)`
    : "#1E90FF";

  // Calculate node size based on number of outgoing connections
  const getNodeSize = (size: number) => {
    if (size === 0) return "text-sm min-w-[150px]";
    if (size === 1) return "text-base min-w-[200px]";
    if (size === 2) return "text-lg min-w-[250px]";
    return "text-xl min-w-[300px]";
  };

  const nodePadding = data.size > 0 ? "py-3 px-5" : "py-2 px-4";

  return (
    <div
      className={`shadow-md rounded-md bg-white dark:bg-gray-800 border-2 
                ${getNodeSize(data.size)} ${nodePadding}`}
      style={{ borderColor: proficiencyColor }}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="w-2 h-2 !bg-gray-400"
      />
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
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-2 h-2 !bg-gray-400"
      />
    </div>
  );
}
