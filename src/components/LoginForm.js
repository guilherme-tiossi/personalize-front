import styles from "@/styles/LoginForm.module.css";

export default function LoginForm() {
  return (
    <form className={styles.loginForm}>
      <input type="text"></input>
      <input type="text"></input>
      <button>login</button>
    </form>
  );
}
