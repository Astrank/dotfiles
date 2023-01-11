import { useState } from "react";

type KeyProps = {
    chord: string,
    degree: string,
}

const Degree = ({chord, degree}: KeyProps) => {
    const [isActive, toggleActive] = useState(false);

    return (
        <button 
            className={`min-w-20 py-5 rounded bg-black text-white ${isActive ? degree : ""}`}>
                {chord}
        </button>
    )
}

export default Degree;