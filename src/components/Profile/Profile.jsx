import styles from "./Profile.module.css";

function Profile({ name }) {
  return (
    <div className={styles.profileCont}>
      <h1>Здравствуйте, {name}!</h1>
      <button className={styles.logout}>Выйти</button>
    </div>
  );
}

export default Profile;
