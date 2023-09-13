import React, { useState } from "react";

const WorkFlowForm = ({ onSubmit }) => {
  const [newWorkflow, setNewWorkflow] = useState("");

  const handleAddWorkflow = () => {
    if (newWorkflow.trim() === "") return;
    onSubmit(newWorkflow.trim());
    setNewWorkflow("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter workflow name"
        value={newWorkflow}
        onChange={(e) => setNewWorkflow(e.target.value)}
      />
      <button onClick={handleAddWorkflow}>Add Workflow</button>
    </div>
  );
};

export default WorkFlowForm;
