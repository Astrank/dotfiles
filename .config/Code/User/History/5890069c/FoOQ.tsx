import { useState } from "react";
import Theory from "../public/data.json";

type NoteProps = {
    note: number,
    highlighted: boolean,
    degree?: string,
}

const Note = ({note, highlighted, degree}: NoteProps) => {
    const [isHighlighted, toggleHighlight] = useState(highlighted);

    return (
        <div 
            onClick={() => toggleHighlight(!isHighlighted)}
            className={`flex justify-center items-center w-7 h-7 text-white text-sm rounded-full cursor-pointer
                        ${isHighlighted && degree ? `bg-${degree}` : isHighlighted ? "bg-neutral-300" : "bg-neutral-800"}`}>
            <span className={isHighlighted ? "" : "hidden"}>{Theory.notes[note]}</span>
            <span className="actual-string"></span>
        </div>
    )
}

export default Note;