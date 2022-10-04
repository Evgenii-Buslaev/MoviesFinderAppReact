import Select from "../../UI/Select/Select";
import styles from "./InlineList.module.css";

function InlineList({ data, children }) {
  return (
    <>
      <Select />
      <div className={styles.list}>{children}</div>
    </>
  );
}

export default InlineList;
