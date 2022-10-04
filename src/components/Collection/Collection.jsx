import InlineList from "../InlineList/InlineList";
import { temporaryFilms } from "../../utils/store";

import styles from "./Collection.module.css";

function Collection() {
  return (
    <div className={styles.collection}>
      <h2>Вы сохранили:</h2>
      <InlineList data={temporaryFilms} />
    </div>
  );
}

export default Collection;
