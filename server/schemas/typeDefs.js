const { gql } = require('apollo-server-express');

const typeDefs = gql`
    #Types
    type TaskRecord {
        id: Int
        description: String
        status: TaskStatus
        priority: TaskPriority
        createdAt: String
        updatedAt: String
        taskDate: String
    }

    type UserRecord {
        id: Int
        name: String
        tasks: [TaskRecord] 
    }

    enum TaskStatus {
        pending
        ongoing
        completed
    }

    enum TaskPriority {
        low
        medium
        high
    }

    #Queries
    type Query {
        getAllTasks(status: TaskStatus, priority: TaskPriority, taskDate:String, sortBy:String, order: String ): [TaskRecord]
    }

    #Mutations
    type Mutation {
        addTask(description: String, taskDate:String, status: TaskStatus, priority: TaskPriority ): TaskRecord
    }

    type Mutation {
        editTask(id: Int!, description: String, status: TaskStatus, priority: TaskPriority, taskDate:String ): String!
    }
    
    type Mutation {
        deleteTask(id: Int!): String!
    }
    `
module.exports = { typeDefs };