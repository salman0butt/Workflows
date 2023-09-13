const Node = require("../models/Node");

// Controller for node synchronization
const syncNodes = async (req, res) => {
  try {
    const receivedNodes = req.body.nodes;
    const workflowId = req.body.workflowId;

    // Define a function to recursively process and save nodes
    const processAndSaveNodes = async (nodes, parentId = null) => {
      for (const receivedNode of nodes) {
        const newNode = new Node({
          id: receivedNode.id,
          type: receivedNode.type,
          name: receivedNode.name,
          path: receivedNode.path,
          data: receivedNode.data,
          workflow: workflowId,
          parentId: parentId,
        });

        if (receivedNode.children && receivedNode.children.length > 0) {
          await processAndSaveNodes(receivedNode.children, newNode._id);
        }

        await newNode.save();
      }
    };

    await Node.deleteMany({ workflow: workflowId });
    await processAndSaveNodes(receivedNodes);

    res.json({ message: "Node Synchronization complete" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller to fetch nodes based on the structure
const fetchNodesByWorkflowId = async (req, res) => {
  try {
    const workflowId = req.params.workflowId;

    const fetchNodesRecursively = async (parentNodeId) => {
      const nodes = await Node.find({ parentId: parentNodeId });

      const result = [];

      for (const node of nodes) {
        const formattedNode = {
          id: node.id,
          type: node.type,
          name: node.name,
          path: node.path,
          data: node.data,
        };

        if (node.children && node.children.length > 0) {
          formattedNode.children = await fetchNodesRecursively(node._id);
        }

        result.push(formattedNode);
      }

      return result;
    };

    const topLevelNodes = await Node.find({ workflow: workflowId, parentId: null }).lean();

    const nodesWithChildren = await Promise.all(
      topLevelNodes.map(async (node) => {
        const children = await fetchNodesRecursively(node._id);
        if (children.length > 0) {
          node.children = children;
        }
        return node;
      })
    );

    res.json(nodesWithChildren);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  syncNodes,
  fetchNodesByWorkflowId,
};
