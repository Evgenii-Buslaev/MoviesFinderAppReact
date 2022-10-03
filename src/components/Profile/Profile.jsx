import InlineList from "../InlineList/InlineList";
import InlineListItem from "../InlineListItem/InlineListItem";

import styles from "./Profile.module.css";

function Profile({ name }) {
  return (
    <div className={styles.profileCont}>
      <h1>Здравствуйте, {name}!</h1>
      <button className={styles.logout}>Выйти</button>
      <h2>Вы сохранили:</h2>
      <InlineList>
        <InlineListItem
          name="Берегись автомобиля"
          country="СССР"
          year={1984}
          duration="1 ч. 23 мин."
        />
      </InlineList>
    </div>
  );
}

export default Profile;
