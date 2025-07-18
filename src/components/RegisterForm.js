import styles from "@/styles/Form.module.css";

export default function RegisterForm() {
  return (
    <form className={styles.form}>
      <div className={styles.formContent}>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="password"></input>
        <input type="text" placeholder="confirm password"></input>
        <a>register</a>
      </div>
    </form>
  );
}
