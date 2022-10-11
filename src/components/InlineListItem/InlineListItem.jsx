import styles from "./InlineListItem.module.css";
import star from "../../icons/inline/star.png";

function InlineListItem({ image, name, countryList, year, rating }) {
  return (
    <div className={styles.item}>
      <div style={{ width: "auto" }}>
        <img className={styles.preview} src={image} alt="preview"></img>
      </div>
      <div style={{ width: "25vw" }}>
        <h2>{name}</h2>
      </div>
      <div style={{ width: "30vw" }}>
        {countryList.map((country) => (
          <h2 key={country.country}>{country.country}</h2>
        ))}
      </div>
      <div className={styles.ratingCont}>
        <img className={styles.rating} src={star} alt="rating"></img>
        <h2>{rating.toString().length > 1 ? rating : `${rating}.0`}</h2>
      </div>
      <div style={{ width: "auto" }}>
        <h2>{year}</h2>
      </div>
    </div>
  );
}

export default InlineListItem;
