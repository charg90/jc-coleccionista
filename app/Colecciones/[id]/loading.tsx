import styles from "./loader.module.css";
export default function loading() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
      </div>
    </div>
  );
}
