import styles from "@/styles/Form.module.css";

export default function LoginForm() {
  return (
    <form className={styles.form}>
      <div className={styles.formContent}>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="password"></input>
        <a href="/user">login</a>
      </div>
    </form>
  );
}
