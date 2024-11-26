'use client';
import { ChangeEvent } from 'react';
import { Node, Edge } from 'reactflow';

interface AttributePanelProps {
  selectedElement: (Node | Edge) | null;
  onNodeUpdate?: (nodeId: string, data: any) => void;
  onEdgeUpdate?: (edgeId: string, data: any) => void;
}

export default function AttributePanel({ 
  selectedElement, 
  onNodeUpdate,
  onEdgeUpdate,
}: AttributePanelProps) {
  if (!selectedElement) return null;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if ('source' in selectedElement) { // Is Edge
      onEdgeUpdate?.(selectedElement.id, { [name]: value });
    } else { // Is Node
      onNodeUpdate?.(selectedElement.id, { 
        ...selectedElement.data,
        [name]: value 
      });
    }
  };

  return (
    <div className="absolute right-4 top-4 bottom-4 w-64 bg-white dark:bg-gray-800 
                    rounded-lg shadow-lg p-4 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        {('source' in selectedElement) ? 'Edge Properties' : 'Node Properties'}
      </h3>
      
      {'source' in selectedElement ? (
        // Edge attributes
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Source
            </label>
            <input
              type="text"
              value={selectedElement.source}
              disabled
              className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Target
            </label>
            <input
              type="text"
              value={selectedElement.target}
              disabled
              className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md"
            />
          </div>
        </div>
      ) : (
        // Node attributes
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Label
            </label>
            <input
              type="text"
              name="label"
              value={selectedElement.data.label}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Link
            </label>
            <input
              type="text"
              name="link"
              value={selectedElement.data.link || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Proficiency
            </label>
            <input
              type="number"
              name="proficiency"
              min="0"
              max="100"
              value={selectedElement.data.proficiency || 0}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>
      )}
    </div>
  );
} 