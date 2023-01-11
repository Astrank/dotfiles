import { useState } from "react"
import styles from '../styles/MenuButtonTwo.module.css'

export default function MenuButtonOne() {
    const [isNavOpen, toggleNav] = useState();

    return (
        <button className={`${styles.menu_button} ${isNavOpen ? styles.open : ''}`} onClick={() => toggleNav(!isNavOpen)}>
            <span aria-hidden="true"></span>
        </button>
    )
}