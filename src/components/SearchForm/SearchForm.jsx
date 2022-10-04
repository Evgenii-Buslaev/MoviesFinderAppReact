import SearchDataList from "../../UI/SearchDataList/SearchDataList";
import styles from "./SearchForm.module.css";

const countries = ["Россия", "Сша", "СССР"];
const years = ["2010-наст.вр", "2000-2010", "1990-2000", "1980-1990"];
const genre = ["Комедии", "Фантастика", "Детективы", "Документальный"];

function SearchForm() {
  return (
    <form className={styles.searchCont}>
      <input
        className={styles.search}
        type="text"
        placeholder="Введите ключевые слова..."
      />
      <div className={styles.filters}>
        <button type="submit" className={styles.submit}>
          Найти
        </button>
        <SearchDataList id="countries" data={countries} text="Страна" />
        <SearchDataList id="years" data={years} text="Годы" />
        <SearchDataList id="genre" data={genre} text="Жанр" />
      </div>
    </form>
  );
}

export default SearchForm;
