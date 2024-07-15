import React from "react";

function TaskList({ tasks = [], onDeleteTask }) {
  const displayTasks = tasks.map((task, index) => (
    <div key={index} className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={() => onDeleteTask(task)}>Delete</button>
    </div>
  ));

  return <div>{displayTasks}</div>;
}

export default TaskList;
