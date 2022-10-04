import InlineList from "../InlineList/InlineList";
import InlineListItem from "../InlineListItem/InlineListItem";
import PacketList from "../PacketList/PacketList";
import styles from "./CategoryList.module.css";

function CategoryList({ category, width }) {
  return (
    <div className={styles.list}>
      <PacketList title={`Топ-20 в категории ${category}`} screen={width} />
      <h1>{category}</h1>
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
