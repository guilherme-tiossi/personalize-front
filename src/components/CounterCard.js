import styles from "@/styles/CounterCard.module.css";

export default function CounterCard({ title, content }) {
  return (
    <div className={styles.centralize}>
      <div className={styles.card}>
        <div className={styles.cardBar}>
          <h2> {title}</h2>
        </div>
        <div className={styles.cardContent}>{content}</div>
      </div>
    </div>
  );
}
