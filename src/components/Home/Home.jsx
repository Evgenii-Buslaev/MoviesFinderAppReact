import { useState, useEffect, useContext } from "react";

import TopList from "../TopList/TopList";
import PacketList from "../PacketList/PacketList";
import { AppContext } from "../../utils/context";
import { homeInitialData } from "../../utils/store";

import styles from "./Home.module.css";

function Home({ width, loading }) {
  const { APIdata } = useContext(AppContext);
  const [data, setData] = useState(homeInitialData);

  useEffect(() => {
    if (!loading) {
      setData(APIdata);
    }
  }, [loading]);

  return (
    <div className={styles.home}>
      <TopList list={data.top.items} loading={loading} />
      <PacketList
        isLoading={loading}
        title="Топ-20 комедий"
        screen={width}
        list={data.comedies.items}
      />
      <PacketList
        isLoading={loading}
        title="Топ-20 российских сериалов"
        screen={width}
        list={data.series.items}
      />
      <PacketList
        isLoading={loading}
        title="Топ-20 мультфильмов"
        screen={width}
        list={data.cartoons.items}
      />
      <PacketList
        isLoading={loading}
        title="Топ-20 советских детективов"
        screen={width}
        list={data.detectives.items}
      />
    </div>
  );
}

export default Home;
