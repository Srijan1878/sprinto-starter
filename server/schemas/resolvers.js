const Task = require("../models/Task");
const User = require("../models/User");

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
                    raw: true,
                    nest: true,
                    where: {
                        ...(args.priority && { priority: args.priority }), //conditionally adding properties to the where clause
                        ...(args.status && { status: args.status }),
                        ...(args.taskDate && { taskDate: args.taskDate })
                    },
                    order: [
                        getFilterParams(),
                    ],
                    include: ["user"]

                }
            );
            return tasks;
        }
    },
    Mutation: {
        addTask: async (root, args) => {
            const userName = args.name;
            const user = await User.create({
                raw: true,
                name: userName
            })
            const userId = user.id;
            const task = await Task.create({
                ...args,
                userId
            }, {
                include: ["user"]
            }
            );
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
                let user = await User.findOne({ where: { id: args.id } });
                if (!user) return `Task with ${args.id} not found`;
                await user.destroy();
                return `User with id ${args.id} along with its task deleted`;
            }
            catch (err) {
                console.log(err)
            }
        }
    }
}

module.exports = { resolvers };