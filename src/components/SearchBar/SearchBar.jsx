import styles from "./SearchBar.module.css";
import search from "../../icons/search/search.png";

function SearchBar() {
  return (
    <div className={styles.searchBarCont}>
      <img src={search} alt="search bar" />
      <input
        style={{ fontSize: "1rem", color: "white" }}
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
}

export default SearchBar;
