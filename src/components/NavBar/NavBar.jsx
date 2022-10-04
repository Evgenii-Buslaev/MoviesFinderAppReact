import LogoItem from "../LogoItem/LogoItem";
import NavButtons from "../NavButtons/NavButtons";
import RouterLink from "../../UI/RouterLink/RouterLink";
import ImageButton from "../../UI/ImageButton/ImageButton";

import styles from "./NavBar.module.css";
import search from "../../icons/search/search-dir.png";

function NavBar() {
  return (
    <nav className={styles.navBarCont}>
      <RouterLink path="/">
        <LogoItem />
      </RouterLink>
      <div className={styles.categories}>
        <RouterLink path="/films">
          <button className={styles.navBtn}>Фильмы</button>
        </RouterLink>
        <RouterLink path="/series">
          <button className={styles.navBtn}>Сериалы</button>
        </RouterLink>
        <RouterLink path="/cartoons">
          <button className={styles.navBtn}>Мультфильмы</button>
        </RouterLink>
      </div>
      <RouterLink path="/search">
        <ImageButton path={search} title="Поиск" alt="search-directory" />
      </RouterLink>
      <NavButtons />
    </nav>
  );
}

export default NavBar;
