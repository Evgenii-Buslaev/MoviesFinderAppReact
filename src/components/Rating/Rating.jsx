import { useContext } from "react";
import { RouterContext } from "../../utils/context";
import styles from "./Rating.module.css";

function Rating({ rating, data }) {
  const context = useContext(RouterContext);
  const { savedList, setList } = context;
  return (
    <div className={styles.cont}>
      <div className={styles.rating}>
        <div className={styles.count}>{rating ? rating : 0}</div>
        <h4>Рейтинг кинопоиска</h4>
      </div>
      <button
        className={styles.adding}
        onClick={() => setList([...savedList, data])}
      >
        Сохранить
      </button>
    </div>
  );
}

export default Rating;
