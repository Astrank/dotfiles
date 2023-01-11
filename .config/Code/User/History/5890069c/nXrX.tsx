import { useState } from "react";

const Note = (note: string, highlighted: boolean, degree?: string) => {
    const [isHighlighted, toggleHighlight] = useState(highlighted);

    return (
        <div className={`flex justify-center items-center w-7 h-7 text-white text-sm rounded-full
                            ${isHighlighted && degree ? `bg-${degree}` : "bg-neutral-800"}`}>
            <button className="note" onClick={() => toggleHighlight(!isHighlighted)}>
                <span className={isHighlighted ? "" : "hidden"}>{note}</span>
            </button>
        </div>
    )
}

export default Note;