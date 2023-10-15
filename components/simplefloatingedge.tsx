import { useCallback } from 'react';
import { useStore, getBezierPath, EdgeLabelRenderer } from 'reactflow';

import { getEdgeParams } from './utils.js';

function SimpleFloatingEdge({ id, source, target, markerEnd, style, label }) {
    const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
    const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));


    if (!sourceNode || !targetNode) {
        return null;
    }

    const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode, targetNode);

    const [edgePath] = getBezierPath({
        sourceX: sx-3,
        sourceY: sy-3,
        sourcePosition: sourcePos,
        targetPosition: targetPos,
        targetX: tx-3,
        targetY: ty-3,
    });


    return (
        <>

            
            <text x={sx+10} y={sy+20} style={{fontSize:12}}>{label}</text>
            <path
                id={id}
                className="react-flow__edge-path"
                d={edgePath}
                strokeWidth={5}
                markerEnd={markerEnd}
                style={style}
            />

        </>

    );
}

export default SimpleFloatingEdge;
