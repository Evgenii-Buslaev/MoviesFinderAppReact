import InlineList from "../InlineList/InlineList";
import InlineListItem from "../InlineListItem/InlineListItem";
import styles from "./CategoryList.module.css";

function CategoryList({ category }) {
  return (
    <div className={styles.list}>
      <h1>Лучшее в категории {category}</h1>
      <InlineList>
        <InlineListItem
          name="Берегись автомобиля"
          country="СССР"
          year={1984}
          duration="1 ч. 23 мин."
        />
        <InlineListItem
          name="Берегись автомобиля"
          country="СССР"
          year={1984}
          duration="1 ч. 23 мин."
        />
        <InlineListItem
          name="Берегись автомобиля"
          country="СССР"
          year={1984}
          duration="1 ч. 23 мин."
        />
        <InlineListItem
          name="Берегись автомобиля"
          country="СССР"
          year={1984}
          duration="1 ч. 23 мин."
        />
        <InlineListItem
          name="Берегись автомобиля"
          country="СССР"
          year={1984}
          duration="1 ч. 23 мин."
        />
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

export default CategoryList;
