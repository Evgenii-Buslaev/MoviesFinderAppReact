import TopList from "../TopList/TopList";
import PacketList from "../PacketList/PacketList";

import styles from "./Home.module.css";

function Home({ width }) {
  return (
    <div className={styles.home}>
      <TopList />
      <PacketList title="Топ-20 романтических комедий" screen={width} />
      <PacketList title="Топ-20 российских сериалов" screen={width} />
      <PacketList title="Топ-20 детских мультфильмов" screen={width} />
      <PacketList title="Топ-20 советских детективов" screen={width} />
    </div>
  );
}

export default Home;
