import styles from "./InlineListItem.module.css";

function InlineListItem({ name, country, year, duration }) {
  return (
    <div className={styles.item}>
      <h2>{name}</h2>
      <h2>{country}</h2>
      <h2>{year}</h2>
      <h2>{duration}</h2>
    </div>
  );
}

export default InlineListItem;
