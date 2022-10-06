import styles from "./TopMovieCard.module.css";

function TopMovieCard({ children }) {
  return <div className={styles.movieCardCont}>{children}</div>;
}

export default TopMovieCard;
