import InlineList from "../InlineList/InlineList";
import PacketList from "../PacketList/PacketList";

import { temporaryFilms } from "../../utils/store";
import styles from "./CategoryList.module.css";

function CategoryList({ category, width }) {
  return (
    <div className={styles.list}>
      <PacketList title={`Топ-20 в категории ${category}`} screen={width} />
      <h1>{category}</h1>
      <InlineList data={temporaryFilms}></InlineList>
    </div>
  );
}

export default CategoryList;
