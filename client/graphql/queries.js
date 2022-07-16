import { gql } from '@apollo/client';


export const GET_TASKS =
    gql`
    query GetAllTasks($priority: TaskPriority, $status: TaskStatus, $taskDate: String, $sortBy:String, $order: String) {
        getAllTasks(priority: $priority, status: $status, taskDate: $taskDate, sortBy: $sortBy, order: $order) {
            id
            description
            status
            taskDate
            priority
            user {
                name
            }
        }
    }`
