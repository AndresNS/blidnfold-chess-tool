import React, { useEffect, useState } from "react";
import "./styles.css";

// Components
import ToDoListItem from "../../modules/ToDoListItem";
import TextField from "../../modules/TextField";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const existingTasks = window.localStorage.getItem("tasks")
      ? JSON.parse(window.localStorage.getItem("tasks"))
      : [];

    if (existingTasks) setTasks(existingTasks);
  }, []);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);

    window.localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);

    window.localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteCompletedTasks = () => {
    const pendingTasks = tasks.filter((task) => !task.completed);
    setTasks(pendingTasks);

    window.localStorage.setItem("tasks", JSON.stringify(pendingTasks));
  };

  const toggleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);

    window.localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask === "") return;

    const date = new Date();

    addTask({ id: date.getTime(), completed: false, description: newTask });
    setNewTask("");
  };

  const handleNewTaskChange = (event) => setNewTask(event.target.value);
  const handleDeleteCompletedTasks = (event) => deleteCompletedTasks();

  return (
    <div className="todolist container">
      <form onSubmit={handleSubmit}>
        <TextField
          className={"todolist__textfield"}
          placeholder="New Task"
          onChange={handleNewTaskChange}
          value={newTask}
        />
      </form>

      {tasks.length > 0 && (
        <div className="todolist__tasks">
          {tasks.filter((task) => !task.completed).length > 0 && (
            <>
              <h2 className="todolist__title">To do</h2>
              {tasks
                .filter((task) => !task.completed)
                .map((task) => (
                  <ToDoListItem
                    task={task}
                    key={task.id}
                    toggleCompleteTask={() => toggleCompleteTask(task.id)}
                    deleteTask={() => deleteTask(task.id)}
                  />
                ))}
            </>
          )}
          {tasks.filter((task) => task.completed).length > 0 && (
            <>
              <h2 className="todolist__title">Completed</h2>
              {tasks
                .filter((task) => task.completed)
                .map((task) => (
                  <ToDoListItem
                    task={task}
                    key={task.id}
                    toggleCompleteTask={() => toggleCompleteTask(task.id)}
                    deleteTask={() => deleteTask(task.id)}
                  />
                ))}
              <div className="todolist__delete-completed">
                <button onClick={handleDeleteCompletedTasks}>
                  Clear completed
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ToDoList;
