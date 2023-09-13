const express = require("express");
const router = express.Router();
const workflowController = require("../controllers/workflowController");

router.get("/workflows", workflowController.getAllWorkflows);
router.post("/workflows", workflowController.createWorkflow);
router.delete("/workflows/:id", workflowController.deleteWorkflow);

module.exports = router;
