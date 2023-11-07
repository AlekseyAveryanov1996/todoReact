import icon from '../../assets/img/addIcon.svg'
import style from './Button.module.styl'

function Button({text, onClick}) {
  return (
    <div className={style.button} onClick={onClick}>
      {text}
      <div className={style.button__icon}>
        <img src={icon} alt="Icon" />
      </div>
    </div>
  )
}

export default Button;