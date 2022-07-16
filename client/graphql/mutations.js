import { gql } from '@apollo/client';

export const ADD_TODO = gql`
    mutation AddTask($description: String!, $status: TaskStatus, $priority: TaskPriority, $taskDate: String, $name: String) {
        addTask(description: $description, status: $status, priority: $priority, taskDate: $taskDate, name: $name) {
            description
        }
    }`;

export const EDIT_TODO = gql`
    mutation EditTask($id: Int!, $description: String, $status: TaskStatus, $priority: TaskPriority, $taskDate: String) {
        editTask(id: $id, description: $description, status: $status, priority: $priority, taskDate: $taskDate) 
    }`;


export const DELETE_TODO = gql`
    mutation Delete_Task($id: Int!) {
        deleteTask(id: $id) 
    }`;

