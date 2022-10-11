import { useEffect, useState } from "react";

import SearchForm from "../SearchForm/SearchForm";
import InlineList from "../InlineList/InlineList";
import FilmsService from "../../API/FilmsService";
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
  const [totalPages, setTotalPages] = useState(2);

  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("ratingKinopoisk");

  useEffect(() => {
    const fetching = (page, country, genre, period) => {
      FilmsService.search(page, country, genre, period)
        .then((res) => res.json())
        .then((result) => {
          setTotalPages(result.totalPages);
          if (page < 3) {
            setPage((prevPage) => prevPage + 1);
          }
          setList([...list, ...result.items]);
          console.log(page);
          console.log(result);
        });
    };
    if (isLoading) {
      fetching(page, country, genre, period);
      console.log(genre);
    }
  }, [page, country, genre, period, totalPages, isLoading]);

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
