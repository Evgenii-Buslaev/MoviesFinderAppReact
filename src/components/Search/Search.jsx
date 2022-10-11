import { useState } from "react";

import SearchForm from "../SearchForm/SearchForm";
import InlineList from "../InlineList/InlineList";
import { sortList } from "../../handlers/sortList";
import { selectOptions } from "../../utils/store";

import styles from "./Search.module.css";

function Search() {
  const [sort, setSort] = useState("ratingKinopoisk");
  const [list, setList] = useState([]);

  const sortArgs = [setSort, list, setList];
  const sortData = (sort) => sortList(sort, ...sortArgs);
  return (
    <div className={styles.cont}>
      <SearchForm />
      <InlineList
        list={list}
        options={selectOptions}
        sort={sort}
        change={sortData}
      />
    </div>
  );
}

export default Search;
