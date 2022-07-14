const Task = require("../models/Task");

const resolvers = {
    Query: {
        getAllTasks: async (root, args) => {
            let sortBy = args?.sortBy;
            let sortOrder = args?.order;

            function getFilterParams() {
                if (sortBy && sortOrder)
                    return [sortBy, sortOrder]
                return ["id", "ASC"]
            }

            const tasks = await Task.findAll(
                {
                    where: {
                        ...(args.priority && { priority: args.priority }), //conditionally adding properties to the where clause
                        ...(args.status && { status: args.status }),
                        ...(args.taskDate && { taskDate: args.taskDate })
                    },
                    order: [
                        getFilterParams(),
                    ]
                }
            );
            return tasks;
        }
    },
    Mutation: {
        addTask: async (root, args) => {
            const task = await Task.create({
                ...args
            });
            return task;
        },
        editTask: async (root, args) => {
            try {
                let task = await Task.findAll({ where: { id: args.id } });
                if (!task.length) return `Task with ${args.id} not found`;
                await Task.update(
                    { ...args },
                    { where: { id: args.id } }
                );
                return `Task with id ${args.id} updated`;
            }
            catch (err) {
                console.log(err)
            }
        },
        deleteTask: async (root, args) => {
            try {
                let task = await Task.findAll({ where: { id: args.id } });
                if (!task.length) return `Task with ${args.id} not found`;
                await Task.destroy({
                    where: { id: args.id }
                });
                return `Task with id ${args.id} deleted`;
            }
            catch (err) {
                console.log(err)
            }
        }
    }
}

module.exports = { resolvers };