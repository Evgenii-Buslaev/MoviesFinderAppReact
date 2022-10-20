import { useContext } from "react";
import { AppContext } from "../../utils/context";

import DataContainer from "../DataContainer/DataContainer";
import styles from "./Profile.module.css";

function Profile({ name }) {
  const { logout } = useContext(AppContext);

  return (
    <div className={styles.profileCont}>
      <h1>Здравствуйте, {name}!</h1>
      <div className={styles.data}>
        <DataContainer header="Личные данные" path="/profile/person/" />
        <DataContainer header="Подписки" path="/profile/subscriptions/" />
        <DataContainer header="Просмотры" path="/profile/views/" />
      </div>

      <button className={styles.logout} onClick={logout}>
        Выйти
      </button>
    </div>
  );
}

export default Profile;
