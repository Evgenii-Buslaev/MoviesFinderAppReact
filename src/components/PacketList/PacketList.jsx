import { useState, useEffect } from "react";

import PacketMovieCard from "../PacketMovieCard/PacketMovieCard";
import PacketMovieImage from "../PacketMovieImage/PacketMovieImage";
import ImageButton from "../../UI/ImageButton/ImageButton";
import RouterLink from "../../UI/RouterLink/RouterLink";
import { getCardsAmount } from "../../utils/getCardsAmount";
import { getItems } from "../../handlers/getItems";

import styles from "./PacketList.module.css";

import more from "../../icons/PacketList/more.png";
import less from "../../icons/PacketList/less.png";

function PacketList({ title, screen }) {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const amount = getCardsAmount(screen, 150);

  const cardsList = [];
  while (cardsList.length < amount) {
    cardsList.push(
      <RouterLink path="/id" key={Math.random()}>
        <PacketMovieCard />
      </RouterLink>
    );
  }

  useEffect(() => {
    getItems("premiers", setList, setIsLoading);
  }, []);

  return (
    <div className={styles.listCont}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        <ImageButton
          path={less}
          alt="previous movie"
          title="Предыдущий фильм"
        />
        <div className={styles.items}>
          {isLoading
            ? cardsList
            : list.items.map((elem, index) => {
                if (index < amount) {
                  return (
                    <PacketMovieImage path={elem.posterUrl} key={elem.nameRu} />
                  );
                }
              })}
        </div>
        <ImageButton path={more} alt="next movie" title="Следующий фильм" />
      </div>
    </div>
  );
}

export default PacketList;
