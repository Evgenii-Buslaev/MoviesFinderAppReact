import PacketMovieCard from "../PacketMovieCard/PacketMovieCard";
import ImageButton from "../../UI/ImageButton/ImageButton";
import RouterLink from "../../UI/RouterLink/RouterLink";
import { getCardsAmount } from "../../utils/getCardsAmount";

import styles from "./PacketList.module.css";

import more from "../../icons/PacketList/more.png";
import less from "../../icons/PacketList/less.png";

function PacketList({ title, screen }) {
  const amount = getCardsAmount(screen, 150);

  const cardsList = [];
  while (cardsList.length < amount) {
    cardsList.push(
      <RouterLink path="/id" key={Math.random()}>
        <PacketMovieCard />
      </RouterLink>
    );
  }

  return (
    <div className={styles.listCont}>
      <h2>{title}</h2>
      <div className={styles.list}>
        <ImageButton
          path={less}
          alt="previous movie"
          title="Предыдущий фильм"
        />
        <div className={styles.items}>{cardsList}</div>
        <ImageButton path={more} alt="next movie" title="Следующий фильм" />
      </div>
    </div>
  );
}

export default PacketList;
