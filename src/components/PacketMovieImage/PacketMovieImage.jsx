import { useNavigate } from "react-router-dom";
import styles from "./PacketMovieImage.module.css";

function PacketMovieImage({ path, id }) {
  const router = useNavigate();
  return (
    <img
      onClick={() => router(`/${id}`)}
      className={styles.image}
      src={path}
      alt="packet-card"
    ></img>
  );
}

export default PacketMovieImage;
