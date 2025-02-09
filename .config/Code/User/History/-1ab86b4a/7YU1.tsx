import { useEffect, useRef, useState } from "react";
import { useTheory } from "../utils/Theory";

type KeyProps = {
    chord: number,
    degree: string,
}

const Degree = ({chord, degree}: KeyProps) => {
    const { scaleNotes, scaleChords, highlightedNotes, toggleHighlight } = useTheory();

    return (
        <button 
            className={`min-w-20 py-5 rounded text-white 
                        ${highlightedNotes.includes(chord) ? degree : "bg-neutral-800"}`}
            onClick={() => toggleHighlight(scaleNotes[chord])}>
                {scaleChords[chord]}
        </button>
    )
}

export default Degree;