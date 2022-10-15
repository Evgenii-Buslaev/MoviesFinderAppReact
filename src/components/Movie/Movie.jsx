import styles from "./Movie.module.css";
import { useParams } from "react-router-dom";

function Movie() {
  const params = useParams();
  console.log(params);
  return <div styles={styles.cont}>Chosen movie</div>;
}

export default Movie;
