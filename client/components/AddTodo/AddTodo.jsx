import React, { useState } from "react";
import { ADD_TODO } from "../../graphql/mutations";
import styles from "./AddTodo.module.css";
import { useMutation } from "@apollo/client";
import taskDefaults from "../../constants/taskDefaults";
import TASK_STATUS from "../../constants/taskStatus";
import FilterFields from "../FilterFields/FilterFields";

function AddTodo({ fetchAllTasks }) {
  const [newTaskIaskInputValue, setNewTaskInputValue] = useState({
    ...taskDefaults,
  });

  const [addTodo] = useMutation(ADD_TODO, {
    onCompleted: () => fetchAllTasks(),
  });

  const handleInputChange = (e) => {
    setNewTaskInputValue({
      ...newTaskIaskInputValue,
      [e.target.name]:
        e.target.name !== "description"
          ? e.target.value.toLowerCase()
          : e.target.value,
    });
  };

  const addNewTask = async (e) => {
    e.preventDefault();
    if (!newTaskIaskInputValue.description.trim().length) {
      alert("Please enter a task description");
      return;
    }
    addTodo({
      variables: {
        ...newTaskIaskInputValue,
      },
    });
    setNewTaskInputValue({
      ...taskDefaults,
    });
  };
  return (
    <div className={styles.addTaskContainer}>
      <form className={styles.addTodoForm} onSubmit={addNewTask}>
        <input
          name="description"
          type={"text"}
          className={styles.todoInputField}
          placeholder={"Add a new task"}
          onChange={handleInputChange}
          value={newTaskIaskInputValue?.description}
        />
        <button type="submit">ADD</button>
      </form>
      <div className={styles.filtersContainer}>
        <FilterFields handleInputChange={handleInputChange}/>        
        <label htmlFor="priority">
          Task Date: 
          <input
            name="taskDate"
            type="date"
            onChange={handleInputChange}
            className={styles.date}
          />
        </label>
      </div>
    </div>
  );
}

export default AddTodo;
