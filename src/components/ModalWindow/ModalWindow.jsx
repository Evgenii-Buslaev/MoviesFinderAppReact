import close from "../../icons/modal/close.png";
import styles from "./ModalWindow.module.css";

function ModalWindow() {
  return (
    <div className={styles.window}>
      <img src={close} alt="close"></img>
      <h2> Свайпайте, чтобы смотреть все премьеры </h2>
    </div>
  );
}

export default ModalWindow;
