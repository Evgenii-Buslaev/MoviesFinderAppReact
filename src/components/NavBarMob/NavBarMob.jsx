import NavBarMobItem from "../NavBarMobItem/NavBarMobItem";
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
        <NavBarMobItem
          key={btn.text}
          text={btn.text}
          routerPath={btn.path}
          imgPath={btn.img}
          alt={btn.alt}
          active={btn.active}
        />
      ))}
    </div>
  );
}

export default NavBarMob;
