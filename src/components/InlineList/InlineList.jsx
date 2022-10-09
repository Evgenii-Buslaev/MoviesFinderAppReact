import InlineListItem from "../InlineListItem/InlineListItem";
import RouterLink from "../../UI/RouterLink/RouterLink";
import Loader from "../../UI/Loader/Loader";

import Select from "../../UI/Select/Select";
import styles from "./InlineList.module.css";

function InlineList({ filter, list }) {
  return (
    <>
      <Select />
      <div className={styles.list} type={filter}>
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
