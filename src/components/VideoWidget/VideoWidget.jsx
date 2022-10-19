import styles from "./VideoWidget.module.css";

function VideoWidget({ src }) {
  console.log(src);
  return <iframe src={src} frameBorder="0" allowFullScreen></iframe>;
}

export default VideoWidget;
