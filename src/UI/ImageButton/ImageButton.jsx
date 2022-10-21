import styles from "./ImageButton.module.css";

function ImageButton({ path, alt, title, id, click }) {
  return (
    <button className={styles.imgBtn} title={title} onClick={click}>
      <img src={path} alt={alt} id={id}></img>
    </button>
  );
}

export default ImageButton;
