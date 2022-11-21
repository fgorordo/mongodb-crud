import { json } from "express";
import taskService from "../services/taskService.js";

const taskController = {
    createTask: async (req, res) => {
        try {
            let task = req.body;
            let createdTask = await taskService.createNewTask(task)
            console.log(createdTask)
            return res.status(200).json({
                code: 200,
                status: "Ok",
                data: createdTask
            })
        } catch (err) {
            if (err.code === 11000) {
                return res.status(400).json({
                    code: 400,
                    status: "Failed",
                    data: {
                        error: `Ya existe una tarea con el titulo: '${req.body.title}'`
                    }
                })
            }
            return res.status(500).json({
                code: 500,
                status: "Failed",
                data: {
                    ...err
                }
            })
        }
    },
    listAllTask: async (req, res) => {
        try {
            let allTasks = await taskService.getAllTasks();
            return res.status(200).json({
                code: 200,
                status: "Ok",
                data: allTasks
            })
        } catch (err) {
            return res.status(500).json({
                code: 500,
                status: "Failed",
                data: {
                    ...err
                }
            })
        }
    },
    getOneTask: async (req, res) => {
        try {
            let { _id } = req.params
            let task = await taskService.getOneTask(_id);
            if (task === null) {
                return res.status(400).json({
                    code: 400,
                    status: "Failed",
                    data: `No existe una tarea con el id ${_id}`
                })
            }
            return res.status(200).json({
                code: 200,
                status: "Ok",
                data: task
            })
        } catch (err) {
            return res.status(500).json({
                code: 500,
                status: "Failed",
                data: { ...err }
            })
        }
    },
    deleteOneTask: async (req, res) => {
        try {
            const { _id } = req.params;
            await taskService.deleteOneTask(_id);
            return res.status(200).json({
                code: 200,
                status: "Ok",
                data: {
                    message: "La tarea se elimino correctamente."
                }
            })
        } catch (err) {
            return res.status(500).json({
                code: 500,
                status: "Failed",
                data: { ...err }
            })
        }
    },
    editOneTask: async (req, res) => {
        try {
            const { _id } = req.params;
            await taskService.editOneTask(_id, req.body);
            return res.status(200).json({
                code: 200,
                status: "Ok",
                data: {
                    message: "La tarea se actualizo correctamente."
                }
            })
        } catch (err) {
            return res.status(500).json({
                code: 500,
                status: "Failed",
                data: { ...err }
            })
        }
    },
    getDoneTask: async (req, res) => {
        try {
            const {_id} = req.params;
            await taskService.toggleTaskStatus(_id);
            return res.status(200).json({
                code: 200,
                status: "Ok",
                data: {
                    message: "Se actualizo el estado de la tarea"
                }
            });
        } catch (err) {
            return res.status(500).json({
                code: 500,
                status: "Failed",
                data: { ...err }
            })
        }
    }
}

export default taskController;