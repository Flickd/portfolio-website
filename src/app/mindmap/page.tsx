import Navigation from '@/components/Navigation';
import MindMap from '@/components/mindmap/MindMap';
import { initialNodes, initialEdges } from '@/lib/mindmap';

export default function MindMapPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Computer Science Knowledge Map
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <MindMap initialNodes={initialNodes} initialEdges={initialEdges} />
          </div>
        </div>
      </div>
    </>
  );
} 