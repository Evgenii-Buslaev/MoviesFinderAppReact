import { useState, useContext, useEffect } from "react";
import { RouterContext } from "../../utils/context";

import loading from "../../icons/loading/loading.png";
import styles from "./Rating.module.css";

function Rating({ rating, data }) {
  const [saved, setSaved] = useState(false);
  const [textBtn, setTextBtn] = useState("");
  const [inProcess, setInProcess] = useState(false);

  const context = useContext(RouterContext);
  const { savedList, setList } = context;

  const checkSaved = () => {
    const added = savedList.filter(
      (elem) => elem.kinopoiskId === data.kinopoiskId
    );
    if (added.length > 0) {
      setSaved(true);
      setTextBtn("Удалить из коллекции");
    } else {
      setSaved(false);
      setTextBtn("Буду смотреть");
    }
  };

  const changeCollection = () => {
    if (saved) {
      setInProcess(true);
      setList(
        savedList.filter((elem) => elem.kinopoiskId !== data.kinopoiskId)
      );
      setSaved(false);
      setTimeout(() => {
        setInProcess(false);
      }, 1500);
    } else {
      setInProcess(true);
      setList([...savedList, data]);
      setSaved(true);
      setTimeout(() => {
        setInProcess(false);
      }, 1500);
    }
  };

  useEffect(() => {
    checkSaved();
    // eslint-disable-next-line
  }, [saved]);

  return (
    <div className={styles.cont}>
      <div className={styles.rating}>
        <div className={styles.count}>{rating ? rating : 0}</div>
        <h4>Рейтинг кинопоиска</h4>
      </div>
      {inProcess ? (
        <div className={styles.rotate}>
          <img src={loading} alt="loading"></img>
        </div>
      ) : (
        <button className={styles.adding} onClick={changeCollection}>
          {textBtn}
        </button>
      )}
    </div>
  );
}

export default Rating;
