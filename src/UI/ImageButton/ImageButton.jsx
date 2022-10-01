import styles from "./ImageButton.module.css";

function ImageButton({ path, alt, title }) {
  return (
    <button className={styles.imgBtn} title={title}>
      <img src={path} alt={alt}></img>
    </button>
  );
}

export default ImageButton;
