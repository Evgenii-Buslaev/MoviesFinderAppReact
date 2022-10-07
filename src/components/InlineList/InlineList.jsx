import { useState, useEffect } from "react";

import InlineListItem from "../InlineListItem/InlineListItem";
import RouterLink from "../../UI/RouterLink/RouterLink";
import Loader from "../../UI/Loader/Loader";
import { getItems } from "../../handlers/getItems";

import Select from "../../UI/Select/Select";
import styles from "./InlineList.module.css";

function InlineList() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItems("premiers", setList, setIsLoading);
  }, []);

  return (
    <>
      <Select />
      <div className={styles.list}>
        {isLoading ? (
          <Loader />
        ) : (
          list.items.map((film) => (
            <RouterLink path="/id" key={Math.random()}>
              <InlineListItem
                image={film.posterUrlPreview}
                name={film.nameRu}
                countryList={film.countries}
                year={film.year}
                duration={`${film.duration || "неопр. кол-во"} минут`}
              />
            </RouterLink>
          ))
        )}
      </div>
    </>
  );
}

export default InlineList;
