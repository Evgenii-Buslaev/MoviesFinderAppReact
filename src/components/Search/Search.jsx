import { useSearching } from "../../hooks/useSearching";

import SearchForm from "../SearchForm/SearchForm";
import InlineList from "../InlineList/InlineList";

import { selectOptions } from "../../utils/store";

import styles from "./Search.module.css";

function Search() {
  const { data, setData } = useSearching();

  const [country, genre, period, textQuery, list, sort, isLoading] = data;
  const [
    setCountry,
    setGenre,
    setPeriod,
    setTextQuery,
    sortData,
    query,
    reset,
  ] = setData;

  return (
    <div className={styles.cont}>
      <SearchForm
        country={country}
        genre={genre}
        period={period}
        query={textQuery}
        changeText={setTextQuery}
        chooseCountry={setCountry}
        chooseGenre={setGenre}
        choosePeriod={setPeriod}
        search={query}
        reset={reset}
      />
      <InlineList
        list={list}
        options={selectOptions}
        sort={sort}
        change={sortData}
        loading={isLoading}
        action="save"
      />
    </div>
  );
}

export default Search;
