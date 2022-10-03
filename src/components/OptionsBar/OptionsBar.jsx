import LogoItem from "../LogoItem/LogoItem";
import ImageButton from "../../UI/ImageButton/ImageButton";

import styles from "./OptionsBar.module.css";

import films from "../../icons/options-bar/films.png";
import series from "../../icons/options-bar/series.png";
import cartoons from "../../icons/options-bar/cartoons.png";

const optionsBtns = [
  { path: films, alt: "films", text: "Фильмы", active: false },
  { path: series, alt: "series", text: "Сериалы", active: false },
  { path: cartoons, alt: "cartoons", text: "Мультфильмы", active: false },
];

function OptionsBar() {
  return (
    <div className={styles.optionsCont}>
      <LogoItem />
      {optionsBtns.map((btn) => (
        <div className={styles.optItem} key={btn.text}>
          <ImageButton path={btn.path} alt={btn.alt} title={btn.text} />
          <h3 className={btn.active ? styles.active : null}>{btn.text}</h3>
        </div>
      ))}
    </div>
  );
}

export default OptionsBar;
