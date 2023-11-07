import style from './TodoForm.module.styl';
import Input from '../UI/input';
import Button from '../UI/Button';

function TodoForm({addTask}) {
  return (
    <div className="container">
      <div className={style.todoForm}>
        <Input name={'taskValue'} placeholder={'Введите текст задачи'} />
        <Button text={'Добавить'} onClick={addTask} />
      </div>
    </div>
    
  )
}

export default TodoForm;