import styles from "./Description.module.css";

function Description({ name, year, restrictions, genres, text }) {
  return (
    <div className={styles.cont}>
      <h1>{name}</h1>
      <div className={styles.line}>
        <h2>{year}</h2>
        <h2>{`${restrictions.match(/\d+/gi)}+`}</h2>
      </div>
      <div className={styles.line}>
        {genres.map((genre) => (
          <h3>{genre.genre}</h3>
        ))}
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Description;
