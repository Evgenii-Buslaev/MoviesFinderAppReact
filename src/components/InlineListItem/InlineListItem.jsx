import styles from "./InlineListItem.module.css";

function InlineListItem({ image, name, countryList, year, duration }) {
  return (
    <div className={styles.item}>
      <div style={{ width: "auto" }}>
        <img className={styles.preview} src={image} alt="preview"></img>
      </div>
      <div style={{ width: "25vw" }}>
        <h2>{name}</h2>
      </div>
      <div style={{ width: "35vw" }}>
        {countryList.map((country) => (
          <h2 key={country.country}>{country.country}</h2>
        ))}
      </div>
      <div style={{ width: "auto" }}>
        <h2>{year}</h2>
      </div>
      <div style={{ width: "15vw" }}>
        <h2>{duration}</h2>
      </div>
    </div>
  );
}

export default InlineListItem;
