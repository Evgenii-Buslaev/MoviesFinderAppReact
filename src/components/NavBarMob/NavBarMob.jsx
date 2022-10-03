import ImageButton from "../../UI/ImageButton/ImageButton";
import RouterLink from "../../UI/RouterLink/RouterLink";
import styles from "./NavBarMob.module.css";

import home from "../../icons/nav-mobile/home.png";
import saved from "../../icons/nav-mobile/saved.png";
import search from "../../icons/nav-mobile/search.png";
import profile from "../../icons/nav-mobile/user.png";

const navBtns = [
  { path: "/", img: home, alt: "home page", text: "Домой", active: true },
  {
    path: "/collection",
    img: saved,
    alt: "saved films",
    text: "Коллекция",
    active: false,
  },
  { path: "/search", img: search, alt: "search", text: "Поиск", active: false },
  {
    path: "/profile",
    img: profile,
    alt: "user page",
    text: "Профиль",
    active: false,
  },
];

function NavBarMob() {
  return (
    <div className={styles.navBarMob}>
      {navBtns.map((btn) => (
        <div className={styles.navItem} key={btn.text}>
          <RouterLink path={btn.path}>
            <ImageButton path={btn.img} alt={btn.alt} title={btn.text} />
            <h3 className={btn.active ? styles.active : null}>{btn.text}</h3>
          </RouterLink>
        </div>
      ))}
    </div>
  );
}

export default NavBarMob;
