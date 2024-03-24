import React, { useEffect, useRef, useState } from "react";
import "./addtask.css";
import { storeToLocalStorage } from "../../services/operationsWithLocalStorage";
import { ReactTyped } from "react-typed";
import { taskSuggestion } from "../../data/data";

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
    setIsFocused(false);
  };

  // suggestions for tasks
  const [suggestions, setSuggestions] = useState("");
  // use react-typed library

  const taskNameInput = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  // function to handle task name change
  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  // suggestion style
  const suggestionStyle = {
    display: isFocused ? "none" : "block",
  };

  return (
    <div className="add-task-wrapper">
      <div className="add-task">
        <div
          className="suggestions"
          onClick={() => taskNameInput.current.focus()}
          style={suggestionStyle}>
          <ReactTyped
            strings={taskSuggestion}
            typeSpeed={70}
            backSpeed={80}
            backDelay={500}
            loop
          />
        </div>
        {/* input for task name */}
        <input
          type="text"
          value={taskName}
          onChange={handleTaskNameChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => addDetails ? setIsFocused(false) : setIsFocused(true)}
          ref={taskNameInput}
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
