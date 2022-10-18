import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import InlineListItem from "../InlineListItem/InlineListItem";
import Loader from "../../UI/Loader/Loader";
import Select from "../../UI/Select/Select";

import { filterList } from "../../handlers/filterList";
import styles from "./InlineList.module.css";

function InlineList({ list, options, sort, change, loading }) {
  const router = useNavigate();

  const filteredList = useMemo(() => {
    return filterList(list, "kinopoiskId");
  }, [list]);

  let content;
  if (!loading && !filteredList.length) {
    content = (
      <h2 className={styles.notification}>
        По такому запросу ничего не найдено
      </h2>
    );
  }

  if ((!loading && filteredList.length) || (loading && filteredList.length)) {
    content = filteredList.map((film) => (
      <InlineListItem
        id={film.kinopoiskId}
        key={film.kinopoiskId}
        data={film}
        click={(e) => {
          if (e.target.tagName !== "IMG") {
            router(`/${film.kinopoiskId}`);
          }
        }}
      />
    ));
  }

  return (
    <>
      <Select value={sort} options={options} change={change} />
      <div className={styles.list}>
        {content}
        {loading ? <Loader /> : null}
      </div>
    </>
  );
}

export default InlineList;
