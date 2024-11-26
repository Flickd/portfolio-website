'use client';
import { useState } from 'react';
import { FaSearch, FaExpandAlt, FaCompress } from 'react-icons/fa';

interface MindMapControlsProps {
  onSearch: (term: string) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onCenterView: () => void;
}

export default function MindMapControls({
  onSearch,
  onZoomIn,
  onZoomOut,
  //onCenterView,
}: MindMapControlsProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      <form onSubmit={handleSearch} className="flex-1">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search topics..."
            className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </form>
      <button
        onClick={onZoomIn}
        className="p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 
                 dark:border-gray-700 text-gray-700 dark:text-gray-300"
      >
        <FaExpandAlt />
      </button>
      <button
        onClick={onZoomOut}
        className="p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 
                 dark:border-gray-700 text-gray-700 dark:text-gray-300"
      >
        <FaCompress />
      </button>
    </div>
  );
} 