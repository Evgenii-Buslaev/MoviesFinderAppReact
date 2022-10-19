import styles from "./VideoWidget.module.css";

function VideoWidget({ src, name }) {
  console.log(src);
  return (
    <>
      <h3>{name}</h3>
      <iframe
        className={styles.widget}
        title="Трейлер"
        src={src}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default VideoWidget;
