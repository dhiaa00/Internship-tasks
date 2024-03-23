import React, { useState } from "react";
import "./addtask.css";
import { storeToLocalStorage } from "../../services/operationsWithLocalStorage";

const AddTask = ({ tasks, setTasks }) => {
  const [addDetails, setAddDetails] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskColor, setTaskColor] = useState("#FFFFFF");

  // function to add task
  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      description: taskDescription,
      color: taskColor,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    storeToLocalStorage(newTask);
    setTaskName("");
    setTaskDescription("");
    setTaskColor("#FFFFFF");
    setAddDetails(false);
  };
  return (
    <div className="add-task-wrapper">
      <div className="add-task">
        {/* input for task name */}
        <input
          type="text"
          placeholder="Add a Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        {/* button used for showing details */}
        {addDetails ? (
          <button onClick={() => setAddDetails(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
        ) : (
          <button onClick={() => setAddDetails(true)}>
            <i className="bi bi-chevron-down"></i>
          </button>
        )}
        {/* button to add task */}
        <button onClick={handleAddTask}>
          <i className="bi bi-journal-plus"></i>
        </button>
      </div>
      {addDetails && (
        <div className="add-details">
          {/* input for task description */}
          <div className="add-detail">
            <label htmlFor="color">Task Description</label>
            <textarea
              type="text"
              placeholder="Add a description"
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
            />
          </div>
          {/* input for task color */}
          <div className="add-detail">
            <label htmlFor="color">Pick a color</label>
            <input
              id="color"
              type="color"
              value={taskColor}
              onChange={(e) => {
                setTaskColor(e.target.value);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;
