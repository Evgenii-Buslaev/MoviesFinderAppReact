import TopMovieCard from "../TopMovieCard/TopMovieCard";
import ImageButton from "../../UI/ImageButton/ImageButton";

import styles from "./TopList.module.css";

import next from "../../icons/TopList/next.png";
import prev from "../../icons/TopList/prev.png";

function TopList() {
  return (
    <div className={styles.topListCont}>
      <ImageButton path={prev} alt="previous movie" title="Предыдущий фильм" />
      <TopMovieCard />
      <ImageButton path={next} alt="next movie" title="Следующий фильм" />
    </div>
  );
}

export default TopList;
