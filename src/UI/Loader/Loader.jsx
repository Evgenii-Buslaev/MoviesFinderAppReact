import { SpinnerDotted } from "spinners-react";

import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.cont}>
      <SpinnerDotted speed={150} />
    </div>
  );
}

export default Loader;
