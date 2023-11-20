import style from "./Tasks.styl";
import Task from "./Task";

function Tasks({ tasksProps }) {
  return (
    <div className="tasks">
      <div className="container tasks__container">
        {tasksProps.map((task, ind) => (
          <Task
            value={task.taskValue}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
}

export default Tasks;
