const mongoose = require("mongoose");

const workflowSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Workflow = mongoose.model("Workflow", workflowSchema);

module.exports = Workflow;
