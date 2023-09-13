const mongoose = require("mongoose");

const nodeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  path: {
    type: [String],
    required: true,
  },
  data: {
    type: Object,
  },
  workflow: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workflow",
    required: true,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Node",
  },
});


const Node = mongoose.model("Node", nodeSchema);

module.exports = Node;
