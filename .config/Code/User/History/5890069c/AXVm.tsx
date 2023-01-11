import { useState } from "react";

const Note = (note: string, highlighted: boolean, degree: string) => {
    const [isHighlighted, toggleHighlight] = useState(highlighted);

    return (
        <div className={`flex justify-center items-center text-white text-sm rounded-full w-7 h-7
                            ${isHighlighted ? `bg-${degree}` : "bg-neutral-800"}`}>
            <button className="note" onClick={() => toggleHighlight(!isHighlighted)}>
                <span className={isHighlighted ? "" : "hidden"}>{note}</span>
            </button>
            <span className="actual-string"></span>
        </div>
    )
}

export default Note;