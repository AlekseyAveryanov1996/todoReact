import style from './Input.module.styl';

function Input({name ,placeholder}) {
  return (
    <input name={name} className={style.input} type="text" placeholder={placeholder} />
  )
}

export default Input;