import React from "react";
import WorkFlowItem from "./WorkFlowItem";

const WorkflowList = ({ workflowElements, onDelete }) => (
  <div className="workflow-list">
    {workflowElements.map((workflow) => (
      <WorkFlowItem key={workflow._id} workflow={workflow} onDelete={onDelete} />
    ))}
  </div>
);

export default WorkflowList;
