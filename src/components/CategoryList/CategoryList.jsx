import { useState, useEffect, useContext } from "react";

import InlineList from "../InlineList/InlineList";
import PacketList from "../PacketList/PacketList";

import { AppContext } from "../../utils/context";
import { listFetching } from "../../handlers/getItems";
import { scrollListFetching } from "../../handlers/scrollLists";

import styles from "./CategoryList.module.css";

function CategoryList({ filter, category, width }) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { appElem } = useContext(AppContext);

  const getData = () => {
    if (list.length < 400) {
      return listFetching(filter, list, setList, page, setPage, setIsLoading);
    }
    return;
  };

  useEffect(() => {
    if (isLoading) {
      getData();
    }
  }, [isLoading]);

  useEffect(() => {
    const scrollHandler = (e) => scrollListFetching(e, setIsLoading);
    const ref = appElem.current;
    ref.addEventListener("scroll", scrollHandler);
    return () => ref.removeEventListener("scroll", scrollHandler);
  }, [appElem]);

  return (
    <div className={styles.list}>
      <PacketList
        isLoading={isLoading}
        list={list}
        title={`Топ-20 в категории ${category}`}
        screen={width}
      />
      <h1>{category}</h1>
      <InlineList isLoading={isLoading} list={list} />
    </div>
  );
}

export default CategoryList;
