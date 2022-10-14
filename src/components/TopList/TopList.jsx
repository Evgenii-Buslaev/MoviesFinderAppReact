import TopMovieCard from "../TopMovieCard/TopMovieCard";
import Loader from "../../UI/Loader/Loader";
import Swiper from "react-id-swiper";

import styles from "./TopList.module.css";

function TopList({ list, loading }) {
  const params = {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <>
      <h1 className={styles.header}>Премьеры месяца</h1>
      <div className={styles.topListCont}>
        {loading ? (
          <TopMovieCard>
            <Loader />
          </TopMovieCard>
        ) : (
          <Swiper {...params}>
            {list.map((film) => (
              <div className="swiper-slide" key={film.nameRu}>
                <img
                  className="swipeMovieCard"
                  src={film.posterUrl}
                  alt="movie-card"
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
