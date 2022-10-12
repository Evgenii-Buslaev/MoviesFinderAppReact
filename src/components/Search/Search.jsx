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

  const fetching = (page, textQuery, country, genre, period) => {
    FilmsService.search(page, textQuery, country, genre, period)
      .then((res) => res.json())
      .then((result) => {
        setTotalPages(result.totalPages);
        setList([...list, ...result.items]);
        if (page < 3) {
          setPage((prevPage) => prevPage + 1);
        }
        console.log(page);
        console.log(result);
      });
  };

  const clearData = () => {
    setList([]);
    setPage(1);
  };

  useEffect(() => {
    if (isLoading) {
      fetching(page, textQuery, country, genre, period);
      console.log(genre);
    }
  }, [page, totalPages, isLoading]);

  useEffect(() => {
    clearData();
  }, [country, genre, period, textQuery]);

  const sortArgs = [setSort, list, setList];
  const sortData = (sort) => sortList(sort, ...sortArgs);

  return (
    <div className={styles.cont}>
      <SearchForm
        country={country}
        genre={genre}
        period={period}
        query={textQuery}
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
