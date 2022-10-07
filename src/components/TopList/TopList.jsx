import { useState, useEffect } from "react";

import TopMovieCard from "../TopMovieCard/TopMovieCard";
import Loader from "../../UI/Loader/Loader";
import Swiper from "react-id-swiper";

import { getItems } from "../../handlers/getItems";

import styles from "./TopList.module.css";

function TopList() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItems("premiers", setList, setIsLoading);
  }, []);

  return (
    <>
      <h1 className={styles.header}>Премьеры месяца</h1>
      <div className={styles.topListCont}>
        {isLoading ? (
          <TopMovieCard>
            <Loader />
          </TopMovieCard>
        ) : (
          <Swiper loop={true} slidesPerView={1}>
            {list.items.map((film) => (
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
