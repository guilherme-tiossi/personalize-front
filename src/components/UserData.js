import styles from "@/styles/UserData.module.css";

export default function UserData() {
  return (
    <div className={styles.base}>
      <div className={styles.header}> </div>
      <div className={styles.userData}>
        <img src="apple.jpg" className={styles.profilePicture}></img>
        <p className={styles.username}> defaultUsername </p>
        <p className={styles.bio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          malesuada pulvinar justo id dignissim. Quisque mollis elit turpis, in
          ullamcorper.
        </p>
        <a href="/login">update data</a>
      </div>
    </div>
  );
}
