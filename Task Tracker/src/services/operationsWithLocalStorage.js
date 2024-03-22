// store to local storage

export const storeToLocalStorage = (value) => {
  // first get the already stored tasks
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  // mix the stored tasks with the new tasks
  const newTasks = storedTasks ? [value, ...storedTasks] : [value];
  localStorage.setItem("tasks", JSON.stringify(newTasks));
};

// delete a value through id from the local storage

export const deleteFromLocalStorage = (id) => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  const newTasks = storedTasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(newTasks));
};
