import { useState } from "react"

export default function MenuButtonOne() {
    const [isNavOpen, toggleNav] = useState();

    return (
        <button className={`btn-one ${isOneToggled ? 'open' : 'not-open'}`} onClick={() => toggleOne(!isOneToggled)}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}