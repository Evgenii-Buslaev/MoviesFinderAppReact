import InlineList from "../InlineList/InlineList";
import InlineListItem from "../InlineListItem/InlineListItem";

import styles from "./Collection.module.css";

function Collection() {
  return (
    <div className={styles.collection}>
      <h2>Вы сохранили:</h2>
      <InlineList>
        <InlineListItem
          name="Берегись автомобиля"
          country="СССР"
          year={1984}
          duration="1 ч. 23 мин."
        />
      </InlineList>
    </div>
  );
}

export default Collection;
