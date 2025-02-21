import style from "./style.module.css";
import Qr from "../../../img/quar.svg";
import FooterBall from "../../../img/footerBall.svg";
import aple from "../../../img/Aple.svg";
import IOS from "../../../img/IOS.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <article className={style.footer_text}>
        <div>
          <h2 className={style.footer_header}>
            Еще больше полезных материалов и видеоуроков в нашем приложении
          </h2>
          <section className={style.footer_header_os}>
            <img src={aple} alt="" />
            <img src={IOS} alt="" />
          </section>
        </div>

        <figure>сделано в xpage</figure>
      </article>
      <article className={style.footer_qrBall}>       
        <img className={style.footer_qr} src={Qr} alt="" />       
        <img className={style.footer_footerBall} src={FooterBall} alt="" />
      </article>
    </footer>
  );
};

export default Footer;
