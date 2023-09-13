const express = require("express");
const router = express.Router();
const nodeController = require("../controllers/nodeController");

// Define routes
router.post("/nodes/sync", nodeController.syncNodes);
router.get("/nodes/:workflowId", nodeController.fetchNodesByWorkflowId);

module.exports = router;
