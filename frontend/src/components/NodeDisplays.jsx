import React, { useContext } from "react";
import { NodeContext } from 'react-flow-builder';

export const StartNodeDisplay = () => {
  const node = useContext(NodeContext);
  return <div className="start-node">{node.name}</div>;
};

export const EndNodeDisplay = () => {
  const node = useContext(NodeContext);
  return <div className="end-node">{node.name}</div>;
};

export const NodeDisplay = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`other-node ${node.configuring ? 'node-configuring' : ''} ${
        node.validateStatusError ? 'node-status-error' : ''
      }`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};

export const ConditionNodeDisplay = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`condition-node ${
        node.configuring ? 'node-configuring' : ''
      } ${node.validateStatusError ? 'node-status-error' : ''}`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};
