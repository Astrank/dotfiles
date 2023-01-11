import { useEffect, useRef, useState } from "react";
import { useTheory } from "../utils/Theory";

type KeyProps = {
    chord: number,
    degree: number,
}

const Degree = ({chord, degree}: KeyProps) => {
    const [isActive, toggleActive] = useState<boolean>(false);

    const { scaleChords } = useTheory();

    return (
        <button 
            className={`min-w-20 py-5 rounded bg-neutral-800 text-white ${isActive ? degree : ""}`}
            onClick={() => toggleActive(!isActive)}>
                {scaleChords[chord]}
        </button>
    )
}

export default Degree;