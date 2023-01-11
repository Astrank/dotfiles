import { useState } from "react";
import styles from "../styles/MenuButtonOne.module.css";

export default function MenuButtonOne() {
    const [isNavOpen, toggleNav] = useState();

    return (
        <button class="hamburger hamburger--collapse" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    );
}
