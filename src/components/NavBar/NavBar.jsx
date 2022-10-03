import SearchBar from "../SearchBar/SearchBar";
import LogoItem from "../LogoItem/LogoItem";
import NavButtons from "../NavButtons/NavButtons";
import RouterLink from "../../UI/RouterLink/RouterLink";

import styles from "./NavBar.module.css";

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
      <SearchBar />
      <NavButtons />
    </nav>
  );
}

export default NavBar;
