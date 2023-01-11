import { useState } from "react";

type KeyProps = {
    chord: string,
    degree: string,
}

const Degree = ({chord, degree}: KeyProps) => {
    const [isActive, toggleActive] = useState<boolean>(false);

    return (
        <button 
            className={`min-w-20 py-5 rounded bg-black text-white ${isActive ? degree : ""}`}
            onClick={() => toggleActive(!isActive)}>
                {chord}
        </button>
    )
}

export default Degree;