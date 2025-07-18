import styles from "@/styles/Card.module.css";

export default function Card({ title, content }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardBar}>
        <h2> {title}</h2>
      </div>
      <div className={styles.cardContent}>{content}</div>
    </div>
  );
}
