import styles from "./DataContainer.module.css";

function DataContainer({ header }) {
  return (
    <div className={styles.item}>
      <h3>{header}</h3>
    </div>
  );
}

export default DataContainer;
