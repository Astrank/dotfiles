import { useState } from "react";

type NoteProps = {
    note: string,
    highlighted: boolean,
    degree?: string,
}

const Note = ({note, highlighted, degree}: NoteProps) => {
    const [isHighlighted, toggleHighlight] = useState(highlighted);

    return (
        <div 
            onClick={() => toggleHighlight(!isHighlighted)}
            className={`flex justify-center items-center w-7 h-7 text-white text-sm rounded-full cursor-pointer
                        ${isHighlighted && degree ? `bg-${degree}` : isHighlighted ? "bg-sky-400" : "bg-neutral-800"}`}>
            <span className={isHighlighted ? "" : "hidden"}>{note}</span>
            <span className="actual-string"></span>
        </div>
    )
}

export default Note;