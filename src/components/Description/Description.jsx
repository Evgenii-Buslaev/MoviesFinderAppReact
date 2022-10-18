import Rating from "../Rating/Rating";
import styles from "./Description.module.css";

function Description({ year, data }) {
  const { restrictions, countries, genres, text, rating, url } = data;

  const restriction = restrictions ? restrictions : "0";
  return (
    <div className={styles.cont}>
      <div className={styles.linesCont}>
        <div className={styles.line}>
          <h2>{year}</h2>
          <h2 className={styles.age}>{`${restriction.match(/\d+/gi)}+`}</h2>
        </div>
        <div className={styles.genresCountries}>
          <div className={styles.items}>
            {countries
              .map((obj) => <h3 key={obj.country}>{obj.country}</h3>)
              .slice(0, 3)}
          </div>
          <div className={styles.items}>
            {genres
              .map((genre) => <h3 key={genre.genre}>{genre.genre}</h3>)
              .slice(0, 3)}
          </div>
        </div>
      </div>
      <p>{text ? text : "Описание данного фильма отсутствует"}</p>
      <Rating rating={rating} data={data} />
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={styles.watchLink}
      >
        <button className={styles.watchBtn}>Смотреть на кинопоиске</button>
      </a>
    </div>
  );
}

export default Description;
