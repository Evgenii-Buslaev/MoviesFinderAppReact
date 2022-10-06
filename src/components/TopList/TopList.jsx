import { useState, useEffect } from "react";

import TopMovieCard from "../TopMovieCard/TopMovieCard";
import TopMovieImage from "../TopMovieImage/TopMovieImage";
import ImageButton from "../../UI/ImageButton/ImageButton";
import FilmsService from "../../API/FilmsService";

import styles from "./TopList.module.css";

import next from "../../icons/TopList/next.png";
import prev from "../../icons/TopList/prev.png";

function TopList() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFilms = async () => {
    const data = await FilmsService.getPremiers();
    const res = await data.json();
    setList(res);
    setIsLoading(false);
    console.log(res);
  };

  useEffect(() => {
    /*     fetchFilms(); */
  }, []);

  return (
    <>
      <h1 className={styles.header}>Премьеры месяца</h1>
      <div className={styles.topListCont}>
        <ImageButton
          path={prev}
          alt="previous movie"
          title="Предыдущий фильм"
        />
        {isLoading ? (
          <TopMovieCard />
        ) : (
          <TopMovieImage path={list.items[0].posterUrl} />
        )}
        <ImageButton path={next} alt="next movie" title="Следующий фильм" />
      </div>
    </>
  );
}

export default TopList;
