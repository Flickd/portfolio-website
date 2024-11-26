'use client';
import { useCallback, useState } from 'react';
import ReactFlow, {
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  NodeChange,
  EdgeChange,
  Connection,
  addEdge,
  Edge,
  Node,
  MarkerType,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import Toolbar, { ToolType } from './Toolbar';
import AttributePanel from './AttributePanel';
import { MindMapNode } from '@/lib/mindmap';

const nodeTypes = {
  custom: CustomNode,
};

// Default edge options
const defaultEdgeOptions = {
  type: 'smoothstep',
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
    color: '#b1b1b7',
  },
  style: {
    stroke: '#b1b1b7',
    strokeWidth: 2,
  },
};

interface MindMapProps {
  initialNodes: MindMapNode[];
  initialEdges: Edge[];
}

export default function MindMap({ initialNodes, initialEdges }: MindMapProps) {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [tool, setTool] = useState<ToolType>('select');
  const [selectedElement, setSelectedElement] = useState<Node | Edge | null>(null);
  const [connectingNodeId, setConnectingNodeId] = useState<string | null>(null);
  
  const { project } = useReactFlow();

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, ...defaultEdgeOptions }, eds)),
    []
  );

  const handlePaneClick = (event: React.MouseEvent) => {
    if (tool === 'add') {
      const { x, y } = project({ x: event.clientX, y: event.clientY });
      const newNode: MindMapNode = {
        id: `node-${nodes.length + 1}`,
        type: 'custom',
        position: { x, y },
        data: { label: 'New Node', proficiency: 50 },
      };
      setNodes((nds) => [...nds, newNode]);
    }
  };

  const handleElementClick = (event: React.MouseEvent, element: Node | Edge) => {
    event.preventDefault();
    
    if (tool === 'select') {
      setSelectedElement(element);
    } else if (tool === 'delete') {
      if ('source' in element) {
        setEdges((eds) => eds.filter((e) => e.id !== element.id));
      } else {
        setNodes((nds) => nds.filter((n) => n.id !== element.id));
        setEdges((eds) => eds.filter((e) => 
          e.source !== element.id && e.target !== element.id
        ));
      }
    } else if (tool === 'connect') {
      if (!('source' in element)) {
        if (!connectingNodeId) {
          setConnectingNodeId(element.id);
        } else {
          setEdges((eds) => [
            ...eds,
            {
              id: `edge-${edges.length + 1}`,
              source: connectingNodeId,
              target: element.id,
              ...defaultEdgeOptions,
            },
          ]);
          setConnectingNodeId(null);
          setTool('select');
        }
      }
    }
  };

  const handleNodeUpdate = (nodeId: string, data: any) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId ? { ...node, data } : node
      )
    );
  };

  return (
    <div className="relative w-full h-[700px]">
      <Toolbar activeTool={tool} onToolChange={setTool} />
      <AttributePanel 
        selectedElement={selectedElement}
        onNodeUpdate={handleNodeUpdate}
      />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        onPaneClick={handlePaneClick}
        onNodeClick={handleElementClick}
        onEdgeClick={handleElementClick}
        fitView
        attributionPosition="bottom-left"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
} 