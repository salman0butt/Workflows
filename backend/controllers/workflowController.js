const Workflow = require("../models/Workflow");
const Node = require("../models/Node");

const getAllWorkflows = async (req, res, next) => {
  try {
    const workflows = await Workflow.find();
    res.json(workflows);
  } catch (error) {
    next(error);
  }
};

const createWorkflow = async (req, res, next) => {
  try {
    const { id, name } = req.body;
    const workflow = new Workflow({ id, name });
    const savedWorkflow = await workflow.save();
    res.json(savedWorkflow);
  } catch (error) {
    next(error);
  }
};

const deleteWorkflow = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Node.deleteMany({ workflow: id });

    await Workflow.deleteOne({ _id: id });
    res.json({ message: "Workflow deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllWorkflows,
  createWorkflow,
  deleteWorkflow,
};
