import InlineListItem from "../InlineListItem/InlineListItem";
import RouterLink from "../../UI/RouterLink/RouterLink";
import Loader from "../../UI/Loader/Loader";

import Select from "../../UI/Select/Select";
import { filterList } from "../../handlers/filterList";
import styles from "./InlineList.module.css";

function InlineList({ list, options, sort, change, loading }) {
  const filteredList = filterList(list, "kinopoiskId");
  console.log(filteredList);

  let content;
  if (!loading && !filteredList.length) {
    content = (
      <h2 className={styles.notification}>
        По такому запросу ничего не найдено
      </h2>
    );
  }

  if ((!loading && filteredList.length) || (loading && filteredList.length)) {
    content = filteredList.map((film) => (
      <RouterLink path="/id" key={film.kinopoiskId}>
        <InlineListItem
          image={film.posterUrlPreview}
          name={film.nameRu || film.nameOriginal}
          countryList={film.countries}
          year={film.year}
          rating={film.ratingKinopoisk || "0"}
        />
      </RouterLink>
    ));
  }

  return (
    <>
      <Select value={sort} options={options} change={change} />
      <div className={styles.list}>
        {content}
        {loading ? <Loader /> : null}
      </div>
    </>
  );
}

export default InlineList;
