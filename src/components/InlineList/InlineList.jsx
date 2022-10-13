import InlineListItem from "../InlineListItem/InlineListItem";
import RouterLink from "../../UI/RouterLink/RouterLink";
import Loader from "../../UI/Loader/Loader";

import Select from "../../UI/Select/Select";
import styles from "./InlineList.module.css";

function InlineList({ list, options, sort, change, loading }) {
  let content;
  if (!loading && !list.length) {
    content = (
      <h2 className={styles.notification}>
        По такому запросу ничего не найдено
      </h2>
    );
  }
  if (!loading && list.length) {
    content = list.map((film) => (
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
      <div className={styles.list}>{content}</div>
    </>
  );
}

export default InlineList;
