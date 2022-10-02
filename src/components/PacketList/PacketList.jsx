import PacketMovieCard from "../PacketMovieCard/PacketMovieCard";
import ImageButton from "../../UI/ImageButton/ImageButton";
import styles from "./PacketList.module.css";
import more from "../../icons/PacketList/more.png";

function PacketList({ title }) {
  return (
    <div className={styles.listCont}>
      <h2>{title}</h2>
      <div className={styles.list}>
        <div className={styles.items}>
          <PacketMovieCard />
          <PacketMovieCard />
          <PacketMovieCard />
        </div>
        <ImageButton path={more} alt="more items" title="Посмотреть еще..." />
      </div>
    </div>
  );
}

export default PacketList;
