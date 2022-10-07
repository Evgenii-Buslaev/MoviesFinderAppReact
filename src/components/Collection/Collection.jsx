import InlineList from "../InlineList/InlineList";
import styles from "./Collection.module.css";

function Collection() {
  return (
    <div className={styles.collection}>
      <h2>Вы сохранили:</h2>
      <InlineList />
    </div>
  );
}

export default Collection;
