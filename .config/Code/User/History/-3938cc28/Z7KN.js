import { useState } from "react";
import styles from "../styles/MenuButtonThree.module.css";

export default function MenuButtonOne() {
    const [isNavOpen, toggleNav] = useState();

    return (
        <button
            className={`${styles.hamburger} ${styles.hamburger__3dy} ${
                isNavOpen ? styles.is_active : ""
            }`}
            type="button"
        >
            <span className={styles.hamburger_box}>
                <span className={styles.hamburger_inner}></span>
            </span>
        </button>
    );
}
