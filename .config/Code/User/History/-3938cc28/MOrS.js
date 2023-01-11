import { useState } from "react";
import styles from "../styles/MenuButtonOne.module.css";

export default function MenuButtonOne() {
    const [isNavOpen, toggleNav] = useState();

    return (
        <button
            className={`${styles.btn_one} ${
                isNavOpen ? styles.open : styles.not_open
            }`}
            onClick={() => toggleNav(!isNavOpen)}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}
