import InlineListItem from "../InlineListItem/InlineListItem";

import Select from "../../UI/Select/Select";
import styles from "./InlineList.module.css";

function InlineList({ data }) {
  return (
    <>
      <Select />
      <div className={styles.list}>
        {data.map((film) => (
          <InlineListItem
            name={film.name}
            key={Math.random()}
            country={film.country}
            year={film.year}
            duration={film.duration}
          />
        ))}
      </div>
    </>
  );
}

export default InlineList;
