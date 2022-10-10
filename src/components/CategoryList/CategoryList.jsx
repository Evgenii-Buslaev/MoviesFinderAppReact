import { useState, useEffect, useContext } from "react";

import InlineList from "../InlineList/InlineList";
import PacketList from "../PacketList/PacketList";

import { AppContext } from "../../utils/context";
import { listFetching } from "../../handlers/getItems";
import { scrollListFetching } from "../../handlers/scrollLists";

import styles from "./CategoryList.module.css";

function CategoryList({ category, width }) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { appElem } = useContext(AppContext);

  const fetchArgs = [
    category,
    list,
    setList,
    page,
    setPage,
    setIsLoading,
    setTotalPages,
  ];

  const getData = () =>
    page <= totalPages ? listFetching(...fetchArgs) : setIsLoading(false);

  useEffect(() => {
    if (isLoading) {
      getData();
    }
  }, [isLoading]);

  useEffect(() => {
    setList([]);
    setPage(1);
    setIsLoading(true);
  }, [category]);

  useEffect(() => {
    const scrollHandler = (e) => scrollListFetching(e, setIsLoading);
    const ref = appElem.current;
    ref.addEventListener("scroll", scrollHandler);
    return () => ref.removeEventListener("scroll", scrollHandler);
  }, [appElem]);

  let header;
  switch (category) {
    case "films":
      header = "Фильмы";
      break;
    case "series":
      header = "Сериалы";
      break;
    case "tv-shows":
      header = "ТВ-шоу";
      break;
    default:
      header = "Фильмы";
      break;
  }

  return (
    <div className={styles.list}>
      <PacketList
        isLoading={isLoading}
        list={list}
        title={`Топ-20 в категории ${header}`}
        screen={width}
      />
      <h1>{header}</h1>
      <InlineList list={list} />
    </div>
  );
}

export default CategoryList;
