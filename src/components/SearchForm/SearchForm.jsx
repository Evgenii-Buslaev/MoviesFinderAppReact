import { useState, useEffect } from "react";

import SearchDataList from "../../UI/SearchDataList/SearchDataList";
import { getData } from "../../handlers/getItems";
import { years } from "../../utils/store";
import styles from "./SearchForm.module.css";

function SearchForm() {
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
      />
      <div className={styles.filters}>
        <div className={styles.lists}>
          <SearchDataList id="countries" data={countries} text="Страна" />
          <SearchDataList id="years" data={years} text="Годы" />
          <SearchDataList id="genre" data={genres} text="Жанр" />
        </div>
        <button type="submit" className={styles.submit}>
          Найти
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
