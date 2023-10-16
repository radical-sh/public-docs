import { useCallback, useMemo } from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    MarkerType,
    Handle, Position, useNodeId
} from 'reactflow';

import 'reactflow/dist/style.css';
import styles from './flow.module.css'
import deliveryMan from '../images/delivery-man.png'
import Image from 'next/image'
import SimpleFloatingEdge from './simplefloatingedge';


const CustomNode = (props) => {

    return (
        <>

            <Handle type="target" id="a" position={props.data.inputPosition === "left" ? Position.Left : Position.Top} />
            {
                <Handle type="source" position={Position.Top} id="a" />
            }
            {
                <Handle type="source" position={Position.Right} id="b" />
            }
            {
                <Handle type="source" position={Position.Bottom} id="c" />
            }
            {
                <Handle type="source" position={Position.Left} id="d" />
            }


            <div className={styles.ownService} >
                <span className={styles.serviceText}>{props.data.label}</span>
            </div>
            < Handle type="source" position={props.data.outputPosition === "right" ? Position.Right : Position.Bottom} id="d" />
        </>
    )
}

const PersonIconNode = (props) => {

    return (
        <>
            <div className={styles.iconEcom} >
                {
                    props.data.img ?
                        props.data.img :
                        <span > {props.data.label}</span>
                }
            </div>
            < Handle type="source" position={Position.Right} id="a" />
        </>
    )
}

const edgeTypes = {
    floating: SimpleFloatingEdge,
};


const initialNodes = [

    {
        id: '1', position: { x: 8, y: 0 }, data: { inputPosition: "left", label: 'Order Service' },
        type: 'textUpdater',
        style: {


        }
    },
    { id: '2', type: 'textUpdater', position: { x: 0, y: 150 }, data: { inputPosition: "left", showRight: true, showLeft: true, showTop: true, outputPosition: "right", label: 'Delivery Service' } },
    { id: '3', type: 'textUpdater', position: { x: 300, y: 150 }, data: { inputPosition: "left", outputPosition: "right", label: 'Notification Service' } },
    { id: '4', type: 'output', style: { borderRadius: 20 }, position: { x: 318, y: 250 }, data: { label: 'Twillio' } },
    {
        id: '5', type: 'personIcon', position: { x: -100, y: 0 }, data: { label: '🧑🏼‍💼👨🏼‍🍳' },
    },
    {
        id: '6', type: 'personIcon', position: { x: -80, y: 150 }, data: { outputPosition: "right", img: <Image src={deliveryMan} style={{ display: 'inline' }} alt="Delivery Man" width={40} height={40} /> },
    },
];

const initialEdges = [{
    id: 'e1-2', source: '1', target: '2', animated: true, label: 'Order Events',
    type: 'floating',
    sourceHandle: 'c',
    targetHandle: 'a',
    markerEnd: {
        type: MarkerType.ArrowClosed,
    },
},
{
    id: 'e2-3', source: '2', target: '3', animated: true,
    type: 'floating',
    sourceHandle: 'd',
    targetHandle: 'b',
    label: 'Delivery Events', markerEnd: {
        type: MarkerType.ArrowClosed,
    }
},

{
    id: 'e3-4', source: '3',
    target: '4',          
    sourceHandle: 'c',
    targetHandle: 'a',
    label: 'Send Notification',
    markerEnd: {
        type: MarkerType.ArrowClosed,
    }
},
{
    id: 'e5-1', source: '5', target: '1', markerEnd: {
        type: MarkerType.ArrowClosed,
    }
},
{
    id: 'e6-2', source: '6', target: '2', markerEnd: {
        type: MarkerType.ArrowClosed,
    }
}
];

function Flow() {
    const nodeTypes = useMemo(() => ({ textUpdater: CustomNode, personIcon: PersonIconNode }), []);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <ReactFlow
            edgeTypes={edgeTypes}
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            zoomOnScroll={false}
            panOnDrag={false}
            preventScrolling={false}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView={true}
            proOptions={{ hideAttribution: true }}
            nodesDraggable={false}
            elementsSelectable={false}
            edgesFocusable={false}
            edgesUpdatable={false}

        >
        </ReactFlow>
    );
}

export default Flow;
