import SearchDataList from "../../UI/SearchDataList/SearchDataList";
import { ids } from "../../utils/countries_genres_ids";
import { years } from "../../utils/store";
import styles from "./SearchForm.module.css";

function SearchForm({ data, setData }) {
  const { country, genre, period, textQuery } = data;
  const {
    setCountry,
    setGenre,
    setPeriod,
    setTextQuery,
    setList,
    setPage,
    setIsLoading,
    setTotalPages,
    setSort,
  } = setData;

  const countries = ids.countries.map((item) => item.country);
  const genres = ids.genres.map((item) => item.genre);

  const query = () => {
    setList([]);
    setPage(1);
    setIsLoading(true);
    console.log("query");
  };

  const reset = () => {
    setCountry("");
    setGenre("");
    setPeriod("");
    setTextQuery("");
    setTotalPages(2);
    setSort("ratingKinopoisk");
    query();
    console.log("reset");
  };

  return (
    <form
      className={styles.searchCont}
      onSubmit={(e) => {
        e.preventDefault();
        query();
      }}
    >
      <input
        className={styles.search}
        type="text"
        placeholder="Введите ключевые слова..."
        value={textQuery}
        onChange={(e) => setTextQuery(e.target.value)}
      />
      <div className={styles.filters}>
        <div className={styles.lists}>
          <SearchDataList
            id="countries"
            data={countries}
            text="Страна"
            value={country}
            change={setCountry}
          />
          <SearchDataList
            id="genre"
            data={genres}
            text="Жанр"
            value={genre}
            change={setGenre}
          />
          <SearchDataList
            id="years"
            data={years}
            text="Годы"
            value={period}
            change={setPeriod}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Найти
        </button>
        <button className={styles.btn} onClick={() => reset()}>
          Сбросить
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
