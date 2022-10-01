import ImageButton from "../../UI/ImageButton/ImageButton";

import styles from "./NavBar.module.css";
import logo from "../../icons/logo/logo.png";
import user from "../../icons/profile/user.png";

function NavBar() {
  return (
    <nav className={styles.navBarCont}>
      <div className={styles.logoCont}>
        <img src={logo} alt={logo}></img>
        <h1>MOVIES</h1>
      </div>
      <div className={styles.categories}>
        <button className={styles.navBtn}>Фильмы</button>
        <button className={styles.navBtn}>Сериалы</button>
        <button className={styles.navBtn}>Мультфильмы</button>
      </div>
      {/*  <Search /> */}
      <ImageButton path={user} alt="user btn" title="Профиль" />
    </nav>
  );
}

export default NavBar;
