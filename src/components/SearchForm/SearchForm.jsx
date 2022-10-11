import { useState, useEffect } from "react";

import SearchDataList from "../../UI/SearchDataList/SearchDataList";
import { getData } from "../../handlers/getItems";
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
}) {
  const [countriesList, setCountriesList] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(setCountriesList, setGenresList, setIsLoading);
  }, []);

  const countries = isLoading ? [] : countriesList.map((country) => country);
  const genres = isLoading ? [] : genresList.map((genre) => genre);

  return (
    <form className={styles.searchCont}>
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
            id="years"
            data={years}
            text="Годы"
            value={genre}
            change={chooseGenre}
          />
          <SearchDataList
            id="genre"
            data={genres}
            text="Жанр"
            value={period}
            change={choosePeriod}
          />
        </div>
        <button type="submit" className={styles.submit}>
          Найти
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
