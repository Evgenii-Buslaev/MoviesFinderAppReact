import { useState, useEffect } from "react";

import InlineList from "../InlineList/InlineList";
import { sortList } from "../../handlers/sortList";
import { selectOptions } from "../../utils/store";

import styles from "./Collection.module.css";

function Collection({ list, setList }) {
  const [sort, setSort] = useState("ratingKinopoisk");

  const sortArgs = [setSort, list, setList];
  const sortData = (sort) => sortList(sort, ...sortArgs);

  return (
    <div className={styles.collection}>
      {list.length < 1 ? (
        <h2>У Вас нет сохраненных фильмов.</h2>
      ) : (
        <>
          <h2>Вы сохранили:</h2>
          <InlineList
            list={list}
            loading={false}
            sort={sort}
            change={sortData}
            options={selectOptions}
            action="remove"
          />
        </>
      )}
    </div>
  );
}

export default Collection;
