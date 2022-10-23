import { useState, useEffect, useContext } from "react";
import { useCategoryFetching } from "../../hooks/useCategoryFetching";

import InlineList from "../InlineList/InlineList";
import PacketList from "../PacketList/PacketList";

import { AppContext } from "../../utils/context";
import { listFetching } from "../../handlers/getItems";
import { sortList } from "../../handlers/sortList";
import { getHeader, selectOptions } from "../../utils/store";

import styles from "./CategoryList.module.css";

function CategoryList({ category, width, loading }) {
  const [packetData, setPacketData] = useState({ items: [] });
  const { categoriesData } = useContext(AppContext);

  useEffect(() => {
    if (!loading) {
      if (category === "films") setPacketData(categoriesData.films);
      if (category === "series") setPacketData(categoriesData.series);
      if (category === "tv-shows") setPacketData(categoriesData.shows);
    }
    // eslint-disable-next-line
  }, [loading, category]);

  const [list, sort, isLoading, sortData] = useCategoryFetching(
    category,
    listFetching,
    sortList
  );

  return (
    <div className={styles.list}>
      <PacketList
        isLoading={loading}
        list={packetData.items}
        title={`Топ-20 в категории ${getHeader(category)}`}
        screen={width}
      />
      <h1>{getHeader(category)}</h1>
      <InlineList
        loading={isLoading}
        list={list}
        options={selectOptions}
        sort={sort}
        change={sortData}
      />
    </div>
  );
}

export default CategoryList;
