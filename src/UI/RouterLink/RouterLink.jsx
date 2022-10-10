import { Link } from "react-router-dom";
import styles from "./RouterLink.module.css";

function RouterLink({ onClick, path, children }) {
  return (
    <Link to={path} className={styles.link} onClick={onClick}>
      {children}
    </Link>
  );
}

export default RouterLink;
