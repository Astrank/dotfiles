import { useState } from "react"
import styles from '../styles/MenuButtonOne.module.css'

export default function MenuButtonOne() {
    const [isNavOpen, toggleNav] = useState();

    return (
        <button className={`btn-two ${isOneToggled ? 'toggled' : 'not-toggled'}`} onClick={() => toggleTwo(!isTwoToggled)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
    )
}