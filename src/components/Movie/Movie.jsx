import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FilmsService from "../../API/FilmsService";
import Loader from "../../UI/Loader/Loader";
import PacketList from "../PacketList/PacketList";
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
        setData(res);
        setDataLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [dataLoading]);

  useEffect(() => {
    if (imagesLoading) {
      FilmsService.getImagesById(params.id).then((res) => {
        setImages(res);
        setImagesLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [imagesLoading]);

  useEffect(() => {
    if (similarsLoading) {
      FilmsService.getSimilarById(params.id).then((res) => {
        setSimilars(res);
        setSimilarsLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [similarsLoading]);

  useEffect(() => {
    setDataLoading(true);
    setImagesLoading(true);
    setSimilarsLoading(true);
  }, [params]);

  return (
    <div styles={styles.cont}>
      <div className={styles.main}>
        {dataLoading ? (
          <Loader />
        ) : (
          <>
            <img
              className={styles.card}
              src={data.posterUrl}
              alt="movie-card"
            />
            <Description
              year={data.year || data.startYear}
              restrictions={data.ratingAgeLimits}
              countries={data.countries}
              genres={data.genres}
              text={data.description}
              rating={data.ratingKinopoisk}
              url={data.webUrl}
            />
          </>
        )}
      </div>
      {similarsLoading ? null : similars.items.length > 0 ? (
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
