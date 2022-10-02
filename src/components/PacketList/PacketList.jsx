import styles from "./PacketList.module.css";

function PacketList({ title }) {
  return (
    <div className={styles.listCont}>
      <h2>{title}</h2>
      <div className={styles.list}></div>
    </div>
  );
}

export default PacketList;
