import { useEffect, useRef, useState } from "react";
import { useTheory } from "../utils/Theory";

type KeyProps = {
    chord: number,
    degree: string,
}

const Degree = ({chord, degree}: KeyProps) => {
    const { scaleChords, highlightedNotes, setHighlightedNotes } = useTheory();

    const toggleHighlight = () => {
        let clone = highlightedNotes;
        clone.splice(chord, 1, !highlightedNotes[chord]);
        
        setHighlightedNotes(clone)
    }

    useEffect(() => {
        console.log(highlightedNotes)
    })

    return (
        <button 
            className={`min-w-20 py-5 rounded bg-neutral-800 text-white 
                        ${highlightedNotes[chord] ? degree : ""}`}
            onClick={() => toggleHighlight()}>
                {scaleChords[chord]}
        </button>
    )
}

export default Degree;