import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import FlowBuilder from 'react-flow-builder';
import {
    DrawerComponent,
    PopconfirmComponent,
    PopoverComponent
} from "../components/antd";

import { registerNodes, defaultNodes } from '../components/antd/registerNodes';

const WorkflowBuilder = () => {
    const { workflowId } = useParams();
    const [nodes, setNodes] = useState(registerNodes);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchWorkflows = async () => {
        try {
            const response = await fetch(`/api/nodes/${workflowId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch workflow data");
            }

            const data = await response.json();
            if (data.length === 0) {
                setNodes(defaultNodes);
            } else {
                setNodes(data);
            }
            setLoading(false);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchWorkflows();
    }, []);

    const handleChange = async (nodes) => {
        try {
            const data = {
                workflowId: workflowId,
                nodes
            };

            const response = await fetch("/api/nodes/sync", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to sync workflow data");
            }

            await response.json();

            setNodes(nodes);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="App">
            <h1>Edit Workflow: {workflowId}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    <FlowBuilder
                        nodes={nodes}
                        onChange={handleChange}
                        registerNodes={registerNodes}
                        DrawerComponent={DrawerComponent}
                        PopoverComponent={PopoverComponent}
                        PopconfirmComponent={PopconfirmComponent}
                    />
                </div>
            )}
            <br />
            <Link to="/">Back to Workflow Manager</Link>
        </div>
    );
};

export default WorkflowBuilder;
