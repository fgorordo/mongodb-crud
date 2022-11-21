import Task from "../models/Task";

const taskService = {
    createNewTask: async (task) => {
        try {
            let { _doc } = await Task.create(task);
            return _doc;
        } catch (err) {
            throw err;
        }
    },
    getAllTasks: async () => {
        try {
            return await Task.find();
        } catch (err) {
            throw err;
        }
    },
    getOneTask: async (_id) => {
        try {
            return await Task.findById(_id);
        } catch (err) {
            throw err;
        }
    },
    editOneTask: async (_id, content) => {
        try {
            return await Task.findByIdAndUpdate(_id, content)
        } catch (err) {
            throw err;
        }
    },
    deleteOneTask: async (_id) => {
        try {
            return await Task.findByIdAndDelete(_id)
        } catch (err) {
            throw err;
        }
    },
    toggleTaskStatus: async (_id) => {
        try {
            const task = await Task.findById(_id);
            task.done = !task.done;
            await task.save();
            return;
        } catch (err) {
            throw err;
        }
    }
}

export default taskService;