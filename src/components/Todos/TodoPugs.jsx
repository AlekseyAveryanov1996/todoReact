import image from "../../assets/img/Clipboard.png";
import "./TodoPugs.styl";

function TodoPugs() {
  return (
    <div className="container">
      <div className="pugs">
        <div className="pugs__image">
          <img
            src={image}
            alt="Icon"
          />
        </div>
        <div className="pugs__text">Список задач на сегодня пуст!</div>
      </div>
    </div>
  );
}

export default TodoPugs;
