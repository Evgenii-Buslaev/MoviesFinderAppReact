import { useState } from "react";

import PacketMovieCard from "../PacketMovieCard/PacketMovieCard";
import PacketMovieImage from "../PacketMovieImage/PacketMovieImage";
import ImageButton from "../../UI/ImageButton/ImageButton";
import { getCardsAmount } from "../../utils/getCardsAmount";
import { scrollLists } from "../../handlers/scrollLists";

import styles from "./PacketList.module.css";

import more from "../../icons/PacketList/more.png";
import less from "../../icons/PacketList/less.png";

function PacketList({ isLoading, list, title, screen }) {
  const [part, setPart] = useState(1);

  const amount = getCardsAmount(screen, 150);
  const cardsList = [];
  while (cardsList.length < amount) {
    cardsList.push(<PacketMovieCard key={Math.random()} />);
  }

  const visibleList = isLoading
    ? cardsList
    : list
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
      {list.length ? (
        <div className={styles.list}>
          <ImageButton
            path={less}
            alt="previous movie"
            title="Предыдущий фильм"
            click={() => scrollLists(false, list, part, setPart, amount)}
          />
          <div className={styles.items}>{visibleList}</div>
          <ImageButton
            path={more}
            alt="next movie"
            title="Следующий фильм"
            click={() => scrollLists(true, list, part, setPart, amount)}
          />
        </div>
      ) : null}
    </div>
  );
}

export default PacketList;
