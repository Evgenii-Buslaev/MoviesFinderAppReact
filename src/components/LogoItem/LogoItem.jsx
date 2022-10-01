import logo from "../../icons/logo/logo.png";
import styles from "./LogoItem.module.css";

function LogoItem() {
  return (
    <div className={styles.logoCont}>
      <img src={logo} alt={logo}></img>
      <h1>MOVIES</h1>
    </div>
  );
}

export default LogoItem;
