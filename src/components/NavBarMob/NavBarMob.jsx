import ImageButton from "../../UI/ImageButton/ImageButton";
import styles from "./NavBarMob.module.css";

import home from "../../icons/nav-mobile/home.png";
import saved from "../../icons/nav-mobile/saved.png";
import search from "../../icons/nav-mobile/search.png";
import profile from "../../icons/nav-mobile/user.png";

const navBtns = [
  { path: home, alt: "home page", text: "Фильмы", active: true },
  { path: saved, alt: "saved films", text: "Коллекция", active: false },
  { path: search, alt: "search", text: "Поиск", active: false },
  { path: profile, alt: "user page", text: "Профиль", active: false },
];

function NavBarMob() {
  return (
    <div className={styles.navBarMob}>
      {navBtns.map((btn) => (
        <div className={styles.navItem} key={btn.text}>
          <ImageButton path={btn.path} alt={btn.alt} title={btn.text} />
          <h3 className={btn.active ? styles.active : null}>{btn.text}</h3>
        </div>
      ))}
    </div>
  );
}

export default NavBarMob;
