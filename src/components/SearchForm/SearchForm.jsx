import SearchDataList from "../../UI/SearchDataList/SearchDataList";
import { ids } from "../../utils/countries_genres_ids";
import { years } from "../../utils/store";
import styles from "./SearchForm.module.css";

function SearchForm({
  country,
  genre,
  period,
  query,
  chooseCountry,
  chooseGenre,
  choosePeriod,
  changeText,
  search,
}) {
  const countries = ids.countries.map((item) => item.country);
  const genres = ids.genres.map((item) => item.genre);

  return (
    <form
      className={styles.searchCont}
      onSubmit={(e) => {
        e.preventDefault();
        search();
      }}
    >
      <input
        className={styles.search}
        type="text"
        placeholder="Введите ключевые слова..."
        value={query}
        onChange={(e) => changeText(e.target.value)}
      />
      <div className={styles.filters}>
        <div className={styles.lists}>
          <SearchDataList
            id="countries"
            data={countries}
            text="Страна"
            value={country}
            change={chooseCountry}
          />
          <SearchDataList
            id="genre"
            data={genres}
            text="Жанр"
            value={genre}
            change={chooseGenre}
          />
          <SearchDataList
            id="years"
            data={years}
            text="Годы"
            value={period}
            change={choosePeriod}
          />
        </div>
        <button
          type="submit"
          className={styles.submit}
          onClick={() => search()}
        >
          Найти
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
