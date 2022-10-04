import styles from "./SearchDataList.module.css";

function SearchDataList({ id, data, text }) {
  return (
    <>
      <input list={id} placeholder={text} className={styles.dataInput} />
      <datalist id={id}>
        {data.map((item) => (
          <option value={item} key={item} />
        ))}
      </datalist>
    </>
  );
}

export default SearchDataList;
