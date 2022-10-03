import { useState, useEffect } from "react";

import TopList from "../TopList/TopList";
import PacketList from "../PacketList/PacketList";
import NavBar from "../NavBar/NavBar";
import NavBarMob from "../NavBarMob/NavBarMob";
import OptionsBar from "../OptionsBar/OptionsBar";

import styles from "./Home.module.css";

function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  const navigation =
    width > 800 ? (
      <NavBar />
    ) : (
      <>
        <NavBarMob />
        <OptionsBar />
      </>
    );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.home}>
      {navigation}
      <TopList />
      <PacketList title="Топ-20 романтических комедий" screen={width} />
      <PacketList title="Топ-20 российских сериалов" screen={width} />
      <PacketList title="Топ-20 детских мультфильмов" screen={width} />
      <PacketList title="Топ-20 советских детективов" screen={width} />
    </div>
  );
}

export default Home;
