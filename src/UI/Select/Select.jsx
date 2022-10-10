import styles from "./Select.module.css";

function Select({ options, value, change }) {
  return (
    <div className={styles.cont}>
      <h3>Сортировка: </h3>
      <select
        className={styles.select}
        value={value}
        onChange={(e) => change(e.target.value)}
      >
        {options.map((item) => (
          <option value={item.value} key={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
