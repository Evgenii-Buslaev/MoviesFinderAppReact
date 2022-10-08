import { useState, useEffect, useContext } from "react";

import InlineList from "../InlineList/InlineList";
import PacketList from "../PacketList/PacketList";
/* import { getItems } from "../../handlers/getItems"; */
import { AppContext } from "../../utils/context";
import styles from "./CategoryList.module.css";

function CategoryList({ filter, category, width }) {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const { appElem } = useContext(AppContext);

  useEffect(() => {
    if (isLoading) {
      console.log("fetch...");
      fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${page}`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "8793b375-41ed-45e8-99f2-dddaf5296a1c",
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setList([...list, ...result.items]);
          setPage((prevPage) => prevPage + 1);
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }
  }, [isLoading, page]);

  const scrollHandler = (e) => {
    if (
      e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) <
      100
    ) {
      console.log("scroll");
      setIsLoading(true);
    }
  };

  useEffect(() => {
    const ref = appElem.current;
    ref.addEventListener("scroll", scrollHandler);
    return () => ref.removeEventListener("scroll", scrollHandler);
  }, [appElem]);

  return (
    <div className={styles.list}>
      <PacketList
        page={page}
        title={`Топ-20 в категории ${category}`}
        screen={width}
        filter={filter}
      />
      <h1>{category}</h1>
      <InlineList isLoading={isLoading} list={list} />
    </div>
  );
}

export default CategoryList;
