import { useState, useEffect } from "react";

import Loader from "../../UI/Loader/Loader";

import styles from "./TopMovieCard.module.css";

function TopMovieCard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, [isLoading]);

  return (
    <div className={styles.movieCardCont}>{isLoading ? <Loader /> : null}</div>
  );
}

export default TopMovieCard;
