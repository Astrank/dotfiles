import { useState } from "react";
import styles from "../styles/MenuButtonThree.module.css";

export default function MenuButtonOne() {
    const [isNavOpen, toggleNav] = useState();

    return (
        <button
            class={`hamburger hamburger--collapse hamburger--3dy ${
                isNavOpen ? "is-active" : ""
            }`}
            type="button"
        >
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    );
}
