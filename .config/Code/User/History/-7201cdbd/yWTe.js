import { useState } from "react";
import styles from "../styles/Squeeze.module.css";

export default function Squeeze() {
    const [isNavOpen, toggleNav] = useState();

    return (
        <button
            className={`${styles.hamburger} ${styles.hamburger__squeeze} ${
                isNavOpen ? styles.is_active : ""
            }`}
            type="button"
            onClick={() => toggleNav(!isNavOpen)}
        >
            <span className={styles.hamburger_box}>
                <span className={styles.hamburger_inner}></span>
            </span>
        </button>
    );
}
