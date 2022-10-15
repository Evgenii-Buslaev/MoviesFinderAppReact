import styles from "./Rating.module.css";

function Rating({ rating }) {
  return (
    <div className={styles.cont}>
      <div className={styles.rating}>
        <div className={styles.count}>{rating}</div>
        <h4>Рейтинг кинопоиска</h4>
      </div>
      <button className={styles.adding}>Сохранить</button>
    </div>
  );
}

export default Rating;
