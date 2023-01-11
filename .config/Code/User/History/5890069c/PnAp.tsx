import { useState } from "react";

type NoteProps = {
    note: string,
    highlighted: boolean,
    degree?: string,
}

const Note = ({note, highlighted, degree}: NoteProps) => {
    const [isHighlighted, toggleHighlight] = useState(highlighted);

    return (
        <div onClick={() => toggleHighlight(!isHighlighted)}
            className={`flex justify-center items-center w-7 h-7 text-white text-sm rounded-full
                            ${isHighlighted && degree ? `bg-${degree}` : "bg-neutral-800"}`}>
            <button className="note" >
                <span className={isHighlighted ? "" : "hidden"}>{note}</span>
            </button>
            <span className="actual-string"></span>
        </div>
    )
}

export default Note;