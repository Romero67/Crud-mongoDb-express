import { Router } from "express";
const {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} = require("../controllers/tasks.controller");

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/edit/:id", renderTaskEdit);

router.post("/edit/:id", editTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", taskToggleDone);

module.exports = router;
