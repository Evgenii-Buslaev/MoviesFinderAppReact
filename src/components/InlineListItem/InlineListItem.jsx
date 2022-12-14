import { useState, useContext, useEffect } from "react";
import { RouterContext } from "../../utils/context";

import styles from "./InlineListItem.module.css";
import star from "../../icons/inline/star.png";
import save from "../../icons/inline/save.png";
import remove from "../../icons/inline/delete.png";
import loading from "../../icons/loading/loading.png";

function InlineListItem({ click, data }) {
  const [saved, setSaved] = useState(false);
  const [image, setImage] = useState(save);
  const [inProcess, setInProcess] = useState(false);

  const context = useContext(RouterContext);
  const { savedList, setList } = context;

  const checkSaved = () => {
    const addedItem = savedList.filter(
      (elem) => elem.kinopoiskId === data.kinopoiskId
    );
    if (addedItem.length > 0) {
      setImage(remove);
      setSaved(true);
      return;
    }
    setImage(save);
  };

  const changeCollection = () => {
    if (!saved) {
      setList([...savedList, data]);
      setInProcess(true);
      setImage(loading);

      setTimeout(() => {
        setInProcess(false);
        setImage(remove);
      }, 1500);
      setSaved(true);
    } else {
      setList(
        savedList.filter((elem) => elem.kinopoiskId !== data.kinopoiskId)
      );
      setInProcess(true);
      setImage(loading);

      setTimeout(() => {
        setInProcess(false);
        setImage(save);
      }, 1000);
      setSaved(false);
    }
  };

  useEffect(() => {
    checkSaved();
    // eslint-disable-next-line
  }, []);

  const { posterUrlPreview, countries, year } = data;
  const rating = data.ratingKinopoisk || "0";

  return (
    <div className={styles.item} onClick={click}>
      <div style={{ width: "auto" }}>
        <img
          className={styles.preview}
          src={posterUrlPreview}
          alt="preview"
        ></img>
      </div>
      <div style={{ width: "25vw" }}>
        <h2>{data.nameRu || data.nameOriginal}</h2>
      </div>
      <div style={{ width: "30vw" }}>
        {countries.map((country) => (
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
        className={inProcess ? `${styles.rotating}` : styles.add}
        src={image}
        alt="save or remove"
        onClick={changeCollection}
      ></img>
    </div>
  );
}

export default InlineListItem;
