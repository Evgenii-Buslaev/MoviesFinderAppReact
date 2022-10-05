import Loader from "../../UI/Loader/Loader";

import styles from "./PacketMovieCard.module.css";

function PacketMovieCard() {
  return (
    <div className={styles.packetMovieCard}>
      <Loader />
    </div>
  );
}

export default PacketMovieCard;
