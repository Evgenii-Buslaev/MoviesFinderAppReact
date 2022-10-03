import PacketMovieCard from "../PacketMovieCard/PacketMovieCard";
import ImageButton from "../../UI/ImageButton/ImageButton";

import styles from "./PacketList.module.css";

import more from "../../icons/PacketList/more.png";
import less from "../../icons/PacketList/less.png";

function PacketList({ title }) {
  return (
    <div className={styles.listCont}>
      <h2>{title}</h2>
      <div className={styles.list}>
        <ImageButton
          path={less}
          alt="previous movie"
          title="Предыдущий фильм"
        />
        <div className={styles.items}>
          <PacketMovieCard />
          <PacketMovieCard />
          <PacketMovieCard />
        </div>
        <ImageButton path={more} alt="next movie" title="Следующий фильм" />
      </div>
    </div>
  );
}

export default PacketList;
