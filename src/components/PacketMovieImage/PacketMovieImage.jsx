import styles from "./PacketMovieImage.module.css";

function PacketMovieImage({ path, id }) {
  return <img className={styles.image} src={path} alt="packet-card"></img>;
}

export default PacketMovieImage;
