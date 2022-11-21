import Router from "express";
import taskController from "../controllers/taskController";
import Task from "../models/Task";

const router = Router();

export default router
    .get('/api/tasks', taskController.listAllTask)
    .get("/tasks/:_id", taskController.getOneTask)
    .post("/tasks/add", taskController.createTask)
    .patch("/tasks/edit/:_id", taskController.editOneTask)
    .patch("/tasks/toggleDone/:_id", taskController.getDoneTask)
    .delete("/tasks/:_id", taskController.deleteOneTask)