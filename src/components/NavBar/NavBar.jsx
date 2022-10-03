import ImageButton from "../../UI/ImageButton/ImageButton";
import SearchBar from "../SearchBar/SearchBar";
import LogoItem from "../LogoItem/LogoItem";
import RouterLink from "../../UI/RouterLink/RouterLink";

import styles from "./NavBar.module.css";
import user from "../../icons/profile/user.png";

function NavBar() {
  return (
    <nav className={styles.navBarCont}>
      <RouterLink path="/">
        <LogoItem />
      </RouterLink>
      <div className={styles.categories}>
        <button className={styles.navBtn}>Фильмы</button>
        <button className={styles.navBtn}>Сериалы</button>
        <button className={styles.navBtn}>Мультфильмы</button>
      </div>
      <SearchBar />
      <RouterLink path="/profile">
        <ImageButton path={user} alt="user btn" title="Профиль" />
      </RouterLink>
    </nav>
  );
}

export default NavBar;
