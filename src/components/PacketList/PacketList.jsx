import { useState, useEffect } from "react";

import PacketMovieCard from "../PacketMovieCard/PacketMovieCard";
import PacketMovieImage from "../PacketMovieImage/PacketMovieImage";
import ImageButton from "../../UI/ImageButton/ImageButton";
import { getCardsAmount } from "../../utils/getCardsAmount";
import { getItems } from "../../handlers/getItems";
import { scrollLists } from "../../handlers/scrollLists";

import styles from "./PacketList.module.css";

import more from "../../icons/PacketList/more.png";
import less from "../../icons/PacketList/less.png";

function PacketList({ filter, title, screen }) {
  const [list, setList] = useState([]);
  const [part, setPart] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const amount = getCardsAmount(screen, 150);
  const cardsList = [];
  while (cardsList.length < amount) {
    cardsList.push(<PacketMovieCard key={Math.random()} />);
  }

  useEffect(() => {
    getItems(filter, setList, setIsLoading);
    return setIsLoading(true);
  }, [filter]);

  const visibleList = isLoading
    ? cardsList
    : list.items
        .slice(part, amount + part)
        .map((elem) => (
          <PacketMovieImage
            id={elem.kinopoiskId}
            path={elem.posterUrl}
            key={elem.kinopoiskId}
          />
        ));

  return (
    <div className={styles.listCont}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        <ImageButton
          path={less}
          alt="previous movie"
          title="Предыдущий фильм"
          click={() => scrollLists(false, list.items, part, setPart, amount)}
        />
        <div className={styles.items}>{visibleList}</div>
        <ImageButton
          path={more}
          alt="next movie"
          title="Следующий фильм"
          click={() => scrollLists(true, list.items, part, setPart, amount)}
        />
      </div>
    </div>
  );
}

export default PacketList;
