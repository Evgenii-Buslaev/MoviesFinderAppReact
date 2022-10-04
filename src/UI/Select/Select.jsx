import { selectOptions } from "../../utils/store";
import styles from "./Select.module.css";

function Select() {
  return (
    <div className={styles.cont}>
      <h3>Сортировка: </h3>
      <select className={styles.select}>
        {selectOptions.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
