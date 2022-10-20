import { useState, useEffect } from "react";

import close from "../../icons/modal/close.png";
import styles from "./ModalWindow.module.css";

function ModalWindow() {
  const [openned, setOpenned] = useState(true);

  const closeWindow = () => {
    setOpenned(false);
  };

  useEffect(() => {
    setTimeout(closeWindow, 3000);
  }, []);

  return (
    <>
      {openned ? (
        <div className={styles.window}>
          <img src={close} alt="close" onClick={closeWindow}></img>
          <h2> Свайпайте, чтобы смотреть все премьеры </h2>
        </div>
      ) : null}
    </>
  );
}

export default ModalWindow;
