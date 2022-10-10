import { useState } from "react";
import InlineListItem from "../InlineListItem/InlineListItem";
import RouterLink from "../../UI/RouterLink/RouterLink";
import Loader from "../../UI/Loader/Loader";

import Select from "../../UI/Select/Select";
import styles from "./InlineList.module.css";

const selectOptions = [
  { value: "nameRu", name: "по названию" },
  { value: "ratingKinopoisk", name: "по рейтингу" },
  { value: "year", name: "сначала новое" },
];

function InlineList({ list, setList }) {
  const [sort, setSort] = useState("ratingKinopoisk");

  const sortedList = (sort) => {
    setSort(sort);
    if (sort === "ratingKinopoisk" || sort === "year") {
      setList([...list].sort((a, b) => b[sort] - a[sort]));
    } else {
      setList(
        [...list].sort((a, b) => {
          a = a.nameRu || "";
          b = b.nameRu || "";
          return a.localeCompare(b);
        })
      );
    }
  };

  return (
    <>
      <Select value={sort} options={selectOptions} change={sortedList} />
      <div className={styles.list}>
        {list ? (
          list.map((film) => (
            <RouterLink path="/id" key={film.kinopoiskId}>
              <InlineListItem
                image={film.posterUrlPreview}
                name={film.nameRu || film.nameOriginal}
                countryList={film.countries}
                year={film.year}
              />
            </RouterLink>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default InlineList;
