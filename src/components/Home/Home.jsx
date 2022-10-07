import TopList from "../TopList/TopList";
import PacketList from "../PacketList/PacketList";

import styles from "./Home.module.css";

function Home({ width }) {
  return (
    <div className={styles.home}>
      <TopList />
      <PacketList title="Топ-20 комедий" screen={width} filter="comedies" />
      <PacketList
        title="Топ-20 российских сериалов"
        screen={width}
        filter="russian series"
      />
      <PacketList
        title="Топ-20 мультфильмов"
        screen={width}
        filter="childrens cartoons"
      />
      <PacketList
        title="Топ-20 советских детективов"
        screen={width}
        filter="soviet detective"
      />
    </div>
  );
}

export default Home;
