import style from "./Tasks.styl";
import Task from "./Task";

function Tasks({ tasksProps, removeTask, changedTask }) {
  return (
    <div className="tasks">
      <div className="container tasks__container">
        {tasksProps.map((task, ind) => (
          <Task
            value={task.taskValue}
            key={ind}
            removeTask={removeTask}
            dataid={ind}
            changedTask={changedTask}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Tasks;
