import { useContext } from "react";
import { AppContext } from "../../utils/context";
import styles from "./Profile.module.css";

function Profile({ name }) {
  const { logout } = useContext(AppContext);
  return (
    <div className={styles.profileCont}>
      <h1>Здравствуйте, {name}!</h1>
      <button className={styles.logout} onClick={logout}>
        Выйти
      </button>
    </div>
  );
}

export default Profile;
