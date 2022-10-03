import ImageButton from "../../UI/ImageButton/ImageButton";
import RouterLink from "../../UI/RouterLink/RouterLink";

import styles from "./NavButtons.module.css";
import user from "../../icons/profile/user.png";
import saved from "../../icons/saved/saved.png";

function NavButtons() {
  return (
    <div className={styles.buttons}>
      <RouterLink path="/profile">
        <ImageButton path={user} alt="user btn" title="Профиль" />
      </RouterLink>
      <RouterLink path="/collection">
        <ImageButton path={saved} alt="saved btn" title="Коллекция" />
      </RouterLink>
    </div>
  );
}

export default NavButtons;
