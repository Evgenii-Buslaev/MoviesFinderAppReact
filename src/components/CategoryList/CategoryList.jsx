import { useState, useEffect, useContext } from "react";

import InlineList from "../InlineList/InlineList";
import PacketList from "../PacketList/PacketList";

import { AppContext } from "../../utils/context";
import { listFetching } from "../../handlers/getItems";
import { scrollListFetching } from "../../handlers/scrollLists";
import { sortList } from "../../handlers/sortList";
import { getHeader, selectOptions } from "../../utils/store";
import { categoriesInitialData } from "../../utils/store";

import styles from "./CategoryList.module.css";

function CategoryList({ category, width, loading }) {
  const [packetData, setPacketData] = useState(categoriesInitialData);

  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("ratingKinopoisk");
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { appElem, categoriesData } = useContext(AppContext);

  const fetchArgs = [
    category,
    list,
    setList,
    page,
    setPage,
    setIsLoading,
    setTotalPages,
  ];
  const sortArgs = [setSort, list, setList];

  const getData = () =>
    page <= totalPages ? listFetching(...fetchArgs) : setIsLoading(false);
  const sortData = (sort) => sortList(sort, ...sortArgs);

  useEffect(() => {
    if (isLoading) {
      getData();
    }
    sortData(sort);
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

  useEffect(() => {
    if (!loading) {
      setPacketData(categoriesData);
    }
    // eslint-disable-next-line
  }, [loading]);

  return (
    <div className={styles.list}>
      <PacketList
        isLoading={loading}
        list={packetData.films.items}
        title={`Топ-20 в категории ${getHeader(category)}`}
        screen={width}
      />
      <h1>{getHeader(category)}</h1>
      <InlineList
        list={list}
        options={selectOptions}
        sort={sort}
        change={sortData}
      />
    </div>
  );
}

export default CategoryList;
