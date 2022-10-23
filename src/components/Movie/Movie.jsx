import { useParams } from "react-router-dom";
import { useMovieFetching } from "../../hooks/useMovieFetching";

import Loader from "../../UI/Loader/Loader";
import PacketList from "../PacketList/PacketList";
import Description from "../Description/Description";
import styles from "./Movie.module.css";

function Movie({ width }) {
  const params = useParams();

  const [data, dataLoading, similars, similarsLoading, video] =
    useMovieFetching(params);

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
            <Description data={data} video={video} />
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
