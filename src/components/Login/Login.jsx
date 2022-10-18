import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.cont}>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Логин"></input>
        <input
          className={styles.input}
          type="password"
          placeholder="Пароль"
        ></input>
        <button className={styles.submit} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
