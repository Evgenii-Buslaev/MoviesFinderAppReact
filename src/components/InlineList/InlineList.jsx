import { useState, useEffect } from "react";

import InlineListItem from "../InlineListItem/InlineListItem";
import RouterLink from "../../UI/RouterLink/RouterLink";
import Loader from "../../UI/Loader/Loader";
import { getItems } from "../../handlers/getItems";

import Select from "../../UI/Select/Select";
import styles from "./InlineList.module.css";

function InlineList({ filter }) {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /* getItems(filter, setList, setIsLoading); */
  }, [filter]);

  return (
    <>
      <Select />
      <div className={styles.list} type={filter}>
        {isLoading ? (
          <Loader />
        ) : (
          list.items.map((film) => (
            <RouterLink path="/id" key={film.kinopoiskId}>
              <InlineListItem
                image={film.posterUrlPreview}
                name={film.nameRu || film.nameOriginal}
                countryList={film.countries}
                year={film.year}
              />
            </RouterLink>
          ))
        )}
      </div>
    </>
  );
}

export default InlineList;
