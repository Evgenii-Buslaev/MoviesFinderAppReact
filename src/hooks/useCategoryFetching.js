import { useState, useEffect, useContext } from "react";
import { AppContext } from "../utils/context";
import { scrollListFetching } from "../handlers/scrollLists";

export function useCategoryFetching(category, fetchingFunc, sortingFunc) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("ratingKinopoisk");
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

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
    page <= totalPages ? fetchingFunc(...fetchArgs) : setIsLoading(false);
  const sortData = (sort) => sortingFunc(sort, ...sortArgs);

  useEffect(() => {
    if (isLoading) {
      getData();
    }
    sortData(sort);
    // eslint-disable-next-line
  }, [isLoading]);

  useEffect(() => {
    setList([]);
    setPage(1);
    setIsLoading(true);
  }, [category]);

  const { appElem } = useContext(AppContext);

  useEffect(() => {
    const scrollHandler = (e) => scrollListFetching(e, setIsLoading);
    const ref = appElem.current;
    ref.addEventListener("scroll", scrollHandler);
    return () => ref.removeEventListener("scroll", scrollHandler);
  }, [appElem]);

  return [list, sort, isLoading, sortData];
}
