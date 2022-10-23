import { useSearching } from "../../hooks/useSearching";

import SearchForm from "../SearchForm/SearchForm";
import InlineList from "../InlineList/InlineList";

import { selectOptions } from "../../utils/store";

import styles from "./Search.module.css";

function Search() {
  const { data, setData } = useSearching();

  const [, , , , list, sort, isLoading] = data;
  const [sortData] = setData;

  return (
    <div className={styles.cont}>
      <SearchForm data={data} setData={setData} />
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
