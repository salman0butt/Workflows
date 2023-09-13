import React, { useState, useEffect } from "react";
import WorkFlowList from "../components/WorkFlowList";

const WorkFlowPage = () => {
  const [workflowElements, setWorkflowElements] = useState([]);

  useEffect(() => {
    fetchWorkflows();
  }, []);

  const fetchWorkflows = async () => {
    try {
      const response = await fetch("/api/workflows", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch workflows");
      }

      const data = await response.json();
      setWorkflowElements(data);
    } catch (error) {
      console.error("Error fetching workflows:", error);
    }
  };

  const deleteWorkflow = async (workflowId) => {
    try {
      await fetch(`/api/workflows/${workflowId}`, {
        method: "DELETE",
      });

      const updatedWorkflowElements = workflowElements.filter(
        (workflow) => workflow._id !== workflowId
      );

      setWorkflowElements(updatedWorkflowElements);
      alert('Work Flow Deleted');
    } catch (error) {
      console.error("Error deleting workflow:", error);
    }
  };

  return (
    <div className="container">
      <h1>Workflow List</h1>
      {workflowElements && workflowElements.length > 0 ? 
      (<WorkFlowList workflowElements={workflowElements} onDelete={deleteWorkflow} />) :
      (<h5>No Recrods Found</h5>) }
      
    </div>
  );
};

export default WorkFlowPage;
