import styles from "./DataContainer.module.css";

function DataContainer({ lines }) {
  return (
    <div className={styles.item}>
      {lines.map((line) => (
        <h3>{line}</h3>
      ))}
    </div>
  );
}

export default DataContainer;
