import TopMovieCard from "../TopMovieCard/TopMovieCard";
import ImageButton from "../../UI/ImageButton/ImageButton";
import RouterLink from "../../UI/RouterLink/RouterLink";

import styles from "./TopList.module.css";

import next from "../../icons/TopList/next.png";
import prev from "../../icons/TopList/prev.png";

function TopList() {
  return (
    <>
      <h1 className={styles.header}>Актуальное на этой неделе</h1>
      <RouterLink path="/id">
        <div className={styles.topListCont}>
          <ImageButton
            path={prev}
            alt="previous movie"
            title="Предыдущий фильм"
          />
          <TopMovieCard />
          <ImageButton path={next} alt="next movie" title="Следующий фильм" />
        </div>
      </RouterLink>
    </>
  );
}

export default TopList;
