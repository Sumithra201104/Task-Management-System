// task.routes.js
const express = require("express");
const protect = require("../middleware/auth.middleware");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../controllers/task.controller");

const router = express.Router();

router.use(protect);
router.route("/").post(createTask).get(getTasks);
router.route("/:id").put(updateTask).delete(deleteTask);

module.exports = router;
