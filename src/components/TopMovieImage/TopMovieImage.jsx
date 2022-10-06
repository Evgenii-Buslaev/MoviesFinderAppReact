import styles from "./TopMovieImage.module.css";

function TopMovieImage({ path }) {
  return <img className={styles.movieCard} src={path} alt="movie-card"></img>;
}

export default TopMovieImage;
