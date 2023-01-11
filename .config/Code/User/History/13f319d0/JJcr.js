import { useState } from "react"
import 'MenuButtonOne.module.css'

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