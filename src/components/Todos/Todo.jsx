import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoListsHeader from "./TodoListHeader";
import TodoPugs from "./TodoPugs";
import Tasks from "./Tasks";

function Todo() {
  let localTasks; // переменная для проверки localStorage
  localStorage.getItem("tasks") !== null
    ? (localTasks = JSON.parse(localStorage.getItem("tasks")))
    : (localTasks = []);

  const [tasks, setTasks] = useState(localTasks); // передаем данные в useState для отрисовки;

  function addTask() {
    let elem = document.querySelector('input[name="taskValue"]');
    let taskObj = {
      taskValue: elem.value,
      status: false,
    };
    elem.value = ""; // сбрасываем input при добавлении
    setTasks([...tasks, taskObj]);
  }

  function removeTask(e) {
    let target = e.currentTarget;
    let id = target.getAttribute("dataid");
    tasks.splice(id, 1); // удаляем задачу из массива
    setTasks([...tasks]);
  }

  function changedTask(e) {
    let target = e.currentTarget;
    let id = target.getAttribute("dataid");
    if (tasks[id].status === false) {
      tasks[id].status = true;
    } else {
      tasks[id].status = false;
    }
    setTasks([...tasks]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // при изменении массива с задачами записываем в локал новые данные
  }, [tasks]);

  return (
    <div>
      <TodoForm addTask={addTask} />
      <TodoListsHeader allCount={tasks.length} />
      {tasks.length < 1 ? (
        <TodoPugs />
      ) : (
        <Tasks
          tasksProps={tasks}
          removeTask={removeTask}
          changedTask={changedTask}
        />
      )}
    </div>
  );
}

export default Todo;
