import RouterLink from "../../UI/RouterLink/RouterLink";
import styles from "./DataContainer.module.css";

function DataContainer({ header, path }) {
  return (
    <RouterLink path={path}>
      <div className={styles.item}>
        <h3>{header}</h3>
      </div>
    </RouterLink>
  );
}

export default DataContainer;
