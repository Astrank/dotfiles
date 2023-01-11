import { useState } from "react"

export default function MenuButtonOne() {
    const [isNavOpen, toggleNav] = useState();

    return (
        <button className={`btn-one ${isOneToggled ? 'toggled' : 'not-toggled'}`} onClick={() => toggleOne(!isOneToggled)}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}