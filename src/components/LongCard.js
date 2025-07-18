import styles from "@/styles/LongCard.module.css";

export default function LongCard({ title, content }) {
  return (
    <div className={styles.longCard}>
      <div className={styles.longCardBar}>
        <h2> {title}</h2>
      </div>
      <div className={styles.longCardContent}>{content}</div>
    </div>
  );
}
