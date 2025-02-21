import style from "./style.module.css";
import Vector from "../../../../img/vectorOreng.svg";
import VectorGreen from "../../../../img/vectorGreen.svg";
import videoFoto from '../../../../img/videoFoto.svg'

const Study = () => {
  return (
   
      <div className={style.main}>
        <header className={style.section_play_header}>
          <h2>Учись</h2>
          <a href="#">
            в раздел <img className={style.vector_orendg} src={Vector} alt="" />
            <img className={style.vector_green} src={VectorGreen} alt="" />
          </a>
        </header>
        <div className={style.main_study}>
        <section className={style.main_study_block}>
          <article className={style.main_study_fotoShool}>
            <h3>мы собрали секции для детей по всему городу</h3>
            <p>12 секций по всему городу</p>
          </article>
          <article className={style.main_study_fotoShool2}>
            <h3>мы собрали секции для детей по всему городу</h3>
            <p>12 секций по всему городу</p>
          </article>
          <article className={style.main_study_choosingСoach}>
            <h3>Подбери тренера под свой уровень</h3>
            <section className={style.main_study_section_input}>
              <input
                className={style.main_study_choosingСoach_input}
                type="button"
                value="детская тренировка"
              />
              <input
                className={style.main_study_choosingСoach_input}
                type="button"
                value="для начинающих"
              />
              <input
                className={style.main_study_choosingСoach_input}
                type="button"
                value="стритбол"
              />
              <input
                className={style.main_study_choosingСoach_input}
                type="button"
                value="выезд тренера на дом"
              />
              <input
                className={style.main_study_choosingСoach_input}
                type="button"
                value="12 фильтров"
              />
            </section>
          </article>
        </section>
        <section className={style.main_study_video}>
        <h6>Видеоуроки</h6>
        <article className={style.main_study_new}>
          <section>
            <img className={style.main_study_foto} src={videoFoto} alt="" />
          </section>
          <section >
            <h5 className={style.main_study_new_text}>
            Евгений Воронов: «Бронзовые медали - оценка труда нашей команды»
            </h5>
            <data className={style.main_study_new_data} value="26 октября">26 октября</data>
          </section>
        </article>
        <article className={style.main_study_new2}>
         <a href="">статьи<img src={Vector} alt="" /></a>
         <section className={style.main_study_new2_text}>
          <h5 className={style.main_study_new2_text_head}>Евгений Воронов: «Бронзовые медали - оценка труда нашей команды»</h5>
          <data value="26 октября">26 октября</data>
         </section>
        </article>
        <article className={style.main_study_terms}>
          <h4>термины</h4>
          <section >
            <input type="button" value="треха" />
            <input type="button" value="трехочковый бросок" />
            <input type="button" value="36 терминов" />
          </section>
        </article>
      </section>
        </div>
      
      </div>
     
  

  );
};
export default Study;
