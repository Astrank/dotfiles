import { useState } from "react"
import styles from 'MenuButtonOne.module.css'

export default function MenuButtonOne() {
    const [isNavOpen, toggleNav] = useState();

    return (
        <button className={`btn-one ${isOneToggled ? 'open' : 'not-open'}`} onClick={() => toggleNav(!isNavOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}