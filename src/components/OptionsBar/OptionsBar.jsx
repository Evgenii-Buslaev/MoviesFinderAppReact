import LogoItem from "../LogoItem/LogoItem";
import ImageButton from "../../UI/ImageButton/ImageButton";
import RouterLink from "../../UI/RouterLink/RouterLink";

import styles from "./OptionsBar.module.css";

import films from "../../icons/options-bar/films.png";
import series from "../../icons/options-bar/series.png";
import shows from "../../icons/options-bar/cartoons.png";

const optionsBtns = [
  {
    img: films,
    alt: "films",
    text: "Фильмы",
    active: false,
  },
  {
    img: series,
    alt: "series",
    text: "Сериалы",
    active: false,
  },
  {
    img: shows,
    alt: "tv-shows",
    text: "ТВ-шоу",
    active: false,
  },
];

function OptionsBar({ change }) {
  return (
    <div className={styles.optionsCont}>
      <LogoItem />
      {optionsBtns.map((btn) => (
        <div className={styles.optItem} key={btn.text}>
          <RouterLink path="/categories" onClick={() => change(btn.alt)}>
            <ImageButton path={btn.img} alt={btn.alt} title={btn.text} />
            <h3 className={btn.active ? styles.active : null}>{btn.text}</h3>
          </RouterLink>
        </div>
      ))}
    </div>
  );
}

export default OptionsBar;
