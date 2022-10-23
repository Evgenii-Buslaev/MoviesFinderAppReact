import { useState } from "react";
import styles from "./Login.module.css";

function Login({ login }) {
  const [name, setName] = useState("EvgeniiBuslaev");
  const [password, setPassword] = useState("0123456789");

  function loginApp(e) {
    e.preventDefault();
    login();
  }

  return (
    <div className={styles.cont}>
      <div className={styles.blur}></div>
      <form className={styles.form} onSubmit={(e) => loginApp(e)}>
        <input
          className={styles.input}
          type="text"
          placeholder="Логин"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          className={styles.input}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className={styles.submit}
          type="submit"
          onClick={(e) => loginApp(e)}
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
