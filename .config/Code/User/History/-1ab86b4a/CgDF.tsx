import { useEffect, useRef, useState } from "react";
import { useTheory } from "../utils/Theory";

type KeyProps = {
    chord: number,
    degree: string,
}

const Degree = ({chord, degree}: KeyProps) => {
    const { scaleChords, highlightedNotes, toggleHighlight } = useTheory();

    return (
        <button 
            className={`min-w-20 py-5 rounded text-white 
                        ${highlightedNotes.includes(chord) ? `bg-${degree} : "bg-neutral-800"}`}
            onClick={() => toggleHighlight(chord)}>
                {scaleChords[chord]}
        </button>
    )
}

export default Degree;