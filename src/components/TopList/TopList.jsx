import { useNavigate } from "react-router-dom";

import TopMovieCard from "../TopMovieCard/TopMovieCard";
import Loader from "../../UI/Loader/Loader";
import Swiper from "react-id-swiper";
import { swiperParams } from "../../utils/store";

import styles from "./TopList.module.css";

function TopList({ list, loading }) {
  const router = useNavigate();
  return (
    <>
      <h1 className={styles.header}>Премьеры месяца</h1>
      <div className={styles.topListCont}>
        {loading ? (
          <TopMovieCard>
            <Loader />
          </TopMovieCard>
        ) : (
          <Swiper {...swiperParams}>
            {list.map((film) => (
              <div className="swiper-slide" key={film.nameRu}>
                <div></div>
                <img
                  className="swipeMovieCard"
                  src={film.posterUrl}
                  alt="movie-card"
                  onClick={() => router(`/${film.kinopoiskId}`)}
                />
              </div>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
}

export default TopList;
