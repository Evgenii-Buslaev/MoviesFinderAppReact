import ImageButton from "../../UI/ImageButton/ImageButton";
import SearchBar from "../SearchBar/SearchBar";
import LogoItem from "../LogoItem/LogoItem";

import styles from "./NavBar.module.css";
import user from "../../icons/profile/user.png";

function NavBar() {
  return (
    <nav className={styles.navBarCont}>
      <LogoItem />
      <div className={styles.categories}>
        <button className={styles.navBtn}>Фильмы</button>
        <button className={styles.navBtn}>Сериалы</button>
        <button className={styles.navBtn}>Мультфильмы</button>
      </div>
      <SearchBar />
      <ImageButton path={user} alt="user btn" title="Профиль" />
    </nav>
  );
}

export default NavBar;
