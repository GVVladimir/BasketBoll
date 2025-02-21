import style from "./style.module.css";
import Vector from "../../../../img/vectorOreng.svg";
import VectorW from '../../../../img/vector.svg'
import Foto1 from "../../../../img/foto1.svg";
import Foto2 from "../../../../img/foto2.svg";
import Foto3 from "../../../../img/foto3.svg";

const Play = () => {
  return (
    <>
      <div className={style.main}>
        <header className={style.section_play_header}>
          <h2>ИГРАЙ</h2>
          <a href="#">
            в раздел <img src={Vector} alt="" />
          </a>
        </header>
        <main className={style.main_section}>
          <section className={style.section_play_block}>
            <img className={style.section_play_block_img} src={Foto1} alt="" />
            <h4 className={style.section_play_block_header}>Найди себе команду</h4>
            <p className={style.section_play_block_text}>
              Игры на районе - это возможность найти с кем поиграть в баскетбол
              в выходные, или создать свою игру и пригласить других игроков
              присоединиться.
            </p>
            <button className={style.section_play_block_btn}>текст кнопки<img src={VectorW} alt="" /></button>
          </section>
          <section className={style.section_play_block}>
            <img className={style.section_play_block_img2} src={Foto2} alt="" />
            <br />
            <h4 className={style.section_play_block_header}>Создавай команды</h4>
            <p className={style.section_play_block_text}>
              Игры на районе - это возможность найти с кем поиграть в баскетбол
              в выходные, или создать свою игру и пригласить других игроков
              присоединиться.
            </p>
            <button className={style.section_play_block_btn}>текст кнопки<img src={VectorW} alt="" /></button>
          </section>
          <section className={style.section_play_block}>
            <img className={style.section_play_block_img3} src={Foto3} alt="" />
            <h4 className={style.section_play_block_header}>Участвуй в турнирах</h4>
            <p className={style.section_play_block_text}>
              Участвуйте в турнирах вместе с вашей командой. Будьте активными,
              побеждайте и получайте ачивки и призы от наших спонсоров.
            </p>
            <button className={style.section_play_block_btn}>текст кнопки<img src={VectorW} alt="" /></button>
          </section>
        </main>
      </div>
    </>
  );
};

export default Play;
