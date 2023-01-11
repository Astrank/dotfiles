import { useState } from "react"
import styles from '../styles/MenuButtonOne.module.css'

export default function MenuButtonOne() {
    const [isNavOpen, toggleNav] = useState();

    return (
        <button className={`${styles.menu_button} ${isNavOpen ? styles.open : styles.not_open}`} onClick={() => toggleNav(!isNavOpen)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
    )
}