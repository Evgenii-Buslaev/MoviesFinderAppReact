import ImageButton from "../../UI/ImageButton/ImageButton";
import RouterLink from "../../UI/RouterLink/RouterLink";
import styles from "./NavBarMobItem.module.css";

function NavBarMobItem({ text, routerPath, imgPath, alt, active }) {
  return (
    <div
      className={active ? `${styles.navItem} ${styles.active}` : styles.navItem}
      key={text}
    >
      <RouterLink path={routerPath}>
        <ImageButton path={imgPath} alt={alt} title={text} />
      </RouterLink>
    </div>
  );
}

export default NavBarMobItem;
