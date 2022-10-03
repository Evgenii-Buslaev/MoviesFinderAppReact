import styles from "./InlineList.module.css";

function InlineList({ children }) {
  return <div className={styles.list}>{children}</div>;
}

export default InlineList;
