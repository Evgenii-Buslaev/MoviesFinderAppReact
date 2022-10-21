import { useState } from "react";
import NavBarMobItem from "../NavBarMobItem/NavBarMobItem";
import RouterLink from "../../UI/RouterLink/RouterLink";
import styles from "./NavBarMob.module.css";

import home from "../../icons/nav-mobile/home.png";
import saved from "../../icons/nav-mobile/saved.png";
import search from "../../icons/nav-mobile/search.png";
import profile from "../../icons/nav-mobile/user.png";

const navBtns = [
  {
    id: 1,
    path: "/",
    img: home,
    alt: "home page",
    text: "Домой",
    active: true,
  },
  {
    id: 2,
    path: "/collection",
    img: saved,
    alt: "saved films",
    text: "Коллекция",
    active: false,
  },
  {
    id: 3,
    path: "/search",
    img: search,
    alt: "search",
    text: "Поиск",
    active: false,
  },
  {
    id: 4,
    path: "/profile",
    img: profile,
    alt: "user page",
    text: "Профиль",
    active: false,
  },
];

function NavBarMob() {
  const [btns, setBtns] = useState(navBtns);

  const activeToggle = (e) => {
    const btn = btns.filter((elem) => elem.id === +e.target.id);
    btn[0].active = true;

    const otherBtns = btns.filter((elem) => elem.id !== +e.target.id);
    otherBtns.forEach((btn) => {
      btn.active = false;
    });

    setBtns([].concat(btn, otherBtns).sort((a, b) => a.id - b.id));
  };

  return (
    <div className={styles.navBarMob}>
      {btns.map((btn) => (
        <RouterLink path={btn.path} key={btn.text}>
          <NavBarMobItem data={btn} click={(e) => activeToggle(e)} />
        </RouterLink>
      ))}
    </div>
  );
}

export default NavBarMob;
