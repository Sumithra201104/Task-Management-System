const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, user: req.user._id });
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const filter =
    req.user.role === "admin"
      ? { isDeleted: false }
      : { user: req.user._id, isDeleted: false };

  const tasks = await Task.find(filter);
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (req.user.role !== "admin" && task.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not allowed" });
  }

  Object.assign(task, req.body);
  await task.save();
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (req.user.role !== "admin" && task.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not allowed" });
  }

  task.isDeleted = true;
  await task.save();
  res.json({ message: "Task deleted" });
};
