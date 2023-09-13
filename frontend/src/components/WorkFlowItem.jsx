import React from "react";
import { Link } from "react-router-dom";

const WorkflowItem = ({ workflow, onDelete }) => (
  <div className="workflow-item">
    <h2>{workflow.name}</h2>
    <div className="workflow-actions">
      <Link to={`/workflow/${workflow._id}`} className="edit-button">
        Edit Workflow
      </Link>
      <button className="delete-button" onClick={() => onDelete(workflow._id)}>
        Delete Workflow
      </button>
    </div>
  </div>
);

export default WorkflowItem;
