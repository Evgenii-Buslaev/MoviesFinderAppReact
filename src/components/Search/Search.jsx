import SearchForm from "../SearchForm/SearchForm";
import InlineList from "../InlineList/InlineList";

import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.cont}>
      <SearchForm />
      <InlineList />
    </div>
  );
}

export default Search;
