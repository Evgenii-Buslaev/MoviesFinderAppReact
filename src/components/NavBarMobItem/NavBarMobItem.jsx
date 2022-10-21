import ImageButton from "../../UI/ImageButton/ImageButton";
import styles from "./NavBarMobItem.module.css";

function NavBarMobItem({ data, click }) {
  const { id, img, alt, text, active } = data;

  return (
    <div
      className={active ? `${styles.navItem} ${styles.active}` : styles.navItem}
      key={text}
      id={id}
      onClick={click}
    >
      <ImageButton path={img} alt={alt} title={text} id={id} click={click} />
    </div>
  );
}

export default NavBarMobItem;
