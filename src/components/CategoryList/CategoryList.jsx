import { useState, useEffect, useContext } from "react";

import InlineList from "../InlineList/InlineList";
import PacketList from "../PacketList/PacketList";
import { AppContext } from "../../utils/context";
import styles from "./CategoryList.module.css";

function CategoryList({ filter, category, width }) {
  const [page, setPage] = useState(1);
  const { appElem } = useContext(AppContext);

  const scrollHandler = () => console.log(1);

  useEffect(() => {
    const ref = appElem.current;
    ref.addEventListener("scroll", scrollHandler);
    return () => ref.removeEventListener("scroll", scrollHandler);
  }, [appElem]);

  return (
    <div className={styles.list}>
      <PacketList
        page={page}
        title={`Топ-20 в категории ${category}`}
        screen={width}
        filter={filter}
      />
      <h1>{category}</h1>
      <InlineList page={page} filter={filter} />
    </div>
  );
}

export default CategoryList;
