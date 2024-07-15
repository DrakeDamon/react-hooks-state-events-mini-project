import React, { useState } from "react";
import Task from "./Task";
import { CATEGORIES, TASKS } from "../data";
import "@testing-library/jest-dom/extend-expect";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  function handleDeleteTask(taskToDelete) {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            category={task.category}
            onDelete={() => handleDeleteTask(task)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
