import logo from '../../assets/img/rocket.svg';
import style from './Title.module.styl';

function Title() {
  return (
    <div className={style.title}>
      <div className="title__icon">
        <img src={logo} alt="Icon" />
      </div>
      <h1 className={style.title__text}>
        to<span>do</span>
      </h1>
    </div>
  )
}

export default Title;