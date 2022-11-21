import Router from "express";
import taskController from "../../controllers/taskController";
import Task from "../../models/Task";

const router = Router();

export default router
    .get('/api/tasks', taskController.listAllTask)
    .post("/api/tasks", taskController.createTask)
    .get("/api/tasks/:_id", taskController.getOneTask)
    .patch("/api/tasks/:_id", taskController.editOneTask)
    .delete("/api/tasks/:_id", taskController.deleteOneTask)
    .patch("/api/tasks/toggle/:_id", taskController.getDoneTask)