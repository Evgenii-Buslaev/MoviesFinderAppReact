import { useState, useEffect } from "react";

import TopList from "../TopList/TopList";
import PacketList from "../PacketList/PacketList";
import { getItems } from "../../handlers/getItems";

import styles from "./Home.module.css";

function Home({ width }) {
  const [comediesList, setComediesList] = useState([]);
  const [seriesList, setSeriesList] = useState([]);
  const [cartoonsList, setCartoonsList] = useState([]);
  const [detectiveList, setDetectiveList] = useState([]);

  const [isLoadingComedies, setIsLoadingComedies] = useState(true);
  const [isLoadingSeries, setIsLoadingSeries] = useState(true);
  const [isLoadingCartoons, setIsLoadingCartoons] = useState(true);
  const [isLoadingDetectives, setIsLoadingDetectives] = useState(true);

  useEffect(() => {
    if (isLoadingComedies) {
      getItems(1, "comedies", setComediesList, setIsLoadingComedies);
      getItems(1, "russian series", setSeriesList, setIsLoadingSeries);
      getItems(1, "childrens cartoons", setCartoonsList, setIsLoadingCartoons);
      getItems(1, "soviet detective", setDetectiveList, setIsLoadingDetectives);
    }
  }, [isLoadingComedies]);

  return (
    <div className={styles.home}>
      <TopList />
      <PacketList
        isLoading={isLoadingComedies}
        title="Топ-20 комедий"
        screen={width}
        list={comediesList.items}
      />
      <PacketList
        isLoading={isLoadingSeries}
        title="Топ-20 российских сериалов"
        screen={width}
        list={seriesList.items}
      />
      <PacketList
        isLoading={isLoadingCartoons}
        title="Топ-20 мультфильмов"
        screen={width}
        list={cartoonsList.items}
      />
      <PacketList
        isLoading={isLoadingDetectives}
        title="Топ-20 советских детективов"
        screen={width}
        list={detectiveList.items}
      />
    </div>
  );
}

export default Home;
