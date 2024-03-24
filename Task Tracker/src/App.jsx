import { useEffect, useState } from "react";
import AddTask from "./components/addTask/AddTask";
import Task from "./components/task/Task";
import Progress from "./components/task/Progress";

function App() {
  const [tasks, setTasks] = useState([]);
  // get tasks from local storage
  const getTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  };
  // to just render the task from storage at the beginning
  useEffect(() => {
    getTasksFromLocalStorage();
  }, []);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.checked).length;
  return (
    <>
      <h1>Task Tracker</h1>
      <main>
        {/* progress display */}
        <div className="upper-section">
          <Progress
            progress={((completedTasks / totalTasks) * 100 || 0).toFixed(2)}
          />
          <AddTask tasks={tasks} setTasks={setTasks} />
        </div>
        <div className="tasks">
          {tasks.map((task) => (
            <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
