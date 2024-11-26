import { Node, Edge } from 'reactflow';

export interface MindMapNode extends Node {
  data: {
    label: string;
    link?: string;
    proficiency?: number;
  };
}

export const initialNodes: MindMapNode[] = [
  {
    id: 'cs',
    type: 'custom',
    position: { x: 0, y: 0 },
    data: { label: 'Computer Science', proficiency: 80 },
  },
  {
    id: 'algorithms',
    type: 'custom',
    position: { x: -500, y: 100 },
    data: { 
      label: 'Algorithms & Data Structures',
      link: '/topics/algorithms',
      proficiency: 85,
    },
  },
  {
    id: 'ai',
    type: 'custom',
    position: { x: 500, y: 100 },
    data: { 
      label: 'Artificial Intelligence',
      link: '/topics/ai',
      proficiency: 75,
    },
  },
  {
    id: 'programming-paradigms',
    type: 'custom',
    position: { x: 0, y: 100 },
    data: { 
      label: 'Programming Paradigms',
      link: '/topics/programming-paradigms/oop',
      proficiency: 75,
    },
  },
  {
    id: 'oop',
    type: 'custom',
    position: { x: 0, y: 200 },
    data: { 
      label: 'Object-Oriented Programming (OOP)',
      link: '/topics/programming-paradigms/oop',
      proficiency: 75,
    },
  },
  {
    id: 'classes',
    type: 'custom',
    position: { x: 0, y: 300 },
    data: { 
      label: 'Classes',
      link: '/topics/programming-paradigms/oop/classes',
      proficiency: 75,
    },
  },
    
  // Add more nodes as needed
];

export const initialEdges: Edge[] = [
  { id: 'e1-2', source: 'cs', target: 'algorithms' },
  { id: 'e1-3', source: 'cs', target: 'ai' },
  { id: 'e1-4', source: 'cs', target: 'programming-paradigms' },
  { id: 'e1-5', source: 'programming-paradigms', target: 'oop' },
  { id: 'e1-6', source: 'oop', target: 'classes' },
  // Add more edges as needed
];

// Helper function to generate positions for a large number of nodes
export function generateNodePositions(nodes: MindMapNode[], startX = 0, startY = 0) {
  const HORIZONTAL_SPACING = 250;
  const VERTICAL_SPACING = 100;
  const MAX_NODES_PER_ROW = 5;

  return nodes.map((node, index) => ({
    ...node,
    position: {
      x: startX + (index % MAX_NODES_PER_ROW) * HORIZONTAL_SPACING,
      y: startY + Math.floor(index / MAX_NODES_PER_ROW) * VERTICAL_SPACING,
    },
  }));
} 