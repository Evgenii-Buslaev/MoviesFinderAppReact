import { useState } from "react";

import SearchForm from "../SearchForm/SearchForm";
import InlineList from "../InlineList/InlineList";
import { sortList } from "../../handlers/sortList";
import { selectOptions } from "../../utils/store";

import styles from "./Search.module.css";

function Search() {
  const [country, setCountry] = useState("");
  const [genre, setGenre] = useState("");
  const [period, setPeriod] = useState("");
  const [textQuery, setTextQuery] = useState("");

  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("ratingKinopoisk");

  const sortArgs = [setSort, list, setList];
  const sortData = (sort) => sortList(sort, ...sortArgs);

  return (
    <div className={styles.cont}>
      <SearchForm
        country={country}
        changeText={setTextQuery}
        chooseCountry={setCountry}
        chooseGenre={setGenre}
        choosePeriod={setPeriod}
      />
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
