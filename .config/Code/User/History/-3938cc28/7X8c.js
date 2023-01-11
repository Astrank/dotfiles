import { useState } from "react";
import styles from "../styles/MenuButtonThree.module.css";

export default function MenuButtonOne() {
    const [isNavOpen, toggleNav] = useState();

    return (
        <button
            className={`hamburger hamburger--collapse hamburger--3dy ${
                isNavOpen ? "is-active" : ""
            }`}
            type="button"
        >
            <span className={styles.hamburger_box}>
                <span className={styles.hamburger_inner}></span>
            </span>
        </button>
    );
}
