import styles from "./SearchDataList.module.css";

function SearchDataList({ value, change, id, data, text }) {
  return (
    <>
      <input
        list={id}
        placeholder={text}
        className={styles.dataInput}
        value={value}
        onChange={(e) => change(e.target.value)}
      />
      <datalist id={id}>
        {data.map((item) => (
          <option value={item} key={item} />
        ))}
      </datalist>
    </>
  );
}

export default SearchDataList;
