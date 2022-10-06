import Loader from "../../UI/Loader/Loader";
import styles from "./TopMovieCard.module.css";

function TopMovieCard() {
  return (
    <div className={styles.movieCardCont}>
      <Loader />
    </div>
  );
}

export default TopMovieCard;
