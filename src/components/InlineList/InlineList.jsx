import InlineListItem from "../InlineListItem/InlineListItem";
import RouterLink from "../../UI/RouterLink/RouterLink";

import Select from "../../UI/Select/Select";
import styles from "./InlineList.module.css";

function InlineList({ list, options, sort, change }) {
  return (
    <>
      <Select value={sort} options={options} change={change} />
      <div className={styles.list}>
        {list.map((film) => (
          <RouterLink path="/id" key={film.kinopoiskId}>
            <InlineListItem
              image={film.posterUrlPreview}
              name={film.nameRu || film.nameOriginal}
              countryList={film.countries}
              year={film.year}
              rating={film.ratingKinopoisk || "0"}
            />
          </RouterLink>
        ))}
      </div>
    </>
  );
}

export default InlineList;
