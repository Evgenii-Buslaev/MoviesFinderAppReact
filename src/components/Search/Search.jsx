import SearchForm from "../SearchForm/SearchForm";
import InlineList from "../InlineList/InlineList";

import { temporaryFilms } from "../../utils/store";

import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.cont}>
      <SearchForm />
      <InlineList data={temporaryFilms} />
    </div>
  );
}

export default Search;
