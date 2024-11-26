'use client';
import { MouseEvent } from 'react';
import { FaMousePointer, FaPlus, FaProjectDiagram, FaTrash } from 'react-icons/fa';

export type ToolType = 'select' | 'add' | 'connect' | 'delete';

interface ToolbarProps {
  activeTool: ToolType;
  onToolChange: (tool: ToolType) => void;
}

export default function Toolbar({ activeTool, onToolChange }: ToolbarProps) {
  const handleToolClick = (e: MouseEvent, tool: ToolType) => {
    e.preventDefault();
    onToolChange(tool);
  };

  const getButtonClass = (tool: ToolType) => `
    p-3 rounded-lg mb-2 transition-colors
    ${activeTool === tool 
      ? 'bg-blue-600 text-white' 
      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
  `;

  return (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-500
                    rounded-lg shadow-lg p-2 flex flex-col">
      <button
        className={getButtonClass('select')}
        onClick={(e) => handleToolClick(e, 'select')}
        title="Select"
      >
        <FaMousePointer />
      </button>
      <button
        className={getButtonClass('add')}
        onClick={(e) => handleToolClick(e, 'add')}
        title="Add Node"
      >
        <FaPlus />
      </button>
      <button
        className={getButtonClass('connect')}
        onClick={(e) => handleToolClick(e, 'connect')}
        title="Connect Nodes"
      >
        <FaProjectDiagram />
      </button>
      <button
        className={getButtonClass('delete')}
        onClick={(e) => handleToolClick(e, 'delete')}
        title="Delete"
      >
        <FaTrash />
      </button>
    </div>
  );
} 