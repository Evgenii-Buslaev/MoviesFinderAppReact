import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FilmsService from "../../API/FilmsService";
import Loader from "../../UI/Loader/Loader";
import PacketList from "../PacketList/PacketList";
import TopMovieCard from "../TopMovieCard/TopMovieCard";
import Description from "../Description/Description";

import styles from "./Movie.module.css";

function Movie({ width }) {
  const params = useParams();

  const [data, setData] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);

  const [images, setImages] = useState(null);
  const [imagesLoading, setImagesLoading] = useState(true);

  const [similars, setSimilars] = useState({ items: [] });
  const [similarsLoading, setSimilarsLoading] = useState(true);

  useEffect(() => {
    if (dataLoading) {
      FilmsService.getById(params.id).then((res) => {
        console.log("data");
        console.log(res);
        setData(res);
        setDataLoading(false);
      });
    }
    if (imagesLoading) {
      FilmsService.getImagesById(params.id).then((res) => {
        console.log("images");
        console.log(res);
        setImages(res);
        setImagesLoading(false);
      });
    }
    if (similarsLoading) {
      FilmsService.getSimilarById(params.id).then((res) => {
        console.log("similar");
        console.log(res);
        setSimilars(res);
        setSimilarsLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [dataLoading, imagesLoading, similarsLoading]);

  return (
    <div styles={styles.cont}>
      {dataLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.main}>
            <img
              className={styles.card}
              src={data.posterUrl}
              alt="movie-card"
            />
            <Description
              name={data.nameRu}
              year={data.year || data.startYear}
              restrictions={data.ratingAgeLimits}
              genres={data.genres}
              text={data.description}
            />
          </div>
        </>
      )}
      {similarsLoading ? (
        <Loader />
      ) : similars.items.length > 0 ? (
        <PacketList
          isLoading={similarsLoading}
          list={similars.items}
          title="С этим фильмом также смотрят:"
          screen={width}
        />
      ) : null}
    </div>
  );
}

export default Movie;
