import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FilmsService from "../../API/FilmsService";
import PacketList from "../PacketList/PacketList";

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
        console.log(res);
        setDataLoading(false);
      });
    }
    if (imagesLoading) {
      FilmsService.getImagesById(params.id).then((res) => {
        console.log(res);
        setImagesLoading(false);
      });
    }
    if (similarsLoading) {
      FilmsService.getSimilarById(params.id).then((res) => {
        console.log(res);
        setSimilars(res);
        setSimilarsLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [dataLoading, imagesLoading, similarsLoading]);

  return (
    <div styles={styles.cont}>
      <PacketList
        isLoading={similarsLoading}
        title="С этим фильмом также смотрят..."
        screen={width}
        list={similars.items}
      />
    </div>
  );
}

export default Movie;
