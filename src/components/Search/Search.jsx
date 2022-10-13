import { useEffect, useState, useContext } from "react";

import SearchForm from "../SearchForm/SearchForm";
import InlineList from "../InlineList/InlineList";
import FilmsService from "../../API/FilmsService";

import { AppContext } from "../../utils/context";
import { sortList } from "../../handlers/sortList";
import { selectOptions } from "../../utils/store";
import { scrollListFetching } from "../../handlers/scrollLists";

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

  const { appElem } = useContext(AppContext);

  const sortArgs = [setSort, list, setList];
  const sortData = (sort) => sortList(sort, ...sortArgs);

  const fetching = (page, textQuery, country, genre, period) => {
    FilmsService.search(page, textQuery, country, genre, period)
      .then((res) => res.json())
      .then((result) => {
        setTotalPages(result.totalPages);
        setList([...list, ...result.items]);
        if (page < totalPages) setPage((prevPage) => prevPage + 1);
        setIsLoading(false);
      });
  };

  const query = () => {
    setList([]);
    setPage(1);
    setIsLoading(true);
  };

  const reset = () => {
    setCountry("");
    setGenre("");
    setPeriod("");
    setTextQuery("");
    setPage(1);
    setList([]);
    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoading) {
      fetching(page, textQuery, country, genre, period);
    } else {
      sortData(sort);
    }
    // eslint-disable-next-line
  }, [isLoading]);

  useEffect(() => {
    if (!textQuery) {
      const scrollHandler = (e) => scrollListFetching(e, setIsLoading);
      const ref = appElem.current;
      ref.addEventListener("scroll", scrollHandler);
      return () => ref.removeEventListener("scroll", scrollHandler);
    }
  }, [appElem, textQuery]);

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
        search={() => query()}
        reset={() => reset()}
      />
      <InlineList
        list={list}
        options={selectOptions}
        sort={sort}
        change={sortData}
        loading={isLoading}
      />
    </div>
  );
}

export default Search;
