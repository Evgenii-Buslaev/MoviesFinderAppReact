import InlineListItem from "../InlineListItem/InlineListItem";
import RouterLink from "../../UI/RouterLink/RouterLink";

import Select from "../../UI/Select/Select";
import styles from "./InlineList.module.css";

function InlineList({ data }) {
  return (
    <>
      <Select />
      <div className={styles.list}>
        {data.map((film) => (
          <RouterLink path="/id" key={Math.random()}>
            <InlineListItem
              name={film.name}
              country={film.country}
              year={film.year}
              duration={film.duration}
            />
          </RouterLink>
        ))}
      </div>
    </>
  );
}

export default InlineList;
