import style from "./style.module.css";
import Logo from "../../../img/Frame 3355230.svg";
import Burger from "../../../img/menu.svg";
import Foto from "../../../img/foto.svg";
import HadMain from "./header";

const Nav = () => {
  return (
    <div className={style.nav}>
      <nav className={style.nav_menu}>
        <section className={style.nav_menu2}>
          <div className={style.nav_menu_burger2}>
            <img src={Burger} alt="" />
            <a href="#">Меню</a>
          </div>
        </section>
        <section>
          <img className={style.logo} src={Logo} alt="" />
          <ul className={style.nav_menu_link}>
            <li>
              <a href="#">играть</a>
            </li>
            <li>
              <a href="#">смотреть</a>
            </li>
            <li>
              <a href="#">учиться</a>
            </li>
            <li>
              <a href="#">мероприятия</a>
            </li>
          </ul>
        </section>
        <section>
          <div className={style.nav_menu_burger}>
            <img src={Burger} alt="" />
            <a href="#">Меню</a>
          </div>
          <div className={style.nav_nameUser}>
            <p>Геннадий П.</p>
            <img  src={Foto} alt="" />
          </div>
          <img className={style.nav_nameUser_img} src={Foto} alt="" />
        </section>
      </nav>
      <HadMain />
    </div>
  );
};
export default Nav;
