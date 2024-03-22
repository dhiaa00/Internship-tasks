import React, { useState } from "react";
import "./task.css";
import { deleteFromLocalStorage } from "../../services/operationsWithLocalStorage";

const Task = ({ task, tasks, setTasks }) => {
  const [checked, setChecked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const showTaskDetails = () => {
    setShowDetails(!showDetails);
  };
  const handleDeleteTask = () => {
    setTasks(tasks.filter((e) => e.id !== task.id));
    deleteFromLocalStorage(task.id);
  };

  // handle the task checking
  const handleTaskChecking = () => {
    setChecked(!checked);
    const newTasks = tasks.map((e) => {
      if (e.id === task.id) {
        e.checked = !e.checked;
      }
      return e;
    });
    setTasks(newTasks);
  };

  // know wether the color is dark or light
  function isColorDark(hexColor) {
    const color =
      hexColor.charAt(0) === "#" ? hexColor.substring(1, 7) : hexColor;
    const r = parseInt(color.substring(0, 2), 16); // hexToR
    const g = parseInt(color.substring(2, 4), 16); // hexToG
    const b = parseInt(color.substring(4, 6), 16); // hexToB
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.4;
  }

  // determine the color of the text
  const textColorStyle = isColorDark(task.color) ? "white" : "black";
  console.log(isColorDark(task.color));

  // determine the style of the task name based on checked status
  const taskNameStyle = checked ? "line-through" : "none";
  return (
    <div className="task" style={{ backgroundColor: task.color }}>
      <div className="check-and-name">
        <input type="checkbox" onChange={handleTaskChecking} />
        <h2 style={{ color: textColorStyle, textDecoration: taskNameStyle }}>
          {task.name}
        </h2>
      </div>
      <div className="taskButtons">
        <i
          style={{ color: textColorStyle }}
          className="bi bi-chevron-down"
          onClick={showTaskDetails}></i>
        <button onClick={handleDeleteTask}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
      {showDetails && (
        <div className="taskDetails">
          <h3>Description:</h3>
          <p>{task.description || "no description provided"}</p>
        </div>
      )}
    </div>
  );
};

export default Task;
