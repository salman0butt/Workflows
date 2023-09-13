import React, { useState } from "react";
import WorkFlowForm from "../components/WorkFlowForm";

const WorkFlowManager = () => {
  const [workflowElements, setWorkflowElements] = useState([]);

  const addWorkflow = async (newWorkflowName) => {
    try {
      const workflow = {
        name: newWorkflowName,
      };

      const response = await fetch("/api/workflows", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workflow),
      });

      if (!response.ok) {
        throw new Error("Failed to add workflow");
      }

      const data = await response.json();

      setWorkflowElements([...workflowElements, data]);
      alert('Work Flow Created');
    } catch (error) {
      console.error("Error adding workflow:", error);
    }
  };

  return (
    <div className="container">
      <h1>Workflow CRUD</h1>
      <WorkFlowForm onSubmit={addWorkflow} />
    </div>
  );
};

export default WorkFlowManager;
