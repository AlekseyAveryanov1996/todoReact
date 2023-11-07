import { useState } from "react";
import TodoForm from "./TodoForm";

function Todo() {

  const [tasks, setTasks] = useState([]);

  function addTask() {
    let value = document.querySelector('input[name="taskValue"]').value;
    let taskObj = {
      taskValue: value,
    }
    setTasks([...tasks, taskObj]);
  }

  return (
    <div>
      <TodoForm  addTask={addTask}/>
      {tasks.map((task, id) => (
        <div>{task.taskValue}</div>
      ))}
    </div>
  )
}

export default Todo;