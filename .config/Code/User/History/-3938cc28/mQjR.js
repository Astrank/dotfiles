import styles from "../styles/MenuButtonThree.module.css";

export default function MenuButtonThree() {
  return (
    <div className={styles.item}>
      <button
        className={`${styles.menu_button} ${styles.menu_trigger}`}
        id="menu07"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}
