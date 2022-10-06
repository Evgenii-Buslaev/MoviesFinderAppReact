import styles from "./ImageButton.module.css";

function ImageButton({ path, alt, title, click }) {
  return (
    <button className={styles.imgBtn} title={title} onClick={click}>
      <img src={path} alt={alt}></img>
    </button>
  );
}

export default ImageButton;
