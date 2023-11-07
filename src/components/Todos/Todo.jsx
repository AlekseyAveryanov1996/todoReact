import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoListsHeader from "./TodoListHeader";
import TodoPugs from "./TodoPugs";

function Todo() {
  const [tasks, setTasks] = useState([]);

  function addTask() {
    let value = document.querySelector('input[name="taskValue"]').value;
    let taskObj = {
      taskValue: value,
    };
    setTasks([...tasks, taskObj]);
  }

  return (
    <div>
      <TodoForm addTask={addTask} />
      <TodoListsHeader allCount={tasks.length} />
      {tasks.length < 1 ? (
        <TodoPugs />
      ) : (
        tasks.map((task, id) => <div>{task.taskValue}</div>)
      )}
    </div>
  );
}

export default Todo;
