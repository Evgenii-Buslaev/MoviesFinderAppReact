import { useState } from "react";

import InlineList from "../InlineList/InlineList";
import { sortList } from "../../handlers/sortList";
import { selectOptions } from "../../utils/store";

import styles from "./Collection.module.css";

function Collection({ list, setList }) {
  const [sort, setSort] = useState("ratingKinopoisk");

  const sortArgs = [setSort, list, setList];
  const sortData = (sort) => sortList(sort, ...sortArgs);

  const header =
    list.length > 0 ? (
      <div className={styles.header}>
        <h2>Вы сохранили:</h2>
        <button className={styles.clear}>Очистить коллекцию</button>
      </div>
    ) : (
      <h2>У Вас нет добавленных фильмов.</h2>
    );

  return (
    <>
      {header}
      <InlineList
        list={list}
        loading={false}
        sort={sort}
        change={sortData}
        options={selectOptions}
      />
    </>
  );
}

export default Collection;
