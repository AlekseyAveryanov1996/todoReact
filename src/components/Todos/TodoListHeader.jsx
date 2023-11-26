import "./TodoListHeader.styl";

function TodoListsHeader({ allCount, sucsesCount }) {
  return (
    <div className="container">
      <div className="lists">
        <div className="lists__header">
          <div className="lists__all">
            Всего задач
            <div className="count">{allCount}</div>
          </div>
          <div className="lists__sucsess">
            Выполнено
            <div className="count">{sucsesCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoListsHeader;
