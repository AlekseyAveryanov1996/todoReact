import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoListsHeader from "./TodoListHeader";
import TodoPugs from "./TodoPugs";
import Tasks from "./Tasks";

function Todo() {
  let localTasks; // переменна для проверки localStorage
  localStorage.getItem("tasks") !== null
    ? (localTasks = JSON.parse(localStorage.getItem("tasks")))
    : (localTasks = []);

  const [tasks, setTasks] = useState(localTasks); // передаем данные в useState для отрисовки;

  function addTask() {
    let value = document.querySelector('input[name="taskValue"]').value;
    let taskObj = {
      taskValue: value,
    };
    setTasks([...tasks, taskObj]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // при изменении массива с задачами записываем в локал новые данные
  }, [tasks]);

  return (
    <div>
      <TodoForm addTask={addTask} />
      <TodoListsHeader allCount={tasks.length} />
      {tasks.length < 1 ? <TodoPugs /> : <Tasks tasksProps={tasks} />}
    </div>
  );
}

export default Todo;
