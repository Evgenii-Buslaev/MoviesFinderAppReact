import { useEffect, useState, useContext } from "react";

import FilmsService from "../API/FilmsService";
import { AppContext } from "../utils/context";
import { sortList } from "../handlers/sortList";
import { scrollListFetching } from "../handlers/scrollLists";

export function useSearching() {
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
    setTotalPages(2);
    setSort("ratingKinopoisk");
    query();
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

  return {
    data: [country, genre, period, textQuery, list, sort, isLoading],
    setData: [
      setCountry,
      setGenre,
      setPeriod,
      setTextQuery,
      sortData,
      query,
      reset,
    ],
  };
}
