import { useEffect, useState } from "react";
import { useTheory } from "../utils/Theory";

type NoteProps = {
    note: string,
    noteIndex: number,
    highlighted: boolean,
    degree?: string,
}

const Note = ({note, noteIndex, highlighted, degree}: NoteProps) => {
    const [isHighlighted, toggleHighlight] = useState(highlighted);
    const { scaleNotes } = useTheory();

    return (
        <div 
            onClick={() => toggleHighlight(!isHighlighted)}
            className={`flex justify-center items-center w-7 h-7 text-white text-sm rounded-full cursor-pointer
                        ${!scaleNotes.includes(noteIndex) ? "bg-transparent cursor-default" : highlighted ? degree : isHighlighted ? "bg-neutral-400" : "bg-neutral-800"}`}>
            <span className={highlighted ? "" : "hidden"}>{note}</span>
            <span className="actual-string"></span>
        </div>
    )
}

export default Note;