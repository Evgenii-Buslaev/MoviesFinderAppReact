import Rating from "../Rating/Rating";
import VideoWidget from "../VideoWidget/VideoWidget";
import styles from "./Description.module.css";

function Description({ data, video }) {
  const { restrictions, countries, genres, description, rating, webUrl } = data;

  const restriction = restrictions ? restrictions : "0";

  return (
    <div className={styles.cont}>
      <div className={styles.linesCont}>
        <div className={styles.line}>
          <h2>{data.year || data.startYear}</h2>
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
      <p>{description ? description : "Описание данного фильма отсутствует"}</p>
      {video ? (
        <VideoWidget
          src={video.url.replace(/v\/|watch\?v=\/?/, "embed/")}
          name={video.name}
        />
      ) : null}
      <Rating rating={rating} data={data} />
      <a
        href={webUrl}
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
