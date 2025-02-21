import style from "./style.module.css";
import Vector from '../../../img/vector.svg'


const HadMain = () => {
  return (
    <header className={style.header}>     
      <div className={style.header_text}>
        <h1 className={style.header_text_head}>
          Найди с кем поиграть в баскет
        </h1>
        <section className={style.header_section_btn}>
          <button className={style.header_btn}>играй <img className={style.header_btn_vector} src={Vector} alt="" /></button>
          <button className={style.header_btn}>учись<img className={style.header_btn_vector} src={Vector} alt="" /></button>
          <button className={style.header_btn}>смотри<img className={style.header_btn_vector} src={Vector} alt="" /></button>
        </section>
      </div>
    </header>
  );
};

export default HadMain;
