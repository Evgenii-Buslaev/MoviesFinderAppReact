import LogoItem from "../LogoItem/LogoItem";
import NavButtons from "../NavButtons/NavButtons";
import RouterLink from "../../UI/RouterLink/RouterLink";
import ImageButton from "../../UI/ImageButton/ImageButton";

import styles from "./NavBar.module.css";
import search from "../../icons/search/search-dir.png";

const categoryBtns = [
  { category: "films", title: "Фильмы" },
  { category: "series", title: "Сериалы" },
  { category: "tv-shows", title: "ТВ-шоу" },
];

function NavBar({ change }) {
  return (
    <nav className={styles.navBarCont}>
      <RouterLink path="/">
        <LogoItem />
      </RouterLink>
      <div className={styles.categories}>
        {categoryBtns.map((elem) => (
          <RouterLink path="/categories" key={elem.title}>
            <button
              className={styles.navBtn}
              category={elem.category}
              onClick={() => change(elem.category)}
            >
              {elem.title}
            </button>
          </RouterLink>
        ))}
      </div>
      <RouterLink path="/search">
        <ImageButton path={search} title="Поиск" alt="search-directory" />
      </RouterLink>
      <NavButtons />
    </nav>
  );
}

export default NavBar;
