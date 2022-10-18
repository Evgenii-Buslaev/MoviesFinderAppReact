import { useState, useContext, useEffect } from "react";
import { RouterContext } from "../../utils/context";
import styles from "./Rating.module.css";

function Rating({ rating, data }) {
  const [saved, setSaved] = useState(false);
  const [textBtn, setTextBtn] = useState("");
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
      setTextBtn("Сохранить в коллекцию");
    }
  };

  const changeCollection = () => {
    if (saved) {
      setList(
        savedList.filter((elem) => elem.kinopoiskId !== data.kinopoiskId)
      );
      setSaved(false);
    } else {
      setList([...savedList, data]);
      setSaved(true);
    }
  };

  useEffect(() => {
    checkSaved();
  });

  return (
    <div className={styles.cont}>
      <div className={styles.rating}>
        <div className={styles.count}>{rating ? rating : 0}</div>
        <h4>Рейтинг кинопоиска</h4>
      </div>
      <button className={styles.adding} onClick={changeCollection}>
        {textBtn}
      </button>
    </div>
  );
}

export default Rating;
