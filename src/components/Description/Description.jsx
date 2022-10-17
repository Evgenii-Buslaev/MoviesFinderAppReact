import Rating from "../Rating/Rating";
import styles from "./Description.module.css";

function Description({ name, year, restrictions, genres, text, rating }) {
  const restriction = restrictions ? restrictions : "0";
  return (
    <div className={styles.cont}>
      <div className={styles.linesCont}>
        <div className={styles.line}>
          <h2>{year}</h2>
          <h2 className={styles.age}>{`${restriction.match(/\d+/gi)}+`}</h2>
        </div>
        <div className={styles.genres}>
          {genres
            .map((genre) => <h3 key={genre.genre}>{genre.genre}</h3>)
            .slice(0, 4)}
        </div>
      </div>
      <p>{text ? text : "Описание данного фильма отсутствует"}</p>
      <Rating rating={rating} />
    </div>
  );
}

export default Description;
