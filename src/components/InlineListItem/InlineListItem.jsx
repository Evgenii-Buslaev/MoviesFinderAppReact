import { useContext } from "react";
import { RouterContext } from "../../utils/context";

import styles from "./InlineListItem.module.css";
import star from "../../icons/inline/star.png";
import saved from "../../icons/inline/save.png";
import remove from "../../icons/inline/delete.png";

function InlineListItem({
  image,
  name,
  countryList,
  year,
  rating,
  click,
  action,
  data,
}) {
  const context = useContext(RouterContext);
  const { savedList, setList } = context;
  return (
    <div className={styles.item} onClick={click}>
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
      <img
        className={styles.add}
        src={action === "save" ? saved : remove}
        alt="save or remove"
        onClick={() => setList([...savedList, data])}
      ></img>
    </div>
  );
}

export default InlineListItem;
