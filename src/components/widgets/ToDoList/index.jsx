import React, { useEffect, useState } from "react";
import "./styles.css";

// Components
import ToDoListItem from "../../modules/ToDoListItem";

const tasks = [
  { completed: false, description: "task1" },
  { completed: false, description: "task2" },
  { completed: false, description: "task3" },
  { completed: true, description: "task4" },
];

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const existingTasks = JSON.parse(window.localStorage.getItem("tasks"));

    if (existingTasks) setTasks(existingTasks);
  }, []);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];

    // JSON.parse(window.localStorage.getItem("tasks")) || [];

    setTasks(updatedTasks);

    window.localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const completeTask = () => console.log("complete");

  const deleteTask = () => console.log("delete");

  return (
    <div className="todolist container">
      <h2 className="todolist__title">Todo</h2>
      {tasks
        .filter((task) => !task.completed)
        .map((task, index) => (
          <ToDoListItem
            task={task}
            key={index}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      <h2 className="todolist__title">Completed</h2>
      {tasks
        .filter((task) => task.completed)
        .map((task, index) => (
          <ToDoListItem
            task={task}
            key={index}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
    </div>
  );
};

export default ToDoList;
