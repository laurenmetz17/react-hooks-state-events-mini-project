import React from "react";

function Task({task, category, handleDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={handleDelete} id={task}>X</button>
    </div>
  );
}

export default Task;
