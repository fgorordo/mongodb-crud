import Router from "express";
import taskController from "../../controllers/taskController";
import Task from "../../models/Task";

const router = Router();

export default router
    .get('/api/tasks', taskController.listAllTask)
    .get("/api/tasks/:_id", taskController.getOneTask)
    .post("/api/tasks/add", taskController.createTask)
    .patch("/api/tasks/edit/:_id", taskController.editOneTask)
    .patch("/api/tasks/toggleDone/:_id", taskController.getDoneTask)
    .delete("/api/tasks/:_id", taskController.deleteOneTask)