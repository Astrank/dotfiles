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

    useEffect(() => {
        console.log(highlighted)
    })

    return (
        <div 
            onClick={() => toggleHighlight(!isHighlighted)}
            className={`flex justify-center items-center w-7 h-7 text-white text-sm rounded-full cursor-pointer
                        ${!scaleNotes.includes(noteIndex) ? "bg-transparent cursor-default" : isHighlighted && degree ? `bg-red-300` : isHighlighted ? "bg-neutral-400" : "bg-neutral-800"}`}>
            <span className={isHighlighted ? "" : "hidden"}>{note}</span>
            <span className="actual-string"></span>
        </div>
    )
}

export default Note;