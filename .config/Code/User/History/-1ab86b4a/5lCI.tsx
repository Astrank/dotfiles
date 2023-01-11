import { useEffect, useRef, useState } from "react";
import { useTheory } from "../utils/Theory";

type KeyProps = {
    chord: number,
    degree: string,
}

const Degree = ({chord, degree}: KeyProps) => {
    const { scaleChords, highlightedNotes, toggleHighlight } = useTheory();

    useEffect(() => {
        console.log(highlightedNotes)
    })

    return (
        <button 
            className={`min-w-20 py-5 rounded bg-neutral-800 text-white 
                        ${highlightedNotes[chord] ? degree : ""}`}
            onClick={() => toggleHighlight(chord)}>
                {scaleChords[chord]}
        </button>
    )
}

export default Degree;