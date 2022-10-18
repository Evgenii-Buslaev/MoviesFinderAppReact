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
    setSimilarsLoading(true);
  }, [params.id]);

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
            <Description data={data} />
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
